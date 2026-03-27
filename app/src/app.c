#include "app.h"
#include "led.h"
#include "motor.h"
#include "systick.h"
#include <stdint.h>
#include "uart.h"
#include "pwm.h"
#include "i2c.h"
#include "MPU.h"
#include "RGB_senser.h"

#include "pid.h"
#include <stdio.h>
#include "esdev_config.h"


#define TIME_CONTROL 3000

#define speed 70 

int16_t gz_offset = 0;


#if(PID_MODE || TEST_COLOR_SENSOR)

        PID_t     pid;
        Heading_t heading;
#endif

void calibrate_gyro()
{
    int32_t sum = 0;

    for(int i = 0; i < 2000; i++)
    {
        sum += mpu6050_read_gz();
        delay_ms(1);   
    }

    gz_offset = sum / 2000;
}


void app_init(){
    systick_init();  
    pwm_init();
    i2c_init();
    i2c2_init();
    // mpu6050_init();
    // delay_ms(200);
    // calibrate_gyro();
    // uartesp_init(115200);
    // led_init();        
    motor_init();
    rgb_sensor_init();
    rgb2_sensor_init();
    uart_init(115200); 
     #if(PID_MODE || TEST_COLOR_SENSOR)
        uart_sendstr("Calibrating gyro...\r\n");
        heading_init(&heading);
        heading_calibrate(&heading, 100);   // 100 mẫu x 5ms = 0.5s
        heading_reset(&heading);
        pid_init(&pid, PID_KP, PID_KI, PID_KD,PID_INTEGRAL_LIMIT, PID_OUTPUT_LIMIT);
        uart_sendstr("Start!\r\n");
        delay_ms(500);
    #endif
}

// void test_pid(){
//     uint32_t t_start = get_tick_ms();   
//         int16_t gz_raw = mpu6050_read_gz();
//         heading_update(&heading, gz_raw, LOOP_DT_S);
//         float correction = pid_compute(&pid, heading.yaw_angle, LOOP_DT_S);
//         int16_t speed_left  = (int16_t)(BASE_SPEED - correction);
//         int16_t speed_right = (int16_t)(BASE_SPEED + correction);

        
//         if (speed_left  < 0)   speed_left  = 0;
//         if (speed_left  > 100) speed_left  = 100;
//         if (speed_right < 0)   speed_right = 0;
//         if (speed_right > 100) speed_right = 100;
//         motor_forward_pid((uint8_t)speed_left,(uint8_t)speed_right);
//         char buf[64];
//         sprintf(buf, "yaw:%.2f cor:%.2f L:%d R:%d\r\n",heading.yaw_angle, correction,speed_left, speed_right);
//         uart_sendstr(buf);
//         uint32_t elapsed = get_tick_ms() - t_start;
//         if (elapsed < LOOP_DT_MS) {
//             delay_ms(LOOP_DT_MS - elapsed);
//         }
// }

// void test_color(void){
//     static LineState_t line_state = STATE_FOLLOW;
//     static uint8_t last_seek_left = 1;
//     heading_reset(&heading);
//     pid_reset(&pid);
//     line_state = STATE_FOLLOW;

//     while (1) {
//         uint32_t t_start = get_tick_ms();
//         int color     = rgb_read_color();
//         int16_t gz_raw = mpu6050_read_gz();

//         switch (line_state) {
//             case STATE_FOLLOW:
//                 if (color == COLOR_BLUE) {
//                     heading_update(&heading, gz_raw, LOOP_DT_S);
//                     float correction = pid_compute(&pid, heading.yaw_angle, LOOP_DT_S);
//                     int16_t spd_l = (int16_t)(BASE_SPEED - correction);
//                     int16_t spd_r = (int16_t)(BASE_SPEED + correction);
//                     if (spd_l < 0)   spd_l = 0;
//                     if (spd_l > 100) spd_l = 100;
//                     if (spd_r < 0)   spd_r = 0;
//                     if (spd_r > 100) spd_r = 100;
//                     motor_forward_pid((uint8_t)spd_l, (uint8_t)spd_r);
//                 } else {                    
//                     motor_stop();
//                     delay_ms(50);
//                     if(last_seek_left){
//                         line_state= STATE_FIND_LEFT; 
//                         line_state = STATE_FIND_RIGHT;
//                     }
//                 }
//                 break;
//             case STATE_FIND_LEFT:
//                 motor_forward_pid(BASE_SPEED - SEEK_SPEED,BASE_SPEED + SEEK_SPEED);
//                 if (color == COLOR_BLUE) {
//                     last_seek_left = 1;
//                     heading_reset(&heading);    
//                     pid_reset(&pid);
//                     line_state = STATE_FOLLOW;
//                 } else {
//                     static uint32_t seek_start = 0;
//                     if (seek_start == 0) {
//                         seek_start = get_tick_ms();
//                     }

//                     if ((get_tick_ms() - seek_start) > TIME_CONTROL) {
//                         seek_start = 0;
//                         line_state = STATE_FIND_RIGHT;
//                     }
//                 }
//                 break;
//             case STATE_FIND_RIGHT:
//                 uart_sendstr("WHITE\r\n");
//                 motor_forward_pid(BASE_SPEED + SEEK_SPEED,BASE_SPEED - SEEK_SPEED);
//                 if (color == COLOR_BLUE) {
//                     last_seek_left = 0;
//                     heading_reset(&heading);
//                     pid_reset(&pid);
//                     line_state = STATE_FOLLOW;
//                 } else {
//                     static uint32_t seek_start = 0;
//                     if (seek_start == 0){
//                         seek_start = get_tick_ms();
//                     } 
//                     if ((get_tick_ms() - seek_start) > TIME_CONTROL) {
//                         seek_start = 0;
//                         motor_stop();
//                         line_state = STATE_FOLLOW;
//                     }
//                 }
//             break;
//         }
//         uint32_t elapsed = get_tick_ms() - t_start;
//         if (elapsed < LOOP_DT_MS) delay_ms(LOOP_DT_MS - elapsed);
//     }
// }

void app_run(){
    MPU6050_Data sensor_data;
    char buffer[128];
    

    while (1)
    {
        #if(PID_MODE)
            // test_pid();
            test_color();
        #endif

        #if(TEST_COLOR_SENSOR)
            test_color();
        #endif

        // move_control();
        // uart_sendstr("test log \r\n");
        // mpu6050_read_all(&sensor_data);
        // int16_t gz = sensor_data.gyro_z - gz_offset;
        // sprintf(buffer,"%7d\r\n", gz);
        // uart_sendstr(buffer);
        // checkquay(gz);
        // rgb_turn_on_led();
        // delay_ms(1000);
        rgb_read_color();
        delay_ms(1000);
        rgb2_read_color(); 
        delay_ms(1000);
        char c;
        while (uart_getchar(&c)) {
            uart_sendchar(c);
            if (c == '\r') uart_sendchar('\n');
        }  
    }
}