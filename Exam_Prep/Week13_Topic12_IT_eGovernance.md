# Subject 12: IT Systems & e-Governance (10 Marks)

> **Week 13 | JKSSB Sub-Inspector (Telecommunication) Exam Prep**
> Difficulty: Basic --> Intermediate --> Exam-Level

---

## Table of Contents

1. [Web Application Basics](#1-web-application-basics)
2. [Client-Server Architecture](#2-client-server-architecture)
3. [Cloud Computing Fundamentals](#3-cloud-computing-fundamentals)
4. [Data Centres, Backup & Disaster Recovery](#4-data-centres-backup--disaster-recovery)
5. [Government IT Systems, Interoperability & APIs](#5-government-it-systems-interoperability--apis)
6. [Key Indian e-Governance Initiatives](#6-key-indian-e-governance-initiatives)
7. [Checklist -- Practice MCQs](#checklist----practice-mcqs)

---

## 1. Web Application Basics

### 1.1 What Is a Web Application? (Basic)

A **web application** is software that runs in a web browser (like Chrome, Firefox) instead of being installed on your computer. Examples: Gmail, online banking portals, e-Office.

Unlike desktop applications, web applications follow a **request-response model**: your browser (client) sends a request to a web server, and the server sends back the response (web page, data, etc.).

### 1.2 Client-Side vs Server-Side

| Aspect | **Client-Side** | **Server-Side** |
|---|---|---|
| **Where it runs** | In the user's browser | On the web server |
| **Languages** | HTML, CSS, JavaScript | Python, Java, PHP, Node.js, C# |
| **What it handles** | User interface, layout, animations, form validation | Business logic, database operations, authentication |
| **Visibility** | Code is visible to the user (View Source) | Code is hidden from the user |
| **Examples** | Dropdown menus, image sliders, real-time form checks | Login verification, fetching data from database, processing payments |

**Simple Analogy:**
- **Client-side** = What happens in the dining area of a restaurant (what the customer sees).
- **Server-side** = What happens in the kitchen (hidden from the customer, where the actual work happens).

### 1.3 HTTP and HTTPS

| Feature | **HTTP** | **HTTPS** |
|---|---|---|
| **Full Form** | HyperText Transfer Protocol | HyperText Transfer Protocol Secure |
| **Port Number** | 80 | 443 |
| **Security** | No encryption -- data in plain text | Encrypted using SSL/TLS |
| **Use Case** | Legacy/non-sensitive sites | Banking, government portals, any site handling sensitive data |
| **URL Indicator** | `http://` | `https://` with padlock icon |

**Key HTTP Methods:**

| Method | Purpose | Example |
|---|---|---|
| **GET** | Retrieve data from server | Loading a web page |
| **POST** | Send data to server | Submitting a form |
| **PUT** | Update existing data | Updating a profile |
| **DELETE** | Remove data | Deleting an account |

**Exam Tip:** HTTPS = HTTP + SSL/TLS. The "S" stands for Secure. Government portals must use HTTPS.

---

## 2. Client-Server Architecture

### 2.1 What Is Client-Server Architecture? (Basic)

In **client-server architecture**, tasks are divided between:
- **Client:** The device/software that requests a service (your browser, mobile app).
- **Server:** The device/software that provides the service (web server, database server).

This is the foundation of modern networked applications.

### 2.2 Types of Client-Server Architecture

#### 2-Tier Architecture

```
[ Client ] <-----> [ Server (Application + Database) ]
```

- **Structure:** Client communicates directly with the server.
- **How it works:** The client handles the user interface; the server handles both application logic and database.
- **Example:** A desktop application that connects directly to a database (e.g., a simple inventory system).
- **Pros:** Simple to set up; fast for small applications.
- **Cons:** Poor scalability; server overload with many clients; tight coupling.

#### 3-Tier Architecture

```
[ Client ] <-----> [ Application Server ] <-----> [ Database Server ]
```

- **Structure:** Three distinct layers, each on a separate tier.
  - **Tier 1 -- Presentation Layer (Client):** User interface (browser/app).
  - **Tier 2 -- Application Layer (Logic Server):** Business logic, processing.
  - **Tier 3 -- Data Layer (Database Server):** Data storage and retrieval.
- **Example:** Most modern web applications (e-Office, online banking).
- **Pros:** Better scalability; each tier can be maintained independently; improved security.
- **Cons:** More complex to develop and maintain.

#### N-Tier (Multi-Tier) Architecture

```
[ Client ] <-> [ Web Server ] <-> [ App Server ] <-> [ Cache ] <-> [ Database ]
```

- **Structure:** Extends 3-tier by adding more specialised layers (caching, message queues, microservices).
- **Example:** Large-scale systems like Amazon, Google, government cloud platforms.
- **Pros:** Highly scalable; each component can be optimised and scaled independently.
- **Cons:** Most complex to design and manage.

### 2.3 Comparison Table

| Feature | 2-Tier | 3-Tier | N-Tier |
|---|---|---|---|
| **Layers** | 2 | 3 | 4+ |
| **Scalability** | Low | Medium | High |
| **Complexity** | Low | Medium | High |
| **Security** | Low (direct DB access) | Better (DB hidden behind app server) | Best (multiple security layers) |
| **Use Case** | Small/local apps | Standard web apps | Enterprise/cloud apps |

---

## 3. Cloud Computing Fundamentals

### 3.1 What Is Cloud Computing? (Basic)

**Cloud computing** is the delivery of computing services -- servers, storage, databases, networking, software -- over the internet ("the cloud") on a **pay-as-you-go** basis, instead of owning and maintaining physical infrastructure.

**Simple Analogy:** Cloud computing is like using electricity from a power grid instead of running your own generator. You use what you need and pay for what you consume.

### 3.2 Service Models (IaaS, PaaS, SaaS)

This is a **high-priority exam topic**. Understand what each model provides and who manages what.

| Service Model | What It Provides | You Manage | Provider Manages | Example |
|---|---|---|---|---|
| **IaaS** (Infrastructure as a Service) | Virtual machines, storage, networking | OS, applications, data, middleware | Hardware, virtualisation, networking | AWS EC2, Azure VMs, Google Compute Engine |
| **PaaS** (Platform as a Service) | Development platform + runtime environment | Applications and data only | OS, middleware, runtime, servers | Google App Engine, Heroku, Azure App Service |
| **SaaS** (Software as a Service) | Complete ready-to-use software | Nothing (just use the software) | Everything | Gmail, Microsoft 365, Zoom, e-Office |

**The Pizza Analogy:**

| Model | Pizza Equivalent |
|---|---|
| **On-Premises** | Make pizza at home (you do everything) |
| **IaaS** | Buy dough and sauce, bake at home (infrastructure provided) |
| **PaaS** | Take-and-bake pizza (platform ready, you add toppings) |
| **SaaS** | Order delivery (everything done for you) |

### 3.3 Deployment Models

| Model | Description | Who Can Access | Example |
|---|---|---|---|
| **Public Cloud** | Services offered over the public internet; shared infrastructure | Anyone who pays | AWS, Azure, Google Cloud |
| **Private Cloud** | Dedicated infrastructure for a single organisation | Only that organisation | NIC Cloud (for Indian government), company's own cloud |
| **Hybrid Cloud** | Combination of public and private cloud with data/application portability | Organisation controls what goes where | Sensitive data on private cloud, general workloads on public cloud |
| **Community Cloud** | Shared by several organisations with common concerns (security, compliance) | Member organisations | GI Cloud (MeghRaj) for Indian government departments |

**Government Relevance:** The Indian government uses **GI Cloud (MeghRaj)** -- a strategic initiative to use cloud computing for e-Governance. NIC (National Informatics Centre) provides cloud infrastructure to government departments.

---

## 4. Data Centres, Backup & Disaster Recovery

### 4.1 Data Centres

A **data centre** is a facility that houses computer systems, servers, storage, and networking equipment. It is the physical backbone of IT infrastructure.

**Key Components:**
- **Servers:** Physical/virtual machines that process and store data.
- **Storage Systems:** SAN (Storage Area Network), NAS (Network Attached Storage).
- **Networking:** Switches, routers, firewalls, load balancers.
- **Power:** Redundant power supplies, UPS (Uninterruptible Power Supply), diesel generators.
- **Cooling:** HVAC systems, hot/cold aisle containment.
- **Physical Security:** Biometric access, CCTV, fire suppression.

**Data Centre Tiers (Uptime Institute):**

| Tier | Uptime | Downtime/Year | Redundancy |
|---|---|---|---|
| **Tier 1** | 99.671% | 28.8 hours | No redundancy |
| **Tier 2** | 99.741% | 22 hours | Partial redundancy |
| **Tier 3** | 99.982% | 1.6 hours | N+1 redundancy; concurrently maintainable |
| **Tier 4** | 99.995% | 26 minutes | 2N+1 redundancy; fault-tolerant |

### 4.2 Backup Strategies

| Backup Type | What It Backs Up | Speed | Storage | Restore Speed |
|---|---|---|---|---|
| **Full Backup** | All data every time | Slowest | Most storage | Fastest restore |
| **Incremental Backup** | Only data changed since LAST backup (full or incremental) | Fastest | Least storage | Slowest restore (needs full + all increments) |
| **Differential Backup** | All data changed since LAST FULL backup | Medium | Medium | Medium (needs full + latest differential) |

### 4.3 Disaster Recovery -- RPO and RTO

These two concepts are critical for exam preparation:

**RPO -- Recovery Point Objective**
- **Definition:** The maximum acceptable amount of data loss measured in time.
- **Question it answers:** "How much data can we afford to lose?"
- **Example:** If RPO = 1 hour, backups must happen at least every hour. If a disaster strikes, you lose at most 1 hour of data.

**RTO -- Recovery Time Objective**
- **Definition:** The maximum acceptable time to restore systems after a disaster.
- **Question it answers:** "How quickly must we be back online?"
- **Example:** If RTO = 4 hours, systems must be operational within 4 hours of a disaster.

| Concept | Measures | Direction | Example |
|---|---|---|---|
| **RPO** | Data loss tolerance | Looks **backward** (how much past data is lost) | RPO = 1 hour means losing at most 1 hour of data |
| **RTO** | Recovery time tolerance | Looks **forward** (how long until recovery) | RTO = 4 hours means systems back up within 4 hours |

**Exam Tip:** RPO = data loss; RTO = downtime. Lower values mean stricter requirements and higher costs.

---

## 5. Government IT Systems, Interoperability & APIs

### 5.1 Interoperability

**Interoperability** is the ability of different IT systems, applications, and organisations to communicate, exchange data, and use the information effectively.

**Why It Matters for Government:**
- Different departments use different systems (police, revenue, health, education).
- Citizens should not have to re-enter data across departments.
- **IndEA** (India Enterprise Architecture) framework defines standards for interoperability across government systems.

### 5.2 APIs (Application Programming Interfaces)

An **API** is a set of rules that allows one software application to interact with another. Think of it as a **waiter in a restaurant** -- you (client) tell the waiter (API) your order, the waiter goes to the kitchen (server), and brings back your food (response).

**Types of APIs:**
- **REST API** (Representational State Transfer): Most common; uses HTTP methods (GET, POST, PUT, DELETE); data format typically JSON.
- **SOAP API** (Simple Object Access Protocol): Older; uses XML; stricter standards.

**Government API Use:**
- Aadhaar eKYC API for identity verification.
- DigiLocker API for document access.
- UMANG APIs for integrated service delivery.
- India Stack: A set of open APIs for digital identity, payments, and data sharing.

### 5.3 India Stack

**India Stack** is a set of open APIs and digital public goods that enable identity, data, and payments at population scale:

| Layer | Component | Function |
|---|---|---|
| **Identity Layer** | Aadhaar | Unique biometric ID for 1.3 billion citizens |
| **Payments Layer** | UPI (Unified Payments Interface) | Instant digital payments |
| **Data Layer** | DigiLocker, Account Aggregator | Secure data sharing with consent |
| **Consent Layer** | Electronic Consent Framework | User controls who accesses their data |

---

## 6. Key Indian e-Governance Initiatives

### 6.1 Digital India Programme

- **Launched:** 1 July 2015 by the Government of India.
- **Vision:** Transform India into a digitally empowered society and knowledge economy.
- **Three Key Areas:**
  1. **Digital Infrastructure** as a utility to every citizen.
  2. **Governance and Services** on demand.
  3. **Digital Empowerment** of citizens.
- **Nine Pillars:** Broadband highways, universal mobile access, public internet access, e-Governance, e-Kranti, information for all, electronics manufacturing, IT for jobs, early harvest programmes.

### 6.2 Aadhaar (UIDAI)

| Feature | Details |
|---|---|
| **What** | 12-digit unique identification number |
| **Issued by** | UIDAI (Unique Identification Authority of India) |
| **Based on** | Biometric (fingerprint, iris) + demographic data |
| **Legal basis** | Aadhaar (Targeted Delivery of Financial and Other Subsidies, Benefits and Services) Act, 2016 |
| **Key uses** | eKYC, DBT (Direct Benefit Transfer), authentication for government services |
| **Privacy ruling** | K.S. Puttaswamy v. Union of India (2018) -- Supreme Court upheld Aadhaar with restrictions |

### 6.3 DigiLocker

- **What:** Cloud-based platform for storing and sharing digital documents.
- **Purpose:** Reduce physical documents; enable paperless governance.
- **Key Features:**
  - Documents issued by government agencies are stored in the cloud.
  - Aadhaar-linked; documents have legal validity under IT Act.
  - Citizens can access certificates (marksheets, driving licence, Aadhaar, PAN) digitally.

### 6.4 UMANG (Unified Mobile Application for New-age Governance)

- **What:** Single mobile app providing access to multiple government services.
- **Launched:** 2017.
- **Services:** 1,500+ services from 300+ government departments.
- **Examples:** PF balance check, Aadhaar services, digital land records, income tax filing.
- **Key Feature:** Unified interface -- one app, many services.

### 6.5 e-Office

- **What:** Digital workplace solution for government offices.
- **Developed by:** NIC (National Informatics Centre).
- **Purpose:** Replace manual file movement with electronic workflow.
- **Key Modules:**
  - **eFile:** Electronic file management and movement.
  - **eLeave:** Leave management.
  - **eTour:** Tour/travel management.
  - **KMS:** Knowledge Management System.
- **Benefit:** Transparency, accountability, faster decision-making, reduced paper use.

### 6.6 Other Important Initiatives

| Initiative | Purpose |
|---|---|
| **CCTNS** (Crime and Criminal Tracking Network & Systems) | Connects police stations across India for tracking crime and criminals -- directly relevant to your role |
| **ICJS** (Inter-operable Criminal Justice System) | Connects police, courts, jails, prosecution, forensics |
| **GeM** (Government e-Marketplace) | Online procurement for government departments |
| **GSTN** (Goods and Services Tax Network) | IT backbone for GST |
| **NREGASoft** | MIS for MGNREGA scheme |
| **Bharat Net** | Broadband connectivity to all gram panchayats |

**Law Enforcement Relevance:** As an SI (Telecom), **CCTNS** and **ICJS** are the most directly relevant systems. CCTNS enables online FIR registration, criminal database search, and inter-state information sharing.

---

## Checklist -- Practice MCQs

**Difficulty scale: [B] = Basic, [I] = Intermediate, [E] = Exam-Level**

---

**Q1. [B] In cloud computing, which service model provides ready-to-use software over the internet with no management responsibility for the user?**

(A) IaaS
(B) PaaS
(C) SaaS
(D) DaaS

---

**Q2. [B] What does HTTPS add over HTTP?**

(A) Faster speed
(B) Compression
(C) Encryption via SSL/TLS
(D) Larger file transfer capability

---

**Q3. [I] In a 3-tier architecture, which tier handles the business logic?**

(A) Presentation tier
(B) Application tier
(C) Data tier
(D) Network tier

---

**Q4. [I] Which backup type requires the LEAST storage space?**

(A) Full backup
(B) Differential backup
(C) Incremental backup
(D) Mirror backup

---

**Q5. [I] RPO (Recovery Point Objective) measures:**

(A) How quickly systems must be restored after a disaster
(B) The maximum tolerable amount of data loss in time
(C) The total cost of disaster recovery
(D) The number of backup copies required

---

**Q6. [E] Which Indian initiative directly connects police stations across India for tracking crime and criminals?**

(A) Digital India
(B) UMANG
(C) CCTNS
(D) DigiLocker

---

**Q7. [I] In the IaaS cloud model, who is responsible for managing the operating system?**

(A) The cloud provider
(B) The customer
(C) Both jointly
(D) Neither -- it is automated

---

**Q8. [E] Which cloud deployment model does the Indian government's GI Cloud (MeghRaj) primarily represent?**

(A) Public Cloud
(B) Private Cloud
(C) Community Cloud
(D) Hybrid Cloud

---

**Q9. [B] DigiLocker is a platform for:**

(A) Online payments
(B) Cloud-based storage and sharing of digital documents
(C) Video conferencing for government officials
(D) Cyber crime reporting

---

**Q10. [E] In context of disaster recovery, if an organisation has an RTO of 2 hours and an RPO of 30 minutes, which statement is correct?**

(A) Systems must be back online within 30 minutes, with at most 2 hours of data loss
(B) Systems must be back online within 2 hours, with at most 30 minutes of data loss
(C) Both RTO and RPO must be zero for critical systems
(D) RPO determines recovery time and RTO determines data loss

---

### Answer Key

| Question | Answer | Explanation |
|---|---|---|
| Q1 | **(C) SaaS** | Software as a Service provides complete, ready-to-use applications. The user manages nothing -- just uses the software (e.g., Gmail, Zoom). |
| Q2 | **(C) Encryption via SSL/TLS** | HTTPS = HTTP + SSL/TLS encryption. It adds security through encryption, not speed or compression. |
| Q3 | **(B) Application tier** | Tier 1 = Presentation (UI), Tier 2 = Application (business logic), Tier 3 = Data (database). |
| Q4 | **(C) Incremental backup** | Incremental only backs up changes since the last backup of any type, requiring the least storage. |
| Q5 | **(B)** | RPO = maximum tolerable data loss (measured in time). RTO = maximum tolerable downtime. |
| Q6 | **(C) CCTNS** | Crime and Criminal Tracking Network & Systems connects 15,000+ police stations across India. |
| Q7 | **(B) The customer** | In IaaS, the provider manages hardware/virtualisation; the customer manages OS, middleware, applications, and data. |
| Q8 | **(C) Community Cloud** | GI Cloud (MeghRaj) is shared among government departments -- a community cloud model. |
| Q9 | **(B)** | DigiLocker is a cloud-based platform for storing, sharing, and verifying digital documents with legal validity. |
| Q10 | **(B)** | RTO = 2 hours means systems must be restored within 2 hours. RPO = 30 minutes means at most 30 minutes of data can be lost. |

---

> **Revision Strategy:** Focus on the cloud computing service models (IaaS vs PaaS vs SaaS) -- these are very commonly tested. Also memorise the key Indian e-Governance initiatives and their purposes. For the police/telecom context, CCTNS and ICJS are essential to know.
