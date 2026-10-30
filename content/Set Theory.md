**Set Theory** is a field of [[Mathematics]] that deals with collections of elements or sets.

A **set** is a well defined set of objects.
Sets are usually named using **capital letters** ${}(A,B,C,\dots){}$.

An object belonging to a set is called an **element** of the set. Elements are usually named using **small letters** ${}(a,b,c,\dots){}$.
An element belonging to a set is indicated by the symbol "${}\in{}$". It is read as "an element of"

## Presenting Sets

Consider a set ${}S=\{1,2,3,4,5\}{}$
It may also be written as follows:

$$
\begin{align}
&S=\{5,4,3,2,1\}\\
&S=\{\text{counting numbers from }1\text{ to }5\}\\
&S=\{x:x \text{ is a counting number less than 6}\} \\
&S=\{x|x \text{ is a counting number less than 6}\} \\
&S=\{x:x \in \mathbb{N}\text{ and }x<6\}
\end{align}
$$

## Common Sets

$$
\begin{align} \\
\mathbb{C}\qquad&\text{ set of Complex numbers} \\
\mathbb{R}\qquad &\text{ set of Real numbers} \\
\mathbb{N}\qquad&\text{ set of Natural or Counting numbers} \\
\mathbb{Z}\qquad&\text{ set of Integers} \\
\mathbb{Q}\qquad&\text{ set of Rational numbers} \\
\mathbb{Q}'\qquad&\text{ set of Irrational numbers} \\
\{  \},\emptyset\qquad&\text{ Null set or Empty set}
\end{align}
$$

## Notations

### Interval Notation

```tikz
\usepackage{pgfplots,tikz}
\usetikzlibrary{arrows.meta,calc}

\begin{document}
\begin{tikzpicture}

% table borders horizontal
\draw[thick] (0,9)--(10,9);
\draw[thick] (0,8)--(10,8);
\draw (0,6)--(10,6);
\draw (0,4)--(10,4);
\draw (0,2)--(10,2);
\draw[thick] (0,0)--(10,0);

%table borders vertical
\draw[thick] (0,0)--(0,9);
\draw (2.5,0)--(2.5,9);
\draw (5,0)--(5,9);
\draw[thick] (10,0)--(10,9);

%table headers
\node at (1.25,8.5) {\large{Interval}};
\node at (3.75,8.5) {\large{Inequality}};
\node at (7.5,8.5) {\large{Number Line}};

%Intervals
\node at (1.25,7) {$x \in (a,b]$};
\node at (1.25,5) {$x \in (a,b)$};
\node at (1.25,3) {$x \in [a,b)$};
\node at (1.25,1) {$x \in [a,b]$};

%Inequalities
\node at (3.75,7) {$a< x\leq b$};
\node at (3.75,5) {$a <x< b$};
\node at (3.75,3) {$a\leq x< b$};
\node at (3.75,1) {$a\leq x\leq b$};

%Number Lines
\draw[Latex-Latex,color=black,very thick](5.5,7)--(9.5,7);
\draw[color=red,thick](6.5,7)--(8.5,7);
\node[circle,draw,color=red,line width=1pt,inner sep=2pt,label={below:a}] (1) at (6.5,7){};
\node[circle,fill=red,inner sep=2pt,label={below:b}] (2) at (8.5,7){};
\draw (6.5,6.875)--(6.5,7.125);
\draw (8.5,6.875)--(8.5,7.125);

\draw[Latex-Latex,color=black,very thick](5.5,5)--(9.5,5);
\draw[color=red,thick](6.5,5)--(8.5,5);
\node[circle,draw,color=red,line width=1pt,inner sep=2pt,label={below:a}] (1) at (6.5,5){};
\node[circle,draw,color=red,line width=1pt,inner sep=2pt,label={below:b}] (2) at (8.5,5){};
\draw (6.5,4.875)--(6.5,5.125);
\draw (8.5,4.875)--(8.5,5.125);

\draw[Latex-Latex,color=black,very thick](5.5,3)--(9.5,3);
\draw[color=red,thick](6.5,3)--(8.5,3);
\node[circle,fill=red,inner sep=2pt,label={below:a}] (1) at (6.5,3){};
\node[circle,draw,color=red,line width=1pt,inner sep=2pt,label={below:b}] (2) at (8.5,3){};
\draw (6.5,2.875)--(6.5,3.125);
\draw (8.5,2.875)--(8.5,3.125);

\draw[Latex-Latex,color=black,very thick](5.5,1)--(9.5,1);
\draw[color=red,thick](6.5,1)--(8.5,1);
\node[circle,fill=red,inner sep=2pt,label={below:a}] (1) at (6.5,1){};
\node[circle,fill=red,inner sep=2pt,label={below:b}] (2) at (8.5,1){};
\draw (6.5,0.875)--(6.5,1.125);
\draw (8.5,0.875)--(8.5,1.125);

\end{tikzpicture}
\end{document}
```

