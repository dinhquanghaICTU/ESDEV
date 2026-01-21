#include "pwm.h"



void pwm_init(void) {
    RCC_APB2ENR |= RCC_IOPAEN;
    RCC_APB1ENR |= RCC_TIM3EN;
    
    GPIOA_CRL &= ~(0xFF000000);
    GPIOA_CRL |= (0xBB000000);
    
    TIM3_PSC = 7;
    
    TIM3_ARR = 999;
    
    TIM3_CCMR1 = (0x68 << 0) | (0x68 << 8);
    
    TIM3_CCER = (1 << 0) | (1 << 4);
    
    TIM3_CR1 = (1 << 0);
    
    TIM3_CCR1 = 0;
    TIM3_CCR2 = 0;
}



void pwm_set_duty(uint8_t channel, uint8_t duty) {
    if (duty > 100) duty = 100;
    
    uint32_t ccr_value = (duty * 1000) / 100;
    
    if (channel == 1) {
        TIM3_CCR1 = ccr_value;
    } else if (channel == 2) {
        TIM3_CCR2 = ccr_value;
    }
}