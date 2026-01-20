#ifndef __SYSTICK_H__
#define __SYSTICK_H__

#include <stdint.h>

void systick_init(void);
void delay_ms(uint32_t ms);

#endif //__SYSTICK_H__
