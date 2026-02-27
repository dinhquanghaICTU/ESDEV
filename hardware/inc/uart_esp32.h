#ifndef __UART_ESP_32_H__
#define __UART_ESP_32_H__
#include <stdint.h>

#define RCC_APB2ENR   (*(volatile uint32_t*)0x40021018)
#define RCC_APB1ENR   (*(volatile uint32_t*)0x4002101C)

// tx : pb10 
// rx:  pb11
#define UART3_TX 10
#define UART3_RX 11

typedef struct 
{
    volatile uint32_t SR;      // 0x00
    volatile uint32_t DR;      // 0x04
    volatile uint32_t BRR;     // 0x08
    volatile uint32_t CR1;     // 0x0C
    volatile uint32_t CR2;     // 0x10
    volatile uint32_t CR3;     // 0x14
    volatile uint32_t GTPR;    // 0x18
} UART3_TypeDef;



#define USART3_UE      (1 << 13)
#define USART3_TE      (1 << 3)
#define USART3_RE      (1 << 2)
#define USART3_RXNEIE  (1 << 5)
#define USART3_TXE     (1 << 7)
#define USART3_RXNE    (1 << 5)


#define USART3_BASE    0x40004800u
#define UART3         ((UART3_TypeDef *)USART3_BASE)
#define RCC_IOPBEN    (1 << 3) 
#define RCC_USART3EN  (1 << 18) 

#define NVIC_ISER1    (*(volatile uint32_t*)0xE000E104)


void uartesp_init(uint32_t baud);
void uartesp_sendchar(char c);
uint8_t uartesp_getchar(char *c);
void uartesp_sendstr(const char *str);
// void uartesp_send_array(const char *arr, uint32_t len);
uint8_t uart_available(void);
uint32_t uart_rx_count(void);
void USARTesp_IRQHandler(void);

#endif // __UART_ESP_32_H__