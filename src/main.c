
#define TEST_LOG    0

#if(TEST_LOG)
    #include "uart.h"
#endif

#include "app.h"
#include <stdio.h>

int main(void)
{
    #if (TEST_LOG)
        uart_init(115200); 
    #endif
    
    app_init();
    app_run();

    
    #if(TEST_LOG)
        char c;
        while (1)
        {
            uart_sendstr("test log \r\n");
            while (uart_getchar(&c)) {
                uart_sendchar(c);
                if (c == '\r') uart_sendchar('\n');
            }
        }
    #endif
    
}