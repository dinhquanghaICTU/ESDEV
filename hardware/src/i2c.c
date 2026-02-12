#include "i2c.h"
#include "rcc.h"
#include "gpio.h"

// Mặc định I2C1 trên STM32F1 dùng PB6 (SCL), PB7 (SDA)
// Nếu bạn muốn dùng PB8/PB9 thì bật lại remap và đổi 2 define này.
#define SCL_PIN 6  // PB7
#define SDA_PIN 7  // PB6


#define I2C_TIMEOUT 10000 

void i2c_init(void) {
    
    RCC->APB2ENR |= RCC_APB2ENR_AFIOEN | RCC_APB2ENR_IOPBEN;  
    RCC->APB1ENR |= RCC_APB1ENR_I2C1EN;

    // Dùng chân mặc định PB6/PB7 nên tắt remap I2C1
    AFIO->MAPR &= ~AFIO_MAPR_I2C1_REMAP;  

    // Cấu hình PB6, PB7: Alternate Function Open-Drain, 50MHz cho I2C1
    gpio_pin_init(GPIOB, SCL_PIN, GPIO_MODE_AF_OD_50MHZ);
    gpio_pin_init(GPIOB, SDA_PIN, GPIO_MODE_AF_OD_50MHZ);

    I2C1->CR1 |= (1U << 15);
    I2C1->CR1 &= ~(1U << 15);
    I2C1->CR1 &= ~I2C_CR1_PE;
    I2C1->CR2 = 36;
    I2C1->CCR = 180;
    I2C1->TRISE = 37;
    I2C1->CR1 |= I2C_CR1_PE;
}

void i2c_start(void) {
    I2C1->CR1 |= I2C_CR1_START;
    
    uint32_t timeout = I2C_TIMEOUT;
    while (!(I2C1->SR1 & I2C_SR1_SB) && timeout--);
    
    if (timeout == 0) {
        I2C1->CR1 |= (1U << 15);  
        I2C1->CR1 &= ~(1U << 15);
    }
}

void i2c_stop(void) {
    I2C1->CR1 |= I2C_CR1_STOP;
}

void i2c_send_address(uint8_t address, uint8_t direction) {
    if (direction == I2C_READ) {
        I2C1->DR = (address << 1) | 0x01;
    } else {
        I2C1->DR = (address << 1) & 0xFE;
    }
    
    uint32_t timeout = I2C_TIMEOUT;
    while (!(I2C1->SR1 & I2C_SR1_ADDR) && timeout--);
    
    if (timeout == 0) {
        i2c_stop();
        return;
    }
    
    (void)I2C1->SR1;
    (void)I2C1->SR2;
}

void i2c_write(uint8_t data) {
    uint32_t timeout = I2C_TIMEOUT;
    while (!(I2C1->SR1 & I2C_SR1_TXE) && timeout--);
    
    if (timeout == 0) return;
    
    I2C1->DR = data;
    
    timeout = I2C_TIMEOUT;
    while (!(I2C1->SR1 & I2C_SR1_BTF) && timeout--);
}

uint8_t i2c_read_ack(void) {
    I2C1->CR1 |= I2C_CR1_ACK;
    
    uint32_t timeout = I2C_TIMEOUT;
    while (!(I2C1->SR1 & I2C_SR1_RXNE) && timeout--);
    
    if (timeout == 0) return 0xFF;  
    
    return I2C1->DR;
}

uint8_t i2c_read_nack(void) {
    I2C1->CR1 &= ~I2C_CR1_ACK;
    i2c_stop();
    
    uint32_t timeout = I2C_TIMEOUT;
    while (!(I2C1->SR1 & I2C_SR1_RXNE) && timeout--);
    
    if (timeout == 0) return 0xFF;
    
    return I2C1->DR;
}