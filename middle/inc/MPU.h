#ifndef __MPU_H__
#define __MPU_H__

#include <stdint.h>

#define MPU6050_ADDR 0x68

#define MPU6050_PWR_MGMT_1   0x6B
#define MPU6050_SMPLRT_DIV   0x19
#define MPU6050_CONFIG       0x1A
#define MPU6050_GYRO_CONFIG  0x1B
#define MPU6050_ACCEL_CONFIG 0x1C
#define MPU6050_WHO_AM_I     0x75

#define MPU6050_ACCEL_XOUT_H 0x3B
#define MPU6050_TEMP_OUT_H   0x41
#define MPU6050_GYRO_XOUT_H  0x43

typedef struct {
    int16_t accel_x;
    int16_t accel_y;
    int16_t accel_z;
    int16_t temp;
    int16_t gyro_x;
    int16_t gyro_y;
    int16_t gyro_z;
} MPU6050_Data;

void mpu6050_init(void);
uint8_t mpu6050_read_byte(uint8_t reg);
void mpu6050_write_byte(uint8_t reg, uint8_t data);
void mpu6050_read_all(MPU6050_Data *data);
int16_t mpu6050_read_gz();

#endif //#define __MPU_H__