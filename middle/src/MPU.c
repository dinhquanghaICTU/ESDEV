#include "mpu.h"
#include "i2c.h"
#include "uart.h"

void mpu6050_init(void) {
    mpu6050_write_byte(MPU6050_PWR_MGMT_1, 0x00);
    // mpu6050_write_byte(MPU6050_SMPLRT_DIV, 0x07);
    mpu6050_write_byte(MPU6050_SMPLRT_DIV, 0x09); 
    // mpu6050_write_byte(MPU6050_CONFIG, 0x00);
    mpu6050_write_byte(MPU6050_CONFIG, 0x03); 
    mpu6050_write_byte(MPU6050_GYRO_CONFIG, 0x00);
    mpu6050_write_byte(MPU6050_ACCEL_CONFIG, 0x00);
}

void mpu6050_write_byte(uint8_t reg, uint8_t data) {
    i2c_start();
    i2c_send_address(MPU6050_ADDR, I2C_WRITE);
    i2c_write(reg);
    i2c_write(data);
    i2c_stop();
}

uint8_t mpu6050_read_byte(uint8_t reg) {
    uint8_t data;
    i2c_start();
    i2c_send_address(MPU6050_ADDR, I2C_WRITE);
    i2c_write(reg);
    i2c_start();  
    i2c_send_address(MPU6050_ADDR, I2C_READ);
    data = i2c_read_nack();
    return data;
}

void mpu6050_read_all(MPU6050_Data *data) {

    
    uint8_t buffer[14];
    i2c_start();
    i2c_send_address(MPU6050_ADDR, I2C_WRITE);
    i2c_write(MPU6050_ACCEL_XOUT_H);
    i2c_start();  
    i2c_send_address(MPU6050_ADDR, I2C_READ);

    
    for (int i = 0; i < 13; i++) {
        buffer[i] = i2c_read_ack();
    }
    buffer[13] = i2c_read_nack();
    data->accel_x = (int16_t)(buffer[0] << 8 | buffer[1]);
    data->accel_y = (int16_t)(buffer[2] << 8 | buffer[3]);
    data->accel_z = (int16_t)(buffer[4] << 8 | buffer[5]);
    data->temp    = (int16_t)(buffer[6] << 8 | buffer[7]);
    data->gyro_x  = (int16_t)(buffer[8] << 8 | buffer[9]);
    data->gyro_y  = (int16_t)(buffer[10] << 8 | buffer[11]);
    data->gyro_z  = (int16_t)(buffer[12] << 8 | buffer[13]);

    
}

int16_t mpu6050_read_gz()
{
    MPU6050_Data mpu;
    mpu6050_read_all(&mpu);
    int16_t gz = mpu.gyro_z;
    return gz;
}