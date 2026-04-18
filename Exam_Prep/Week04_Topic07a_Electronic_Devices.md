# Subject 7 Part 1: Electronic Devices

> **Exam Weightage: Part of 20 Marks** | **Difficulty: Moderate** | **Prep Time: ~1.5 Weeks**

---

## Table of Contents

1. [Semiconductor Basics](#1-semiconductor-basics)
2. [PN Junction Diode](#2-pn-junction-diode)
3. [Zener Diode](#3-zener-diode)
4. [Bipolar Junction Transistor (BJT)](#4-bipolar-junction-transistor-bjt)
5. [MOSFET](#5-mosfet)
6. [Optoelectronic Devices](#6-optoelectronic-devices)
7. [Thyristors: SCR and TRIAC](#7-thyristors-scr-and-triac)
8. [Checklist -- Practice MCQs](#checklist--practice-mcqs)

---

## 1. Semiconductor Basics

### 1.1 What is a Semiconductor?

**Beginner explanation:** A semiconductor is a material whose electrical conductivity falls between that of a conductor (like copper) and an insulator (like rubber). The most common semiconductor is **Silicon (Si)**.

**Conductivity comparison:**

| Material Type | Resistivity (ohm-cm) | Examples |
|---------------|----------------------|----------|
| **Conductor** | 10^(-6) to 10^(-4) | Copper, Gold, Aluminum |
| **Semiconductor** | 10^(-4) to 10^(6) | Silicon, Germanium, GaAs |
| **Insulator** | 10^(10) to 10^(18) | Glass, Rubber, Mica |

### 1.2 Energy Band Theory (Simplified)

Electrons in a solid occupy energy bands:

- **Valence Band:** The band where electrons are bound to atoms (outermost shell electrons).
- **Conduction Band:** The band where electrons are free to move and conduct electricity.
- **Band Gap (Eg):** The energy gap between the valence and conduction bands.

| Material | Band Gap |
|----------|----------|
| Silicon (Si) | **1.12 eV** (most important for exams) |
| Germanium (Ge) | **0.67 eV** |
| GaAs | **1.43 eV** |
| Conductor | ~0 eV (bands overlap) |
| Insulator | > 3 eV |

### 1.3 Intrinsic Semiconductors

**Intrinsic = Pure semiconductor** (no impurities added).

- Silicon has 4 valence electrons.
- Each atom forms **covalent bonds** with 4 neighbors.
- At room temperature, some bonds break, creating **electron-hole pairs**.
- Number of electrons (n) = Number of holes (p) = **n_i** (intrinsic carrier concentration).
- For Si at 300K: **n_i = 1.5 x 10^10 per cm^3**

**Key formula:**

```
n * p = n_i^2    (Mass Action Law -- always true, even in doped semiconductors)
```

### 1.4 Extrinsic Semiconductors (Doped)

Doping means adding impurity atoms to change the conductivity.

| Type | Dopant Valence | Dopant Examples | Majority Carrier | Minority Carrier |
|------|---------------|-----------------|-------------------|-------------------|
| **N-type** | 5 (Pentavalent) | Phosphorus (P), Arsenic (As), Antimony (Sb) | Electrons | Holes |
| **P-type** | 3 (Trivalent) | Boron (B), Aluminum (Al), Gallium (Ga), Indium (In) | Holes | Electrons |

**N-type explanation:** A pentavalent atom has 5 valence electrons. In a silicon lattice (which needs 4 bonds), the 5th electron is **free** -- it becomes a **donor** electron. Hence, electrons are the majority carriers.

**P-type explanation:** A trivalent atom has 3 valence electrons. It creates one unfilled bond (a **hole**). The impurity is called an **acceptor**. Holes are the majority carriers.

**Important relationships (for N-type, where N_D = donor concentration):**

```
n = N_D  (approximately, if N_D >> n_i)
p = n_i^2 / N_D
```

**For P-type (where N_A = acceptor concentration):**

```
p = N_A
n = n_i^2 / N_A
```

---

## 2. PN Junction Diode

### 2.1 Formation of PN Junction

When P-type and N-type materials are joined:

1. Electrons from N-side diffuse to P-side; holes from P-side diffuse to N-side.
2. This creates a region depleted of free carriers called the **depletion region** (or depletion layer).
3. A **built-in potential (V_bi)** develops across the junction that opposes further diffusion.

**Built-in potential:**

```
V_bi = (kT/q) * ln(N_A * N_D / n_i^2)
```

Where kT/q = 26 mV at room temperature (300K). This is called the **thermal voltage (V_T)**.

Typical values: V_bi ~ **0.7 V for Si**, ~0.3 V for Ge.

### 2.2 Biasing Conditions

| Condition | Connection | What Happens | Current |
|-----------|-----------|--------------|---------|
| **Forward Bias** | P to +ve, N to -ve | Depletion region narrows, current flows easily | Large (mA range) |
| **Reverse Bias** | P to -ve, N to +ve | Depletion region widens, very small current | Tiny (nA/uA range -- reverse saturation current I_s) |
| **Breakdown** | Excessive reverse voltage | Large reverse current flows suddenly | Large (destructive unless Zener) |

### 2.3 V-I Characteristics of PN Junction Diode

```
         I (mA)
         |          /
         |         /  Forward bias region
         |        /   (exponential rise)
         |       /
    -----|------/------------- V
  Reverse|    / 0.7V (Si)
  bias   |   / (knee voltage)
  (tiny  |  /
  current|
  -I_s)  |
```

**Diode Current Equation (Shockley Equation):**

```
I = I_s * (e^(V / n*V_T) - 1)
```

Where:
- **I_s** = reverse saturation current (typically nA for Si)
- **V_T** = thermal voltage = kT/q = 26 mV at 300K
- **n** = ideality factor (1 for ideal, 1 to 2 for practical diodes)

**Key parameters to remember:**

| Parameter | Silicon (Si) | Germanium (Ge) |
|-----------|-------------|-----------------|
| Cut-in voltage (V_gamma) | **0.7 V** | **0.3 V** |
| Reverse breakdown voltage | 50-1000 V | 25-400 V |
| Reverse saturation current | ~nA | ~uA |

### 2.4 Diode Applications

| Application | How it works |
|-------------|-------------|
| **Rectifier** | Converts AC to DC (allows current in one direction) |
| **Clipper** | Clips/limits voltage to a certain level |
| **Clamper** | Shifts the DC level of a signal |
| **Voltage multiplier** | Multiple diode-capacitor stages multiply voltage |
| **Protection** | Protects circuits from reverse polarity |

---

## 3. Zener Diode

### 3.1 What is a Zener Diode?

A Zener diode is a specially designed diode that operates in the **reverse breakdown region** in a controlled manner. Unlike a regular diode, breakdown is **non-destructive**.

### 3.2 V-I Characteristics

```
         I (mA)
         |          /
         |         / Forward (same as regular diode)
         |        /
    -----|-------/------------ V
         |     /
   ------/    /
  /     |    /
 / Zener|
/  region|
  (constant V_Z)
```

**Two breakdown mechanisms:**

| Mechanism | Zener Voltage Range | How it Works |
|-----------|-------------------|--------------|
| **Zener Breakdown** | V_Z < 5 V | High electric field directly breaks covalent bonds |
| **Avalanche Breakdown** | V_Z > 7 V | Accelerated carriers collide and create more carriers (chain reaction) |
| **Both** | 5 V < V_Z < 7 V | Both mechanisms contribute |

**Temperature coefficient:**
- **Zener breakdown (< 5V):** Negative temperature coefficient (V_Z decreases with temperature)
- **Avalanche breakdown (> 7V):** Positive temperature coefficient (V_Z increases with temperature)
- **At ~5.6V:** Temperature coefficient is nearly zero (used for voltage references)

### 3.3 Zener as Voltage Regulator

**Circuit description:** A Zener diode is connected in reverse bias across the load, with a series resistor R_s from the supply voltage V_s.

```
V_s ---[R_s]---+--- V_out
               |
              [Zener (reverse bias)]
               |
              GND
```

**Operation:** The Zener maintains a constant voltage V_Z across the load regardless of (reasonable) variations in supply voltage or load current.

**Key formulas:**

```
I_s = (V_s - V_Z) / R_s         (total current through R_s)
I_Z = I_s - I_L                  (current through Zener)
I_L = V_Z / R_L                  (load current)
```

**Condition for regulation:** I_Z must remain between I_Z(min) and I_Z(max).

---

## 4. Bipolar Junction Transistor (BJT)

### 4.1 Structure and Types

A BJT has three regions and two PN junctions:

| Type | Structure | Schematic Symbol Arrow |
|------|-----------|----------------------|
| **NPN** | N (Emitter) - P (Base) - N (Collector) | Arrow points **out** from Base-Emitter |
| **PNP** | P (Emitter) - N (Base) - P (Collector) | Arrow points **in** to Base-Emitter |

**Three terminals:** Emitter (E), Base (B), Collector (C)

**Memory aid:** NPN = "**N**ot **P**ointing i**N**" (arrow points outward)

### 4.2 BJT Operating Regions

| Region | B-E Junction | B-C Junction | Use |
|--------|-------------|-------------|-----|
| **Active (Forward Active)** | Forward biased | Reverse biased | **Amplification** |
| **Saturation** | Forward biased | Forward biased | **Switching (ON state)** |
| **Cutoff** | Reverse biased | Reverse biased | **Switching (OFF state)** |
| **Reverse Active** | Reverse biased | Forward biased | Rarely used |

### 4.3 BJT Current Relationships

```
I_E = I_B + I_C    (KCL at the transistor)
```

**Current gain parameters:**

| Parameter | Formula | Typical Value | Relation |
|-----------|---------|---------------|----------|
| **alpha (common base gain)** | I_C / I_E | 0.95 to 0.99 | alpha = beta / (1 + beta) |
| **beta (common emitter gain)** | I_C / I_B | 50 to 300 | beta = alpha / (1 - alpha) |

**Key relationships:**

```
I_C = beta * I_B
I_C = alpha * I_E
I_E = (1 + beta) * I_B
```

**Worked Example:**

```
Given: beta = 100, I_B = 20 uA
Find: I_C, I_E

I_C = beta * I_B = 100 * 20 uA = 2 mA
I_E = I_C + I_B = 2 mA + 0.02 mA = 2.02 mA
```

### 4.4 BJT Biasing Circuits

| Biasing Method | Stability | Complexity | Notes |
|----------------|-----------|------------|-------|
| **Fixed bias** | Poor | Simplest | I_B = (V_CC - V_BE) / R_B |
| **Collector feedback bias** | Moderate | Simple | Feedback from collector to base |
| **Voltage divider bias** | **Best** | Moderate | **Most commonly used**; R1, R2 set V_B |
| **Emitter bias** | Good | Two supplies needed | Uses negative V_EE supply |

**Voltage divider bias (most important):**

```
V_B = V_CC * R2 / (R1 + R2)
V_E = V_B - V_BE
I_C ~ I_E = V_E / R_E
V_CE = V_CC - I_C * (R_C + R_E)
```

### 4.5 BJT as a Switch

| State | Condition | BJT Region | Output |
|-------|-----------|------------|--------|
| **OFF** | V_in < V_BE (no base current) | Cutoff | V_out ~ V_CC (HIGH) |
| **ON** | V_in sufficient to saturate | Saturation | V_out ~ V_CE(sat) ~ 0.2 V (LOW) |

---

## 5. MOSFET

### 5.1 What is a MOSFET?

**MOSFET = Metal-Oxide-Semiconductor Field-Effect Transistor**

Unlike BJT (current-controlled), MOSFET is **voltage-controlled**. It has very high input impedance (gate draws almost zero current).

**Three terminals:** Gate (G), Drain (D), Source (S)

### 5.2 Types of MOSFETs

| Type | Channel | Normally | Turn ON when |
|------|---------|----------|-------------|
| **N-channel Enhancement** | None exists naturally | OFF | V_GS > V_th (positive threshold) |
| **P-channel Enhancement** | None exists naturally | OFF | V_GS < V_th (negative threshold) |
| **N-channel Depletion** | Exists naturally | ON | V_GS = 0 (ON), V_GS < -V_th (OFF) |
| **P-channel Depletion** | Exists naturally | ON | V_GS = 0 (ON), V_GS > V_th (OFF) |

**Enhancement-mode MOSFETs** are the most widely used (especially in digital circuits / CMOS).

### 5.3 MOSFET Operating Regions (N-channel Enhancement)

| Region | Condition | Drain Current I_D |
|--------|-----------|-------------------|
| **Cutoff** | V_GS < V_th | I_D = 0 |
| **Triode (Linear)** | V_GS > V_th AND V_DS < (V_GS - V_th) | I_D = k_n * [2(V_GS - V_th)*V_DS - V_DS^2] |
| **Saturation** | V_GS > V_th AND V_DS >= (V_GS - V_th) | I_D = (k_n/2) * (V_GS - V_th)^2 |

Where **k_n = (1/2) * mu_n * C_ox * (W/L)** is the transconductance parameter.

### 5.4 BJT vs MOSFET Comparison

| Feature | BJT | MOSFET |
|---------|-----|--------|
| **Control** | Current-controlled (I_B) | Voltage-controlled (V_GS) |
| **Input impedance** | Low to moderate | **Very high** (almost infinite) |
| **Speed** | Moderate | **Fast** (no minority carrier storage) |
| **Power consumption** | Higher | **Lower** |
| **Dominant use** | Analog amplifiers, high-current | **Digital circuits, CMOS, power switching** |
| **Thermal stability** | Less stable | More stable (positive temp coefficient) |
| **Fabrication density** | Lower | **Much higher** (billions in modern ICs) |

### 5.5 MOSFET as a Switch

- **OFF state:** V_GS < V_th --> Channel does not form --> Open circuit between D and S.
- **ON state:** V_GS >> V_th --> Channel forms --> Low resistance path between D and S (triode region).

**CMOS Inverter:** Uses one NMOS and one PMOS. When input is HIGH, NMOS is ON (output LOW). When input is LOW, PMOS is ON (output HIGH). Zero static power consumption.

---

## 6. Optoelectronic Devices

### 6.1 LED (Light Emitting Diode)

**How it works:** When a forward-biased PN junction recombines electrons and holes, energy is released. In LEDs (made from direct bandgap materials like GaAs, GaP, GaN), this energy is emitted as **light (photons)**.

**Key points:**
- Forward voltage: 1.5 V to 3.5 V depending on color
- Made from **compound semiconductors** (not silicon -- Si has indirect bandgap)

| LED Color | Material | Forward Voltage |
|-----------|----------|-----------------|
| Infrared | GaAs | ~1.2 V |
| Red | GaAsP | ~1.8 V |
| Green | GaP | ~2.2 V |
| Blue | GaN (InGaN) | ~3.0 V |
| White | Blue LED + Phosphor | ~3.2 V |

**Current limiting resistor:**

```
R = (V_supply - V_LED) / I_LED
```

### 6.2 Photodiode

**How it works:** Operates in **reverse bias**. When light hits the depletion region, it generates electron-hole pairs, producing a **photocurrent** proportional to light intensity.

**Key characteristics:**
- Operated in **reverse bias** (unlike LED)
- Current increases with light intensity
- Very fast response time (nanoseconds)
- Used in: optical fiber receivers, light meters, barcode scanners

**Modes of operation:**

| Mode | Bias | Use |
|------|------|-----|
| **Photoconductive** | Reverse bias | High speed, linear response |
| **Photovoltaic** | Zero bias | Solar cells, low-noise applications |

### 6.3 Phototransistor

**How it works:** Like a photodiode + BJT amplifier combined. Light falling on the base-collector junction generates base current, which is amplified by beta.

**Key comparison:**

| Feature | Photodiode | Phototransistor |
|---------|-----------|-----------------|
| **Sensitivity** | Lower | **Higher** (amplified by beta) |
| **Speed** | **Faster** | Slower |
| **Linearity** | Better | Moderate |
| **Typical use** | High-speed fiber optics | Light sensors, optocouplers |

---

## 7. Thyristors: SCR and TRIAC

### 7.1 SCR (Silicon Controlled Rectifier)

**Structure:** PNPN (4-layer device) with three terminals -- **Anode (A), Cathode (K), Gate (G)**.

**How it works:**
1. Normally OFF (blocks current in both directions).
2. When forward biased (A positive, K negative) AND a gate pulse is applied, it turns ON.
3. Once ON, it **stays ON** even if the gate pulse is removed (**latching behavior**).
4. It turns OFF only when the anode current falls below the **holding current (I_H)** -- typically when the AC waveform crosses zero.

**V-I Characteristics Description:**

```
Forward direction:
- Below breakover voltage: Blocks (tiny leakage current)
- Gate pulse triggers: Switches to ON state (low voltage drop ~1V, high current)
- Without gate pulse: Blocks until breakover voltage

Reverse direction:
- Blocks current (like a reverse-biased diode) until reverse breakdown
```

**Key parameters:**

| Parameter | Description |
|-----------|-------------|
| **V_BO** | Forward breakover voltage (without gate trigger) |
| **I_H** | Holding current (minimum current to stay ON) |
| **I_GT** | Gate trigger current (minimum gate current to turn ON) |
| **V_GT** | Gate trigger voltage |

**Applications:** Motor speed control, light dimmers (half-wave), power rectifiers, battery chargers.

### 7.2 TRIAC

**Beginner explanation:** A TRIAC is like **two SCRs connected in anti-parallel** in a single device. It can conduct in **both directions** and is used for **full AC wave control**.

**Terminals:** MT1, MT2 (Main Terminals), Gate (G)

**Key differences from SCR:**

| Feature | SCR | TRIAC |
|---------|-----|-------|
| **Conduction** | One direction only (unidirectional) | **Both directions (bidirectional)** |
| **AC control** | Half-wave only | **Full-wave** |
| **Structure** | PNPN (4 layers) | Equivalent to 2 SCRs anti-parallel |
| **Triggering** | Positive gate pulse | Positive or negative gate pulse |
| **Power handling** | Higher | Lower (compared to equivalent SCR) |
| **Applications** | High power, DC control | Light dimmers, fan speed, heaters |

---

## Checklist -- Practice MCQs

### Basic Level

**Q1.** Silicon has how many valence electrons?

- (a) 2
- (b) 3
- (c) 4
- (d) 5

**Q2.** In an N-type semiconductor, the majority carriers are:

- (a) Holes
- (b) Electrons
- (c) Protons
- (d) Neutrons

**Q3.** The cut-in (knee) voltage of a silicon PN junction diode is approximately:

- (a) 0.3 V
- (b) 0.5 V
- (c) 0.7 V
- (d) 1.1 V

### Intermediate Level

**Q4.** In a BJT operating in the active region, the Base-Emitter junction is:

- (a) Reverse biased
- (b) Forward biased
- (c) Unbiased
- (d) Broken down

**Q5.** An enhancement-mode N-channel MOSFET is normally:

- (a) ON, and turned OFF by applying gate voltage
- (b) OFF, and turned ON when V_GS exceeds threshold voltage V_th
- (c) Always ON regardless of gate voltage
- (d) Conducting in reverse direction

**Q6.** Which device emits light when forward biased?

- (a) Photodiode
- (b) Zener diode
- (c) LED
- (d) Phototransistor

**Q7.** The bandgap energy of Silicon at room temperature is approximately:

- (a) 0.67 eV
- (b) 1.12 eV
- (c) 1.43 eV
- (d) 2.5 eV

### Exam Level

**Q8.** An SCR can be turned OFF by:

- (a) Applying a negative gate pulse
- (b) Increasing the gate current
- (c) Reducing the anode current below the holding current
- (d) Increasing the anode voltage

**Q9.** If beta = 150 and I_B = 10 uA, the collector current I_C is:

- (a) 0.15 mA
- (b) 1.5 mA
- (c) 15 mA
- (d) 150 mA

**Q10.** A TRIAC differs from an SCR primarily because a TRIAC:

- (a) Can handle higher power
- (b) Can conduct current in both directions
- (c) Has four terminals
- (d) Does not require a gate signal

---

### Answer Key

| Question | Answer | Explanation |
|----------|--------|-------------|
| Q1 | **(c) 4** | Silicon is in Group IV of the periodic table, with 4 valence electrons |
| Q2 | **(b) Electrons** | N-type has pentavalent dopant providing extra electrons |
| Q3 | **(c) 0.7 V** | Silicon diode cut-in voltage is ~0.7V; Germanium is ~0.3V |
| Q4 | **(b) Forward biased** | Active region: B-E forward biased, B-C reverse biased |
| Q5 | **(b) OFF, turned ON when V_GS > V_th** | Enhancement mode means no channel exists until gate voltage is applied |
| Q6 | **(c) LED** | LEDs emit photons during electron-hole recombination under forward bias |
| Q7 | **(b) 1.12 eV** | Si = 1.12 eV, Ge = 0.67 eV, GaAs = 1.43 eV |
| Q8 | **(c) Reducing anode current below holding current** | SCR latches ON; gate cannot turn it OFF; anode current must drop below I_H |
| Q9 | **(b) 1.5 mA** | I_C = beta * I_B = 150 * 10 uA = 1500 uA = 1.5 mA |
| Q10 | **(b) Conduct in both directions** | TRIAC is bidirectional; SCR is unidirectional |

---

> **Study Tip:** For the exam, memorize the comparison tables (BJT vs MOSFET, SCR vs TRIAC, Photodiode vs Phototransistor). Also be very comfortable with BJT current relationships (I_E = I_B + I_C, I_C = beta * I_B) and MOSFET operating regions.
