    #include "RGB_senser.h"
    #include "i2c.h"
    #include "gpio.h"
    #include "systick.h"
    #include "uart.h"
    #include "motor.h"

    void rgb_sensor_init(void)
    {
        gpio_pin_init(GPIOC, RGB_LED_PIN, GPIO_MODE_OUTPUT_PP_2MHZ);
        gpio_write_pin(GPIOC, RGB_LED_PIN, 1);   
        delay_ms(50);  
        rgb_write_byte(TCS34725_ENABLE, 0x00);
        delay_ms(10);
        rgb_write_byte(TCS34725_ATIME, TIME_24MS);      
        rgb_write_byte(TCS34725_CONTROL, _4XAGAIN);     
        rgb_write_byte(TCS34725_ENABLE, TCS34725_PON);
        delay_ms(3);
        rgb_write_byte(TCS34725_ENABLE, TCS34725_PON | TCS34725_AEN);
        delay_ms(30);   
    }

    void rgb_write_byte(uint8_t reg, uint8_t data) {
        i2c_start();
        i2c_send_address(RGB_ADDR, I2C_WRITE);
        i2c_write(TCS34725_COMMAND | reg);
        i2c_write(data);
        i2c_stop();
    }   

    uint8_t rgb_read_byte(uint8_t reg)
    {
        uint8_t data;
        i2c_start();
        i2c_send_address(RGB_ADDR, I2C_WRITE);
        i2c_write(TCS34725_COMMAND | reg);
        i2c_start();
        i2c_send_address(RGB_ADDR, I2C_READ);
        data = i2c_read_nack();
        i2c_stop();

        return data;
    }

    uint16_t rgb_read_16(uint8_t reg_low)
    {
        uint8_t low, high;

        i2c_start();
        i2c_send_address(RGB_ADDR, I2C_WRITE);
        i2c_write(TCS34725_COMMAND | reg_low);

        i2c_start();
        i2c_send_address(RGB_ADDR, I2C_READ);

        low  = i2c_read_ack();
        high = i2c_read_nack();

        return (high << 8) | low;
    }

    uint16_t clear;
    uint16_t red;
    uint16_t green;
    uint16_t blue;

   int rgb_read_color() {
    clear = rgb_read_16(0x14);
    red   = rgb_read_16(0x16);
    green = rgb_read_16(0x18);
    blue  = rgb_read_16(0x1A);

    
    // char buffer[100];
    // sprintf(buffer, "S1: C:%5u R:%5u G:%5u B:%5u\r\n", clear, red, green, blue);
    // uart_sendstr(buffer);
    

   
    float sum = red + green + blue;
    if (sum == 0) {
        // uart_sendstr("NO LIGHT\r\n");
        return 0;
    }
    float rn = red   / sum;
    float gn = green / sum;
    float bn = blue  / sum;
    float threshold = 0.08f;


    if (rn > 0.30f && gn > 0.30f && bn < 0.10f) {
        // uart_sendstr("YELLOW\r\n");
        return 0;
    }
    else if (rn > (1.0f/3 - threshold) && rn < (1.0f/3 + threshold) &&
        gn > (1.0f/3 - threshold) && gn < (1.0f/3 + threshold) &&
        bn > (1.0f/3 - threshold) && bn < (1.0f/3 + threshold)) {
        // uart_sendstr("WHITE\r\n");
        return 4;
    }
    else if (bn > rn && bn > gn) {
        // uart_sendstr("BLUE\r\n");
        return 1;
    }
    else if (gn > rn && gn > bn) {
        // uart_sendstr("GREEN\r\n");
        return 2;
    }
    else if (rn > gn && rn > bn) {
        // uart_sendstr("RED\r\n");
        return 3;
    }
    else {
        // uart_sendstr("WHITE\r\n");
        return 4;
    }
   
}


void rgb2_sensor_init(void)
{
    gpio_pin_init(GPIOC, RGB_LED_PIN, GPIO_MODE_OUTPUT_PP_2MHZ);
    gpio_write_pin(GPIOC, RGB_LED_PIN, 1);
    delay_ms(50);
    rgb2_write_byte(TCS34725_ENABLE, 0x00);
    delay_ms(10);
    rgb2_write_byte(TCS34725_ATIME, TIME_24MS);
    rgb2_write_byte(TCS34725_CONTROL, _4XAGAIN);
    rgb2_write_byte(TCS34725_ENABLE, TCS34725_PON);
    delay_ms(3);
    rgb2_write_byte(TCS34725_ENABLE, TCS34725_PON | TCS34725_AEN);
    delay_ms(30);
}

void rgb2_write_byte(uint8_t reg, uint8_t data) {
    i2c2_start();
    i2c2_send_address(RGB2_ADDR, I2C_WRITE);
    i2c2_write(TCS34725_COMMAND | reg);
    i2c2_write(data);
    i2c2_stop();
}

uint8_t rgb2_read_byte(uint8_t reg)
{
    uint8_t data;
    i2c2_start();
    i2c2_send_address(RGB2_ADDR, I2C_WRITE);
    i2c2_write(TCS34725_COMMAND | reg);
    i2c2_start();
    i2c2_send_address(RGB2_ADDR, I2C_READ);
    data = i2c2_read_nack();
    i2c2_stop();

    return data;
}

uint16_t rgb2_read_16(uint8_t reg_low)
{
    uint8_t low, high;

    i2c2_start();
    i2c2_send_address(RGB2_ADDR, I2C_WRITE);
    i2c2_write(TCS34725_COMMAND | reg_low);

    i2c2_start();
    i2c2_send_address(RGB2_ADDR, I2C_READ);

    low  = i2c2_read_ack();
    high = i2c2_read_nack();

    return (high << 8) | low;
}

uint16_t clear2;
uint16_t red2;
uint16_t green2;
uint16_t blue2;

int rgb2_read_color() {
    clear2 = rgb2_read_16(0x14);
    red2   = rgb2_read_16(0x16);
    green2 = rgb2_read_16(0x18);
    blue2  = rgb2_read_16(0x1A);

    // char buffer[100];
    // sprintf(buffer, "S2 C:%5u R:%5u G:%5u B:%5u\r\n", clear2, red2, green2, blue2);
    // uart_sendstr(buffer);

    
    float sum = red2 + green2 + blue2;
    if (sum == 0) {
        // uart_sendstr("S2: NO LIGHT\r\n");
        return 0;
    }
    float rn = red2   / sum;
    float gn = green2 / sum;
    float bn = blue2  / sum;
    float threshold = 0.08f;


    if (rn > 0.30f && gn > 0.30f && bn < 0.10f) {
        // uart_sendstr("S2: YELLOW\r\n");
        return 5;
    }
    else if (rn > (1.0f/3 - threshold) && rn < (1.0f/3 + threshold) &&
        gn > (1.0f/3 - threshold) && gn < (1.0f/3 + threshold) &&
        bn > (1.0f/3 - threshold) && bn < (1.0f/3 + threshold)) {
        // uart_sendstr("S2: WHITE\r\n");
        return 4;
    }
    else if (bn > rn && bn > gn) {
        // uart_sendstr("S2: BLUE\r\n");
        return 1;
    }
    else if (gn > rn && gn > bn) {
        // uart_sendstr("S2: GREEN\r\n");
        return 2;
    }
    else if (rn > gn && rn > bn) {
        // uart_sendstr("S2: RED\r\n");
        return 3;
    }
    else {
        // uart_sendstr("S2: WHITE\r\n");
        return 4;
    }
   
}