[[Conic Sections]] are shapes made from the intersection of a plane and a cone. It is a part of Pre-[[Calculus]], [[Algebra]], and Analytic [[Geometry]].
The general form of conic sections:

$$
Ax^{2}+Bxy+Cy^{2}+Dx+Ey+F=0
$$

Where:
${}A,B,{}$ or ${}C{}$ are not all ${}0{}$

# Circle

See also:

The standard form/center-radius form:

$$
(x-h)^{2}+(y-k)^{2}=r^{2}
$$

Its general form is:

$$
Ax^{2}+Cy^{2}+Dx+Ey+F=0
$$

Its graph will look like:

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

\addplot[color=green,samples=100,domain=0:360,no marks,line width=1pt]({cos(x)},{sin(x)});
\node[circle,fill=red,inner sep=2pt,label={above right:$(0,0)$}] (1) at (axis cs:0,0){};
\end{axis} 

\end{tikzpicture}
\end{document}
```

# Ellipse

$$
\frac{x^{2}}{a^{2}}+\frac{y^{2}}{b^{2}}=1
$$

# Parabola

$$
y^{2}=4ax\\
x^{2}=4ay
$$

# Hyperbola

$$
\frac{x^{2}}{a^{2}}-\frac{y^{2}}{b^{2}}=1
$$
