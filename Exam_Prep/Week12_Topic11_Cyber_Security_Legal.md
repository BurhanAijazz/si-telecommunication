# Subject 11: Cyber Security & Legal Framework (10 Marks)

> **Week 12 | JKSSB Sub-Inspector (Telecommunication) Exam Prep**
> Difficulty: Basic --> Intermediate --> Exam-Level

---

## Table of Contents

1. [Cyber Threats](#1-cyber-threats)
2. [Network Security](#2-network-security)
3. [Authentication & Access Control](#3-authentication--access-control)
4. [Security Protocols](#4-security-protocols)
5. [Cryptography](#5-cryptography)
6. [IT Act, 2000 & Cyber Offences](#6-it-act-2000--cyber-offences)
7. [Post-Quantum Cryptography](#7-post-quantum-cryptography)
8. [Checklist -- Practice MCQs](#checklist----practice-mcqs)

---

## 1. Cyber Threats

### 1.1 What Is a Cyber Threat? (Basic)

A **cyber threat** is any malicious activity that aims to damage, steal, or disrupt digital data, devices, or networks. As a Sub-Inspector in Telecommunication, you will encounter these threats in complaints, investigations, and infrastructure protection.

### 1.2 Malware -- Types and Differences

**Malware** (malicious software) is an umbrella term. The table below summarises the key types you must know:

| Malware Type | What It Does | How It Spreads | Key Feature |
|---|---|---|---|
| **Virus** | Attaches to a legitimate file/program and executes when the host runs | Requires human action (opening file, running program) | Cannot spread on its own -- needs a host |
| **Worm** | Self-replicating program that spreads across networks | Automatically, without user action -- exploits vulnerabilities | Self-propagating; can crash networks by consuming bandwidth |
| **Trojan (Trojan Horse)** | Disguised as useful software but performs harmful actions in the background | Downloaded by user thinking it is safe | Does NOT self-replicate; relies on deception |
| **Spyware** | Secretly monitors user activity (keystrokes, browsing, passwords) | Bundled with software, malicious websites | Stealth operation; often used for identity theft |

**Exam Tip:** A common question is "Which malware self-replicates without user action?" -- Answer: **Worm**.

### 1.3 Phishing

- **Definition:** A social engineering attack where attackers impersonate trusted entities (banks, government portals) via email, SMS, or fake websites to steal credentials.
- **Spear Phishing:** Targeted phishing aimed at a specific individual or organisation.
- **Whaling:** Phishing that targets senior executives or high-ranking officials.

**Law Enforcement Relevance:** Phishing attacks are one of the most reported cyber crimes in India. FIRs are typically registered under **Section 66C** (identity theft) and **Section 66D** (cheating by personation) of the IT Act.

### 1.4 Ransomware

- **Definition:** Malware that encrypts the victim's files and demands a ransom (usually in cryptocurrency) for the decryption key.
- **Notable Examples:** WannaCry (2017), Petya/NotPetya, LockBit.
- **How It Works:**
  1. Victim opens malicious attachment or clicks a compromised link.
  2. Ransomware encrypts all accessible files.
  3. A ransom note appears demanding payment.
  4. Even after payment, decryption is not guaranteed.

**Police Relevance:** Ransomware attacks on hospitals, government offices, and critical infrastructure are increasing. As an SI (Telecom), you may coordinate with CERT-In for incident response.

---

## 2. Network Security

### 2.1 Firewalls

A **firewall** is a security device (hardware or software) that monitors and controls incoming and outgoing network traffic based on predefined security rules. Think of it as a **security guard at a building entrance** -- it decides who gets in and who is blocked.

#### Types of Firewalls

| Type | How It Works | Pros | Cons |
|---|---|---|---|
| **Packet Filtering Firewall** | Inspects individual packets (source/destination IP, port, protocol) against a rule set | Fast, simple | Cannot inspect packet content; vulnerable to spoofing |
| **Stateful Inspection Firewall** | Tracks the state of active connections; allows packets that belong to an established session | More secure than packet filtering | Slower; higher resource use |
| **Proxy Firewall (Application-Level Gateway)** | Acts as an intermediary between client and server; inspects full application-layer data | Deep content inspection | Slowest; may cause bottlenecks |
| **Next-Generation Firewall (NGFW)** | Combines stateful inspection + deep packet inspection + application awareness + intrusion prevention | Most comprehensive | Expensive; complex to configure |

### 2.2 IDS vs IPS

| Feature | **IDS** (Intrusion Detection System) | **IPS** (Intrusion Prevention System) |
|---|---|---|
| **Primary Function** | Detects and alerts about suspicious activity | Detects AND blocks/prevents suspicious activity |
| **Action** | Passive -- sends alert to admin | Active -- automatically takes action (drops packet, blocks IP) |
| **Placement** | Typically monitors a copy of traffic (out-of-band) | Sits inline in the traffic path |
| **Analogy** | CCTV camera -- watches and records | Security guard -- watches and intervenes |

**Exam Tip:** "IDS detects, IPS prevents" -- this one-liner covers most MCQ answers.

#### Detection Methods
- **Signature-based:** Matches traffic against a database of known attack patterns. Fast but cannot detect new (zero-day) attacks.
- **Anomaly-based:** Establishes a baseline of "normal" traffic and flags deviations. Can detect new attacks but has higher false positives.

---

## 3. Authentication & Access Control

### 3.1 Authentication Factors

Authentication verifies **"Who are you?"** There are three classic factors:

| Factor | Description | Example |
|---|---|---|
| **Something you know** | Knowledge-based | Password, PIN, security question |
| **Something you have** | Possession-based | Smart card, OTP token, mobile phone |
| **Something you are** | Biometric | Fingerprint, iris scan, face recognition |

### 3.2 Multi-Factor Authentication (MFA)

**MFA** requires **two or more** factors from different categories. Using two passwords is NOT MFA (both are "something you know").

**Example:** ATM withdrawal = Card (something you have) + PIN (something you know) = **2-Factor Authentication (2FA)**.

### 3.3 Biometrics

| Type | Examples | Advantage | Limitation |
|---|---|---|---|
| **Physiological** | Fingerprint, iris, retina, face | Unique to individual; hard to forge | Can be affected by injury; privacy concerns |
| **Behavioural** | Voice recognition, typing pattern, gait | Non-intrusive | Less accurate; changes over time |

**Law Enforcement Use:** Aadhaar-based biometric verification, fingerprint databases (AFIS), facial recognition in CCTV surveillance.

### 3.4 Role-Based Access Control (RBAC)

- **Concept:** Users are assigned **roles** (e.g., Admin, Operator, Viewer), and each role has specific permissions.
- **Principle of Least Privilege:** Users should only have the minimum access needed for their job.
- **Example in Policing:** A constable may have "view-only" access to a case database, while an SI has "edit" access, and an SP has "delete" access.

---

## 4. Security Protocols

### 4.1 HTTP vs HTTPS

| Feature | HTTP | HTTPS |
|---|---|---|
| Full form | HyperText Transfer Protocol | HyperText Transfer Protocol **Secure** |
| Port | 80 | 443 |
| Encryption | None -- data sent in plain text | Data encrypted using SSL/TLS |
| Security | Vulnerable to eavesdropping | Secure against interception |
| URL indicator | `http://` | `https://` (with padlock icon) |

### 4.2 SSL/TLS

- **SSL** (Secure Sockets Layer) -- the original protocol; now deprecated (SSL 3.0 was the last version).
- **TLS** (Transport Layer Security) -- the successor to SSL; current version is **TLS 1.3**.
- When people say "SSL," they usually mean TLS in modern contexts.

#### TLS Handshake (Simplified)

The TLS handshake establishes a secure connection before data transfer begins:

1. **Client Hello:** Client sends supported TLS version, cipher suites, and a random number.
2. **Server Hello:** Server selects TLS version and cipher suite; sends its digital certificate (containing public key).
3. **Certificate Verification:** Client verifies the server's certificate with a trusted Certificate Authority (CA).
4. **Key Exchange:** Client and server generate a shared **session key** (symmetric key) using asymmetric encryption.
5. **Secure Communication:** All further data is encrypted with the symmetric session key.

**Key Insight:** TLS uses **asymmetric encryption** during the handshake (for key exchange) and **symmetric encryption** for the actual data transfer (because it is faster).

---

## 5. Cryptography

### 5.1 What Is Cryptography?

**Cryptography** is the science of converting readable data (**plaintext**) into unreadable data (**ciphertext**) to protect it from unauthorised access.

### 5.2 Symmetric Encryption

- **One key** is used for both encryption and decryption.
- The same key must be shared between sender and receiver (key distribution problem).

| Algorithm | Key Length | Block Size | Status |
|---|---|---|---|
| **DES** (Data Encryption Standard) | 56 bits | 64 bits | **Obsolete** -- easily brute-forced |
| **3DES** (Triple DES) | 112/168 bits | 64 bits | Legacy -- being phased out |
| **AES** (Advanced Encryption Standard) | 128/192/256 bits | 128 bits | **Current standard** -- used worldwide |

**Exam Tip:** AES replaced DES as the standard. AES-256 is the most secure variant.

### 5.3 Asymmetric Encryption

- Uses a **key pair**: **public key** (shared openly) and **private key** (kept secret).
- Data encrypted with the public key can only be decrypted with the corresponding private key (and vice versa).

| Algorithm | Basis | Key Length | Use Case |
|---|---|---|---|
| **RSA** (Rivest-Shamir-Adleman) | Factoring large prime numbers | 2048/4096 bits | Digital signatures, key exchange, secure email |

**Simple Analogy:** A public key is like an open mailbox slot -- anyone can drop a letter in. The private key is the mailbox key -- only the owner can open and read the letters.

### 5.4 Hashing

- A **hash function** converts input of any size into a **fixed-length** output (hash/digest).
- Hashing is **one-way** -- you cannot reverse a hash to get the original data.
- Used for **integrity verification** and **password storage**.

| Algorithm | Output Length | Status |
|---|---|---|
| **MD5** | 128 bits (32 hex characters) | **Broken** -- collision attacks possible; do NOT use for security |
| **SHA-1** | 160 bits | **Deprecated** -- vulnerabilities found |
| **SHA-256** (part of SHA-2 family) | 256 bits | **Current standard** |
| **SHA-3** | Variable (224/256/384/512 bits) | Latest standard; different internal structure from SHA-2 |

**Exam Tip:** Hashing is NOT encryption. Encryption is reversible (with a key); hashing is not.

### 5.5 Digital Signatures

A **digital signature** ensures **authentication**, **integrity**, and **non-repudiation**.

**How It Works:**
1. Sender creates a **hash** of the message.
2. Sender encrypts the hash with their **private key** -- this encrypted hash is the digital signature.
3. Signature is sent along with the message.
4. Receiver decrypts the signature with the sender's **public key** to get the hash.
5. Receiver independently hashes the received message and compares the two hashes.
6. If they match: message is authentic and unaltered.

**Legal Relevance:** Digital signatures have legal validity in India under **Section 3** of the IT Act, 2000. They are used in e-FIRs, court submissions, and government documents.

---

## 6. IT Act, 2000 & Cyber Offences

### 6.1 Overview

The **Information Technology Act, 2000** is India's primary law governing cyber activities. It was amended significantly in **2008** (IT Amendment Act). As a police Sub-Inspector, knowledge of key sections is critical for registering FIRs and investigating cyber crimes.

### 6.2 Key Sections for Exam

| Section | Title / Subject | What It Covers | Punishment |
|---|---|---|---|
| **Section 43** | Penalty for damage to computer, computer system, etc. | Unauthorised access, downloading data, introducing viruses, causing damage/disruption to any computer system | **Civil liability** -- compensation up to Rs. 5 crore (originally); now no upper limit after 2008 amendment |
| **Section 65** | Tampering with computer source documents | Intentionally concealing, destroying, or altering source code when required to be maintained by law | Imprisonment up to **3 years** OR fine up to Rs. 2 lakh OR both |
| **Section 66** | Computer related offences (hacking) | If any act under Section 43 is done **dishonestly or fraudulently**, it becomes a criminal offence | Imprisonment up to **3 years** OR fine up to Rs. 5 lakh OR both |
| **Section 66A** | *(Struck down)* | Was about sending offensive messages online; declared **unconstitutional** by Supreme Court in *Shreya Singhal v. Union of India* (2015) | **No longer valid** -- important to know this |
| **Section 66C** | Identity theft | Fraudulently using another person's electronic signature, password, or unique identification | Imprisonment up to **3 years** AND fine up to Rs. 1 lakh |
| **Section 66D** | Cheating by personation using computer resource | Impersonating someone using a computer resource or communication device | Imprisonment up to **3 years** AND fine up to Rs. 1 lakh |
| **Section 67** | Publishing obscene material in electronic form | Publishing or transmitting obscene material electronically | First offence: imprisonment up to **3 years** + fine up to Rs. 5 lakh; Second offence: **5 years** + Rs. 10 lakh |
| **Section 67A** | Publishing sexually explicit material | More severe than Section 67; covers explicitly sexual content | First: **5 years** + Rs. 10 lakh; Second: **7 years** + Rs. 10 lakh |
| **Section 67B** | Child pornography | Publishing/transmitting material depicting children in sexually explicit acts | First: **5 years** + Rs. 10 lakh; Second: **7 years** + Rs. 10 lakh |
| **Section 69** | Power to issue directions for interception/monitoring/decryption | Government can direct any agency to intercept, monitor, or decrypt information in the interest of sovereignty, defence, security, etc. | Failure to comply: imprisonment up to **7 years** + fine |
| **Section 72** | Breach of confidentiality and privacy | Any person who has access to electronic records/information under the Act and discloses it without consent | Imprisonment up to **2 years** OR fine up to Rs. 1 lakh OR both |

### 6.3 Important Points for Policing Context

- **Section 43 is civil**; **Section 66 is criminal** -- same act, different intent.
- **Section 66A is DEAD** -- struck down in 2015. If an MCQ asks about it, the correct answer relates to it being unconstitutional.
- **Section 69** is the legal basis for government surveillance and monitoring -- highly relevant for telecom law enforcement.
- **Section 72** applies to officials and intermediaries who leak data -- relevant for police handling digital evidence.
- **CERT-In** (Indian Computer Emergency Response Team) is the nodal agency for cyber security incidents under Section 70B.

### 6.4 Other Relevant Legal Concepts

- **Section 79:** Safe harbour for intermediaries (ISPs, social media) -- they are not liable for third-party content if they follow due diligence.
- **Adjudicating Officer:** Appointed under Section 46 to adjudicate civil disputes under Section 43.
- **Cyber Appellate Tribunal:** Appeals against Adjudicating Officer's orders (now merged into TDSAT).

---

## 7. Post-Quantum Cryptography

### 7.1 The Quantum Threat (Basic)

**Quantum computers** use quantum bits (qubits) that can exist in multiple states simultaneously (superposition). This gives them the ability to solve certain mathematical problems exponentially faster than classical computers.

**Why It Matters:** Most current encryption relies on mathematical problems that are hard for classical computers:
- **RSA** relies on difficulty of factoring large numbers.
- **ECC** relies on the discrete logarithm problem.

A sufficiently powerful quantum computer running **Shor's algorithm** could break both RSA and ECC.

### 7.2 What Is Post-Quantum Cryptography (PQC)?

PQC refers to cryptographic algorithms designed to be **secure against both classical and quantum computers**. These algorithms run on classical computers -- they are not "quantum algorithms."

### 7.3 NIST PQC Standards (2024)

In 2024, NIST finalised the first post-quantum cryptography standards:

| Algorithm | Type | Purpose |
|---|---|---|
| **ML-KEM** (formerly CRYSTALS-Kyber) | Lattice-based | Key encapsulation (key exchange) |
| **ML-DSA** (formerly CRYSTALS-Dilithium) | Lattice-based | Digital signatures |
| **SLH-DSA** (formerly SPHINCS+) | Hash-based | Digital signatures (backup/alternative) |

### 7.4 Approaches to PQC

| Approach | Basis | Example |
|---|---|---|
| **Lattice-based** | Hardness of lattice problems (e.g., Learning With Errors) | CRYSTALS-Kyber, CRYSTALS-Dilithium |
| **Hash-based** | Security of hash functions | SPHINCS+ |
| **Code-based** | Error-correcting codes | McEliece |
| **Multivariate** | Solving systems of multivariate polynomial equations | Rainbow (broken in 2022) |

**Exam Tip:** At the basic level, just remember: PQC = encryption that quantum computers cannot break. The most promising approach is **lattice-based** cryptography.

---

## Checklist -- Practice MCQs

**Difficulty scale: [B] = Basic, [I] = Intermediate, [E] = Exam-Level**

---

**Q1. [B] Which type of malware can self-replicate and spread across networks WITHOUT any user action?**

(A) Virus
(B) Trojan
(C) Worm
(D) Spyware

---

**Q2. [B] What is the primary difference between IDS and IPS?**

(A) IDS is hardware; IPS is software
(B) IDS detects threats; IPS detects and prevents threats
(C) IDS works on the internet; IPS works on intranet
(D) IDS is more expensive than IPS

---

**Q3. [I] In a TLS handshake, which type of encryption is used for the actual data transfer after the handshake is complete?**

(A) Asymmetric encryption
(B) Symmetric encryption
(C) Hashing
(D) No encryption -- only authentication is established

---

**Q4. [I] Which of the following is TRUE about hashing?**

(A) Hashing is reversible if you have the correct key
(B) MD5 is currently considered the most secure hashing algorithm
(C) A hash function produces a fixed-length output regardless of input size
(D) SHA-256 produces a 512-bit hash output

---

**Q5. [E] Under the IT Act, 2000, Section 43 deals with damage to computer systems. How does Section 66 differ from Section 43?**

(A) Section 66 applies only to government computers
(B) Section 66 makes the same acts criminal when done dishonestly or fraudulently
(C) Section 66 applies only to hacking of social media accounts
(D) Section 66 provides civil remedies while Section 43 provides criminal penalties

---

**Q6. [E] Section 66A of the IT Act was struck down by the Supreme Court in which landmark case?**

(A) K.S. Puttaswamy v. Union of India
(B) Shreya Singhal v. Union of India
(C) Navtej Singh Johar v. Union of India
(D) Anuradha Bhasin v. Union of India

---

**Q7. [I] Multi-Factor Authentication (MFA) requires factors from at least how many DIFFERENT categories?**

(A) 1
(B) 2
(C) 3
(D) 4

---

**Q8. [I] Which encryption algorithm is the current standard that replaced DES?**

(A) RSA
(B) 3DES
(C) AES
(D) MD5

---

**Q9. [E] Under Section 69 of the IT Act, the government can direct agencies to intercept or monitor information. Failure to assist in decryption can lead to imprisonment of up to:**

(A) 1 year
(B) 3 years
(C) 5 years
(D) 7 years

---

**Q10. [E] Post-quantum cryptography algorithms are designed to be secure against quantum computers. The NIST-standardised ML-KEM (CRYSTALS-Kyber) algorithm is based on which mathematical approach?**

(A) Hash-based cryptography
(B) Code-based cryptography
(C) Lattice-based cryptography
(D) Multivariate polynomial cryptography

---

### Answer Key

| Question | Answer | Explanation |
|---|---|---|
| Q1 | **(C) Worm** | Worms self-replicate and spread automatically without user action. Viruses need a host file and user action. |
| Q2 | **(B)** | IDS only detects and alerts; IPS detects AND takes preventive action (blocking). |
| Q3 | **(B) Symmetric encryption** | Asymmetric is used during the handshake for key exchange; symmetric (faster) is used for actual data transfer. |
| Q4 | **(C)** | Hash functions always produce a fixed-length output. Hashing is NOT reversible. MD5 is broken. SHA-256 produces 256 bits. |
| Q5 | **(B)** | Section 43 is civil; Section 66 makes the same acts criminal when done dishonestly or fraudulently. |
| Q6 | **(B) Shreya Singhal v. Union of India** | The 2015 Supreme Court judgment struck down Section 66A as unconstitutional for violating free speech (Article 19(1)(a)). |
| Q7 | **(B) 2** | MFA requires at least 2 factors from DIFFERENT categories (know, have, are). Two passwords is not MFA. |
| Q8 | **(C) AES** | AES (Advanced Encryption Standard) replaced DES in 2001. RSA is asymmetric. MD5 is a hash, not encryption. |
| Q9 | **(D) 7 years** | Section 69 provides for imprisonment up to 7 years and a fine for non-compliance. |
| Q10 | **(C) Lattice-based cryptography** | ML-KEM (CRYSTALS-Kyber) is based on the Module Learning With Errors (MLWE) problem, a lattice problem. |

---

> **Revision Strategy:** Focus on the IT Act sections -- they are very high-yield for a police/telecom post. Know the section numbers, what they cover, and the punishments. For cryptography, remember the symmetric vs asymmetric distinction and the current standards (AES, RSA, SHA-256).
