**Functions** is a topic of [[Algebra]].

# Functions and Relations

## Relations

A relation of two sets (usually set X and set Y) form a set of Ordered Pairs (x,y) such that:

$$
R=\{(x,y):x\in X, y\in Y\}
$$

### Presenting Relations

- Equations

$$
E=\left\{ (x,y):y=\frac{1}{2}x, a,b=\in \mathbb{N} \right\}\\ \\
=\left\{ (2,1),\left( 3, \frac{3}{2} \right),(4,2),\dots \right\}
$$

- Inequalities

$$
G=\{(x,y):x, y \in \mathbb{N}, x<y<10\}\\ \\
=\{(2,3),(1,4),(4,8),\dots\}
$$

- Table of Values

|  x  | -2  | -1  |  0  |  1  |  2  |
| :-: | :-: | :-: | :-: | :-: | :-: |
|  y  |  5  |  2  |  1  |  2  |  5  |

- Diagrams

```tikz
\usetikzlibrary{positioning, arrows.meta}
\begin{document} 
\centering
\begin{tikzpicture}[
	element/.style={circle, fill=white, inner sep=0pt, minimum size=12pt},
	>=Stealth,
	node distance=0.8cm and 4cm
	]
	\draw[thick, fill=white] (0,0) ellipse (1.0cm and 2.7cm);
	\node[above] at  (0,2.7){$X$};
	
	\node (x1) [element] at (0,2) {$a$}; 
	\node (x2) [element] at (0, 1) {$b$}; 
	\node (x3) [element] at (0, 0) {$c$}; 
	\node (x4) [element] at (0, -1) {$d$}; 
	\node (x5) [element] at (0, -2) {$e$}; 
	
	\draw[thick, fill=white] (4,0) ellipse (1.0cm and 2.7cm); 
	\node[above] at (4, 2.7) {$Y$};
	
	\node (y1) [element] at (4, 1.5) {$1$}; 
	\node (y2) [element] at (4, 0.5) {$2$}; 
	\node (y3) [element] at (4, -0.5) {$3$}; 
	\node (y4) [element] at (4, -1.5) {$4$}; 
	
	\draw[->, thick, shorten >=2pt, shorten <=2pt] (x1) -- (y1);
	\draw[->, thick, shorten >=2pt, shorten <=2pt] (x1) -- (y2); 
	\draw[->, thick, shorten >=2pt, shorten <=2pt] (x4) -- (y3); 
	\draw[->, thick, shorten >=2pt, shorten <=2pt] (x5) -- (y4);
	\end{tikzpicture}
\end{document}
```

- Graphs

```tikz
\usepackage{tikz}
\usepackage{pgfplots}
\usepgflibrary{shapes.geometric}
\usetikzlibrary{calc,arrows.meta}
\pgfplotsset{my style/.append style={axis x line=middle, axis y line= middle, xlabel={$x$}, ylabel={$y$}, axis equal, grid=both, major grid style={line width=.2pt, draw=black!50}, minor grid style={line width=0.05pt, draw=gray!50}, width=10cm, height=10cm, scale only axis=true}}

\begin{document}
\begin{tikzpicture} 

\begin{axis}[my style, xtick={-5,-4,...,5}, ytick={-5,-4,...,5}, xmin=-5, xmax=5, ymin=-5, ymax=5] 

\addplot+[Stealth-Stealth,no marks,domain=-5:5]{x};

\end{axis} 

\end{tikzpicture}
\end{document}
```

## Function

A Relation is a Function (Rule) if and only if an element ${}x \in X{}$ is assigned to one and exactly only one element ${}y \in Y{}$
Functions are also known as **mapping**. They are named using letters like ${}f,g,h,\dots{}$

### Domain, Codomain, and Range

The **Domain** of a function ${}f{}$ is the set ${}X{}$, where it is denoted as ${}D_{f}{}$
The **Codomain** of a function ${}f{}$ is the set ${}Y{}$, where it is denoted as ${}C_{f}{}$

A function is generally written as

$$
f:X\to Y
$$

The **Range**:

$$
\text{Let } f:X\to Y \text{ be a function and }x \in X \\ \\
\text{Then } f(x) \text{ is the value of the function } f \text{ at }x\\ \\
\therefore \text{The Range } R_{f}\text{ of }f \text{ is the set}\\
R_{f}=\{f(x):x \in X\}
$$

notes:

- ${}f(x){}$ is read as "${}f{}$ of ${}x{}$". It is also known as the image of ${}x{}$ under the function ${}f{}$.
- Some functions have real values for all real numbers (${}\mathbb{R}{}$). Therefore, their domain and range is the set of all real numbers ${}\mathbb{R}{}$.

### Characteristics of Functions

1. Each element of ${}X{}$ must be assigned to exactly one element of ${}Y{}$.
2. Some elements of ${}Y{}$ may not be an image if an element of ${}X{}$.
3. Two or more elements of ${}X{}$ may be assigned to the same element of ${}Y{}$.
4. An element of ${}X{}$ cannot be assigned to multiple elements of ${}Y{}$.

### Function as an Equation

A function in equation form is an equation in the form of:

$$
y=f(x)
$$

where for each value of ${}x{}$ there is exactly one value of ${}y{}$.
It can be assumed that ${}x{}$ is the **independent variable** and the ${}y{}$ is the **dependent variable**
It can be therefore said that "${}y{}$ is a function of ${}x{}$"

### Evaluating Functions

Given the function ${}y=f(x){}$, its value at point ${}a{}$ is denoted as ${}f(a){}$ and can be obtained by substituting all of the ${}x{}$ in the function ${}f(x){}$ with ${}a{}$.

### Graphing Functions in a Coordinate Plane

The **graph** of a function ${}f{}$ is the set of all points ${}(x,y){}$ on the plane that satisfy the equation ${}y=f(x){}$, where:

$$
\{(x,y):y=f(x)\}
$$

Consider the following table of values:

|  x  |  0  |  2  |  4  |
|:---:|:---:|:---:|:---:|
|  y  |  3  |  5  |  7  |

Considering that there are only 3 ordered pairs presented in the table of values, the function is a finite set where:

$$
\{(0,3),(2,5),(4,7)\}
$$

Plotting these points in a graph would look like this:

```tikz
\usepackage{tikz}
\usepackage{pgfplots}
\usepgflibrary{shapes.geometric}
\usetikzlibrary{calc,arrows.meta}
\pgfplotsset{my style/.append style={
axis line style={
-Latex, 
line width=1pt
}, 
axis lines=middle, 
xlabel={$x$}, ylabel={$y$}, 
axis equal, grid=both, 
major grid style={line width=.3pt, draw=black!50}, 
minor grid style={line width=0.1pt, draw=gray!50}, 
width=10cm, height=10cm, 
scale only axis=true, 
tick label style={font=\small},
legend style={
at={(1,0)},
anchor=south east,
thick,
inner sep=3pt
}
}}

\begin{document}
\begin{tikzpicture} 

\begin{axis}[my style, xtick={-10,-5,...,10}, ytick={-10,-5,...,10}, xmin=-10, xmax=10, ymin=-10, ymax=10, minor tick num=4] 

\addplot[blue,mark=*,only marks] coordinates {(0,3)(2,5)(4,7)};

\end{axis} 

\end{tikzpicture}
\end{document}
```

Now consider the following function:

$$
y=f(x)=2x+2
$$

Observe that:

|  x  |  0  |  1  |  2  |  3  |  4  |  5  |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
|  y  |  2  |  4  |  6  |  8  | 10  | 12  |

When you plot these points...

```tikz
\usepackage{tikz}
\usepackage{pgfplots}
\usepgflibrary{shapes.geometric}
\usetikzlibrary{calc,arrows.meta}
\pgfplotsset{my style/.append style={
axis line style={
-Latex, 
line width=1pt
}, 
axis lines=middle, 
xlabel={$x$}, ylabel={$y$}, 
axis equal, grid=both, 
major grid style={line width=.3pt, draw=black!50}, 
minor grid style={line width=0.1pt, draw=gray!50}, 
width=10cm, height=10cm, 
scale only axis=true, 
tick label style={font=\small},
legend style={
at={(1,0)},
anchor=south east,
thick,
inner sep=3pt
}
}}

\begin{document}
\begin{tikzpicture} 

\begin{axis}[my style, xtick={-16,-14,-12,...,16}, ytick={-16,-14,-12,...,16}, xmin=-15, xmax=15, ymin=-15, ymax=15, minor tick num=1] 

\addplot[blue,mark=*,only marks] coordinates {(0,2)(1,4)(2,6)(3,8)(4,10)(5,12)};

\end{axis} 

\end{tikzpicture}
\end{document}
```

When you draw a line passing through these points...

```tikz
\usepackage{tikz}
\usepackage{pgfplots}
\usepgflibrary{shapes.geometric}
\usetikzlibrary{calc, arrows.meta}
\pgfplotsset{my style/.append style={
axis line style={
-Latex, 
line width=1pt
}, 
axis lines=middle, 
xlabel={$x$}, ylabel={$y$}, 
axis equal, grid=both, 
major grid style={line width=.3pt, draw=black!50}, 
minor grid style={line width=0.1pt, draw=gray!50}, 
width=10cm, height=10cm, 
scale only axis=true, 
tick label style={font=\small},
legend style={
at={(1,0)},
anchor=south east,
thick,
inner sep=3pt
}
}}

\begin{document}
\begin{tikzpicture} 

\begin{axis}[my style, xtick={-16,-14,-12,...,16}, ytick={-16,-14,-12,...,16}, xmin=-15, xmax=15, ymin=-15, ymax=15, minor tick num=1] 

\addplot[blue,mark=*,only marks] coordinates {(0,2)(1,4)(2,6)(3,8)(4,10)(5,12)};
\addplot+[Stealth-Stealth,no marks,red,thick,domain=-8.5:6.5]{2*x+2};

\end{axis} 

\end{tikzpicture}
\end{document}
```

Consider a set ${}R=\{(x,y):y^{2}=x\}{}$. This suggests that:

$$
(1,-1),(1,1)\in \mathbb{R}
$$

It implies that the set ${}R{}$ is **not** a function. Its graph will look like:

```tikz
\usepackage{tikz}
\usepackage{pgfplots}
\usepgflibrary{shapes.geometric}
\usetikzlibrary{calc,arrows.meta}
\pgfplotsset{my style/.append style={
axis line style={
-Latex, 
line width=1pt
}, 
axis lines=middle, 
xlabel={$x$}, ylabel={$y$}, 
axis equal, grid=both, 
major grid style={line width=.3pt, draw=black!50}, 
minor grid style={line width=0.1pt, draw=gray!50}, 
width=10cm, height=10cm, 
scale only axis=true, 
tick label style={font=\small},
legend style={
at={(1,0)},
anchor=south east,
thick,
inner sep=3pt
}
}}

\begin{document}
\begin{tikzpicture} 

\begin{axis}[my style, xtick={-7,-6,...,7}, ytick={-7,-6,...,7}, xmin=-7, xmax=7, ymin=-7, ymax=7,samples=100] 

\addplot+[-Stealth,color=blue,samples=100,domain=0:7,no marks]{sqrt(x)};
\addplot+[-Stealth,color=blue,samples=100,domain=0:7,no marks]{-sqrt(x)};
\addlegendentry{\(y^{2}=x\)}
\end{axis} 

\end{tikzpicture}
\end{document}
```

#### Vertical Line Test

The vertical line test is a test to check if a function is a function or just a relation.
To perform the vertical line test:

1. Graph or look at the graph of the function you want to check.
2. Create a vertical line at any point in the graph.
3. If **any** vertical line crosses/intersects the graph **at least twice**, it is **not** a function but a relation.
4. If no vertical line intersects the graph at least twice, it is considered as a function.

### Graph Intercepts

The **${}x{}$-intercept(s)** of a function the **abscissa** of a point that intersects with the ${}x{}$-axis
To find the ${}x{}$-intercepts of a function, Let ${}y=0{}$ then solve for ${}x{}$.
The resulting point would then look like ${}(x,0){}$.

The **${}y{}$-intercept** of a function is the **ordinate** of a point that intersects with the ${}y{}$-axis
To find the ${}y{}$-intercept of a function, Let ${}x=0{}$ then solve for ${}y{}$.
The resulting point would then look like ${}(0,y){}$.

Where Abscissa and Ordinate is written as:

$$
(\text{Abscissa},\text{Ordinate})
$$

Consider the following equation and its graph:

$$
y=\frac{1}{4}x+2
$$

```tikz
\usepackage{tikz}
\usepackage{pgfplots}
\usepgflibrary{shapes.geometric}
\usetikzlibrary{calc,arrows.meta}
\pgfplotsset{my style/.append style={
axis line style={
-Latex, 
line width=1pt
}, 
axis lines=middle, 
xlabel={$x$}, ylabel={$y$}, 
axis equal, grid=both, 
major grid style={line width=.3pt, draw=black!50}, 
minor grid style={line width=0.1pt, draw=gray!50}, 
width=10cm, height=10cm, 
scale only axis=true, 
tick label style={font=\small},
legend style={
at={(1,0)},
anchor=south east,
thick,
inner sep=3pt
}
}}

\begin{document}
\begin{tikzpicture} 

\begin{axis}[my style, xtick={-10,-8,...,10}, ytick={-10,-8,...,10}, xmin=-10, xmax=10, ymin=-10, ymax=10,minor tick num=1] 

\addplot[{Stealth}-{Stealth},color=red,thick,samples=100,domain=-9.5:10,no marks]{(1/4)*x+2};
\addlegendentry{\(f(x)=\frac{1}{4} x+2\)}
\node[circle,fill=red,inner sep=1.5pt,text=black,label={above:$(-8,0)$}] (1) at (axis cs:-8,0){};
\node[circle,fill=red,inner sep=1.5pt,text=black,label={above left:$(0,2)$}] (1) at (axis cs:0,2){};

\end{axis} 

\end{tikzpicture}
\end{document}
```

