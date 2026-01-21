#ifndef UART_H
#define UART_H

#include <stdint.h>

#define RCC_APB2ENR   (*(volatile uint32_t*)0x40021018)
#define GPIOA_CRH     (*(volatile uint32_t*)0x40010804)
#define USART1_SR     (*(volatile uint32_t*)0x40013800)
#define USART1_DR     (*(volatile uint32_t*)0x40013804)
#define USART1_BRR    (*(volatile uint32_t*)0x40013808)
#define USART1_CR1    (*(volatile uint32_t*)0x4001380C)
#define NVIC_ISER1    (*(volatile uint32_t*)0xE000E104)

#define RCC_IOPAEN    (1 << 2)
#define RCC_USART1EN  (1 << 14)
#define USART_UE      (1 << 13)
#define USART_TE      (1 << 3)
#define USART_RE      (1 << 2)
#define USART_RXNEIE  (1 << 5)
#define USART_TXE     (1 << 7)
#define USART_RXNE    (1 << 5)

#define SYSCLK        8000000

void uart_init(uint32_t baud);

void uart_putchar(char c);

uint8_t uart_getchar(char *c);

void uart_puts(const char *str);

void uart_send_array(const char *arr, uint32_t len);

uint8_t uart_available(void);

uint32_t uart_rx_count(void);

void USART1_IRQHandler(void);

extern volatile uint32_t sys_tick;

#endif // UART_H