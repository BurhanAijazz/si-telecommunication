# Subject 8 Part 1: Digital Electronics

> **Exam Weightage: Part of 20 Marks** | **Difficulty: Moderate** | **Prep Time: ~2 Weeks**

---

## Table of Contents

1. [Number Systems and Conversions](#1-number-systems-and-conversions)
2. [Logic Gates and Boolean Algebra](#2-logic-gates-and-boolean-algebra)
3. [Karnaugh Maps (K-Maps)](#3-karnaugh-maps-k-maps)
4. [Combinational Circuits](#4-combinational-circuits)
5. [Sequential Circuits](#5-sequential-circuits)
6. [Checklist -- Practice MCQs](#checklist--practice-mcqs)

---

## 1. Number Systems and Conversions

### 1.1 The Four Number Systems

| Number System | Base (Radix) | Digits Used | Prefix/Suffix |
|---------------|-------------|-------------|---------------|
| **Binary** | 2 | 0, 1 | 0b or subscript 2 |
| **Octal** | 8 | 0-7 | 0o or subscript 8 |
| **Decimal** | 10 | 0-9 | None (default) |
| **Hexadecimal** | 16 | 0-9, A-F | 0x or subscript 16 |

**Hex digit mapping:**

| Decimal | 10 | 11 | 12 | 13 | 14 | 15 |
|---------|-----|-----|-----|-----|-----|-----|
| **Hex** | A | B | C | D | E | F |
| **Binary (4 bits)** | 1010 | 1011 | 1100 | 1101 | 1110 | 1111 |

### 1.2 Decimal to Binary Conversion

**Method:** Repeatedly divide by 2 and note the remainders (read bottom to top).

**Worked Example: Convert 25 to binary**

```
25 / 2 = 12  remainder 1   (LSB)
12 / 2 = 6   remainder 0
 6 / 2 = 3   remainder 0
 3 / 2 = 1   remainder 1
 1 / 2 = 0   remainder 1   (MSB)

Read bottom to top: 25 (decimal) = 11001 (binary)
```

### 1.3 Binary to Decimal Conversion

**Method:** Multiply each bit by its positional weight (powers of 2) and add.

**Worked Example: Convert 11001 to decimal**

```
1*2^4 + 1*2^3 + 0*2^2 + 0*2^1 + 1*2^0
= 16 + 8 + 0 + 0 + 1
= 25
```

### 1.4 Binary to Octal and Hexadecimal

**Binary to Octal:** Group binary digits in sets of **3** (from right), convert each group.

```
Binary:  011  001
Octal:    3    1
So: 11001 (binary) = 31 (octal)
```

**Binary to Hex:** Group binary digits in sets of **4** (from right), convert each group.

```
Binary:  0001  1001
Hex:       1     9
So: 11001 (binary) = 19 (hex)
```

### 1.5 Quick Reference Conversion Table

| Decimal | Binary | Octal | Hex |
|---------|--------|-------|-----|
| 0 | 0000 | 0 | 0 |
| 1 | 0001 | 1 | 1 |
| 2 | 0010 | 2 | 2 |
| 3 | 0011 | 3 | 3 |
| 4 | 0100 | 4 | 4 |
| 5 | 0101 | 5 | 5 |
| 6 | 0110 | 6 | 6 |
| 7 | 0111 | 7 | 7 |
| 8 | 1000 | 10 | 8 |
| 9 | 1001 | 11 | 9 |
| 10 | 1010 | 12 | A |
| 11 | 1011 | 13 | B |
| 12 | 1100 | 14 | C |
| 13 | 1101 | 15 | D |
| 14 | 1110 | 16 | E |
| 15 | 1111 | 17 | F |

### 1.6 Signed Number Representations

| Method | Range (n bits) | Example (4-bit, -3) |
|--------|---------------|---------------------|
| **Sign-Magnitude** | -(2^(n-1)-1) to +(2^(n-1)-1) | 1011 |
| **1's Complement** | -(2^(n-1)-1) to +(2^(n-1)-1) | 1100 |
| **2's Complement** | -2^(n-1) to +(2^(n-1)-1) | 1101 |

**2's Complement** is the most commonly used because:
- Only one representation for zero.
- Subtraction can be done using addition.

**Finding 2's complement:** Invert all bits (1's complement), then add 1.

```
Example: Find 2's complement of 0101 (which is +5)
Step 1: Invert -> 1010
Step 2: Add 1  -> 1011
Result: 1011 represents -5 in 2's complement
```

---

## 2. Logic Gates and Boolean Algebra

### 2.1 Basic Logic Gates

| Gate | Symbol (expression) | Truth Table (2-input) | Description |
|------|--------------------|-----------------------|-------------|
| **AND** | Y = A . B | 0,0->0; 0,1->0; 1,0->0; **1,1->1** | Output is 1 only when ALL inputs are 1 |
| **OR** | Y = A + B | 0,0->0; **0,1->1; 1,0->1; 1,1->1** | Output is 1 when ANY input is 1 |
| **NOT** | Y = A' (or A-bar) | 0->1; 1->0 | Inverts the input |
| **NAND** | Y = (A . B)' | **0,0->1; 0,1->1; 1,0->1**; 1,1->0 | AND followed by NOT |
| **NOR** | Y = (A + B)' | 0,0->1; 0,1->0; 1,0->0; 1,1->0 | OR followed by NOT |
| **XOR** | Y = A xor B | 0,0->0; **0,1->1; 1,0->1**; 1,1->0 | Output is 1 when inputs are DIFFERENT |
| **XNOR** | Y = (A xor B)' | **0,0->1**; 0,1->0; 1,0->0; **1,1->1** | Output is 1 when inputs are SAME |

### 2.2 Universal Gates

**NAND and NOR** are called **universal gates** because any logic function can be built using only NAND gates or only NOR gates.

| Original Gate | Using NAND only | Using NOR only |
|---------------|----------------|----------------|
| **NOT** | Connect both inputs of NAND together | Connect both inputs of NOR together |
| **AND** | NAND followed by NAND-as-NOT | NOR-as-NOT on each input, then NOR |
| **OR** | NAND-as-NOT on each input, then NAND | NOR followed by NOR-as-NOT |

### 2.3 Boolean Algebra Laws

| Law | AND Form | OR Form |
|-----|----------|---------|
| **Identity** | A . 1 = A | A + 0 = A |
| **Null** | A . 0 = 0 | A + 1 = 1 |
| **Idempotent** | A . A = A | A + A = A |
| **Complement** | A . A' = 0 | A + A' = 1 |
| **Commutative** | A . B = B . A | A + B = B + A |
| **Associative** | (A.B).C = A.(B.C) | (A+B)+C = A+(B+C) |
| **Distributive** | A.(B+C) = A.B + A.C | A+(B.C) = (A+B).(A+C) |
| **Absorption** | A.(A+B) = A | A + A.B = A |
| **Involution** | (A')' = A | (A')' = A |

### 2.4 De Morgan's Theorems

These are extremely important for simplification and NAND/NOR implementations:

> **Theorem 1:** (A . B)' = A' + B'
> "The complement of AND equals OR of the complements"

> **Theorem 2:** (A + B)' = A' . B'
> "The complement of OR equals AND of the complements"

**Generalized form (n variables):**

```
(A . B . C ... )' = A' + B' + C' + ...
(A + B + C + ...)' = A' . B' . C' . ...
```

**Worked Example:**

```
Simplify: (A.B + C)'
= (A.B)' . C'          [De Morgan on OR]
= (A' + B') . C'       [De Morgan on AND]
= A'.C' + B'.C'        [Distribution]
```

### 2.5 Standard Forms

**Sum of Products (SOP):** OR of AND terms. Example: F = A.B + A'.C + B.C

**Product of Sums (POS):** AND of OR terms. Example: F = (A+B).(A'+C).(B+C)

**Minterms and Maxterms (for 3 variables A, B, C):**

| Row | A | B | C | Minterm (m) | Maxterm (M) |
|-----|---|---|---|-------------|-------------|
| 0 | 0 | 0 | 0 | m0 = A'B'C' | M0 = A+B+C |
| 1 | 0 | 0 | 1 | m1 = A'B'C | M1 = A+B+C' |
| 2 | 0 | 1 | 0 | m2 = A'BC' | M2 = A+B'+C |
| 3 | 0 | 1 | 1 | m3 = A'BC | M3 = A+B'+C' |
| 4 | 1 | 0 | 0 | m4 = AB'C' | M4 = A'+B+C |
| 5 | 1 | 0 | 1 | m5 = AB'C | M5 = A'+B+C' |
| 6 | 1 | 1 | 0 | m6 = ABC' | M6 = A'+B'+C |
| 7 | 1 | 1 | 1 | m7 = ABC | M7 = A'+B'+C' |

---

## 3. Karnaugh Maps (K-Maps)

### 3.1 What is a K-Map?

**Beginner explanation:** A K-Map is a visual method to simplify Boolean expressions. It arranges the truth table in a grid so that adjacent cells differ by only one variable (Gray code order). You then group 1s (for SOP) in powers of 2 (1, 2, 4, 8) to find the simplest expression.

### 3.2 Two-Variable K-Map

```
         B=0   B=1
  A=0  | m0  | m1  |
  A=1  | m2  | m3  |
```

**Example:** F(A,B) = SUM(1, 2, 3)

```
         B=0   B=1
  A=0  |  0  |  1  |
  A=1  |  1  |  1  |
```

Groups: {m1, m3} = B, {m2, m3} = A
Simplified: **F = A + B**

### 3.3 Three-Variable K-Map

**Column order uses Gray code: 00, 01, 11, 10**

```
          BC=00  BC=01  BC=11  BC=10
  A=0    | m0  | m1   | m3   | m2   |
  A=1    | m4  | m5   | m7   | m6   |
```

**Example:** F(A,B,C) = SUM(0, 2, 4, 6)

```
          BC=00  BC=01  BC=11  BC=10
  A=0    |  1  |  0   |  0   |  1   |
  A=1    |  1  |  0   |  0   |  1   |
```

Group all four 1s: {m0, m2, m4, m6} -- these are all cases where C=0.
Simplified: **F = C'**

### 3.4 Four-Variable K-Map

```
           CD=00  CD=01  CD=11  CD=10
  AB=00   | m0  | m1   | m3   | m2   |
  AB=01   | m4  | m5   | m7   | m6   |
  AB=11   | m12 | m13  | m15  | m14  |
  AB=10   | m8  | m9   | m11  | m10  |
```

**K-Map Grouping Rules:**
1. Groups must contain **1, 2, 4, 8, or 16** cells (powers of 2).
2. Groups must be **rectangular** (including wrapping around edges).
3. Each group should be as **large as possible**.
4. Every 1 must be covered by **at least one** group.
5. Groups **can overlap** (a cell can be in multiple groups).
6. The map **wraps around** (leftmost column is adjacent to rightmost; top row is adjacent to bottom row).

**Worked Example:** F(A,B,C,D) = SUM(0, 1, 2, 5, 8, 9, 10)

```
           CD=00  CD=01  CD=11  CD=10
  AB=00   |  1  |  1   |  0   |  1   |
  AB=01   |  0  |  1   |  0   |  0   |
  AB=11   |  0  |  0   |  0   |  0   |
  AB=10   |  1  |  1   |  0   |  1   |
```

**Groups identified:**
- Group 1: {m0, m1, m8, m9} -- 4 cells (top-left pair and bottom-left pair wrapping) = **B'D'... wait, let's be precise:** These cells have A varies, B=0, C=0, D varies between 0 and 1... Correction: m0(0000), m1(0001), m8(1000), m9(1001) -> B=0, C=0 -> **B'C'**
- Group 2: {m0, m2, m8, m10} -- m0(0000), m2(0010), m8(1000), m10(1010) -> B=0, D=0 -> **B'D'**
- Group 3: {m1, m5} -- m1(0001), m5(0101) -> A=0, C=0, D=1 -> **A'C'D**

**Simplified: F = B'C' + B'D' + A'C'D**

### 3.5 Don't Care Conditions

When certain input combinations **never occur** or their output **does not matter**, they are marked as 'X' (don't care) in the K-map. These can be treated as either 0 or 1 to help form larger groups.

---

## 4. Combinational Circuits

### 4.1 Half Adder

**Adds two single-bit numbers.**

| Input A | Input B | Sum (S) | Carry (C) |
|---------|---------|---------|-----------|
| 0 | 0 | 0 | 0 |
| 0 | 1 | 1 | 0 |
| 1 | 0 | 1 | 0 |
| 1 | 1 | 0 | 1 |

**Equations:**

```
Sum = A XOR B
Carry = A AND B
```

### 4.2 Full Adder

**Adds two single-bit numbers plus a carry input (C_in).**

| A | B | C_in | Sum | C_out |
|---|---|------|-----|-------|
| 0 | 0 | 0 | 0 | 0 |
| 0 | 0 | 1 | 1 | 0 |
| 0 | 1 | 0 | 1 | 0 |
| 0 | 1 | 1 | 0 | 1 |
| 1 | 0 | 0 | 1 | 0 |
| 1 | 0 | 1 | 0 | 1 |
| 1 | 1 | 0 | 0 | 1 |
| 1 | 1 | 1 | 1 | 1 |

**Equations:**

```
Sum = A XOR B XOR C_in
C_out = A.B + C_in.(A XOR B)
```

**An n-bit adder** is made by cascading n full adders (ripple carry adder).

### 4.3 Half Subtractor and Full Subtractor

**Half Subtractor:**

```
Difference = A XOR B
Borrow = A' . B
```

**Full Subtractor:**

```
Difference = A XOR B XOR B_in
B_out = A'.B + B_in.(A XOR B)' = A'.B + B_in.(A XNOR B)
```

### 4.4 Multiplexer (MUX)

**Beginner explanation:** A MUX is a **data selector**. It has 2^n data inputs, n select lines, and 1 output. The select lines choose which input is routed to the output.

**2-to-1 MUX:**

```
If S=0: Y = I0
If S=1: Y = I1
Equation: Y = S'.I0 + S.I1
```

**4-to-1 MUX (2 select lines S1, S0):**

```
Y = S1'.S0'.I0 + S1'.S0.I1 + S1.S0'.I2 + S1.S0.I3
```

| S1 | S0 | Output Y |
|----|----|----------|
| 0 | 0 | I0 |
| 0 | 1 | I1 |
| 1 | 0 | I2 |
| 1 | 1 | I3 |

**Important:** A 2^n-to-1 MUX can implement **any** n-variable Boolean function.

### 4.5 Demultiplexer (DEMUX)

**Opposite of MUX:** 1 input, n select lines, 2^n outputs. Routes the single input to one of the outputs based on select lines.

**1-to-4 DEMUX:**

| S1 | S0 | Y0 | Y1 | Y2 | Y3 |
|----|----|----|----|----|----|
| 0 | 0 | D | 0 | 0 | 0 |
| 0 | 1 | 0 | D | 0 | 0 |
| 1 | 0 | 0 | 0 | D | 0 |
| 1 | 1 | 0 | 0 | 0 | D |

Where D is the input data.

### 4.6 Encoder

**Converts one active input line into a binary code.**

**8-to-3 Priority Encoder:** 8 inputs (I0-I7), 3 outputs (A2, A1, A0). Outputs the binary code of the **highest-priority** active input.

| Active Input | A2 | A1 | A0 |
|-------------|----|----|-----|
| I0 | 0 | 0 | 0 |
| I1 | 0 | 0 | 1 |
| I2 | 0 | 1 | 0 |
| I3 | 0 | 1 | 1 |
| I4 | 1 | 0 | 0 |
| I5 | 1 | 0 | 1 |
| I6 | 1 | 1 | 0 |
| I7 | 1 | 1 | 1 |

### 4.7 Decoder

**Converts a binary code into one active output line** (opposite of encoder).

**2-to-4 Decoder:**

| A1 | A0 | Y0 | Y1 | Y2 | Y3 |
|----|-----|----|----|----|----|
| 0 | 0 | 1 | 0 | 0 | 0 |
| 0 | 1 | 0 | 1 | 0 | 0 |
| 1 | 0 | 0 | 0 | 1 | 0 |
| 1 | 1 | 0 | 0 | 0 | 1 |

**Key insight:** Each output of an n-to-2^n decoder represents one **minterm**. So a decoder + OR gate can implement any Boolean function.

### 4.8 Combinational Circuit Summary

| Circuit | Function | Inputs | Outputs |
|---------|----------|--------|---------|
| **Half Adder** | Adds 2 bits | A, B | Sum, Carry |
| **Full Adder** | Adds 3 bits (with carry) | A, B, C_in | Sum, C_out |
| **MUX (2^n:1)** | Selects 1-of-2^n inputs | 2^n data + n select | 1 output |
| **DEMUX (1:2^n)** | Routes input to 1-of-2^n outputs | 1 data + n select | 2^n outputs |
| **Encoder (2^n:n)** | Converts active line to code | 2^n inputs | n outputs |
| **Decoder (n:2^n)** | Converts code to active line | n inputs | 2^n outputs |

---

## 5. Sequential Circuits

### 5.1 Flip-Flops vs Latches

| Feature | Latch | Flip-Flop |
|---------|-------|-----------|
| **Triggering** | Level-triggered | **Edge-triggered** |
| **When it changes** | While clock is HIGH (or LOW) | Only at clock edge (rising or falling) |
| **Use** | Simple storage | Synchronous circuits, counters, registers |

### 5.2 SR Flip-Flop

**Inputs:** S (Set), R (Reset)

| S | R | Q (next) | Action |
|---|---|----------|--------|
| 0 | 0 | Q (no change) | Hold |
| 0 | 1 | 0 | Reset |
| 1 | 0 | 1 | Set |
| 1 | 1 | **Invalid/Forbidden** | Race condition |

**Characteristic equation:** Q(next) = S + R'.Q, with constraint S.R = 0

### 5.3 JK Flip-Flop

**Inputs:** J, K (similar to S, R but resolves the invalid state)

| J | K | Q (next) | Action |
|---|---|----------|--------|
| 0 | 0 | Q (no change) | Hold |
| 0 | 1 | 0 | Reset |
| 1 | 0 | 1 | Set |
| 1 | 1 | Q' (toggle) | **Toggle** |

**Characteristic equation:** Q(next) = J.Q' + K'.Q

**Key advantage:** The J=K=1 condition produces a useful **toggle** instead of an invalid state. The JK flip-flop is considered the **most versatile** flip-flop.

### 5.4 D Flip-Flop

**Input:** D (Data)

| D | Q (next) | Action |
|---|----------|--------|
| 0 | 0 | Stores 0 |
| 1 | 1 | Stores 1 |

**Characteristic equation:** Q(next) = D

**The simplest flip-flop.** Output simply follows input (at the clock edge). Widely used in **registers and data storage**.

### 5.5 T Flip-Flop

**Input:** T (Toggle)

| T | Q (next) | Action |
|---|----------|--------|
| 0 | Q (no change) | Hold |
| 1 | Q' (toggle) | Toggle |

**Characteristic equation:** Q(next) = T XOR Q = T.Q' + T'.Q

**Key use:** Counters (frequency division). Each T flip-flop with T=1 divides the clock frequency by 2.

### 5.6 Flip-Flop Comparison Table

| Feature | SR | JK | D | T |
|---------|----|----|---|---|
| **Inputs** | S, R | J, K | D | T |
| **Invalid state?** | Yes (S=R=1) | **No** | No | No |
| **Toggle?** | No | Yes (J=K=1) | No | Yes (T=1) |
| **Versatility** | Low | **Highest** | Moderate | Low |
| **Main use** | Basic latch | Universal FF | Data storage | Counters |
| **Made from** | NAND/NOR gates | SR FF + feedback | JK FF (J=D, K=D') | JK FF (J=K=T) |

### 5.7 Counters

**Asynchronous (Ripple) Counter:**
- Each flip-flop is triggered by the output of the previous one.
- Simple but **slower** (cumulative propagation delay).
- n flip-flops count from 0 to 2^n - 1.

**Synchronous Counter:**
- All flip-flops share the **same clock**.
- **Faster** (all outputs change simultaneously).
- More complex logic required.

**Counter Types:**

| Type | Counts | Example (3-bit) |
|------|--------|-----------------|
| **Up counter** | 0, 1, 2, ... 2^n-1, 0, 1, ... | 000, 001, 010, 011, 100, 101, 110, 111, 000... |
| **Down counter** | 2^n-1, ... 2, 1, 0, 2^n-1, ... | 111, 110, 101, 100, 011, 010, 001, 000, 111... |
| **Up/Down counter** | Selectable direction | Based on control input |
| **Mod-N counter** | 0 to N-1 only | Mod-6: 000 to 101 then resets |
| **Ring counter** | Circulates a single 1 | 1000, 0100, 0010, 0001, 1000... |
| **Johnson counter** | Twisted ring | 0000, 1000, 1100, 1110, 1111, 0111, 0011, 0001, 0000... |

### 5.8 Shift Registers

**What they do:** Store and shift binary data left or right, one bit per clock cycle.

| Type | Operation |
|------|-----------|
| **SISO** (Serial-In, Serial-Out) | Data enters and exits one bit at a time |
| **SIPO** (Serial-In, Parallel-Out) | Data enters serially, all bits available at once |
| **PISO** (Parallel-In, Serial-Out) | All bits loaded at once, shifted out serially |
| **PIPO** (Parallel-In, Parallel-Out) | All bits loaded and available at once |

**Applications:** Serial-to-parallel conversion, data delay, ring counters, sequence generators.

**An n-bit shift register** requires **n flip-flops** (typically D flip-flops).

---

## Checklist -- Practice MCQs

### Basic Level

**Q1.** The binary equivalent of decimal number 13 is:

- (a) 1011
- (b) 1101
- (c) 1100
- (d) 1010

**Q2.** The output of a 2-input AND gate with inputs A=1 and B=0 is:

- (a) 1
- (b) 0
- (c) Undefined
- (d) High impedance

**Q3.** According to De Morgan's first theorem, (A.B)' equals:

- (a) A'.B'
- (b) A' + B'
- (c) A + B
- (d) (A + B)'

### Intermediate Level

**Q4.** The 2's complement of the binary number 0110 is:

- (a) 1001
- (b) 1010
- (c) 1011
- (d) 0110

**Q5.** A 4-to-1 multiplexer has how many select lines?

- (a) 1
- (b) 2
- (c) 3
- (d) 4

**Q6.** Which flip-flop has an invalid/forbidden state?

- (a) D flip-flop
- (b) T flip-flop
- (c) JK flip-flop
- (d) SR flip-flop

**Q7.** The hexadecimal equivalent of binary 11011010 is:

- (a) DA
- (b) DB
- (c) BA
- (d) AB

### Exam Level

**Q8.** In a 3-bit ripple up-counter, the count sequence after 110 is:

- (a) 000
- (b) 101
- (c) 111
- (d) 001

**Q9.** A JK flip-flop with J=1 and K=1 acts as a:

- (a) D flip-flop
- (b) SR flip-flop
- (c) T flip-flop (toggle)
- (d) Latch

**Q10.** The simplified Boolean expression using K-map for F(A,B) = SUM(0, 1, 3) is:

- (a) A + B'
- (b) A' + B
- (c) A + B
- (d) A'.B'

---

### Answer Key

| Question | Answer | Explanation |
|----------|--------|-------------|
| Q1 | **(b) 1101** | 13 = 8+4+1 = 1*2^3 + 1*2^2 + 0*2^1 + 1*2^0 = 1101 |
| Q2 | **(b) 0** | AND gate: both inputs must be 1 for output 1; 1 AND 0 = 0 |
| Q3 | **(b) A' + B'** | De Morgan's: complement of AND = OR of complements |
| Q4 | **(b) 1010** | 1's complement of 0110 = 1001; add 1: 1001 + 1 = 1010 |
| Q5 | **(b) 2** | 4-to-1 MUX: 2^n = 4, so n = 2 select lines |
| Q6 | **(d) SR flip-flop** | SR: S=R=1 is invalid; JK resolves this with toggle |
| Q7 | **(a) DA** | 1101 = D, 1010 = A; so 11011010 = DA in hex |
| Q8 | **(c) 111** | After 110 (which is 6), next count is 111 (which is 7) |
| Q9 | **(c) T flip-flop (toggle)** | JK with J=K=1 toggles on every clock edge, same as T FF with T=1 |
| Q10 | **(b) A' + B** | K-map: m0(A=0,B=0), m1(A=0,B=1), m3(A=1,B=1). Group {m0,m1}=A', Group {m1,m3}=B. F = A' + B |

---

> **Study Tip:** Memorize the truth tables for all basic gates and all four flip-flops. Practice number system conversions until they become second nature. For K-maps, always use Gray code ordering for rows/columns and remember that the map wraps around.
