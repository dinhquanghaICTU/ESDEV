#include "led.h"
#include "motor.h"
#include "systick.h"
#include <stdint.h>
#include "uart.h"
#include "pwm.h"


void test(){
    uart_puts("Start test\r\n");
    
    uart_puts("Forward 5s\r\n");
    motor_forward(30);
    delay_ms(5000);
    motor_stop();
    uart_puts("Stop\r\n");
    
    delay_ms(500);
    
    uart_puts("Turn left 5s\r\n");
    turn_left(30);
    delay_ms(5000);
    motor_stop();
    uart_puts("Stop\r\n");
    
    delay_ms(500);
    
    uart_puts("Turn right 5s\r\n");
    turn_right(30);
    delay_ms(5000);
    motor_stop();
    uart_puts("Stop\r\n");
}

void init(void){
    pwm_init();
    systick_init();    
    led_init();        
    motor_init();
    uart_init(115200);   
}




int main(void)
{
    init();  
    
    test();
    while (1){
        char c;
        while (uart_getchar(&c)) {
            uart_putchar(c);
            if (c == '\r') uart_putchar('\n');
        }
    }
}