#ifndef __ESDEV_CONFIG_H__
#define __ESDEV_CONFIG_H__

//quangha_structure
#define SPEED_LIMIT 57
#define FIXLEFT_SPEED 60
#define CUNGMAU 40 
#define DELAY_HANOI 550
#define DELAY_CA_MAU 600 
#define INNCREE_FORWORD 400

#define DELAY_SPEED 500 
#define LAC  400 

#define LAC_Camau  500 





#define TEST_LOG    0
#define TEST_LOG_AND_RGB 0

#define PID_MODE 0 

#define TEST_COLOR_SENSOR 0


#define ESDEV_MODE   0

#ifndef PID_KP
#define PID_KP              3.5f
#endif
#ifndef PID_KI
#define PID_KI              0.0f
#endif
#ifndef PID_KD
#define PID_KD              0.8f
#endif
#ifndef PID_INTEGRAL_LIMIT
#define PID_INTEGRAL_LIMIT 0.0f
#endif
#ifndef PID_OUTPUT_LIMIT
#define PID_OUTPUT_LIMIT    35
#endif

// PID cho heading (gyro)
#ifndef PID_HEAD_KP
#define PID_HEAD_KP         2.0f
#endif
#ifndef PID_HEAD_KI
#define PID_HEAD_KI         0.0f
#endif
#ifndef PID_HEAD_KD
#define PID_HEAD_KD         0.3f
#endif

// Tốc độ base
#ifndef BASE_SPEED
#define BASE_SPEED          40
#endif

#endif // __ESDEV_CONFIG_H__