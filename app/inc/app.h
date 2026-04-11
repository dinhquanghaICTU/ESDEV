#ifndef __APP_H__
#define __APP_H__ 
#include "esdev_config.h"

#if (PID_MODE || TEST_COLOR_SENSOR )
    #define PID_KP              5.0f    
    #define PID_KD              1.5f    
    #define PID_KI              0.02f   
    #define PID_INTEGRAL_LIMIT  30.0f   
    #define PID_OUTPUT_LIMIT    50.0f   
    #define BASE_SPEED          60
    #define LOOP_DT_MS          10
    #define LOOP_DT_S           (LOOP_DT_MS / 1000.0f)
#endif


#define COLOR_BLUE    1
#define COLOR_GREEN   2
#define COLOR_RED     3
#define COLOR_WHITE   4   

#define SEEK_SPEED    35

typedef enum {
    STATE_FOLLOW,       
    STATE_FIND_LEFT,    
    STATE_FIND_RIGHT,   
    STATE_STOP
} LineState_t;


void app_init();
void app_run();
void fsm_init(void);


void Quangha_structure(void);



#endif // __APP_H__