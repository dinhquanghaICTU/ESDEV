#include "uart_esp32.h"
#include "ringbuff.h"
#include "gpio.h"

static RingBuffer rx_buffer;


// tx : pb10 
// rx:  pb11
void uartesp_init(uint32_t baud) {
    ring_buffer_init(&rx_buffer);
    RCC_APB2ENR |= RCC_IOPBEN ;
    RCC_APB1ENR |= RCC_USART3EN; 
    gpio_pin_init(GPIOB,UART3_TX,GPIO_CNF_AF_PP);
    gpio_pin_init(GPIOB,UART3_RX,GPIO_CNF_AF_PP);

    UART3->BRR = 8000000 / baud;
    NVIC_ISER1 |= (1 << 7); 
    UART3->CR1 = USART3_UE | USART3_TE | USART3_RE | USART3_RXNEIE;
}

void uartesp_sendchar(char c) {
    while (!(UART3->SR  &  USART3_TXE));
    UART3->DR = c;
}

uint8_t uartesp_getchar(char *c) {
    return ring_buffer_read(&rx_buffer, c);
}

void uartesp_sendstr(const char *str) {
    while (*str) {
        uart_sendchar(*str++);
    }
}

// void uart_send_array(const char *arr, uint32_t len) {
//     for (uint32_t i = 0; i < len; i++) {
//         uart_sendchar(arr[i]);
//     }
// }

uint8_t uart_available(void) {
    return ring_buffer_available(&rx_buffer);
}

uint32_t uart_rx_count(void) {
    return ring_buffer_count(&rx_buffer);
}

void USARTesp_IRQHandler(void) {
    if ( UART3->SR & USART3_RXNE) {
        char c = UART3->DR;
        ring_buffer_write(&rx_buffer, c);
    }
}