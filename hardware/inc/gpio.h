#ifndef __GPIO_H__
#define __GPIO_H__

#include <stdint.h>

typedef struct {
    volatile uint32_t CRL;
    volatile uint32_t CRH;
    volatile uint32_t IDR;
    volatile uint32_t ODR;
    volatile uint32_t BSRR;
    volatile uint32_t BRR;
    volatile uint32_t LCKR;
} GPIO_TypeDef;

#define GPIOA_BASE  0x40010800u
#define GPIOB_BASE  0x40010C00u
#define GPIOC_BASE  0x40011000u

#define GPIOA       ((GPIO_TypeDef *)GPIOA_BASE)
#define GPIOB       ((GPIO_TypeDef *)GPIOB_BASE)
#define GPIOC       ((GPIO_TypeDef *)GPIOC_BASE)

// GPIO mode/cnf bitfields (MODE[1:0] | CNF[1:0] in lower 4 bits)
#define GPIO_MODE_OUTPUT_PP_2MHZ    0x2u
#define GPIO_MODE_OUTPUT_PP_10MHZ   0x1u
#define GPIO_MODE_OUTPUT_PP_50MHZ   0x3u



// Input modes
#define GPIO_MODE_INPUT              0x0u
#define GPIO_CNF_INPUT_ANALOG        0x0u
#define GPIO_CNF_INPUT_FLOATING      0x1u
#define GPIO_CNF_INPUT_PU_PD         0x2u

// AF output 50MHz
#define GPIO_MODE_AF_PP_50MHZ   ((GPIO_CNF_AF_PP << 2) | GPIO_MODE_OUTPUT_PP_50MHZ)

// Input floating (RX)
#define GPIO_MODE_INPUT_FLOATING  ((GPIO_CNF_INPUT_FLOATING << 2) | GPIO_MODE_INPUT)

#define GPIO_CNF_GP_PP           0x0u
#define GPIO_CNF_GP_OD           0x1u
#define GPIO_CNF_AF_PP           0x2u
#define GPIO_CNF_AF_OD           0x3u

// Helper macros: full 4-bit config value for one pin
// For I2C we cần Alternate Function Open-Drain 50MHz → MODE=0b11, CNF=0b11 → 0xF
#define GPIO_MODE_AF_OD_50MHZ   ((GPIO_CNF_AF_OD << 2) | GPIO_MODE_OUTPUT_PP_50MHZ)

void gpio_pin_init(GPIO_TypeDef *gpio, uint8_t pin, uint8_t mode);
void gpio_write_pin(GPIO_TypeDef *gpio, uint8_t pin, uint8_t value);
void gpio_toggle_pin(GPIO_TypeDef *gpio, uint8_t pin);

#endif //__GPIO_H__