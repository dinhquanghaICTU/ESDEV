#ifndef __PWM_H__
#define __PWM_H__

#include <stdint.h>


#define RCC_APB2ENR   (*(volatile uint32_t*)0x40021018)
#define RCC_APB1ENR   (*(volatile uint32_t*)0x4002101C)
#define GPIOA_CRL     (*(volatile uint32_t*)0x40010800)


#define TIM3_CR1      (*(volatile uint32_t*)0x40000400)
#define TIM3_CCMR1    (*(volatile uint32_t*)0x40000418)
#define TIM3_CCER     (*(volatile uint32_t*)0x40000420)
#define TIM3_PSC      (*(volatile uint32_t*)0x40000428)
#define TIM3_ARR      (*(volatile uint32_t*)0x4000042C)
#define TIM3_CCR1     (*(volatile uint32_t*)0x40000434)
#define TIM3_CCR2     (*(volatile uint32_t*)0x40000438)

#define RCC_IOPAEN    (1 << 2)
#define RCC_TIM3EN    (1 << 1)


void pwm_init(void);
void pwm_set_duty(uint8_t channel, uint8_t duty);

#endif // __PWM_H__