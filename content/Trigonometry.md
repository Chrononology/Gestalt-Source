**Trigonometry** is a part of [[Geometry]].

The trigonometric functions are defined by an [[Angles|angle]] at S.P. and a terminal point (any point that lies in the terminal side but not at the vertex)

```tikz
\usetikzlibrary{calc,arrows.meta}
\begin{document}
\begin{tikzpicture}
\draw[Latex-Latex,thick](-0.5,0)--(4,0) node[above]{$x$};
\draw[Latex-Latex,thick](0,-0.5)--(0,4) node[right]{$y$};
\draw[-Latex,color=red,very thick](0,0)--(3.5,3.5);
\draw[-Latex,color=blue,very thick](0,0)--(3.5,0);
\draw[-Latex,color=green!50!black,thick](1,0) .. controls(0.89443,0.44721) .. (0.70711,0.70711);
\node[label={right:$\theta$}] at (0.89443,0.44721){};
\draw[color=purple,very thick](2.5,0)--(2.5,2.5);
\node[circle,fill=purple,inner sep=2pt,label={below left:V}]at(0,0){};
\node[circle,fill=blue,inner sep=2pt,label={below:A$(x,0)$}] at (2.5,0){};
\node[circle,fill=red,inner sep=2pt,label={left:P$(x,y)$}] at (2.5,2.5){};
\end{tikzpicture}
\end{document}
```

Where:
Point ${}P{}$ ${}(x,y){}$ is a terminal point that lies at any point in the terminal side but not in the Vertex.
Point ${}A{}$ ${}(x,0){}$ is a point that lies ${}x{}$ units to the right of the Vertex
${}\triangle PVA{}$ is a right triangle
The distance of Point ${}P{}$ to Point ${}V{}$ is ${}r=\sqrt{ x^{2}+y^{2} }{}$

# Trigonometric Functions

## Trigonometric Functions of an Angle

The trigonometric functions of an angle ${}\theta{}$ (there is actually not much difference to the others)

$$
\begin{aligned}
&\text{sine of }\theta\text{: } \sin\theta=\frac{y}{r} & &  \text{cosecant of }\theta\text{: } \csc\theta=\frac{r}{y} \\
&\text{cosine of }\theta\text{: } \cos\theta=\frac{x}{r} & &  \text{secant of }\theta\text{: } \sec\theta=\frac{r}{x} \\
&\text{tangent of }\theta\text{: } \tan\theta=\frac{y}{x} &  & \text{cotangent of }\theta\text{: } \cot\theta=\frac{x}{y}
\end{aligned}
$$

Note that: The location of the terminal point in the terminal side does not matter since it is just a ratio.

## Special Triangles

For any acute angle ${}\theta{}$ it can be interpreted as a right triangle:

```tikz
\usetikzlibrary{calc,arrows.meta}
\begin{document}
\begin{tikzpicture}
\draw[Latex-Latex,thick](-0.5,0)--(4,0) node[above]{$x$};
\draw[Latex-Latex,thick](0,-0.5)--(0,4) node[right]{$y$};
\draw[color=red,very thick](0,0)--(2.5,2.5);
\draw[color=blue,very thick](0,0)--(2.5,0);
\draw[-Latex,color=green!50!black,thick](1,0) .. controls(0.89443,0.44721) .. (0.70711,0.70711);
\node[label={right:$\theta$}] at (0.89443,0.44721){};
\draw[color=purple,very thick](2.5,0)--(2.5,2.5);
\node[circle,fill=purple,inner sep=2pt,label={below left:A}]at(0,0){};
\node[circle,fill=blue,inner sep=2pt,label={below:C}] at (2.5,0){};
\node[circle,fill=red,inner sep=2pt,label={above:B}] at (2.5,2.5){};
\end{tikzpicture}
\end{document}
```

Where:
${}AC=x{}$
${}BC=y{}$
${}AB=r=\sqrt{ x^{2}+y^{2} }{}$

Then, its trigonometric functions can be interpreted as:

