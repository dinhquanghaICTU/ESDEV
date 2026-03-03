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
#include <stdio.h>

#define speed 100 


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
    motor_stop();
    delay_ms(2000);
    if (gz > 20){
        uart_sendstr("quay trai\r\n");
        turn_right(speed);
        delay_ms(1000);
        motor_stop();
    }
    else if (gz < -20){
        uart_sendstr("quay phai\r\n");
        turn_left(speed);
        delay_ms(1000);
        motor_stop();
    }
    else{
        uart_sendstr("khong quay\r\n");
    }
    delay_ms(200);
}


// void checkmau(int16_t ){

// }

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
    rgb_sensor_init();
    uart_init(115200); 
}

void app_run(){
    MPU6050_Data sensor_data;
    char buffer[128];
    while (1)
    {
        motor_forward(speed);
        // uart_sendstr("test log \r\n");
        mpu6050_read_all(&sensor_data);
        int16_t gz = sensor_data.gyro_z - gz_offset;
        sprintf(buffer,"%7d\r\n", gz);
        uart_sendstr(buffer);
        checkquay(gz);
        // rgb_turn_on_led();
        // delay_ms(1000);
        rgb_read_color();
        delay_ms(1000);
        char c;
        while (uart_getchar(&c)) {
            uart_sendchar(c);
            if (c == '\r') uart_sendchar('\n');
        }  
    }
}