```tikz
\usepackage{pgfplots,tikz}
\usetikzlibrary{arrows.meta,calc}

\begin{document}
\begin{tikzpicture}

% table borders horizontal
\draw[thick] (0,9)--(10,9);
\draw[thick] (0,8)--(10,8);
\draw (0,6)--(10,6);
\draw (0,4)--(10,4);
\draw (0,2)--(10,2);
\draw[thick] (0,0)--(10,0);

%table borders vertical
\draw[thick] (0,0)--(0,9);
\draw (2.5,0)--(2.5,9);
\draw (5,0)--(5,9);
\draw[thick] (10,0)--(10,9);

%table headers
\node at (1.25,8.5) {\large{Interval}};
\node at (3.75,8.5) {\large{Inequality}};
\node at (7.5,8.5) {\large{Number Line}};

%Intervals
\node at (1.25,7) {$x \in (-\infty,a]$};
\node at (1.25,5) {$x \in (-\infty,a)$};
\node at (1.25,3) {$x \in [a,\infty)$};
\node at (1.25,1) {$x \in (a,\infty)$};

%Inequalities
\node at (3.75,7) {$x\leq a$};
\node at (3.75,5) {$x<a$};
\node at (3.75,3) {$x\geq a$};
\node at (3.75,1) {$x>a$};

%Number Lines
\draw[Latex-Latex,color=black,very thick](5.5,7)--(9.5,7);
\draw[Latex-,color=red,thick](5.5,7)--(6.5,7);
\node[circle,fill=red,inner sep=2pt,label={below:a}] (1) at (6.5,7){};
\node[label={below:b}] (2) at (8.5,7){};
\draw (6.5,6.875)--(6.5,7.125);
\draw (8.5,6.875)--(8.5,7.125);

\draw[Latex-Latex,color=black,very thick](5.5,5)--(9.5,5);
\draw[Latex-,color=red,thick](5.5,5)--(6.5,5);
\node[circle,draw,color=red,line width=1pt,inner sep=2pt,label={below:a}] (1) at (6.5,5){};
\node[label={below:b}] (2) at (8.5,5){};
\draw (6.5,4.875)--(6.5,5.125);
\draw (8.5,4.875)--(8.5,5.125);

\draw[Latex-Latex,color=black,very thick](5.5,3)--(9.5,3);
\draw[Latex-,color=red,thick](9.5,3)--(6.5,3);
\node[circle,fill=red,inner sep=2pt,label={below:a}] (1) at (6.5,3){};
\node[label={below:b}] (2) at (8.5,3){};
\draw (6.5,2.875)--(6.5,3.125);
\draw (8.5,2.875)--(8.5,3.125);

\draw[Latex-Latex,color=black,very thick](5.5,1)--(9.5,1);
\draw[Latex-,color=red,thick](9.5,1)--(6.5,1);
\node[circle,draw,color=red,line width=1pt,inner sep=2pt,label={below:a}] (1) at (6.5,1){};
\node[label={below:b}] (2) at (8.5,1){};
\draw (6.5,0.875)--(6.5,1.125);
\draw (8.5,0.875)--(8.5,1.125);

\end{tikzpicture}
\end{document}
```

