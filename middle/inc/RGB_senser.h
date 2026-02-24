#ifndef __RGB_SENSOR_H__
#define __RGB_SENSOR_H__

#include <stdio.h>

#include "stdint.h"


#define  RGB_ADDR 0x29 


#define TCS34725_COMMAND        0x80

#define TCS34725_ENABLE         0x00
#define TCS34725_ATIME          0x01
#define TCS34725_CONTROL        0x0F

#define TCS34725_PON            0x01
#define TCS34725_AEN            0x02

#define TIME_24MS   0xF6 
#define _4XAGAIN    0x01 

#define RGB_LED_PIN 13

void rgb_turn_on_led();
void rgb_sensor_init(void);

void rgb_write_byte(uint8_t reg, uint8_t data);

uint8_t rgb_read_byte(uint8_t reg);
uint16_t rgb_read_16(uint8_t reg_low);
void rgb_read_color(void);



#endif // __RGB_SENSOR_H__
