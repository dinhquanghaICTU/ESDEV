    #include "RGB_senser.h"
    #include "i2c.h"
    #include "gpio.h"
    #include "systick.h"
    #include "uart.h"

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

    void checkcolor(uint16_t r, uint16_t g, uint16_t b)
    {

        
        float sum = r + g + b;
        float rn = r / sum;
        float gn = g / sum;
        float bn = b / sum;

        if(bn > rn && bn > gn)
            uart_sendstr("BLUE\r\n");

        else if(gn > rn && gn > bn)
            uart_sendstr("GREEN\r\n");

        else if(rn > gn && rn > bn)
            uart_sendstr("RED\r\n");
    }

    uint16_t clear;
    uint16_t red;
    uint16_t green;
    uint16_t blue;

    void rgb_read_color(void)
    {
        clear = rgb_read_16(0x14);
        red   = rgb_read_16(0x16);
        green = rgb_read_16(0x18);
        blue  = rgb_read_16(0x1A);

        char buffer[100];
        //C:%5u
        
        sprintf(buffer," R:%5u G:%5u B:%5u\r\n",clear, red, green, blue);
        uart_sendstr(buffer);
        checkcolor(red, green, blue);
    
        
    }