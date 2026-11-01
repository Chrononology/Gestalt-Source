The **Cartesian Coordinate Plane** is the intersection of [[Algebra]] and [[Geometry]]. It was introduced by Rene Descartes.

A number line looks like this:

```tikz
\usetikzlibrary{calc,arrows.meta}
\begin{document}
\begin{tikzpicture}
\draw[Latex-Latex,very thick](-4.5,0)--(4.5,0);
\foreach \x in {-4,-3,...,3,4}
\draw[shift={(\x,0)},thick](0,4pt)--(0,-4pt) node[below]{$\x$};
\end{tikzpicture}
\end{document}
```

The number line contains ${}\mathbb{R}{}$ or the set of all real numbers

A cartesian coordinate plane looks like this:

```tikz
\usetikzlibrary{calc,arrows.meta}
\begin{document}
\begin{tikzpicture}
\draw[Latex-Latex,very thick](-4.5,0)--(4.5,0);
\foreach \x in {-4,-3,-2,-1,1,2,3,4}
\draw[shift={(\x,0)},thick](0,4pt)--(0,-4pt) node[below]{$\x$};
\draw[Latex-Latex,very thick](0,-4.5)--(0,4.5);
\foreach \y in {-4,-3,-2,-1,1,2,3,4}
\draw[shift={(0,\y)},thick](4pt,0)--(-4pt,0) node[left]{$\y$};
\end{tikzpicture}
\end{document}
```

The cartesian coordinate plane contains ${}\mathbb{R} \times \mathbb{R}=\mathbb{R}^{2}=\{ (x,y):x,y \in \mathbb{R} \}{}$ or the set of all ordered pairs of real numbers

Each ordered pair represents a point in the cartesian plane (one-to-one correspondence).
The illustration of the system that connects these is the Rectangular Cartesian Coordinate Plane. This Rectangular Cartesian Coordinate Plane consists of a special pair of perpendicularly intersecting lines or axes that intersect at the point ${}0{}$ or the origin ${}(0,0){}$.

The horizontal line/axis is called the ${}x{}$-axis or axis of abscissas. The vertical line/axis is called the ${}y{}$-axis or the axis or ordinates.

```tikz
\usetikzlibrary{calc,arrows.meta}
\begin{document}
\begin{tikzpicture}
\draw[Latex-Latex,very thick](-4.5,0)--(4.5,0) node[above]{$x$};
\foreach \x in {-4,-3,-2,-1,1,2,3,4}
\draw[shift={(\x,0)},thick](0,4pt)--(0,-4pt) node[below]{$\x$};
\draw[Latex-Latex,very thick](0,-4.5)--(0,4.5) node[right]{$y$};
\foreach \y in {-4,-3,-2,-1,1,2,3,4}
\draw[shift={(0,\y)},thick](4pt,0)--(-4pt,0) node[left]{$\y$};
\draw[-Latex](4,0)--(4,1.5) node[right]{$x$-axis};
\draw[-Latex](0,4)--(1.5,4) node[right]{$y$-axis};
\draw[-Latex](0,0)--(0.5,-0.5) node[below right]{origin};
\node[label={above:Quadrant I}] at (2,2){$(+,+)$};
\node[label={above:Quadrant II}] at (-2,2){$(-,+)$};
\node[label={above:Quadrant III}] at (-2,-2){$(-,-)$};
\node[label={above:Quadrant IV}] at (2,-2){$(+,-)$};
\end{tikzpicture}
\end{document}
```

# Equations Involving Distance

## Distance Between Two Points

The distance formula is derived from the [[Pythagorean Theorem]]

$$
d=\sqrt{ (x_{2}-x_{1})^{2}+(y_{2}-y_{1})^{2} }
$$

Where:
${}P_{1}(x_{1},y_{1}){}$
${}P_{2}(x_{2},y_{2}){}$

```tikz
\usetikzlibrary{calc,arrows.meta}
\begin{document}
\begin{tikzpicture}
\draw[Latex-Latex,very thick](-0.5,0)--(6.5,0) node[above]{$x$};
\draw[Latex-Latex,very thick](0,-0.5)--(0,6.5) node[right]{$y$};
\draw[color=red,thick](1,1)--(5,5);
\draw[dashed,thick,color=green!50!black](1,1)--(5,1);
\draw[dashed,thick,color=green!50!black](5,5)--(5,1);
\node[circle,fill=red,inner sep=1.5pt,label={below:$P_{1}(x_{1},y_{1})$}] at (1,1){};
\node[circle,fill=red,inner sep=1.5pt,label={above:$P_{2}(x_{2},y_{2})$}] at (5,5){};
\node[circle,fill=red,inner sep=1.5pt,label={below:$P_{3}(x_{2},y_{1})$}] at (5,1){};
\node[label={above:$x_{2}-x_{1}$}] at (3,1){};
\node[label={left:$y_{2}-y_{1}$}] at (5,3){};
\node[label={above left:$d$}] at (3,3){};
\end{tikzpicture}
\end{document}
```

