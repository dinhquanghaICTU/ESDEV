#ifndef __I2C_H__
#define __I2C_H__

#include <stdint.h>


#define I2C1_BASE 0x40005400U
#define I2C2_BASE 0x40005800U


#define RCC_APB2ENR_AFIOEN    (1U << 0)
typedef struct {
    volatile uint32_t EVCR;        // 0x00
    volatile uint32_t MAPR;        // 0x04
    volatile uint32_t EXTICR[4];   // 0x08 - 0x14
    uint32_t RESERVED;             // 0x18
    volatile uint32_t MAPR2;       // 0x1C
} AFIO_TypeDef;

#define AFIO_BASE             0x40010000UL
#define AFIO                  ((AFIO_TypeDef *) AFIO_BASE)


#define AFIO_MAPR_I2C1_REMAP  (1U << 1)   

typedef struct {
    volatile uint32_t CR1;      // 0x00 - Control register 1
    volatile uint32_t CR2;      // 0x04 - Control register 2
    volatile uint32_t OAR1;     // 0x08 - Own address register 1
    volatile uint32_t OAR2;     // 0x0C - Own address register 2
    volatile uint32_t DR;       // 0x10 - Data register
    volatile uint32_t SR1;      // 0x14 - Status register 1
    volatile uint32_t SR2;      // 0x18 - Status register 2
    volatile uint32_t CCR;      // 0x1C - Clock control register
    volatile uint32_t TRISE;    // 0x20 - TRISE register
} I2C_TypeDef;

#define I2C1 ((I2C_TypeDef*)I2C1_BASE)
#define I2C2 ((I2C_TypeDef*)I2C2_BASE)


#define RCC_APB1ENR_I2C1EN (1U << 21)
#define RCC_APB1ENR_I2C2EN (1U << 22)


#define I2C_CR1_PE         (1U << 0)
#define I2C_CR1_START      (1U << 8)
#define I2C_CR1_STOP       (1U << 9)
#define I2C_CR1_ACK        (1U << 10)


#define I2C_SR1_SB         (1U << 0)   // Start bit
#define I2C_SR1_ADDR       (1U << 1)   // Address sent
#define I2C_SR1_BTF        (1U << 2)   // Byte transfer finished
#define I2C_SR1_TXE        (1U << 7)   // Data register empty (transmit)
#define I2C_SR1_RXNE       (1U << 6)   // Data register not empty (receive)


#define I2C_WRITE 0
#define I2C_READ  1

void i2c_init(void);
void i2c_start(void);
void i2c_stop(void);
void i2c_send_address(uint8_t address, uint8_t direction);
void i2c_write(uint8_t data);
uint8_t i2c_read_ack(void);
uint8_t i2c_read_nack(void);

// I2C2 - PB10 (SCL), PB11 (SDA)
void i2c2_init(void);
void i2c2_start(void);
void i2c2_stop(void);
void i2c2_send_address(uint8_t address, uint8_t direction);
void i2c2_write(uint8_t data);
uint8_t i2c2_read_ack(void);
uint8_t i2c2_read_nack(void);
// void i2c_bus_recovery(void);

#endif // __I2C_H__