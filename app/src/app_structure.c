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

void Quangha_structure(void){

    RGB_1 = rgb_read_color(); // RGB_left 
    RGB_2 = rgb2_read_color();// RGB_right

    // char buffer[100];
    // sprintf(buffer, "RGB_1 %d , RGB_2 %d \r\n",RGB_1, RGB_2);
    // uart_sendstr(buffer);

    
    switch (fsm.checkpoint)
    {
    case LUNG_CU:
        if((RGB_1 == RED) && (RGB_2 == RED)){
            motor_stop();
            delay_ms(INNCREE_FORWORD);
            motor_forward(SPEED_LIMIT);
            delay_ms(DELAY_SPEED);
        }
        else if (RGB_1 == WHITE)
        {
            turn_right(SPEED_LIMIT);
            delay_ms(400);
        }
        else if (RGB_2 == WHITE)
        {
            turn_left(FIXLEFT_SPEED);
            delay_ms(400);
        }
        else if((RGB_2 == BLUE) && ((RGB_1 == GREEN))){
            motor_stop();
            delay_ms(INNCREE_FORWORD);
            // fix_left(FIXLEFT_SPEED);
            // delay_ms(DELAY_HANOI);
            motor_stop();
            delay_ms(100);
            fix_left(FIXLEFT_SPEED);
            delay_ms(DELAY_HANOI);
            motor_stop();
            delay_ms(100);
           
            fsm.checkpoint = HOANG_XA;
        }
        else if((RGB_2 == BLUE) && ((RGB_1 == BLUE))){
            motor_stop();
            delay_ms(INNCREE_FORWORD);
            fix_left(FIXLEFT_SPEED);
            delay_ms(DELAY_HANOI);
            motor_stop();
            delay_ms(100);
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
            uart_sendstr("Hoangxa===============\r\n");
            fsm.checkpoint = HOANG_XA;
        }
        else if((RGB_2 == GREEN) || ((RGB_1 == GREEN)))
        {
            
            motor_stop();
            delay_ms(INNCREE_FORWORD);
            fix_left(FIXLEFT_SPEED);
            delay_ms(700);
            motor_stop();
            delay_ms(100);
            // turn_right(SPEED_LIMIT);
            // delay_ms(DELAY_HANOI);
            uart_sendstr("Hoangxa===============\r\n");
            fsm.checkpoint = HOANG_XA;
        }
        break;

    case HOANG_XA:
        if((RGB_1 == BLUE) && (RGB_2 == BLUE)){
            if(fixcheck == 1){
                // motor_forward(SPEED_LIMIT);
                // delay_ms(300);
                motor_stop();
                delay_ms(INNCREE_FORWORD);
            }
            motor_forward(SPEED_LIMIT);
            delay_ms(DELAY_SPEED);
        }
        else if (RGB_1 == WHITE)
        {
           
            turn_right(SPEED_LIMIT);
            delay_ms(400);
        }
        else if (RGB_2 == WHITE)
        {
            turn_left(SPEED_LIMIT);
            delay_ms(400);
        }

        else if ((RGB_1 == GREEN) && (RGB_2 == GREEN))
        {
            motor_stop();
            delay_ms(300);
            motor_forward(SPEED_LIMIT);
            delay_ms(100);
            uart_sendstr("Truongxa===============\r\n");
            fsm.checkpoint = TRUONG_XA;
        }

        else if ((RGB_1 == GREEN) || (RGB_2 == GREEN))
        {
            motor_stop();
            delay_ms(300);
            motor_forward(SPEED_LIMIT);
            delay_ms(100);
             uart_sendstr("Truongxa===============\r\n");
            fsm.checkpoint = TRUONG_XA;
        }
        else if ((RGB_1 == BLUE) && (RGB_2 == RED))
        {
            motor_stop();
            delay_ms(300);
            motor_forward(SPEED_LIMIT);
            delay_ms(100);
        }
       
        break;
    case TRUONG_XA:
        if((RGB_1 == GREEN) && (RGB_2 == GREEN)){
            motor_stop();
            delay_ms(INNCREE_FORWORD);
            motor_forward(SPEED_LIMIT);
            delay_ms(DELAY_SPEED);
        }
        else if (RGB_1 == WHITE)
        {
            turn_right(SPEED_LIMIT);
            delay_ms(500);
        }
        else if (RGB_2 == WHITE)
        {   
            turn_left(SPEED_LIMIT);
            delay_ms(500);
        }

        else if ((RGB_1 == BLUE) && (RGB_2 == BLUE))
        {
            motor_stop();
            delay_ms(300);
            fix_left(FIXLEFT_SPEED);
            delay_ms(DELAY_CA_MAU);
            motor_stop();
            delay_ms(300);
            turn_left(SPEED_LIMIT);
            delay_ms(200);
            motor_stop();
            delay_ms(200);
            motor_forward(SPEED_LIMIT);
            delay_ms(100);
             uart_sendstr("Ca mau===============\r\n");
            fsm.checkpoint = CA_MAU;
        }
        else if ((RGB_1 == BLUE) && (RGB_2 == RED))
        {
            motor_stop();
            delay_ms(300);
            fix_left(FIXLEFT_SPEED);
            delay_ms(400);
             uart_sendstr("Ca mau===============\r\n");
            fsm.checkpoint = CA_MAU;
        }

        else if ((RGB_1 == BLUE) || (RGB_2 == BLUE))
        {
            motor_stop();
            delay_ms(300);
            fix_left(FIXLEFT_SPEED);
            delay_ms(DELAY_CA_MAU);
             uart_sendstr("Ca mau===============\r\n");
            fsm.checkpoint = CA_MAU;
        }
        
        break;
    case CA_MAU:
        if((RGB_1 == BLUE) && (RGB_2 == BLUE)){
            motor_stop();
            delay_ms(INNCREE_FORWORD);
            motor_forward(SPEED_LIMIT);
            delay_ms(DELAY_SPEED);
        }
        else if (RGB_1 == WHITE)
        {
            turn_right(SPEED_LIMIT);
            delay_ms(500);
        }
        else if (RGB_2 == WHITE)
        {
            turn_left(SPEED_LIMIT);
            delay_ms(500);
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
            delay_ms(300);
            uart_sendstr("Ha noi===============\r\n");
            fsm.checkpoint = HA_NOI;
        }
        else if ((RGB_1 == RED) && (RGB_2 == RED))
        {   
            motor_stop();
            delay_ms(INNCREE_FORWORD);
            motor_forward(SPEED_LIMIT);
            delay_ms(40);
            // motor_backward(SPEED_LIMIT);
            // delay_ms(350);
            motor_stop();
            delay_ms(INNCREE_FORWORD);
            fix_left(SPEED_LIMIT);
            delay_ms(350);
            // uart_sendstr("Ha noi===============\r\n");
             uart_sendstr("Ha noi===============\r\n");
            fsm.checkpoint = HA_NOI;
        }

        else if ((RGB_1 == GREEN) || (RGB_2 == GREEN))
        {

            motor_stop();
            delay_ms(INNCREE_FORWORD);
            motor_backward(SPEED_LIMIT);
            delay_ms(350);
            motor_stop();
            delay_ms(INNCREE_FORWORD);
            turn_right(SPEED_LIMIT);
            delay_ms(2000);
            uart_sendstr("Ha noi===============\r\n");
            fsm.checkpoint = HA_NOI;
        }
        break;
    case HA_NOI:
        if((RGB_1 == RED) && (RGB_2 == RED)){
            motor_stop();
            delay_ms(INNCREE_FORWORD);
            motor_forward(SPEED_LIMIT);
            delay_ms(DELAY_SPEED);
        }
        else if (RGB_1 == WHITE)
        {
            turn_right(SPEED_LIMIT);
            delay_ms(300);
        }
        else if (RGB_2 == WHITE)
        {
            turn_left(SPEED_LIMIT);
            delay_ms(300);
        }
        break;
    default:
        break;
   
    } 
}