## Midpoint

$$
M(x,y)=\left( \frac{x_{1}+x_{2}}{2}, \frac{y_{1}+y_{2}}{2} \right)
$$

Where:
${}P_{1}(x_{1},y_{1}){}$
${}P_{2}(x_{2},y_{2}){}$

```tikz
\usetikzlibrary{calc,arrows.meta}
\begin{document}
\begin{tikzpicture}
\draw[Latex-Latex,very thick](-0.5,0)--(6.5,0) node[above]{$x$};
\draw[Latex-Latex,very thick](0,-0.5)--(0,6.5) node[right]{$y$};
\draw[color=red,thick](1,1)--(5,5);
\draw[dashed,thick,color=green!50!black](1,1)--(5,1);
\draw[dashed,thick,color=green!50!black](5,5)--(5,1);
\draw[dashed,thick,color=blue](3,1)--(3,3);
\draw[dashed,thick,color=blue](5,3)--(3,3);
\node[circle,fill=red,inner sep=1.5pt,label={below:$P_{1}(x_{1},y_{1})$}] at (1,1){};
\node[circle,fill=red,inner sep=1.5pt,label={above:$P_{2}(x_{2},y_{2})$}] at (5,5){};
\node[circle,fill=red,inner sep=1.5pt,label={below:$P_{3}(x_{2},y_{1})$}] at (5,1){};
\node[label={below:$\frac{x_{1}+x_{2}}{2}$}] at (3,1){};
\node[label={right:$\frac{y_{1}+y_{2}}{2}$}] at (5,3){};
\node[circle,fill=blue,inner sep=1.5pt,label={above left:$M(x,y)$}] at (3,3){};
\end{tikzpicture}
\end{document}
```

## Distance of a Point to a Line

The distance of a point ${}(x_{1},y_{1}){}$ from a vertical line ${}x=a{}$ is:

$$
d=|x_{1}-a|
$$

```tikz
\usetikzlibrary{calc,arrows.meta}
\begin{document}
\begin{tikzpicture}
\draw[Latex-Latex,very thick](-0.5,0)--(6.5,0) node[above]{$x$};
\draw[Latex-Latex,very thick](0,-0.5)--(0,6.5) node[right]{$y$};
\draw[Latex-Latex,color=red,very thick](3,-0.5)--(3,6.5);
\draw[dashed,color=blue,thick](1,2)--(3,2);
\node[circle,fill=green!50!black,inner sep=1.5pt,label={below:$(x_{1},y_{1})$}] at (1,2){};
\end{tikzpicture}
\end{document}
```

The distance of a point ${}(x_{1},y_{1}){}$ from a horizontal line ${}y=b{}$ is:

$$
d=|y_{1}-b|
$$

```tikz
\usetikzlibrary{calc,arrows.meta}
\begin{document}
\begin{tikzpicture}
\draw[Latex-Latex,very thick](-0.5,0)--(6.5,0) node[above]{$x$};
\draw[Latex-Latex,very thick](0,-0.5)--(0,6.5) node[right]{$y$};
\draw[Latex-Latex,color=red,very thick](-0.5,1)--(6.5,1);
\draw[dashed,color=blue,thick](3,4)--(3,1);
\node[circle,fill=green!50!black,inner sep=1.5pt,label={above:$(x_{1},y_{1})$}] at (3,4){};
\end{tikzpicture}
\end{document}
```

The distance of a point ${}(x_{1},y_{1}){}$ from a slant line ${}ax+bx+c=0{}$ is:

$$
d=\frac{|ax_{1}+by_{1}+c|}{\sqrt{ a^{2}+b^{2} }}
$$

```tikz
\usetikzlibrary{calc,arrows.meta}
\begin{document}
\begin{tikzpicture}
\draw[Latex-Latex,very thick](-0.5,0)--(6.5,0) node[above]{$x$};
\draw[Latex-Latex,very thick](0,-0.5)--(0,6.5) node[right]{$y$};
\draw[Latex-Latex,color=red,very thick](-0.5,0)--(4.5,6);
\draw[dashed,color=blue,thick](3,1)--(1.43,2.31);
\node[circle,fill=green!50!black,inner sep=1.5pt,label={below:$(x_{1},y_{1})$}] at (3,1){};
\end{tikzpicture}
\end{document}
```