Observe that:
The ${}x{}$-intercept of the graph lies at: ${}x=-8{}$ or ${}(-8,0){}$
The ${}y{}$-intercept of the graph lies at: ${}y=2{}$ or ${}(0,2){}$

To find the ${}x{}$-intercept of a function, Let ${}y=0{}$ then solve for ${}x{}$

$$
\begin{align}
y=\frac{1}{4}x+2 &\implies 0=\frac{1}{4}x+2\\
&\implies 0-2=\frac{1}{4}x+2-2\\
&\implies (4)(-2)=\frac{1}{4}x(4)\\
&\implies -8=x\\
&\implies(-8,0)
\end{align}\\ \\
\text{Thus, the }x\text{-intercept lies at point }(-8,0)
$$

To find the ${}y{}$-intercept of a function, Let ${}x=0{}$ then solve for ${}y{}$

$$
\begin{aligned}
y=\frac{1}{4}x+2&\implies y=\frac{1}{4}(0)+2\\
&\implies y=2\\
&\implies (0,2)\\ \\
\end{aligned}\\
\text{Thus, the }y\text{-intercept lies at point }(0,2)
$$

### An Increase or Decrease of a Graph along an Interval

A function ${}y=f(x){}$ is said to be increasing on an interval ${}I{}$ if for all ${}x_{1},x_{2}\in I{}$,

$$
x_{1}<x_{2}\iff f(x_{1})<f(x_{2})
$$

Observe the graph of ${}f(x)=x{}$

```tikz
\usepackage{tikz}
\usepgflibrary{shapes.geometric}
\usetikzlibrary{calc,arrows.meta}

\begin{document}

\begin{tikzpicture}[scale=2]

\draw[<->,very thick] (-0.5,0) -- (3,0) node[above] {$x$}; 
\draw[<->,very thick] (0,-0.5) -- (0,3) node[right] {$y$}; 
\draw[<->, red, thick] (-0.25,-0.25) -- (3,3);
\node[circle,fill=red,inner sep=2pt,label={below:$x_{1}$}] (x1) at (1,0){};
\node[circle,fill=red,inner sep=2pt,label={below:$x_{2}$}] (x2) at (2,0){};
\node[circle,fill=red,inner sep=2pt,label={left:$f(x_{1})$}] (fx1) at (0,1){};
\node[circle,fill=red,inner sep=2pt,label={left:$f(x_{2})$}] (fx2) at (0,2){};
\draw[dashed,red,thick] (1,0) -- (1,1);
\draw[dashed,red,thick] (0,1) -- (1,1);
\draw[dashed,red,thick] (2,0) -- (2,2);
\draw[dashed,red,thick] (0,2) -- (2,2);

\end{tikzpicture}
\end{document}
```

Let ${}x_{1}=1{}$ and ${}x_{2}=2{}$
Observe the functions ${}f(x_{1}){}$ and ${}f(x_{2}){}$:

$$
x_{1}<x_{2}\iff f(x_{1})<f(x_{2})\\
f(x_{1})<f(x_{2})\\
\implies x_{1}<x_{2}\\
\implies 1<2\\
\therefore f(x) \text{ is increasing on the interval }I
$$

A function ${}y=f(x){}$ is said to be increasing on an interval ${}I{}$ if for all ${}x_{1},x_{2}\in I{}$,

$$
x_{1}<x_{2}\iff f(x_{1})>f(x_{2})
$$

Observe the graph of ${}g(x)=-x+3{}$

```tikz
\usepackage{tikz}
\usepgflibrary{shapes.geometric}
\usetikzlibrary{calc,arrows.meta}

\begin{document}

\begin{tikzpicture}[scale=2]

\draw[<->,very thick] (-0.5,0) -- (4,0) node[above] {$x$}; 
\draw[<->,very thick] (0,-0.5) -- (0,4) node[right] {$y$}; 
\draw[<->, red, thick] (-0.25,3.25) -- (3.25,-0.25);
\node[circle,fill=red,inner sep=2pt,label={below:$x_{1}$}] (x1) at (1,0){};
\node[circle,fill=red,inner sep=2pt,label={below:$x_{2}$}] (x2) at (2,0){};
\node[circle,fill=red,inner sep=2pt,label={left:$f(x_{1})$}] (fx1) at (0,2){};
\node[circle,fill=red,inner sep=2pt,label={left:$f(x_{2})$}] (fx2) at (0,1){};
\draw[dashed,red,thick] (1,0) -- (1,2);
\draw[dashed,red,thick] (0,1) -- (2,1);
\draw[dashed,red,thick] (2,0) -- (2,1);
\draw[dashed,red,thick] (0,2) -- (1,2);

\end{tikzpicture}
\end{document}
```

Let ${}x_{1}=1{}$ and ${}x_{2}=2{}$
Observe the functions ${}f(x_{1}){}$ and ${}f(x_{2}){}$

$$
x_{1}<x_{2}\iff f(x_{1})>f(x_{2})\\
f(x_{1})>f(x_{2})\\
\implies -x_{1}+10>-x_{2}+10\\
\implies -1+3>-2+3\\
\implies 2>1\\
\therefore g(x) \text{ is decreasing on the interval }I
$$

A function ${}y=f(x){}$ is said to be constant on an interval ${}I{}$ if for all ${}x_{1},x_{2}\in I{}$,

$$
x_{1}<x_{2}\iff f(x_{1})=f(x_{2})
$$

Observe the graph of ${}h(x)=2{}$

```tikz
\usepackage{tikz}
\usepgflibrary{shapes.geometric}
\usetikzlibrary{calc,arrows.meta}

\begin{document}

\begin{tikzpicture}[scale=2]

\draw[<->,very thick] (-0.5,0) -- (3,0) node[above] {$x$}; 
\draw[<->,very thick] (0,-0.5) -- (0,3) node[right] {$y$}; 
\draw[<->, red, thick] (0,2) -- (3,2);
\node[circle,fill=red,inner sep=2pt,label={below:$x_{1}$}] (x1) at (1,0){};
\node[circle,fill=red,inner sep=2pt,label={below:$x_{2}$}] (x2) at (2,0){};
\node[circle,fill=red,inner sep=2pt,label={above left:$f(x_{1})$}] (fx1) at (0,2){};
\node[circle,fill=red,inner sep=2pt,label={below left:$f(x_{2})$}] (fx2) at (0,2){};
\draw[dashed,red,thick] (1,0) -- (1,2);
\draw[dashed,red,thick] (2,0) -- (2,2);
\draw[dashed,red,thick] (0,2) -- (1,2);
\draw[dashed,red,thick] (0,2) -- (2,2);

\end{tikzpicture}
\end{document}
```

Let ${}x_{1}=1{}$ and ${}x_{2}=2{}$
Observe the functions ${}f(x_{1}){}$ and ${}f(x_{2}){}$

$$
x_{1}<x_{2}\iff f(x_{1})=f(x_{2})\\
f(x_{1})=f(x_{2})\\
\implies 2=2\\
\therefore h(x) \text{ is constant on the interval }I
$$

# Types of Functions

## Constant Functions

$$
y=f(x)=b
$$

${}D=\mathbb{R}=\{x|x \in \mathbb{R}\}{}$
${}R=\{b\}=\{y:y=b\}{}$

```tikz
\usepackage{tikz}
\usepackage{pgfplots}
\usepgflibrary{shapes.geometric}
\usetikzlibrary{calc,arrows.meta}
\pgfplotsset{my style/.append style={
axis line style={-Latex,line width=1pt}, 
axis lines=middle, 
xlabel={$x$}, ylabel={$y$}, 
axis equal, grid=both, 
major grid style={line width=.3pt, draw=black!50}, 
minor grid style={line width=0.1pt, draw=gray!50}, 
width=10cm, height=10cm, 
scale only axis=true, 
tick label style={font=\small},
legend style={at={(1,0)},anchor=south east,thick,inner sep=3pt}
}}

\begin{document}
\begin{tikzpicture} 

\begin{axis}[my style, xtick={-8,-7,...,8}, ytick={-8,-7,...,8}, xmin=-8, xmax=8, ymin=-8, ymax=8] 

\addplot+[Latex-Latex,color=green,samples=100,domain=-8:8,no marks,line width=1pt]{3};
\node[circle,fill=red,inner sep=2pt,label={above right:$(0,3)$}] (1) at (axis cs:0,3){};
\addlegendentry{\(f(x)=3\)}
\end{axis} 

\end{tikzpicture}
\end{document}
```

The only constant function with an ${}x{}$ intercept is ${}y=0{}$.

```tikz
\usepackage{tikz}
\usepackage{pgfplots}
\usepgflibrary{shapes.geometric}
\usetikzlibrary{calc,arrows.meta}
\pgfplotsset{my style/.append style={
axis line style={-Latex,line width=1pt}, 
axis lines=middle, 
xlabel={$x$}, ylabel={$y$}, 
axis equal, grid=both, 
major grid style={line width=.3pt, draw=black!50}, 
minor grid style={line width=0.1pt, draw=gray!50}, 
width=10cm, height=10cm, 
scale only axis=true, 
tick label style={font=\small},
legend style={at={(1,0)},anchor=south east,thick,inner sep=3pt}
}}

\begin{document}
\begin{tikzpicture} 

\begin{axis}[my style, xtick={-8,-7,...,8}, ytick={-8,-7,...,8}, xmin=-8, xmax=8, ymin=-8, ymax=8] 

\addplot+[Stealth-Stealth,color=red,samples=100,domain=-8:8,no marks,line width=1pt]{0};
\node[circle,fill=red,inner sep=2pt,label={above right:$(0,0)$}] (1) at (axis cs:0,0){};
\addlegendentry{\(f(x)=0\)}
\end{axis} 

\end{tikzpicture}
\end{document}
```

## Linear Functions

$$
y=f(x)=mx+b
$$

${}D=\mathbb{R}=\{x|x \in \mathbb{R}\}{}$
${}R=\mathbb{R}=\{y|y \in \mathbb{R}\}{}$

```tikz
\usepackage{tikz}
\usepackage{pgfplots}
\usepgflibrary{shapes.geometric}
\usetikzlibrary{calc,arrows.meta}
\pgfplotsset{my style/.append style={
axis line style={-Latex,line width=1pt}, 
axis lines=middle, 
xlabel={$x$}, ylabel={$y$}, 
axis equal, grid=both, 
major grid style={line width=.3pt, draw=black!50}, 
minor grid style={line width=0.1pt, draw=gray!50}, 
width=10cm, height=10cm, 
scale only axis=true, 
tick label style={font=\small},
legend style={at={(1,0)},anchor=south east,thick,inner sep=3pt}
}}

\begin{document}
\begin{tikzpicture} 

\begin{axis}[my style, xtick={-8,-7,...,8}, ytick={-8,-7,...,8}, xmin=-8, xmax=8, ymin=-8, ymax=8] 

\addplot+[Latex-Latex,color=green,samples=100,domain=-8:8,no marks,line width=1pt]{x};
\node[circle,fill=red,inner sep=2pt,label={above left:$(0,0)$}] (1) at (axis cs:0,0){};
\addlegendentry{\(f(x)=x\)}
\end{axis} 

\end{tikzpicture}
\end{document}
```

Observe the following functions:
${}f(x)=x{}$

```tikz
\usepackage{tikz}
\usepackage{pgfplots}
\usepgflibrary{shapes.geometric}
\usetikzlibrary{calc,arrows.meta}
\pgfplotsset{my style/.append style={
axis line style={-Latex,line width=1pt}, 
axis lines=middle, 
xlabel={$x$}, ylabel={$y$}, 
axis equal, grid=both, 
major grid style={line width=.3pt, draw=black!50}, 
minor grid style={line width=0.1pt, draw=gray!50}, 
width=10cm, height=10cm, 
scale only axis=true, 
tick label style={font=\small},
legend style={at={(1,0)},anchor=south east,thick,inner sep=3pt}
}}

\begin{document}
\begin{tikzpicture} 

\begin{axis}[my style, xtick={-8,-7,...,8}, ytick={-8,-7,...,8}, xmin=-8, xmax=8, ymin=-8, ymax=8] 

\addplot+[Latex-Latex,color=red,samples=100,domain=-8:8,no marks,line width=1pt]{x};
\node[circle,fill=red,inner sep=2pt,label={above left:$(0,0)$}] (1) at (axis cs:0,0){};
\addlegendentry{\(f(x)=x\)}
\end{axis} 

\end{tikzpicture}
\end{document}
```

${}f(x)=-x{}$

```tikz
\usepackage{tikz}
\usepackage{pgfplots}
\usepgflibrary{shapes.geometric}
\usetikzlibrary{calc,arrows.meta}
\pgfplotsset{my style/.append style={
axis line style={-Latex,line width=1pt}, 
axis lines=middle, 
xlabel={$x$}, ylabel={$y$}, 
axis equal, grid=both, 
major grid style={line width=.3pt, draw=black!50}, 
minor grid style={line width=0.1pt, draw=gray!50}, 
width=10cm, height=10cm, 
scale only axis=true, 
tick label style={font=\small},
legend style={at={(1,0)},anchor=south east,thick,inner sep=3pt}
}}

\begin{document}
\begin{tikzpicture} 

\begin{axis}[my style, xtick={-8,-7,...,8}, ytick={-8,-7,...,8}, xmin=-8, xmax=8, ymin=-8, ymax=8] 

\addplot+[Latex-Latex,color=red,samples=100,domain=-8:8,no marks,line width=1pt]{-x};
\node[circle,fill=red,inner sep=2pt,label={above right:$(0,0)$}] (1) at (axis cs:0,0){};
\addlegendentry{\(f(x)=-x\)}
\end{axis} 

\end{tikzpicture}
\end{document}
```

