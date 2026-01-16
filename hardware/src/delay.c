
#include "delay.h"


void delay_ms(unsigned int ms) {
    for(unsigned int i = 0; i < ms; i++) {
        for(volatile unsigned int j = 0; j < 2000; j++);
    }
}