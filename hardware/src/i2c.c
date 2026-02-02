#include "i2c.h"
#include "rcc.h"
#include "gpio.h"

#define SCL_PIN 8 
#define SDA_PIN 9 
#define I2C_START (1 << 8)
#define PE  (1 << 0)
#define I2C_STOP (1 << 9)
#define I2C_SR1_ADDR   (1 << 1) 
#define I2C_TXE (1 << 7) 
#define I2C_BTF (1 << 2) 

I2C_TypeDef i2c;

void i2c_init(){
    BASE_ADDR_I2C |= I2C1 ;
    gpio_pin_init(GPIOB, SCL_PIN,GPIO_CNF_AF_OD);
    gpio_pin_init(GPIOB, SDA_PIN,GPIO_CNF_AF_OD);

    //config i2c
    i2c.CR1 |= I2C_START; 
    i2c.CR1 &= ~PE;
    i2c->CR2   = 36;
    i2c->CCR   = 180;
    i2c->TRISE = 37;
    i2c->CR1 |= PE;
}

void I2C1_Start(void) {
    i2c.CR1 |= I2C_START;
    while (!(i2c.SR1 & (1 << 0))); 
}

void I2C1_Stop(void) {
    i2c.CR1 |= I2C_STOP;
}

void I2C1_Address(uint8_t address, uint8_t direction) {
    if (direction == 1) {
        i2c.DR = (address << 1) | 0x01; 
    } else {
        i2c.DR = (address << 1) & 0xFE; 
    }
    while (!(i2c.SR1 & I2C_SR1_ADDR)); 
    (void)i2c.SR1; 
    (void)i2c.SR2; 
}



// TXE (1 << 7)
void I2C1_Write(uint8_t data) {
    while (!(i2c.SR1 & I2C_TXE)); 
    i2c.DR = data;
    while (!(i2c.SR1 & I2C_BTF)); 
}

uint8_t I2C1_Read_ACK(void) {
    i2c.CR1 |= I2C_CR1_ACK; 
    while (!(i2c.SR1 & I2C_SR1_RXNE)); 
    return i2c.DR;
}

uint8_t I2C1_Read_NACK(void) {
    I2C1->CR1 &= ~I2C_CR1_ACK; 
    I2C1_Stop(); 
    while (!(I2C1->SR1 & I2C_SR1_RXNE)); 
    return I2C1->DR;
}
