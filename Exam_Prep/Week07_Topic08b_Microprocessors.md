# Subject 8 Part 2: Microprocessors & Microcontrollers

> **Exam Weightage: Part of 20 Marks** | **Difficulty: Moderate to High** | **Prep Time: ~2 Weeks**

---

## Table of Contents

1. [8085 Microprocessor](#1-8085-microprocessor)
2. [8086 Microprocessor](#2-8086-microprocessor)
3. [Addressing Modes, Interrupts, and Timing](#3-addressing-modes-interrupts-and-timing)
4. [8051 Microcontroller](#4-8051-microcontroller)
5. [Introduction to ARM Architecture](#5-introduction-to-arm-architecture)
6. [Memory Interfacing (Conceptual)](#6-memory-interfacing-conceptual)
7. [Checklist -- Practice MCQs](#checklist--practice-mcqs)

---

## 1. 8085 Microprocessor

### 1.1 What is a Microprocessor?

**Beginner explanation:** A microprocessor is the "brain" of a computer on a single chip. It fetches instructions from memory, decodes them, and executes them. The Intel 8085 was one of the first widely used 8-bit microprocessors (released in 1976).

### 1.2 8085 Architecture (Block Diagram Description)

The 8085 has the following major components:

**Registers:**

| Register | Size | Purpose |
|----------|------|---------|
| **A (Accumulator)** | 8-bit | Main register for arithmetic/logic operations |
| **B, C** | 8-bit each | General-purpose (can pair as BC = 16-bit) |
| **D, E** | 8-bit each | General-purpose (can pair as DE = 16-bit) |
| **H, L** | 8-bit each | General-purpose (HL = 16-bit, often used as memory pointer) |
| **SP (Stack Pointer)** | 16-bit | Points to the top of the stack in memory |
| **PC (Program Counter)** | 16-bit | Holds address of the next instruction to fetch |
| **Flag Register** | 8-bit | Holds status flags (S, Z, AC, P, CY) |

**Flag Register Details:**

| Flag | Bit Position | Meaning |
|------|-------------|---------|
| **S (Sign)** | D7 | 1 if result is negative (MSB = 1) |
| **Z (Zero)** | D6 | 1 if result is zero |
| **AC (Auxiliary Carry)** | D4 | 1 if carry from bit 3 to bit 4 (used in BCD) |
| **P (Parity)** | D2 | 1 if result has even number of 1s |
| **CY (Carry)** | D0 | 1 if carry out of MSB (bit 7) |

**Other components:**
- **ALU (Arithmetic Logic Unit):** Performs arithmetic (add, subtract) and logic (AND, OR, XOR) operations.
- **Instruction Register and Decoder:** Holds the current instruction and decodes it.
- **Timing and Control Unit:** Generates timing signals for internal operations and external bus control.
- **Address Bus:** 16-bit (can address 2^16 = 64 KB of memory).
- **Data Bus:** 8-bit (processes data 8 bits at a time).
- **Control Bus:** Carries control signals (RD', WR', IO/M', ALE, etc.).

### 1.3 Key 8085 Pin Descriptions

| Pin(s) | Name | Direction | Function |
|--------|------|-----------|----------|
| **AD0-AD7** | Address/Data Bus | Bidirectional | Multiplexed: Lower 8 address bits + 8 data bits |
| **A8-A15** | Higher Address Bus | Output | Upper 8 address bits (non-multiplexed) |
| **ALE** | Address Latch Enable | Output | Pulse to demultiplex AD0-AD7 (latch lower address) |
| **RD'** | Read | Output (active low) | Indicates read operation |
| **WR'** | Write | Output (active low) | Indicates write operation |
| **IO/M'** | IO/Memory Select | Output | 1 = I/O operation, 0 = Memory operation |
| **INTR** | Interrupt Request | Input | Maskable interrupt input |
| **RST 5.5, 6.5, 7.5** | Restart Interrupts | Input | Vectored maskable interrupts |
| **TRAP** | Trap | Input | Non-maskable interrupt (highest priority) |
| **READY** | Ready | Input | For synchronization with slow memory/peripherals |
| **HOLD** | Hold | Input | DMA request |
| **HLDA** | Hold Acknowledge | Output | Acknowledges HOLD request |
| **CLK OUT** | Clock Output | Output | System clock for peripherals |
| **RESET IN'** | Reset | Input (active low) | Resets the processor (PC = 0000H) |
| **SOD, SID** | Serial Out/In Data | Output/Input | Single-bit serial communication |

### 1.4 8085 Instruction Set Basics

**Instruction categories:**

| Category | Examples | Description |
|----------|---------|-------------|
| **Data Transfer** | MOV, MVI, LDA, STA, LXI | Move data between registers/memory |
| **Arithmetic** | ADD, ADI, SUB, INR, DCR, DAA | Arithmetic operations |
| **Logical** | ANA, ANI, ORA, ORI, XRA, CMP | Logic and compare operations |
| **Branch** | JMP, JZ, JNZ, JC, CALL, RET | Conditional/unconditional jumps |
| **Machine Control** | NOP, HLT, EI, DI, SIM, RIM | Control processor state |
| **Stack** | PUSH, POP | Push/pop register pairs to/from stack |

**Common instruction examples:**

```
MVI A, 05H     ; Load immediate value 05H into Accumulator
MOV B, A       ; Copy contents of A into B
ADD B          ; Add B to A, result in A
STA 2050H      ; Store A at memory address 2050H
LDA 2050H      ; Load A from memory address 2050H
JMP 2000H      ; Jump to address 2000H
HLT            ; Halt the processor
```

**Instruction sizes:**
- **1-byte:** MOV B,A (opcode only)
- **2-byte:** MVI A, 05H (opcode + data)
- **3-byte:** LDA 2050H (opcode + 2-byte address)

---

## 2. 8086 Microprocessor

### 2.1 Overview

The Intel 8086 is a **16-bit** microprocessor (1978) -- a major upgrade from the 8085. It introduced the concept of **segmented memory** and **pipelining**.

### 2.2 8086 Architecture (Key Blocks)

The 8086 is internally divided into two units that work in parallel:

**Bus Interface Unit (BIU):**
- Fetches instructions from memory (pre-fetches into a 6-byte instruction queue).
- Handles address calculation using segment registers.
- Manages the external bus.

**Execution Unit (EU):**
- Decodes and executes instructions from the instruction queue.
- Contains the ALU, flag register, and general-purpose registers.

This separation allows **pipelining** -- the BIU fetches the next instruction while the EU executes the current one.

### 2.3 8086 Registers

**General-Purpose Registers (16-bit, each divisible into two 8-bit halves):**

| Register | High/Low | Primary Use |
|----------|----------|-------------|
| **AX** | AH, AL | **Accumulator** -- arithmetic, I/O |
| **BX** | BH, BL | **Base** -- base address for memory |
| **CX** | CH, CL | **Counter** -- loop counts, shift counts |
| **DX** | DH, DL | **Data** -- I/O port addresses, multiply/divide |

**Pointer and Index Registers (16-bit):**

| Register | Purpose |
|----------|---------|
| **SP** | Stack Pointer |
| **BP** | Base Pointer (for accessing stack-based data) |
| **SI** | Source Index (string operations) |
| **DI** | Destination Index (string operations) |

**Segment Registers (16-bit):**

| Register | Purpose | Paired With |
|----------|---------|-------------|
| **CS** | Code Segment | IP (Instruction Pointer) |
| **DS** | Data Segment | BX, SI, DI |
| **SS** | Stack Segment | SP, BP |
| **ES** | Extra Segment | DI (string operations) |

**Special Registers:**

| Register | Size | Purpose |
|----------|------|---------|
| **IP** | 16-bit | Instruction Pointer (like PC in 8085) |
| **Flags** | 16-bit | Status and control flags |

### 2.4 8086 Memory Segmentation

**Beginner explanation:** The 8086 has a 20-bit address bus (can address 2^20 = 1 MB). But its registers are only 16-bit. So it uses **segmentation** to create 20-bit addresses from two 16-bit values.

**Physical Address calculation:**

```
Physical Address = Segment Register * 16 + Offset
                 = Segment Register * 10H + Offset
```

**Worked Example:**

```
CS = 1234H, IP = 0005H
Physical Address = 1234H * 10H + 0005H
                 = 12340H + 0005H
                 = 12345H
```

### 2.5 8086 Flag Register

The 8086 has a 16-bit flag register with 9 flags:

**Status Flags (6):** CF, PF, AF, ZF, SF, OF
**Control Flags (3):** TF (Trap), IF (Interrupt), DF (Direction)

| Flag | Name | Purpose |
|------|------|---------|
| **CF** | Carry Flag | Carry out of MSB |
| **PF** | Parity Flag | Even parity of result |
| **AF** | Auxiliary Carry | Carry from bit 3 to bit 4 |
| **ZF** | Zero Flag | Result is zero |
| **SF** | Sign Flag | Result is negative |
| **OF** | Overflow Flag | Signed overflow occurred |
| **TF** | Trap Flag | Single-step debugging |
| **IF** | Interrupt Flag | Enable/disable maskable interrupts |
| **DF** | Direction Flag | String operation direction (0=up, 1=down) |

---

## 3. Addressing Modes, Interrupts, and Timing

### 3.1 Addressing Modes of 8085

| Mode | Description | Example | Operand Location |
|------|-------------|---------|-----------------|
| **Immediate** | Data in instruction itself | MVI A, 32H | In instruction |
| **Register** | Data in a register | MOV A, B | Register |
| **Direct** | Memory address in instruction | LDA 2050H | Memory (address in instruction) |
| **Register Indirect** | Address in register pair (HL) | MOV A, M | Memory (address in HL) |
| **Implicit/Implied** | Operand implied by opcode | CMA (complement A) | Fixed (Accumulator) |

### 3.2 Addressing Modes of 8086 (Additional Modes)

| Mode | Description | Example |
|------|-------------|---------|
| **Immediate** | Data in instruction | MOV AX, 1234H |
| **Register** | Data in register | MOV AX, BX |
| **Direct** | Address in instruction | MOV AX, [2000H] |
| **Register Indirect** | Address in register | MOV AX, [BX] |
| **Based** | Base register + displacement | MOV AX, [BX+10H] |
| **Indexed** | Index register + displacement | MOV AX, [SI+20H] |
| **Based Indexed** | Base + Index + displacement | MOV AX, [BX+SI+10H] |

### 3.3 Interrupts

**What is an interrupt?** An interrupt is a signal that causes the processor to temporarily stop its current work, execute a special routine (ISR -- Interrupt Service Routine), and then return to the original task.

**8085 Interrupts (5 total):**

| Interrupt | Type | Priority | Vector Address | Maskable? |
|-----------|------|----------|----------------|-----------|
| **TRAP** | Edge & Level | **1 (Highest)** | 0024H | **No** (non-maskable) |
| **RST 7.5** | Edge | 2 | 003CH | Yes |
| **RST 6.5** | Level | 3 | 0034H | Yes |
| **RST 5.5** | Level | 4 | 002CH | Yes |
| **INTR** | Level | 5 (Lowest) | Depends on instruction | Yes |

**Masking:** SIM (Set Interrupt Mask) instruction controls which maskable interrupts are enabled/disabled. EI (Enable Interrupts) and DI (Disable Interrupts) control the global interrupt enable.

**8086 Interrupts:**

| Type | Description | Example |
|------|-------------|---------|
| **Hardware (Maskable)** | Via INTR pin | Peripheral interrupts |
| **Hardware (Non-Maskable)** | Via NMI pin | Critical errors (power failure) |
| **Software** | INT n instruction | INT 21H (DOS services) |
| **Exception** | Internal errors | Divide-by-zero, overflow |

The 8086 supports **256 interrupt types** (INT 0 to INT 255), with an **Interrupt Vector Table (IVT)** at addresses 00000H to 003FFH (1 KB, 4 bytes per vector).

### 3.4 Timing Diagrams (Conceptual)

**Machine Cycle:** The time taken to complete one memory or I/O access.
**Instruction Cycle:** The total time to fetch and execute one instruction (may contain multiple machine cycles).
**T-state:** One clock period -- the smallest unit of time.

**8085 Machine Cycles:**

| Machine Cycle | T-states | Purpose |
|--------------|----------|---------|
| Opcode Fetch | 4 or 6 | Fetch instruction from memory |
| Memory Read | 3 | Read data from memory |
| Memory Write | 3 | Write data to memory |
| I/O Read | 3 | Read from I/O port |
| I/O Write | 3 | Write to I/O port |

**Example:** MVI A, 32H requires:
- 1 Opcode Fetch (4 T-states) + 1 Memory Read (3 T-states) = **7 T-states total**

**8085 timing at 3 MHz clock:**
- 1 T-state = 1/3 MHz = 333 ns
- MVI takes 7 * 333 = 2.33 us

---

## 4. 8051 Microcontroller

### 4.1 Microprocessor vs Microcontroller

| Feature | Microprocessor (e.g., 8085) | Microcontroller (e.g., 8051) |
|---------|---------------------------|------------------------------|
| **Definition** | CPU only | CPU + Memory + I/O + Peripherals on one chip |
| **External components** | Needs external RAM, ROM, I/O | **Self-contained** (minimal external parts) |
| **Memory** | External | **Internal** ROM and RAM |
| **I/O ports** | Need external chips (e.g., 8255) | **Built-in** ports |
| **Cost** | Higher (total system) | **Lower** |
| **Applications** | General computing | **Embedded systems** (washing machines, remotes, etc.) |

### 4.2 8051 Architecture Overview

**Key specifications:**

| Feature | Value |
|---------|-------|
| **CPU** | 8-bit |
| **Internal ROM** | 4 KB (program memory) |
| **Internal RAM** | 128 bytes |
| **I/O Ports** | 4 ports (P0, P1, P2, P3) -- 32 I/O pins total |
| **Timers/Counters** | 2 (Timer 0 and Timer 1) -- 16-bit each |
| **Serial Port** | 1 (full-duplex UART) |
| **Interrupts** | 5 sources (2 external, 2 timer, 1 serial) |
| **External Memory** | Up to 64 KB each for ROM and RAM |
| **Clock** | 12 MHz typical (1 machine cycle = 12 clock cycles = 1 us) |
| **Oscillator** | Built-in (needs external crystal) |

### 4.3 8051 Pin Description (40-pin DIP)

| Pin(s) | Name | Function |
|--------|------|----------|
| **P0.0-P0.7** | Port 0 | 8-bit bidirectional I/O; multiplexed AD0-AD7 |
| **P1.0-P1.7** | Port 1 | 8-bit bidirectional I/O |
| **P2.0-P2.7** | Port 2 | 8-bit bidirectional I/O; higher address byte (A8-A15) |
| **P3.0-P3.7** | Port 3 | 8-bit I/O with alternate functions (see below) |
| **RST** | Reset | Active HIGH reset |
| **ALE/PROG'** | Address Latch Enable | Latches lower address from P0 |
| **EA'/VPP** | External Access | LOW = use external ROM; HIGH = use internal ROM |
| **PSEN'** | Program Store Enable | Read strobe for external program memory |
| **XTAL1, XTAL2** | Crystal | Connect to external crystal oscillator |
| **VCC, GND** | Power | +5V and Ground |

**Port 3 Alternate Functions:**

| Pin | Alternate Function |
|-----|--------------------|
| P3.0 | RXD (Serial receive) |
| P3.1 | TXD (Serial transmit) |
| P3.2 | INT0' (External interrupt 0) |
| P3.3 | INT1' (External interrupt 1) |
| P3.4 | T0 (Timer 0 external input) |
| P3.5 | T1 (Timer 1 external input) |
| P3.6 | WR' (External data memory write) |
| P3.7 | RD' (External data memory read) |

### 4.4 8051 Memory Organization

**Program Memory (ROM/Flash):**
- Internal: 4 KB (0000H to 0FFFH)
- External: Up to 64 KB (0000H to FFFFH)
- Selected by EA' pin

**Data Memory (RAM):**
- Internal: 128 bytes (00H to 7FH)
  - Register Banks (00H-1FH): 4 banks of 8 registers (R0-R7)
  - Bit-Addressable area (20H-2FH): 16 bytes = 128 individually addressable bits
  - General-purpose RAM (30H-7FH): 80 bytes
- Special Function Registers (SFRs): 80H to FFH
- External: Up to 64 KB

### 4.5 8051 Instruction Examples

```
MOV A, #55H      ; Load immediate value 55H into Accumulator
MOV R0, A        ; Copy A to register R0
ADD A, R1        ; Add R1 to A
SETB P1.0        ; Set bit 0 of Port 1 (make it HIGH)
CLR P1.0         ; Clear bit 0 of Port 1 (make it LOW)
SJMP LOOP        ; Short jump to label LOOP
ACALL SUBRTN     ; Call subroutine
RET              ; Return from subroutine
```

---

## 5. Introduction to ARM Architecture

### 5.1 What is ARM?

**ARM = Advanced RISC Machines** (originally Acorn RISC Machine)

ARM does not manufacture chips. It **licenses the architecture** to companies like Qualcomm, Apple, Samsung, etc. who then build their own processors. ARM processors dominate the mobile and embedded markets.

### 5.2 Key Features of ARM Architecture

| Feature | Description |
|---------|-------------|
| **Architecture type** | RISC (Reduced Instruction Set Computing) |
| **Data width** | 32-bit (ARM7/9/11, Cortex-A/R/M); 64-bit (ARMv8-A, Cortex-A53+) |
| **Instruction set** | Fixed-length 32-bit (ARM mode); 16-bit (Thumb mode for code density) |
| **Registers** | 16 general-purpose 32-bit registers (R0-R15); R13=SP, R14=LR, R15=PC |
| **Pipeline** | 3-stage (ARM7: Fetch-Decode-Execute); deeper in newer versions |
| **Load/Store architecture** | Only load/store instructions access memory; all processing on registers |
| **Conditional execution** | Most instructions can be conditionally executed (reducing branches) |
| **Power efficiency** | **Excellent** -- designed for low power from the start |
| **Endianness** | Bi-endian (configurable as big or little endian) |

### 5.3 ARM Processor Families

| Family | Profile | Target Applications | Example Cores |
|--------|---------|-------------------|---------------|
| **Cortex-A** | Application | Smartphones, tablets, laptops | A7, A9, A53, A72, A78 |
| **Cortex-R** | Real-time | Automotive, hard disks, medical | R4, R5, R7, R52 |
| **Cortex-M** | Microcontroller | Embedded systems, IoT, sensors | **M0, M3, M4, M7** |

**Cortex-M series** (most relevant for embedded/telecom exams):

| Core | Pipeline | Features |
|------|----------|----------|
| **Cortex-M0** | 3-stage | Smallest, lowest power, simplest |
| **Cortex-M3** | 3-stage | Hardware divide, bit-banding, systick timer |
| **Cortex-M4** | 3-stage | DSP extensions, optional FPU |
| **Cortex-M7** | 6-stage | Double-precision FPU, cache, high performance |

### 5.4 ARM vs 8051 vs 8085/8086 Comparison

| Feature | 8085 | 8086 | 8051 | ARM Cortex-M |
|---------|------|------|------|-------------|
| **Type** | Microprocessor | Microprocessor | Microcontroller | Microcontroller/Processor |
| **Bits** | 8 | 16 | 8 | 32 |
| **Architecture** | CISC | CISC | CISC | **RISC** |
| **Address bus** | 16-bit (64KB) | 20-bit (1MB) | 16-bit (64KB) | 32-bit (4GB) |
| **Speed** | 3-6 MHz | 5-10 MHz | 12 MHz | 48-400+ MHz |
| **Pipeline** | None | Basic (2-unit) | None | 3+ stages |
| **Power** | High | High | Moderate | **Very low** |
| **On-chip peripherals** | None | None | Timers, UART, I/O | Many (ADC, DAC, DMA, USB...) |
| **Current use** | Educational | Legacy | **Still widely used** | **Dominant in modern embedded** |

---

## 6. Memory Interfacing (Conceptual)

### 6.1 Types of Memory

| Memory Type | Volatile? | Read/Write? | Speed | Use |
|-------------|-----------|-------------|-------|-----|
| **RAM (SRAM)** | Yes | R/W | Fast | Cache, registers |
| **RAM (DRAM)** | Yes | R/W | Moderate | Main memory |
| **ROM** | No | Read only | Moderate | Permanent firmware |
| **EPROM** | No | Read (UV erasable) | Moderate | Development/prototyping |
| **EEPROM** | No | Read (electrically erasable) | Slow writes | Configuration data |
| **Flash** | No | Read (block erasable) | Fast read, slow write | Program storage, USB drives |

### 6.2 Memory Interfacing Concepts

**Address Decoding:** The process of selecting the correct memory chip based on the address from the processor.

**Why needed?** A processor's address space (e.g., 64 KB for 8085) is usually divided among multiple memory chips and I/O devices. Address decoding ensures only the correct chip responds.

**Methods of address decoding:**

| Method | Description | Pros | Cons |
|--------|-------------|------|------|
| **Full decoding** | All address lines used to select chip | No address mirroring | More hardware (gates/decoders) |
| **Partial decoding** | Only some address lines used | Simpler hardware | Address mirroring (same chip at multiple addresses) |
| **Using decoder IC** | 74138 (3-to-8 decoder) for chip select | Clean, organized | Fixed address blocks |

### 6.3 Memory Map Example (8085 with 64 KB space)

```
FFFFH  +-----------------+
       |    I/O Ports     |
FF00H  +-----------------+
       |                  |
       |   RAM (32 KB)    |
       |                  |
8000H  +-----------------+
       |                  |
       |   ROM (32 KB)    |
       |   (Program)      |
       |                  |
0000H  +-----------------+
```

**Key formulas for memory chip selection:**

```
Number of address lines needed for a chip = log2(memory size)
Example: 8 KB chip needs log2(8192) = 13 address lines (A0-A12)

Remaining address lines (A13-A15 for 8085) are used for chip selection.
```

### 6.4 Chip Select Logic Example

**Problem:** Interface a 4 KB ROM starting at address 0000H with an 8085.

```
4 KB = 4096 bytes = 2^12 bytes
Address lines needed: A0-A11 (12 lines) --> connect to ROM address pins
Chip select: ROM should be selected when A12=0, A13=0, A14=0, A15=0

CS' = A12 + A13 + A14 + A15  (active low; OR gate, then invert)
Or equivalently: CS' = (A12 . A13 . A14 . A15)' using NAND gate (but we need all zero)
Simplest: CS' = A15 NOR A14 NOR A13 NOR A12 (or use a decoder)

Address range: 0000H to 0FFFH
```

---

## 7. Comprehensive Comparison Table

### 8085 vs 8086 vs 8051

| Feature | 8085 | 8086 | 8051 |
|---------|------|------|------|
| **Year** | 1976 | 1978 | 1981 |
| **Data bus width** | 8-bit | 16-bit | 8-bit |
| **Address bus width** | 16-bit | 20-bit | 16-bit (external) |
| **Addressable memory** | 64 KB | 1 MB | 64KB ROM + 64KB RAM |
| **Registers** | A,B,C,D,E,H,L,SP,PC | AX,BX,CX,DX,SP,BP,SI,DI,IP,CS,DS,SS,ES | A,B,R0-R7,DPTR,SP,PC |
| **Flags** | 5 (S,Z,AC,P,CY) | 9 (CF,PF,AF,ZF,SF,OF,TF,IF,DF) | 4 (CY,AC,OV,P) in PSW |
| **Clock** | 3-6 MHz | 5-10 MHz | 12 MHz (1 us/cycle) |
| **Pipeline** | No | Yes (BIU+EU) | No |
| **I/O ports** | External | External | 4 built-in (32 pins) |
| **Timers** | None | None | 2 (16-bit) |
| **Serial port** | SID/SOD (1-bit) | None built-in | Full-duplex UART |
| **Interrupts** | 5 (TRAP+4) | 256 types | 5 sources |
| **Segmentation** | No | Yes (4 segments) | No |
| **Instruction count** | ~246 | ~300+ | ~111 |
| **On-chip peripherals** | None | None | Timers, UART, I/O |

---

## Checklist -- Practice MCQs

### Basic Level

**Q1.** The 8085 microprocessor has a data bus width of:

- (a) 4 bits
- (b) 8 bits
- (c) 16 bits
- (d) 32 bits

**Q2.** In the 8085, the register used as the memory pointer is:

- (a) BC pair
- (b) DE pair
- (c) HL pair
- (d) Stack Pointer

**Q3.** The 8051 microcontroller has how many I/O ports?

- (a) 2
- (b) 3
- (c) 4
- (d) 8

### Intermediate Level

**Q4.** In 8086, the physical address is calculated as:

- (a) Segment + Offset
- (b) Segment * 10H + Offset
- (c) Segment * 100H + Offset
- (d) Segment / 10H + Offset

**Q5.** The highest priority interrupt in the 8085 is:

- (a) INTR
- (b) RST 7.5
- (c) RST 5.5
- (d) TRAP

**Q6.** ARM processors use which type of architecture?

- (a) CISC
- (b) RISC
- (c) VLIW
- (d) EPIC

**Q7.** The 8051 has internal RAM of:

- (a) 64 bytes
- (b) 128 bytes
- (c) 256 bytes
- (d) 1 KB

### Exam Level

**Q8.** The addressing mode used in the 8085 instruction "MOV A, M" is:

- (a) Immediate addressing
- (b) Direct addressing
- (c) Register indirect addressing
- (d) Register addressing

**Q9.** How many address lines are needed to address a 16 KB memory?

- (a) 12
- (b) 13
- (c) 14
- (d) 16

**Q10.** In the 8086, the BIU and EU work in parallel to achieve:

- (a) Multitasking
- (b) Pipelining
- (c) Virtual memory
- (d) Multithreading

---

### Answer Key

| Question | Answer | Explanation |
|----------|--------|-------------|
| Q1 | **(b) 8 bits** | 8085 is an 8-bit microprocessor (8-bit data bus, 16-bit address bus) |
| Q2 | **(c) HL pair** | HL register pair is the default memory pointer; "M" in instructions refers to memory at HL |
| Q3 | **(c) 4** | 8051 has Port 0, Port 1, Port 2, Port 3 (4 ports, 32 I/O pins total) |
| Q4 | **(b) Segment * 10H + Offset** | Physical address = Segment shifted left 4 bits (x10H) + Offset |
| Q5 | **(d) TRAP** | TRAP is non-maskable with highest priority; priority: TRAP > RST7.5 > RST6.5 > RST5.5 > INTR |
| Q6 | **(b) RISC** | ARM = Advanced RISC Machines; uses Reduced Instruction Set Computing |
| Q7 | **(b) 128 bytes** | 8051 internal RAM is 128 bytes (00H to 7FH); SFRs occupy 80H-FFH |
| Q8 | **(c) Register indirect** | M means memory at address in HL; the address is in a register pair (indirect) |
| Q9 | **(c) 14** | 16 KB = 16 * 1024 = 16384 = 2^14 bytes; need 14 address lines |
| Q10 | **(b) Pipelining** | BIU fetches next instruction while EU executes current one -- this is pipelining |

---

> **Study Tip:** The comparison tables in this chapter are exam goldmines. Know the differences between 8085/8086/8051 cold. Memorize the 8085 interrupt priority order (TRAP > RST7.5 > RST6.5 > RST5.5 > INTR) and the 8086 physical address formula (Segment * 10H + Offset). For 8051, remember the pin functions of Port 3 (RXD, TXD, INT0, INT1, T0, T1, WR, RD).
