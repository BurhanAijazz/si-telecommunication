# Subject 9 (Part 1): Communication Systems -- Analog & Digital

> **JKSSB Sub-Inspector (Telecommunication) Exam Prep**
> Part of the 20-Marks Communication Systems subject
> Difficulty: Basic --> Intermediate --> Exam-Level

---

## Table of Contents

1. [Analog Communication](#1-analog-communication)
2. [Digital Communication](#2-digital-communication)
3. [Digital Modulation Techniques](#3-digital-modulation-techniques)
4. [Error Detection and Correction](#4-error-detection-and-correction)
5. [SNR and BER Concepts](#5-snr-and-ber-concepts)
6. [Key Theorems](#6-key-theorems)
7. [Master Comparison Tables](#7-master-comparison-tables)
8. [Checklist -- Practice MCQs](#8-checklist----practice-mcqs)

---

## 1. Analog Communication

### 1.1 What Is Modulation? (Beginner Explanation)

Imagine you want to shout a message to a friend far away, but your voice is too weak. You attach your message to a powerful loudspeaker (the **carrier wave**). The process of "attaching" your message to this carrier is called **modulation**.

- **Message signal (modulating signal):** Your actual information (voice, music). Low frequency.
- **Carrier signal:** A high-frequency wave strong enough to travel long distances.
- **Modulated signal:** The combined signal that carries your information over distance.

**Why do we need modulation?**

1. Antenna size would be impractically large for low-frequency signals (antenna length is proportional to wavelength).
2. Multiple signals can share the same channel (multiplexing).
3. Improves signal quality over long distances.

---

### 1.2 Amplitude Modulation (AM)

**Simple idea:** The **amplitude** (height) of the carrier wave changes according to the message signal. The frequency stays constant.

**AM Signal Formula:**

```
s(t) = Ac [1 + m * cos(2pi * fm * t)] * cos(2pi * fc * t)
```

| Symbol | Meaning |
|--------|---------|
| Ac | Amplitude of carrier |
| m | Modulation index |
| fm | Frequency of message signal |
| fc | Frequency of carrier signal |

**Modulation Index (m):**

```
m = Am / Ac
```

Where Am = amplitude of message, Ac = amplitude of carrier.

| Condition | Value of m | Result |
|-----------|-----------|--------|
| Under-modulation | m < 1 | Signal is clean but weak |
| Perfect modulation | m = 1 | Maximum signal without distortion |
| Over-modulation | m > 1 | **Distortion occurs** -- avoid this |

**Bandwidth of AM:**

```
BW_AM = 2 * fm
```

Where fm is the highest frequency in the message signal.

**Example:** If voice signal has maximum frequency 4 kHz, then AM bandwidth = 2 x 4 = **8 kHz**.

**Power in AM:**

```
Total Power = Pc (1 + m^2 / 2)
```

Where Pc is the carrier power.

**Key points for exam:**
- AM is simple and cheap
- AM is more susceptible to noise (because noise affects amplitude)
- Used in: MW/SW radio broadcasting, aircraft communication

---

### 1.3 Frequency Modulation (FM)

**Simple idea:** The **frequency** of the carrier wave changes according to the message signal. The amplitude stays constant.

**FM Signal Formula:**

```
s(t) = Ac * cos[2pi * fc * t + (delta_f / fm) * sin(2pi * fm * t)]
```

**Modulation Index (beta):**

```
beta = delta_f / fm
```

Where delta_f = maximum frequency deviation, fm = message frequency.

| FM Type | beta Value | Bandwidth Formula |
|---------|-----------|-------------------|
| Narrowband FM (NBFM) | beta << 1 | BW = 2 * fm |
| Wideband FM (WBFM) | beta >> 1 | **Carson's Rule: BW = 2(delta_f + fm)** |

**Carson's Rule** (most important FM bandwidth formula):

```
BW_FM = 2 * (delta_f + fm)
```

**Example:** If delta_f = 75 kHz and fm = 15 kHz, then BW = 2(75 + 15) = **180 kHz**.

**Key points for exam:**
- FM has better noise immunity than AM (noise mainly affects amplitude)
- FM requires more bandwidth than AM
- Used in: FM radio (88-108 MHz), TV audio, two-way radio

---

### 1.4 Phase Modulation (PM)

**Simple idea:** The **phase** of the carrier wave changes according to the message signal. Amplitude and frequency remain constant.

**PM Signal Formula:**

```
s(t) = Ac * cos[2pi * fc * t + kp * m(t)]
```

Where kp = phase sensitivity constant, m(t) = message signal.

**Key relationship:** FM and PM are closely related. FM is essentially the integral of PM.

```
FM = PM of the integral of message signal
PM = FM of the derivative of message signal
```

**Key points for exam:**
- PM is less commonly used directly in analog systems
- PM is the basis for digital PSK modulation
- Bandwidth is similar to FM

---

### 1.5 Demodulation

**Demodulation** is the reverse of modulation -- extracting the original message from the modulated signal.

| Modulation | Demodulation Method | Notes |
|------------|-------------------|-------|
| AM | Envelope detector (diode + RC filter) | Simplest demodulation |
| FM | Frequency discriminator, PLL (Phase-Locked Loop) | More complex circuitry |
| PM | PLL-based detector | Similar to FM detection |

---

### 1.6 Noise in Analog Communication

**Noise** is any unwanted signal that corrupts the original signal.

| Noise Type | Source | Description |
|-----------|--------|-------------|
| Thermal noise (Johnson noise) | Resistors, conductors | Caused by random motion of electrons; present in all circuits |
| Shot noise | Semiconductor devices | Due to random arrival of charge carriers |
| Flicker noise (1/f noise) | Electronic components | Dominates at low frequencies |
| Intermodulation noise | Nonlinear systems | Mixing of different frequency signals |

**Noise Figure (NF):** Measures how much noise a device adds.

```
NF = SNR_input / SNR_output    (in linear)
NF(dB) = SNR_input(dB) - SNR_output(dB)
```

**Friis' Formula** (cascaded stages):

```
F_total = F1 + (F2 - 1)/G1 + (F3 - 1)/(G1 * G2) + ...
```

The **first stage** noise figure dominates. This is why low-noise amplifiers (LNA) are placed at the front end.

---

## 2. Digital Communication

### 2.1 Why Go Digital?

| Advantage | Explanation |
|-----------|------------|
| Noise immunity | Digital signals can be regenerated perfectly |
| Encryption | Easy to secure digital data |
| Compression | Data can be compressed to save bandwidth |
| Multiplexing | Easier to combine multiple signals (TDM) |
| Storage | Digital data is easier to store and process |

---

### 2.2 Sampling (Analog to Digital -- Step 1)

**Beginner idea:** Take "snapshots" of the analog signal at regular intervals.

**Nyquist Theorem (Sampling Theorem):**

```
fs >= 2 * fm(max)
```

Where fs = sampling frequency, fm(max) = highest frequency in the signal.

The minimum sampling rate (2 * fm) is called the **Nyquist rate**.

**Example:** Telephone voice has max frequency 4 kHz. Minimum sampling rate = 2 x 4000 = **8000 samples/second**.

**What happens if fs < 2fm?** --> **Aliasing** occurs (frequencies overlap and distort the signal). This is irreversible and must be prevented by using an **anti-aliasing filter** before sampling.

---

### 2.3 Quantization (Analog to Digital -- Step 2)

**Beginner idea:** Round each sample to the nearest allowed level.

- **Quantization levels (L):** The number of discrete levels available.
- **Quantization error:** The difference between the actual and quantized value.

```
Number of bits per sample:  n = log2(L)
Quantization step size:     delta = (Vmax - Vmin) / L
```

| Type | Description |
|------|-------------|
| Uniform quantization | Equal step sizes throughout the range |
| Non-uniform quantization | Smaller steps for small signals, larger for large signals (companding) |

**Companding** (Compressing + Expanding):
- **mu-law** (North America, Japan): mu = 255
- **A-law** (Europe, India): A = 87.6

Purpose: Improves SNR for weak signals by giving them finer quantization levels.

---

### 2.4 Pulse Code Modulation (PCM)

PCM is the most fundamental digital encoding technique. It combines sampling, quantization, and encoding.

**PCM Steps:**

```
Analog Signal --> Sampling --> Quantization --> Encoding --> Digital Signal (binary)
```

**Key PCM Calculations:**

| Parameter | Formula | Example (Telephone) |
|-----------|---------|-------------------|
| Sampling rate | fs = 2 * fm | 2 x 4000 = 8000 Hz |
| Bits per sample | n = log2(L) | log2(256) = 8 bits |
| Bit rate | R = fs x n | 8000 x 8 = **64 kbps** |
| Bandwidth required | BW >= R/2 = fs x n / 2 | 64000/2 = 32 kHz |

**64 kbps** is the standard bit rate for one telephone voice channel (PCM). This is an important number for the exam.

---

### 2.5 DPCM (Differential PCM)

**Beginner idea:** Instead of encoding the full sample value, encode only the **difference** between consecutive samples.

```
DPCM signal = Current sample - Predicted sample
```

**Advantages over PCM:**
- Requires **fewer bits** per sample (differences are small)
- Lower bit rate for the same quality

**Typical bit rate:** 32 kbps for voice (compared to 64 kbps for standard PCM).

---

### 2.6 Delta Modulation (DM)

**Beginner idea:** The simplest form of DPCM. Uses only **1 bit** per sample to indicate whether the signal went UP (+delta) or DOWN (-delta).

```
If signal increased:  transmit 1
If signal decreased:  transmit 0
```

**Problems with DM:**

| Problem | Cause | Description |
|---------|-------|-------------|
| Slope overload | Signal changes too fast | Step size too small to follow rapid changes |
| Granular noise | Signal changes slowly | Step size too large, causing zigzag around the actual value |

**Solution:** **Adaptive Delta Modulation (ADM)** -- step size adjusts automatically based on signal behavior.

---

## 3. Digital Modulation Techniques

Digital modulation maps digital data (0s and 1s) onto an analog carrier wave for transmission.

### 3.1 ASK (Amplitude Shift Keying)

**Simple idea:** Change the **amplitude** of the carrier to represent 0 and 1.

```
Bit 1: Carrier ON (full amplitude)
Bit 0: Carrier OFF (zero amplitude)  --> This special case is called OOK (On-Off Keying)
```

**Bandwidth:**

```
BW_ASK = (1 + r) * Rb
```

Where Rb = bit rate, r = roll-off factor (0 to 1).

---

### 3.2 FSK (Frequency Shift Keying)

**Simple idea:** Change the **frequency** of the carrier to represent 0 and 1.

```
Bit 1: Higher frequency (f1)
Bit 0: Lower frequency (f2)
```

**Bandwidth:**

```
BW_FSK = (f1 - f2) + 2 * Rb
```

Or using Carson's rule: BW = 2 * (delta_f + Rb)

---

### 3.3 PSK (Phase Shift Keying)

**Simple idea:** Change the **phase** of the carrier to represent 0 and 1.

```
Bit 1: Phase = 0 degrees
Bit 0: Phase = 180 degrees
```

This basic form is called **BPSK** (Binary PSK) -- 1 bit per symbol.

**Bandwidth:**

```
BW_BPSK = 2 * Rb
```

---

### 3.4 QPSK (Quadrature Phase Shift Keying)

**Simple idea:** Use **4 phase states** (0, 90, 180, 270 degrees) to represent 2 bits per symbol.

| Symbol | Bits | Phase |
|--------|------|-------|
| S1 | 00 | 45 degrees |
| S2 | 01 | 135 degrees |
| S3 | 11 | 225 degrees |
| S4 | 10 | 315 degrees |

**Bandwidth:**

```
BW_QPSK = Rb  (half of BPSK bandwidth for the same bit rate)
```

**Key insight:** QPSK is **twice as bandwidth-efficient** as BPSK because it carries 2 bits per symbol.

---

### 3.5 Digital Modulation Comparison Table

| Parameter | ASK | FSK | PSK (BPSK) | QPSK |
|-----------|-----|-----|------------|------|
| **What changes** | Amplitude | Frequency | Phase | Phase (4 levels) |
| **Bits per symbol** | 1 | 1 | 1 | 2 |
| **Bandwidth efficiency** | Low | Low | Moderate | **High** |
| **Noise immunity** | **Poor** | Good | **Best** (among these) | Good |
| **Complexity** | Simplest | Moderate | Moderate | Higher |
| **BER performance** | Worst | Better | Best | Same as BPSK |
| **Application** | Optical fiber | Low-speed modems | Satellite, Wi-Fi | 4G/LTE, DVB-S |

---

## 4. Error Detection and Correction

### 4.1 Why Do Errors Occur?

During transmission, noise, interference, and fading can flip bits (change 0 to 1 or 1 to 0). We need methods to detect and correct these errors.

### 4.2 Parity Check

**Simplest method.** Add one extra bit to make the total number of 1s either even or odd.

| Type | Rule | Example (data: 1011001) |
|------|------|------------------------|
| Even parity | Total 1s must be even | 1011001**1** (four 1s + parity 1 = even? No. 4 ones already even, so parity = 0 --> 1011001**0**) |
| Odd parity | Total 1s must be odd | 1011001**1** (four 1s + 1 = five = odd) |

**Limitations:**
- Can **detect** single-bit errors only
- **Cannot correct** any errors
- Cannot detect even number of bit errors (2, 4, 6...)

### 4.3 CRC (Cyclic Redundancy Check)

**Beginner idea:** Think of it as a mathematical "fingerprint" of the data. The sender calculates the CRC and appends it. The receiver recalculates and compares.

**How CRC works (simplified):**

1. Choose a **generator polynomial** (e.g., CRC-16, CRC-32).
2. Append zeros to the data (number of zeros = degree of generator).
3. Perform **binary division** (XOR-based) of data by the generator.
4. The **remainder** is the CRC code -- append it to data.
5. At receiver: divide received data by same generator. If remainder = 0, no error.

**Common CRC Standards:**

| Standard | Length | Application |
|----------|--------|-------------|
| CRC-8 | 8 bits | ATM headers |
| CRC-16 | 16 bits | USB, Modbus |
| CRC-32 | 32 bits | Ethernet, ZIP files, PNG |

**CRC capabilities:**
- Can detect all single-bit errors
- Can detect all double-bit errors
- Can detect all odd-number-of-bit errors
- Can detect burst errors shorter than the CRC length

---

## 5. SNR and BER Concepts

### 5.1 Signal-to-Noise Ratio (SNR)

```
SNR = P_signal / P_noise        (linear ratio)
SNR(dB) = 10 * log10(P_signal / P_noise)
```

| SNR Value | Meaning |
|-----------|---------|
| High SNR (e.g., 30 dB) | Signal is much stronger than noise -- good quality |
| Low SNR (e.g., 3 dB) | Signal barely above noise -- poor quality |
| SNR = 0 dB | Signal power = Noise power |

### 5.2 Bit Error Rate (BER)

```
BER = Number of bit errors / Total number of bits transmitted
```

| BER Value | Quality |
|-----------|---------|
| 10^-3 | Poor (1 error per 1000 bits) |
| 10^-6 | Good (1 error per million bits) |
| 10^-9 | Excellent (1 error per billion bits) -- typical for optical fiber |

**Key relationship:** Higher SNR --> Lower BER --> Better communication quality.

---

## 6. Key Theorems

### 6.1 Nyquist Theorem (Noise-Free Channel)

```
C = 2 * B * log2(M)
```

| Symbol | Meaning |
|--------|---------|
| C | Maximum data rate (bps) |
| B | Bandwidth of channel (Hz) |
| M | Number of signal levels |

**Example:** Channel bandwidth = 3000 Hz, 4 signal levels. C = 2 x 3000 x log2(4) = 2 x 3000 x 2 = **12,000 bps**.

### 6.2 Shannon's Theorem (Noisy Channel Capacity)

```
C = B * log2(1 + SNR)
```

| Symbol | Meaning |
|--------|---------|
| C | Maximum theoretical data rate (bps) |
| B | Bandwidth (Hz) |
| SNR | Signal-to-Noise Ratio (linear, not in dB) |

**Example:** B = 3000 Hz, SNR = 1000 (= 30 dB). C = 3000 x log2(1001) = 3000 x 9.97 = **29,901 bps** (approx 30 kbps).

**Key exam points:**
- Shannon's limit is the **absolute maximum**; no real system can exceed it.
- It tells us that we can trade bandwidth for SNR and vice versa.
- It does NOT tell us HOW to achieve this limit (just that it exists).

---

## 7. Master Comparison Tables

### AM vs FM vs PM

| Parameter | AM | FM | PM |
|-----------|----|----|-----|
| **What varies** | Amplitude | Frequency | Phase |
| **Bandwidth** | 2fm (narrowest) | 2(delta_f + fm) (widest) | Similar to FM |
| **Noise immunity** | **Poor** | **Good** | Good |
| **Complexity** | Simple | Moderate | Moderate |
| **Power efficiency** | Low | High | High |
| **Modulation index** | m = Am/Ac | beta = delta_f/fm | kp * Am |
| **Application** | AM radio, aircraft | FM radio, TV audio | Digital systems (PSK) |

### Analog vs Digital Communication

| Parameter | Analog | Digital |
|-----------|--------|---------|
| Signal type | Continuous | Discrete (0s and 1s) |
| Noise immunity | Poor | **Excellent** (regeneration possible) |
| Security | Hard to encrypt | Easy encryption |
| Multiplexing | FDM | TDM |
| Hardware | Simpler | More complex |
| Bandwidth | Less | More (but compression helps) |
| Quality over distance | Degrades | Maintained (repeaters regenerate) |

---

## 8. Checklist -- Practice MCQs

**Difficulty: Basic to Exam-Level**

---

**Q1. (Basic)** What is the Nyquist sampling rate for a signal with maximum frequency of 5 kHz?

- (A) 5 kHz
- (B) 2.5 kHz
- (C) 10 kHz
- (D) 20 kHz

---

**Q2. (Basic)** In AM, if the modulation index m > 1, what happens?

- (A) Signal becomes stronger
- (B) Bandwidth decreases
- (C) Envelope distortion occurs (over-modulation)
- (D) Noise is eliminated

---

**Q3. (Intermediate)** The standard bit rate for a single PCM voice channel (telephone) is:

- (A) 32 kbps
- (B) 64 kbps
- (C) 128 kbps
- (D) 16 kbps

---

**Q4. (Intermediate)** Carson's rule for FM bandwidth is:

- (A) BW = 2 x fm
- (B) BW = 2 x (delta_f + fm)
- (C) BW = delta_f / fm
- (D) BW = fm / delta_f

---

**Q5. (Intermediate)** Which digital modulation technique has the best noise immunity?

- (A) ASK
- (B) FSK
- (C) PSK
- (D) OOK

---

**Q6. (Exam-Level)** Using Shannon's theorem, the maximum data rate for a channel with B = 4 kHz and SNR = 255 is:

- (A) 16 kbps
- (B) 32 kbps
- (C) 64 kbps
- (D) 8 kbps

---

**Q7. (Exam-Level)** In QPSK, the number of bits per symbol is:

- (A) 1
- (B) 2
- (C) 4
- (D) 8

---

**Q8. (Exam-Level)** CRC-32 is used in which of the following?

- (A) Ethernet and ZIP files
- (B) Only Bluetooth
- (C) Only USB
- (D) ATM cell headers

---

**Q9. (Exam-Level)** Slope overload distortion is a problem associated with:

- (A) PCM
- (B) DPCM
- (C) Delta Modulation
- (D) Amplitude Modulation

---

**Q10. (Exam-Level)** If the noise figure of the first amplifier stage in a receiver is very low, what is the effect on the overall system?

- (A) No effect on system noise
- (B) The overall noise figure is dominated by later stages
- (C) The overall noise figure is kept low (Friis' formula)
- (D) The system bandwidth increases

---

### Answer Key

| Q# | Answer | Explanation |
|----|--------|-------------|
| Q1 | **(C) 10 kHz** | Nyquist rate = 2 x 5 kHz = 10 kHz |
| Q2 | **(C) Envelope distortion** | Over-modulation (m > 1) causes distortion in the demodulated signal |
| Q3 | **(B) 64 kbps** | 8000 samples/sec x 8 bits/sample = 64 kbps |
| Q4 | **(B) BW = 2(delta_f + fm)** | This is Carson's rule for wideband FM |
| Q5 | **(C) PSK** | PSK has the best noise immunity among basic digital modulation schemes |
| Q6 | **(B) 32 kbps** | C = 4000 x log2(1 + 255) = 4000 x log2(256) = 4000 x 8 = 32,000 bps |
| Q7 | **(B) 2** | QPSK uses 4 phase states, so log2(4) = 2 bits per symbol |
| Q8 | **(A) Ethernet and ZIP files** | CRC-32 is the standard for Ethernet frames and ZIP file verification |
| Q9 | **(C) Delta Modulation** | Slope overload occurs in DM when the signal changes faster than the step size can follow |
| Q10 | **(C) Overall noise figure is kept low** | Friis' formula shows the first stage dominates; a low-noise first stage keeps total NF low |

---

> **Study Tip:** Memorize the key formulas (Nyquist rate, Shannon's capacity, Carson's rule, PCM bit rate). These are the most frequently tested topics in competitive exams.
