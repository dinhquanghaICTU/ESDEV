#ifndef __MOTOR_H__
#define __MOTOR_H__

#include <stdint.h>


void motor_init(void);
void motor_forward(uint8_t speed);
void motor_backward(uint8_t speed);
void turn_left(uint8_t speed);
void turn_right(uint8_t speed);
void motor_stop(void);

#endif //__MOTOR_H__
