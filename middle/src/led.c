#include "led.h"
#include "gpio.h"

void led_init(void) {
    gpio_pin_init(GPIOC, 13, GPIO_MODE_OUTPUT_PP_2MHZ);
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