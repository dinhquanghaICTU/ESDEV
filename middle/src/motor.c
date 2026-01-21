#include "gpio.h"
#include "pwm.h"

#define MOTOR_A_IN1_PIN     1
#define MOTOR_A_IN2_PIN     2
#define MOTOR_B_IN3_PIN     3
#define MOTOR_B_IN4_PIN     4



// gpio_write_pin(GPIOA, MOTOR_A_IN1_PIN, 1); // left forkward
// gpio_write_pin(GPIOA, MOTOR_A_IN2_PIN, 1);// left backward
    
//gpio_write_pin(GPIOA, MOTOR_B_IN3_PIN, 1);// right backward
//gpio_write_pin(GPIOA, MOTOR_B_IN4_PIN, 1); // right forward

void motor_stop(void);

void motor_init(void) {
    gpio_pin_init(GPIOA, MOTOR_A_IN1_PIN, GPIO_MODE_OUTPUT_PP_2MHZ);
    gpio_pin_init(GPIOA, MOTOR_A_IN2_PIN, GPIO_MODE_OUTPUT_PP_2MHZ);
    gpio_pin_init(GPIOA, MOTOR_B_IN3_PIN, GPIO_MODE_OUTPUT_PP_2MHZ);
    gpio_pin_init(GPIOA, MOTOR_B_IN4_PIN, GPIO_MODE_OUTPUT_PP_2MHZ);
    
    motor_stop();
}

void motor_forward(uint8_t speed) {
    gpio_write_pin(GPIOA, MOTOR_A_IN1_PIN, 1);
    gpio_write_pin(GPIOA, MOTOR_A_IN2_PIN, 0);
    gpio_write_pin(GPIOA, MOTOR_B_IN3_PIN, 0);
    gpio_write_pin(GPIOA, MOTOR_B_IN4_PIN, 1);
    
    pwm_set_duty(1, speed); 
    pwm_set_duty(2, speed); 
}

void motor_backward(uint8_t speed) {
    gpio_write_pin(GPIOA, MOTOR_A_IN1_PIN, 0);
    gpio_write_pin(GPIOA, MOTOR_A_IN2_PIN, 1);
    gpio_write_pin(GPIOA, MOTOR_B_IN3_PIN, 1);
    gpio_write_pin(GPIOA, MOTOR_B_IN4_PIN, 0);
    
    pwm_set_duty(1, speed); 
    pwm_set_duty(2, speed); 
}

void turn_right(uint8_t speed) {
    gpio_write_pin(GPIOA, MOTOR_A_IN1_PIN, 1);
    gpio_write_pin(GPIOA, MOTOR_A_IN2_PIN, 0);
    gpio_write_pin(GPIOA, MOTOR_B_IN3_PIN, 1);
    gpio_write_pin(GPIOA, MOTOR_B_IN4_PIN, 0);
    
    pwm_set_duty(1, speed); 
    pwm_set_duty(2, speed); 
}

void turn_left(uint8_t speed) {
    gpio_write_pin(GPIOA, MOTOR_A_IN1_PIN, 0);
    gpio_write_pin(GPIOA, MOTOR_A_IN2_PIN, 1);
    gpio_write_pin(GPIOA, MOTOR_B_IN3_PIN, 0);
    gpio_write_pin(GPIOA, MOTOR_B_IN4_PIN, 1);
    
    pwm_set_duty(1, speed); 
    pwm_set_duty(2, speed); 
}

void motor_stop(void) {
    gpio_write_pin(GPIOA, MOTOR_A_IN1_PIN, 0);
    gpio_write_pin(GPIOA, MOTOR_A_IN2_PIN, 0);
    gpio_write_pin(GPIOA, MOTOR_B_IN3_PIN, 0);
    gpio_write_pin(GPIOA, MOTOR_B_IN4_PIN, 0);
    
    pwm_set_duty(1, 0); 
    pwm_set_duty(2, 0); 
}