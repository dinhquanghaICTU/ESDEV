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
#define COLOR_WHITE   4   // không nhận ra màu nào = trắng/nền

#define SEEK_SPEED    35

typedef enum {
    STATE_FOLLOW,       // Đang trên xanh → PID giữ thẳng
    STATE_FIND_LEFT,    // Ra trắng, quét sang trái tìm xanh
    STATE_FIND_RIGHT,   // Ra trắng, quét sang phải tìm xanh
    STATE_STOP
} LineState_t;


void app_init();

void app_run();

void test_pid();

void test_color(void);

#endif // __APP_H__