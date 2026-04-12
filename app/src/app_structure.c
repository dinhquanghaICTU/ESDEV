#include "app_structure.h"
#include "esdev_config.h"
#include "RGB_senser.h"
#include "motor.h"
#include "systick.h"

#include "uart.h"



static My_fsm fsm;
void fsm_init(void)
{
    fixcheck = 1;
    fsm.checkpoint = LUNG_CU;
}

uint16_t send_uart = 1;

void Quangha_structure(void){

    RGB_1 = rgb_read_color(); // RGB_left 
    RGB_2 = rgb2_read_color();// RGB_right
    // char str[100];
    // sprintf(str,"%d,  %d\r\n",RGB_1,RGB_2);
    // uart_sendstr(str);
    
    switch (fsm.checkpoint)
    {
    case LUNG_CU:
        if((RGB_1 == RED) && (RGB_2 == RED)){
            
            uart_sendstr("ESDEV09:FW-LUNGCU\r\n");
            
            
            
            motor_stop();
            delay_ms(INNCREE_FORWORD);
            motor_forward(50);
            delay_ms(DELAY_SPEED);
        }
        else if (RGB_1 == WHITE)
        {
            turn_right(SPEED_LIMIT);
            delay_ms(LAC);
        }
        else if (RGB_2 == WHITE)
        {
            turn_left(FIXLEFT_SPEED);
            delay_ms(LAC);
        }
        else if((RGB_2 == BLUE) && ((RGB_1 == GREEN))){
            motor_stop();
            delay_ms(INNCREE_FORWORD);
            // fix_left(FIXLEFT_SPEED);
            // delay_ms(DELAY_HANOI);
            motor_stop();
            delay_ms(100);
            motor_forward(SPEED_LIMIT);
            delay_ms(150);
            fix_left(FIXLEFT_SPEED);
            delay_ms(DELAY_HANOI);
            motor_stop();
            delay_ms(100);

            uart_sendstr("ESDEV09:CK-LUNGCU\r\n");
            
            fsm.checkpoint = HOANG_XA;
        }
        else if((RGB_2 == BLUE) && ((RGB_1 == BLUE))){
            motor_stop();
            delay_ms(INNCREE_FORWORD);
            fix_left(FIXLEFT_SPEED);
            delay_ms(DELAY_HANOI);
            motor_stop();
            delay_ms(100);
            uart_sendstr("ESDEV09:CK-LUNGCU\r\n");
            
            fsm.checkpoint = HOANG_XA;
        }

        else if((RGB_2 == GREEN) && ((RGB_1 == GREEN)))
        {
            motor_stop();
            delay_ms(INNCREE_FORWORD);
            fix_left(FIXLEFT_SPEED);
            delay_ms(DELAY_HANOI);
            motor_stop();
            delay_ms(100);
            // fix_left(FIXLEFT_SPEED);
            // delay_ms(DELAY_HANOI);
            uart_sendstr("ESDEV09:CK-LUNGCU\r\n");
            
            fsm.checkpoint = HOANG_XA;
        }
        else if((RGB_2 == GREEN) || ((RGB_1 == GREEN)))
        {
            
            motor_stop();
            delay_ms(INNCREE_FORWORD);
            fix_left(FIXLEFT_SPEED);
            delay_ms(DELAY_HANOI);
            motor_stop();
            delay_ms(100);
            // turn_right(SPEED_LIMIT);
            // delay_ms(DELAY_HANOI);
            uart_sendstr("ESDEV09:CK-LUNGCU\r\n");
            
            fsm.checkpoint = HOANG_XA;
        }
        break;

    case HOANG_XA:
        if((RGB_1 == BLUE) && (RGB_2 == BLUE)){
            
            uart_sendstr("ESDEV09:FW-HOANGSA\r\n");
                
            
            if(fixcheck == 1){
                // motor_forward(SPEED_LIMIT);
                // delay_ms(LAC);
                motor_stop();
                delay_ms(INNCREE_FORWORD);
            }
            motor_forward(CUNGMAU);
            delay_ms(DELAY_SPEED);
        }
        else if (RGB_1 == WHITE)
        {
           
            turn_right(SPEED_LIMIT);
            delay_ms(LAC);
        }
        else if (RGB_2 == WHITE)
        {
            turn_left(SPEED_LIMIT);
            delay_ms(LAC);
        }

        else if ((RGB_1 == GREEN) && (RGB_2 == GREEN))
        {
            motor_stop();
            delay_ms(LAC);
            motor_forward(SPEED_LIMIT);
            delay_ms(100);
            uart_sendstr("ESDEV09:CK-HOANGSA\r\n");
             
            fsm.checkpoint = TRUONG_XA;
        }

        else if ((RGB_1 == GREEN) || (RGB_2 == GREEN))
        {
            motor_stop();
            delay_ms(LAC);
            motor_forward(SPEED_LIMIT);
            delay_ms(100);
            uart_sendstr("ESDEV09:CK-HOANGSA\r\n");
            
            fsm.checkpoint = TRUONG_XA;
        }
        else if ((RGB_1 == BLUE) && (RGB_2 == RED))
        {
            motor_stop();
            delay_ms(LAC);
            motor_forward(SPEED_LIMIT);
            delay_ms(100);
        }
        break;
    case TRUONG_XA:
        if((RGB_1 == GREEN) && (RGB_2 == GREEN)){
            
            
            uart_sendstr("ESDEV09:FW-TRUONGSA\r\n");
                
            
            
            motor_stop();
            delay_ms(INNCREE_FORWORD);
            motor_forward(CUNGMAU);
            delay_ms(DELAY_SPEED);
        }
        else if (RGB_1 == WHITE)
        {
            turn_right(SPEED_LIMIT);
            delay_ms(LAC);
        }
        else if (RGB_2 == WHITE)
        {   
            turn_left(SPEED_LIMIT);
            delay_ms(LAC);
        }
        
        else if ((RGB_1 == BLUE) && (RGB_2 == BLUE))
        {
            uint16_t check = 1;
            
            if (check){
                motor_stop();
                delay_ms(LAC);
                motor_forward(SPEED_LIMIT);
                delay_ms(100);
                motor_stop();
                delay_ms(LAC);
                fix_left(FIXLEFT_SPEED);
                delay_ms(450);
                motor_stop();
                delay_ms(400);
                check = 0;
                
            }
            
           
            motor_stop();
            delay_ms(200);
            motor_forward(SPEED_LIMIT);
            delay_ms(200);
            uart_sendstr("ESDEV09:CK-TRUONGSA\r\n");
           
            fsm.checkpoint = CA_MAU;
        }
        else if ((RGB_1 == BLUE) && (RGB_2 == RED))
        {
            motor_stop();
            delay_ms(1000);
            motor_forward(SPEED_LIMIT);
            delay_ms(200);
        }
        else if ((RGB_1 == BLUE) && (RGB_2 == RED))
        {
            
            motor_stop();
            delay_ms(LAC);
            motor_forward(SPEED_LIMIT);
            delay_ms(200);
            motor_stop();
            delay_ms(LAC);
            fix_left(SPEED_LIMIT);
            delay_ms(400);
            motor_stop();
            delay_ms(LAC);
            // fix_left(FIXLEFT_SPEED);
            // delay_ms(350);
            uart_sendstr("ESDEV09:CK-TRUONGSA\r\n");
            
            fsm.checkpoint = CA_MAU;
        }

        else if ((RGB_1 == BLUE) || (RGB_2 == BLUE))
        {
            
            motor_stop();
            delay_ms(400);
            motor_forward(SPEED_LIMIT);
            delay_ms(100);
            motor_stop();
            delay_ms(LAC);
            fix_left(FIXLEFT_SPEED);
            delay_ms(350);
            uart_sendstr("ESDEV09:CK-TRUONGSA\r\n");
            
            fsm.checkpoint = CA_MAU;
        }
        
        break;
    case CA_MAU:
        if((RGB_1 == BLUE) && (RGB_2 == BLUE)){
            
            uart_sendstr("ESDEV09:FW-CAMAU\r\n");
                
            
            motor_stop();
            delay_ms(INNCREE_FORWORD);
            motor_forward(43);
            delay_ms(DELAY_SPEED);
        }
        else if (RGB_1 == WHITE)
        {
            turn_right(SPEED_LIMIT);
            delay_ms(LAC_Camau);
        }
        else if (RGB_2 == WHITE)
        {
            uart_sendstr("ESDEV09:CK-CAMAU\r\n");
            turn_left(SPEED_LIMIT);
            delay_ms(LAC_Camau);
        }
        else if ((RGB_1 ==BLUE) && (RGB_2 == RED))
        {
            motor_stop();
            delay_ms(1000);
            motor_forward(SPEED_LIMIT);
            delay_ms(100);
        }

        else if ((RGB_1 == RED) || (RGB_2 == RED))
        {
            // motor_stop();
            // delay_ms(INNCREE_FORWORD);
            // turn_right(SPEED_LIMIT);
            // delay_ms(1700);

            // motor_stop();
            // delay_ms(INNCREE_FORWORD);
            // motor_backward(SPEED_LIMIT);
            // delay_ms(350);
            motor_stop();
            delay_ms(INNCREE_FORWORD);
            fix_left(FIXLEFT_SPEED);
            delay_ms(400);
            uart_sendstr("ESDEV09:CK-CAMAU\r\n");
            
            fsm.checkpoint = HA_NOI;
        }
        else if ((RGB_1 == RED) && (RGB_2 == RED))
        {   
            motor_stop();
            delay_ms(INNCREE_FORWORD);
            motor_forward(CUNGMAU);
            delay_ms(40);
            // motor_backward(SPEED_LIMIT);
            // delay_ms(350);
            motor_stop();
            delay_ms(INNCREE_FORWORD);
            fix_left(SPEED_LIMIT);
            delay_ms(650);
            // 
            uart_sendstr("ESDEV09:CK-CAMAU\r\n");
            
            fsm.checkpoint = HA_NOI;
        }
        else if ((RGB_1 == RED)&&(RGB_2 == BLUE))
        {
            motor_stop();
            delay_ms(1000);
            motor_forward(SPEED_LIMIT);
            delay_ms(100);
        }

        else if ((RGB_1 == GREEN) || (RGB_2 == GREEN))
        {

            motor_stop();
            delay_ms(1000);
            motor_forward(SPEED_LIMIT);
            delay_ms(100);
            motor_stop();
            delay_ms(1000);
            motor_backward(SPEED_LIMIT);
            delay_ms(250);
            motor_backward(SPEED_LIMIT);
            delay_ms(150);
            motor_stop();
            delay_ms(INNCREE_FORWORD);
            turn_right(SPEED_LIMIT);
            delay_ms(1200);

            uart_sendstr("ESDEV09:CK-CAMAU\r\n");
            
            fsm.checkpoint = HA_NOI;
        }
        break;
    case HA_NOI:
        if((RGB_1 == RED) && (RGB_2 == RED)){
            
            uart_sendstr("ESDEV09:FW-HANOI\r\n");
                
            
            motor_stop();
            delay_ms(INNCREE_FORWORD);
            motor_forward(45);
            delay_ms(DELAY_SPEED);
        }
        else if (RGB_1 == WHITE)
        {
            turn_right(SPEED_LIMIT);
            delay_ms(400);
        }
        else if (RGB_2 == WHITE)
        {
            uart_sendstr("ESDEV09:KT-HANOI\r\n");
            turn_left(SPEED_LIMIT);
            delay_ms(400);
        }

        else if ((RGB_1 == 0))
        {
           
            
            motor_stop();
            delay_ms(100000);
        }
        
        break;

    default:
        break;
   
    } 
}
