#include "led.h"
#include "motor.h"
#include "systick.h"
#include <stdint.h>
#include "uart.h"
#include "pwm.h"


void test(){
    // uart_sendstr("Start test\r\n");
    
    // uart_sendstr("Forward 5s\r\n");
    // motor_forward(30);
    // delay_ms(5000);
    // motor_stop();
    // uart_sendstr("Stop\r\n");
    
    // delay_ms(500);
    
    // uart_sendstr("Turn left 5s\r\n");
    // turn_left(30);
    // delay_ms(5000);
    // motor_stop();
    // uart_sendstr("Stop\r\n");
    
    // delay_ms(500);
    
    // uart_sendstr("Turn right 5s\r\n");
    // turn_right(30);
    // delay_ms(5000);
    // motor_stop();
    // uart_sendstr("Stop\r\n");
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
            uart_sendchar(c);
            if (c == '\r') uart_sendchar('\n');
        }
    }
}