#include "systick.h"

#define SYST_CSR   (*(volatile uint32_t*)0xE000E010)
#define SYST_RVR   (*(volatile uint32_t*)0xE000E014)
#define SYST_CVR   (*(volatile uint32_t*)0xE000E018)

#define CSR_ENABLE     (1 << 0)
#define CSR_TICKINT    (1 << 1)
#define CSR_CLKSOURCE  (1 << 2)

#define CPU_FREQ_HZ 8000000UL

static volatile uint32_t sys_tick = 0;

void systick_init(void)
{
    SYST_CSR = 0;                                   
    SYST_RVR = (CPU_FREQ_HZ / 1000) - 1;  // = 7999 (OK cho 8MHz)
    SYST_CVR = 0;                                   
    sys_tick = 0;

    SYST_CSR = CSR_CLKSOURCE | CSR_TICKINT | CSR_ENABLE;
}

void SysTick_Handler(void)
{
    sys_tick++;
}

void delay_ms(uint32_t ms)
{
    uint32_t start = sys_tick;
    while ((sys_tick - start) < ms);
}
