#ifndef __PID_H__
#define __PID_H__

#include <stdint.h>

typedef struct {
    float kp;           
    float ki;           
    float kd;           

    float setpoint;     
    float integral;     
    float prev_error;   

    float integral_limit;   
    float output_limit;     
} PID_t;

typedef struct {
    float yaw_angle;        
    float gyro_z_offset;    
} Heading_t;

void pid_init(PID_t *pid, float kp, float ki, float kd,float integral_limit, float output_limit);
void pid_reset(PID_t *pid);
float pid_compute(PID_t *pid, float measured_value, float dt);
void heading_init(Heading_t *h);
void heading_calibrate(Heading_t *h, uint16_t samples);
void heading_update(Heading_t *h, int16_t gyro_z_raw, float dt);
void heading_reset(Heading_t *h);

#endif //__PID_H__