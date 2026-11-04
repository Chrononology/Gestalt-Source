_For the concept of Arithmetic Sequences, see [[Combinatorics]]_

**Arithmetic** is a field of [[Mathematics]] that deals with the

# Core Properties

## Trichotomy Property

The Trichotomy Property states that: For any real numbers ${}a{}$ and ${}b{}$, one and only one of the following statements is true:

$$
a>b,\qquad a=b,\qquad a<b
$$

```tikz
\usetikzlibrary{calc,arrows.meta}
\begin{document}
\begin{tikzpicture}
\draw[Latex-Latex,very thick](-5.5,0)--(5.5,0);
\foreach \x in {-5,-4,...,4,5}
\draw[shift={(\x,0)},thick](0,4pt)--(0,-4pt) node[below]{$\x$};
\end{tikzpicture}
\end{document}
```

## Closure Property

Let ${}a,b\in \mathbb{R}{}$

$$
a+b\in \mathbb{R}\\
a\cdot b\in \mathbb{R}
$$

## Associative Property

Let ${}a,b,c \in \mathbb{R}{}$

$$
(a+b)+c=a+(b+c)\\
(a\cdot b)\cdot c=a\cdot(b \cdot c)
$$

## Commutative Property

Let ${}a,b \in \mathbb{R}{}$

$$
a+b=b+c\\
a\cdot b=b\cdot a
$$

## Distributive Property

Let ${}a,b,c \in \mathbb{R}{}$

$$
c \cdot(a+b)=c \cdot a+c \cdot b\\
(a+b)\cdot c=a\cdot c+b\cdot c
$$

## Properties for Equality

Let ${}a,b,c\in \mathbb{R}{}$

### Reflexive Property

$$
a=a
$$

### Symmetric Property

$$
a=b\implies b=a
$$

### Transitive Property

$$
a=b,\text{ }b=c\implies a=c
$$

# Properties of Addition

## Additive Identity

$$
a+0=a=0+a
$$

## Additive Inverse

$$
a+(-a)=0=(-a)+a
$$

## Equality

$$
a=b\implies a+c=b+c
$$

## Cancellation Law

$$
a+c=b+c\implies a=b
$$

## Unique Solution

For every ${}a+x=b{}$ there exists a solution of ${}x=b-a{}$.

# Properties of Multiplication

## Multiplicative Identity

$$
a\cdot 1=a=1\cdot a
$$

## Multiplicative Inverse

$$
a\cdot \frac{1}{a}=1=\frac{1}{a}\cdot a
$$

## Equality

$$
a=b\implies a\cdot c=b\cdot c
$$

## Cancellation Law

$$
a\cdot c=b\cdot c\implies a=b
$$

## Unique Solution

For every ${}a\cdot x=b{}$ there exists a solution of ${}x=\frac{b}{a}{}$.

# Properties of Quotients

## Product

$$
\begin{aligned}
\frac{b}{a}\cdot \frac{d}{c} & =\frac{b\cdot d}{a\cdot c} \\
\frac{b}{a} & =\frac{b\cdot c}{a\cdot c}
\end{aligned}
$$

## Equality

$$
\begin{aligned}
\frac{b}{a}=\frac{d}{a} & \implies b=d \\
\frac{b}{a}=\frac{d}{c} & \implies b\cdot c=a\cdot d
\end{aligned}
$$

## Reciprocal

$$
\frac{1}{\frac{b}{a}}=\frac{a}{b}
$$

## Quotient of Quotients

$$
\frac{\frac{d}{c}}{\frac{b}{a}}=\frac{d\cdot a}{c \cdot b}
$$

## Quotient of Negatives

$$
\frac{-b}{a}=-\frac{b}{a}=\frac{b}{-a}\\
\frac{-b}{-a}=\frac{b}{a}
$$

## Sum

$$
\frac{b}{a}+\frac{d}{c}=\frac{b\cdot c+a\cdot d}{a\cdot c}
$$

# Properties of Exponents

$$
a^{n}= \underbrace{ {a\cdot a\cdot a\cdot a\cdot\dots \cdot a} }_{n \text{ times} }
$$

## Laws

1. every ${}a^{m}{}$ is a unique real number
2. ${}a^{0}=1,\;a\neq 0{}$
3. ${}a^{-1}=\frac{1}{a^{m}}, \; a\neq 0{}$
4. ${}a^{m}a^{n}=a^{m+n}{}$
5. ${}(a^{m})^{n}=a^{mn}{}$
6. ${}(ab)^{m}=a^{m}b^{m}{}$
7. ${}\left( \frac{a}{b} \right)^{m}=\frac{a^{m}}{b^{m}}{}$
8. ${}\left( \frac{a^{m}}{a^{n}} \right)=a^{m-n}{}$
9. ${}\left( \frac{a}{b} \right)^{-m}=\left( \frac{b}{a} \right)^{m}{}$
10. ${}a^{\frac{1}{n}}=\sqrt[n]{a} \; n \in \mathbb{N}{}$
11. ${}a^{\frac{m}{n}}=\sqrt[n]{a^{m}} \; n,m \in \mathbb{N}{}$
