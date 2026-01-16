#include "led.h"
#include "motor.h"

#include <stdint.h>


int main(void){

    motor_init();
    
    while (1)
    {
    //    motor_backward();
        turn_left();
    }
    
}