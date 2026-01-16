#ifndef __RCC_H__
#define __RCC_H__

#include <stdint.h>

typedef struct {
    volatile uint32_t CR;         // 0x00
    volatile uint32_t CFGR;       // 0x04
    volatile uint32_t CIR;        // 0x08
    volatile uint32_t APB2RSTR;   // 0x0C
    volatile uint32_t APB1RSTR;   // 0x10
    volatile uint32_t AHBENR;     // 0x14
    volatile uint32_t APB2ENR;    // 0x18
    volatile uint32_t APB1ENR;    // 0x1C
    volatile uint32_t BDCR;       // 0x20
    volatile uint32_t CSR;        // 0x24
} RCC_TypeDef;

#define RCC_BASE    0x40021000u
#define RCC         ((RCC_TypeDef *)RCC_BASE)


#define RCC_APB2ENR_IOPAEN  (1u << 2)   // GPIOA clock enable
#define RCC_APB2ENR_IOPBEN  (1u << 3)   // GPIOB clock enable
#define RCC_APB2ENR_IOPCEN  (1u << 4)   // GPIOC clock enable

#endif //__RCC_H__