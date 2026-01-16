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

// GPIO Mode
#define GPIO_MODE_OUTPUT_PP_2MHZ    0x2u
#define GPIO_MODE_OUTPUT_PP_10MHZ   0x1u
#define GPIO_MODE_OUTPUT_PP_50MHZ   0x3u

void gpio_pin_init(GPIO_TypeDef *gpio, uint8_t pin, uint8_t mode);
void gpio_write_pin(GPIO_TypeDef *gpio, uint8_t pin, uint8_t value);
void gpio_toggle_pin(GPIO_TypeDef *gpio, uint8_t pin);

#endif //__GPIO_H__