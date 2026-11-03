**Inequalities** is a fundamental concept in [[Algebra]]. It is a statement that states that 2 mathematical expressions are not equal.

Solutions to an inequality contain the set of all real numbers that make the inequality true.

# Properties

## Transitive

$$
a<b \text{ and } b<c  \implies a<c \\
a>b \text{ and } b>c  \implies a>c
$$

## Addition

$$
a<b  \implies a\pm c<b\pm c \\
a>b  \implies a\pm c>b\pm c
$$

## Multiplication

If ${}c>0{}$

$$
\begin{aligned}
a<b & \implies ac<bc \\
 & \implies \frac{a}{c}< \frac{b}{c} \\
a>b & \implies ac>bc \\
 & \implies \frac{a}{c}> \frac{b}{c}
\end{aligned}
$$

If ${}c<0{}$

$$
\begin{aligned}
a<b & \implies ac>bc \\
 & \implies \frac{a}{c}> \frac{b}{c} \\
a>b & \implies ac<bc \\
 & \implies \frac{a}{c}< \frac{b}{c}
\end{aligned}
$$

## Reciprocal

If ${}a{}$ and ${}b{}$ have the same signs:

$$
a<b \implies \frac{1}{a}> \frac{1}{b} \\
a>b\implies \frac{1}{a}< \frac{1}{b}
$$

If ${}a{}$ and ${}b{}$ have different signs:

$$
a<b \implies \frac{1}{a}< \frac{1}{b} \\
a>b\implies \frac{1}{a}> \frac{1}{b}
$$

These properties also work if ${}>{}$ and ${}<{}$ are replaced with ${}\geq{}$ and ${}\leq{}$ respectively.

# Types of Inequalities

## Linear Inequalities

Solving linear inequalities involve placing all the constants to one side and the variables together in the other side of the inequality.

To illustrate:

$$
\begin{aligned}
ax+b\geq cx+d & \implies ax-cx \geq d-b \\
 & \implies(a-c)x\geq d-b \\
 & \implies x\geq \frac{d-b}{a-c}
\end{aligned}
\\ \\
SS=\left[\frac{d-b}{a-c},\infty\right)=\left\{ x:x\geq \frac{d-b}{a-c} \right\}
$$

## Quadratic Inequalities

Solving quadratic inequalities involve rewriting the inequality in the form of: ${}ax^{2}+bx+c>0{}$  solutions can be solved by "sign charts" or the number line.

Number line method Steps:

