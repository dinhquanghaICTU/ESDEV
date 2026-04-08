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

void app_run(){
    MPU6050_Data sensor_data;
    char buffer[128];
        while (1)
        {
            
            // Quangha_structure();
            motor_forward(100);
            delay_ms(10000);
            // fix_left(100);
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