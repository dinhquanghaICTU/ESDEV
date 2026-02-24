// #include "led.h"
// #include "motor.h"
// #include "systick.h"
// #include <stdint.h>
// #include "uart.h"
// #include "pwm.h"
// #include "i2c.h"
// #include "MPU.h"
#include "app.h"
#include <stdio.h>

int main(void)
{
    // uart_init(115200); 
    app_init();
    app_run();
    
    // char c;
    // while (1)
    // {
    //      uart_sendstr("test log \r\n");
    //     while (uart_getchar(&c)) {
    //         uart_sendchar(c);
    //         if (c == '\r') uart_sendchar('\n');
    //     }
    // }
    
}