${}f(x)=x+1{}$

```tikz
\usepackage{tikz}
\usepackage{pgfplots}
\usepgflibrary{shapes.geometric}
\usetikzlibrary{calc,arrows.meta}
\pgfplotsset{my style/.append style={
axis line style={-Latex,line width=1pt}, 
axis lines=middle, 
xlabel={$x$}, ylabel={$y$}, 
axis equal, grid=both, 
major grid style={line width=.3pt, draw=black!50}, 
minor grid style={line width=0.1pt, draw=gray!50}, 
width=10cm, height=10cm, 
scale only axis=true, 
tick label style={font=\small},
legend style={at={(1,0)},anchor=south east,thick,inner sep=3pt}
}}

\begin{document}
\begin{tikzpicture} 

\begin{axis}[my style, xtick={-8,-7,...,8}, ytick={-8,-7,...,8}, xmin=-8, xmax=8, ymin=-8, ymax=8] 

\addplot+[Latex-Latex,color=red,samples=100,domain=-8:7,no marks,line width=1pt]{x+1};
\node[circle,fill=red,inner sep=2pt,label={below right:$(0,1)$}] (1) at (axis cs:0,1){};
\node[circle,fill=red,inner sep=2pt,label={above left:$(-1,0)$}] (1) at (axis cs:-1,0){};
\addlegendentry{\(f(x)=x+1\)}
\end{axis} 

\end{tikzpicture}
\end{document}
```

${}f(x)=x-1{}$

```tikz
\usepackage{tikz}
\usepackage{pgfplots}
\usepgflibrary{shapes.geometric}
\usetikzlibrary{calc,arrows.meta}
\pgfplotsset{my style/.append style={
axis line style={-Latex,line width=1pt}, 
axis lines=middle, 
xlabel={$x$}, ylabel={$y$}, 
axis equal, grid=both, 
major grid style={line width=.3pt, draw=black!50}, 
minor grid style={line width=0.1pt, draw=gray!50}, 
width=10cm, height=10cm, 
scale only axis=true, 
tick label style={font=\small},
legend style={at={(1,0)},anchor=south east,thick,inner sep=3pt}
}}

\begin{document}
\begin{tikzpicture} 

\begin{axis}[my style, xtick={-8,-7,...,8}, ytick={-8,-7,...,8}, xmin=-8, xmax=8, ymin=-8, ymax=8] 

\addplot+[latex-Latex,color=red,samples=100,domain=-7:8,no marks,line width=1pt]{x-1};
\node[circle,fill=red,inner sep=2pt,label={below right:$(0,-1)$}] (1) at (axis cs:0,-1){};
\node[circle,fill=red,inner sep=2pt,label={above left:$(1,0)$}] (1) at (axis cs:1,0){};
\addlegendentry{\(f(x)=x-1\)}
\end{axis} 

\end{tikzpicture}
\end{document}
```

## Quadratic Functions

$$
y=f(x)=ax^{2}+bx+c=a(x-h)^2+k
$$

```tikz
\usepackage{tikz}
\usepackage{pgfplots}
\usepgflibrary{shapes.geometric}
\usetikzlibrary{calc,arrows.meta}
\pgfplotsset{my style/.append style={
axis line style={-Latex,line width=1pt}, 
axis lines=middle, 
xlabel={$x$}, ylabel={$y$}, 
axis equal, grid=both, 
major grid style={line width=.3pt, draw=black!50}, 
minor grid style={line width=0.1pt, draw=gray!50}, 
width=8cm,height=8cm,
scale only axis=true, 
tick label style={font=\small},
legend style={at={(1,0)},anchor=south east,thick,inner sep=3pt}
}}

\begin{document}
\begin{tikzpicture} 

\begin{axis}[my style, xtick={-8,-6,...,8}, ytick={-8,-6,...,8}, xmin=-8, xmax=8, ymin=-8, ymax=8,minor tick num=1] 

\addplot+[Latex-Latex,color=green,samples=100,domain=-2.82:2.82,no marks,line width=1pt]{x*x};
\node[circle,fill=red,inner sep=2pt] (1) at (axis cs:0,0){};
\addlegendentry{\(f(x)=x^{2}\)}

\end{axis} 

\end{tikzpicture}
\end{document}
```

$D=\mathbb{R}$\
$R=\{y:y\geq k\}=[k,\infty)$ if $a>0$
$R=\{y:y\leq k\}=(-\infty,k]$ if $a<0$
$Vertex=(-\frac{b}{2a},\frac{4ac-b^{2}}{4a})=(h,k)=(h,f(h))$

To convert general/standard form to vertex form:

$$
\begin{aligned}
f(x)=y=ax^{2}+bx+c &\implies y=a\left( x^{2}+\frac{b}{a}x \right)+c\\
&\implies y+a\left( \frac{b}{2a} \right)^{2}=a\left( x^{2}+\frac{b}{a}x+\left( \frac{b}{2a} \right)^{2} \right)+c\\
&\implies y=a\left( x+\left( \frac{b}{2a} \right) \right)^{2}+c-a\left( \frac{b}{2a} \right)^{2}\\
&\implies y=a\left( x+\left( \frac{b}{2a} \right) \right)^{2}+c-a\left( \frac{b^{2}}{4a^{2}} \right)\\
&\implies y=a\left( x+\left( \frac{b}{2a} \right) \right)^{2}+c-\left( \frac{b^{2}}{4a} \right)\\
&\implies y=a\left( x+\left( \frac{b}{2a} \right)^{2} \right)+\frac{4ac-b^{2}}{4a}
\end{aligned}
$$

To get the **range** without the formula and $a>0$:

$$
\begin{aligned}
(x-h)^{2}\geq 0&\implies a(x-h)^{2}\geq 0(a)
\\
&\implies a(x-h)^{2}+k\geq 0+k
\\
&\implies y\geq k
\end{aligned}\\
\therefore R=\{y:y\geq k\}
$$

To get the **range** without the formula and $a<0$:

$$
\begin{aligned}
(x-h)^{2}\geq 0&\implies a(x-h)^{2}\leq 0(a)\\
&\implies a(x-h)^{2}+k\leq 0+k\\
&\implies y\leq k
\end{aligned}
\\ \therefore R=\{y:y\leq k\}
$$

Observe the following graphs:
${}y=x^{2}{}$

```tikz
\usepackage{tikz}
\usepackage{pgfplots}
\usepgflibrary{shapes.geometric}
\usetikzlibrary{calc,arrows.meta}
\pgfplotsset{my style/.append style={
axis line style={-Latex,line width=1pt}, 
axis lines=middle, 
xlabel={$x$}, ylabel={$y$}, 
axis equal, grid=both, 
major grid style={line width=.3pt, draw=black!50}, 
minor grid style={line width=0.1pt, draw=gray!50}, 
width=10cm, height=10cm,
scale only axis=true, 
tick label style={font=\small},
legend style={at={(1,0)},anchor=south east,thick,inner sep=3pt}
}}
\begin{document}
\begin{tikzpicture} 

\begin{axis}[my style, xtick={-8,-7,...,8}, ytick={-8,-7,...,8}, xmin=-8, xmax=8, ymin=-8, ymax=8] 

\addplot+[Stealth-Stealth,color=red,samples=100,domain=-2.8:2.8,no marks,line width=1pt]{x^2};
\node[circle,fill=red,inner sep=2pt,label={below right:$(0,0)$}] (1) at (axis cs:0,0){};
\addlegendentry{\(f(x)=x^2\)}

\end{axis} 

\end{tikzpicture}
\end{document}
```

${}y=-x^{2}{}$

```tikz
\usepackage{tikz}
\usepackage{pgfplots}
\usepgflibrary{shapes.geometric}
\usetikzlibrary{calc,arrows.meta}
\pgfplotsset{my style/.append style={
axis line style={-Latex,line width=1pt}, 
axis lines=middle, 
xlabel={$x$}, ylabel={$y$}, 
axis equal, grid=both, 
major grid style={line width=.3pt, draw=black!50}, 
minor grid style={line width=0.1pt, draw=gray!50}, 
width=10cm, height=10cm, 
scale only axis=true, 
tick label style={font=\small},
legend style={at={(1,0)},anchor=south east,thick,inner sep=3pt}
}}

\begin{document}
\begin{tikzpicture} 

\begin{axis}[my style, xtick={-8,-7,...,8}, ytick={-8,-7,...,8}, xmin=-8, xmax=8, ymin=-8, ymax=8] 

\addplot+[Stealth-Stealth,color=red,samples=100,domain=-2.8:2.8,no marks,line width=1pt]{-x^2};
\node[circle,fill=red,inner sep=2pt,label={above right:$(0,0)$}] (1) at (axis cs:0,0){};
\addlegendentry{\(f(x)=-x^2\)}
\end{axis} 

\end{tikzpicture}
\end{document}
```

${}y=x^{2}+1{}$

```tikz
\usepackage{tikz}
\usepackage{pgfplots}
\usepgflibrary{shapes.geometric}
\usetikzlibrary{calc,arrows.meta}
\pgfplotsset{my style/.append style={
axis line style={
-Latex, 
line width=1pt
}, 
axis lines=middle, 
xlabel={$x$}, ylabel={$y$}, 
axis equal, grid=both, 
major grid style={line width=.3pt, draw=black!50}, 
minor grid style={line width=0.1pt, draw=gray!50}, 
width=10cm, height=10cm, 
scale only axis=true, 
tick label style={font=\small},
legend style={
at={(1,0)},
anchor=south east,
thick,
inner sep=3pt
}
}}

\begin{document}
\begin{tikzpicture} 

\begin{axis}[my style, xtick={-8,-7,...,8}, ytick={-8,-7,...,8}, xmin=-8, xmax=8, ymin=-8, ymax=8] 

\addplot+[Stealth-Stealth,color=red,samples=100,domain=-2.6:2.6,no marks,line width=1pt]{(x^2 +1)};
\node[circle,fill=red,inner sep=2pt,label={below right:$(0,1)$}] (1) at (axis cs:0,1){};
\addlegendentry{\(f(x)=x^{2} +1\)}
\end{axis} 

\end{tikzpicture}
\end{document}
```

${}y=x^{2}-1{}$

```tikz
\usepackage{tikz}
\usepackage{pgfplots}
\usepgflibrary{shapes.geometric}
\usetikzlibrary{calc,arrows.meta}
\pgfplotsset{my style/.append style={
axis line style={
-Latex, 
line width=1pt
}, 
axis lines=middle, 
xlabel={$x$}, ylabel={$y$}, 
axis equal, grid=both, 
major grid style={line width=.3pt, draw=black!50}, 
minor grid style={line width=0.1pt, draw=gray!50}, 
width=10cm, height=10cm, 
scale only axis=true, 
tick label style={font=\small},
legend style={
at={(1,0)},
anchor=south east,
thick,
inner sep=3pt
}
}}

\begin{document}
\begin{tikzpicture} 

\begin{axis}[my style, xtick={-8,-7,...,8}, ytick={-8,-7,...,8}, xmin=-8, xmax=8, ymin=-8, ymax=8] 

\addplot+[Stealth-Stealth,color=red,samples=100,domain=-3:3,no marks,line width=1pt]{x^2 -1};
\node[circle,fill=red,inner sep=2pt,label={below right:$(0,-1)$}] (1) at (axis cs:0,-1){};
\addlegendentry{\(f(x)=x^{2}-1\)}
\end{axis} 

\end{tikzpicture}
\end{document}
```

${}y=(x-1)^{2}{}$

```tikz
\usepackage{tikz}
\usepackage{pgfplots}
\usepgflibrary{shapes.geometric}
\usetikzlibrary{calc,arrows.meta}
\pgfplotsset{my style/.append style={
axis line style={
-Latex, 
line width=1pt
}, 
axis lines=middle, 
xlabel={$x$}, ylabel={$y$}, 
axis equal, grid=both, 
major grid style={line width=.3pt, draw=black!50}, 
minor grid style={line width=0.1pt, draw=gray!50}, 
width=10cm, height=10cm, 
scale only axis=true, 
tick label style={font=\small},
legend style={
at={(1,0)},
anchor=south east,
thick,
inner sep=3pt
}
}}

\begin{document}
\begin{tikzpicture} 

\begin{axis}[my style, xtick={-8,-7,...,8}, ytick={-8,-7,...,8}, xmin=-8, xmax=8, ymin=-8, ymax=8] 

\addplot+[Stealth-Stealth,color=red,samples=100,domain=-1.8:3.8,no marks,line width=1pt]{(x-1)^2};
\node[circle,fill=red,inner sep=2pt,label={above:$(1,0)$}] (1) at (axis cs:1,0){};
\node[circle,fill=red,inner sep=2pt,label={below left:$(0,1)$}] (1) at (axis cs:0,1){};
\addlegendentry{\(f(x)=(x-1)^2\)}
\end{axis} 

\end{tikzpicture}
\end{document}
```

${}y=(x+1)^{2}{}$

