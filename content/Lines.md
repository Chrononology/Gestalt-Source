**Lines** is a concept in [[Geometry]] and [[Algebra]] when involving [[Cartesian Coordinate Plane]]s.

Lines are 1 dimensional objects/shapes that extend indefinitely on both sides.
Line segments are finite lines bound on endpoints.
Rays are lines the extend indefinitely on one side.

# Slope

The slope is also called the inclination of the line.
The inclination of a line is defined as the least counterclockwise/anti-clockwise angle ${}\theta{}$ which the ${}x{}$-axis must turn (at the point of intersection) to coincide with the intersecting line.

$$
m=\tan \theta
$$

```tikz
\usetikzlibrary{calc,arrows.meta}
\begin{document}
\begin{tikzpicture}
\draw[Latex-Latex,very thick](-0.5,0)--(3.5,0) node[above]{$x$};
\draw[Latex-Latex,very thick](0,-0.5)--(0,3.5) node[right]{$y$};
\draw[-Latex,color=red,thick](0,0)--(3,3);
\draw[-Latex,thick](1,0) .. controls(0.95,0.3) .. (0.5,0.5);
\node[label={right:$\theta$}] at (0.95,0.3){};
\end{tikzpicture}
\end{document}
```

The slope of a line can also be solved using points in the line.

$$
m=\frac{y_{2}-y_{1}}{x_{2}-x_{1}}=\frac{\text{rise}}{\text{run}}=\frac{\text{change in }y}{\text{change in }x}=\frac{\Delta y}{\Delta x}
$$

```tikz
\usetikzlibrary{calc,arrows.meta}
\begin{document}
\begin{tikzpicture}
\draw[Latex-Latex,very thick](-0.5,0)--(6.5,0) node[above]{$x$};
\draw[Latex-Latex,very thick](0,-0.5)--(0,6.5) node[right]{$y$};
\draw[-Latex,color=red,thick](0,0)--(5,5);
\draw[dashed,thick,color=green!50!black](1,1)--(5,1);
\draw[dashed,thick,color=green!50!black](5,5)--(5,1);
\node[circle,fill=red,inner sep=1.5pt,label={below right:$P(x_{1},y_{1})$}] at (1,1){};
\node[circle,fill=red,inner sep=1.5pt,label={above:$Q(x_{2},y_{2})$}] at (5,5){};
\node[circle,fill=red,inner sep=1.5pt,label={below:$R(x_{2},y_{1})$}] at (5,1){};
\node[label={above:$x_{2}-x_{1}$}] at (3.5,1){};
\node[label={left:$y_{2}-y_{1}$}] at (5.15,3){};
\draw[-Latex,thick](2,1) .. controls(1.95,1.3) .. (1.5,1.5);
\node[label={right:$\theta$}] at (1.75,1.4){};
\end{tikzpicture}
\end{document}
```

## Types of Slope

Positive Slope:

```tikz
\usetikzlibrary{arrows.meta}
\begin{document}
\begin{tikzpicture}
\draw[Latex-Latex,line width=2pt](-4,-1)--(4,1);
\end{tikzpicture}
\end{document}
```

Negative Slope:

```tikz
\usetikzlibrary{arrows.meta}
\begin{document}
\begin{tikzpicture}
\draw[Latex-Latex,line width=2pt](4,-1)--(-3,1);
\end{tikzpicture}
\end{document}
```

Zero Slope:

```tikz
\usetikzlibrary{arrows.meta}
\begin{document}
\begin{tikzpicture}
\draw[Latex-Latex,line width=2pt](-4,0)--(4,0);
\end{tikzpicture}
\end{document}
```

Undefined Slope:

```tikz
\usetikzlibrary{arrows.meta}
\begin{document}
\begin{tikzpicture}
\draw[Latex-Latex,line width=2pt](0,-4)--(0,4);
\end{tikzpicture}
\end{document}
```

# Types of Lines

## Parallel Lines

