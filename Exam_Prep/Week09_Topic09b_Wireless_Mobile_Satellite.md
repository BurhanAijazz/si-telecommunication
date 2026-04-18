# Subject 9 (Part 2): Wireless, Mobile & Satellite Communication

> **JKSSB Sub-Inspector (Telecommunication) Exam Prep**
> Part of the 20-Marks Communication Systems subject
> Difficulty: Basic --> Intermediate --> Exam-Level

---

## Table of Contents

1. [Antennas](#1-antennas)
2. [Wave Propagation](#2-wave-propagation)
3. [Optical Fibre Communication](#3-optical-fibre-communication)
4. [Satellite Communication](#4-satellite-communication)
5. [Wireless and Mobile Communication](#5-wireless-and-mobile-communication)
6. [Evolution of Mobile Networks](#6-evolution-of-mobile-networks)
7. [Multiple Access Techniques](#7-multiple-access-techniques)
8. [Checklist -- Practice MCQs](#8-checklist----practice-mcqs)

---

## 1. Antennas

### 1.1 What Is an Antenna? (Beginner Explanation)

An antenna is a device that converts electrical signals into electromagnetic (radio) waves for transmission, and vice versa for reception. Think of it as a "bridge" between a wire (guided signal) and free space (unguided signal).

### 1.2 Key Antenna Parameters

| Parameter | Definition | Formula / Unit |
|-----------|-----------|----------------|
| **Gain (G)** | How much an antenna focuses energy in a particular direction compared to an isotropic (ideal omnidirectional) antenna | Measured in **dBi** (relative to isotropic) or **dBd** (relative to dipole); G(dBi) = G(dBd) + 2.15 |
| **Directivity (D)** | Ratio of maximum radiation intensity to the average radiation intensity in all directions | D = 4*pi * U_max / P_total |
| **Bandwidth** | The range of frequencies over which the antenna operates effectively | In Hz or as a percentage of center frequency |
| **Polarization** | The orientation of the electric field of the radiated wave | Linear (horizontal/vertical), Circular (RHCP/LHCP), Elliptical |
| **Radiation pattern** | A graphical plot showing the antenna's radiation strength in different directions | Typically plotted in polar or rectangular form |
| **Beamwidth** | The angular width of the main lobe (usually measured at half-power, i.e., -3 dB points) | In degrees |
| **VSWR** | Voltage Standing Wave Ratio -- measures impedance matching | Ideal VSWR = 1:1 (perfect match) |
| **Input impedance** | The impedance the antenna presents at its terminals | In Ohms (e.g., 50 Ohm, 75 Ohm) |
| **Efficiency** | Ratio of radiated power to input power | eta = P_radiated / P_input |

**Key relationship:**

```
Gain = Directivity x Efficiency
G = D x eta
```

### 1.3 Antenna Types

#### 1.3.1 Dipole Antenna

- **Structure:** Two straight conductors, each about lambda/4 long (total = lambda/2 for a half-wave dipole).
- **Gain:** 2.15 dBi (half-wave dipole)
- **Radiation pattern:** Doughnut-shaped (omnidirectional in one plane)
- **Use:** FM radio, base reference antenna, TV reception

#### 1.3.2 Yagi-Uda Antenna

- **Structure:** One driven element (dipole) + one reflector (behind) + multiple directors (in front)
- **Gain:** 7-15 dBi (depends on number of directors)
- **Radiation pattern:** Highly directional (beam antenna)
- **Use:** TV reception, amateur radio, point-to-point links
- **Key fact:** More directors = higher gain = narrower beamwidth

#### 1.3.3 Parabolic (Dish) Antenna

- **Structure:** A parabolic reflector with a feed antenna at the focal point
- **Gain:** Very high (20-40+ dBi)
- **Radiation pattern:** Extremely narrow beam (pencil beam)
- **Use:** Satellite communication, radar, microwave links

**Gain formula for parabolic antenna:**

```
G = (4 * pi * A * eta) / lambda^2
```

Where A = physical area of the dish, eta = aperture efficiency (typically 0.55-0.7), lambda = wavelength.

**Simplified:**

```
G = eta * (pi * D / lambda)^2
```

Where D = diameter of the dish. **Larger dish = higher gain.**

#### 1.3.4 Horn Antenna

- **Structure:** A waveguide whose open end is flared (widened) into a horn shape
- **Gain:** 10-25 dBi
- **Radiation pattern:** Moderately directional
- **Use:** Microwave links, feed element for parabolic dishes, laboratory measurements

### 1.4 Antenna Comparison Table

| Parameter | Dipole | Yagi-Uda | Parabolic | Horn |
|-----------|--------|----------|-----------|------|
| **Gain** | Low (2.15 dBi) | Medium (7-15 dBi) | **Very High** (20-40 dBi) | Medium-High (10-25 dBi) |
| **Directivity** | Low | Medium-High | **Very High** | Medium |
| **Bandwidth** | Wide | Narrow | Wide | Wide |
| **Size** | Small | Medium | **Large** | Medium |
| **Complexity** | Simple | Moderate | Complex | Simple |
| **Frequency range** | HF-UHF | VHF-UHF | Microwave | Microwave |
| **Main use** | FM radio | TV reception | Satellite | Radar feed |

---

## 2. Wave Propagation

### 2.1 How Do Radio Waves Travel?

Radio waves can travel from transmitter to receiver via three main propagation modes:

### 2.2 Ground Wave Propagation

- **How it works:** The wave follows the curvature of the Earth's surface.
- **Frequency range:** Below 2 MHz (LF and MF bands)
- **Range:** Up to about 1000 km (depends on ground conductivity and frequency)
- **Key property:** Attenuation increases with frequency. Works best at low frequencies.
- **Use:** AM radio broadcasting, maritime communication

### 2.3 Sky Wave Propagation

- **How it works:** The wave travels upward and is **reflected (refracted) by the ionosphere** back to Earth.
- **Frequency range:** 2 MHz to 30 MHz (HF band)
- **Range:** Thousands of kilometers (multiple hops possible)
- **Key concepts:**

| Term | Definition |
|------|-----------|
| **Ionosphere** | Layers of ionized gases (D, E, F1, F2) 60-400 km above Earth |
| **Critical frequency (fc)** | Maximum frequency reflected at vertical incidence: fc = 9 * sqrt(N_max), where N_max = max electron density |
| **Maximum Usable Frequency (MUF)** | Highest frequency that returns to Earth at a given angle: MUF = fc / cos(theta) = fc * sec(theta) |
| **Skip distance** | Minimum distance from the transmitter where the sky wave returns to Earth |
| **Skip zone / Dead zone** | Area between the end of ground wave range and the start of sky wave reception |

- **Use:** Shortwave radio, international broadcasting, amateur radio (HF)

### 2.4 Space Wave (Line-of-Sight) Propagation

- **How it works:** The wave travels in a straight line from transmitter to receiver. Requires clear line of sight.
- **Frequency range:** Above 30 MHz (VHF, UHF, microwave)
- **Range:** Limited by the curvature of the Earth (horizon distance)

**Line-of-sight distance formula:**

```
d = sqrt(2 * R * h)
```

Where R = radius of Earth (approximately 6371 km), h = antenna height.

**For two antennas:**

```
d_total = sqrt(2Rh_t) + sqrt(2Rh_r)
```

Where h_t = transmitter height, h_r = receiver height.

**Simplified (in km, heights in meters):**

```
d(km) = 3.57 * (sqrt(h_t) + sqrt(h_r))
```

**Example:** If transmitter height = 100 m and receiver height = 25 m: d = 3.57 x (10 + 5) = 3.57 x 15 = **53.55 km**.

- **Use:** FM radio, TV broadcasting, mobile phones, satellite communication, radar

### 2.5 Wave Propagation Comparison Table

| Parameter | Ground Wave | Sky Wave | Space Wave (LOS) |
|-----------|-------------|----------|------------------|
| **Frequency** | < 2 MHz | 2-30 MHz | > 30 MHz |
| **Mechanism** | Follows Earth surface | Ionosphere reflection | Line of sight |
| **Range** | Up to 1000 km | Thousands of km | Limited by horizon |
| **Affected by** | Ground conductivity | Ionospheric conditions | Obstacles, rain |
| **Application** | AM radio | Shortwave radio | FM, TV, mobile, satellite |

---

## 3. Optical Fibre Communication

### 3.1 What Is Optical Fibre? (Beginner Explanation)

An optical fibre is a thin, flexible strand of glass or plastic that transmits data as **pulses of light**. It works on the principle of **total internal reflection** -- light bounces along the inside of the fibre core.

### 3.2 Structure of Optical Fibre

```
[ Outer Jacket ] --> [ Cladding (lower refractive index) ] --> [ Core (higher refractive index) ]
```

- **Core:** Central part where light travels. Made of pure glass (silica). Refractive index n1.
- **Cladding:** Surrounds the core. Slightly lower refractive index n2 (n1 > n2). This ensures total internal reflection.
- **Jacket/Buffer:** Protective outer coating.

**Condition for total internal reflection:**

```
n1 > n2  (core refractive index must be greater than cladding)
```

**Numerical Aperture (NA):**

```
NA = sqrt(n1^2 - n2^2)
```

Higher NA means the fibre can accept light from a wider cone of angles.

### 3.3 Types of Optical Fibre

| Parameter | Single-Mode Fibre (SMF) | Multi-Mode Step-Index | Multi-Mode Graded-Index |
|-----------|------------------------|-----------------------|------------------------|
| **Core diameter** | 8-10 micrometers | 50-100 micrometers | 50-62.5 micrometers |
| **Modes of light** | Only 1 mode (ray) | Multiple modes | Multiple modes |
| **Dispersion** | **Very low** | **High** (modal dispersion) | Moderate |
| **Bandwidth** | **Very high** (tens of GHz-km) | Low (tens of MHz-km) | Medium (hundreds of MHz-km) |
| **Distance** | **Long** (up to 100 km+) | Short (< 2 km) | Medium (up to 10 km) |
| **Light source** | Laser | LED | LED or Laser |
| **Cost** | High | Low | Medium |
| **Application** | Telecom backbones, undersea cables | Short LAN links | Campus/building networks |

### 3.4 Advantages of Optical Fibre

| Advantage | Explanation |
|-----------|-------------|
| **Enormous bandwidth** | Can carry terabits per second |
| **Low attenuation** | Signal travels 100+ km without repeaters |
| **No EMI** | Immune to electromagnetic interference |
| **Security** | Very difficult to tap (no electromagnetic leakage) |
| **Small and light** | Much smaller and lighter than copper cables |
| **No crosstalk** | Light signals in adjacent fibres do not interfere |

### 3.5 Losses in Optical Fibre

| Loss Type | Cause |
|-----------|-------|
| Absorption loss | Impurities in glass absorb light |
| Scattering loss (Rayleigh) | Microscopic irregularities scatter light |
| Bending loss | Sharp bends cause light to leak out |
| Dispersion | Different modes/wavelengths arrive at different times, causing pulse spreading |

**Operating windows (low-loss wavelengths):** 850 nm, 1310 nm, **1550 nm** (lowest loss, most commonly used for long-haul).

---

## 4. Satellite Communication

### 4.1 Basic Concept (Beginner Explanation)

A communication satellite is essentially a **relay station in space**. It receives signals from an Earth station (uplink), amplifies them, changes the frequency, and retransmits them back to Earth (downlink).

### 4.2 Satellite Orbits

| Orbit | Altitude | Period | Satellites Needed for Global Coverage | Latency |
|-------|----------|--------|--------------------------------------|---------|
| **LEO** (Low Earth Orbit) | 500-2000 km | ~90 minutes | 40-80+ | **Low** (5-10 ms) |
| **MEO** (Medium Earth Orbit) | 5000-20000 km | 2-12 hours | 10-20 | Medium (50-100 ms) |
| **GEO** (Geostationary Orbit) | **35,786 km** | **24 hours** (stationary over one point) | **3** | **High** (~250 ms round trip) |

**GEO Key Facts (most tested):**
- Satellite appears stationary from Earth (same angular velocity as Earth rotation)
- Altitude: 35,786 km above the equator
- Only possible above the equator
- 3 GEO satellites can cover almost the entire Earth (except poles)
- High latency makes it unsuitable for real-time voice/gaming

### 4.3 Frequency Bands

| Band | Uplink Frequency | Downlink Frequency | Application |
|------|-----------------|-------------------|-------------|
| **L-band** | 1.6 GHz | 1.5 GHz | Mobile satellite, GPS |
| **S-band** | 2.6 GHz | 2.5 GHz | Weather, some mobile |
| **C-band** | 6 GHz | 4 GHz | Traditional VSAT, TV distribution |
| **Ku-band** | 14 GHz | 12 GHz | DTH (Direct-to-Home) TV, VSAT |
| **Ka-band** | 30 GHz | 20 GHz | High-throughput broadband satellites |

**Key exam point:** Uplink frequency is **always higher** than downlink frequency to ensure better power efficiency at the satellite.

### 4.4 Transponder

A **transponder** on a satellite performs three functions:

1. **Receives** the uplink signal
2. **Amplifies** and **frequency-converts** it (shifts from uplink to downlink frequency)
3. **Retransmits** the downlink signal

Typical transponder bandwidth: **36 MHz** (C-band) or **54 MHz** (Ku-band).

A single satellite may carry **12-50+ transponders**.

---

## 5. Wireless and Mobile Communication

### 5.1 Cellular Concept (Beginner Explanation)

Imagine dividing a city into small areas called **cells**, each served by a base station (tower). This is the **cellular concept**. It allows:

- **Frequency reuse:** The same set of frequencies can be used in non-adjacent cells.
- **Large capacity:** Many users can be served simultaneously.
- **Lower power:** Both phone and tower transmit at low power (small cell = short distance).

### 5.2 Frequency Reuse

**Frequency reuse factor (N):** The number of cells in a cluster before frequencies repeat.

```
N = i^2 + i*j + j^2
```

Where i and j are non-negative integers (shift parameters).

**Common cluster sizes:** N = 3, 4, 7, 12

**Example:** If N = 7 and total available channels = 350, then each cell gets 350/7 = **50 channels**.

**Key principle:** Smaller N = more frequency reuse = higher capacity, but also more **co-channel interference**.

### 5.3 Handoff (Handover)

**Beginner idea:** When you are talking on your mobile phone and move from one cell to another, the call must be transferred from the old base station to the new one without dropping. This is called **handoff** (or **handover**).

| Handoff Type | Description |
|-------------|-------------|
| **Hard handoff** | Break-before-make; the old connection is dropped before the new one is established. Used in FDMA/TDMA (GSM). Brief interruption. |
| **Soft handoff** | Make-before-break; the phone communicates with both base stations simultaneously during transition. Used in CDMA. Smoother. |

---

## 6. Evolution of Mobile Networks

### 6.1 Generation Comparison Table

| Feature | **2G (GSM)** | **3G (UMTS/WCDMA)** | **4G (LTE)** | **5G (NR)** |
|---------|------------|-------------------|--------------|-----------| 
| **Year** | ~1991 | ~2001 | ~2009 | ~2019 |
| **Technology** | Digital (TDMA/FDMA) | CDMA (WCDMA) | OFDMA (downlink), SC-FDMA (uplink) | OFDMA, mMIMO, beamforming |
| **Data rate** | Up to 64 kbps (GPRS: 114 kbps, EDGE: 384 kbps) | Up to 2 Mbps (HSPA+: 42 Mbps) | Up to 100 Mbps (peak: 1 Gbps) | Up to **10-20 Gbps** |
| **Switching** | Circuit-switched (voice), Packet-switched (GPRS data) | Circuit + Packet switched | **All packet-switched (all-IP)** | All packet-switched |
| **Key service** | Voice + SMS | Voice + Mobile internet | Mobile broadband, VoLTE | IoT, ultra-low latency, massive connectivity |
| **Latency** | ~300 ms | ~100 ms | ~10 ms | **< 1 ms** |
| **Multiple access** | TDMA + FDMA | WCDMA | OFDMA | OFDMA |
| **Frequency** | 900/1800 MHz | 2100 MHz | 700-2600 MHz | Sub-6 GHz + **mmWave (24-100 GHz)** |
| **Spectrum efficiency** | Low | Medium | High | **Very High** |

### 6.2 Key Technologies in Each Generation

**2G (GSM):**
- First fully digital system
- Introduced SMS (Short Message Service)
- GPRS (2.5G) added packet-switched data
- EDGE (2.75G) improved data rates

**3G (UMTS):**
- Wideband CDMA (WCDMA) with 5 MHz channels
- Video calling, mobile internet browsing
- HSPA/HSPA+ upgrades greatly improved speeds

**4G (LTE):**
- All-IP architecture (no circuit switching)
- OFDMA for efficient spectrum use
- MIMO (Multiple Input Multiple Output) antennas
- VoLTE for HD voice over data network

**5G (NR -- New Radio):**
- Three key use cases:
  - **eMBB** (enhanced Mobile Broadband): Ultra-fast data
  - **URLLC** (Ultra-Reliable Low-Latency Communication): Autonomous vehicles, remote surgery
  - **mMTC** (massive Machine-Type Communication): IoT with billions of devices
- Massive MIMO (hundreds of antenna elements)
- Beamforming (directing signal to specific users)
- Network slicing (virtual networks for different use cases)
- Millimeter wave (mmWave) frequencies for extreme bandwidth

---

## 7. Multiple Access Techniques

### 7.1 What Is Multiple Access?

Multiple access allows **many users to share the same communication channel** simultaneously. It is the backbone of all wireless/mobile systems.

### 7.2 FDMA (Frequency Division Multiple Access)

**Simple idea:** Divide the total bandwidth into **separate frequency channels**, one per user.

```
|  User 1  |  User 2  |  User 3  |  User 4  |
|  f1      |  f2      |  f3      |  f4      |
<-------------- Total Bandwidth -------------->
```

- Each user gets a **dedicated frequency band** for the entire call duration.
- Guard bands needed between channels to prevent interference.
- Used in: **1G (AMPS), analog systems**

### 7.3 TDMA (Time Division Multiple Access)

**Simple idea:** All users share the **same frequency** but take turns transmitting in different **time slots**.

```
| User 1 | User 2 | User 3 | User 1 | User 2 | User 3 |
<-- Slot1--> <-Slot2-> <-Slot3-> <-Slot1-> <-Slot2-> <-Slot3->
Time ----->
```

- Each user gets a **time slot** in a repeating frame.
- Guard time needed between slots for synchronization.
- Used in: **2G GSM, IS-136**

### 7.4 CDMA (Code Division Multiple Access)

**Simple idea:** All users transmit on the **same frequency at the same time**, but each user is assigned a **unique code** (spreading code) that allows their signal to be separated from others.

```
All users transmit simultaneously on the same frequency:
User 1 --> Code 1 (e.g., +1 -1 +1 -1)
User 2 --> Code 2 (e.g., +1 +1 -1 -1)
User 3 --> Code 3 (e.g., +1 -1 -1 +1)
Receiver uses the specific code to extract the desired user's signal.
```

- Uses **spread spectrum** technology.
- No guard bands or guard times needed.
- **Soft capacity** -- system degrades gracefully as users are added.
- Used in: **3G (WCDMA, CDMA2000), IS-95**

### 7.5 OFDMA (Orthogonal Frequency Division Multiple Access)

**Simple idea:** The available bandwidth is divided into many **narrow orthogonal subcarriers**. Different subsets of subcarriers are assigned to different users.

```
Frequency -->
| U1 | U2 | U1 | U3 | U2 | U3 | U1 | U2 | U3 | ...
Each small block is a subcarrier assigned to a user.
```

- Based on **OFDM** (Orthogonal Frequency Division Multiplexing).
- Subcarriers are orthogonal, so no guard bands needed between them.
- Very efficient use of spectrum.
- Resistant to multipath fading (each narrow subcarrier sees flat fading).
- Used in: **4G LTE (downlink), 5G NR, WiMAX**

### 7.6 Multiple Access Comparison Table

| Parameter | FDMA | TDMA | CDMA | OFDMA |
|-----------|------|------|------|-------|
| **Sharing method** | Frequency | Time | Code | Frequency (subcarriers) |
| **Guard requirement** | Guard bands | Guard time | None | None (orthogonal) |
| **Capacity** | Low | Medium | High (soft limit) | **Very High** |
| **Interference** | Crosstalk | Co-channel | Near-far problem | Low |
| **Complexity** | Low | Medium | High | High |
| **Flexibility** | Low | Medium | High | **Very High** |
| **Spectrum efficiency** | Low | Medium | High | **Very High** |
| **Generation** | 1G | 2G | 3G | **4G / 5G** |
| **Example system** | AMPS | GSM | IS-95, WCDMA | LTE, WiMAX, 5G NR |

---

## 8. Checklist -- Practice MCQs

**Difficulty: Basic to Exam-Level**

---

**Q1. (Basic)** The gain of a half-wave dipole antenna is approximately:

- (A) 0 dBi
- (B) 2.15 dBi
- (C) 10 dBi
- (D) 20 dBi

---

**Q2. (Basic)** Sky wave propagation uses reflection from:

- (A) Troposphere
- (B) Stratosphere
- (C) Ionosphere
- (D) Exosphere

---

**Q3. (Intermediate)** The altitude of a geostationary satellite is approximately:

- (A) 2,000 km
- (B) 20,200 km
- (C) 35,786 km
- (D) 100,000 km

---

**Q4. (Intermediate)** Which type of optical fibre has the highest bandwidth and is used for long-haul communication?

- (A) Multi-mode step-index
- (B) Multi-mode graded-index
- (C) Single-mode fibre
- (D) Plastic optical fibre

---

**Q5. (Intermediate)** In cellular communication, frequency reuse allows:

- (A) Using the same frequencies only once in the entire network
- (B) Reusing the same frequencies in non-adjacent cells
- (C) Eliminating the need for base stations
- (D) Using only one frequency for all users

---

**Q6. (Exam-Level)** The line-of-sight distance for a transmitter antenna at height 64 m and receiver at height 16 m is approximately (using d = 3.57 * (sqrt(ht) + sqrt(hr))):

- (A) 28.56 km
- (B) 42.84 km
- (C) 53.55 km
- (D) 14.28 km

---

**Q7. (Exam-Level)** Which multiple access technique is used in the downlink of 4G LTE?

- (A) FDMA
- (B) TDMA
- (C) CDMA
- (D) OFDMA

---

**Q8. (Exam-Level)** In satellite communication, the uplink frequency is ______ the downlink frequency.

- (A) Lower than
- (B) Equal to
- (C) Higher than
- (D) Unrelated to

---

**Q9. (Exam-Level)** The "near-far problem" is a challenge associated with which multiple access technique?

- (A) FDMA
- (B) TDMA
- (C) CDMA
- (D) OFDMA

---

**Q10. (Exam-Level)** 5G NR introduces millimeter wave (mmWave) frequencies primarily to achieve:

- (A) Lower power consumption
- (B) Longer range
- (C) Extremely high bandwidth and data rates
- (D) Better building penetration

---

### Answer Key

| Q# | Answer | Explanation |
|----|--------|-------------|
| Q1 | **(B) 2.15 dBi** | This is the standard gain of a half-wave dipole antenna |
| Q2 | **(C) Ionosphere** | Sky waves are refracted by the ionized layers (D, E, F) of the ionosphere |
| Q3 | **(C) 35,786 km** | This is the GEO altitude where orbital period = 24 hours |
| Q4 | **(C) Single-mode fibre** | SMF has the least dispersion and highest bandwidth; used for telecom backbone |
| Q5 | **(B) Reusing frequencies in non-adjacent cells** | This is the core cellular concept; same frequencies repeat with sufficient separation |
| Q6 | **(B) 42.84 km** | d = 3.57 x (sqrt(64) + sqrt(16)) = 3.57 x (8 + 4) = 3.57 x 12 = 42.84 km |
| Q7 | **(D) OFDMA** | LTE uses OFDMA for downlink and SC-FDMA for uplink |
| Q8 | **(C) Higher than** | Uplink is higher to compensate for lower transmit power of Earth stations |
| Q9 | **(C) CDMA** | In CDMA, a closer user can overpower a farther user since they share the same frequency and time; solved by power control |
| Q10 | **(C) Extremely high bandwidth and data rates** | mmWave (24-100 GHz) offers massive bandwidth; trade-off is shorter range and poor penetration |

---

> **Study Tip:** For satellite questions, remember the GEO altitude (35,786 km) and the rule that 3 GEO satellites cover the globe. For mobile generations, focus on the access technique used in each generation (1G=FDMA, 2G=TDMA, 3G=CDMA, 4G=OFDMA).
