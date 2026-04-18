# Subject 10 (Part 1): Computer Science & Networking -- OSI/TCP-IP

> **JKSSB Sub-Inspector (Telecommunication) Exam Prep**
> Part of the 20-Marks Computer Science & Networking subject
> Difficulty: Basic --> Intermediate --> Exam-Level

---

## Table of Contents

1. [OSI Model](#1-osi-model)
2. [TCP/IP Model](#2-tcpip-model)
3. [IP Addressing](#3-ip-addressing)
4. [Routing Protocols](#4-routing-protocols)
5. [Switching Techniques](#5-switching-techniques)
6. [Network Devices](#6-network-devices)
7. [Wireless Standards](#7-wireless-standards)
8. [Checklist -- Practice MCQs](#8-checklist----practice-mcqs)

---

## 1. OSI Model

### 1.1 What Is the OSI Model? (Beginner Explanation)

The **OSI (Open Systems Interconnection) model** is a conceptual framework that describes how data travels from one computer to another over a network. It divides the communication process into **7 layers**, each with a specific job.

**Memory trick:** "**P**lease **D**o **N**ot **T**hrow **S**ausage **P**izza **A**way" (from Layer 1 to 7)

Or top-down: "**A**ll **P**eople **S**eem **T**o **N**eed **D**ata **P**rocessing" (Layer 7 to 1)

### 1.2 All 7 Layers -- Detailed Breakdown

---

#### Layer 7: Application Layer

| Aspect | Details |
|--------|---------|
| **Function** | Provides network services directly to the user/application. This is the layer closest to the end-user. |
| **What it does** | Enables applications to access network resources; provides user interfaces for email, web browsing, file transfer. |
| **Protocols** | **HTTP, HTTPS, FTP, SMTP, POP3, IMAP, DNS, DHCP, SNMP, Telnet, SSH** |
| **Data unit** | Data (message) |
| **Devices** | Gateways, firewalls (application-level) |

---

#### Layer 6: Presentation Layer

| Aspect | Details |
|--------|---------|
| **Function** | Data translation, encryption/decryption, compression/decompression |
| **What it does** | Ensures data from Layer 7 is in a format the receiving system can understand. Handles character encoding, data encryption, and image/video compression. |
| **Protocols/Standards** | **SSL/TLS** (encryption), **JPEG, MPEG, GIF** (media formats), **ASCII, Unicode** (character encoding) |
| **Data unit** | Data (formatted/encrypted data) |

**Beginner analogy:** The Presentation layer is like a translator at a conference -- it converts information so both sides can understand it.

---

#### Layer 5: Session Layer

| Aspect | Details |
|--------|---------|
| **Function** | Establishes, manages, and terminates communication sessions |
| **What it does** | Controls dialogues (sessions) between computers. Handles session checkpointing and recovery. Manages half-duplex or full-duplex communication. |
| **Protocols** | **NetBIOS, RPC (Remote Procedure Call), PPTP** |
| **Data unit** | Data (session data) |

**Beginner analogy:** The Session layer is like a phone operator who connects your call, keeps it active, and properly disconnects when you are done.

---

#### Layer 4: Transport Layer

| Aspect | Details |
|--------|---------|
| **Function** | End-to-end data delivery, reliability, flow control, error recovery |
| **What it does** | Segments data from upper layers; ensures complete and reliable data delivery between source and destination. Provides port-based addressing. |
| **Protocols** | **TCP** (connection-oriented, reliable) and **UDP** (connectionless, fast) |
| **Data unit** | **Segment** (TCP) / **Datagram** (UDP) |
| **Addressing** | **Port numbers** (0-65535) |

**TCP vs UDP:**

| Feature | TCP | UDP |
|---------|-----|-----|
| Connection | Connection-oriented (3-way handshake) | Connectionless |
| Reliability | Reliable (acknowledgments, retransmission) | Unreliable (no guarantees) |
| Ordering | Ordered delivery | No ordering |
| Speed | Slower (overhead) | **Faster** (minimal overhead) |
| Use case | Web (HTTP), email (SMTP), file transfer (FTP) | Video streaming, DNS, VoIP, online gaming |

**Well-known port numbers:**

| Port | Protocol | Service |
|------|----------|---------|
| 20, 21 | TCP | FTP (data, control) |
| 22 | TCP | SSH |
| 23 | TCP | Telnet |
| 25 | TCP | SMTP (email sending) |
| 53 | TCP/UDP | DNS |
| 80 | TCP | HTTP |
| 110 | TCP | POP3 |
| 143 | TCP | IMAP |
| 443 | TCP | HTTPS |

---

#### Layer 3: Network Layer

| Aspect | Details |
|--------|---------|
| **Function** | Logical addressing (IP addresses), routing, path determination |
| **What it does** | Determines the best path for data to travel from source to destination across multiple networks. Handles IP addressing and packet forwarding. |
| **Protocols** | **IP (IPv4, IPv6), ICMP, ARP, OSPF, RIP, BGP** |
| **Data unit** | **Packet** |
| **Devices** | **Router**, Layer 3 switch |
| **Addressing** | **IP addresses** |

---

#### Layer 2: Data Link Layer

| Aspect | Details |
|--------|---------|
| **Function** | Physical addressing (MAC), framing, error detection, flow control |
| **What it does** | Packages raw bits into frames; provides reliable node-to-node delivery on a single link. Handles MAC addressing and access control. |
| **Sub-layers** | **LLC** (Logical Link Control) -- error control and flow control; **MAC** (Media Access Control) -- physical addressing and channel access |
| **Protocols** | **Ethernet (IEEE 802.3), Wi-Fi (IEEE 802.11), PPP, HDLC** |
| **Data unit** | **Frame** |
| **Devices** | **Switch**, Bridge |
| **Addressing** | **MAC addresses** (48-bit, e.g., AA:BB:CC:DD:EE:FF) |

---

#### Layer 1: Physical Layer

| Aspect | Details |
|--------|---------|
| **Function** | Transmission of raw bits over a physical medium |
| **What it does** | Defines electrical signals, voltages, pin layouts, cable types, and data rates. Converts bits into physical signals (electrical, optical, or radio). |
| **Standards** | **RS-232, Ethernet physical layer (10BASE-T, 100BASE-TX), USB physical, DSL** |
| **Data unit** | **Bits** |
| **Devices** | **Hub**, Repeater, Cables, Connectors |
| **Media** | Copper cable (UTP, STP), Optical fibre, Wireless (radio waves) |

---

### 1.3 OSI Model Summary Table

| Layer | Name | Data Unit | Key Function | Key Protocol(s) | Device |
|-------|------|-----------|-------------|-----------------|--------|
| 7 | Application | Data | User interface, network services | HTTP, FTP, SMTP, DNS | Gateway |
| 6 | Presentation | Data | Translation, encryption, compression | SSL/TLS, JPEG, MPEG | -- |
| 5 | Session | Data | Session management | NetBIOS, RPC | -- |
| 4 | Transport | Segment | End-to-end delivery, reliability | **TCP, UDP** | -- |
| 3 | Network | Packet | Routing, logical addressing | **IP, ICMP, ARP** | **Router** |
| 2 | Data Link | Frame | Framing, MAC addressing | **Ethernet, Wi-Fi** | **Switch** |
| 1 | Physical | Bits | Raw bit transmission | RS-232, Ethernet PHY | **Hub, Repeater** |

---

## 2. TCP/IP Model

### 2.1 What Is the TCP/IP Model?

The **TCP/IP model** is the practical, real-world networking model used by the Internet. It has **4 layers** (sometimes described as 5).

### 2.2 TCP/IP Layers

| TCP/IP Layer | Equivalent OSI Layers | Function |
|-------------|----------------------|----------|
| **Application** | Application + Presentation + Session (Layers 5-7) | All user-facing protocols (HTTP, FTP, DNS, SMTP, SSH) |
| **Transport** | Transport (Layer 4) | End-to-end communication (TCP, UDP) |
| **Internet** | Network (Layer 3) | IP addressing, routing (IP, ICMP, ARP) |
| **Network Access (Link)** | Data Link + Physical (Layers 1-2) | Physical transmission, framing (Ethernet, Wi-Fi) |

### 2.3 OSI vs TCP/IP Comparison

| Feature | OSI Model | TCP/IP Model |
|---------|-----------|-------------|
| **Layers** | 7 | 4 |
| **Nature** | Theoretical/Reference model | Practical/Implementation model |
| **Development** | ISO (International Standards Organization) | DARPA / Department of Defense |
| **Approach** | Protocol-independent (generic) | Protocol-dependent (built around TCP/IP) |
| **Transport layer** | Connection-oriented only | Both connection-oriented (TCP) and connectionless (UDP) |
| **Session/Presentation** | Separate layers | Combined into Application layer |
| **Usage** | Teaching, reference | **Actual Internet** |
| **Flexibility** | More flexible (modular) | Less modular but more practical |

---

## 3. IP Addressing

### 3.1 IPv4 Addressing

**IPv4 address:** A **32-bit** number, written as 4 decimal octets separated by dots.

**Format:** `X.X.X.X` where each X is 0-255

**Example:** `192.168.1.100`

**Total addresses:** 2^32 = approximately **4.3 billion** (which is not enough for the modern world -- reason for IPv6).

### 3.2 IPv4 Address Classes

| Class | First Octet Range | Default Subnet Mask | Network/Host Bits | Number of Networks | Hosts per Network | Use |
|-------|-------------------|--------------------|--------------------|-------------------|-------------------|-----|
| **A** | 1-126 | 255.0.0.0 (/8) | 8 / 24 | 126 | ~16.7 million | Large organizations |
| **B** | 128-191 | 255.255.0.0 (/16) | 16 / 16 | 16,384 | ~65,000 | Medium organizations |
| **C** | 192-223 | 255.255.255.0 (/24) | 24 / 8 | ~2.1 million | 254 | Small organizations |
| **D** | 224-239 | -- | -- | -- | -- | **Multicast** |
| **E** | 240-255 | -- | -- | -- | -- | **Reserved/Experimental** |

**Special addresses:**
- **127.0.0.0/8** -- Loopback (127.0.0.1 = localhost)
- **0.0.0.0** -- Default route / "this network"
- **255.255.255.255** -- Limited broadcast
- **Network address:** All host bits = 0 (e.g., 192.168.1.0)
- **Broadcast address:** All host bits = 1 (e.g., 192.168.1.255)

**Private IP ranges (not routed on Internet):**

| Class | Private Range | CIDR |
|-------|--------------|------|
| A | 10.0.0.0 -- 10.255.255.255 | 10.0.0.0/8 |
| B | 172.16.0.0 -- 172.31.255.255 | 172.16.0.0/12 |
| C | 192.168.0.0 -- 192.168.255.255 | 192.168.0.0/16 |

### 3.3 Subnetting and CIDR

**Subnetting** divides a large network into smaller subnetworks (subnets) for better management and security.

**CIDR (Classless Inter-Domain Routing):** Uses a **slash notation** (e.g., /24) to indicate how many bits are used for the network portion.

**Subnetting Example:**

Given: `192.168.1.0/26`

```
/26 means 26 bits for network, 6 bits for hosts
Subnet mask: 255.255.255.192 (binary: 11111111.11111111.11111111.11000000)
Number of subnets: 2^(26-24) = 4 subnets (from a /24 network)
Hosts per subnet: 2^6 - 2 = 62 usable hosts
```

**The 4 subnets:**

| Subnet | Network Address | Usable Range | Broadcast |
|--------|----------------|-------------|-----------|
| 1 | 192.168.1.0 | 192.168.1.1 -- 192.168.1.62 | 192.168.1.63 |
| 2 | 192.168.1.64 | 192.168.1.65 -- 192.168.1.126 | 192.168.1.127 |
| 3 | 192.168.1.128 | 192.168.1.129 -- 192.168.1.190 | 192.168.1.191 |
| 4 | 192.168.1.192 | 192.168.1.193 -- 192.168.1.254 | 192.168.1.255 |

**Formula: Usable hosts = 2^(host bits) - 2** (subtract 2 for network address and broadcast address).

### 3.4 IPv6

**IPv6 address:** A **128-bit** number, written as 8 groups of 4 hexadecimal digits separated by colons.

**Format:** `XXXX:XXXX:XXXX:XXXX:XXXX:XXXX:XXXX:XXXX`

**Example:** `2001:0db8:85a3:0000:0000:8a2e:0370:7334`

**Shortened:** `2001:db8:85a3::8a2e:370:7334` (leading zeros and consecutive all-zero groups can be abbreviated)

**Total addresses:** 2^128 = approximately **3.4 x 10^38** (practically unlimited).

### 3.5 IPv4 vs IPv6 Comparison

| Feature | IPv4 | IPv6 |
|---------|------|------|
| **Address length** | 32 bits | **128 bits** |
| **Notation** | Dotted decimal (192.168.1.1) | Hexadecimal with colons (2001:db8::1) |
| **Address space** | ~4.3 billion | ~3.4 x 10^38 |
| **Header size** | 20-60 bytes (variable) | **40 bytes (fixed)** |
| **Fragmentation** | By routers and sender | **Only by sender** |
| **Broadcast** | Yes | **No** (uses multicast/anycast instead) |
| **Security** | IPSec optional | **IPSec built-in (mandatory support)** |
| **Configuration** | Manual or DHCP | Auto-configuration (SLAAC) + DHCPv6 |
| **Checksum in header** | Yes | **No** (removed for faster processing) |

---

## 4. Routing Protocols

### 4.1 What Is Routing?

**Routing** is the process of selecting the best path for data packets to travel from source to destination across interconnected networks. Routers make these decisions using **routing tables** updated by routing protocols.

### 4.2 RIP (Routing Information Protocol)

| Feature | Details |
|---------|---------|
| **Type** | Distance-vector protocol |
| **Metric** | **Hop count** (number of routers to cross) |
| **Maximum hops** | **15** (16 = unreachable -- limits network size) |
| **Update method** | Sends entire routing table to neighbors every **30 seconds** |
| **Convergence** | Slow |
| **Algorithm** | Bellman-Ford algorithm |
| **Best for** | Small networks |
| **Versions** | RIPv1 (classful), RIPv2 (classless with CIDR support) |

### 4.3 OSPF (Open Shortest Path First)

| Feature | Details |
|---------|---------|
| **Type** | Link-state protocol |
| **Metric** | **Cost** (based on bandwidth; cost = 10^8 / bandwidth in bps) |
| **Maximum hops** | **No limit** |
| **Update method** | Sends only changes (Link State Advertisements) when topology changes |
| **Convergence** | **Fast** |
| **Algorithm** | **Dijkstra's algorithm** (Shortest Path First) |
| **Best for** | Large enterprise networks, ISPs |
| **Areas** | Uses area hierarchy (Area 0 = backbone) for scalability |

### 4.4 RIP vs OSPF Comparison

| Parameter | RIP | OSPF |
|-----------|-----|------|
| **Algorithm** | Bellman-Ford | **Dijkstra** |
| **Metric** | Hop count | **Bandwidth-based cost** |
| **Hop limit** | 15 | **None** |
| **Updates** | Periodic (every 30 sec) | **Event-triggered** |
| **Convergence speed** | Slow | **Fast** |
| **Scalability** | Small networks | **Large networks** |
| **Bandwidth usage** | Higher (full table updates) | **Lower** (only changes) |
| **Complexity** | Simple | Complex |
| **Classification** | Distance-vector | **Link-state** |

---

## 5. Switching Techniques

### 5.1 Circuit Switching

**Beginner idea:** A dedicated communication path is established between sender and receiver for the entire duration of the communication. Like a phone call -- the line is reserved even during silence.

| Feature | Details |
|---------|---------|
| **Path** | Dedicated end-to-end path for entire session |
| **Setup** | Required before data transfer |
| **Bandwidth** | Reserved (may be wasted during silence) |
| **Delay** | Low and constant after setup |
| **Example** | Traditional telephone network (PSTN) |
| **Best for** | Real-time voice communication |

### 5.2 Packet Switching

**Beginner idea:** Data is broken into small **packets**, each of which can take a different path to the destination. Packets are reassembled at the receiver.

| Feature | Details |
|---------|---------|
| **Path** | No dedicated path; each packet routed independently |
| **Setup** | No setup required |
| **Bandwidth** | Shared dynamically (very efficient) |
| **Delay** | Variable (packets may arrive out of order) |
| **Example** | **Internet**, email, web browsing |
| **Best for** | Data communication, bursty traffic |

**Two types:**
- **Datagram:** Each packet routed independently (IP is datagram-based)
- **Virtual circuit:** Path established first, all packets follow same path (e.g., ATM, MPLS)

### 5.3 Message Switching

**Beginner idea:** The entire message is sent as a single block from node to node. Each node stores the complete message before forwarding it to the next node (store-and-forward).

| Feature | Details |
|---------|---------|
| **Path** | No dedicated path; store-and-forward at each node |
| **Setup** | No setup required |
| **Bandwidth** | Shared, but large messages block the link |
| **Delay** | **High** (entire message must be received before forwarding) |
| **Example** | Email (historically), telegram systems |
| **Best for** | Non-real-time, delay-tolerant messages |

### 5.4 Switching Comparison Table

| Parameter | Circuit Switching | Packet Switching | Message Switching |
|-----------|------------------|------------------|-------------------|
| **Dedicated path** | Yes | No | No |
| **Setup required** | Yes | No | No |
| **Bandwidth efficiency** | Low (reserved) | **High** (shared) | Medium |
| **Delay** | Low (after setup) | Variable | **High** |
| **Congestion** | Blocked calls | Possible delays | Store-and-forward delays |
| **Order of delivery** | In order | May be out of order | In order |
| **Best for** | Voice calls | **Internet data** | Email, telegrams |
| **Example** | PSTN | IP networks | Historical telegraph |

---

## 6. Network Devices

### 6.1 Hub

| Feature | Details |
|---------|---------|
| **OSI Layer** | Layer 1 (Physical) |
| **Function** | Receives data and broadcasts it to **all** connected ports |
| **Intelligence** | **None** -- does not examine addresses |
| **Collision domain** | One (shared by all ports) -- collisions are common |
| **Broadcast domain** | One |
| **Speed** | Shared among all devices |
| **Status** | **Obsolete** -- replaced by switches |

### 6.2 Switch

| Feature | Details |
|---------|---------|
| **OSI Layer** | Layer 2 (Data Link) |
| **Function** | Receives data and forwards it only to the **specific destination port** based on **MAC address** |
| **Intelligence** | Maintains a **MAC address table** (learns which MAC is on which port) |
| **Collision domain** | **Each port is its own collision domain** (no collisions) |
| **Broadcast domain** | One (unless VLANs are configured) |
| **Speed** | Dedicated bandwidth per port |
| **Status** | Standard in modern networks |

### 6.3 Router

| Feature | Details |
|---------|---------|
| **OSI Layer** | Layer 3 (Network) |
| **Function** | Forwards packets between **different networks** based on **IP address**. Determines best path using routing tables. |
| **Intelligence** | Maintains **routing tables**; uses routing protocols (RIP, OSPF, BGP) |
| **Collision domain** | Each port is separate |
| **Broadcast domain** | **Each port is a separate broadcast domain** (blocks broadcasts) |
| **Additional features** | NAT, firewall, DHCP server, QoS |
| **Status** | Essential for internet and inter-network communication |

### 6.4 Device Comparison Table

| Parameter | Hub | Switch | Router |
|-----------|-----|--------|--------|
| **OSI Layer** | 1 (Physical) | 2 (Data Link) | 3 (Network) |
| **Addressing** | None | **MAC address** | **IP address** |
| **Forwarding** | Broadcast to all ports | Unicast to specific port | Route between networks |
| **Intelligence** | Dumb | Smart (MAC table) | Smartest (routing table) |
| **Collision domain** | One shared | Per port (separate) | Per port (separate) |
| **Broadcast domain** | One | One | **Per port (separate)** |
| **Speed** | Shared | Dedicated | Depends on interface |
| **Cost** | Cheapest | Moderate | **Most expensive** |
| **Use today** | Obsolete | LAN switching | Inter-network routing |

---

## 7. Wireless Standards

### 7.1 Wi-Fi (IEEE 802.11 Family)

| Standard | Year | Frequency | Max Data Rate | Range (Indoor) | Key Feature |
|----------|------|-----------|--------------|----------------|-------------|
| **802.11a** | 1999 | 5 GHz | 54 Mbps | ~35 m | First 5 GHz standard |
| **802.11b** | 1999 | 2.4 GHz | 11 Mbps | ~38 m | First popular Wi-Fi |
| **802.11g** | 2003 | 2.4 GHz | 54 Mbps | ~38 m | Backward compatible with b |
| **802.11n (Wi-Fi 4)** | 2009 | 2.4/5 GHz | 600 Mbps | ~70 m | MIMO, channel bonding |
| **802.11ac (Wi-Fi 5)** | 2014 | 5 GHz | 6.9 Gbps | ~35 m | MU-MIMO, 80/160 MHz channels |
| **802.11ax (Wi-Fi 6)** | 2020 | 2.4/5 GHz | 9.6 Gbps | ~35 m | OFDMA, better in dense areas |
| **802.11be (Wi-Fi 7)** | 2024 | 2.4/5/6 GHz | 46 Gbps | ~35 m | 320 MHz channels, MLO |

### 7.2 Bluetooth

| Feature | Details |
|---------|---------|
| **Standard** | IEEE 802.15.1 |
| **Frequency** | 2.4 GHz ISM band |
| **Range** | Typically 10 m (Class 2), up to 100 m (Class 1) |
| **Data rate** | Classic: 1-3 Mbps; BLE (Bluetooth Low Energy): 125 kbps - 2 Mbps |
| **Topology** | Piconet (1 master + up to 7 active slaves) |
| **Use** | Headphones, keyboards, smartwatches, IoT sensors |
| **Power** | Very low (especially BLE) |

### 7.3 NFC (Near Field Communication)

| Feature | Details |
|---------|---------|
| **Standard** | ISO 14443, ISO 18092 |
| **Frequency** | 13.56 MHz |
| **Range** | **< 10 cm** (very short) |
| **Data rate** | 106-424 kbps |
| **Use** | Contactless payments (UPI tap, Apple Pay), smart cards, access badges |
| **Power** | Can be passive (no battery needed in tags) |
| **Security** | Inherently secure due to very short range |

### 7.4 Wireless Standards Comparison Table

| Parameter | Wi-Fi (802.11) | Bluetooth | NFC |
|-----------|----------------|-----------|-----|
| **Range** | Up to 100 m+ | 10-100 m | **< 10 cm** |
| **Data rate** | Up to Gbps | 1-3 Mbps | 106-424 kbps |
| **Frequency** | 2.4/5/6 GHz | 2.4 GHz | 13.56 MHz |
| **Power consumption** | High | Low (BLE: Very low) | **Very low / Passive** |
| **Devices connected** | Many (hundreds) | 7 active (piconet) | 1-to-1 (typically) |
| **Setup time** | Seconds | Seconds | **Instant (tap)** |
| **Primary use** | Internet access | Peripheral connectivity | Payments, identification |
| **Standard body** | IEEE 802.11 | IEEE 802.15.1 | ISO/IEC |

---

## 8. Checklist -- Practice MCQs

**Difficulty: Basic to Exam-Level**

---

**Q1. (Basic)** How many layers does the OSI model have?

- (A) 4
- (B) 5
- (C) 7
- (D) 3

---

**Q2. (Basic)** Which device operates at Layer 2 (Data Link Layer) of the OSI model?

- (A) Hub
- (B) Router
- (C) Switch
- (D) Repeater

---

**Q3. (Intermediate)** The port number for HTTPS is:

- (A) 80
- (B) 21
- (C) 443
- (D) 25

---

**Q4. (Intermediate)** An IPv4 address belongs to Class B if its first octet is in the range:

- (A) 1-126
- (B) 128-191
- (C) 192-223
- (D) 224-239

---

**Q5. (Intermediate)** Which routing protocol uses Dijkstra's algorithm?

- (A) RIP
- (B) OSPF
- (C) BGP
- (D) IGRP

---

**Q6. (Exam-Level)** Given the subnet 192.168.10.0/26, how many usable host addresses are available per subnet?

- (A) 30
- (B) 62
- (C) 126
- (D) 254

---

**Q7. (Exam-Level)** In the TCP/IP model, which layer corresponds to OSI Layers 5, 6, and 7 combined?

- (A) Transport layer
- (B) Internet layer
- (C) Application layer
- (D) Network Access layer

---

**Q8. (Exam-Level)** Which wireless standard introduced OFDMA for better performance in dense environments?

- (A) 802.11n (Wi-Fi 4)
- (B) 802.11ac (Wi-Fi 5)
- (C) 802.11ax (Wi-Fi 6)
- (D) 802.11b

---

**Q9. (Exam-Level)** A router separates:

- (A) Only collision domains
- (B) Only broadcast domains
- (C) Both collision and broadcast domains
- (D) Neither collision nor broadcast domains

---

**Q10. (Exam-Level)** IPv6 addresses are ______ bits long and IPv4 addresses are ______ bits long.

- (A) 64 bits, 32 bits
- (B) 128 bits, 64 bits
- (C) 128 bits, 32 bits
- (D) 256 bits, 128 bits

---

### Answer Key

| Q# | Answer | Explanation |
|----|--------|-------------|
| Q1 | **(C) 7** | The OSI model has 7 layers: Physical, Data Link, Network, Transport, Session, Presentation, Application |
| Q2 | **(C) Switch** | Switches operate at Layer 2 using MAC addresses; hubs are Layer 1; routers are Layer 3 |
| Q3 | **(C) 443** | HTTPS uses port 443; HTTP uses port 80; FTP uses 21; SMTP uses 25 |
| Q4 | **(B) 128-191** | Class A: 1-126, Class B: 128-191, Class C: 192-223, Class D: 224-239 |
| Q5 | **(B) OSPF** | OSPF is a link-state protocol that uses Dijkstra's SPF algorithm; RIP uses Bellman-Ford |
| Q6 | **(B) 62** | /26 means 6 host bits: 2^6 - 2 = 64 - 2 = 62 usable hosts |
| Q7 | **(C) Application layer** | TCP/IP combines OSI's Session, Presentation, and Application into one Application layer |
| Q8 | **(C) 802.11ax (Wi-Fi 6)** | Wi-Fi 6 introduced OFDMA for better multi-user performance in crowded areas |
| Q9 | **(C) Both collision and broadcast domains** | Routers separate both; switches separate collision domains but not broadcast domains |
| Q10 | **(C) 128 bits, 32 bits** | IPv6 = 128 bits (~3.4 x 10^38 addresses); IPv4 = 32 bits (~4.3 billion addresses) |

---

> **Study Tip:** Memorize the OSI layers, their data units (Data-Data-Data-Segment-Packet-Frame-Bits), the associated devices (Gateway-none-none-none-Router-Switch-Hub), and key port numbers. These are the most commonly asked questions.
