#ifndef __I2C_H__
#define __I2C_H__ 



//define 


#define BASE_ADDR_I2C (*(volatile uint32_t*)0x40005400U)

#define  (*(volatile uint32_t*)0x40010C00u)

typedef struct
{
    volatile uint32_t CR1;      // 0x00
    volatile uint32_t CR2;      // 0x04
    volatile uint32_t OAR1;     // 0x08
    volatile uint32_t OAR2;     // 0x0C
    volatile uint32_t DR;       // 0x10
    volatile uint32_t SR1;      // 0x14
    volatile uint32_t SR2;      // 0x18
    volatile uint32_t CCR;      // 0x1C
    volatile uint32_t TRISE;    // 0x20
} I2C_TypeDef;


#define I2C1 (1u << 21) 

void i2c_init();



#endif //__I2C_H__