$$
\begin{aligned}
\sin\theta & =\frac{\text{opposite}}{\text{hypotenuse}} \\
\cos\theta & =\frac{\text{adjacent}}{\text{hypotenuse}} \\
\tan\theta & =\frac{\text{opposite}}{\text{adjacent}}
\end{aligned}
$$

These are also known as trigonometric ratios

### 30-60-90

In ${}\triangle ABC{}$, ${}AB=1,AC=\frac{\sqrt{ 3 }}{2},BC=\frac{1}{2}{}$

```tikz
\usetikzlibrary{calc,arrows.meta}
\usepackage{amsmath}
\begin{document}
\begin{tikzpicture}
\draw[Latex-Latex,thick](-0.5,0)--(4,0) node[above]{$x$};
\draw[Latex-Latex,thick](0,-0.5)--(0,4) node[right]{$y$};
\draw[-Latex,color=red,very thick](0,0)--(3.5,2.02);
\draw[-Latex,color=blue,very thick](0,0)--(3.5,0);
\draw[-Latex,color=green!50!black,thick](1,0) .. controls(0.96593,0.25882) .. (0.86603,0.5);
\node[label={right:$30^{\circ} $}] at (0.89443,0.44721){};
\draw[color=purple,very thick](2.5,0)--(2.5,1.44);
\node[circle,fill=purple,inner sep=2pt,label={below left:A}]at(0,0){};
\node[circle,fill=blue,inner sep=2pt,label={below:C}] at (2.5,0){};
\node[circle,fill=red,inner sep=2pt,label={left:B}] at (2.5,1.44){};
\end{tikzpicture}
\end{document}
```

### 45-45-90

In ${}\triangle ABC{}$, ${}AB=1,AC=BC\frac{\sqrt{ 2 }}{2}{}$

```tikz
\usetikzlibrary{calc,arrows.meta}
\usepackage{amsmath}
\begin{document}
\begin{tikzpicture}
\draw[Latex-Latex,thick](-0.5,0)--(4,0) node[above]{$x$};
\draw[Latex-Latex,thick](0,-0.5)--(0,4) node[right]{$y$};
\draw[-Latex,color=red,very thick](0,0)--(3.5,3.5);
\draw[-Latex,color=blue,very thick](0,0)--(3.5,0);
\draw[-Latex,color=green!50!black,thick](1,0) .. controls(0.89443,0.44721) .. (0.70711,0.70711);
\node[label={right:$45^{\circ} $}] at (0.89443,0.44721){};
\draw[color=purple,very thick](2.5,0)--(2.5,2.5);
\node[circle,fill=purple,inner sep=2pt,label={below left:A}]at(0,0){};
\node[circle,fill=blue,inner sep=2pt,label={below:C}] at (2.5,0){};
\node[circle,fill=red,inner sep=2pt,label={left:B}] at (2.5,2.5){};
\end{tikzpicture}
\end{document}
```

## Unit Circle

A unit circle is a circle with its center ${}C{}$ at ${}(0,0){}$ and its radius ${}r=1{}$
It has an equation of ${}x^{2}+y^{2}=1{}$
Its circumference ${}C=2\pi{}$

## Trigonometric Functions of a Real Number

A real number ${}|t|{}$ is an arc length of a circle from ${}(1,0){}$. The terminal point ${}P(x,y){}$ lies at the end of this arc length.
For every real number ${}t{}$, a unique value of ${}x{}$ and ${}y{}$ exists
_Note_: if ${}t{}$ is positive (${}t>0{}$), it is the arc length in the clockwise direction and anti-clockwise if ${}t{}$ is negative (${}t<0{}$)

The sine and cosine function of ${}t{}$ is:
${}\sin t=y{}$
${}\cos t=x{}$
${}D_{\sin,\cos}=\mathbb{R}{}$
${}R_{\sin,\cos}=[-1,1]{}$

If ${}\theta{}$ is expressed in radians then ${}\theta=t{}$

# Trigonometric Identities

# Inverse Trigonometic Functions

# Trigonometric Equations
