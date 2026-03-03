#ifndef __PID_H__
#define __PID_H__ 

typedef struct {
    float Kp;
    float Ki;
    float Kd;
    float integral;
    float prev_error;
} PID_t;

extern PID_t pid; 
float PID_Update(PID_t *pid, float setpoint, float measured);


#endif // __PID_H__