```tikz
\usepackage{tikz}
\usepackage{pgfplots}
\usepgflibrary{shapes.geometric}
\usetikzlibrary{calc,arrows.meta}
\pgfplotsset{my style/.append style={
axis line style={-Latex, line width=1pt}, 
axis lines=middle, 
xlabel={$x$}, ylabel={$y$}, 
axis equal, grid=both, 
major grid style={line width=.3pt, draw=black!50}, 
minor grid style={line width=0.1pt, draw=gray!50}, 
width=10cm, height=10cm, 
scale only axis=true, 
tick label style={font=\small},
legend style={at={(1,0)},anchor=south east,thick,inner sep=3pt}
}}

\begin{document}
\begin{tikzpicture} 

\begin{axis}[my style, xtick={-8,-7,...,8}, ytick={-8,-7,...,8}, xmin=-8, xmax=8, ymin=-8, ymax=8] 

\addplot+[Stealth-Stealth,color=red,samples=100,domain=-3.8:1.8,no marks,line width=1pt]{(x+1)^2};
\node[circle,fill=red,inner sep=2pt,label={above:$(-1,0)$}] (1) at (axis cs:-1,0){};
\node[circle,fill=red,inner sep=2pt,label={right:$(0,1)$}] (1) at (axis cs:0,1){};
\addlegendentry{\(f(x)=(x+1)^2\)}
\end{axis} 

\end{tikzpicture}
\end{document}
```

## Root Functions

$$
y=f(x)=\sqrt{ x }
$$

### Type 1

$$
y=f(x)=a\sqrt{b(x-h)}+k
$$

```tikz
\usepackage{tikz}
\usepackage{pgfplots}
\usepgflibrary{shapes.geometric}
\usetikzlibrary{calc,arrows.meta}
\pgfplotsset{my style/.append style={
axis line style={-Latex, line width=1pt}, 
axis lines=middle, 
xlabel={$x$}, ylabel={$y$}, 
axis equal, grid=both, 
major grid style={line width=.3pt, draw=black!50}, 
minor grid style={line width=0.1pt, draw=gray!50}, 
width=10cm, height=10cm, 
scale only axis=true, 
tick label style={font=\small},
legend style={
at={(1,0)},
anchor=south east,
thick,
inner sep=3pt
}
}}

\begin{document}
\begin{tikzpicture} 

\begin{axis}[my style, xtick={-8,-7,...,8}, ytick={-8,-7,...,8}, xmin=-8, xmax=8, ymin=-8, ymax=8] 

\addplot+[-Latex,color=green,samples=100,domain=0:8,no marks,line width=1pt]{sqrt(x)};
\node[circle,fill=red,inner sep=2pt,label={above right=1pt:$(0,0)$}] (1) at (axis cs:0,0){};
\addlegendentry{\(f(x)=\sqrt{x}\)}
\end{axis} 

\end{tikzpicture}
\end{document}
```

$D=\{x:x\geq h\}=[h,\infty)$ if $b>0$
$D=\{x:x\leq h\}=(-\infty,h]$ if $b<0$
$R=\{y:y\leq k\}=[k,\infty)$ if $a>0$
$R=\{y:y\geq k\}=(-\infty,k]$ if $a>0$

To find the **domain** without the formula and $b>0$:

$$
\begin{aligned}
b(x-h)\geq0&\implies x-h\geq0
\\
&\implies x\geq h
\end{aligned}
\\
\therefore D=\{x:x\geq h\}=[h,\infty)
$$

To find the **domain** without the formula and $b<0$:

$$
\begin{aligned}
b(x-h)\geq0&\implies x-h\leq0
\\
&\implies x\leq h

\end{aligned}
\\
\therefore D=\{x:x\leq h\}=(-\infty,h]
$$

To find the **range** without the formula and $a>0$:

$$
\begin{aligned}
b(x-h)\geq0&\implies \sqrt{b(x-h)}\geq\sqrt{0}
\\
&\implies a\sqrt{b(x-h)}\geq 0(a)
\\
&\implies a\sqrt{b(x-h)}+k\geq 0+k
\\
&\implies y\geq k
\end{aligned}
\\\\
\therefore R=\{y:y\geq k\}=[k,\infty)
$$

To find the **range** without the formula and $a<0$

$$
\begin{aligned}
b(x-h)\geq0&\implies \sqrt{b(x-h)}\geq\sqrt{0}
\\
&\implies a\sqrt{b(x-h)}\leq 0(a)
\\
&\implies a\sqrt{b(x-h)}+k\leq 0+k
\\
&\implies y\leq k
\end{aligned}
\\\\
\therefore R=\{y:y\leq k\}=(-\infty,k]
$$

Observe the following graphs:
${}y=\sqrt{ x }{}$

```tikz
\usepackage{tikz}
\usepackage{pgfplots}
\usepgflibrary{shapes.geometric}
\usetikzlibrary{calc,arrows.meta}
\pgfplotsset{my style/.append style={
axis line style={-Latex, line width=1pt}, 
axis lines=middle, 
xlabel={$x$}, ylabel={$y$}, 
axis equal, grid=both, 
major grid style={line width=.3pt, draw=black!50}, 
minor grid style={line width=0.1pt, draw=gray!50}, 
width=10cm, height=10cm, 
scale only axis=true, 
tick label style={font=\small},
legend style={at={(1,0)},anchor=south east,thick,inner sep=3pt}
}}

\begin{document}
\begin{tikzpicture} 

\begin{axis}[my style, xtick={-8,-7,...,8}, ytick={-8,-7,...,8}, xmin=-8, xmax=8, ymin=-8, ymax=8] 

\addplot+[-Stealth,color=red,samples=100,domain=0:8,no marks,line width=1pt]{sqrt(x)};
\node[circle,fill=red,inner sep=2pt,label={above right=1pt:$(0,0)$}] (1) at (axis cs:0,0){};
\addlegendentry{\(f(x)=\sqrt{x}\)}
\end{axis} 

\end{tikzpicture}
\end{document}
```

${}y=-\sqrt{ x }{}$

```tikz
\usepackage{tikz}
\usepackage{pgfplots}
\usepgflibrary{shapes.geometric}
\usetikzlibrary{calc,arrows.meta}
\pgfplotsset{my style/.append style={
axis line style={-Latex, line width=1pt}, 
axis lines=middle, 
xlabel={$x$}, ylabel={$y$}, 
axis equal, grid=both, 
major grid style={line width=.3pt, draw=black!50}, 
minor grid style={line width=0.1pt, draw=gray!50}, 
width=10cm, height=10cm, 
scale only axis=true, 
tick label style={font=\small},
legend style={at={(1,0)},anchor=south east,thick,inner sep=3pt}
}}

\begin{document}
\begin{tikzpicture} 

\begin{axis}[my style, xtick={-8,-7,...,8}, ytick={-8,-7,...,8}, xmin=-8, xmax=8, ymin=-8, ymax=8] 

\addplot+[-Stealth,color=red,samples=100,domain=0:8,no marks,line width=1pt]{-sqrt(x)};
\node[circle,fill=red,inner sep=2pt,label={above right=1pt:$(0,0)$}] (1) at (axis cs:0,0){};
\addlegendentry{\(f(x)=-\sqrt{x}\)}
\end{axis} 

\end{tikzpicture}
\end{document}
```

${}y=\sqrt{ x-1 }{}$

```tikz
\usepackage{tikz}
\usepackage{pgfplots}
\usepgflibrary{shapes.geometric}
\usetikzlibrary{calc,arrows.meta}
\pgfplotsset{my style/.append style={
axis line style={-Latex, line width=1pt}, 
axis lines=middle, 
xlabel={$x$}, ylabel={$y$}, 
axis equal, grid=both, 
major grid style={line width=.3pt, draw=black!50}, 
minor grid style={line width=0.1pt, draw=gray!50}, 
width=10cm, height=10cm, 
scale only axis=true, 
tick label style={font=\small},
legend style={at={(1,0)},anchor=south east,thick,inner sep=3pt}
}}

\begin{document}
\begin{tikzpicture} 

\begin{axis}[my style, xtick={-8,-7,...,8}, ytick={-8,-7,...,8}, xmin=-8, xmax=8, ymin=-8, ymax=8] 

\addplot+[-Stealth,color=red,samples=100,domain=0:8,no marks,line width=1pt]{sqrt(x-1)};
\node[circle,fill=red,inner sep=2pt,label={above left:$(1,0)$}] (1) at (axis cs:1,0){};
\addlegendentry{\(f(x)=\sqrt{x-1}\)}
\end{axis} 

\end{tikzpicture}
\end{document}
```

${}y=\sqrt{ x+1 }{}$

```tikz
\usepackage{tikz}
\usepackage{pgfplots}
\usepgflibrary{shapes.geometric}
\usetikzlibrary{calc,arrows.meta}
\pgfplotsset{my style/.append style={
axis line style={-Latex, line width=1pt}, 
axis lines=middle, 
xlabel={$x$}, ylabel={$y$}, 
axis equal, grid=both, 
major grid style={line width=.3pt, draw=black!50}, 
minor grid style={line width=0.1pt, draw=gray!50}, 
width=10cm, height=10cm, 
scale only axis=true, 
tick label style={font=\small},
legend style={at={(1,0)},anchor=south east,thick,inner sep=3pt}
}}

\begin{document}
\begin{tikzpicture} 

\begin{axis}[my style, xtick={-8,-7,...,8}, ytick={-8,-7,...,8}, xmin=-8, xmax=8, ymin=-8, ymax=8] 

\addplot+[-Stealth,color=red,samples=100,domain=-1:8,no marks,line width=1pt]{sqrt(x+1)};
\node[circle,fill=red,inner sep=2pt,label={above left=1pt:$(-1,0)$}] (1) at (axis cs:-1,0){};
\addlegendentry{\(f(x)=\sqrt{x+1}\)}
\end{axis} 

\end{tikzpicture}
\end{document}
```

${}y=\sqrt{ -x }{}$

```tikz
\usepackage{tikz}
\usepackage{pgfplots}
\usepgflibrary{shapes.geometric}
\usetikzlibrary{calc,arrows.meta}
\pgfplotsset{my style/.append style={
axis line style={-Latex, line width=1pt}, 
axis lines=middle, 
xlabel={$x$}, ylabel={$y$}, 
axis equal, grid=both, 
major grid style={line width=.3pt, draw=black!50}, 
minor grid style={line width=0.1pt, draw=gray!50}, 
width=10cm, height=10cm, 
scale only axis=true, 
tick label style={font=\small},
legend style={at={(1,0)},anchor=south east,thick,inner sep=3pt}
}}

\begin{document}
\begin{tikzpicture} 

\begin{axis}[my style, xtick={-8,-7,...,8}, ytick={-8,-7,...,8}, xmin=-8, xmax=8, ymin=-8, ymax=8] 

\addplot+[Stealth-,color=red,samples=100,domain=-8:8,no marks,line width=1pt]{sqrt(-x)};
\node[circle,fill=red,inner sep=2pt,label={above right=1pt:$(0,0)$}] (1) at (axis cs:0,0){};
\addlegendentry{\(f(x)=\sqrt{-x}\)}
\end{axis} 

\end{tikzpicture}
\end{document}
```

${}y=-\sqrt{ -x }{}$

```tikz
\usepackage{tikz}
\usepackage{pgfplots}
\usepgflibrary{shapes.geometric}
\usetikzlibrary{calc,arrows.meta}
\pgfplotsset{my style/.append style={
axis line style={-Latex, line width=1pt}, 
axis lines=middle, 
xlabel={$x$}, ylabel={$y$}, 
axis equal, grid=both, 
major grid style={line width=.3pt, draw=black!50}, 
minor grid style={line width=0.1pt, draw=gray!50}, 
width=10cm, height=10cm, 
scale only axis=true, 
tick label style={font=\small},
legend style={at={(1,0)},anchor=south east,thick,inner sep=3pt}
}}

\begin{document}
\begin{tikzpicture} 

\begin{axis}[my style, xtick={-8,-7,...,8}, ytick={-8,-7,...,8}, xmin=-8, xmax=8, ymin=-8, ymax=8] 

\addplot+[Stealth-,color=red,samples=100,domain=-8:0,no marks,line width=1pt]{-sqrt(-x)};
\node[circle,fill=red,inner sep=2pt,label={above right=1pt:$(0,0)$}] (1) at (axis cs:0,0){};
\addlegendentry{\(f(x)=-\sqrt{-x}\)}
\end{axis} 

\end{tikzpicture}
\end{document}
```

${}y=\sqrt{ x }+1{}$

```tikz
\usepackage{tikz}
\usepackage{pgfplots}
\usepgflibrary{shapes.geometric}
\usetikzlibrary{calc,arrows.meta}
\pgfplotsset{my style/.append style={
axis line style={-Latex, line width=1pt}, 
axis lines=middle, 
xlabel={$x$}, ylabel={$y$}, 
axis equal, grid=both, 
major grid style={line width=.3pt, draw=black!50}, 
minor grid style={line width=0.1pt, draw=gray!50}, 
width=10cm, height=10cm, 
scale only axis=true, 
tick label style={font=\small},
legend style={at={(1,0)},anchor=south east,thick,inner sep=3pt}
}}

\begin{document}
\begin{tikzpicture} 

\begin{axis}[my style, xtick={-8,-7,...,8}, ytick={-8,-7,...,8}, xmin=-8, xmax=8, ymin=-8, ymax=8] 

\addplot+[-Stealth,color=red,samples=100,domain=0:8,no marks,line width=1pt]{sqrt(x)+1};
\node[circle,fill=red,inner sep=2pt,label={below right=1pt:$(0,1)$}] (1) at (axis cs:0,1){};
\addlegendentry{\(f(x)=\sqrt{x}+1\)}
\end{axis} 

\end{tikzpicture}
\end{document}
```

