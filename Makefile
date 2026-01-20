#project name
PROJECT	:= ESDEV

#Kien truc
MCU		:= cortex-m3

#linker and startup file
LD_SCRIPT	:= stm32f103c8.ld
STARTUP_FILE:= startup_stm32f103c8.c


###################################
#			TOOLCHAINS			
###################################
TOOLCHAIN_PATH := /home/dinhquangha/arm-gnu-toolchain-14.3.rel1-x86_64-arm-none-eabi/bin
PREFIX_TOOLCHAINS	:= arm-none-eabi
GCC					:= $(TOOLCHAIN_PATH)/$(PREFIX_TOOLCHAINS)-gcc
CP					:= $(TOOLCHAIN_PATH)/$(PREFIX_TOOLCHAINS)-objcopy
ASM 				:= $(TOOLCHAIN_PATH)/$(PREFIX_TOOLCHAINS)-as
SIZE				:= $(TOOLCHAIN_PATH)/$(PREFIX_TOOLCHAINS)-size


####################################
#			THU MUC
####################################
BUILD_DIR			:= build
STARTUP_DIR		 	:= startup
LINKER_DIR			:= linker

# Dinh nghia tat ca thu muc chua source code
SRC_DIRS := \
	src \
	hardware/src \
	middle/src

# Dinh nghia tat ca thu muc chua header files
INC_DIRS := \
	inc \
	hardware/inc \
	middle/inc

# Them -I vao truoc moi include directory
INCLUDES := $(addprefix -I, $(INC_DIRS))


####################################
#	  SOURCE & OBJECTS FILES
####################################
# Tim tat ca file .c trong cac thu muc da dinh nghia
C_SOURCES := $(foreach dir,$(SRC_DIRS),$(wildcard $(dir)/*.c))

# Tim startup file
STARTUP_SOURCE := $(STARTUP_DIR)/$(STARTUP_FILE)

# Tao danh sach object files (luu vao build/obj de tranh trung ten)
C_OBJECTS := $(patsubst %.c,$(BUILD_DIR)/obj/%.o,$(notdir $(C_SOURCES)))
STARTUP_OBJECT := $(patsubst %.c,$(BUILD_DIR)/obj/%.o,$(notdir $(STARTUP_SOURCE)))

ALL_OBJECTS := $(C_OBJECTS) $(STARTUP_OBJECT)


####################################
#			FLAGS
####################################
CFLAGS	:= -mcpu=$(MCU) -mthumb -Wall -O0 -g3 -ffreestanding -nostdlib $(INCLUDES)
LDFLAGS := -T$(LINKER_DIR)/$(LD_SCRIPT) -nostdlib -Wl,-Map=$(BUILD_DIR)/$(PROJECT).map
 

####################################
#			RULES
####################################

.PHONY: all main bin hex clean flash info

# Rule chinh
all: main bin hex
	@echo "==================================="
	@echo "Build hoan thanh!"
	@echo "==================================="
	@$(SIZE) $(BUILD_DIR)/$(PROJECT).elf

main: $(BUILD_DIR)/$(PROJECT).elf
bin: $(BUILD_DIR)/$(PROJECT).bin
hex: $(BUILD_DIR)/$(PROJECT).hex


# Link ELF
$(BUILD_DIR)/$(PROJECT).elf: $(ALL_OBJECTS) | $(BUILD_DIR)
	@echo "Linking..."
	@$(GCC) $(CFLAGS) $^ $(LDFLAGS) -o $@
	@echo "Linked: $@"

# Su dung vpath de Make tim file tu nhieu thu muc
vpath %.c $(SRC_DIRS) $(STARTUP_DIR)

# Bien dich .c sang .o
$(BUILD_DIR)/obj/%.o: %.c | $(BUILD_DIR)/obj
	@echo "Compiling: $<"
	@$(GCC) $(CFLAGS) -c $< -o $@

# Tao binary file
$(BUILD_DIR)/$(PROJECT).bin: $(BUILD_DIR)/$(PROJECT).elf
	@echo "Creating binary..."
	@$(CP) -O binary $< $@
	@echo "Created: $@"

# Tao hex file
$(BUILD_DIR)/$(PROJECT).hex: $(BUILD_DIR)/$(PROJECT).elf
	@echo "Creating hex..."
	@$(CP) -O ihex $< $@
	@echo "Created: $@"

# Tao thu muc build
$(BUILD_DIR):
	@mkdir -p $@

$(BUILD_DIR)/obj:
	@mkdir -p $@

# Clean build directory
clean:
	@echo "Cleaning build directory..."
	@rm -rf $(BUILD_DIR)
	@echo "Clean complete!"

# Flash len STM32
flash: bin
	@echo "Flashing to STM32..."
	@st-flash write $(BUILD_DIR)/$(PROJECT).bin 0x8000000
	@echo "Flash complete!"

# Hien thi thong tin debug
info:
	@echo "==================================="
	@echo "Project: $(PROJECT)"
	@echo "MCU: $(MCU)"
	@echo "==================================="
	@echo ""
	@echo "Include Directories:"
	@$(foreach dir,$(INC_DIRS),echo "  - $(dir)";)
	@echo ""
	@echo "Source Directories:"
	@$(foreach dir,$(SRC_DIRS),echo "  - $(dir)";)
	@echo ""
	@echo "C Source Files:"
	@$(foreach file,$(C_SOURCES),echo "  - $(file)";)
	@echo ""
	@echo "Startup File:"
	@echo "  - $(STARTUP_SOURCE)"
	@echo ""
	@echo "Object Files:"
	@$(foreach file,$(ALL_OBJECTS),echo "  - $(file)";)
	@echo ""
	@echo "Toolchain:"
	@echo "  - GCC: $(GCC)"
	@echo ""