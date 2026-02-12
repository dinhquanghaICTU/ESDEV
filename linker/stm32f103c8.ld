ENTRY(Reset_Handler)

MEMORY
{
  FLASH (rx)  : ORIGIN = 0x08000000, LENGTH = 64K
  SRAM  (rwx) : ORIGIN = 0x20000000, LENGTH = 20K
}

SECTIONS
{
  .isr_vector :
  {
    KEEP(*(.isr_vector))
  } > FLASH

  .text :
  {
    *(.text*)
    *(.rodata*)
    _etext = .;
  } > FLASH

  .data : AT (_etext)
  {
    _sdata = .;
    *(.data*)
    _edata = .;
  } > SRAM

  .bss :
  {
    _sbss = .;
    *(.bss*)
    *(COMMON)
    _ebss = .;
  } > SRAM

  /* ===== Heap & Stack ===== */

  ._user_heap_stack :
  {
    . = ALIGN(8);
    _end = .;
    PROVIDE(end = .);

    . = . + 0x400;   /* 1KB heap */
    . = ALIGN(8);

    _estack = ORIGIN(SRAM) + LENGTH(SRAM);
  } > SRAM
}
