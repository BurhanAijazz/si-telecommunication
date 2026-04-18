# Subject 6: Engineering Mathematics & Signal Fundamentals

> **Exam Weightage: 10 Marks** | **Difficulty: Moderate to High** | **Prep Time: ~2 Weeks**

---

## Table of Contents

1. [Linear Algebra](#1-linear-algebra)
2. [Calculus](#2-calculus)
3. [Transforms](#3-transforms)
4. [Signals and Systems](#4-signals-and-systems)
5. [Frequency Domain Concepts](#5-frequency-domain-concepts)
6. [Checklist -- Practice MCQs](#checklist--practice-mcqs)

---

## 1. Linear Algebra

### 1.1 Matrices -- The Basics

**What is a matrix?**
A matrix is simply a rectangular arrangement of numbers in rows and columns. Think of it like a spreadsheet table.

**Example:**

```
A = | 1  2  3 |
    | 4  5  6 |
```

This is a **2 x 3** matrix (2 rows, 3 columns).

### 1.2 Types of Matrices

| Type | Description | Example |
|------|-------------|---------|
| **Square Matrix** | Same number of rows and columns | 2x2, 3x3 |
| **Identity Matrix (I)** | Diagonal elements = 1, rest = 0 | I = [[1,0],[0,1]] |
| **Diagonal Matrix** | Non-zero elements only on diagonal | D = [[3,0],[0,7]] |
| **Symmetric Matrix** | A = A^T (transpose equals itself) | [[1,2],[2,3]] |
| **Null/Zero Matrix** | All elements are 0 | [[0,0],[0,0]] |
| **Singular Matrix** | Determinant = 0 | [[1,2],[2,4]] |

### 1.3 Matrix Operations

**Addition/Subtraction:** Add or subtract corresponding elements (matrices must be same size).

**Multiplication:** For A(m x n) * B(n x p) = C(m x p).
- Number of columns of A **must equal** number of rows of B.
- Each element C(i,j) = sum of (row i of A) * (column j of B).

**Transpose (A^T):** Flip rows and columns.

```
A = | 1  2 |       A^T = | 1  3 |
    | 3  4 |              | 2  4 |
```

### 1.4 Determinants

**For a 2x2 matrix:**

```
A = | a  b |
    | c  d |

det(A) = |A| = ad - bc
```

**Worked Example:**

```
A = | 3  1 |
    | 2  5 |

det(A) = (3)(5) - (1)(2) = 15 - 2 = 13
```

**For a 3x3 matrix** -- use expansion along first row (cofactor expansion):

```
A = | a  b  c |
    | d  e  f |
    | g  h  i |

det(A) = a(ei - fh) - b(di - fg) + c(dh - eg)
```

**Worked Example:**

```
A = | 1  2  3 |
    | 0  4  5 |
    | 1  0  6 |

det(A) = 1(4*6 - 5*0) - 2(0*6 - 5*1) + 3(0*0 - 4*1)
       = 1(24) - 2(-5) + 3(-4)
       = 24 + 10 - 12
       = 22
```

### 1.5 Rank of a Matrix

**Beginner explanation:** The rank tells you how many "independent" rows (or columns) are in a matrix. If a row is just a multiple of another row, it does not count.

**How to find rank:**
1. Convert the matrix to Row Echelon Form (REF) using row operations.
2. Count the number of non-zero rows.

**Key facts:**
- Rank <= min(rows, columns)
- If rank = number of unknowns, the system has a unique solution.
- If rank < number of unknowns, the system has infinite solutions.

### 1.6 Eigenvalues and Eigenvectors

**Beginner explanation:** For a square matrix A, an eigenvalue (lambda) and eigenvector (x) satisfy:

> **A * x = lambda * x**

This means: when matrix A acts on vector x, it only scales x (by factor lambda) without changing its direction.

**How to find eigenvalues:**

Solve: **det(A - lambda * I) = 0** (This is called the characteristic equation.)

**Worked Example:**

```
A = | 4  1 |
    | 2  3 |

det(A - lambda*I) = det | 4-lambda    1     |
                        |    2     3-lambda  |

= (4-lambda)(3-lambda) - (1)(2)
= lambda^2 - 7*lambda + 10
= (lambda - 5)(lambda - 2) = 0

Eigenvalues: lambda_1 = 5, lambda_2 = 2
```

**To find eigenvectors:** Substitute each eigenvalue back into (A - lambda*I)*x = 0 and solve.

### 1.7 Solution of Linear Equations

**Cramer's Rule (for 2 unknowns):**

For the system: ax + by = e, cx + dy = f

```
x = (ed - bf) / (ad - bc)
y = (af - ec) / (ad - bc)
```

**Conditions for solutions (using rank):**

| Condition | Result |
|-----------|--------|
| rank(A) = rank(A|B) = n | **Unique solution** |
| rank(A) = rank(A|B) < n | **Infinite solutions** |
| rank(A) != rank(A|B) | **No solution** |

Where A is the coefficient matrix, A|B is the augmented matrix, and n is the number of unknowns.

---

## 2. Calculus

### 2.1 Differentiation -- Core Formulas

| Function f(x) | Derivative f'(x) | Notes |
|----------------|-------------------|-------|
| x^n | n * x^(n-1) | Power Rule |
| sin(x) | cos(x) | |
| cos(x) | -sin(x) | |
| tan(x) | sec^2(x) | |
| e^x | e^x | Same function! |
| ln(x) | 1/x | x > 0 |
| a^x | a^x * ln(a) | |

**Important Rules:**

- **Product Rule:** d/dx [u*v] = u'v + uv'
- **Quotient Rule:** d/dx [u/v] = (u'v - uv') / v^2
- **Chain Rule:** d/dx [f(g(x))] = f'(g(x)) * g'(x)

**Worked Example (Chain Rule):**

```
f(x) = sin(3x^2)

f'(x) = cos(3x^2) * d/dx(3x^2)
       = cos(3x^2) * 6x
       = 6x * cos(3x^2)
```

### 2.2 Integration -- Core Formulas

| Function f(x) | Integral (antiderivative) |
|----------------|--------------------------|
| x^n (n != -1) | x^(n+1) / (n+1) + C |
| 1/x | ln\|x\| + C |
| sin(x) | -cos(x) + C |
| cos(x) | sin(x) + C |
| e^x | e^x + C |
| a^x | a^x / ln(a) + C |

**Key Integration Techniques:**
1. **Substitution:** Replace a complex part with u.
2. **Integration by Parts:** Integral(u dv) = uv - Integral(v du)
3. **Partial Fractions:** Break rational functions into simpler fractions.

**Worked Example (Substitution):**

```
Integral of 2x * cos(x^2) dx

Let u = x^2, then du = 2x dx

= Integral of cos(u) du
= sin(u) + C
= sin(x^2) + C
```

### 2.3 Differential Equations

**First-order Linear DE:** dy/dx + P(x)*y = Q(x)

**Solution using Integrating Factor (IF):**

```
IF = e^(Integral of P(x) dx)
y * IF = Integral of (Q(x) * IF) dx
```

**Worked Example:**

```
dy/dx + 2y = 6

P(x) = 2, Q(x) = 6
IF = e^(Integral of 2 dx) = e^(2x)

y * e^(2x) = Integral of 6 * e^(2x) dx
y * e^(2x) = 3 * e^(2x) + C
y = 3 + C * e^(-2x)
```

**Second-order DE with constant coefficients:** ay'' + by' + cy = 0

Solve the **auxiliary equation:** a*m^2 + b*m + c = 0

| Roots | General Solution |
|-------|------------------|
| Real and distinct (m1, m2) | y = C1*e^(m1*x) + C2*e^(m2*x) |
| Real and equal (m) | y = (C1 + C2*x)*e^(m*x) |
| Complex (alpha +/- j*beta) | y = e^(alpha*x) * [C1*cos(beta*x) + C2*sin(beta*x)] |

---

## 3. Transforms

### 3.1 Fourier Series

**Beginner explanation:** Any periodic signal can be broken down into a sum of sine and cosine waves of different frequencies. This is the Fourier Series.

**Formula for a periodic signal f(t) with period T:**

```
f(t) = a0/2 + SUM [an*cos(n*w0*t) + bn*sin(n*w0*t)]   (n = 1 to infinity)
```

Where:
- **w0 = 2*pi/T** (fundamental angular frequency)
- **a0 = (2/T) * Integral from 0 to T of f(t) dt** (DC component / average value)
- **an = (2/T) * Integral from 0 to T of f(t)*cos(n*w0*t) dt**
- **bn = (2/T) * Integral from 0 to T of f(t)*sin(n*w0*t) dt**

**Key Properties:**

| Signal Symmetry | Fourier Coefficients |
|-----------------|---------------------|
| Even function: f(t) = f(-t) | bn = 0 (only cosine terms) |
| Odd function: f(t) = -f(-t) | an = 0 (only sine terms) |
| Half-wave symmetry: f(t) = -f(t + T/2) | Even harmonics = 0 |

### 3.2 Fourier Transform (FT)

**Beginner explanation:** While Fourier Series handles periodic signals, the Fourier Transform handles non-periodic (aperiodic) signals. It converts a signal from the **time domain** to the **frequency domain**.

**Forward Transform:**

```
F(w) = Integral from -infinity to +infinity of f(t) * e^(-j*w*t) dt
```

**Inverse Transform:**

```
f(t) = (1/2*pi) * Integral from -infinity to +infinity of F(w) * e^(j*w*t) dw
```

**Important Fourier Transform Pairs:**

| Time Domain f(t) | Frequency Domain F(w) |
|-------------------|-----------------------|
| delta(t) (impulse) | 1 |
| 1 (constant) | 2*pi*delta(w) |
| e^(-at)*u(t), a > 0 | 1/(a + j*w) |
| rect(t/T) (rectangular pulse) | T * sinc(w*T/2*pi) |
| cos(w0*t) | pi*[delta(w-w0) + delta(w+w0)] |

**Key Properties:**
- **Linearity:** FT{a*f(t) + b*g(t)} = a*F(w) + b*G(w)
- **Time Shifting:** FT{f(t-t0)} = e^(-j*w*t0) * F(w)
- **Frequency Shifting:** FT{f(t)*e^(j*w0*t)} = F(w - w0)
- **Convolution in time = Multiplication in frequency**

### 3.3 Laplace Transform

**Beginner explanation:** The Laplace Transform is like a "super version" of the Fourier Transform. It converts differential equations into algebraic equations, making them much easier to solve. It uses the complex variable **s = sigma + j*w**.

**Formula:**

```
F(s) = Integral from 0 to infinity of f(t) * e^(-s*t) dt
```

**Important Laplace Transform Pairs:**

| f(t) [t >= 0] | F(s) |
|----------------|------|
| 1 (step function u(t)) | 1/s |
| t | 1/s^2 |
| t^n | n!/s^(n+1) |
| e^(-at) | 1/(s+a) |
| sin(w*t) | w/(s^2 + w^2) |
| cos(w*t) | s/(s^2 + w^2) |
| e^(-at)*sin(w*t) | w/((s+a)^2 + w^2) |
| delta(t) | 1 |

**Key Properties:**
- **Differentiation:** L{f'(t)} = s*F(s) - f(0)
- **Integration:** L{Integral of f(t) dt} = F(s)/s
- **Final Value Theorem:** lim(t->inf) f(t) = lim(s->0) s*F(s)
- **Initial Value Theorem:** f(0+) = lim(s->inf) s*F(s)

---

## 4. Signals and Systems

### 4.1 Signal Types

**Continuous-Time vs Discrete-Time:**
- **Continuous-time (CT):** Signal is defined for every instant. Example: analog voice signal.
- **Discrete-time (DT):** Signal is defined only at specific time instants. Example: digital audio samples.

**Classification Table:**

| Classification | Types | Example |
|----------------|-------|---------|
| **By nature** | Analog / Digital | Voice (analog), Computer data (digital) |
| **By predictability** | Deterministic / Random | sin(t) (deterministic), Noise (random) |
| **By periodicity** | Periodic / Aperiodic | cos(2*pi*t) (periodic), e^(-t) (aperiodic) |
| **By symmetry** | Even / Odd | cos(t) is even, sin(t) is odd |
| **By energy/power** | Energy signal / Power signal | Pulse (energy), Periodic wave (power) |

**Important Standard Signals:**

| Signal | Definition | Use |
|--------|-----------|-----|
| **Unit Step u(t)** | 0 for t < 0, 1 for t >= 0 | Switching on/off |
| **Unit Impulse delta(t)** | Infinite at t=0, zero elsewhere, area = 1 | System testing |
| **Unit Ramp r(t)** | 0 for t < 0, t for t >= 0 | Linearly increasing |
| **Exponential e^(at)** | Growing (a>0) or decaying (a<0) | Charging/discharging |
| **Sinusoidal sin(wt)** | Oscillating wave | AC signals |

### 4.2 Signal Operations

| Operation | Formula | What it does |
|-----------|---------|-------------- |
| **Time Shifting** | x(t - t0) | Shifts signal right by t0 |
| **Time Scaling** | x(a*t) | Compresses (a>1) or expands (a<1) |
| **Time Reversal** | x(-t) | Flips the signal about t=0 |
| **Amplitude Scaling** | A * x(t) | Scales the amplitude by A |

### 4.3 Sampling Theorem (Nyquist Theorem)

**Beginner explanation:** To convert a continuous signal to digital without losing information, you must sample it fast enough.

> **Nyquist Rate: f_s >= 2 * f_max**

Where:
- **f_s** = sampling frequency
- **f_max** = maximum frequency in the signal

**Example:** A voice signal has frequencies up to 4 kHz. The minimum sampling rate = 2 * 4000 = **8000 samples/sec (8 kHz)**. This is exactly why telephone systems use 8 kHz sampling.

**What happens if f_s < 2*f_max?** --> **Aliasing** occurs (different frequencies become indistinguishable, causing distortion).

### 4.4 Convolution (Conceptual)

**Beginner explanation:** Convolution is a mathematical operation that describes how a system modifies an input signal. If you know a system's **impulse response h(t)**, then:

> **Output y(t) = x(t) * h(t) = Integral from -inf to +inf of x(tau) * h(t - tau) d(tau)**

**Key properties of convolution:**
- **Commutative:** x * h = h * x
- **Associative:** x * (h1 * h2) = (x * h1) * h2
- **Distributive:** x * (h1 + h2) = x*h1 + x*h2
- **x(t) * delta(t) = x(t)** (convolving with impulse gives same signal)
- **x(t) * delta(t - t0) = x(t - t0)** (convolving with shifted impulse shifts signal)

### 4.5 LTI Systems

**LTI = Linear Time-Invariant**

**Linear:** If input x1 gives output y1, and input x2 gives output y2, then input (a*x1 + b*x2) gives output (a*y1 + b*y2). This is called **superposition**.

**Time-Invariant:** If input x(t) gives output y(t), then input x(t-t0) gives output y(t-t0). The system behaves the same regardless of when the input is applied.

**Why LTI matters:** An LTI system is completely described by its **impulse response h(t)** or its **transfer function H(s)**.

**Stability condition:** An LTI system is **BIBO stable** (Bounded Input, Bounded Output) if:

```
Integral from -inf to +inf of |h(t)| dt < infinity
```

**Causality condition:** h(t) = 0 for t < 0 (system does not respond before input is applied).

---

## 5. Frequency Domain Concepts

### 5.1 Spectra and Bandwidth

**Frequency Spectrum:** A graph showing which frequencies are present in a signal and their amplitudes.

- **Amplitude Spectrum:** |F(w)| vs frequency
- **Phase Spectrum:** angle(F(w)) vs frequency

**Bandwidth (BW):** The range of frequencies a signal occupies or a system can handle.

```
BW = f_upper - f_lower
```

| Signal Type | Typical Bandwidth |
|-------------|-------------------|
| Human voice | 300 Hz to 3400 Hz (BW = 3.1 kHz) |
| AM radio channel | 10 kHz |
| FM radio channel | 200 kHz |
| TV channel (analog) | 6 MHz |
| Wi-Fi (802.11n) | 20 or 40 MHz |

### 5.2 Aliasing

**What is aliasing?**
When a signal is sampled below the Nyquist rate, high-frequency components "fold back" and appear as false lower frequencies. This distortion is called aliasing.

**How to prevent aliasing:**
1. Sample at f_s >= 2*f_max (satisfy Nyquist criterion).
2. Use an **anti-aliasing filter** (a low-pass filter before sampling) to remove frequencies above f_s/2.

### 5.3 Basic Filters

| Filter Type | Passes | Blocks | Telecom Use |
|-------------|--------|--------|-------------|
| **Low-Pass Filter (LPF)** | Frequencies below cutoff (f_c) | Frequencies above f_c | Anti-aliasing, audio smoothing |
| **High-Pass Filter (HPF)** | Frequencies above f_c | Frequencies below f_c | Removing DC offset, noise |
| **Band-Pass Filter (BPF)** | Frequencies between f_L and f_H | Frequencies outside that range | Radio tuning, channel selection |
| **Band-Stop/Notch Filter** | All except a specific band | A specific frequency band | Removing interference (e.g., 50 Hz hum) |

**Cutoff Frequency (f_c):** The frequency at which the filter's output power drops to half (-3 dB point).

```
f_c = 1 / (2 * pi * R * C)    [for a simple RC low-pass filter]
```

**Decibel (dB) scale for filters:**

```
Gain (dB) = 20 * log10(V_out / V_in)
```

- 0 dB = no change
- -3 dB = output is ~70.7% of input (half power)
- -20 dB = output is 10% of input
- -40 dB = output is 1% of input

---

## Checklist -- Practice MCQs

### Basic Level

**Q1.** What is the determinant of the matrix A = [[2, 3], [1, 4]]?

- (a) 11
- (b) 5
- (c) 8
- (d) 14

**Q2.** The derivative of e^(3x) is:

- (a) e^(3x)
- (b) 3x * e^(3x)
- (c) 3 * e^(3x)
- (d) e^(3x) / 3

**Q3.** According to the Nyquist theorem, a signal with maximum frequency 5 kHz must be sampled at a minimum rate of:

- (a) 5 kHz
- (b) 10 kHz
- (c) 2.5 kHz
- (d) 20 kHz

### Intermediate Level

**Q4.** The Laplace Transform of the unit step function u(t) is:

- (a) 1
- (b) 1/s
- (c) s
- (d) 1/s^2

**Q5.** If a matrix A has a determinant equal to zero, then:

- (a) A has a unique inverse
- (b) A is called a singular matrix
- (c) The rank of A equals its order
- (d) All eigenvalues are positive

**Q6.** Convolution of any signal x(t) with the unit impulse delta(t) gives:

- (a) delta(t)
- (b) 0
- (c) x(t) (the signal itself)
- (d) 1

**Q7.** A low-pass filter with cutoff frequency 1 kHz will:

- (a) Pass all frequencies above 1 kHz
- (b) Pass all frequencies below 1 kHz and attenuate those above
- (c) Block all frequencies
- (d) Pass only the frequency 1 kHz

### Exam Level

**Q8.** The eigenvalues of the matrix [[5, 4], [1, 2]] are:

- (a) 1, 6
- (b) 3, 4
- (c) 2, 5
- (d) 0, 7

**Q9.** The Fourier Series of an odd periodic function contains only:

- (a) Cosine terms
- (b) Sine terms
- (c) Both sine and cosine terms
- (d) A constant (DC) term only

**Q10.** For a causal LTI system to be BIBO stable, the poles of the transfer function H(s) must lie:

- (a) On the imaginary axis
- (b) In the right half of the s-plane
- (c) In the left half of the s-plane
- (d) At the origin

---

### Answer Key

| Question | Answer | Explanation |
|----------|--------|-------------|
| Q1 | **(b) 5** | det = (2)(4) - (3)(1) = 8 - 3 = 5 |
| Q2 | **(c) 3 * e^(3x)** | Chain rule: d/dx[e^(3x)] = e^(3x) * 3 |
| Q3 | **(b) 10 kHz** | Nyquist rate = 2 * f_max = 2 * 5 kHz = 10 kHz |
| Q4 | **(b) 1/s** | L{u(t)} = Integral from 0 to inf of e^(-st) dt = 1/s |
| Q5 | **(b) Singular matrix** | det = 0 means no inverse exists; matrix is singular |
| Q6 | **(c) x(t)** | The impulse is the identity element for convolution |
| Q7 | **(b) Pass below, attenuate above** | This is the definition of a low-pass filter |
| Q8 | **(a) 1, 6** | Characteristic eq: (5-L)(2-L)-4 = L^2 - 7L + 6 = (L-1)(L-6) = 0 |
| Q9 | **(b) Sine terms** | Odd functions have an = 0; only bn (sine) coefficients remain |
| Q10 | **(c) Left half of s-plane** | Left-half poles ensure decaying impulse response (stability) |

---

> **Study Tip:** Focus on Fourier/Laplace transform pairs and the Sampling Theorem -- these are the most frequently tested topics in telecom exams. Practice computing 2x2 and 3x3 determinants until you can do them quickly and accurately.
