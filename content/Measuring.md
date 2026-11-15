**Measuring** is an important concept in [[Chemistry]] and [[Physics]].

# Significant Figures

A number is considered to be significant if:

1. It is a **non-zero** number
2. A zero between 2 significant numbers
3. Zeroes to the right of a significant number if there is a decimal

A number is not considered significant if:

1. It is a zero to the left of the left most significant figure

Zeroes to the right of the right most significant figure may or may not be significant figure/s as there is no decimal point.
Examples:

1. ${}0012345{}$ has 5 significant figures "${}12345{}$"
2. ${}12300{}$ has 3, 4, or 5 significant figures
3. ${}12300.{}$ has 5 significant figures
4. ${}0.08210{}$ has 4 significant figures

## Operations on Significant Figures

### Addition and Subtraction

The final answer of addition or subtraction between numbers follow the number with the **least** amount of **decimal places**

$$
\begin{aligned}
&14.012 \\
+&\underline{16.01} \\
&30.00
\end{aligned}
$$

### Multiplication and Division

The final answer of multiplication or division between numbers follow the number with the **least** amount of **significant figures**

$$
\begin{aligned}
&\;\;32.00 \\
\times &\underline{\;\;12.3521} \\
&395.3
\end{aligned}
$$

### Exact Numbers

The decimal places or significant figures of exact numbers are ignored. Exact numbers may come from constants or when getting averages.

$$
\frac{12.00+13.05+10.94}{3}=11.99\bar{6}\approx 12.00
$$

# Scientific Notation

Scientific Notation is used to shorten very big or very small numbers.

$$
N\times 10^{n}
$$

Where:
${}N={}$is a number between ${}0{}$ and ${}9{}$ or a number between ${}1{}$ and ${}10{}$
${}n={}$is a positive or negative [[Set Theory#Integers|Integer]]

To express a number in scientific notation, the decimal place must be moved ${}n{}$ places to the left or right until it sits on the right of the leftmost Significant Figure.

Moving the decimal point to the left will make ${}n>0{}$.
Moving the decimal point to the left will make ${}n<0{}$.

Examples:

$$
\begin{aligned}
1234.56&= 1.23456\times 10^{3}\\
0.001234&= 1.234\times 10^{-3}
\end{aligned}
$$

# Accuracy and Uncertainty

Measurements are **accurate** if those are close to the true value
Measurements are **precise** if those are closely grouped together

# Dimensional Analysis

Dimensional analysis is usually done to convert a set of given units to the desired units
Steps:

1. Get the conversion factor
2. Multiply the given to the conversion factor with the conversion factor in ${}\frac{\text{Desired Units}}{\text{Given Units}}{}$
3. Cancel units as applicable

Example:
Convert 2.1 inches to cm

$$
1\text{ inch}=2.54\text{ cm}\\ \\
2.1 \cancel{ \text{in} }\cdot \frac{2.54\text{ cm}}{1\cancel{ \text{ in} }}=5.3\text{ cm}
$$