### Set Builder Notation

```tikz
\usepackage{pgfplots,tikz}
\usetikzlibrary{arrows.meta,calc}

\begin{document}
\begin{tikzpicture}

% table borders horizontal
\draw[thick] (0,9)--(10,9);
\draw[thick] (0,8)--(10,8);
\draw (0,6)--(10,6);
\draw (0,4)--(10,4);
\draw (0,2)--(10,2);
\draw[thick] (0,0)--(10,0);

%table borders vertical
\draw[thick] (0,0)--(0,9);
\draw (2.5,0)--(2.5,9);
\draw (5,0)--(5,9);
\draw[thick] (10,0)--(10,9);

%table headers
\node at (1.25,8.5) {\large{Set Builder}};
\node at (3.75,8.5) {\large{Inequality}};
\node at (7.5,8.5) {\large{Number Line}};

%Intervals
\node at (1.25,7) {$\{x|a< x\leq b\}$};
\node at (1.25,5) {$\{x|a <x< b\}$};
\node at (1.25,3) {$\{x|a\leq x< b\}$};
\node at (1.25,1) {$\{x|a\leq x\leq b\}$};

%Inequalities
\node at (3.75,7) {$a< x\leq b$};
\node at (3.75,5) {$a <x< b$};
\node at (3.75,3) {$a\leq x< b$};
\node at (3.75,1) {$a\leq x\leq b$};

%Number Lines
\draw[Latex-Latex,color=black,very thick](5.5,7)--(9.5,7);
\draw[color=red,thick](6.5,7)--(8.5,7);
\node[circle,draw,color=red,line width=1pt,inner sep=2pt,label={below:a}] (1) at (6.5,7){};
\node[circle,fill=red,inner sep=2pt,label={below:b}] (2) at (8.5,7){};
\draw (6.5,6.875)--(6.5,7.125);
\draw (8.5,6.875)--(8.5,7.125);

\draw[Latex-Latex,color=black,very thick](5.5,5)--(9.5,5);
\draw[color=red,thick](6.5,5)--(8.5,5);
\node[circle,draw,color=red,line width=1pt,inner sep=2pt,label={below:a}] (1) at (6.5,5){};
\node[circle,draw,color=red,line width=1pt,inner sep=2pt,label={below:b}] (2) at (8.5,5){};
\draw (6.5,4.875)--(6.5,5.125);
\draw (8.5,4.875)--(8.5,5.125);

\draw[Latex-Latex,color=black,very thick](5.5,3)--(9.5,3);
\draw[color=red,thick](6.5,3)--(8.5,3);
\node[circle,fill=red,inner sep=2pt,label={below:a}] (1) at (6.5,3){};
\node[circle,draw,color=red,line width=1pt,inner sep=2pt,label={below:b}] (2) at (8.5,3){};
\draw (6.5,2.875)--(6.5,3.125);
\draw (8.5,2.875)--(8.5,3.125);

\draw[Latex-Latex,color=black,very thick](5.5,1)--(9.5,1);
\draw[color=red,thick](6.5,1)--(8.5,1);
\node[circle,fill=red,inner sep=2pt,label={below:a}] (1) at (6.5,1){};
\node[circle,fill=red,inner sep=2pt,label={below:b}] (2) at (8.5,1){};
\draw (6.5,0.875)--(6.5,1.125);
\draw (8.5,0.875)--(8.5,1.125);

\end{tikzpicture}
\end{document}
```

