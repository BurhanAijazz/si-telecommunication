# Subject 13: Database Management Systems (10 Marks)

> **Week 13 | JKSSB Sub-Inspector (Telecommunication) Exam Prep**
> Difficulty: Basic --> Intermediate --> Exam-Level

---

## Table of Contents

1. [Database System Architecture & Data Models](#1-database-system-architecture--data-models)
2. [Relational Databases & SQL Concepts](#2-relational-databases--sql-concepts)
3. [Database Design & Normalization](#3-database-design--normalization)
4. [Integrity Constraints](#4-integrity-constraints)
5. [Transaction Processing & Concurrency Control](#5-transaction-processing--concurrency-control)
6. [Storage, Indexing & File Organization](#6-storage-indexing--file-organization)
7. [Database Security](#7-database-security)
8. [Checklist -- Practice MCQs](#checklist----practice-mcqs)

---

## 1. Database System Architecture & Data Models

### 1.1 What Is a Database? (Basic)

A **database** is an organised collection of structured data stored electronically. A **Database Management System (DBMS)** is the software that manages, stores, retrieves, and secures this data.

**Simple Analogy:** If a database is a filing cabinet, then the DBMS is the librarian who organises, retrieves, and protects the files.

### 1.2 Three-Schema Architecture (ANSI/SPARC)

The standard database architecture has three levels of abstraction:

| Level | Also Called | What It Describes | Who Uses It |
|---|---|---|---|
| **External Level** | View Level | Individual user views; different users see different subsets of data | End users, applications |
| **Conceptual Level** | Logical Level | Overall logical structure of the entire database (tables, relationships) | Database designers, DBAs |
| **Internal Level** | Physical Level | How data is physically stored on disk (file structures, indexing) | System implementers |

**Key Concept:** This separation provides **data independence**:
- **Logical Data Independence:** Changes at the conceptual level do not affect external views.
- **Physical Data Independence:** Changes at the internal level do not affect the conceptual schema.

### 1.3 Data Models

A **data model** defines how data is structured, stored, and manipulated.

| Data Model | Structure | Relationships | Example/DBMS |
|---|---|---|---|
| **Hierarchical** | Tree structure (parent-child) | One-to-many only; each child has exactly one parent | IBM IMS; like a folder structure |
| **Network** | Graph structure | Many-to-many; a child can have multiple parents | IDMS; more flexible than hierarchical |
| **Relational** | Tables (rows and columns) | Relationships through foreign keys | MySQL, PostgreSQL, Oracle, SQL Server |
| **Object-Oriented** | Objects (like in OOP) | Inheritance, encapsulation | ObjectDB, db4o; combines data and methods |

**Exam Tip:** The **relational model** (proposed by E.F. Codd in 1970) is by far the most important for the exam. Almost all government systems use relational databases.

### 1.4 Key Terminology for Relational Model

| Term | Formal Name | Everyday Name |
|---|---|---|
| **Relation** | Relation | Table |
| **Tuple** | Tuple | Row / Record |
| **Attribute** | Attribute | Column / Field |
| **Domain** | Domain | Set of allowed values for an attribute |
| **Degree** | Degree | Number of columns |
| **Cardinality** | Cardinality | Number of rows |

---

## 2. Relational Databases & SQL Concepts

### 2.1 What Is SQL? (Basic)

**SQL** (Structured Query Language) is the standard language for interacting with relational databases. It allows you to create, read, update, and delete data.

### 2.2 SQL Sub-Languages

| Category | Full Form | Purpose | Key Commands |
|---|---|---|---|
| **DDL** | Data Definition Language | Define/modify database structure | `CREATE`, `ALTER`, `DROP`, `TRUNCATE` |
| **DML** | Data Manipulation Language | Manipulate/query data | `SELECT`, `INSERT`, `UPDATE`, `DELETE` |
| **DCL** | Data Control Language | Control access/permissions | `GRANT`, `REVOKE` |
| **TCL** | Transaction Control Language | Manage transactions | `COMMIT`, `ROLLBACK`, `SAVEPOINT` |

### 2.3 Key SQL Commands Explained

#### DDL Commands

```sql
-- CREATE: Create a new table
CREATE TABLE FIR_Records (
    FIR_No      INT PRIMARY KEY,
    Date_Filed  DATE NOT NULL,
    Station     VARCHAR(100),
    Offence     VARCHAR(200),
    Status      VARCHAR(50) DEFAULT 'Open'
);

-- ALTER: Modify table structure
ALTER TABLE FIR_Records ADD COLUMN Officer_Name VARCHAR(100);

-- DROP: Delete entire table (structure + data)
DROP TABLE FIR_Records;

-- TRUNCATE: Delete all rows but keep table structure
TRUNCATE TABLE FIR_Records;
```

**Exam Tip:** `DROP` removes the table entirely; `TRUNCATE` removes all data but keeps the structure; `DELETE` can remove specific rows using a WHERE clause.

#### DML Commands

```sql
-- SELECT: Retrieve data
SELECT FIR_No, Offence, Status FROM FIR_Records WHERE Status = 'Open';

-- INSERT: Add new data
INSERT INTO FIR_Records (FIR_No, Date_Filed, Station, Offence)
VALUES (101, '2026-01-15', 'Lal Chowk PS', 'Theft - IPC 379');

-- UPDATE: Modify existing data
UPDATE FIR_Records SET Status = 'Closed' WHERE FIR_No = 101;

-- DELETE: Remove specific rows
DELETE FROM FIR_Records WHERE Status = 'Closed' AND Date_Filed < '2025-01-01';
```

#### DCL Commands

```sql
-- GRANT: Give permissions
GRANT SELECT, INSERT ON FIR_Records TO constable_user;

-- REVOKE: Remove permissions
REVOKE INSERT ON FIR_Records FROM constable_user;
```

### 2.4 Important SQL Clauses and Operators

| Clause/Operator | Purpose | Example |
|---|---|---|
| `WHERE` | Filter rows | `WHERE Status = 'Open'` |
| `ORDER BY` | Sort results | `ORDER BY Date_Filed DESC` |
| `GROUP BY` | Group rows for aggregation | `GROUP BY Station` |
| `HAVING` | Filter groups (like WHERE for groups) | `HAVING COUNT(*) > 10` |
| `JOIN` | Combine rows from multiple tables | `INNER JOIN`, `LEFT JOIN`, `RIGHT JOIN`, `FULL JOIN` |
| `DISTINCT` | Remove duplicate rows | `SELECT DISTINCT Station` |
| `LIKE` | Pattern matching | `WHERE Name LIKE 'A%'` (starts with A) |
| `IN` | Match against a list | `WHERE Status IN ('Open', 'Pending')` |
| `BETWEEN` | Range filter | `WHERE Date_Filed BETWEEN '2025-01-01' AND '2025-12-31'` |

### 2.5 Types of Keys

| Key Type | Definition | Example |
|---|---|---|
| **Primary Key** | Uniquely identifies each row; cannot be NULL | FIR_No in FIR_Records table |
| **Foreign Key** | References primary key of another table; establishes relationship | Station_ID in FIR_Records referencing Stations table |
| **Candidate Key** | Any column(s) that could serve as primary key | Aadhaar number, PAN number (either could be PK) |
| **Super Key** | Any set of attributes that uniquely identifies a row | {FIR_No}, {FIR_No, Date_Filed}, etc. |
| **Composite Key** | Primary key made of two or more columns | {Student_ID, Course_ID} in an enrollment table |

---

## 3. Database Design & Normalization

### 3.1 What Is Normalization? (Basic)

**Normalization** is the process of organising a database to **reduce redundancy** (duplicate data) and **prevent anomalies** (insertion, update, deletion problems).

Think of it as cleaning up a messy spreadsheet where the same information is repeated in many places.

### 3.2 Types of Anomalies

| Anomaly | Problem | Example |
|---|---|---|
| **Insertion Anomaly** | Cannot insert data without other unrelated data | Cannot add a new police station without having an FIR |
| **Update Anomaly** | Changing data in one place but not others | Station address updated in one row but not others |
| **Deletion Anomaly** | Deleting data unintentionally removes other needed data | Deleting the last FIR of a station removes station info |

### 3.3 Normal Forms

#### First Normal Form (1NF)

**Rule:** Each cell must contain a **single atomic value** (no multi-valued or composite attributes). Each row must be unique.

**Before 1NF (violation):**

| Officer_ID | Name | Phone_Numbers |
|---|---|---|
| 101 | Rajan | 9876543210, 9123456789 |

**After 1NF:**

| Officer_ID | Name | Phone_Number |
|---|---|---|
| 101 | Rajan | 9876543210 |
| 101 | Rajan | 9123456789 |

#### Second Normal Form (2NF)

**Rule:** Must be in 1NF AND every **non-key attribute** must depend on the **entire primary key** (no partial dependency).

This is relevant only when you have a **composite primary key**.

**Before 2NF (violation):**

| **Student_ID** | **Course_ID** | Student_Name | Course_Name | Grade |
|---|---|---|---|---|
| S1 | C1 | Amit | DBMS | A |

Here, `Student_Name` depends only on `Student_ID` (not on the full key {Student_ID, Course_ID}) -- this is a **partial dependency**.

**After 2NF:** Split into separate tables:

**Students Table:**

| Student_ID | Student_Name |
|---|---|
| S1 | Amit |

**Courses Table:**

| Course_ID | Course_Name |
|---|---|
| C1 | DBMS |

**Enrollment Table:**

| Student_ID | Course_ID | Grade |
|---|---|---|
| S1 | C1 | A |

#### Third Normal Form (3NF)

**Rule:** Must be in 2NF AND no **transitive dependency** (non-key attribute must not depend on another non-key attribute).

**Before 3NF (violation):**

| Employee_ID | Department_ID | Department_Name |
|---|---|---|
| E1 | D1 | Telecom |

Here, `Department_Name` depends on `Department_ID` which depends on `Employee_ID`. This is a **transitive dependency**: Employee_ID --> Department_ID --> Department_Name.

**After 3NF:** Split into:

**Employees:**

| Employee_ID | Department_ID |
|---|---|
| E1 | D1 |

**Departments:**

| Department_ID | Department_Name |
|---|---|
| D1 | Telecom |

#### Boyce-Codd Normal Form (BCNF)

**Rule:** Must be in 3NF AND for every functional dependency X --> Y, X must be a **super key**.

BCNF is a stricter version of 3NF. The difference arises only in rare cases where:
- A table has multiple candidate keys.
- Those candidate keys overlap.

**Exam Tip:** For most exam questions, BCNF = "stricter 3NF." If asked the difference: 3NF allows non-key attributes to depend on candidate keys; BCNF requires every determinant to be a super key.

### 3.4 Summary of Normal Forms

| Normal Form | Eliminates | Key Rule |
|---|---|---|
| **1NF** | Multi-valued attributes | Atomic values only |
| **2NF** | Partial dependencies | Full dependency on entire PK |
| **3NF** | Transitive dependencies | Non-key depends only on the key |
| **BCNF** | All remaining anomalies from FDs | Every determinant is a super key |

---

## 4. Integrity Constraints

Integrity constraints are rules enforced by the DBMS to maintain data accuracy and consistency.

### 4.1 Types of Integrity Constraints

| Constraint Type | What It Ensures | Example |
|---|---|---|
| **Entity Integrity** | Every table must have a primary key, and the primary key **cannot be NULL** | FIR_No cannot be NULL in FIR_Records |
| **Referential Integrity** | A foreign key must either reference a valid primary key in another table or be NULL | Station_ID in FIR_Records must exist in Stations table |
| **Domain Integrity** | Values in a column must belong to a defined domain (valid data type, range, format) | Age must be between 0 and 150; Status must be 'Open', 'Closed', or 'Pending' |

### 4.2 Referential Integrity Actions

When a referenced row is deleted or updated, the DBMS can:

| Action | Behaviour |
|---|---|
| **CASCADE** | Automatically delete/update matching foreign key rows |
| **SET NULL** | Set the foreign key to NULL |
| **SET DEFAULT** | Set the foreign key to its default value |
| **RESTRICT / NO ACTION** | Prevent the delete/update if foreign key references exist |

---

## 5. Transaction Processing & Concurrency Control

### 5.1 What Is a Transaction? (Basic)

A **transaction** is a logical unit of work that consists of one or more database operations. Either ALL operations succeed, or NONE of them take effect.

**Classic Example -- Bank Transfer:**
1. Debit Rs. 1000 from Account A.
2. Credit Rs. 1000 to Account B.

Both steps must succeed together. If step 1 succeeds but step 2 fails, money disappears -- this must not happen.

### 5.2 ACID Properties

**ACID** is the foundation of reliable transaction processing. This is a **very high-priority exam topic**.

| Property | Meaning | Explanation | Example |
|---|---|---|---|
| **A -- Atomicity** | All or nothing | A transaction either completes fully or is rolled back entirely | If transfer fails midway, both accounts revert to original state |
| **C -- Consistency** | Valid state to valid state | Database moves from one consistent state to another; all rules/constraints are maintained | Total money in both accounts remains the same |
| **I -- Isolation** | Transactions do not interfere | Concurrent transactions execute as if they were running one at a time | Two users withdrawing from the same account simultaneously see correct balances |
| **D -- Durability** | Committed changes are permanent | Once a transaction is committed, changes survive system crashes | After successful transfer, even a power failure preserves the result |

**Memory Aid:** "**A**tomic **C**onsistent **I**solated **D**urable" -- ACID keeps your database "clean."

### 5.3 Transaction States

```
Active --> Partially Committed --> Committed
  |                |
  v                v
Failed ---------> Aborted (Rolled Back)
```

| State | Description |
|---|---|
| **Active** | Transaction is executing |
| **Partially Committed** | Final operation executed; waiting for confirmation |
| **Committed** | Successfully completed; changes are permanent |
| **Failed** | An error occurred; cannot proceed |
| **Aborted** | Transaction rolled back; database restored to pre-transaction state |

### 5.4 Concurrency Control

When multiple transactions run simultaneously, problems can occur:

| Problem | Description | Example |
|---|---|---|
| **Dirty Read** | Transaction reads data written by an uncommitted transaction | T1 updates salary; T2 reads it; T1 rolls back -- T2 has incorrect data |
| **Lost Update** | Two transactions update the same data; one overwrite is lost | T1 and T2 both read balance=1000; T1 writes 900; T2 writes 800 -- T1's update is lost |
| **Non-Repeatable Read** | Same query in a transaction returns different results | T1 reads balance=1000; T2 updates it to 900 and commits; T1 reads again and gets 900 |

### 5.5 Locking

**Locks** are the primary mechanism for concurrency control.

| Lock Type | Also Called | Allows |
|---|---|---|
| **Shared Lock (S)** | Read Lock | Multiple transactions can read simultaneously; no writing allowed |
| **Exclusive Lock (X)** | Write Lock | Only one transaction can read/write; all others blocked |

**Lock Compatibility:**

| | Shared (S) | Exclusive (X) |
|---|---|---|
| **Shared (S)** | Compatible | NOT Compatible |
| **Exclusive (X)** | NOT Compatible | NOT Compatible |

#### Two-Phase Locking (2PL)

A protocol that guarantees **serializability** (correct concurrent execution):
1. **Growing Phase:** Transaction can acquire locks but cannot release any.
2. **Shrinking Phase:** Transaction can release locks but cannot acquire new ones.

### 5.6 Deadlock

A **deadlock** occurs when two or more transactions are waiting for each other to release locks, creating a circular wait.

**Example:**
- T1 holds Lock on A, waiting for Lock on B.
- T2 holds Lock on B, waiting for Lock on A.
- Neither can proceed -- **deadlock**.

**Deadlock Handling:**
- **Prevention:** Ensure deadlocks cannot occur (e.g., lock ordering, timeout).
- **Detection:** Use a wait-for graph; if a cycle exists, deadlock is detected.
- **Resolution:** Abort one transaction (the "victim") and restart it.

---

## 6. Storage, Indexing & File Organization

### 6.1 File Organization

| Type | How Records Are Stored | Best For |
|---|---|---|
| **Heap (Unordered)** | Records stored in order of insertion; no sorting | Fast inserts; slow searches |
| **Sequential (Ordered)** | Records sorted by a key field | Range queries; slow inserts (need to maintain order) |
| **Hashed** | Records stored based on hash function applied to a key | Very fast exact-match lookups; poor for range queries |

### 6.2 Indexing

An **index** is a data structure that speeds up data retrieval (like an index at the back of a textbook).

| Index Type | Structure | Best For | Limitation |
|---|---|---|---|
| **B-Tree Index** | Balanced tree; nodes contain keys and pointers | Range queries AND exact match; general purpose | Moderate space overhead |
| **B+ Tree Index** | Variant of B-Tree; all data pointers at leaf level; leaves linked | Most common in RDBMS; excellent for range queries | Slightly more complex |
| **Hash Index** | Hash table; key is hashed to a bucket | Very fast exact-match queries (O(1) average) | Cannot handle range queries; hash collisions |

### 6.3 B-Tree vs B+ Tree

| Feature | B-Tree | B+ Tree |
|---|---|---|
| **Data pointers** | At both internal and leaf nodes | Only at leaf nodes |
| **Leaf nodes linked?** | No | Yes (linked list) |
| **Range queries** | Slower (need to traverse tree) | Faster (scan linked leaf nodes) |
| **Search performance** | May find data at any level | Always goes to leaf level |
| **Used in** | Some older systems | Most modern RDBMS (MySQL, PostgreSQL, Oracle) |

### 6.4 Types of Indexes

| Type | Description |
|---|---|
| **Primary Index** | Built on the primary key; one per table |
| **Secondary Index** | Built on non-key attributes; can have multiple per table |
| **Clustered Index** | Data rows are physically sorted according to the index; only ONE per table |
| **Non-Clustered Index** | Separate structure pointing to data rows; multiple per table |
| **Dense Index** | Index entry for EVERY record |
| **Sparse Index** | Index entry for SOME records (e.g., one per block) |

---

## 7. Database Security

### 7.1 Access Control

Database security starts with controlling who can access what:

- **Authentication:** Verify user identity (username/password, certificate).
- **Authorisation:** Determine what the authenticated user can do (GRANT/REVOKE in SQL).
- **Views:** Create virtual tables that expose only permitted data to specific users.

```sql
-- Create a view that hides sensitive columns
CREATE VIEW Public_FIR AS
SELECT FIR_No, Date_Filed, Station, Status
FROM FIR_Records;
-- This view hides Offence details and Officer information
```

### 7.2 Encryption in Databases

| Level | What Is Encrypted | Example |
|---|---|---|
| **Column-Level Encryption** | Specific sensitive columns | Aadhaar number, phone number |
| **Transparent Data Encryption (TDE)** | Entire database files at rest | Oracle TDE, SQL Server TDE |
| **Transport Encryption** | Data in transit between client and server | SSL/TLS connections to database |

### 7.3 SQL Injection

**SQL Injection** is a web security vulnerability where an attacker inserts malicious SQL code through user input fields to manipulate the database.

**Example of Vulnerable Code:**

```
Username: admin' OR '1'='1' --
Password: anything
```

This could turn a login query into:
```sql
SELECT * FROM Users WHERE Username = 'admin' OR '1'='1' --' AND Password = 'anything'
```
Since `'1'='1'` is always true, the attacker bypasses authentication.

**Prevention Methods:**

| Method | How It Helps |
|---|---|
| **Parameterised Queries (Prepared Statements)** | Separate SQL code from user input; most effective defence |
| **Input Validation** | Reject unexpected characters (quotes, semicolons) |
| **Stored Procedures** | Encapsulate SQL logic on the server side |
| **Least Privilege** | Application database account should have minimum permissions |
| **Web Application Firewall (WAF)** | Detects and blocks SQL injection patterns |

**Law Enforcement Relevance:** SQL injection attacks on government databases (CCTNS, e-FIR systems) could compromise criminal records. As an SI (Telecom), awareness of this threat is essential.

---

## Checklist -- Practice MCQs

**Difficulty scale: [B] = Basic, [I] = Intermediate, [E] = Exam-Level**

---

**Q1. [B] In a relational database, a row is also known as:**

(A) Attribute
(B) Tuple
(C) Domain
(D) Degree

---

**Q2. [B] Which SQL command is used to remove all rows from a table while keeping the table structure intact?**

(A) DELETE
(B) DROP
(C) TRUNCATE
(D) REMOVE

---

**Q3. [I] Which normal form eliminates transitive dependencies?**

(A) 1NF
(B) 2NF
(C) 3NF
(D) BCNF

---

**Q4. [I] The ACID property that ensures a transaction either completes fully or not at all is:**

(A) Atomicity
(B) Consistency
(C) Isolation
(D) Durability

---

**Q5. [I] A foreign key in a table references:**

(A) A candidate key in the same table
(B) The primary key of another table
(C) Any column in another table
(D) The index of another table

---

**Q6. [E] In Two-Phase Locking (2PL), during which phase can a transaction release locks?**

(A) Growing phase
(B) Shrinking phase
(C) Both phases
(D) Neither phase -- locks are released only after commit

---

**Q7. [I] Which type of index is best suited for range queries?**

(A) Hash Index
(B) B+ Tree Index
(C) Bitmap Index
(D) Reverse Index

---

**Q8. [E] Which SQL sub-language includes the GRANT and REVOKE commands?**

(A) DDL
(B) DML
(C) DCL
(D) TCL

---

**Q9. [E] The most effective method to prevent SQL injection attacks is:**

(A) Using CAPTCHA on login forms
(B) Using parameterised queries (prepared statements)
(C) Encrypting the database
(D) Using HTTPS

---

**Q10. [E] A deadlock in a database occurs when:**

(A) A transaction takes too long to execute
(B) Two or more transactions wait for each other to release locks, forming a circular wait
(C) The database runs out of storage space
(D) A transaction reads uncommitted data from another transaction

---

### Answer Key

| Question | Answer | Explanation |
|---|---|---|
| Q1 | **(B) Tuple** | In relational terminology: Row = Tuple, Column = Attribute, Table = Relation. |
| Q2 | **(C) TRUNCATE** | TRUNCATE removes all rows but keeps the table structure. DROP removes the entire table. DELETE can target specific rows with WHERE. |
| Q3 | **(C) 3NF** | 1NF eliminates multi-valued attributes; 2NF eliminates partial dependencies; 3NF eliminates transitive dependencies. |
| Q4 | **(A) Atomicity** | Atomicity = "all or nothing." Consistency = valid state. Isolation = no interference. Durability = permanent after commit. |
| Q5 | **(B)** | A foreign key references the primary key (or a candidate key) of another table to establish a relationship. |
| Q6 | **(B) Shrinking phase** | In 2PL: Growing phase = acquire locks only; Shrinking phase = release locks only. |
| Q7 | **(B) B+ Tree Index** | B+ Tree has linked leaf nodes enabling efficient sequential/range scanning. Hash indexes only support exact-match queries. |
| Q8 | **(C) DCL** | Data Control Language includes GRANT (give permissions) and REVOKE (remove permissions). |
| Q9 | **(B)** | Parameterised queries (prepared statements) separate SQL code from user input, preventing injection. HTTPS protects data in transit but not against injection. |
| Q10 | **(B)** | Deadlock = circular wait between transactions holding locks that others need. Option (D) describes a dirty read. |

---

> **Revision Strategy:** Prioritise ACID properties, normal forms (with examples), SQL sub-languages, and key types. For SQL commands, know the difference between DDL/DML/DCL/TCL categories. B+ Tree indexing and SQL injection prevention are frequently tested topics.