${}y=\sqrt{ x }-1{}$

```tikz
\usepackage{tikz}
\usepackage{pgfplots}
\usepgflibrary{shapes.geometric}
\usetikzlibrary{calc,arrows.meta}
\pgfplotsset{my style/.append style={
axis line style={-Latex, line width=1pt}, 
axis lines=middle, 
xlabel={$x$}, ylabel={$y$}, 
axis equal, grid=both, 
major grid style={line width=.3pt, draw=black!50}, 
minor grid style={line width=0.1pt, draw=gray!50}, 
width=10cm, height=10cm, 
scale only axis=true, 
tick label style={font=\small},
legend style={at={(1,0)},anchor=south east,thick,inner sep=3pt}
}}

\begin{document}
\begin{tikzpicture} 

\begin{axis}[my style, xtick={-8,-7,...,8}, ytick={-8,-7,...,8}, xmin=-8, xmax=8, ymin=-8, ymax=8] 

\addplot+[-Stealth,color=red,samples=100,domain=0:8,no marks,line width=1pt]{sqrt(x)-1};
\node[circle,fill=red,inner sep=2pt,label={below right=1pt:$(0,-1)$}] (1) at (axis cs:0,-1){};
\addlegendentry{\(f(x)=\sqrt{x}-1\)}
\end{axis} 

\end{tikzpicture}
\end{document}
```

### Type 2

$$
y=f(x)=a\sqrt{h^{2}-x^{2}}+k
$$

```tikz
\usepackage{tikz}
\usepackage{pgfplots}
\usepgflibrary{shapes.geometric}
\usetikzlibrary{calc,arrows.meta}
\pgfplotsset{my style/.append style={
	axis line style={-Latex, line width=1pt}, 
	axis lines=middle, 
	xlabel={$x$}, ylabel={$y$}, 
	axis equal, grid=both, 
	major grid style={line width=.3pt, draw=black!50}, 
	minor grid style={line width=0.1pt, draw=gray!50}, 
	width=10cm, height=10cm, 
	scale only axis=true, 
	tick label style={font=\small},
	legend style={at={(1,0)},anchor=south east,thick,inner sep=3pt}
}}

\begin{document}
\begin{tikzpicture} 

\begin{axis}[my style, xtick={-8,-7,...,8}, ytick={-8,-7,...,8}, xmin=-8, xmax=8, ymin=-8, ymax=8] 
	\addplot[color=green,samples=100,domain=-1:1,no marks,line width=1pt]{sqrt(1-x^2)};
	\node[circle,fill=red,inner sep=2pt,label={above left=1pt:$(0,1)$}] (1) at (axis cs:0,1){};
	\node[circle,fill=red,inner sep=2pt,label={above right=1pt:$(1,0)$}] (1) at (axis cs:1,0){};
	\node[circle,fill=red,inner sep=2pt,label={above left=1pt:$(-1,0)$}] (1) at (axis cs:-1,0){};
	\addlegendentry{\(f(x)=\sqrt{1-x^2}\)}
\end{axis} 

\end{tikzpicture}
\end{document}
```

$D=\{x|-h \leq x \leq h\}$
$R=\{y|k\leq y \leq k+ah\}$ if $a>0$
$R=\{y|k+ah\leq y \leq k\}$ if $a<0$

To find the **domain** without the formula:

$$
\begin{aligned}
h^{2}-x^{2}\geq 0&\implies h^{2}\geq x^{2}
\\
&\implies h\geq |x|
\\
&\implies -h\leq x\leq h
\end{aligned}
\\\\
\therefore D=[-h,h] \lor D=\{x|-h\leq x \leq h\}
$$

To find the **range** where $a>0$

$$
\begin{aligned}
h^{2}\geq x^{2}&\implies h^{2}\geq x^{2} \geq 0 
\\
&\implies -h^{2}\leq -x^{2} \leq 0
\\
&\implies h^{2}-h^{2}\leq h^{2}-x^{2}\leq h^{2} 
\\
&\implies 0\leq h^{2}-x^{2}\leq h^{2}
\\
&\implies 0\leq \sqrt{h^{2}-x^{2}}\leq \sqrt{h^{2}}
\\
&\implies a(0)\leq a\sqrt{h^{2}-x^{2}}\leq ah
\\
&\implies 0+k\leq a\sqrt{h^{2}-x^{2}}+k\leq ah+k
\\
&\implies k\leq a\sqrt{h^{2}-x^{2}}+k\leq ah+k
\end{aligned}
\\\\
\therefore R=\{y:k\leq y \leq ah+k\}
$$

To find the **range** where $a<0$

$$
h^{2}\geq x^{2} \geq 0 
\\\\
\implies -h^{2}\leq -x^{2} \leq 0
\\\\
\implies h^{2}-h^{2}\leq h^{2}-x^{2}\leq h^{2} 
\\\\
\implies 0\leq h^{2}-x^{2}\leq h^{2}
\\\\
\implies 0\leq \sqrt{h^{2}-x^{2}}\leq \sqrt{h^{2}}
\\\\
\implies a(0)\geq a\sqrt{h^{2}-x^{2}}\geq ah
\\\\
\implies 0+k\geq a\sqrt{h^{2}-x^{2}}+k\geq ah+k
\\\\
\implies k\geq a\sqrt{h^{2}-x^{2}}+k\geq ah+k
\\\\
\implies ah+k \leq a\sqrt{h^{2}-x^{2}}+k \leq k
\\\\
\therefore R=\{y:ah+k\leq y \leq k\}
$$

### Type 3

$$
y=f(x)=a\sqrt{x^{2}-h^{2}}+k
$$

```tikz
\usepackage{tikz}
\usepackage{pgfplots}
\usepgflibrary{shapes.geometric}
\usetikzlibrary{calc,arrows.meta}
\pgfplotsset{my style/.append style={
	axis line style={-Latex, line width=1pt}, 
	axis lines=middle, 
	xlabel={$x$}, ylabel={$y$}, 
	axis equal, grid=both, 
	major grid style={line width=.3pt, draw=black!50}, 
	minor grid style={line width=0.1pt, draw=gray!50}, 
	width=10cm, height=10cm, 
	scale only axis=true, 
	tick label style={font=\small},
	legend style={at={(1,0)},anchor=south east,thick,inner sep=3pt}
}}

\begin{document}
\begin{tikzpicture} 

\begin{axis}[my style, xtick={-8,-7,...,8}, ytick={-8,-7,...,8}, xmin=-8, xmax=8, ymin=-8, ymax=8] 
	\addplot+[Stealth-,color=green,samples=100,domain=-8:-1,no marks,line width=1pt]{sqrt(x^2 -1)};
	\addplot+[-Stealth,color=green,samples=100,domain=1:8,no marks,line width=1pt]{sqrt(x^2 -1)};
	\node[circle,fill=red,inner sep=2pt,label={above right=1pt:$(1,0)$}] (1) at (axis cs:1,0){};
	\node[circle,fill=red,inner sep=2pt,label={above left=1pt:$(-1,0)$}] (1) at (axis cs:-1,0){};
	\addlegendentry{\(f(x)=\sqrt{x^{2}-1}\)}
\end{axis} 

\end{tikzpicture}
\end{document}
```

$D=(-\infty,-h]\cup[h,\infty)$
$R=[k,\infty)$ if $a>0$
$R=(\infty,k]$ if $a<0$
To find the **domain** with out the formula:

$$
\begin{aligned}
x^{2}-h^{2}\geq0&\implies x^{2}-h^{2}+h^{2}\geq0+h^{2}
\\
&\implies x^{2}\geq h^{2}
\\
&\implies \sqrt{x^{2}}\geq \sqrt{h^{2}}
\\
&\implies |x|\geq h
\end{aligned}
\\\\
\therefore D=(-\infty,-h]\cup[h,\infty)
$$

To find the **range** where $a>0$ :

$$
\begin{aligned}
a\sqrt{x^{2}-h^{2}}\geq0&\implies a\sqrt{x^{2}-h^{2}}+k\geq0+k
\\
&\implies y \geq k
\end{aligned}
\\\\
\therefore R=[k,\infty)
$$

To find the **range** where $a<0$ :

$$
\begin{aligned}
a\sqrt{x^{2}-h^{2}}\leq0&\implies a\sqrt{x^{2}-h^{2}}+k\leq0+k
\\
&\implies y \leq k

\end{aligned}
\\\\
\therefore R=(-\infty,k]
$$

Observe the following graphs:
${}y=\sqrt{ x^{2}-1 }{}$

```tikz
\usepackage{tikz}
\usepackage{pgfplots}
\usepgflibrary{shapes.geometric}
\usetikzlibrary{calc,arrows.meta}
\pgfplotsset{my style/.append style={
	axis line style={-Latex, line width=1pt}, 
	axis lines=middle, 
	xlabel={$x$}, ylabel={$y$}, 
	axis equal, grid=both, 
	major grid style={line width=.3pt, draw=black!50}, 
	minor grid style={line width=0.1pt, draw=gray!50}, 
	width=10cm, height=10cm, 
	scale only axis=true, 
	tick label style={font=\small},
	legend style={at={(1,0)},anchor=south east,thick,inner sep=3pt}
}}

\begin{document}
\begin{tikzpicture} 

\begin{axis}[my style, xtick={-8,-7,...,8}, ytick={-8,-7,...,8}, xmin=-8, xmax=8, ymin=-8, ymax=8] 
	\addplot+[Stealth-,color=red,samples=100,domain=-8:-1,no marks,line width=1pt]{sqrt(x^2 -1)};
	\addplot+[-Stealth,color=red,samples=100,domain=1:8,no marks,line width=1pt]{sqrt(x^2 -1)};
	\node[circle,fill=red,inner sep=2pt,label={above right=1pt:$(1,0)$}] (1) at (axis cs:1,0){};
	\node[circle,fill=red,inner sep=2pt,label={above left=1pt:$(-1,0)$}] (1) at (axis cs:-1,0){};
	\addlegendentry{\(f(x)=\sqrt{x^{2}-1}\)}
\end{axis} 

\end{tikzpicture}
\end{document}
```

${}y=-\sqrt{ x^{2}-1 }{}$

```tikz
\usepackage{tikz}
\usepackage{pgfplots}
\usepgflibrary{shapes.geometric}
\usetikzlibrary{calc,arrows.meta}
\pgfplotsset{my style/.append style={
	axis line style={-Latex, line width=1pt}, 
	axis lines=middle, 
	xlabel={$x$}, ylabel={$y$}, 
	axis equal, grid=both, 
	major grid style={line width=.3pt, draw=black!50}, 
	minor grid style={line width=0.1pt, draw=gray!50}, 
	width=10cm, height=10cm, 
	scale only axis=true, 
	tick label style={font=\small},
	legend style={at={(1,0)},anchor=south east,thick,inner sep=3pt}
}}

\begin{document}
\begin{tikzpicture} 

\begin{axis}[my style, xtick={-8,-7,...,8}, ytick={-8,-7,...,8}, xmin=-8, xmax=8, ymin=-8, ymax=8] 
	\addplot+[Stealth-,color=red,samples=100,domain=-8:-1,no marks,line width=1pt]{-sqrt(x^2 -1)};
	\addplot+[-Stealth,color=red,samples=100,domain=1:8,no marks,line width=1pt]{-sqrt(x^2 -1)};
	\node[circle,fill=red,inner sep=2pt,label={above right=1pt:$(1,0)$}] (1) at (axis cs:1,0){};
	\node[circle,fill=red,inner sep=2pt,label={above left=1pt:$(-1,0)$}] (1) at (axis cs:-1,0){};
	\addlegendentry{\(f(x)=-\sqrt{x^{2}-1}\)}
\end{axis} 

\end{tikzpicture}
\end{document}
```

${}y=\sqrt{ x^{2}+1 }{}$

```tikz
\usepackage{tikz}
\usepackage{pgfplots}
\usepgflibrary{shapes.geometric}
\usetikzlibrary{calc,arrows.meta}
\pgfplotsset{my style/.append style={
	axis line style={-Latex, line width=1pt}, 
	axis lines=middle, 
	xlabel={$x$}, ylabel={$y$}, 
	axis equal, grid=both, 
	major grid style={line width=.3pt, draw=black!50}, 
	minor grid style={line width=0.1pt, draw=gray!50}, 
	width=10cm, height=10cm, 
	scale only axis=true, 
	tick label style={font=\small},
	legend style={at={(1,0)},anchor=south east,thick,inner sep=3pt}
}}

\begin{document}
\begin{tikzpicture} 

\begin{axis}[my style, xtick={-8,-7,...,8}, ytick={-8,-7,...,8}, xmin=-8, xmax=8, ymin=-8, ymax=8] 
	\addplot+[Stealth-Stealth,color=red,samples=100,domain=-8:8,no marks,line width=1pt]{sqrt(x^2 +1)};
\end{axis} 

\end{tikzpicture}
\end{document}
```

${}y=\sqrt{  x^{2}-1 }+1{}$

