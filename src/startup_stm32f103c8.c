#include <stdint.h>

/* stack top = 0x20000000 + 20KB */
#define STACK_TOP 0x20005000

extern int main(void);

/* linker symbols */
extern uint32_t _etext, _sdata, _edata, _sbss, _ebss;

/* handlers */
void Reset_Handler(void);
void Default_Handler(void);
void SysTick_Handler(void);

/* vector table */
__attribute__((section(".isr_vector")))
void (* const vector_table[])(void) = {
    (void (*)(void))STACK_TOP, // 0 MSP
    Reset_Handler,             // 1 Reset
    Default_Handler,           // 2 NMI
    Default_Handler,           // 3 HardFault
    Default_Handler,           // 4 MemManage
    Default_Handler,           // 5 BusFault
    Default_Handler,           // 6 UsageFault
    0, 0, 0, 0,                // 7–10
    Default_Handler,           // 11 SVCall
    Default_Handler,           // 12 DebugMonitor
    0,                         // 13
    Default_Handler,           // 14 PendSV
    SysTick_Handler,           // 15 SysTick ✅
};

/* reset */
void Reset_Handler(void)
{
    uint32_t *src = &_etext;
    uint32_t *dst = &_sdata;

    while (dst < &_edata)
        *dst++ = *src++;

    dst = &_sbss;
    while (dst < &_ebss)
        *dst++ = 0;

    main();

    while (1);
}

void Default_Handler(void)
{
    while (1);
}
