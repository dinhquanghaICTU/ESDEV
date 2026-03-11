#ifndef __SYSTICK_H__
#define __SYSTICK_H__

#include <stdint.h>

void systick_init(void);
void delay_ms(uint32_t ms);
uint32_t get_tick_ms(void);


#endif //__SYSTICK_H__