```tikz
\usepackage{tikz}
\usepackage{pgfplots}
\usepgflibrary{shapes.geometric}
\usetikzlibrary{calc,arrows.meta}
\pgfplotsset{my style/.append style={
	axis line style={-Latex, line width=1pt}, 
	axis lines=middle, 
	xlabel={$x$}, ylabel={$y$}, 
	axis equal, grid=both, 
	major grid style={line width=.3pt, draw=black!50}, 
	minor grid style={line width=0.1pt, draw=gray!50}, 
	width=10cm, height=10cm, 
	scale only axis=true, 
	tick label style={font=\small},
	legend style={at={(1,0)},anchor=south east,thick,inner sep=3pt}
}}

\begin{document}
\begin{tikzpicture} 

\begin{axis}[my style, xtick={-8,-7,...,8}, ytick={-8,-7,...,8}, xmin=-8, xmax=8, ymin=-8, ymax=8] 
	\addplot+[Stealth-,color=red,samples=100,domain=-7:-1,no marks,line width=1pt]{sqrt(x^2 -1)+1};
	\addplot+[-Stealth,color=red,samples=100,domain=1:7,no marks,line width=1pt]{sqrt(x^2 -1)+1};
	\addlegendentry{\(f(x)=\sqrt{x^{2}-1}\)+1}
\end{axis} 

\end{tikzpicture}
\end{document}
```

${}y=\sqrt{ x^{2}-1 }-1{}$

```tikz
\usepackage{tikz}
\usepackage{pgfplots}
\usepgflibrary{shapes.geometric}
\usetikzlibrary{calc,arrows.meta}
\pgfplotsset{my style/.append style={
	axis line style={-Latex, line width=1pt}, 
	axis lines=middle, 
	xlabel={$x$}, ylabel={$y$}, 
	axis equal, grid=both, 
	major grid style={line width=.3pt, draw=black!50}, 
	minor grid style={line width=0.1pt, draw=gray!50}, 
	width=10cm, height=10cm, 
	scale only axis=true, 
	tick label style={font=\small},
	legend style={at={(1,0)},anchor=south east,thick,inner sep=3pt}
}}

\begin{document}
\begin{tikzpicture} 

\begin{axis}[my style, xtick={-8,-7,...,8}, ytick={-8,-7,...,8}, xmin=-8, xmax=8, ymin=-8, ymax=8] 
	\addplot+[Stealth-,color=red,samples=100,domain=-8:-1,no marks,line width=1pt]{sqrt(x^2 -1)-1};
	\addplot+[-Stealth,color=red,samples=100,domain=1:8,no marks,line width=1pt]{sqrt(x^2 -1)-1};
	\node[circle,fill=red,inner sep=2pt,label={above right=1pt:$(\sqrt{2},0)$}] (1) at (axis cs:1.4,0){};
	\node[circle,fill=red,inner sep=2pt,label={above left=1pt:$(-\sqrt{2},0)$}] (1) at (axis cs:-1.4,0){};
	\addlegendentry{\(f(x)=\sqrt{x^{2}-1}-1\)}
\end{axis} 

\end{tikzpicture}
\end{document}
```

## Polynomial Functions

$$
y=f(x)=ax^{n}, \text{ where }n\in \mathbb{N}
$$

Observe the graphs of following equations:
${}f(x)=x^{2}{}$

```tikz
\usepackage{tikz}
\usepackage{pgfplots}
\usepgflibrary{shapes.geometric}
\usetikzlibrary{calc,arrows.meta}
\pgfplotsset{my style/.append style={
axis line style={-Latex,line width=1pt}, 
axis lines=middle, 
xlabel={$x$}, ylabel={$y$}, 
axis equal, grid=both, 
major grid style={line width=.3pt, draw=black!50}, 
minor grid style={line width=0.1pt, draw=gray!50}, 
width=10cm, height=10cm,
scale only axis=true, 
tick label style={font=\small},
legend style={at={(1,0)},anchor=south east,thick,inner sep=3pt}
}}
\begin{document}
\begin{tikzpicture} 

\begin{axis}[my style, xtick={-8,-7,...,8}, ytick={-8,-7,...,8}, xmin=-8, xmax=8, ymin=-8, ymax=8] 

\addplot+[Stealth-Stealth,color=red,samples=100,domain=-2.8:2.8,no marks,line width=1pt]{x^2};
\node[circle,fill=red,inner sep=2pt,label={below right:$(0,0)$}] (1) at (axis cs:0,0){};
\addlegendentry{\(f(x)=x^2\)}

\end{axis} 

\end{tikzpicture}
\end{document}
```

${}g(x)=-x^{2}{}$

```tikz
\usepackage{tikz}
\usepackage{pgfplots}
\usepgflibrary{shapes.geometric}
\usetikzlibrary{calc,arrows.meta}
\pgfplotsset{my style/.append style={
axis line style={-Latex,line width=1pt}, 
axis lines=middle, 
xlabel={$x$}, ylabel={$y$}, 
axis equal, grid=both, 
major grid style={line width=.3pt, draw=black!50}, 
minor grid style={line width=0.1pt, draw=gray!50}, 
width=10cm, height=10cm,
scale only axis=true, 
tick label style={font=\small},
legend style={at={(1,0)},anchor=south east,thick,inner sep=3pt}
}}
\begin{document}
\begin{tikzpicture} 

\begin{axis}[my style, xtick={-8,-7,...,8}, ytick={-8,-7,...,8}, xmin=-8, xmax=8, ymin=-8, ymax=8] 

\addplot+[Stealth-Stealth,color=red,samples=100,domain=-2.8:2.8,no marks,line width=1pt]{-x^2};
\node[circle,fill=red,inner sep=2pt,label={above right:$(0,0)$}] (1) at (axis cs:0,0){};
\addlegendentry{\(g(x)=-x^{2}\)}

\end{axis} 

\end{tikzpicture}
\end{document}
```

${}h(x)=x^{3}{}$

```tikz
\usepackage{tikz}
\usepackage{pgfplots}
\usepgflibrary{shapes.geometric}
\usetikzlibrary{calc,arrows.meta}
\pgfplotsset{my style/.append style={
axis line style={-Latex,line width=1pt}, 
axis lines=middle, 
xlabel={$x$}, ylabel={$y$}, 
axis equal, grid=both, 
major grid style={line width=.3pt, draw=black!50}, 
minor grid style={line width=0.1pt, draw=gray!50}, 
width=10cm, height=10cm,
scale only axis=true, 
tick label style={font=\small},
legend style={at={(1,0)},anchor=south east,thick,inner sep=3pt}
}}
\begin{document}
\begin{tikzpicture} 

\begin{axis}[my style, xtick={-8,-7,...,8}, ytick={-8,-7,...,8}, xmin=-8, xmax=8, ymin=-8, ymax=8] 

\addplot+[Stealth-Stealth,color=red,samples=100,domain=-2:2,no marks,line width=1pt]{x^3};
\node[circle,fill=red,inner sep=2pt,label={above left:$(0,0)$}] (1) at (axis cs:0,0){};
\addlegendentry{\(h(x)=x^3\)}

\end{axis} 

\end{tikzpicture}
\end{document}
```

${}j(x)=-x^{3}{}$

```tikz
\usepackage{tikz}
\usepackage{pgfplots}
\usepgflibrary{shapes.geometric}
\usetikzlibrary{calc,arrows.meta}
\pgfplotsset{my style/.append style={
axis line style={-Latex,line width=1pt}, 
axis lines=middle, 
xlabel={$x$}, ylabel={$y$}, 
axis equal, grid=both, 
major grid style={line width=.3pt, draw=black!50}, 
minor grid style={line width=0.1pt, draw=gray!50}, 
width=10cm, height=10cm,
scale only axis=true, 
tick label style={font=\small},
legend style={at={(1,0)},anchor=south east,thick,inner sep=3pt}
}}
\begin{document}
\begin{tikzpicture} 

\begin{axis}[my style, xtick={-8,-7,...,8}, ytick={-8,-7,...,8}, xmin=-8, xmax=8, ymin=-8, ymax=8] 

\addplot+[Stealth-Stealth,color=red,samples=100,domain=-2:2,no marks,line width=1pt]{-x^3};
\node[circle,fill=red,inner sep=2pt,label={above right:$(0,0)$}] (1) at (axis cs:0,0){};
\addlegendentry{\(j(x)=-x^3\)}

\end{axis} 

\end{tikzpicture}
\end{document}
```

${}k(x)=x^{4}{}$

```tikz
\usepackage{tikz}
\usepackage{pgfplots}
\usepgflibrary{shapes.geometric}
\usetikzlibrary{calc,arrows.meta}
\pgfplotsset{my style/.append style={
axis line style={-Latex,line width=1pt}, 
axis lines=middle, 
xlabel={$x$}, ylabel={$y$}, 
axis equal, grid=both, 
major grid style={line width=.3pt, draw=black!50}, 
minor grid style={line width=0.1pt, draw=gray!50}, 
width=10cm, height=10cm,
scale only axis=true, 
tick label style={font=\small},
legend style={at={(1,0)},anchor=south east,thick,inner sep=3pt}
}}
\begin{document}
\begin{tikzpicture} 

\begin{axis}[my style, xtick={-8,-7,...,8}, ytick={-8,-7,...,8}, xmin=-8, xmax=8, ymin=-8, ymax=8] 

\addplot+[Stealth-Stealth,color=red,samples=100,domain=-1.68:1.68,no marks,line width=1pt]{x^4};
\node[circle,fill=red,inner sep=2pt,label={below right:$(0,0)$}] (1) at (axis cs:0,0){};
\addlegendentry{\(k(x)=x^4\)}

\end{axis} 

\end{tikzpicture}
\end{document}
```

${}l(x)=x^{5}{}$

```tikz
\usepackage{tikz}
\usepackage{pgfplots}
\usepgflibrary{shapes.geometric}
\usetikzlibrary{calc,arrows.meta}
\pgfplotsset{my style/.append style={
axis line style={-Latex,line width=1pt}, 
axis lines=middle, 
xlabel={$x$}, ylabel={$y$}, 
axis equal, grid=both, 
major grid style={line width=.3pt, draw=black!50}, 
minor grid style={line width=0.1pt, draw=gray!50}, 
width=10cm, height=10cm,
scale only axis=true, 
tick label style={font=\small},
legend style={at={(1,0)},anchor=south east,thick,inner sep=3pt}
}}
\begin{document}
\begin{tikzpicture} 

\begin{axis}[my style, xtick={-8,-7,...,8}, ytick={-8,-7,...,8}, xmin=-8, xmax=8, ymin=-8, ymax=8] 

\addplot+[Stealth-Stealth,color=red,samples=100,domain=-1.51:1.51,no marks,line width=1pt]{x^5};
\node[circle,fill=red,inner sep=2pt,label={above left:$(0,0)$}] (1) at (axis cs:0,0){};
\addlegendentry{\(l(x)=x^5\)}

\end{axis} 

\end{tikzpicture}
\end{document}
```

Observe the end behavior of each graph

| Leading Exponent | Leading Coefficient | Left Side End Behavior (-) | Right Side End Behavior (+) |
|:----------------:|:-------------------:|:--------------------------:|:---------------------------:|
|  even $\neq 0$   |    positive (+)     |          Upwards           |           Upwards           |
|  even $\neq 0$   |    negative (-)     |         Downwards          |          Downwards          |
|   odd $\neq 1$   |    positive (+)     |         Downwards          |           Upwards           |
|   odd $\neq 1$   |    negative (-)     |          Upwards           |          Downwards          |

## Piecewise Functions

Piecewise is also known as a conditional function

$$
y=f(x)=
\begin{cases}
3x-1 & x\leq-1 \\
2 & -1<x<1\\
-3x & x\geq1
\end{cases}
$$

```tikz
\usepackage{tikz}
\usepackage{pgfplots}
\usepgflibrary{shapes.geometric}
\usetikzlibrary{calc,arrows.meta}
\pgfplotsset{my style/.append style={
axis line style={-Latex,line width=1pt}, 
axis lines=middle, 
xlabel={$x$}, ylabel={$y$}, 
axis equal, grid=both, 
major grid style={line width=.3pt, draw=black!50}, 
minor grid style={line width=0.1pt, draw=gray!50}, 
width=10cm, height=10cm,
scale only axis=true, 
tick label style={font=\small},
legend style={at={(1,0)},anchor=south east,thick,inner sep=3pt}
}}
\begin{document}
\begin{tikzpicture} 

\begin{axis}[my style, xtick={-8,-7,...,8}, ytick={-8,-7,...,8}, xmin=-8, xmax=8, ymin=-8, ymax=8] 

\addplot+[Stealth-,color=red,samples=100,domain=-2.33:-1,no marks,line width=1pt]{3*x-1};
\addplot[color=red,samples=100,domain=-1:1,no marks,line width=1pt]{2};
\addplot+[-Stealth,color=red,samples=100,domain=1:2.67,no marks,line width=1pt]{-3*x};
\node[circle,fill=red,inner sep=2pt] (1) at (axis cs:-1,-4){};
\node[draw,circle,red,inner sep=2pt,thick] (2) at (axis cs:-1,2){};
\node[draw,circle,red,inner sep=2pt,thick] (3) at (axis cs:1,2){};
\node[circle,fill=red,inner sep=2pt] (4) at (axis cs:1,-3){};

\end{axis} 

\end{tikzpicture}
\end{document}
```

The domain of a piecewise function is the union of the all the intervals
The range of a piecewise function is the union of the range of each piece

$$
f(x)=
\begin{cases}
-x-1 & x<-2\\
x+1 & -2<x<1\\
-x+1 & x\geq1
\end{cases}
$$