Parallel Lines never intersect since they have the same slope.

```tikz
\usetikzlibrary{calc,arrows.meta}
\begin{document}
\begin{tikzpicture}
\draw[Latex-Latex,very thick](-4.5,0)--(4.5,0) node[above]{$x$};
\draw[Latex-Latex,very thick](0,-4.5)--(0,4.5) node[right]{$y$};
\draw[Latex-Latex,very thick,color=red](-2,4)--(0,-4);
\draw[Latex-Latex,very thick,color=blue](1,4)--(3,-4);
\end{tikzpicture}
\end{document}
```

$$
m_{red}=m_{blue}
$$

## Intersecting Lines

Intersecting Lines intersect at one point. They do not necessarily need to have different slopes.

### Perpendicular Lines

Perpendicular Lines is a subtype of Intersecting Lines where the lines form a right angle at the point of intersection

```tikz
\usetikzlibrary{calc,arrows.meta}
\begin{document}
\begin{tikzpicture}
\draw[Latex-Latex,very thick](-4.5,0)--(4.5,0) node[above]{$x$};
\draw[Latex-Latex,very thick](0,-4.5)--(0,4.5) node[right]{$y$};
\draw[Latex-Latex,very thick,color=red](-3,4)--(1,-4);
\draw[Latex-Latex,very thick,color=blue](3,4)--(-4,0.5);
\end{tikzpicture}
\end{document}
```

$$
m_{red}\;\cdot\;m_{blue}=-1
$$

# Equations of a Line

## General Form

$$
ax+by+c=0
$$

Notes:
${}a,b,c \in \mathbb{R}{}$
${}a{}$ and ${}b{}$ are not both zero (they cannot be both zero at the same time)

A line with ${}y=b{}$ is considered as a horizontal line that passes through or has a ${}y{}$-intercept ${}b{}$
A line with ${}x=a{}$ is considered as a vertical line that passes through or has an ${}x{}$-intercept ${}a{}$

## Point-Slope Form

$$
m=\frac{y-y_{1}}{x-x_{1}}\\ \\
\implies y-y_{1}=m(x-x_{1})
$$

Where:
${}(x_{1},y_{1}){}$ is a point where the line passes through
${}(x,y){}$ is any point in the line

## Two-Point Form

$$
m=\frac{y_{2}-y_{1}}{x_{2}-x_{1}}\\ \\
\text{By the Point-Slope Form: }\\ 
\implies y-y_{1}=\left( \frac{y_{2}-y_{1}}{x_{2}-x_{1}} \right)(x-x_{1})
$$

Where:
${}(x_{1},y_{1}){}$ and ${}(x_{2},y_{2}){}$ are points where the line passes through

## Slope-Intercept Form

$$
y-b=m(x-0)\\ \\
\implies y=mx+b
$$

Where:
${}(0,b){}$ is the ${}y{}$-intercept that the line passes through

## Intercept Form

$$
y-0=-\frac{b}{a}(x-a)\\ \\
\implies \frac{x}{a}+\frac{y}{b}=1
$$

Where:
${}(a,0){}$ and ${}(0,b){}$ are the ${}x{}$- and ${}y{}$-intercepts the line passes through
${}m=-\frac{b}{a}{}$

# Graphing a Line

With Table of Values:

1. Create a table of values containing at least two points
2. Plot and draw a line passing these two points

With ${}x{}$- and ${}y{}$-intercepts:

1. Find the ${}x{}$- and ${}y{}$-intercepts
2. Plot and draw a line passing these two points

With Slope and ${}y{}$-intercepts:

1. Find the slope and ${}y{}$-intercept (from the slope-intercept form)
2. Plot the ${}y{}$-intercept
3. Move upward (+) or downward (-) by ${}\Delta y{}$ units (numerator)
4. Move right (+) or left (-) by ${}\Delta x{}$ units (denominator)
5. Mark the new point and draw a line passing the two points
