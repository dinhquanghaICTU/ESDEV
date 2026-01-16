#include "gpio.h"
#include "rcc.h"

void gpio_pin_init(GPIO_TypeDef *gpio, uint8_t pin, uint8_t mode) {
   
    if(gpio == GPIOA) {
        RCC->APB2ENR |= (1u << 2);  
    } else if(gpio == GPIOB) {
        RCC->APB2ENR |= (1u << 3);  
    } else if(gpio == GPIOC) {
        RCC->APB2ENR |= (1u << 4);  
    }

    if(pin < 8) {
        
        gpio->CRL &= ~(0xFu << (pin * 4));
        gpio->CRL |= (mode << (pin * 4));
    } else {
        
        gpio->CRH &= ~(0xFu << ((pin - 8) * 4));
        gpio->CRH |= (mode << ((pin - 8) * 4));
    }
}

void gpio_write_pin(GPIO_TypeDef *gpio, uint8_t pin, uint8_t value) {
    if(value) {
        gpio->BSRR = (1u << pin);  
    } else {
        gpio->BRR = (1u << pin);   
    }
}

void gpio_toggle_pin(GPIO_TypeDef *gpio, uint8_t pin) {
    gpio->ODR ^= (1u << pin);
}