```tikz
\usepackage{tikz}
\usepackage{pgfplots}
\usepgflibrary{shapes.geometric}
\usetikzlibrary{calc,arrows.meta}
\pgfplotsset{my style/.append style={
axis line style={-Latex,line width=1pt}, 
axis lines=middle, 
xlabel={$x$}, ylabel={$y$}, 
axis equal, grid=both, 
major grid style={line width=.3pt, draw=black!50}, 
minor grid style={line width=0.1pt, draw=gray!50}, 
width=10cm, height=10cm,
scale only axis=true, 
tick label style={font=\small},
legend style={at={(1,0)},anchor=south east,thick,inner sep=3pt}
}}
\begin{document}
\begin{tikzpicture} 

\begin{axis}[my style, xtick={-8,-7,...,8}, ytick={-8,-7,...,8}, xmin=-8, xmax=8, ymin=-8, ymax=8] 

\addplot+[Stealth-,color=red,samples=100,domain=-8:-2,no marks,line width=1pt]{-x-1};
\addplot[color=red,samples=100,domain=-2:1,no marks,line width=1pt]{x+1};
\addplot+[-Stealth,color=red,samples=100,domain=1:8,no marks,line width=1pt]{-x+1};
\node[circle,fill=red,inner sep=2pt] (1) at (axis cs:-2,1){};
\node[draw,circle,red,inner sep=2pt,thick] (2) at (axis cs:-2,-1){};
\node[draw,circle,red,inner sep=2pt,thick] (3) at (axis cs:1,2){};
\node[circle,fill=red,inner sep=2pt] (4) at (axis cs:1,0){};

\end{axis} 

\end{tikzpicture}
\end{document}
```

Domain.
For $-x-1$

$$
x<-2
\\\\
\implies D=(-\infty,-2)
$$

For $x+1$

$$
-2<x<1
\\\\
\implies D=(-2,1)
$$

For $-x+1$

$$
x\geq1
\\\\
\implies D=[1,\infty) 
$$

$\therefore D=(-\infty,-2)\cup(-2,1)\cup[1,\infty)$
Range.
For $-x-1$

$$
x<-2
\\\\
\implies R=(-\infty,-2)
$$

For $x+1$

$$
-2<x<1
\\\\
\implies R=(-2,1)
$$

For $-x+1$

$$
x\geq1
\\\\
\implies R=[1,\infty) 
$$

## Absolute Functions

$$
y=f(x)=a|x-h|+k
$$

```tikz
\usepackage{tikz}
\usepackage{pgfplots}
\usepgflibrary{shapes.geometric}
\usetikzlibrary{calc,arrows.meta}
\pgfplotsset{my style/.append style={
axis line style={-Latex,line width=1pt}, 
axis lines=middle, 
xlabel={$x$}, ylabel={$y$}, 
axis equal, grid=both, 
major grid style={line width=.3pt, draw=black!50}, 
minor grid style={line width=0.1pt, draw=gray!50}, 
width=10cm, height=10cm,
scale only axis=true, 
tick label style={font=\small},
legend style={at={(1,0)},anchor=south east,thick,inner sep=3pt}
}}
\begin{document}
\begin{tikzpicture} 

\begin{axis}[my style, xtick={-8,-7,...,8}, ytick={-8,-7,...,8}, xmin=-8, xmax=8, ymin=-8, ymax=8] 

\addplot+[Stealth-Stealth,color=green,samples=100,domain=-8:8,no marks,line width=1pt]{abs(x)};
\node[circle,fill=red,inner sep=2pt,label={below right:$(0,0)$}] (1) at (axis cs:0,0){};
\addlegendentry{\(f(x)=|x|\)}

\end{axis} 

\end{tikzpicture}
\end{document}
```

$D=\mathbb{R}$
Vertex=$(h,k)$
$R=\{y|y\geq k\}=[k,\infty)$ if $a>0$
$R=\{y|y\leq k\}=(-\infty,k]$ if $a<0$
Domain:

$$
|x-h|\geq0
$$

Range if $a>0$

$$
\begin{aligned}
a|x-h|\geq a(0)&\implies a|x-h|\geq0
\\
&\implies a|x-h|+k\geq0+k
\\
&\implies a|x-h|+k\geq k
\end{aligned}
\\\\
\therefore y\geq k
$$

Range if $a<0$

$$
\begin{aligned}
a|x-h|\leq a(0)&\implies a|x-h|\leq0
\\
&\implies a|x-h|+k\leq0+k
\\
&\implies a|x-h|+k\leq k
\end{aligned}
\\\\
\therefore y\leq k
$$

Observe the following functions:
${}y=|x|{}$

```tikz
\usepackage{tikz}
\usepackage{pgfplots}
\usepgflibrary{shapes.geometric}
\usetikzlibrary{calc,arrows.meta}
\pgfplotsset{my style/.append style={
axis line style={-Latex,line width=1pt}, 
axis lines=middle, 
xlabel={$x$}, ylabel={$y$}, 
axis equal, grid=both, 
major grid style={line width=.3pt, draw=black!50}, 
minor grid style={line width=0.1pt, draw=gray!50}, 
width=10cm, height=10cm,
scale only axis=true, 
tick label style={font=\small},
legend style={at={(1,0)},anchor=south east,thick,inner sep=3pt}
}}
\begin{document}
\begin{tikzpicture} 

\begin{axis}[my style, xtick={-8,-7,...,8}, ytick={-8,-7,...,8}, xmin=-8, xmax=8, ymin=-8, ymax=8] 

\addplot+[Latex-Latex,color=red,samples=100,domain=-8:8,no marks,line width=1pt]{abs(x)};
\node[circle,fill=red,inner sep=2pt,label={below right:$(0,0)$}] (1) at (axis cs:0,0){};
\addlegendentry{\(f(x)=|x|\)}

\end{axis} 

\end{tikzpicture}
\end{document}
```

${}y=-|x|{}$

```tikz
\usepackage{tikz}
\usepackage{pgfplots}
\usepgflibrary{shapes.geometric}
\usetikzlibrary{calc,arrows.meta}
\pgfplotsset{my style/.append style={
axis line style={-Latex,line width=1pt}, 
axis lines=middle, 
xlabel={$x$}, ylabel={$y$}, 
axis equal, grid=both, 
major grid style={line width=.3pt, draw=black!50}, 
minor grid style={line width=0.1pt, draw=gray!50}, 
width=10cm, height=10cm,
scale only axis=true, 
tick label style={font=\small},
legend style={at={(1,0)},anchor=south east,thick,inner sep=3pt}
}}
\begin{document}
\begin{tikzpicture} 

\begin{axis}[my style, xtick={-8,-7,...,8}, ytick={-8,-7,...,8}, xmin=-8, xmax=8, ymin=-8, ymax=8] 

\addplot+[Latex-Latex,color=red,samples=100,domain=-8:8,no marks,line width=1pt]{-abs(x)};
\node[circle,fill=red,inner sep=2pt,label={above right:$(0,0)$}] (1) at (axis cs:0,0){};
\addlegendentry{\(f(x)=-|x|\)}

\end{axis} 

\end{tikzpicture}
\end{document}
```

${}y=|x-1|{}$

```tikz
\usepackage{tikz}
\usepackage{pgfplots}
\usepgflibrary{shapes.geometric}
\usetikzlibrary{calc,arrows.meta}
\pgfplotsset{my style/.append style={
axis line style={-Latex,line width=1pt}, 
axis lines=middle, 
xlabel={$x$}, ylabel={$y$}, 
axis equal, grid=both, 
major grid style={line width=.3pt, draw=black!50}, 
minor grid style={line width=0.1pt, draw=gray!50}, 
width=10cm, height=10cm,
scale only axis=true, 
tick label style={font=\small},
legend style={at={(1,0)},anchor=south east,thick,inner sep=3pt}
}}
\begin{document}
\begin{tikzpicture} 

\begin{axis}[my style, xtick={-8,-7,...,8}, ytick={-8,-7,...,8}, xmin=-8, xmax=8, ymin=-8, ymax=8] 

\addplot+[Latex-Latex,color=red,samples=100,domain=-7:8,no marks,line width=1pt]{abs(x-1)};
\node[circle,fill=red,inner sep=2pt,label={below left:$(1,0)$}] (1) at (axis cs:1,0){};
\node[circle,fill=red,inner sep=2pt,label={left:$(0,1)$}] (1) at (axis cs:0,1){};
\addlegendentry{\(f(x)=|x-1|\)}

\end{axis} 

\end{tikzpicture}
\end{document}
```

${}y=|x+1|{}$

```tikz
\usepackage{tikz}
\usepackage{pgfplots}
\usepgflibrary{shapes.geometric}
\usetikzlibrary{calc,arrows.meta}
\pgfplotsset{my style/.append style={
axis line style={-Latex,line width=1pt}, 
axis lines=middle, 
xlabel={$x$}, ylabel={$y$}, 
axis equal, grid=both, 
major grid style={line width=.3pt, draw=black!50}, 
minor grid style={line width=0.1pt, draw=gray!50}, 
width=10cm, height=10cm,
scale only axis=true, 
tick label style={font=\small},
legend style={at={(1,0)},anchor=south east,thick,inner sep=3pt}
}}
\begin{document}
\begin{tikzpicture} 

\begin{axis}[my style, xtick={-8,-7,...,8}, ytick={-8,-7,...,8}, xmin=-8, xmax=8, ymin=-8, ymax=8] 

\addplot+[Latex-Latex,color=red,samples=100,domain=-8:7,no marks,line width=1pt]{abs(x+1)};
\node[circle,fill=red,inner sep=2pt,label={below right:$(-1,0)$}] (1) at (axis cs:-1,0){};
\node[circle,fill=red,inner sep=2pt,label={right:$(0,1)$}] (1) at (axis cs:0,1){};
\addlegendentry{\(f(x)=|x+1|\)}

\end{axis} 

\end{tikzpicture}
\end{document}
```

${}y=|x|+1{}$

```tikz
\usepackage{tikz}
\usepackage{pgfplots}
\usepgflibrary{shapes.geometric}
\usetikzlibrary{calc,arrows.meta}
\pgfplotsset{my style/.append style={
axis line style={-Latex,line width=1pt}, 
axis lines=middle, 
xlabel={$x$}, ylabel={$y$}, 
axis equal, grid=both, 
major grid style={line width=.3pt, draw=black!50}, 
minor grid style={line width=0.1pt, draw=gray!50}, 
width=10cm, height=10cm,
scale only axis=true, 
tick label style={font=\small},
legend style={at={(1,0)},anchor=south east,thick,inner sep=3pt}
}}
\begin{document}
\begin{tikzpicture} 

\begin{axis}[my style, xtick={-8,-7,...,8}, ytick={-8,-7,...,8}, xmin=-8, xmax=8, ymin=-8, ymax=8] 

\addplot+[Latex-Latex,color=red,samples=100,domain=-7:7,no marks,line width=1pt]{abs(x)+1};
\node[circle,fill=red,inner sep=2pt,label={below right:$(0,1)$}] (1) at (axis cs:0,1){};
\addlegendentry{\(f(x)=|x|+1\)}

\end{axis} 

\end{tikzpicture}
\end{document}
```

${}y=|x|-1{}$

```tikz
\usepackage{tikz}
\usepackage{pgfplots}
\usepgflibrary{shapes.geometric}
\usetikzlibrary{calc,arrows.meta}
\pgfplotsset{my style/.append style={
axis line style={-Latex,line width=1pt}, 
axis lines=middle, 
xlabel={$x$}, ylabel={$y$}, 
axis equal, grid=both, 
major grid style={line width=.3pt, draw=black!50}, 
minor grid style={line width=0.1pt, draw=gray!50}, 
width=10cm, height=10cm,
scale only axis=true, 
tick label style={font=\small},
legend style={at={(1,0)},anchor=south east,thick,inner sep=3pt}
}}
\begin{document}
\begin{tikzpicture} 

\begin{axis}[my style, xtick={-8,-7,...,8}, ytick={-8,-7,...,8}, xmin=-8, xmax=8, ymin=-8, ymax=8] 

\addplot+[Latex-Latex,color=red,samples=100,domain=-8:8,no marks,line width=1pt]{abs(x)-1};
\node[circle,fill=red,inner sep=2pt,label={below right:$(0,-1)$}] (1) at (axis cs:0,-1){};
\node[circle,fill=red,inner sep=2pt,label={above right:$(1,0)$}] (1) at (axis cs:1,0){};
\node[circle,fill=red,inner sep=2pt,label={above left:$(-1,0)$}] (1) at (axis cs:-1,0){};
\addlegendentry{\(f(x)=|x|-1\)}

\end{axis} 

\end{tikzpicture}
\end{document}
```

## Rational Functions

$$
y=f(x)=\frac{p(x)}{q(x)}
$$

```tikz
\usepackage{tikz}
\usepackage{pgfplots}
\usepgflibrary{shapes.geometric}
\usetikzlibrary{calc,arrows.meta}
\pgfplotsset{my style/.append style={
axis line style={Latex-Latex,line width=1pt}, 
axis lines=middle, 
xlabel={$x$}, ylabel={$y$}, 
axis equal, grid=both, 
major grid style={line width=.3pt, draw=black!50}, 
minor grid style={line width=0.1pt, draw=gray!50}, 
width=10cm, height=10cm,
scale only axis=true, 
tick label style={font=\small},
legend style={at={(1,0)},anchor=south east,thick,inner sep=3pt}
}}
\begin{document}
\begin{tikzpicture} 

\begin{axis}[my style, xtick={-8,-7,...,8}, ytick={-8,-7,...,8}, xmin=-8, xmax=8, ymin=-8, ymax=8] 

\addplot+[Stealth-Stealth,color=green,samples=100,domain=-8:-0.135,no marks,line width=1pt]{1/x};
\addplot+[Stealth-Stealth,color=green,samples=100,domain=0.135:8,no marks,line width=1pt]{1/x};
\addlegendentry{\(f(x)=\frac{1}{x}\)}
\addplot+[no marks, red, dashed] coordinates { (0, -8) (0, 8) };

\end{axis} 

\end{tikzpicture}
\end{document}
```

