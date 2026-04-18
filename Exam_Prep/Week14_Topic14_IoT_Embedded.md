# Subject 14: IoT, Embedded Systems & Mechatronics (10 Marks)

> **Week 14 | JKSSB Sub-Inspector (Telecommunication) Exam Prep**
> Difficulty: Basic --> Intermediate --> Exam-Level

---

## Table of Contents

1. [IoT Architecture & M2M Communication](#1-iot-architecture--m2m-communication)
2. [Embedded & Real-Time Systems](#2-embedded--real-time-systems)
3. [Surveillance & Access Control Systems](#3-surveillance--access-control-systems)
4. [Drone Technology](#4-drone-technology)
5. [Robotics Fundamentals](#5-robotics-fundamentals)
6. [Sensors & Actuators](#6-sensors--actuators)
7. [Basics of Hydraulics & Pneumatics](#7-basics-of-hydraulics--pneumatics)
8. [Checklist -- Practice MCQs](#checklist----practice-mcqs)

---

## 1. IoT Architecture & M2M Communication

### 1.1 What Is IoT? (Basic)

The **Internet of Things (IoT)** refers to a network of physical objects ("things") embedded with sensors, software, and connectivity that enables them to collect and exchange data over the internet.

**Simple Examples:**
- Smart traffic lights that adjust timing based on traffic flow.
- Wearable health monitors that send data to a doctor.
- Smart electricity meters that report usage in real time.

### 1.2 IoT Architecture -- Three-Layer Model

| Layer | Function | Components | Example |
|---|---|---|---|
| **Perception Layer** (Sensing Layer) | Collects data from the physical world | Sensors, actuators, RFID tags, GPS, cameras | Temperature sensor measuring weather, CCTV camera capturing footage |
| **Network Layer** (Transport Layer) | Transmits data from perception layer to processing systems | Wi-Fi, Bluetooth, ZigBee, LoRa, 4G/5G, NB-IoT | Sensor data sent via Wi-Fi to a cloud server |
| **Application Layer** | Processes data and delivers services to users | Cloud platforms, dashboards, mobile apps, AI/ML analytics | Smart city dashboard showing real-time traffic, air quality |

**Extended 5-Layer Model** (for deeper understanding):

| Layer | Function |
|---|---|
| **Perception** | Sensing and data collection |
| **Transport** | Data transmission |
| **Processing (Middleware)** | Data storage, computation, decision-making |
| **Application** | User-facing services |
| **Business** | Business models, system management, privacy policies |

### 1.3 M2M (Machine-to-Machine) Communication

**M2M** is direct communication between devices without human intervention.

| Feature | M2M | IoT |
|---|---|---|
| **Communication** | Device to device (point-to-point) | Device to cloud to device (via internet) |
| **Scope** | Limited, specific use case | Broad, interconnected ecosystem |
| **Protocol** | Often proprietary | Open standards (MQTT, CoAP, HTTP) |
| **Intelligence** | Basic automation | Analytics, AI, big data processing |
| **Example** | ATM communicating with bank server | Smart home with interconnected devices managed via app |

**Law Enforcement Relevance:** IoT devices generate evidence trails -- smart locks, connected cameras, vehicle telematics, and mobile devices all create forensic data useful in investigations.

### 1.4 IoT Communication Protocols

| Protocol | Full Form | Use Case | Range |
|---|---|---|---|
| **MQTT** | Message Queuing Telemetry Transport | Lightweight messaging for constrained devices | Long range (internet-based) |
| **CoAP** | Constrained Application Protocol | RESTful protocol for simple devices | Long range (internet-based) |
| **Bluetooth/BLE** | Bluetooth Low Energy | Wearables, short-range data | ~10-100 metres |
| **ZigBee** | -- | Home automation, sensor networks | ~10-100 metres |
| **LoRa/LoRaWAN** | Long Range Wide Area Network | Smart city sensors, agriculture | Up to 15 km |
| **NB-IoT** | Narrowband IoT | Smart metering, asset tracking | Cellular range |

---

## 2. Embedded & Real-Time Systems

### 2.1 What Is an Embedded System? (Basic)

An **embedded system** is a specialised computer system designed to perform a **specific, dedicated function** within a larger system. Unlike a general-purpose computer (laptop, desktop), an embedded system does one job and does it well.

**Examples:**
- Microcontroller in a washing machine.
- Engine Control Unit (ECU) in a car.
- Firmware in a router or CCTV camera.
- Pacemaker in a patient's heart.

### 2.2 Characteristics of Embedded Systems

| Characteristic | Description |
|---|---|
| **Task-specific** | Designed for a particular function |
| **Real-time constraints** | Many require timely response |
| **Resource-constrained** | Limited memory, processing power, energy |
| **Reliable** | Must work continuously without failure (especially safety-critical) |
| **Minimal user interface** | May have no display; sometimes just LEDs or buttons |
| **Firmware-based** | Software stored in ROM/Flash; not easily updated by end-user |

### 2.3 Real-Time Operating Systems (RTOS)

A **Real-Time Operating System (RTOS)** is an OS designed to process data and respond within a **guaranteed time frame** (deadline).

#### Types of Real-Time Systems

| Type | Deadline Requirement | Consequence of Missing Deadline | Example |
|---|---|---|---|
| **Hard Real-Time** | Deadline MUST be met | Catastrophic failure | Aircraft flight control, pacemaker, anti-lock braking |
| **Soft Real-Time** | Deadline SHOULD be met | Degraded performance (not catastrophic) | Video streaming, online gaming, VoIP calls |
| **Firm Real-Time** | Deadline should be met; late result is useless but not catastrophic | Result is discarded if late | Sensor data in weather monitoring |

#### Key RTOS Concepts

| Concept | Description |
|---|---|
| **Deterministic** | Response time is predictable and bounded |
| **Preemptive scheduling** | Higher-priority tasks can interrupt lower-priority ones |
| **Priority inversion** | Low-priority task holds a resource needed by a high-priority task |
| **Interrupt latency** | Time between interrupt signal and start of ISR (Interrupt Service Routine) |

**Common RTOS Examples:** FreeRTOS, VxWorks, QNX, RTLinux, Zephyr.

---

## 3. Surveillance & Access Control Systems

> **This section is highly relevant for law enforcement.**

### 3.1 CCTV Systems

#### Types of CCTV Cameras

| Type | Description | Use Case |
|---|---|---|
| **Dome Camera** | Dome-shaped; direction of lens is not obvious | Indoor surveillance, retail stores, offices |
| **Bullet Camera** | Cylindrical; visible deterrent; long-range | Outdoor surveillance, parking lots, highways |
| **PTZ Camera** (Pan-Tilt-Zoom) | Can rotate horizontally (pan), vertically (tilt), and zoom in | Large areas, border surveillance, event monitoring |
| **C-Mount Camera** | Detachable lenses for different distances | Specialised surveillance |
| **Day/Night Camera** | Functions in both bright and dark conditions | 24/7 outdoor surveillance |
| **Infrared/Night Vision** | Uses IR LEDs to see in complete darkness | Night-time surveillance, restricted areas |
| **Thermal Camera** | Detects heat signatures, not visible light | Perimeter security, detecting intruders in darkness/fog |

#### Analog vs IP Cameras

| Feature | **Analog CCTV** | **IP Camera** |
|---|---|---|
| **Signal** | Analog (via coaxial cable) | Digital (via Ethernet/Wi-Fi) |
| **Resolution** | Lower (720 TVL typical) | Higher (1080p, 4K, 8MP+) |
| **Storage** | DVR (Digital Video Recorder) | NVR (Network Video Recorder) or cloud |
| **Cabling** | Coaxial cable (BNC connectors) | Ethernet (RJ45) or wireless |
| **Remote Access** | Limited | Full remote access via internet |
| **Power** | Separate power supply | PoE (Power over Ethernet) possible |
| **Analytics** | Basic motion detection | Advanced AI analytics (face recognition, object detection) |
| **Scalability** | Limited | Highly scalable |

**Law Enforcement Use:** Modern police surveillance systems predominantly use **IP cameras** with NVR storage, AI-based video analytics (facial recognition, ANPR), and cloud backup. The **Safe City Project** in Indian cities deploys thousands of IP cameras integrated with a command and control centre.

### 3.2 ANPR (Automatic Number Plate Recognition)

**ANPR** (also called ALPR -- Automatic License Plate Recognition) is a technology that uses cameras and image processing to automatically read vehicle registration plates.

**How ANPR Works:**

1. **Image Capture:** High-speed camera captures vehicle image (including at night using IR illumination).
2. **Pre-processing:** Image is enhanced (contrast, brightness, noise reduction).
3. **Plate Detection:** Locates the number plate region in the image.
4. **Character Segmentation:** Isolates individual characters on the plate.
5. **Optical Character Recognition (OCR):** Converts the image of characters into machine-readable text.
6. **Database Matching:** Plate number is compared against databases (stolen vehicles, wanted persons, traffic violators).
7. **Alert:** If a match is found, an alert is generated for police action.

**Police Applications:**
- Detecting stolen vehicles in real time.
- Tracking vehicles involved in crimes.
- Automated toll collection (FASTag).
- Traffic violation enforcement (e.g., wrong-way driving).
- Border/checkpoint vehicle monitoring.

### 3.3 RFID (Radio-Frequency Identification)

**RFID** uses electromagnetic fields to automatically identify and track tags attached to objects.

**Components:**
- **Tag (Transponder):** Attached to the object; contains a chip and antenna.
- **Reader (Interrogator):** Emits radio waves and reads the tag's response.
- **Backend System:** Processes and stores data from the reader.

#### Types of RFID Tags

| Type | Power Source | Range | Cost | Example Use |
|---|---|---|---|---|
| **Passive** | Powered by reader's radio waves (no battery) | Up to 10 metres | Low (Rs. 5-50) | Access cards, library books, inventory |
| **Active** | Has its own battery; continuously transmits | Up to 100+ metres | High (Rs. 500+) | Vehicle tracking, container tracking, toll collection |
| **Semi-Passive (BAP)** | Battery powers chip; uses reader's signal to communicate | Up to 30 metres | Medium | Temperature-sensitive shipments, cold chain monitoring |

#### RFID Frequency Bands

| Frequency Band | Range | Read Range | Application |
|---|---|---|---|
| **Low Frequency (LF):** 125-134 kHz | Short | Up to 10 cm | Animal tracking, access control cards |
| **High Frequency (HF):** 13.56 MHz | Short-Medium | Up to 1 metre | NFC payments, smart cards, library systems |
| **Ultra-High Frequency (UHF):** 860-960 MHz | Medium-Long | Up to 12 metres | Supply chain, inventory, toll booths |
| **Microwave:** 2.45 GHz+ | Long | Up to 200 metres | Vehicle identification, railway tracking |

**Law Enforcement Applications:**
- **Access control** in police stations and secure facilities (RFID cards).
- **Evidence tracking** (RFID-tagged evidence bags).
- **Vehicle tracking** for fleet management of police vehicles.
- **FASTag** on Indian highways uses UHF RFID.

---

## 4. Drone Technology

### 4.1 What Is a Drone? (Basic)

A **drone** (also called **UAV -- Unmanned Aerial Vehicle**) is an aircraft without a human pilot on board, controlled remotely or autonomously via software.

### 4.2 Types of Drones

| Type | Description | Advantages | Limitations |
|---|---|---|---|
| **Multi-Rotor** (Quadcopter, Hexacopter, Octocopter) | Multiple horizontal rotors for vertical takeoff and landing (VTOL) | Stable hover, easy to control, VTOL capability | Short flight time (20-40 min), limited range |
| **Fixed-Wing** | Resembles a traditional airplane; wings generate lift | Long flight time (hours), large coverage area | Cannot hover, needs runway/launcher |
| **VTOL Hybrid** | Combines multi-rotor and fixed-wing | VTOL + long endurance | Complex, expensive |
| **Single-Rotor (Helicopter)** | One main rotor + tail rotor | Can carry heavier payloads, longer flight time than multi-rotor | Complex mechanics, safety risk |

### 4.3 Drone Applications in Law Enforcement

| Application | Description |
|---|---|
| **Aerial Surveillance** | Monitoring protests, large gatherings, border areas |
| **Crime Scene Investigation** | Aerial photography and 3D mapping of crime scenes |
| **Crowd Management** | Real-time aerial view during events, festivals, elections |
| **Search and Rescue** | Locating missing persons in forests, mountains, flood areas |
| **Traffic Management** | Monitoring traffic flow, accident documentation |
| **Disaster Response** | Assessing flood/earthquake damage, delivering supplies |
| **Anti-Naxal Operations** | Surveillance in dense forests |
| **Counter-Drone Operations** | Detecting and neutralising rogue drones |

### 4.4 Drone Regulations in India (DGCA)

The **Directorate General of Civil Aviation (DGCA)** regulates drone operations in India under the **Drone Rules, 2021**.

| Category | Weight | Registration | Requirements |
|---|---|---|---|
| **Nano** | Up to 250 g | No registration needed | No pilot licence needed |
| **Micro** | 250 g - 2 kg | Registration required | Remote pilot licence |
| **Small** | 2 - 25 kg | Registration required | Remote pilot licence |
| **Medium** | 25 - 150 kg | Registration required | Remote pilot licence |
| **Large** | Above 150 kg | Registration required | Remote pilot licence |

**Key Regulatory Points:**
- **Digital Sky Platform:** Online platform for drone registration, flight permissions.
- **No Drone Zones:** Within 5 km of airports, near military installations, international borders, government buildings (Rashtrapati Bhavan, Parliament, etc.).
- **Maximum Altitude:** 400 feet AGL (Above Ground Level) for most categories.
- **NPNT:** No Permission No Takeoff -- hardware-level restriction that prevents drones from flying without digital permission.

---

## 5. Robotics Fundamentals

### 5.1 What Is a Robot? (Basic)

A **robot** is a programmable machine capable of carrying out actions automatically, often capable of sensing its environment and making decisions.

### 5.2 Types of Robots

| Type | Description | Example |
|---|---|---|
| **Industrial Robots** | Fixed robots for manufacturing tasks | Welding robots in car factories |
| **Mobile Robots** | Can move through the environment | Warehouse robots, Mars rovers |
| **Humanoid Robots** | Resemble human form | Sophia, ASIMO |
| **Medical/Surgical Robots** | Assist in medical procedures | Da Vinci surgical system |
| **Military/Defence Robots** | Used in warfare, bomb disposal | DRDO Daksh (bomb disposal robot used by Indian police/military) |
| **Autonomous Vehicles** | Self-driving cars, drones | Tesla Autopilot, Waymo |
| **Collaborative Robots (Cobots)** | Work alongside humans safely | Assembly line assistants |

### 5.3 Key Components of a Robot

| Component | Function | Example |
|---|---|---|
| **Sensors** | Perceive the environment | Camera, LIDAR, ultrasonic, IR sensor |
| **Actuators** | Create physical movement | Motors (servo, stepper, DC), hydraulic/pneumatic cylinders |
| **Controller** | "Brain" that processes sensor data and sends commands to actuators | Microcontroller (Arduino, Raspberry Pi), PLC |
| **End Effector** | Tool at the end of a robotic arm | Gripper, welding torch, suction cup, drill |
| **Power Supply** | Provides energy | Battery, electrical mains, hydraulic power unit |
| **Communication** | Connects robot to other systems | Wi-Fi, Bluetooth, CAN bus, Ethernet |

### 5.4 Degrees of Freedom (DOF)

**Degrees of Freedom** refers to the number of independent movements (axes) a robot can make.

| DOF | Movement Type | Example |
|---|---|---|
| **1 DOF** | One axis (e.g., up-down only) | Simple linear actuator |
| **3 DOF** | Three axes (X, Y, Z translation) | Cartesian robot |
| **6 DOF** | Three translations + three rotations | Industrial robotic arm (most common) |
| **7+ DOF** | Redundant -- more flexibility than needed | Advanced humanoid arms |

**Key Point:** The human arm has approximately **7 DOF** (shoulder: 3, elbow: 1, wrist: 3). A standard industrial robot has **6 DOF**.

---

## 6. Sensors & Actuators

### 6.1 Sensors

A **sensor** is a device that detects changes in the physical environment and converts them into electrical signals.

| Sensor Type | Measures | Application |
|---|---|---|
| **Temperature Sensor** (Thermocouple, RTD, Thermistor) | Temperature | HVAC, industrial processes, weather stations |
| **Proximity Sensor** (IR, ultrasonic, capacitive, inductive) | Presence/distance of an object without contact | Automatic doors, parking sensors, assembly lines |
| **Pressure Sensor** | Force per unit area | Tyre pressure, blood pressure monitors, altitude |
| **Accelerometer** | Acceleration/vibration | Smartphones (screen rotation), vehicle crash detection, earthquake monitoring |
| **Gyroscope** | Angular velocity/orientation | Drone stabilisation, navigation, gaming controllers |
| **LIDAR** (Light Detection and Ranging) | Distance using laser pulses | Autonomous vehicles, 3D mapping, surveying |
| **PIR** (Passive Infrared) | Motion via infrared radiation from warm bodies | Security alarms, automatic lights |
| **Photoelectric Sensor** | Light intensity/presence | Barcode readers, smoke detectors |
| **Gas Sensor** | Presence of specific gases | CO detectors, air quality monitoring, mine safety |
| **Strain Gauge** | Deformation/strain in a material | Bridge load monitoring, weighing scales |

### 6.2 Actuators

An **actuator** is a device that converts energy into physical motion or action.

| Actuator Type | Energy Source | Motion Type | Example Application |
|---|---|---|---|
| **DC Motor** | Electrical (DC) | Rotary | Fans, wheels, conveyor belts |
| **Servo Motor** | Electrical | Precise rotary (angle control) | Robotic arms, camera gimbals |
| **Stepper Motor** | Electrical | Discrete step rotary | 3D printers, CNC machines |
| **Solenoid** | Electrical (electromagnetic) | Linear (push/pull) | Door locks, valves, relay switches |
| **Hydraulic Cylinder** | Hydraulic fluid pressure | Linear | Excavators, hydraulic presses |
| **Pneumatic Cylinder** | Compressed air pressure | Linear | Factory assembly lines, braking systems |
| **Piezoelectric Actuator** | Electrical (piezo effect) | Very fine linear | Precision optics, inkjet printers |

---

## 7. Basics of Hydraulics & Pneumatics

### 7.1 Pascal's Law (Foundation Principle)

**Pascal's Law** states: "Pressure applied to a confined fluid is transmitted equally in all directions throughout the fluid."

**Formula:** P = F / A (Pressure = Force / Area)

**Practical Implication:** A small force applied on a small piston can generate a large force on a large piston. This is the principle behind hydraulic jacks, brakes, and presses.

**Example:** If a force of 10 N is applied on a piston of area 1 cm^2, the pressure (10 N/cm^2) is transmitted throughout. A second piston of area 10 cm^2 in the same system will experience a force of 100 N. This gives a **mechanical advantage of 10x**.

### 7.2 Hydraulic Systems

**Hydraulics** use **incompressible fluid** (usually oil) to transmit force.

**Key Components:**

| Component | Function |
|---|---|
| **Hydraulic Pump** | Converts mechanical energy into hydraulic energy (pushes fluid) |
| **Hydraulic Cylinder** | Converts hydraulic energy back into mechanical motion (linear) |
| **Hydraulic Motor** | Converts hydraulic energy into rotary motion |
| **Reservoir** | Stores hydraulic fluid |
| **Control Valves** | Direct fluid flow and control pressure/flow rate |
| **Filters** | Remove contaminants from hydraulic fluid |
| **Accumulators** | Store pressurised fluid for emergency use or to absorb shocks |

**Applications:** Excavators, cranes, hydraulic brakes in vehicles, hydraulic lifts, industrial presses.

### 7.3 Pneumatic Systems

**Pneumatics** use **compressed air** (or gas) to transmit force.

**Key Components:**

| Component | Function |
|---|---|
| **Air Compressor** | Compresses atmospheric air |
| **Air Receiver (Tank)** | Stores compressed air |
| **Pneumatic Cylinder** | Converts air pressure into linear motion |
| **Control Valves** | Direct airflow |
| **FRL Unit** (Filter, Regulator, Lubricator) | Cleans, regulates pressure, and lubricates the air |

**Applications:** Pneumatic tools (drills, grinders), automatic doors, dental equipment, braking systems in trains and heavy vehicles.

### 7.4 Hydraulics vs Pneumatics -- Comparison

| Feature | **Hydraulics** | **Pneumatics** |
|---|---|---|
| **Working Fluid** | Oil (incompressible) | Air (compressible) |
| **Force Capability** | Very high (can move tonnes) | Moderate (lower force) |
| **Speed** | Slower but controllable | Faster |
| **Precision** | High (incompressible fluid) | Lower (air is compressible) |
| **Cost** | Higher (pumps, fluid, filtration) | Lower (air is free) |
| **Leakage Concern** | Oil leaks are messy and hazardous | Air leaks are non-hazardous |
| **Operating Pressure** | 100-300 bar (high) | 6-10 bar (low) |
| **Temperature Sensitivity** | Fluid viscosity changes with temperature | Less affected |
| **Cleanliness** | Oil can contaminate; needs maintenance | Clean; suitable for food/pharma |
| **Applications** | Heavy machinery, construction, presses | Assembly lines, packaging, tools |

**Exam Tip:** Hydraulics = HIGH force, oil, incompressible. Pneumatics = MODERATE force, air, compressible.

---

## Checklist -- Practice MCQs

**Difficulty scale: [B] = Basic, [I] = Intermediate, [E] = Exam-Level**

---

**Q1. [B] In IoT architecture, which layer is responsible for collecting data from the physical environment using sensors?**

(A) Network Layer
(B) Application Layer
(C) Perception Layer
(D) Business Layer

---

**Q2. [B] What type of RFID tag does NOT have its own battery and is powered by the reader's radio waves?**

(A) Active
(B) Passive
(C) Semi-passive
(D) Micro

---

**Q3. [I] A Hard Real-Time System is one where:**

(A) The system is physically rugged and hard to damage
(B) Missing a deadline causes degraded performance but no failure
(C) Missing a deadline can cause catastrophic failure
(D) The system operates only during business hours

---

**Q4. [I] ANPR technology works by using which core technique to read number plates?**

(A) RFID scanning
(B) Bluetooth Low Energy detection
(C) Optical Character Recognition (OCR)
(D) GPS triangulation

---

**Q5. [I] Pascal's Law is the fundamental principle behind:**

(A) Pneumatic systems only
(B) Hydraulic systems
(C) Electrical motors
(D) Robotic sensors

---

**Q6. [E] In India, drone registration is NOT required for which category?**

(A) Micro (250g - 2kg)
(B) Small (2 - 25kg)
(C) Nano (up to 250g)
(D) Medium (25 - 150kg)

---

**Q7. [I] How many Degrees of Freedom (DOF) does a standard industrial robotic arm typically have?**

(A) 2
(B) 4
(C) 6
(D) 10

---

**Q8. [E] Which type of CCTV camera can rotate horizontally, tilt vertically, and zoom, making it ideal for monitoring large areas?**

(A) Dome Camera
(B) Bullet Camera
(C) PTZ Camera
(D) C-Mount Camera

---

**Q9. [I] The main difference between hydraulics and pneumatics is that hydraulics uses _______ while pneumatics uses _______.**

(A) Water; oil
(B) Oil (incompressible fluid); compressed air (compressible gas)
(C) Electricity; magnetism
(D) High voltage; low voltage

---

**Q10. [E] Which Indian bomb disposal robot, developed by DRDO, is used by police and military for neutralising IEDs?**

(A) ASIMO
(B) Sophia
(C) Daksh
(D) Manav

---

### Answer Key

| Question | Answer | Explanation |
|---|---|---|
| Q1 | **(C) Perception Layer** | The perception (sensing) layer collects data from the physical world using sensors, RFID, cameras, etc. |
| Q2 | **(B) Passive** | Passive RFID tags have no battery; they are powered by the electromagnetic field from the reader. |
| Q3 | **(C)** | Hard real-time systems have strict deadlines; missing them leads to catastrophic failure (e.g., aircraft flight control). |
| Q4 | **(C) OCR** | ANPR captures images and uses OCR to convert plate characters into machine-readable text for database matching. |
| Q5 | **(B) Hydraulic systems** | Pascal's Law (pressure transmitted equally in confined fluid) is the foundation of hydraulics. Pneumatics uses compressible gas. |
| Q6 | **(C) Nano** | Under India's Drone Rules, 2021, Nano drones (up to 250g) do not require registration or a pilot licence. |
| Q7 | **(C) 6** | A standard industrial robot has 6 DOF (3 translations + 3 rotations), similar to the human arm's range of motion. |
| Q8 | **(C) PTZ Camera** | PTZ = Pan-Tilt-Zoom. These cameras can rotate 360 degrees horizontally, tilt vertically, and zoom in on distant objects. |
| Q9 | **(B)** | Hydraulics uses oil (incompressible); pneumatics uses compressed air (compressible). This is the fundamental difference. |
| Q10 | **(C) Daksh** | DRDO's Daksh is a remotely operated bomb disposal robot used by Indian police and military forces. |

---

> **Revision Strategy:** Focus on CCTV types (especially IP vs analog, PTZ cameras), RFID types and frequencies, drone categories under Indian regulations, and the hydraulics vs pneumatics comparison. These are highly testable and often framed as straightforward MCQs. The IoT three-layer architecture and RTOS types are also frequently tested.
