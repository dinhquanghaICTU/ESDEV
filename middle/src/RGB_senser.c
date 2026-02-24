// #include "RGB_senser.h"



// void rgb_sensor_init(void) {
//     mpu6050_write_byte(MPU6050_PWR_MGMT_1, 0x00);
//     // mpu6050_write_byte(MPU6050_SMPLRT_DIV, 0x07);
//     mpu6050_write_byte(MPU6050_SMPLRT_DIV, 0x09); 
//     // mpu6050_write_byte(MPU6050_CONFIG, 0x00);
//     mpu6050_write_byte(MPU6050_CONFIG, 0x03); 
//     mpu6050_write_byte(MPU6050_GYRO_CONFIG, 0x00);
//     mpu6050_write_byte(MPU6050_ACCEL_CONFIG, 0x00);
// }

// void mpu6050_write_byte(uint8_t reg, uint8_t data) {
//     i2c_start();
//     i2c_send_address(MPU6050_ADDR, I2C_WRITE);
//     i2c_write(reg);
//     i2c_write(data);
//     i2c_stop();
// }