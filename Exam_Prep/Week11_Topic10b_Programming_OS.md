# Subject 10 (Part 2): Programming, Data Structures & Operating Systems

> **JKSSB Sub-Inspector (Telecommunication) Exam Prep**
> Part of the 20-Marks Computer Science & Networking subject
> Difficulty: Basic --> Intermediate --> Exam-Level

---

## Table of Contents

1. [Programming Fundamentals](#1-programming-fundamentals)
2. [Object-Oriented Programming (OOP)](#2-object-oriented-programming-oop)
3. [Data Structures and Algorithms](#3-data-structures-and-algorithms)
4. [Operating Systems](#4-operating-systems)
5. [Checklist -- Practice MCQs](#5-checklist----practice-mcqs)

---

## 1. Programming Fundamentals

### 1.1 What Is a Program? (Beginner Explanation)

A **program** is a set of instructions written in a programming language that tells a computer what to do. Just like a recipe tells you the steps to cook a dish, a program tells the computer the steps to solve a problem.

**Programming = Problem Solving + Logic + Syntax**

### 1.2 Logic Building

Logic building is the ability to break down a problem into small, sequential steps. Before writing code, you should:

1. **Understand the problem** -- What is the input? What is the expected output?
2. **Plan the solution** -- Write the steps in plain English (pseudocode) or draw a flowchart.
3. **Code the solution** -- Translate steps into a programming language.
4. **Test and debug** -- Check if it works; fix errors.

**Example: Find the largest of three numbers**

```
Step 1: Read three numbers A, B, C
Step 2: If A > B and A > C, then largest = A
Step 3: Else if B > C, then largest = B
Step 4: Else largest = C
Step 5: Print largest
```

### 1.3 Data Types

A **data type** defines what kind of value a variable can hold and what operations can be performed on it.

| Data Type | Description | Example Values | Typical Size |
|-----------|-------------|---------------|-------------|
| **int** (Integer) | Whole numbers (no decimal) | -5, 0, 42, 1000 | 4 bytes (32 bits) |
| **float** | Decimal numbers (single precision) | 3.14, -0.5, 2.0 | 4 bytes |
| **double** | Decimal numbers (double precision) | 3.14159265358979 | 8 bytes |
| **char** | A single character | 'A', 'z', '5', '@' | 1 byte |
| **string** | A sequence of characters | "Hello", "JKSSB" | Varies |
| **bool** (Boolean) | True or False only | true, false | 1 byte |

**Key concept -- Variable:** A named container that stores a value.

```
int age = 25;       // integer variable
float price = 99.5; // decimal variable
char grade = 'A';   // character variable
```

### 1.4 Operators

| Category | Operators | Example |
|----------|----------|---------|
| **Arithmetic** | +, -, *, /, % (modulus) | 10 % 3 = 1 (remainder) |
| **Comparison** | ==, !=, <, >, <=, >= | 5 > 3 is true |
| **Logical** | AND (&&), OR (\|\|), NOT (!) | (true && false) = false |
| **Assignment** | =, +=, -=, *=, /= | x += 5 means x = x + 5 |

### 1.5 Control Structures

#### 1.5.1 Conditional Statements (Decision Making)

| Structure | When to Use | Syntax Pattern |
|-----------|------------|----------------|
| **if** | Single condition check | if (condition) { ... } |
| **if-else** | Two-way decision | if (condition) { ... } else { ... } |
| **if-else if-else** | Multiple conditions | if (c1) { } else if (c2) { } else { } |
| **switch-case** | When checking one variable against many values | switch(var) { case 1: ...; case 2: ...; default: ... } |

#### 1.5.2 Loops (Repetition)

| Loop | When to Use | How It Works |
|------|------------|-------------|
| **for** | When you know the number of iterations in advance | for (init; condition; update) { ... } |
| **while** | When you do NOT know iterations in advance; check condition first | while (condition) { ... } |
| **do-while** | Similar to while, but executes at least once | do { ... } while (condition); |

**Example -- Print numbers 1 to 5:**

```
for (int i = 1; i <= 5; i++) {
    print(i);
}
// Output: 1 2 3 4 5
```

**Beginner analogy:**
- **for loop:** "Do this task exactly 10 times."
- **while loop:** "Keep doing this until I say stop."
- **do-while loop:** "Do it once first, then keep going if needed."

### 1.6 Functions

A **function** is a reusable block of code that performs a specific task. It helps avoid repeating code.

**Structure:**

```
returnType functionName(parameters) {
    // body -- the actual code
    return value;
}
```

**Example:**

```
int add(int a, int b) {
    return a + b;
}

// Calling the function:
int result = add(5, 3);  // result = 8
```

**Benefits of functions:**
- **Reusability** -- Write once, use many times
- **Modularity** -- Break complex problems into smaller parts
- **Readability** -- Code is easier to understand
- **Debugging** -- Easier to find and fix errors

| Term | Meaning |
|------|---------|
| **Parameters** | Variables listed in the function definition (a, b above) |
| **Arguments** | Actual values passed when calling the function (5, 3 above) |
| **Return type** | The data type of the value returned (int above) |
| **void** | A function that does NOT return any value |

---

## 2. Object-Oriented Programming (OOP)

### 2.1 What Is OOP? (Beginner Explanation)

**Object-Oriented Programming** is a way of organizing code by modeling real-world entities as **objects**. Instead of writing one long list of instructions, you create "blueprints" (classes) and build objects from them.

**Real-world analogy:**
- **Class** = Blueprint of a house (design, plan)
- **Object** = An actual house built from that blueprint
- You can build many houses (objects) from the same blueprint (class)

### 2.2 Class and Object

**Class:** A template/blueprint that defines the properties (data) and behaviors (methods/functions) of an entity.

**Object:** An instance of a class -- a real entity created from the blueprint.

```
Class: Car
  Properties: color, brand, speed
  Methods: start(), accelerate(), brake()

Object 1: myCar (color = "Red", brand = "Maruti", speed = 0)
Object 2: yourCar (color = "Blue", brand = "Hyundai", speed = 0)
```

### 2.3 The Four Pillars of OOP

#### 2.3.1 Encapsulation

**Simple idea:** Wrapping data (variables) and the methods that operate on that data into a single unit (class), and **hiding the internal details** from the outside world.

**Real-world analogy:** A capsule medicine wraps the actual drug inside. You take the capsule; you do not need to know the chemical formula.

**How it is implemented:**
- Use **private** variables (cannot be accessed directly from outside)
- Provide **public getter/setter methods** to access them (controlled access)

**Benefits:** Data protection, controlled access, easier maintenance.

#### 2.3.2 Inheritance

**Simple idea:** A new class (**child/derived class**) can **inherit** properties and methods from an existing class (**parent/base class**). This promotes code reuse.

**Real-world analogy:** A child inherits traits (eyes, hair color) from parents but can also have their own unique traits.

```
Parent class: Animal (properties: name, sound; method: eat())
  Child class: Dog (inherits from Animal; adds: fetch())
  Child class: Cat (inherits from Animal; adds: purr())
```

**Types of Inheritance:**

| Type | Description | Example |
|------|------------|---------|
| **Single** | One child inherits from one parent | Dog --> Animal |
| **Multiple** | One child inherits from multiple parents | (Supported in C++, not Java) |
| **Multilevel** | Chain: Grandparent --> Parent --> Child | Animal --> Dog --> Puppy |
| **Hierarchical** | Multiple children inherit from one parent | Animal --> Dog, Cat, Bird |
| **Hybrid** | Combination of multiple types | Mix of hierarchical and multiple |

#### 2.3.3 Polymorphism

**Simple idea:** "Many forms." The same method name can behave differently depending on the context.

**Real-world analogy:** The word "open" has different meanings depending on context: open a door, open a book, open a file on computer -- same word, different actions.

**Two types:**

| Type | Also Called | When Decided | How |
|------|-----------|-------------|-----|
| **Compile-time** | Static polymorphism / Method Overloading | At compile time | Same method name, different parameters |
| **Runtime** | Dynamic polymorphism / Method Overriding | At run time | Child class redefines parent's method |

**Overloading example (compile-time):**

```
int add(int a, int b)       --> add(2, 3)      = 5
float add(float a, float b) --> add(2.5, 3.5)  = 6.0
```

Same name `add`, but different parameter types.

**Overriding example (runtime):**

```
Class Animal: method speak() --> "Some sound"
Class Dog extends Animal: method speak() --> "Bark!"
Class Cat extends Animal: method speak() --> "Meow!"
```

Same method `speak()`, but each child class provides its own version.

#### 2.3.4 Abstraction

**Simple idea:** Show only the **essential features** and hide the complex internal details.

**Real-world analogy:** When you drive a car, you use the steering wheel, pedals, and gear. You do NOT need to know how the engine combustion works internally.

**How it is implemented:**
- **Abstract classes** (classes with at least one abstract/undefined method)
- **Interfaces** (purely abstract -- all methods are undefined; the implementing class provides the definitions)

### 2.4 OOP Concepts Summary Table

| Concept | Key Idea | Benefit |
|---------|----------|---------|
| **Encapsulation** | Wrap data + methods; hide internals | Data security, controlled access |
| **Inheritance** | Child class reuses parent class code | Code reuse, hierarchy |
| **Polymorphism** | Same name, different behaviors | Flexibility, extensibility |
| **Abstraction** | Show essential, hide complex details | Simplicity, reduced complexity |

---

## 3. Data Structures and Algorithms

### 3.1 What Is a Data Structure?

A **data structure** is a way of organizing and storing data in a computer so it can be accessed and modified efficiently.

**Analogy:** Think of different ways to organize books:
- A **stack** of books (last placed = first taken)
- A **queue** at a shop (first in line = first served)
- A **list** numbered 1 to N (access by index)

### 3.2 Array

**Simple idea:** A collection of elements of the **same data type**, stored in **contiguous memory locations**, accessed by **index**.

```
Index:    0    1    2    3    4
Array:  [ 10 | 20 | 30 | 40 | 50 ]
```

| Feature | Details |
|---------|---------|
| **Access time** | **O(1)** -- direct access by index (fast) |
| **Insertion/Deletion** | **O(n)** -- elements must be shifted |
| **Size** | Fixed (static array) or dynamic |
| **Use** | Storing a list of items, lookup tables |

### 3.3 Stack

**Simple idea:** A **LIFO** (Last In, First Out) data structure. Think of a stack of plates -- you add and remove from the **top** only.

```
        | 30 | <-- Top (most recent)
        | 20 |
        | 10 | <-- Bottom (oldest)
        +----+
```

| Operation | Description | Time |
|-----------|------------|------|
| **push** | Add element to top | O(1) |
| **pop** | Remove element from top | O(1) |
| **peek/top** | View top element without removing | O(1) |
| **isEmpty** | Check if stack is empty | O(1) |

**Applications:** Undo/Redo operations, function call management (call stack), expression evaluation, backtracking algorithms.

### 3.4 Queue

**Simple idea:** A **FIFO** (First In, First Out) data structure. Think of a queue at a ticket counter -- first person in line is served first.

```
Front --> | 10 | 20 | 30 | 40 | <-- Rear
          Dequeue here        Enqueue here
```

| Operation | Description | Time |
|-----------|------------|------|
| **enqueue** | Add element at the rear | O(1) |
| **dequeue** | Remove element from the front | O(1) |
| **front** | View front element without removing | O(1) |
| **isEmpty** | Check if queue is empty | O(1) |

**Variants:**
- **Circular Queue:** Rear wraps around to the front (efficient use of space)
- **Priority Queue:** Elements are dequeued based on priority, not arrival order
- **Deque (Double-ended Queue):** Insert/remove from both front and rear

**Applications:** Print job scheduling, CPU task scheduling, BFS (Breadth-First Search), buffer management.

### 3.5 Linked List

**Simple idea:** A sequence of **nodes**, where each node contains **data** and a **pointer/link** to the next node. Unlike arrays, elements are NOT stored in contiguous memory.

```
[ Data | Next ] --> [ Data | Next ] --> [ Data | NULL ]
  Node 1              Node 2              Node 3
```

| Type | Description |
|------|-------------|
| **Singly Linked List** | Each node points to the next node only. Traversal in one direction. |
| **Doubly Linked List** | Each node points to both next and previous nodes. Traversal in both directions. |
| **Circular Linked List** | The last node points back to the first node (forms a circle). |

| Feature | Array | Linked List |
|---------|-------|-------------|
| **Memory** | Contiguous | Non-contiguous |
| **Access** | O(1) by index | **O(n)** -- must traverse |
| **Insertion/Deletion** | O(n) -- shifting needed | **O(1)** -- just change pointers |
| **Size** | Fixed (static) | **Dynamic** (grows/shrinks) |
| **Memory overhead** | None | Extra memory for pointers |

### 3.6 Tree

**Simple idea:** A hierarchical data structure consisting of **nodes** connected by **edges**. It looks like an upside-down tree.

```
            [ A ]         <-- Root
           /     \
        [ B ]   [ C ]     <-- Children of A
       /   \       \
    [ D ] [ E ]   [ F ]   <-- Leaf nodes (no children)
```

| Term | Meaning |
|------|---------|
| **Root** | The topmost node (no parent) |
| **Parent** | A node with children below it |
| **Child** | A node connected below a parent |
| **Leaf** | A node with no children |
| **Height** | Longest path from root to a leaf |
| **Depth** | Distance from root to a specific node |

**Binary Tree:** Each node has **at most 2 children** (left and right).

**Binary Search Tree (BST):**
- Left child < Parent < Right child
- Searching is efficient: **O(log n)** on average

```
         [ 50 ]
        /      \
     [ 30 ]   [ 70 ]
    /    \    /    \
 [ 20 ] [40] [60] [80]
```

**Searching for 60:** 50 (go right) --> 70 (go left) --> 60 (found!) Only 3 comparisons.

### 3.7 Searching Algorithms

| Algorithm | How It Works | Time Complexity | Requirement |
|-----------|-------------|-----------------|-------------|
| **Linear Search** | Check each element one by one from start to end | **O(n)** (worst and average) | None (works on unsorted data) |
| **Binary Search** | Divide the sorted list in half repeatedly; compare with middle element | **O(log n)** | **Data must be sorted** |

**Binary Search Example:**

Find 7 in sorted array [2, 4, 6, 7, 9, 11, 15]:

```
Step 1: Middle = 7 (index 3). Found it!
```

Find 9 in sorted array [2, 4, 6, 7, 9, 11, 15]:

```
Step 1: Middle = 7. Target 9 > 7, search right half [9, 11, 15]
Step 2: Middle = 11. Target 9 < 11, search left half [9]
Step 3: Middle = 9. Found!
```

### 3.8 Sorting Algorithms

| Algorithm | How It Works | Best Case | Average Case | Worst Case | Stable? |
|-----------|-------------|-----------|-------------|------------|---------|
| **Bubble Sort** | Repeatedly swap adjacent elements if they are in the wrong order | O(n) | O(n^2) | O(n^2) | Yes |
| **Selection Sort** | Find the minimum element and place it at the beginning; repeat | O(n^2) | O(n^2) | O(n^2) | No |
| **Insertion Sort** | Build sorted array one element at a time by inserting each element in its correct position | O(n) | O(n^2) | O(n^2) | Yes |
| **Merge Sort** | Divide array into halves, sort each half, then merge | O(n log n) | **O(n log n)** | **O(n log n)** | Yes |
| **Quick Sort** | Pick a pivot, partition around it, sort partitions | O(n log n) | **O(n log n)** | O(n^2) | No |

**Key exam facts:**
- **Merge Sort** has the best guaranteed worst-case: O(n log n)
- **Quick Sort** is fastest in practice on average but O(n^2) worst case
- **Bubble Sort** is the simplest but slowest for large data
- **Stable** means equal elements maintain their original relative order

### 3.9 Data Structures Summary Table

| Data Structure | Organization | Access | Insert/Delete | Best Use |
|---------------|-------------|--------|--------------|----------|
| **Array** | Contiguous memory, indexed | **O(1)** | O(n) | Fast lookup by index |
| **Stack** | LIFO | O(n) | **O(1)** (top only) | Undo, function calls |
| **Queue** | FIFO | O(n) | **O(1)** (front/rear) | Scheduling, BFS |
| **Linked List** | Nodes with pointers | O(n) | **O(1)** (with pointer) | Dynamic data, frequent insert/delete |
| **Binary Search Tree** | Hierarchical, sorted | **O(log n)** avg | **O(log n)** avg | Searching, sorted data |

---

## 4. Operating Systems

### 4.1 What Is an Operating System? (Beginner Explanation)

An **Operating System (OS)** is system software that manages computer hardware and software resources and provides services for programs. It acts as an **intermediary between the user and hardware**.

**Common examples:** Windows, Linux, macOS, Android, iOS

**Key functions:**
- Process management
- Memory management
- File system management
- Device management (I/O)
- Security and protection

### 4.2 Process Management

#### What Is a Process?

A **process** is a program that is currently **being executed**. A program sitting on disk is just a file; once it runs, it becomes a process.

**Process states:**

```
New --> Ready --> Running --> Terminated
                    |
                    v
                 Waiting (blocked)
                    |
                    v
                  Ready (again)
```

| State | Description |
|-------|-------------|
| **New** | Process is being created |
| **Ready** | Process is loaded in memory, waiting for CPU |
| **Running** | Process is currently being executed by CPU |
| **Waiting (Blocked)** | Process is waiting for an event (e.g., I/O completion) |
| **Terminated** | Process has finished execution |

#### CPU Scheduling Algorithms

The OS must decide which process gets the CPU next. This is **CPU scheduling**.

| Algorithm | Full Name | How It Works | Preemptive? | Pros | Cons |
|-----------|-----------|-------------|-------------|------|------|
| **FCFS** | First Come, First Served | Processes served in arrival order | No | Simple, fair | Convoy effect (short processes wait behind long ones) |
| **SJF** | Shortest Job First | Shortest process executes first | No (or Yes if SRTF) | Minimum average waiting time | Starvation of long processes |
| **RR** | Round Robin | Each process gets a fixed time slice (quantum); rotate | **Yes** | Fair, good for time-sharing | High overhead if quantum too small |
| **Priority** | Priority Scheduling | Highest-priority process runs first | Yes or No | Important tasks first | **Starvation** (low priority may never run); solved by **aging** |

**Key terms:**
- **Preemptive:** CPU can be taken away from a running process (RR, Priority)
- **Non-preemptive:** Process runs until it finishes or blocks (FCFS, SJF)
- **Starvation:** A process waits indefinitely because higher-priority processes keep arriving
- **Aging:** Gradually increase priority of waiting processes to prevent starvation

#### Deadlock

**Simple idea:** A situation where two or more processes are **waiting for each other** to release resources, and none can proceed. Everyone is stuck.

**Real-world analogy:** Two cars facing each other on a one-lane bridge. Neither can move forward.

**Four necessary conditions for deadlock (all must hold simultaneously):**

| Condition | Description |
|-----------|-------------|
| **Mutual Exclusion** | At least one resource is non-sharable (only one process can use it at a time) |
| **Hold and Wait** | A process holds resources while waiting for additional ones |
| **No Preemption** | Resources cannot be forcibly taken from a process |
| **Circular Wait** | A circular chain of processes, each waiting for a resource held by the next |

**Deadlock handling:**
- **Prevention:** Eliminate one of the four conditions
- **Avoidance:** Use algorithms like **Banker's Algorithm** to avoid unsafe states
- **Detection and Recovery:** Allow deadlock, detect it, then recover (kill a process or preempt resources)

### 4.3 Memory Management

#### Why Is Memory Management Needed?

The OS must efficiently allocate and deallocate memory to processes, ensure processes do not interfere with each other, and make the most of limited physical memory (RAM).

#### Key Concepts

| Concept | Description |
|---------|-------------|
| **Logical address** | Address generated by the CPU (virtual address); used by the program |
| **Physical address** | Actual address in RAM; managed by the Memory Management Unit (MMU) |
| **Paging** | Divides memory into fixed-size blocks called **pages** (logical) and **frames** (physical). Eliminates external fragmentation. |
| **Segmentation** | Divides memory into variable-size segments based on logical divisions (code, data, stack). More natural but can cause external fragmentation. |
| **Virtual Memory** | Uses disk space (swap/page file) as an extension of RAM. Allows running programs larger than physical RAM. |
| **Page Fault** | Occurs when a required page is not in RAM and must be loaded from disk. Too many page faults = **thrashing** (system slows drastically). |

#### Paging vs Segmentation

| Feature | Paging | Segmentation |
|---------|--------|-------------|
| **Division** | Fixed-size pages | Variable-size segments |
| **Fragmentation** | No external fragmentation; has internal fragmentation | Has external fragmentation; no internal fragmentation |
| **Basis** | Physical memory structure | Logical program structure |
| **Page/Segment table** | Page table | Segment table |
| **Visible to programmer** | No (transparent) | Yes (programmer defines segments) |

#### Page Replacement Algorithms

When memory is full and a new page needs to be loaded, the OS must decide which existing page to remove.

| Algorithm | Strategy | Pros | Cons |
|-----------|----------|------|------|
| **FIFO** | Remove the oldest page | Simple | May remove frequently used pages |
| **LRU** (Least Recently Used) | Remove the page not used for the longest time | Good performance | Higher overhead to track usage |
| **Optimal** | Remove the page that will not be used for the longest time in the future | **Best performance** | **Impossible in practice** (requires future knowledge) |

### 4.4 File Systems

#### What Is a File System?

A **file system** is the method the OS uses to organize, store, retrieve, and manage files on storage devices (hard disk, SSD).

#### Key Concepts

| Concept | Description |
|---------|-------------|
| **File** | A named collection of related data stored on disk |
| **Directory (Folder)** | A container that organizes files in a hierarchy |
| **Path** | The location of a file (e.g., C:\Users\Documents\report.pdf) |
| **File attributes** | Name, type, size, creation date, permissions, location on disk |

#### File Allocation Methods

| Method | How It Works | Pros | Cons |
|--------|-------------|------|------|
| **Contiguous** | File stored in consecutive blocks | Fast sequential and direct access | External fragmentation; file cannot easily grow |
| **Linked** | Each block has a pointer to the next block | No external fragmentation; easy growth | Slow random access; pointer overhead |
| **Indexed** | A special index block stores pointers to all data blocks | Fast direct access; no fragmentation | Index block overhead; limited by index size |

**Common File Systems:**

| File System | OS | Max File Size | Features |
|------------|-----|--------------|----------|
| **FAT32** | Windows (legacy), USB drives | 4 GB | Simple, widely compatible |
| **NTFS** | Windows | 16 TB+ | Permissions, encryption, journaling |
| **ext4** | Linux | 16 TB | Journaling, large volume support |
| **APFS** | macOS | No practical limit | Encryption, snapshots, optimized for SSD |

### 4.5 OS Concepts Summary Table

| Topic | Key Concept | Most Important Point |
|-------|------------|---------------------|
| **Process Management** | Process states, CPU scheduling | RR is fair; SJF gives minimum avg waiting time |
| **Deadlock** | 4 conditions (mutual exclusion, hold-and-wait, no preemption, circular wait) | All 4 must hold for deadlock |
| **Memory Management** | Paging, virtual memory | Paging eliminates external fragmentation |
| **Page Replacement** | FIFO, LRU, Optimal | Optimal is best but impractical; LRU is best practical |
| **File System** | Allocation methods | Indexed allocation combines pros of contiguous and linked |

---

## 5. Checklist -- Practice MCQs

**Difficulty: Basic to Exam-Level**

---

**Q1. (Basic)** Which data structure follows the LIFO (Last In, First Out) principle?

- (A) Queue
- (B) Stack
- (C) Array
- (D) Linked List

---

**Q2. (Basic)** What are the four pillars of Object-Oriented Programming?

- (A) Arrays, Loops, Functions, Variables
- (B) Encapsulation, Inheritance, Polymorphism, Abstraction
- (C) Input, Process, Output, Storage
- (D) Create, Read, Update, Delete

---

**Q3. (Intermediate)** The time complexity of Binary Search is:

- (A) O(n)
- (B) O(n^2)
- (C) O(log n)
- (D) O(n log n)

---

**Q4. (Intermediate)** In a Round Robin scheduling algorithm, each process is given a fixed:

- (A) Priority level
- (B) Memory allocation
- (C) Time quantum (time slice)
- (D) Number of CPU cycles based on size

---

**Q5. (Intermediate)** Which of the following is NOT a necessary condition for deadlock?

- (A) Mutual Exclusion
- (B) Hold and Wait
- (C) Preemption
- (D) Circular Wait

---

**Q6. (Exam-Level)** In the context of memory management, "thrashing" refers to:

- (A) A process running out of disk space
- (B) Excessive page faults causing the system to spend most time swapping pages rather than executing processes
- (C) A deadlock between two processes
- (D) A corrupted file system

---

**Q7. (Exam-Level)** Which sorting algorithm guarantees O(n log n) time complexity in the worst case?

- (A) Quick Sort
- (B) Bubble Sort
- (C) Merge Sort
- (D) Selection Sort

---

**Q8. (Exam-Level)** Method overloading is an example of:

- (A) Runtime polymorphism
- (B) Compile-time polymorphism
- (C) Inheritance
- (D) Encapsulation

---

**Q9. (Exam-Level)** In paging, memory is divided into fixed-size blocks. The blocks in logical memory are called ______ and in physical memory are called ______.

- (A) Segments and Frames
- (B) Pages and Frames
- (C) Frames and Pages
- (D) Blocks and Sectors

---

**Q10. (Exam-Level)** Which page replacement algorithm is theoretically optimal but impossible to implement in practice?

- (A) FIFO
- (B) LRU
- (C) Optimal (OPT / Belady's)
- (D) Round Robin

---

### Answer Key

| Q# | Answer | Explanation |
|----|--------|-------------|
| Q1 | **(B) Stack** | Stack = LIFO (Last In, First Out); Queue = FIFO (First In, First Out) |
| Q2 | **(B) Encapsulation, Inheritance, Polymorphism, Abstraction** | These are the four fundamental OOP concepts |
| Q3 | **(C) O(log n)** | Binary search halves the search space at each step, giving logarithmic complexity |
| Q4 | **(C) Time quantum (time slice)** | In Round Robin, each process gets equal CPU time in fixed time slices |
| Q5 | **(C) Preemption** | The deadlock condition is "No Preemption" (not Preemption). All four conditions are: Mutual Exclusion, Hold and Wait, **No** Preemption, Circular Wait |
| Q6 | **(B) Excessive page faults** | Thrashing occurs when the system spends more time paging (swapping) than executing useful work |
| Q7 | **(C) Merge Sort** | Merge Sort always runs in O(n log n) regardless of input; Quick Sort can degrade to O(n^2) |
| Q8 | **(B) Compile-time polymorphism** | Overloading (same name, different parameters) is resolved at compile time; Overriding is runtime polymorphism |
| Q9 | **(B) Pages and Frames** | Logical memory is divided into pages; physical memory into frames of the same size |
| Q10 | **(C) Optimal (OPT / Belady's)** | It replaces the page that will not be used for the longest time in the future -- requires future knowledge, so it is impossible to implement but useful as a benchmark |

---

> **Study Tip:** For data structures, memorize the time complexities and the LIFO/FIFO principles. For OS, focus on the four deadlock conditions, process states, and the difference between paging and segmentation. These are high-frequency exam topics.
