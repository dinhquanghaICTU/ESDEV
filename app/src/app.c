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


uint16_t RGB_1; 
uint16_t RGB_2; 
uint16_t fixcheck = 1;



typedef enum {
    YELLOW ,
    BLUE,
    GREEN,
    RED,
    WHITE,
} MyRGB;

typedef enum {
    HA_NOI,
    LUNG_CU,
    HOANG_XA,
    TRUONG_XA,
    CA_MAU,
} Mycheckpoint;


typedef struct 
{
    MyRGB color;
    Mycheckpoint checkpoint;  
}My_fsm;


void app_init(){
    systick_init();  
    
    pwm_init();
    i2c_init();
    i2c2_init();
    fsm_init();
    // mpu6050_init();
    // delay_ms(200);
    // calibrate_gyro();
    // led_init();  
       
    motor_init();
    rgb_sensor_init();
    rgb2_sensor_init();
    // uart_init(115200); 
    
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
static My_fsm fsm;
void fsm_init(void)
{
    fixcheck = 1;
    fsm.checkpoint = LUNG_CU;
}


void lungcu_check(void){
    motor_stop();
    delay_ms(1000);
    turn_right(SPEED_LIMIT);
    delay_ms(300);
    if((RGB_1 == BLUE) || (RGB_2 == BLUE)){
        uart_sendstr("BLUE1====================== \r\n");
        motor_forward(SPEED_LIMIT);
        delay_ms(500);
        fsm.checkpoint = HOANG_XA;
    }
}


void Quangha_structure(void){

    RGB_1 = rgb_read_color(); // RGB_left 
    RGB_2 = rgb2_read_color();// RGB_right

    // char buffer[100];
    // sprintf(buffer, " Quangha_structure %d, RGB1: %d , RGB_2: %d\r\n",fsm.checkpoint,RGB_1, RGB_2);
    // uart_sendstr(buffer);

   
    switch (fsm.checkpoint)
    {
    case LUNG_CU:
        if((RGB_1 == RED) && (RGB_2 == RED)){
            motor_forward(SPEED_LIMIT);
            delay_ms(300);
        }
        else if (RGB_1 == WHITE)
        {
            turn_right(SPEED_LIMIT);
            delay_ms(600);
        }
        else if (RGB_2 == WHITE)
        {
            turn_left(SPEED_LIMIT);
            delay_ms(600);
        }

        else if((RGB_2 == BLUE) && ((RGB_1 == BLUE)))
        {
            motor_stop();
            delay_ms(1000);
            // uart_sendstr("BLUE1====================== \r\n");
            turn_right(SPEED_LIMIT);
            delay_ms(700);
            turn_right(SPEED_LIMIT);
            delay_ms(400);
            fsm.checkpoint = HOANG_XA;
            
        }
        else if(RGB_2 == BLUE || RGB_1 == BLUE ){
            motor_stop();
            delay_ms(1000);
            // uart_sendstr("BLUE2====================== \r\n");
            turn_right(SPEED_LIMIT);
            delay_ms(700);
            turn_right(SPEED_LIMIT);
            delay_ms(400);
            fsm.checkpoint = HOANG_XA;
        }

        else if((RGB_2 == GREEN) && ((RGB_1 == GREEN)))
        {
            motor_stop();
            delay_ms(1000);
            // uart_sendstr("GREEN_1====================== \r\n");
            turn_right(SPEED_LIMIT);
            delay_ms(700);
            turn_right(SPEED_LIMIT);
            delay_ms(400);
            fsm.checkpoint = HOANG_XA;
        }
        else if((RGB_2 == GREEN) || ((RGB_1 == GREEN)))
        {
            motor_stop();
            delay_ms(1000);
            // uart_sendstr("GREEN_2====================== \r\n");
            turn_right(SPEED_LIMIT);
            delay_ms(700);
            turn_right(SPEED_LIMIT);
            delay_ms(400);
            fsm.checkpoint = HOANG_XA;
        }
        break;

    case HOANG_XA:
        // uart_sendstr("Hoang xa =====================\r\n");
        if((RGB_1 == BLUE) && (RGB_2 == BLUE)){
            if(fixcheck == 1){
                // motor_forward(SPEED_LIMIT);
                // delay_ms(300);
                motor_stop();
                delay_ms(1000);
            }
            motor_forward(SPEED_LIMIT);
            delay_ms(300);
        }
        else if (RGB_1 == WHITE)
        {
           
            turn_right(SPEED_LIMIT);
            delay_ms(600);
        }
        else if (RGB_2 == WHITE)
        {
            turn_left(SPEED_LIMIT);
            delay_ms(600);
        }

        else if ((RGB_1 == GREEN) && (RGB_2 == GREEN))
        {
            fsm.checkpoint = TRUONG_XA;
        }

        else if ((RGB_1 == GREEN) || (RGB_2 == GREEN))
        {
            fsm.checkpoint = TRUONG_XA;
        }
        fixcheck = 0;
        break;
    case TRUONG_XA:
        // uart_sendstr("Truong xa =====================\r\n");
        if((RGB_1 == GREEN) && (RGB_2 == GREEN)){
            motor_stop();
            delay_ms(1000);
            motor_forward(SPEED_LIMIT);
            delay_ms(300);
        }
        else if (RGB_1 == WHITE)
        {
            turn_right(SPEED_LIMIT);
            delay_ms(500);
        }
        else if (RGB_2 == WHITE)
        {   
            turn_left(SPEED_LIMIT);
            delay_ms(500);
        }

        else if ((RGB_1 == BLUE) && (RGB_2 == BLUE))
        {
            fsm.checkpoint = CA_MAU;
        }

        else if ((RGB_1 == BLUE) || (RGB_2 == BLUE))
        {
            fsm.checkpoint = CA_MAU;
        }
        
        break;
    case CA_MAU:
        if((RGB_1 == BLUE) && (RGB_2 == BLUE)){
            // uart_sendstr("Ca Mau =====================\r\n");
            motor_stop();
            delay_ms(1000);
            motor_forward(SPEED_LIMIT);
            delay_ms(300);
        }
        else if (RGB_1 == WHITE)
        {
            turn_right(SPEED_LIMIT);
            delay_ms(600);
        }
        else if (RGB_2 == WHITE)
        {
            turn_left(SPEED_LIMIT);
            delay_ms(600);
        }
        break;
    default:
        break;
   
    } 
}

void app_run(){
    MPU6050_Data sensor_data;
    char buffer[128];
        while (1)
        {
            #if(PID_MODE)
                // test_pid();
                test_color();
            #endif

            Quangha_structure();
            // move_control();
            // uart_sendstr("test log \r\n");
            // mpu6050_read_all(&sensor_data);
            // int16_t gz = sensor_data.gyro_z - gz_offset;
            // sprintf(buffer,"%7d\r\n", gz);
            // uart_sendstr(buffer);
            // checkquay(gz);
            // rgb_turn_on_led();
            // delay_ms(1000);
            // rgb_read_color();
            // delay_ms(1000);
            // rgb2_read_color();
            // delay_ms(1000);

            char c;
            while (uart_getchar(&c)) {
                uart_sendchar(c);
                if (c == '\r') uart_sendchar('\n');
            }
        }
}