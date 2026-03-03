#include "pid.h"


PID_t pid = {
    .Kp = 1.2f,
    .Ki = 0.0f,
    .Kd = 0.5f,
};

float PID_Update(PID_t *pid, float setpoint, float measured)
{
    float error = setpoint - measured;

    pid->integral += error;
    float derivative = error - pid->prev_error;

    float output = pid->Kp * error
                 + pid->Ki * pid->integral
                 + pid->Kd * derivative;

    pid->prev_error = error;

    return output;
}