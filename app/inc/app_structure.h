#ifndef __APP_STRUCTURE_H__
#define __APP_STRUCTURE_H__ 


#include <stdint.h>

uint16_t RGB_1; 
uint16_t RGB_2; 
uint16_t fixcheck = 1;



typedef enum {
    YELLOW ,
    BLUE,
    GREEN,
    RED,
    WHITE,
} MyRGB;

typedef enum {
    IDLE,
    LUNG_CU,
    HOANG_XA,
    TRUONG_XA,
    CA_MAU,
    HA_NOI,
} Mycheckpoint;

// typedef struct 
// {
    
// }sendcmt;



typedef struct 
{
    MyRGB color;
    Mycheckpoint checkpoint;  
    // sendcmt cmt;
}My_fsm;








#endif // __APP_STRUCTURE_H__