```tikz
\usepackage{pgfplots,tikz}
\usetikzlibrary{arrows.meta,calc}

\begin{document}
\begin{tikzpicture}

% table borders horizontal
\draw[thick] (0,9)--(10,9);
\draw[thick] (0,8)--(10,8);
\draw (0,6)--(10,6);
\draw (0,4)--(10,4);
\draw (0,2)--(10,2);
\draw[thick] (0,0)--(10,0);

%table borders vertical
\draw[thick] (0,0)--(0,9);
\draw (2.5,0)--(2.5,9);
\draw (5,0)--(5,9);
\draw[thick] (10,0)--(10,9);

%table headers
\node at (1.25,8.5) {\large{Set Builder}};
\node at (3.75,8.5) {\large{Inequality}};
\node at (7.5,8.5) {\large{Number Line}};

%Intervals
\node at (1.25,7) {$\{x|x\leq a\}$};
\node at (1.25,5) {$\{x|x<a\}$};
\node at (1.25,3) {$\{x|x\geq a\}$};
\node at (1.25,1) {$\{x|x>a\}$};

%Inequalities
\node at (3.75,7) {$x\leq a$};
\node at (3.75,5) {$x<a$};
\node at (3.75,3) {$x\geq a$};
\node at (3.75,1) {$x>a$};

%Number Lines
\draw[Latex-Latex,color=black,very thick](5.5,7)--(9.5,7);
\draw[Latex-,color=red,thick](5.5,7)--(6.5,7);
\node[circle,fill=red,inner sep=2pt,label={below:a}] (1) at (6.5,7){};
\node[label={below:b}] (2) at (8.5,7){};
\draw (6.5,6.875)--(6.5,7.125);
\draw (8.5,6.875)--(8.5,7.125);

\draw[Latex-Latex,color=black,very thick](5.5,5)--(9.5,5);
\draw[Latex-,color=red,thick](5.5,5)--(6.5,5);
\node[circle,draw,color=red,line width=1pt,inner sep=2pt,label={below:a}] (1) at (6.5,5){};
\node[label={below:b}] (2) at (8.5,5){};
\draw (6.5,4.875)--(6.5,5.125);
\draw (8.5,4.875)--(8.5,5.125);

\draw[Latex-Latex,color=black,very thick](5.5,3)--(9.5,3);
\draw[Latex-,color=red,thick](9.5,3)--(6.5,3);
\node[circle,fill=red,inner sep=2pt,label={below:a}] (1) at (6.5,3){};
\node[label={below:b}] (2) at (8.5,3){};
\draw (6.5,2.875)--(6.5,3.125);
\draw (8.5,2.875)--(8.5,3.125);

\draw[Latex-Latex,color=black,very thick](5.5,1)--(9.5,1);
\draw[Latex-,color=red,thick](9.5,1)--(6.5,1);
\node[circle,draw,color=red,line width=1pt,inner sep=2pt,label={below:a}] (1) at (6.5,1){};
\node[label={below:b}] (2) at (8.5,1){};
\draw (6.5,0.875)--(6.5,1.125);
\draw (8.5,0.875)--(8.5,1.125);

\end{tikzpicture}
\end{document}
```

## Subsets and Supersets

For any set to be a subset of another, all elements it contains must be found in the other set.
A set ${}A{}$ is the subset of ${}B{}$ if and only if all the elements of set ${}A{}$ are found in set ${}B{}$.
Thus it is expressed as: ${}A \subseteq B{}$. This is read as: "set ${}A{}$ is a subset of set ${}B{}$"

A well known subset relations is this:

$$
\mathbb{N} \subseteq \mathbb{Z} \subseteq \mathbb{Q} \subseteq \mathbb{R} \subseteq \mathbb{C} \text{ and } \mathbb{Q}' \subseteq \mathbb{R}
$$

# Natural Numbers

# Integers

# Rational and Irrational Numbers

# Real Numbers

# Complex Numbers