1. Factor the quadratic inequality (if it is factorable)
2. Find the boundary points by using the [[Equations#Zero Product Property|zero product property]]
3. Consider 5 cases:
   1. Less than the lower boundary point (${}x<{}$LBP)
   2. The lower boundary point (${}x={}$LBP)
   3. Between the two boundary points (LBP${}<x<{}$HBP)
   4. The higher boundary point (${}x={}$HBP)
   5. Greater than the higher boundary point (${}x>{}$HBP)
4. Solve each factor by taking a test point from each case
5. Check if these cases are true or false by multiplying together the solved factors
6. Combine the true cases to get the solution set of the inequality

The method in action:

$$
\begin{aligned}
x^{2}-2x>15 & \implies x^{2}-2x-15>0 \\
 & \implies (x+3)(x-5)>0
\end{aligned}
$$

The boundary points in a number line:

```tikz
\usetikzlibrary{arrows.meta}
\begin{document}
\begin{tikzpicture}
\draw[Latex-Latex,line width=1.5pt](-3,0)--(3,0);
\draw[shift={(-1.5,0)},thick](0,4pt)--(0,-4pt) node[below]{-3};
\draw[shift={(1.5,0)},thick](0,4pt)--(0,-4pt) node[below]{5};
\end{tikzpicture}
\end{document}
```

**Case 1:**
${}x<-3{}$

$$
\begin{aligned}
x<-3 & \implies x+3<0\text{ and }x-5<-8 \\
 & \implies(x+3)(x-5)>0
\end{aligned}
$$

Verdict: True

**Case 2:**
${}x=-3{}$

$$
\begin{aligned}
x=-3 & \implies x+3=0\text{ and }x-5=-8 \\
 & \implies(x+3)(x-5)>0
\end{aligned}
$$

Verdict: False

**Case 3:**
${}-3<x<5{}$

$$
\begin{aligned}
-3<x<5 & \implies x+3>0\text{ and }x-5<0 \\
 & \implies(x+3)(x-5)>0
\end{aligned}
$$

Verdict: False

**Case 4:**
${}x=5{}$

$$
\begin{aligned}
x=5 & \implies x+3=8\text{ and }x-5=0 \\
 & \implies(x+3)(x-5)>0
\end{aligned}
$$

Verdict: False

**Case 5:**
${}x>5{}$

$$
\begin{aligned}
x>5& \implies x+3>8\text{ and }x-5>0 \\
 & \implies(x+3)(x-5)>0
\end{aligned}
$$

Verdict: True

$$
\therefore SS=(-\infty,-3)\cup(5,\infty)=\{ x:x<-3\text{ or }x>5 \}
$$

Sign Chart method Steps:

1. Factor the quadratic inequality (if it is factorable)
2. Find the boundary points by using the [[Equations#Zero Product Property|zero product property]]
3. Consider 5 cases:
   1. Less than the lower boundary point (${}x<{}$LBP)
   2. The lower boundary point (${}x={}$LBP)
   3. Between the two boundary points (LBP${}<x<{}$HBP)
   4. The higher boundary point (${}x={}$HBP)
   5. Greater than the higher boundary point (${}x>{}$HBP)
4. Plot the factors and the cases in a table
5. Pick a test point for each case then substitute them to each ${}x{}$ of the factors then check of answer is negative or positive or zero
6. Check if these cases are true or false by multiplying the answers of the answers to each other and comparing the answer to the original inequality
7. Combine together the true cases to get the solution set of the inequality

The method in action:

$$
\begin{aligned}
x^{2}-2x>15 & \implies x^{2}-2x-15>0 \\
 & \implies (x+3)(x-5)>0
\end{aligned}
$$

| Case   | (x+3) | (x-5) | (x+3)(x-5) | Verdict |
| ------ |:-----:|:-----:|:----------:|:-------:|
| x<-3   |   -   |   -   |     +      |  True   |
| x=-3   |   0   |   -   |     0      |  False  |
| -3\<x<5 |   +   |   -   |     -      |  Flase  |
| x=5    |   +   |   0   |     0      |  False  |
| x>5    |   +   |   +   |     +      |  True   |

$$
\therefore SS=(-\infty,-3)\cup(5,\infty)=\{ x:x<-3\text{ or }x>5 \}
$$

## Rational Inequalities

Solving rational inequalities involve combining all the fractions in one side such there is ${}0{}$ on one side.

It also solved like quadratic equations with the use of numberlines and sign charts.

The sign chart in action:

$$
\frac{x-1}{x+3}<0
$$

| Cases  | x+3 | x-1 | (x-1)/(x+3)<0 | Verdict |
| ------ |:---:|:---:|:-------------:|:-------:|
| x<-3   |  -  |  -  |       +       |  False  |
| x=-3   |  0  |  -  |      UND      |  False  |
| -3\<x<1 |  +  |  -  |       -       |  True   |
| x=1    |  +  |  0  |       0       |  False  |
| x>1    |  +  |  +  |       +       |  False  |

$$
\therefore SS=(-3,1)=\{ x:-3<x<1 \}
$$

$$
\begin{aligned}
\frac{x-1}{x+3}> \frac{x-2}{x-4} & \implies \frac{x-1}{x+3}-\frac{x-2}{x-4}>0 \\
 & \implies \frac{(x-1)(x-4)-(x+3)(x-2)}{(x+3)(x-4)}>0 \\
 & \implies \frac{(x^{2}-5x+4)-(x^{2}+x-6)}{(x+3)(x-4)}>0 \\
 & \implies\frac{x^{2}-5x+4-x^{2}-x+6}{(x+3)(x-4)}>0 \\
 & \implies \frac{-6x+10}{(x+3)(x-4)}>0
\end{aligned}
$$

```tikz
\usetikzlibrary{arrows.meta}
\usepackage{amsmath}
\begin{document}
\begin{tikzpicture}
\draw[Latex-Latex,line width=1.5pt](-3,0)--(3,0);
\draw[shift={(-1.5,0)},thick](0,4pt)--(0,-4pt) node[below]{-3};
\draw[shift={(0,0)},thick](0,4pt)--(0,-4pt) node[below]{$\frac{5}{3}$};
\draw[shift={(1.5,0)},thick](0,4pt)--(0,-4pt) node[below]{4};
\end{tikzpicture}
\end{document}
```

| Cases      | x+3 | -6x+10 | x-4 | (-6x+10)/\[(x+3)(x-4)] | Verdict |
| ---------- | :-: | :----: | :-: | :-------------------: | :-----: |
| x<-3       |  -  |   +    |  -  |           +           |  True   |
| x=-3       |  0  |   +    |  -  |          UND          |  False  |
| -3\<x<(5/3) |  +  |   +    |  -  |           -           |  False  |
| x=(5/3)    |  +  |   0    |  -  |           0           |  False  |
| (5/3)\<x<4  |  +  |   -    |  -  |           +           |  True   |
| x=4        |  +  |   -    |  0  |          UND          |  False  |
| x>4        |  +  |   -    |  +  |           -           |  False  |

$$
\therefore SS=\left( -\infty, -3 \right)\cup\left(  \frac{5}{3},4\right)
$$

## Absolute Inequalities

With ${}k>0{}$
${}|x|<k{}$ is ${}-k<x<k{}$
${}|x|>k{}$ is ${}x<-k{}$ or ${}x>k{}$

This still works even if ${}>{}$ and ${}<{}$ is replaced with ${}\geq{}$ and ${}\leq{}$

To illustrate:

$$
\begin{aligned}
|x-3|+4>1 & \implies|x-3|>-3 \\
 & \implies x-3>-3\text{ or }x-3<3 \\
 & \implies x>0 \text{ or }x<0
\end{aligned}
\\ \\
\therefore SS=(-\infty,0)\cup(0,\infty)=\{x:x>0 \text{ or }x<0\}=\mathbb{R}\setminus \{ 0 \}
$$
