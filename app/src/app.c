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
#include "uart_esp32.h"
#include "pid.h"
#include <stdio.h>

#define speed 70 


int16_t gz_offset = 0;

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

void checkquay(int16_t gz)
{
    uart_sendstr("debug \r\n=============");
    float gz_scaled = gz * 0.01f;

    float correction = PID_Update(&pid, 0, gz_scaled);

    int base_speed = speed;

    int left_speed  = base_speed + correction;
    int right_speed = base_speed - correction;

    if(left_speed > 100) left_speed = 100;
    if(left_speed < 0)   left_speed = 0;

    if(right_speed > 100) right_speed = 100;
    if(right_speed < 0)   right_speed = 0;

    turn_left(left_speed);
    turn_right(right_speed);
}



void app_init(){
    systick_init();  
    pwm_init();
    i2c_init();
    mpu6050_init();
    delay_ms(2000);
    calibrate_gyro();
    uartesp_init(115200);
    led_init();        
    motor_init();
    // rgb_sensor_init();
    uart_init(115200); 
}

void app_run(){
    MPU6050_Data sensor_data;
    char buffer[128];
    while (1)
    {
        motor_forward(speed);
        // uart_sendstr("test log \r\n");
        // mpu6050_read_all(&sensor_data);
        // int16_t gz = sensor_data.gyro_z - gz_offset;
        // sprintf(buffer,"%7d\r\n", gz);
        // uart_sendstr(buffer);
        // checkquay(gz);
        // rgb_turn_on_led();
        // delay_ms(1000);
        // rgb_read_color();
        delay_ms(1000); 
        char c;
        while (uart_getchar(&c)) {
            uart_sendchar(c);
            if (c == '\r') uart_sendchar('\n');
        }  
    }
}