#include "uart.h"
#include "ringbuff.h"

static RingBuffer rx_buffer;

void uart_init(uint32_t baud) {
    ring_buffer_init(&rx_buffer);
    RCC_APB2ENR |= RCC_IOPAEN | RCC_USART1EN;
    GPIOA_CRH &= ~(0xFF << 4);
    GPIOA_CRH |= (0x0B << 4);  
    GPIOA_CRH |= (0x04 << 8);  
    USART1_BRR = SYSCLK / baud;
    NVIC_ISER1 |= (1 << 5);
    USART1_CR1 = USART_UE | USART_TE | USART_RE | USART_RXNEIE;
}

void uart_putchar(char c) {
    while (!(USART1_SR & USART_TXE));
    USART1_DR = c;
}

uint8_t uart_getchar(char *c) {
    return ring_buffer_read(&rx_buffer, c);
}

void uart_puts(const char *str) {
    while (*str) {
        uart_putchar(*str++);
    }
}

void uart_send_array(const char *arr, uint32_t len) {
    for (uint32_t i = 0; i < len; i++) {
        uart_putchar(arr[i]);
    }
}

uint8_t uart_available(void) {
    return ring_buffer_available(&rx_buffer);
}

uint32_t uart_rx_count(void) {
    return ring_buffer_count(&rx_buffer);
}

void USART1_IRQHandler(void) {
    if (USART1_SR & USART_RXNE) {
        char c = USART1_DR;
        ring_buffer_write(&rx_buffer, c);
    }
}