#include "led.h"
#include "motor.h"
#include "delay.h"

#include <stdint.h>

int main(void){

    motor_init();
    led_init();
    
    // motor_forward();
    // delay_ms(1000);
    // motor_backward();
    
    while (1)
    {
    //   led_on();  
        led_on();
        delay_ms(1000);
        led_off(); 
        
        
        // delay_ms(1000);
    }
    
}