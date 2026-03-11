#include "pid.h"
#include "mpu.h"
#include "systick.h"

#define GYRO_SENSITIVITY    131.0f

void pid_init(PID_t *pid, float kp, float ki, float kd,
              float integral_limit, float output_limit) {
    pid->kp = kp;
    pid->ki = ki;
    pid->kd = kd;
    pid->setpoint = 0.0f;
    pid->integral = 0.0f;
    pid->prev_error = 0.0f;
    pid->integral_limit = integral_limit;
    pid->output_limit = output_limit;
}

void pid_reset(PID_t *pid) {
    pid->integral   = 0.0f;
    pid->prev_error = 0.0f;
}

float pid_compute(PID_t *pid, float measured_value, float dt) {
    if (dt <= 0.0f) return 0.0f;

    float error = pid->setpoint - measured_value;


    float p_term = pid->kp * error;


    pid->integral += error * dt;
    if (pid->integral >  pid->integral_limit) pid->integral =  pid->integral_limit;
    if (pid->integral < -pid->integral_limit) pid->integral = -pid->integral_limit;
    float i_term = pid->ki * pid->integral;

    float d_term = pid->kd * (error - pid->prev_error) / dt;
    pid->prev_error = error;

    float output = p_term + i_term + d_term;

    if (output >  pid->output_limit) output =  pid->output_limit;
    if (output < -pid->output_limit) output = -pid->output_limit;

    return output;
}

void heading_init(Heading_t *h) {
    h->yaw_angle    = 0.0f;
    h->gyro_z_offset = 0.0f;
}

void heading_calibrate(Heading_t *h, uint16_t samples) {
    float sum = 0.0f;
    for (uint16_t i = 0; i < samples; i++) {
        sum += (float)mpu6050_read_gz();
        delay_ms(5);
    }
    h->gyro_z_offset = sum / (float)samples;
}

void heading_update(Heading_t *h, int16_t gyro_z_raw, float dt) {
    float gz_dps = ((float)gyro_z_raw - h->gyro_z_offset) / GYRO_SENSITIVITY;
    h->yaw_angle += gz_dps * dt;
}

void heading_reset(Heading_t *h) {
    h->yaw_angle = 0.0f;
}