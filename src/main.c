#include "led.h"
#include "motor.h"
#include "systick.h"
#include <stdint.h>
#include "uart.h"
#include "pwm.h"


void test(){
    motor_forward(30);
    delay_ms(20);
    // turn_left();
    // delay_ms(100);
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