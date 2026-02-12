#include "led.h"
#include "motor.h"
#include "systick.h"
#include <stdint.h>
#include "uart.h"
#include "pwm.h"
#include "i2c.h"
#include "MPU.h"
#include <stdio.h>


// void test(){
//     uart_sendstr("Start test\r\n");
    
//     uart_sendstr("Forward 5s\r\n");
//     motor_forward(30);
//     delay_ms(5000);
//     motor_stop();
//     uart_sendstr("Stop\r\n");
    
//     delay_ms(500);
    
//     uart_sendstr("Turn left 5s\r\n");
//     turn_left(30);
//     delay_ms(5000);
//     motor_stop();
//     uart_sendstr("Stop\r\n");
    
//     delay_ms(500);
    
//     uart_sendstr("Turn right 5s\r\n");
//     turn_right(30);
//     delay_ms(5000);
//     motor_stop();
//     uart_sendstr("Stop\r\n");
// }

void init(void){
    pwm_init();
    i2c_init();
    mpu6050_init();
    systick_init();    
    led_init();        
    motor_init();
    uart_init(115200);   
}


int main(void)
{
    init();  
    
    // test();

    MPU6050_Data sensor_data;
    char buffer[128];
    uart_sendstr("\r\n=== MPU6050 RAW DATA ===\r\n");
    uart_sendstr("   AX      AY      AZ   |   GX      GY      GZ   |   TEMP_RAW\r\n");
    uart_sendstr("---------------------------------------------------------------\r\n");




    while (1){
        mpu6050_read_all(&sensor_data);

        sprintf(buffer,
            "%7d %7d %7d | %7d %7d %7d | %7d\r\n",
            sensor_data.accel_x,
            sensor_data.accel_y,
            sensor_data.accel_z,
            sensor_data.gyro_x,
            sensor_data.gyro_y,
            sensor_data.gyro_z,
            sensor_data.temp);

        uart_sendstr(buffer);
        delay_ms(500);


        char c;
        while (uart_getchar(&c)) {
            uart_sendchar(c);
            if (c == '\r') uart_sendchar('\n');
        }
    }
}