${}D=\{x:q(x)\neq 0\}$
${}R=D_{f'}$
Vertical Asymptote(s): Restrictions of the Domain after factoring if factoring is possible
Horizontal Asymptotes: Restricions of the Range if there is an inverse of the function. Else:
Let ${}n{}$ be the leading exponent of ${}p(x){}$ and ${}m{}$ be the leading exponent of ${}q(x){}$

```tikz
\usepackage{amsmath}
\begin{document}
\begin{tikzpicture}

\draw [line width=1pt](0,0)--(7,0);
\draw [line width=1pt](0,4)--(7,4);
\draw (2,0)--(2,4);
\draw [line width=1pt](0,0)--(0,4);
\draw [line width=1pt](7,0)--(7,4);

\draw (0,1)--(7,1);
\draw (0,2)--(7,2);
\draw [line width=1pt](0,3)--(7,3);

\node at (1,3.5){$\textbf{Condition}$};
\node at (4.5,3.5){$\textbf{Horizontal Asymptote}$};

\node at (1,2.5){$n>m$};
\node at (1,1.5){$n=m$};
\node at (1,0.5){$n<m$};

\node at (4.5,2.5){none};
\node at (4.5,1.5){$y=\frac{ \text{leading coefficient of }p(x)}{ \text{leading coefficient of }q(x)}$};
\node at (4.5,0.5){$y=0$};

\end{tikzpicture}
\end{document}
```

${}y=\frac{x+1}{2x^{2}+5x-3}{}$

```tikz
\usepackage{tikz}
\usepackage{pgfplots}
\usepgflibrary{shapes.geometric}
\usetikzlibrary{calc,arrows.meta}
\pgfplotsset{my style/.append style={
axis line style={Latex-Latex,line width=1pt}, 
axis lines=middle, 
xlabel={$x$}, ylabel={$y$}, 
axis equal, grid=both, 
major grid style={line width=.3pt, draw=black!50}, 
minor grid style={line width=0.1pt, draw=gray!50}, 
width=10cm, height=10cm,
scale only axis=true, 
tick label style={font=\small},
legend style={at={(1,0)},anchor=south east,thick,inner sep=3pt}
}}
\begin{document}
\begin{tikzpicture} 

\begin{axis}[my style, xtick={-8,-7,...,8}, ytick={-8,-7,...,8}, xmin=-8, xmax=8, ymin=-8, ymax=8,samples=300,restrict y to domain*=-8:8,smooth] 

\addplot+[Stealth-Stealth,color=green,domain=-8:-3.03,no marks,line width=1pt]{(x+1)/(2*x^2 +5*x -3)};
\addplot+[Stealth-Stealth,color=green,domain=-2.97:0.48,no marks,line width=1pt]{(x+1)/(2*x^2 +5*x -3)};
\addplot+[Stealth-Stealth,color=green,domain=0.523:8,no marks,line width=1pt]{(x+1)/(2*x^2 +5*x -3)};
\addlegendentry{\(f(x)=\frac{x+1}{2x^{2}+5x-3}\)}
\addplot+[no marks, red, dashed] coordinates { (0.5, -8) (0.5, 8) };
\addplot+[no marks, red, dashed] coordinates { (-3, -8) (-3, 8) };
\addplot[dashed,color=red,domain=-8:8]{0};

\end{axis} 

\end{tikzpicture}
\end{document}
```

${}D=\mathbb{R}\setminus\left\{ -3,\frac{1}{2} \right\}{}$

Vertical Asymptotes:

$$
2x^{2}+5x-3=0\\
(2x-1)(x+3)=0\\ \\
\text{By the zero product property we have: } \\
2x-1=0 \text{ and } x+3=0\\
x=\frac{1}{2} \text{ and } x=-3
$$

Horizontal Asymptote:

$$
\text{Since } n<m \text{, y=0}\\
y=\frac{0}{2}=0
$$

## Inverse Functions

Is a function really a function? Is it one-to-one?

$$
f(x_{1})=f(x_{2})\implies x_{1}=x_{2}\\
f(x_{1})=f(x_{2}) \iff x_{1}=x_{2}\\ \\

$$

For every function ${}y=f(x){}$ has an **inverse relation** ${}x=f(y){}$
Where the inputs and outputs of ordered pairs of a function f are interchanged to produce the ordered pairs of an inverse relation of f.

Consider the function ${}f=\{(1,1),(2,3),(3,1),(4,2)\}{}$
The inverse of the function ${}f{}$ is ${}f_{inv}=\{(1,1),(3,2),(3,1),(2,4)\}{}$

Let ${}f{}$ be a one-to-one function with domain ${}X{}$ and range ${}Y{}$
Then, the **inverse function** of ${}f{}$, denoted by ${}f^{-1}{}$

### Properties of Inverse Functions

1. ${}(f \circ f^{-1})(x)=x{}$ for any ${}x \in D_{f}{}$
2. ${}(f^{-1} \circ f)(x)=x{}$ for any ${}x \in D_{f^{-1}}{}$
3. ${}D_{f}=R_{f^{-1}}{}$
4. ${}R_{f}=D_{f^{-1}}{}$
5. The point ${}(a,b){}$ is on the graph of ${}f{}$ if and only if ${}(b,a){}$ is on the graph of ${}f^{-1}{}$

$$
f(x)=2- \frac{2}{5}x\\
y=2- \frac{2}{5}x\\
x=2- \frac{2}{5}y\\
x-2=-\frac{2}{5}y\\
5(x-2)=-2y\\
\frac{5x-10}{-2}=y\\
-\frac{5}{2}x-5=y
$$

## Exponential Functions

$$
y=f(x)=a(b^{cx-h})+k
$$

${}D=\mathbb{R}{}$
${}R=\{y:y>k\}=(k,\infty){}$ if ${}a>0{}$
${}R=\{y:y<k\}=(-\infty,k){}$ if ${}a<0{}$
Horizontal Asymptote: ${}y=k{}$

$$
\text{Common Base: } b=10\\
\text{Natural Base: } b=e \approx 2.718281828
$$

```tikz
\usepackage{tikz}
\usepackage{pgfplots}
\usepgflibrary{shapes.geometric}
\usetikzlibrary{calc,arrows.meta}
\pgfplotsset{my style/.append style={
axis line style={-Latex,line width=1pt}, 
axis lines=middle, 
xlabel={$x$}, ylabel={$y$}, 
axis equal, grid=both, 
major grid style={line width=.3pt, draw=black!50}, 
minor grid style={line width=0.1pt, draw=gray!50}, 
width=10cm, height=10cm,
scale only axis=true, 
tick label style={font=\small},
legend style={at={(1,0)},anchor=south east,thick,inner sep=3pt}
}}
\begin{document}
\begin{tikzpicture} 

\begin{axis}[my style, xtick={-8,-7,...,8}, ytick={-8,-7,...,8}, xmin=-8, xmax=8, ymin=-8, ymax=8] 

\addplot+[Stealth-Stealth,color=green,samples=200,domain=-8:3,no marks,line width=1pt,smooth]{2^x};
\addplot[dashed,domain=-8:8,no marks, red]{0};
\node[circle,fill=red,inner sep=2pt,label={below right:$(0,1)$}] (1) at (axis cs:0,1){};
\addlegendentry{\(f(x)=2^x\)}
\addlegendentry{\(y=0\)}

\end{axis} 

\end{tikzpicture}
\end{document}
```

## Logarithmic Functions

$$
\log_{b}N=x \iff b^{x}=N\\ \\
y=f(x)=a \log_{b}(cx-h)+k
$$

```tikz
\usepackage{tikz}
\usepackage{pgfplots}
\usepgflibrary{shapes.geometric}
\usetikzlibrary{calc,arrows.meta}
\pgfplotsset{my style/.append style={
axis line style={-Latex,line width=1pt}, 
axis lines=middle, 
xlabel={$x$}, ylabel={$y$}, 
axis equal, grid=both, 
major grid style={line width=.3pt, draw=black!50}, 
minor grid style={line width=0.1pt, draw=gray!50}, 
width=10cm, height=10cm,
scale only axis=true, 
tick label style={font=\small},
legend style={at={(1,0)},anchor=south east,thick,inner sep=3pt}
}}
\begin{document}
\begin{tikzpicture} 

\begin{axis}[my style, xtick={-8,-7,...,8}, ytick={-8,-7,...,8}, xmin=-8, xmax=8, ymin=-8, ymax=8] 

\addplot+[Stealth-Stealth,color=green,samples=500,domain=-0.01:8,no marks,line width=1pt,smooth]{ln(x)/ln(2)};
\addplot+[mark=none, red, dashed] coordinates { (0, -8) (0, 8) };
\node[circle,fill=red,inner sep=2pt,label={above:$(1,0)$}] (1) at (axis cs:1,0){};
\addlegendentry{\(f(x)=\log_{2} x\)}
\addlegendentry{\(x=0\)}

\end{axis} 

\end{tikzpicture}
\end{document}
```

${}D=\left\{ x:x> \frac{h}{c} \right\}=\left( \frac{h}{c},\infty \right){}$ if ${}c>0{}$
${}D=\left\{ x:x< \frac{h}{c} \right\}=\left( -\infty, \frac{h}{c} \right){}$ if ${}c<0{}$

$$
D=
\begin{aligned}
&\left\{ x:x> \frac{h}{c} \right\}=\left( \frac{h}{c},\infty \right) &\text{ if } {}c>0{}\\
&\left\{ x:x< \frac{h}{c} \right\}=\left( -\infty, \frac{h}{c} \right)&\text{ if } {}c<0{}
\end{aligned}
$$

${}R=\mathbb{R}=\{x:x \in \mathbb{R}\}{}$
Vertical Aymptote: ${}x=\frac{h}{c}{}$

$$
\text{Common Logarithim: } b=10 \implies \log N\\
\text{Natural Logarithm: } b=e \implies \ln N
$$

Some Properties/Laws of Logarithms:

1. ${}\log_{b}b=1{}$
2. ${}\log_{b}1=0{}$
3. ${}\log_{b}b^{x}=x{}$
4. ${}b^{\log_{b}x}=x{}$
5. ${}\log_{b}x=\log_{b}y\implies x=y{}$
6. ${}\log_{y}x=\frac{\log x}{\log y}=\frac{\log_{10}x}{\log_{10}y}=\frac{\ln x}{\ln y}{}$
7. ${}\log_{b}x^{m}=m\log_{b}x{}$
8. ${}\log_{b}xy=\log_{b}x+\log_{b}y{}$
9. ${}\log_{b} \frac{x}{y}=\log_{b}x-\log_{b}y{}$
10. ${}\log_{b}\sqrt[n]{x}=\log_{b}x^{\frac {1}{n}}=\frac{1}{n}\log_{b}x{}$

# Operations on Functions

## Addition

$$
f(x), g(x)\\
(f+g)(x)=f(x)+g(x)
$$

${}D_{f+g}=D_{f}\cap D_{g}{}$

## Subtraction

$$
f(x),g(x)\\
(f-g)(x)=f(x)-g(x)
$$

${}D_{f-g}D_{f}\cap D_{g}{}$

## Multiplication

$$
f(x),g(x)\\
(f)(g)(x)=(f \cdot g)(x)=(fg)(x)=f(x)g(x)
$$

${}D_{f\cdot g}=D_{f}\cap D_{g}{}$

## Division

$$
f(x),g(x)\\
\left( \frac{f}{g} \right)(x)=\frac{f(x)}{g(x)}
$$

${}D_{\frac{f}{g}}=D_{f}\cap D_{g}\setminus\{x:g(x)=0\}{}$

## Composition of Functions

Note: The ${}f \circ g{}$ is coming

$$
(f \circ g)(x)=f[g(x)]
$$

${}D_{f\circ g}=\{x:x \in g(x),g(x)\in D_{f}\}{}$
${}R_{f \circ g}=\{y:y\in g(x),g(x)\in R_{f}\}{}$

Let ${}f(x)=\frac{1}{x},g(x)=\sqrt{ x+1 }{}$
${}D_{f}=\mathbb{R}\setminus\{0\}{}$
${}R_{f}=\mathbb{R}\setminus\{0\}{}$
${}D_{g}=[-1,\infty)=\{x:x\geq-1\}{}$
${}R_{g}=[0,\infty)=\{y:y\geq 0\}{}$

$$
(f\circ g)(x)=\frac{1}{\sqrt{ x+1 }}\\ \\
=\frac{1}{\sqrt{ x+1 }}\cdot \frac{\sqrt{ x+1 }}{\sqrt{ x+1 }}\\ \\
=\frac{\sqrt{ x+1 }}{x+1}
$$

$$
(g\circ f)(x)=\sqrt{ \frac{1}{x}+1 }\\
=\sqrt{ \frac{1+x}{x} }
$$

$$
(f\circ g)(1)=\frac{\sqrt{ x+1 }}{x+1}\\
=\frac{\sqrt{ 1+1 }}{1+1}\\
=\frac{\sqrt{ 2 }}{2}
$$

$$
(f\circ g)(0)=\frac{\sqrt{ x+1 }}{x+1}\\
=\frac{\sqrt{ 0+1 }}{0+1}\\
=\frac{\sqrt{ 1 }}{1}\\
=\frac{1}{1}=1
$$

$$
(g\circ f)(1)=\sqrt{ \frac{1+x}{x} }\\
=\sqrt{ \frac{1+1}{1} }\\

$$
