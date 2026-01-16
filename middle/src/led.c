#include "led.h"
#include "gpio.h"
#include "rcc.h"

void led_init(void) {
    RCC->APB2ENR |= RCC_APB2ENR_IOPAEN;
    gpio_pin_init(GPIOA, 13, GPIO_MODE_OUTPUT_PP_2MHZ);
}

void led_on(void) {
   
    GPIOC->BRR = (1u << 13);   
}

void led_off(void) {
   
    GPIOC->BSRR = (1u << 13);  
}

void led_toggle(void) {
   
    GPIOC->ODR ^= (1u << 13);
}