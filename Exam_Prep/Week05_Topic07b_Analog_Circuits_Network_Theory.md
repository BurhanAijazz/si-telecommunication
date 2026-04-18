# Subject 7 Part 2: Analog Circuits & Network Theory

> **Exam Weightage: Part of 20 Marks** | **Difficulty: Moderate to High** | **Prep Time: ~2 Weeks**

---

## Table of Contents

### Part A: Analog Circuits
1. [Operational Amplifiers (Op-Amps)](#1-operational-amplifiers-op-amps)
2. [Summing, Integrator, and Differentiator Circuits](#2-summing-integrator-and-differentiator-circuits)
3. [Comparators and Schmitt Trigger](#3-comparators-and-schmitt-trigger)
4. [Oscillators](#4-oscillators)
5. [Rectifiers and Filters](#5-rectifiers-and-filters)

### Part B: Network Theory
6. [KVL and KCL](#6-kvl-and-kcl)
7. [Mesh and Nodal Analysis](#7-mesh-and-nodal-analysis)
8. [Network Theorems](#8-network-theorems)
9. [Resonance in RLC Circuits](#9-resonance-in-rlc-circuits)
10. [Frequency Response of Simple Filters](#10-frequency-response-of-simple-filters)
11. [Checklist -- Practice MCQs](#checklist--practice-mcqs)

---

# Part A: Analog Circuits

## 1. Operational Amplifiers (Op-Amps)

### 1.1 What is an Op-Amp?

**Beginner explanation:** An operational amplifier is a high-gain voltage amplifier with two inputs and one output. It is the most versatile building block in analog electronics.

**Ideal Op-Amp Properties:**

| Property | Ideal Value | Practical (741 Op-Amp) |
|----------|-------------|----------------------|
| **Open-loop gain (A_OL)** | Infinity | ~200,000 (106 dB) |
| **Input impedance (Z_in)** | Infinity | ~2 M-ohm |
| **Output impedance (Z_out)** | 0 | ~75 ohm |
| **Bandwidth** | Infinity | ~1 MHz (unity gain BW) |
| **CMRR** | Infinity | ~90 dB |
| **Slew Rate** | Infinity | 0.5 V/us |

**Two golden rules (when negative feedback is used):**
1. **No current flows into the input terminals** (infinite input impedance)
2. **The voltage at both input terminals is equal** (V+ = V-) -- called the "virtual short"

### 1.2 Inverting Amplifier

**Circuit description:** Input signal is applied through resistor R1 to the inverting (-) terminal. Feedback resistor Rf connects the output to the inverting terminal. Non-inverting (+) terminal is grounded.

```
V_in ---[R1]---(-) Op-Amp ----> V_out
                |              |
               [Rf]----------+
                |
(+) --- GND
```

**Gain formula:**

```
V_out / V_in = -Rf / R1
```

The negative sign means the output is **180 degrees out of phase** with the input.

**Worked Example:**

```
Given: R1 = 10 k-ohm, Rf = 100 k-ohm
Gain = -Rf / R1 = -100k / 10k = -10

If V_in = 0.5 V, then V_out = -10 * 0.5 = -5 V
```

### 1.3 Non-Inverting Amplifier

**Circuit description:** Input signal is applied to the non-inverting (+) terminal. R1 connects the inverting (-) terminal to ground. Rf provides feedback from output to the inverting terminal.

```
V_in --->(+) Op-Amp ----> V_out
         (-) ---|           |
              [R1]  [Rf]---+
               |     |
              GND---+
```

**Gain formula:**

```
V_out / V_in = 1 + (Rf / R1)
```

The output is **in phase** with the input. Gain is always >= 1.

**Worked Example:**

```
Given: R1 = 5 k-ohm, Rf = 45 k-ohm
Gain = 1 + (45k / 5k) = 1 + 9 = 10

If V_in = 0.3 V, then V_out = 10 * 0.3 = 3 V
```

**Special case -- Voltage Follower (Buffer):** Set Rf = 0, R1 = infinity (remove both resistors, connect output directly to inverting input). Gain = 1. Used for impedance matching.

### 1.4 Gain Comparison Table

| Configuration | Gain Formula | Phase Shift | Input Impedance |
|--------------|-------------|-------------|-----------------|
| **Inverting** | -Rf / R1 | 180 degrees | R1 |
| **Non-Inverting** | 1 + Rf/R1 | 0 degrees (in phase) | Very high (ideal: infinite) |
| **Voltage Follower** | 1 | 0 degrees | Very high |

---

## 2. Summing, Integrator, and Differentiator Circuits

### 2.1 Summing Amplifier (Inverting)

**What it does:** Adds multiple input voltages (with optional weighting).

**Circuit:** Multiple inputs (V1, V2, V3...) each connected through their own resistor (R1, R2, R3...) to the inverting terminal. Feedback resistor Rf from output to inverting terminal.

**Output formula:**

```
V_out = -Rf * (V1/R1 + V2/R2 + V3/R3)
```

**If all input resistors are equal (R1 = R2 = R3 = R):**

```
V_out = -(Rf / R) * (V1 + V2 + V3)
```

**Worked Example:**

```
R1 = R2 = R3 = 10 k-ohm, Rf = 10 k-ohm
V1 = 1V, V2 = 2V, V3 = 3V

V_out = -(10k/10k) * (1 + 2 + 3) = -1 * 6 = -6 V
```

### 2.2 Integrator Circuit

**What it does:** Output is proportional to the **integral** of the input signal (over time).

**Circuit:** Input through R to the inverting terminal. A capacitor C provides feedback (instead of a resistor).

**Output formula:**

```
V_out(t) = -(1 / RC) * Integral of V_in(t) dt
```

**Effect on waveforms:**
- Square wave input --> **Triangular wave** output
- Triangular wave input --> **Parabolic wave** output
- Sine wave input --> **Cosine wave** output (with phase shift)

### 2.3 Differentiator Circuit

**What it does:** Output is proportional to the **rate of change** (derivative) of the input signal.

**Circuit:** Input through a capacitor C to the inverting terminal. Resistor R provides feedback.

**Output formula:**

```
V_out(t) = -RC * d(V_in) / dt
```

**Effect on waveforms:**
- Triangular wave input --> **Square wave** output
- Sine wave input --> **Cosine wave** output (with phase shift)
- Square wave input --> **Spikes** at transitions

### 2.4 Summary Table

| Circuit | Feedback Element | Formula | Converts |
|---------|-----------------|---------|----------|
| **Inverting Amp** | Resistor Rf | -Rf/R1 * V_in | Scales and inverts |
| **Summing Amp** | Resistor Rf | -Rf*(V1/R1 + V2/R2 + ...) | Weighted sum |
| **Integrator** | Capacitor C | -(1/RC) * Integral(V_in dt) | Square -> Triangle |
| **Differentiator** | Resistor R (input is C) | -RC * dV_in/dt | Triangle -> Square |

---

## 3. Comparators and Schmitt Trigger

### 3.1 Comparator

**What it does:** Compares two voltages and outputs HIGH or LOW depending on which is greater.

**Operation (open-loop op-amp):**
- If V+ > V- --> V_out = +V_sat (positive saturation, near +V_cc)
- If V+ < V- --> V_out = -V_sat (negative saturation, near -V_cc)

**Application:** Zero-crossing detector (V_ref = 0V), level detector, ADC.

### 3.2 Schmitt Trigger

**Problem with simple comparator:** If the input signal has noise near the threshold, the output chatters rapidly between HIGH and LOW.

**Solution:** The Schmitt Trigger adds **hysteresis** -- two different threshold levels for rising and falling input.

**Key terms:**
- **Upper Threshold (V_UT):** Input must rise above this to switch output LOW-to-HIGH.
- **Lower Threshold (V_LT):** Input must fall below this to switch output HIGH-to-LOW.
- **Hysteresis = V_UT - V_LT**

**Formulas (Inverting Schmitt Trigger using op-amp with positive feedback):**

```
V_UT = +V_sat * R1 / (R1 + R2)
V_LT = -V_sat * R1 / (R1 + R2)
Hysteresis = V_UT - V_LT = 2 * V_sat * R1 / (R1 + R2)
```

**Applications:** Noise-immune switching, wave shaping (sine to square wave), debouncing switches.

---

## 4. Oscillators

### 4.1 What is an Oscillator?

An oscillator generates a periodic waveform **without any external input signal**. It uses positive feedback.

**Barkhausen Criterion (condition for sustained oscillation):**

```
|A * beta| = 1     (loop gain magnitude = 1)
Angle(A * beta) = 0 degrees or 360 degrees    (total phase shift = 0 or multiple of 360)
```

Where A = amplifier gain, beta = feedback fraction.

### 4.2 Types of Oscillators

| Type | Frequency-Determining Element | Frequency Range | Waveform |
|------|------------------------------|----------------|----------|
| **RC Phase Shift** | R and C network (3 RC sections) | Low (Hz to ~100 kHz) | Sine |
| **Wien Bridge** | R and C (bridge network) | Low to moderate (Hz to ~1 MHz) | Sine |
| **Colpitts** | L and 2 capacitors (C1, C2) | RF (kHz to hundreds of MHz) | Sine |
| **Hartley** | 2 inductors (L1, L2) and C | RF (kHz to hundreds of MHz) | Sine |
| **Crystal** | Quartz crystal | Fixed (kHz to MHz) | Sine (very stable) |
| **Astable Multivibrator** | R and C (555 timer or transistors) | Wide range | Square |

### 4.3 Key Oscillator Formulas

**Wien Bridge Oscillator:**

```
Frequency: f = 1 / (2 * pi * R * C)
Gain required: A = 3 (minimum, for R1 = R2 and C1 = C2)
```

**RC Phase Shift Oscillator:**

```
Frequency: f = 1 / (2 * pi * R * C * sqrt(6))
Gain required: A = 29 (for 3-stage RC network)
```

**Colpitts Oscillator:**

```
Frequency: f = 1 / (2 * pi * sqrt(L * C_eq))
Where C_eq = (C1 * C2) / (C1 + C2)
Feedback fraction: beta = C1 / C2
```

**Hartley Oscillator:**

```
Frequency: f = 1 / (2 * pi * sqrt(L_eq * C))
Where L_eq = L1 + L2 + 2M (M = mutual inductance, often ~0)
Feedback fraction: beta = L2 / L1
```

**Crystal Oscillator:**
- Uses piezoelectric effect of quartz crystal.
- **Most stable** frequency source (stability ~ 1 ppm or better).
- Used in clocks, watches, microprocessor clocks, telecom equipment.

### 4.4 Colpitts vs Hartley Comparison

| Feature | Colpitts | Hartley |
|---------|----------|---------|
| **Feedback element** | Capacitive divider (C1, C2) | Inductive divider (L1, L2) |
| **Tank circuit** | L + C1 + C2 | L1 + L2 + C |
| **Frequency stability** | Better | Lower |
| **Noise** | Less | More (inductors are noisier) |
| **Preferred for** | Higher frequencies | Lower RF frequencies |

---

## 5. Rectifiers and Filters

### 5.1 Half-Wave Rectifier

**Circuit:** AC source -> Diode -> Load (R_L)

**Key formulas:**

```
V_dc (average) = V_m / pi = 0.318 * V_m
V_rms = V_m / 2
Ripple factor = 1.21
Efficiency = 40.6%
PIV (Peak Inverse Voltage) = V_m
```

Where V_m = peak voltage of input AC.

### 5.2 Full-Wave Rectifier (Center-Tapped)

**Circuit:** Center-tapped transformer with 2 diodes, each conducting on alternate half-cycles.

**Key formulas:**

```
V_dc = 2 * V_m / pi = 0.636 * V_m
V_rms = V_m / sqrt(2)
Ripple factor = 0.482
Efficiency = 81.2%
PIV = 2 * V_m
Ripple frequency = 2 * f_input
```

### 5.3 Bridge Rectifier (Full-Wave)

**Circuit:** 4 diodes in a bridge configuration. No center-tapped transformer needed.

```
V_dc = 2 * V_m / pi = 0.636 * V_m (same as center-tapped)
PIV = V_m (lower than center-tapped!)
Two diodes conduct at a time, so voltage drop = 2 * V_diode
```

### 5.4 Rectifier Comparison Table

| Parameter | Half-Wave | Full-Wave (CT) | Bridge |
|-----------|-----------|----------------|--------|
| **No. of diodes** | 1 | 2 | 4 |
| **V_dc** | V_m / pi | 2V_m / pi | 2V_m / pi |
| **Ripple factor** | **1.21** | **0.482** | **0.482** |
| **Efficiency** | **40.6%** | **81.2%** | **81.2%** |
| **PIV** | V_m | **2V_m** | **V_m** |
| **Ripple frequency** | f | 2f | 2f |
| **Transformer** | Simple | Center-tapped | Simple |

### 5.5 Filter Circuits

Filters smooth the pulsating DC output of rectifiers.

| Filter Type | How it works | Ripple Reduction |
|-------------|-------------|-----------------|
| **Capacitor (C) filter** | Capacitor charges to peak, slowly discharges through load | Good for light loads |
| **Inductor (L) filter** | Inductor opposes current changes, smooths output | Good for heavy loads |
| **LC (L-section) filter** | Combines L and C for better smoothing | Very good |
| **Pi (CLC) filter** | C-L-C arrangement, best smoothing | Excellent |

**Capacitor filter ripple factor:**

```
Ripple factor = 1 / (2 * sqrt(3) * f * R_L * C)
```

Higher C or higher f --> lower ripple --> smoother DC.

---

# Part B: Network Theory

## 6. KVL and KCL

### 6.1 Kirchhoff's Current Law (KCL)

> **The sum of all currents entering a node equals the sum of all currents leaving that node.**

Or equivalently: **The algebraic sum of all currents at a node = 0.**

```
SUM of I_entering = SUM of I_leaving
```

**Worked Example:**

```
At a node, three branches meet:
I1 = 5A (entering), I2 = 3A (leaving), I3 = ? (leaving)

By KCL: I1 = I2 + I3
5 = 3 + I3
I3 = 2A (leaving)
```

### 6.2 Kirchhoff's Voltage Law (KVL)

> **The algebraic sum of all voltages around any closed loop is zero.**

```
SUM of V_rises = SUM of V_drops (around a loop)
```

**Worked Example:**

```
Loop: 12V battery -> R1 (V1 = 4V drop) -> R2 (V2 = ?) -> back to battery

By KVL: 12 - 4 - V2 = 0
V2 = 8V
```

---

## 7. Mesh and Nodal Analysis

### 7.1 Mesh Analysis (Loop Current Method)

**Steps:**
1. Assign a mesh current (I1, I2, ...) to each independent loop (usually clockwise).
2. Apply KVL to each mesh.
3. Solve the simultaneous equations.

**Worked Example (2-mesh circuit):**

```
Circuit: V_s = 10V, R1 = 2 ohm, R2 = 4 ohm (shared), R3 = 6 ohm

Mesh 1: 10 - 2*I1 - 4*(I1 - I2) = 0  -->  6*I1 - 4*I2 = 10
Mesh 2: -4*(I2 - I1) - 6*I2 = 0       -->  -4*I1 + 10*I2 = 0

From Mesh 2: I1 = 2.5 * I2
Substituting: 6(2.5*I2) - 4*I2 = 10 --> 11*I2 = 10 --> I2 = 0.909 A
I1 = 2.5 * 0.909 = 2.273 A
```

### 7.2 Nodal Analysis (Node Voltage Method)

**Steps:**
1. Choose a reference node (ground).
2. Assign voltage variables to remaining nodes.
3. Apply KCL at each non-reference node.
4. Solve the simultaneous equations.

**When to use which:**

| Method | Best for |
|--------|----------|
| **Mesh analysis** | Circuits with many series elements, fewer loops |
| **Nodal analysis** | Circuits with many parallel elements, fewer nodes |
| **Nodal** | When circuit has current sources |
| **Mesh** | When circuit has voltage sources |

---

## 8. Network Theorems

### 8.1 Thevenin's Theorem

> Any linear two-terminal circuit can be replaced by an **equivalent voltage source V_th in series with a resistance R_th**.

**Steps to find Thevenin equivalent:**
1. **V_th:** Remove the load. Find the open-circuit voltage across the terminals.
2. **R_th:** Turn off all independent sources (voltage sources -> short circuit, current sources -> open circuit). Find the resistance seen from the terminals.

**Worked Example:**

```
Circuit: 20V source in series with 4-ohm and 6-ohm resistors. Load connected across 6-ohm.

Step 1: V_th = 20 * 6/(4+6) = 12V (voltage divider, no load)
Step 2: R_th = 4 || 6 = (4*6)/(4+6) = 2.4 ohm (source shorted)

Thevenin equivalent: 12V source in series with 2.4-ohm resistor
```

### 8.2 Norton's Theorem

> Any linear two-terminal circuit can be replaced by an **equivalent current source I_N in parallel with a resistance R_N**.

**Relationship to Thevenin:**

```
I_N = V_th / R_th
R_N = R_th
```

### 8.3 Superposition Theorem

> In a linear circuit with multiple independent sources, the response (voltage/current) at any element equals the **algebraic sum of responses** due to each source acting alone (while other sources are turned off).

**Rules for "turning off" sources:**
- Voltage source --> replaced by **short circuit** (wire)
- Current source --> replaced by **open circuit** (break)

### 8.4 Maximum Power Transfer Theorem

> Maximum power is transferred to the load when the **load resistance equals the Thevenin resistance** of the source.

```
R_L = R_th    (for maximum power transfer)

P_max = V_th^2 / (4 * R_th)
```

**Important note:** At maximum power transfer, the efficiency is only **50%** (half the power is dissipated in R_th).

### 8.5 Theorem Comparison

| Theorem | What it does | Key result |
|---------|-------------|------------|
| **Thevenin** | Simplifies to voltage source + series R | V_th, R_th |
| **Norton** | Simplifies to current source + parallel R | I_N = V_th/R_th, R_N = R_th |
| **Superposition** | Analyzes each source separately | Sum of individual responses |
| **Max Power Transfer** | Finds optimal load | R_L = R_th, P_max = V_th^2/(4R_th) |

---

## 9. Resonance in RLC Circuits

### 9.1 Series Resonance

**Condition:** At resonance, the inductive reactance equals the capacitive reactance.

```
X_L = X_C
w_0 * L = 1 / (w_0 * C)
```

**Resonant frequency:**

```
f_0 = 1 / (2 * pi * sqrt(L * C))
w_0 = 1 / sqrt(L * C)
```

**At series resonance:**

| Parameter | Value | Significance |
|-----------|-------|--------------|
| **Impedance Z** | R (minimum, purely resistive) | Maximum current flows |
| **Current** | V/R (maximum) | |
| **V_L and V_C** | May be >> V_source (Q times V) | Voltage magnification |
| **Phase angle** | 0 degrees | V and I are in phase |
| **Power factor** | 1 (unity) | Maximum power transfer |

**Quality Factor (Q):**

```
Q = w_0 * L / R = 1 / (w_0 * C * R) = (1/R) * sqrt(L/C)
```

**Bandwidth:**

```
BW = f_0 / Q = R / (2 * pi * L)
```

Higher Q --> narrower bandwidth --> sharper tuning (more selective).

### 9.2 Parallel Resonance

**At parallel resonance:**

| Parameter | Value |
|-----------|-------|
| **Impedance Z** | Maximum (purely resistive) |
| **Current from source** | Minimum |
| **Circulating current** | May be >> source current (Q times) |

**Same resonant frequency formula:** f_0 = 1 / (2 * pi * sqrt(L * C))

### 9.3 Series vs Parallel Resonance

| Feature | Series RLC | Parallel RLC |
|---------|-----------|-------------|
| **Impedance at resonance** | **Minimum** (= R) | **Maximum** |
| **Current at resonance** | **Maximum** | **Minimum** |
| **Magnification** | Voltage magnification | Current magnification |
| **Acts as** | Band-pass (for current) | Band-stop (for current) |
| **Application** | Tuning circuits, filters | Tank circuits, oscillators |

---

## 10. Frequency Response of Simple Filters

### 10.1 RC Low-Pass Filter

**Circuit:** R in series, C across the output (to ground).

```
V_in ---[R]--- V_out
               |
              [C]
               |
              GND
```

**Transfer function:**

```
H(jw) = 1 / (1 + j*w*R*C)
|H(jw)| = 1 / sqrt(1 + (w*R*C)^2)
```

**Cutoff frequency (-3 dB point):**

```
f_c = 1 / (2 * pi * R * C)
```

**Gain at cutoff:** |H| = 1/sqrt(2) = 0.707 (-3 dB)

**Roll-off:** -20 dB/decade (or -6 dB/octave) beyond f_c.

### 10.2 RC High-Pass Filter

**Circuit:** C in series, R across the output (to ground).

```
V_in ---[C]--- V_out
               |
              [R]
               |
              GND
```

**Transfer function:**

```
H(jw) = j*w*R*C / (1 + j*w*R*C)
|H(jw)| = (w*R*C) / sqrt(1 + (w*R*C)^2)
```

**Cutoff frequency:** Same formula: f_c = 1 / (2 * pi * R * C)

**Gain at DC (f=0):** 0 (blocks DC)
**Gain at high frequencies:** approaches 1 (passes high frequencies)

### 10.3 Filter Frequency Response Summary

| Filter | Below f_c | At f_c | Above f_c |
|--------|-----------|--------|-----------|
| **Low-Pass** | Gain ~ 1 (passes) | Gain = 0.707 (-3 dB) | Gain decreases (-20 dB/dec) |
| **High-Pass** | Gain increases (+20 dB/dec) | Gain = 0.707 (-3 dB) | Gain ~ 1 (passes) |
| **Band-Pass** | Gain increases | Gain = max at f_0 | Gain decreases |
| **Band-Stop** | Gain ~ 1 | Gain = minimum at f_0 | Gain ~ 1 |

---

## Checklist -- Practice MCQs

### Basic Level

**Q1.** The gain of an inverting amplifier with R1 = 10 k-ohm and Rf = 50 k-ohm is:

- (a) +5
- (b) -5
- (c) +6
- (d) -6

**Q2.** According to KCL, at any node the sum of currents:

- (a) Is always positive
- (b) Entering equals the sum of currents leaving
- (c) Is equal to the supply voltage divided by total resistance
- (d) Is always zero only in DC circuits

**Q3.** In a half-wave rectifier, the ripple frequency is:

- (a) Same as input frequency
- (b) Twice the input frequency
- (c) Half the input frequency
- (d) Three times the input frequency

### Intermediate Level

**Q4.** Maximum power is transferred to the load when:

- (a) R_L = 0
- (b) R_L = infinity
- (c) R_L = R_th (Thevenin resistance)
- (d) R_L = 2 * R_th

**Q5.** The resonant frequency of a series RLC circuit with L = 1 mH and C = 1 uF is approximately:

- (a) 159 Hz
- (b) 1.59 kHz
- (c) 5.03 kHz
- (d) 50.3 kHz

**Q6.** An op-amp integrator converts a square wave input into:

- (a) Sine wave
- (b) Pulse wave
- (c) Triangular wave
- (d) Sawtooth wave

**Q7.** The gain of a non-inverting amplifier with R1 = 5 k-ohm and Rf = 20 k-ohm is:

- (a) -4
- (b) +4
- (c) +5
- (d) -5

### Exam Level

**Q8.** In Thevenin's theorem, to find R_th, independent voltage sources are:

- (a) Open-circuited
- (b) Short-circuited
- (c) Left as they are
- (d) Replaced by a 1-ohm resistor

**Q9.** The Barkhausen criterion for sustained oscillation requires loop gain magnitude to be:

- (a) Greater than 1
- (b) Less than 1
- (c) Exactly equal to 1
- (d) Equal to 0

**Q10.** At series resonance, the impedance of the RLC circuit is:

- (a) Maximum and purely resistive
- (b) Minimum and purely resistive
- (c) Zero
- (d) Minimum and purely reactive

---

### Answer Key

| Question | Answer | Explanation |
|----------|--------|-------------|
| Q1 | **(b) -5** | Gain = -Rf/R1 = -50k/10k = -5 |
| Q2 | **(b) Entering = leaving** | KCL: conservation of charge at a node |
| Q3 | **(a) Same as input** | Half-wave: one pulse per cycle, so ripple freq = f_in |
| Q4 | **(c) R_L = R_th** | Maximum Power Transfer Theorem |
| Q5 | **(c) 5.03 kHz** | f_0 = 1/(2*pi*sqrt(1e-3 * 1e-6)) = 1/(2*pi*sqrt(1e-9)) = 1/(2*pi*31.62e-6) ~ 5033 Hz |
| Q6 | **(c) Triangular wave** | Integration of constant (square) gives linear ramp (triangular) |
| Q7 | **(c) +5** | Gain = 1 + Rf/R1 = 1 + 20k/5k = 1 + 4 = 5 |
| Q8 | **(b) Short-circuited** | Voltage sources -> short circuit; Current sources -> open circuit |
| Q9 | **(c) Exactly equal to 1** | Barkhausen: \|A*beta\| = 1 for sustained oscillation |
| Q10 | **(b) Minimum and purely resistive** | At resonance: X_L = X_C, they cancel; Z = R (minimum impedance) |

---

> **Study Tip:** Master the op-amp gain formulas (inverting: -Rf/R1, non-inverting: 1+Rf/R1) as they appear very frequently. For network theory, practice Thevenin/Norton conversion and KVL/KCL problems. Memorize the resonant frequency formula f_0 = 1/(2*pi*sqrt(LC)) -- it is used across many topics.
