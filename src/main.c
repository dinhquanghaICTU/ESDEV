
#include "app.h"
#include <stdio.h>
#include "esdev_config.h"

#if(TEST_LOG)
    #include "systick.h"
    #include "pwm.h"
    #include "uart.h"
    #include "i2c.h"
    #include "RGB_senser.h" 
#endif

int main(void)
{
    #if (TEST_LOG)
        systick_init();  
        pwm_init();
        i2c_init();
        rgb_sensor_init();
        uart_init(115200); 
    #endif
    
    app_init();
    app_run();

    // uart_sendstr("test log \r\n");
    #if(TEST_LOG)
        char c;
        while (1)
        {
            uart_sendstr("test log \r\n");
            #if (TEST_LOG_AND_RGB)
                rgb_read_color();
                delay_ms(1000);
            #endif 
            while (uart_getchar(&c)) {
                uart_sendchar(c);
                if (c == '\r') uart_sendchar('\n');
            }
        }
    #endif
    
}