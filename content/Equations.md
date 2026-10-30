**Equations** is a fundamental concept in [[Arithmetic]] and [[Algebra]]. It is a statement that states that 2 mathematical expressions are equal.

Equations in Algebra usually involve equations in one variable.

Real numbers that make an equation true are called **solutions** or **roots**. These so called solutions satisfy the equation.
The **solution set** (${}SS{}$) is the set of real numbers that satisfy the equation.

Equations that can be satisfied by any number in the variable's [[Functions#Domain, Codomain, and Range|domain]] is called an **identity**.

Equations that can be satisfied by only some values of a variable is called a **conditional equation**.

Any distinct equations that have the same domain and solutions are called **equivalent equations**.

Equations can be solved using [[Arithmetic|properties of real numbers]].
When multiple variables are involved in an equation but are solving for one variable, the other variables are treated as a "constant" number.

# Types of Equations

## Linear Equations

$$
ax+b=0
$$

Notes:
${}a,b \in \mathbb{R}{}$ and ${}a\neq 0{}$

Linear equations are also known as "first-degree equations"
Solutions of a linear equation in the form of ${}ax+b=0{}$ come in the form of: ${}x=-\frac{b}{a}{}$

## Quadratic Equations

$$
ax^{2}+bx+c=0
$$

Notes:
${}a,b,c \in \mathbb{R}{}$ and ${}a\neq 0{}$

Quadratic equations are also known as "second-degree equations"
There are 3 main ways of solving a quadratic equation: Factoring, Completing the Square, Quadratic Formula
In using these methods these properties are also used:
"Zero Product Property"

$$
ab=0 \iff a=0\text{ or }b=0
$$

"Square Root Property"

$$
x^{2}=k \implies x=\pm \sqrt{ k }
$$

Note: ${}k\geq 0{}$

### Factoring

Steps in factoring a quadratic equation:

1. Identify ${}a,b,c{}$
2. Find two real numbers (ex. ${}u,v{}$) such that: ${}uv=ac{}$ and ${}u+v=b{}$
3. Rewrite the equation as: ${}ax^{2}+ux+vx+c=0{}$
4. Pair terms with common factors together as a group
5. Take the [[greatest common factor]] of each group
6. Factor out the binomial
7. Use the Zero Product Property to find the solution/s

The method in action:

$$
\begin{aligned}
2x^{2}-11x+12=0 & \implies(2x^{2}-8x)+(-3x+12)=0 \\
 & \implies 2x(x-4)-3(x-4)=0 \\
 & \implies (2x-3)(x-4)=0
\end{aligned}
$$

By the zero product property:

$$
2x-3=0 \text{ or }x-4=0 \implies x=\frac{3}{2} \text{ or }x=4\\
\therefore SS=\left\{  \frac{3}{2},4  \right\}
$$

### Completing the Square

Steps in completing the square:

1. Identify ${}a,b,c{}$
2. Multiply both sides of the equation by ${}\frac{1}{a}{}$
3. Subtract both sides of the equation by ${}\left( \frac{c}{a} \right){}$
4. Take the half of ${}\left( \frac{b}{a} \right){}$ then square it. Then add it to both sides of the equation
5. Factor the left hand side of the equation
6. Use the Square Root Property to find the solution/s

The method in action:

$$
\begin{aligned}
2x^{2}-11x+12=0 & \implies \frac{1}{2}(\cancel{ 2 }x^{2}-11x+12)=(0) \frac{1}{2} \\
 & \implies x^{2}-\frac{11}{2}x+6=0 \\
 & \implies x^{2}-\frac{11}{2}x+\cancel{ 6 }-\cancel{ 6 }=0-6 \\
 & \implies x^{2}-\frac{11}{2}x+\left( \frac{11}{4} \right)^{2}=-6+\left( \frac{11}{4} \right)^{2} \\
 & \implies\left( x-\frac{11}{4} \right)^{2}=\frac{25}{16} \\
 & \implies x-\cancel{ \frac{11}{4} }+\cancel{ \frac{11}{4} }=\pm \frac{5}{4}+\frac{11}{4} \\
 & \implies x=\frac{11\pm 5}{4} \\
 & \implies x=\frac{11+5}{4}=\frac{16}{4}=4 \text{ or }x=\frac{11-5}{4}=\frac{6}{4}=\frac{3}{2}
\end{aligned}
\\ \\
\therefore SS=\left\{  \frac{3}{2},4  \right\}
$$

### Quadratic Formula

$$
x=\frac{-b \pm \sqrt{ b^{2}-4ac }}{2a}
$$

Discriminant:

$$
\Delta=b^{2}-4ac
$$

Notes:
find the discriminant of the equation first before using the quadratic formula to save time since:
If ${}\Delta>0{}$, then the equation has two distinct real roots/solutions.
If ${}\Delta=0{}$, then the equation has one real solution.
If ${}\Delta<0{}$, then the equation has non-real numbers/complex numbers as solutions

The method in action:

$$
2x^{2}-11x+12=0\\
\Delta=(-11)^{2}-4(2)(12)=25\\
\therefore\text{There are two distinct real solutions}\\ \\
\begin{aligned}
2x^{2}-11x+12=0 & \implies x=\frac{-(-11)\pm \sqrt{ 25 }}{2(2)} \\
 & \implies x=\frac{11\pm 5}{4} \\
 & \implies x=\frac{11+5}{4}=4 \text{ or }x=\frac{11-5}{4}=\frac{3}{2}
\end{aligned}
\\ \\
\therefore SS=\left\{  \frac{3}{2},4  \right\}
$$

fun fact: the quadratic formula is derived from Completing the Square

$$
\begin{aligned}
ax^{2}+bx+c=0 & \implies x^{2}+\frac{b}{a}x+\frac{c}{a}=0 \\
 & \implies x^{2}+\frac{b}{a}x=-\frac{c}{a} \\
 & \implies x^{2}+\frac{b}{a}x+\left( \frac{b}{2a} \right)^{2}=\left( \frac{b}{2a} \right)^{2}-\frac{c}{a} \\
 & \implies \left( x+\frac{b}{2a} \right)^{2}=\frac{b^{2}}{4a^{2}}-\frac{c}{a} \\
 & \implies\left( x+\frac{b}{2a} \right)^{2}=\frac{b^{2}-4ac}{4a^{2}} \\
 & \implies x+\frac{b}{2a}=\pm\frac{\sqrt{ b^{2}-4ac }}{2a} \\
 & x=\frac{-b\pm \sqrt{ b^{2}-4ac }}{2a}
\end{aligned}
$$

## Rational Equations

$$
\frac{ax-b}{cx-d}=\frac{fx-g}{hx-j}
$$

Rational equations (in one variable) are equations that consist of one or more rational expressions. This type of equation can be transformed into a linear or quadratic equation.

Rational equations introduce concept of "extraneous solutions". These are values of the variable that make the **denominator** equal to 0 and are excluded from the solution set.

Steps in solving rational equations:

1. Find and multiply both sides of the equation with the LCD of the denominators (Transforming into a linear/quadratic equation)
2. Move everything to one side of the equation
3. Solve accordingly

## Equations with Absolute Values

$$
|x|=\begin{cases}
x&\text{if }x\geq 0 \\
-x & \text{if }x<0
\end{cases}
$$

The absolute value of a variable is described to be the _undirected distance of the variable_ from the origin (usually 0) on a number line.

$$
|x|=y \iff x=\pm y\\
\\
|x|=|y| \iff x=\pm y
$$
