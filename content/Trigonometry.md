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
Point ${}P{}$ ${}(x,y){}$ is a point that lies at any point in the terminal side but not in the Vertex.
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

Note that: The location of the point in the terminal side does not matter since it is just a ratio.

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
_Note_:
if ${}t{}$ is positive (${}t>0{}$), it is the arc length in the clockwise direction and anti-clockwise if ${}t{}$ is negative (${}t<0{}$)
the terminal point is different from a point in the terminal side because the terminal point exists if ${}r=1{}$

The sine and cosine function of ${}t{}$ is:
${}\sin t=y{}$
${}\cos t=x{}$
${}D_{\sin,\cos}=\mathbb{R}{}$
${}R_{\sin,\cos}=[-1,1]{}$

If ${}\theta{}$ is expressed in radians then ${}\theta=t{}$

## Graphs of Trigonometric Functions

A function is said to be periodic if there exists a positive number ${}p{}$ such that:

$$
f(x+p)=f(x)
$$

A function is an odd function if:

$$
f(-x)=-f(x)
$$

A function is an even function if:

$$
f(-x)=f(x)
$$

### Sine function

$$
y=A\sin(Bx+C)+D
$$

Where:
${}|A|={}$"Amplitude" or distance travelled above or below from the midline of the function
${}|B|={}$"Frequency" or the length of the period
${}|C|={}$"Phase Shift" or the horizontal displacement of the graph from the ${}y{}$-axis
${}|D|={}$"Vertical Translation" or the vertcal displacement of the graph from the ${}x{}$-axis

Its graph looks like this:

```tikz
\usepackage{tikz}
\usepackage{pgfplots,amsmath}
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

\begin{axis}[my style, xtick={-6.2832,-4.7124,...,6.2832}, xticklabels={$-2\pi$,$-\frac{3}{2}\pi$,$-\pi$,$-\frac{1}{2}\pi$,$0$,$\frac{1}{2}\pi$,$\pi$,$\frac{3}{2}\pi$,$2\pi$}, ytick={-6,-5,...,6}, xmin=-6.2832, xmax=6.2832, ymin=-6, ymax=6, minor tick num=1] 

\addplot[color=green,samples=100,domain=-3*pi:3*pi,no marks,line width=1pt]{sin(deg(x))};
\addlegendentry{\(f(x)=\sin x\)}
\end{axis} 

\end{tikzpicture}
\end{document}
```

Amplitude: ${}|A|{}$
Period: ${}| \frac{2\pi}{B} |{}$
Phase Shift: ${}| \frac{C}{B} |{}$
Vertical Translation: ${}|D|{}$ units up if ${}D>0{}$ or ${}|D|{}$ units down if ${}D<0{}$
Domain${}=\mathbb{R}{}$
${}R=[-A+D,A+D]{}$ if ${}A>0{}$
${}R=[A+D,-A+D]{}$ if ${}A<0{}$

Variating ${}A{}$:

```tikz
\usepackage{tikz}
\usepackage{pgfplots,amsmath}
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

\begin{axis}[my style, xtick={-6.2832,-4.7124,...,6.2832}, xticklabels={$-2\pi$,$-\frac{3}{2}\pi$,$-\pi$,$-\frac{1}{2}\pi$,$0$,$\frac{1}{2}\pi$,$\pi$,$\frac{3}{2}\pi$,$2\pi$}, ytick={-6,-5,...,6}, xmin=-6.2832, xmax=6.2832, ymin=-6, ymax=6, minor tick num=1] 

\addplot[color=green,samples=100,domain=-3*pi:3*pi,no marks,line width=1pt]{2*sin(deg(x))};
\addplot[color=blue,samples=100,domain=-3*pi:3*pi,no marks,line width=1pt]{(1/2)*sin(deg(x))};
\addplot[color=red,samples=100,domain=-3*pi:3*pi,no marks,line width=1pt]{-sin(deg(x))};
\addlegendentry{\(f(x)=2 \sin x\)}
\addlegendentry{\(f(x)=\frac{1}{2}\sin x\)}
\addlegendentry{\(f(x)=-\sin x\)}
\end{axis} 

\end{tikzpicture}
\end{document}
```

Variating ${}B{}$:

```tikz
\usepackage{tikz}
\usepackage{pgfplots,amsmath}
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

\begin{axis}[my style, xtick={-6.2832,-4.7124,...,6.2832}, xticklabels={$-2\pi$,$-\frac{3}{2}\pi$,$-\pi$,$-\frac{1}{2}\pi$,$0$,$\frac{1}{2}\pi$,$\pi$,$\frac{3}{2}\pi$,$2\pi$}, ytick={-6,-5,...,6}, xmin=-6.2832, xmax=6.2832, ymin=-6, ymax=6, minor tick num=1] 

\addplot[color=green,samples=100,domain=-3*pi:3*pi,no marks,line width=1pt]{sin(deg(2*x))};
\addplot[color=blue,samples=100,domain=-3*pi:3*pi,no marks,line width=1pt]{sin(deg((1/2)*x))};
\addplot[color=red,samples=100,domain=-3*pi:3*pi,no marks,line width=1pt]{sin(deg(-x))};
\addlegendentry{\(f(x)=\sin 2x\)}
\addlegendentry{\(f(x)=\sin \frac{1}{2} x\)}
\addlegendentry{\(f(x)=\sin -x\)}
\end{axis} 

\end{tikzpicture}
\end{document}
```

Variating ${}C{}$:

```tikz
\usepackage{tikz}
\usepackage{pgfplots,amsmath}
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

\begin{axis}[my style, xtick={-6.2832,-4.7124,...,6.2832}, xticklabels={$-2\pi$,$-\frac{3}{2}\pi$,$-\pi$,$-\frac{1}{2}\pi$,$0$,$\frac{1}{2}\pi$,$\pi$,$\frac{3}{2}\pi$,$2\pi$}, ytick={-6,-5,...,6}, xmin=-6.2832, xmax=6.2832, ymin=-6, ymax=6, minor tick num=1] 

\addplot[color=green,samples=100,domain=-3*pi:3*pi,no marks,line width=1pt]{sin(deg(x+ 2))};
\addplot[color=blue,samples=100,domain=-3*pi:3*pi,no marks,line width=1pt]{sin(deg(x- 2))};
\addlegendentry{\(f(x)=\sin x+2 \)}
\addlegendentry{\(f(x)=\sin x-2 \)}
\end{axis} 

\end{tikzpicture}
\end{document}
```

Variating ${}D{}$:

```tikz
\usepackage{tikz}
\usepackage{pgfplots,amsmath}
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

\begin{axis}[my style, xtick={-6.2832,-4.7124,...,6.2832}, xticklabels={$-2\pi$,$-\frac{3}{2}\pi$,$-\pi$,$-\frac{1}{2}\pi$,$0$,$\frac{1}{2}\pi$,$\pi$,$\frac{3}{2}\pi$,$2\pi$}, ytick={-6,-5,...,6}, xmin=-6.2832, xmax=6.2832, ymin=-6, ymax=6, minor tick num=1] 

\addplot[color=green,samples=100,domain=-3*pi:3*pi,no marks,line width=1pt]{sin(deg(x))+2};
\addplot[color=blue,samples=100,domain=-3*pi:3*pi,no marks,line width=1pt]{sin(deg(x))-2};
\addlegendentry{\(f(x)=\sin (x)+2\)}
\addlegendentry{\(f(x)=\sin (x)-2\)}
\end{axis} 

\end{tikzpicture}
\end{document}
```

### Cosine function

$$
y=A\cos(Bx+C)+D
$$

```tikz
\usepackage{tikz}
\usepackage{pgfplots,amsmath}
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

\begin{axis}[my style, xtick={-6.2832,-4.7124,...,6.2832}, xticklabels={$-2\pi$,$-\frac{3}{2}\pi$,$-\pi$,$-\frac{1}{2}\pi$,$0$,$\frac{1}{2}\pi$,$\pi$,$\frac{3}{2}\pi$,$2\pi$}, ytick={-6,-5,...,6}, xmin=-6.2832, xmax=6.2832, ymin=-6, ymax=6, minor tick num=1] 

\addplot [color=green,samples=100,domain=-2*pi:2*pi,no marks,line width=1pt]{cos(deg(x))};
\addlegendentry{\(f(x)=\cos x\)}
\end{axis} 

\end{tikzpicture}
\end{document}
```

Amplitude: ${}|A|{}$
Period: ${}| \frac{2\pi}{B} |{}$
Phase Shift: ${}| \frac{C}{B} |{}$
Vertical Translation: ${}|D|{}$ units up if ${}D>0{}$ or ${}|D|{}$ units down if ${}D<0{}$
${}D=\mathbb{R}{}$
${}R=[-A+D,A+D]{}$ if ${}A>0{}$
${}R=[A+D,-A+D]{}$ if ${}A<0{}$

Variating ${}A{}$:

```tikz
\usepackage{tikz}
\usepackage{pgfplots,amsmath}
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

\begin{axis}[my style, xtick={-6.2832,-4.7124,...,6.2832}, xticklabels={$-2\pi$,$-\frac{3}{2}\pi$,$-\pi$,$-\frac{1}{2}\pi$,$0$,$\frac{1}{2}\pi$,$\pi$,$\frac{3}{2}\pi$,$2\pi$}, ytick={-6,-5,...,6}, xmin=-6.2832, xmax=6.2832, ymin=-6, ymax=6, minor tick num=1] 

\addplot[color=green,samples=100,domain=-3*pi:3*pi,no marks,line width=1pt]{2*cos(deg(x))};
\addplot[color=blue,samples=100,domain=-3*pi:3*pi,no marks,line width=1pt]{(1/2)*cos(deg(x))};
\addplot[color=red,samples=100,domain=-3*pi:3*pi,no marks,line width=1pt]{-cos(deg(x))};
\addlegendentry{\(f(x)=2 \cos x\)}
\addlegendentry{\(f(x)=\frac{1}{2}\cos x\)}
\addlegendentry{\(f(x)=-\cos x\)}
\end{axis} 

\end{tikzpicture}
\end{document}
```

Variating ${}B{}$:

```tikz
\usepackage{tikz}
\usepackage{pgfplots,amsmath}
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

\begin{axis}[my style, xtick={-6.2832,-4.7124,...,6.2832}, xticklabels={$-2\pi$,$-\frac{3}{2}\pi$,$-\pi$,$-\frac{1}{2}\pi$,$0$,$\frac{1}{2}\pi$,$\pi$,$\frac{3}{2}\pi$,$2\pi$}, ytick={-6,-5,...,6}, xmin=-6.2832, xmax=6.2832, ymin=-6, ymax=6, minor tick num=1] 

\addplot[color=green,samples=100,domain=-3*pi:3*pi,no marks,line width=1pt]{cos(deg(2*x))};
\addplot[color=blue,samples=100,domain=-3*pi:3*pi,no marks,line width=1pt]{cos(deg((1/2)*x))};
\addplot[color=red,samples=100,domain=-3*pi:3*pi,no marks,line width=1pt]{cos(deg(-x))};
\addlegendentry{\(f(x)=\cos 2x\)}
\addlegendentry{\(f(x)=\cos \frac{1}{2} x\)}
\addlegendentry{\(f(x)=\cos -x\)}
\end{axis} 

\end{tikzpicture}
\end{document}
```

Variating ${}C{}$:

```tikz
\usepackage{tikz}
\usepackage{pgfplots,amsmath}
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

\begin{axis}[my style, xtick={-6.2832,-4.7124,...,6.2832}, xticklabels={$-2\pi$,$-\frac{3}{2}\pi$,$-\pi$,$-\frac{1}{2}\pi$,$0$,$\frac{1}{2}\pi$,$\pi$,$\frac{3}{2}\pi$,$2\pi$}, ytick={-6,-5,...,6}, xmin=-6.2832, xmax=6.2832, ymin=-6, ymax=6, minor tick num=1] 

\addplot[color=green,samples=100,domain=-3*pi:3*pi,no marks,line width=1pt]{cos(deg(x+ 2))};
\addplot[color=blue,samples=100,domain=-3*pi:3*pi,no marks,line width=1pt]{cos(deg(x- 2))};
\addlegendentry{\(f(x)=\cos (x+2) \)}
\addlegendentry{\(f(x)=\cos (x-2) \)}
\end{axis} 

\end{tikzpicture}
\end{document}
```

Variating ${}D{}$:

```tikz
\usepackage{tikz}
\usepackage{pgfplots,amsmath}
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

\begin{axis}[my style, xtick={-6.2832,-4.7124,...,6.2832}, xticklabels={$-2\pi$,$-\frac{3}{2}\pi$,$-\pi$,$-\frac{1}{2}\pi$,$0$,$\frac{1}{2}\pi$,$\pi$,$\frac{3}{2}\pi$,$2\pi$}, ytick={-6,-5,...,6}, xmin=-6.2832, xmax=6.2832, ymin=-6, ymax=6, minor tick num=1] 

\addplot[color=green,samples=100,domain=-3*pi:3*pi,no marks,line width=1pt]{cos(deg(x))+2};
\addplot[color=blue,samples=100,domain=-3*pi:3*pi,no marks,line width=1pt]{cos(deg(x))-2};
\addlegendentry{\(f(x)=\cos (x)+2\)}
\addlegendentry{\(f(x)=\cos (x)-2\)}
\end{axis} 

\end{tikzpicture}
\end{document}
```

### Tangent function

$$
y=\frac{A\sin(Bx+C)+D}{A\cos(Bx+C)+D}
$$

```tikz
\usepackage{tikz}
\usepackage{pgfplots,amsmath}
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

\begin{axis}[my style, xtick={-6.2832,-4.7124,...,6.2832}, xticklabels={$-2\pi$,$-\frac{3}{2}\pi$,$-\pi$,$-\frac{1}{2}\pi$,$0$,$\frac{1}{2}\pi$,$\pi$,$\frac{3}{2}\pi$,$2\pi$}, ytick={-6,-5,...,6}, xmin=-6.2832, xmax=6.2832, ymin=-6, ymax=6, minor tick num=1,restrict y to domain=-7:7,unbounded coords=jump]

\addplot[color=green,samples=100,domain=-2*pi:-(3/2)*pi,no marks,line width=1pt]{tan(deg(x))};
\addplot[color=green,samples=100,domain=-(3/2)*pi:-(1/2)*pi,no marks,line width=1pt]{tan(deg(x))};
\addplot[color=green,samples=100,domain=-(1/2)*pi:(1/2)*pi,no marks,line width=1pt]{tan(deg(x))};
\addplot[color=green,samples=100,domain=(1/2)*pi:(3/2)*pi,no marks,line width=1pt]{tan(deg(x))};
\addplot[color=green,samples=100,domain=(3/2)*pi:2*pi,no marks,line width=1pt]{tan(deg(x))};
\addplot+[no marks, red, dashed,line width=1pt] coordinates { (-(3/2)*pi, -6) (-(3/2)*pi, 6) };
\addplot+[no marks, red, dashed,line width=1pt] coordinates { (-(1/2)*pi, -6) (-(1/2)*pi, 6) };
\addplot+[no marks, red, dashed,line width=1pt] coordinates { ((3/2)*pi, -6) ((3/2)*pi, 6) };
\addplot+[no marks, red, dashed,line width=1pt] coordinates { ((1/2)*pi, -6) ((1/2)*pi, 6) };
\addlegendentry{\(f(x)=\tan x\)}
\end{axis} 

\end{tikzpicture}
\end{document}
```

```tikz
\usepackage{tikz}
\usepackage{pgfplots,amsmath}
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

\begin{axis}[my style, xtick={-6.2832,-4.7124,...,6.2832}, xticklabels={$-2\pi$,$-\frac{3}{2}\pi$,$-\pi$,$-\frac{1}{2}\pi$,$0$,$\frac{1}{2}\pi$,$\pi$,$\frac{3}{2}\pi$,$2\pi$}, ytick={-6,-5,...,6}, xmin=-6.2832, xmax=6.2832, ymin=-6, ymax=6, minor tick num=1,restrict y to domain=-10:10,unbounded coords = jump,samples=200,smooth]

\addplot[color=green,domain=-2*pi:2*pi,no marks,line width=1pt]{tan(deg(x))};
\addplot+[no marks, red, dashed,line width=1pt] coordinates { (-(3/2)*pi, -6) (-(3/2)*pi, 6) };
\addplot+[no marks, red, dashed,line width=1pt] coordinates { (-(1/2)*pi, -6) (-(1/2)*pi, 6) };
\addplot+[no marks, red, dashed,line width=1pt] coordinates { ((3/2)*pi, -6) ((3/2)*pi, 6) };
\addplot+[no marks, red, dashed,line width=1pt] coordinates { ((1/2)*pi, -6) ((1/2)*pi, 6) };
\addlegendentry{\(f(x)=\tan x\)}
\end{axis} 

\end{tikzpicture}
\end{document}
```

The function is asymptotic to all ${}x=\frac{(2k+1)\pi}{2}{}$
${}D=\mathbb{R}\setminus \left\{  \frac{(2k+1)\pi}{2}:k \in \mathbb{Z}  \right\}{}$
${}R=\mathbb{R}{}$
Its period is ${}\pi{}$

Variating ${}A{}$:

```tikz
\usepackage{tikz}
\usepackage{pgfplots,amsmath}
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

\begin{axis}[my style, xtick={-6.2832,-4.7124,...,6.2832}, xticklabels={$-2\pi$,$-\frac{3}{2}\pi$,$-\pi$,$-\frac{1}{2}\pi$,$0$,$\frac{1}{2}\pi$,$\pi$,$\frac{3}{2}\pi$,$2\pi$}, ytick={-6,-5,...,6}, xmin=-6.2832, xmax=6.2832, ymin=-6, ymax=6, minor tick num=1,restrict y to domain=-20:20,unbounded coords = jump,samples=200,smooth] 

\addplot[color=blue,domain=-2*pi:2*pi,no marks,line width=1pt]{2*tan(deg(x))};
\addplot[color=red,domain=-2*pi:2*pi,no marks,line width=1pt,samples=300]{(1/2)*tan(deg(x))};
\addplot[color=green,domain=-2*pi:2*pi,no marks,line width=1pt]{(-tan(deg(x))};
\addplot+[no marks, red!50, dashed,line width=1pt] coordinates { (-(3/2)*pi, -6) (-(3/2)*pi, 6) };
\addplot+[no marks, red!50, dashed,line width=1pt] coordinates { (-(1/2)*pi, -6) (-(1/2)*pi, 6) };
\addplot+[no marks, red!50, dashed,line width=1pt] coordinates { ((3/2)*pi, -6) ((3/2)*pi, 6) };
\addplot+[no marks, red!50, dashed,line width=1pt] coordinates { ((1/2)*pi, -6) ((1/2)*pi, 6) };
\addlegendentry{\(f(x)=2 \tan x\)}
\addlegendentry{\(f(x)=\frac{1}{2} \tan x\)}
\addlegendentry{\(f(x)=-\tan x\)}
\end{axis} 

\end{tikzpicture}
\end{document}
```

### Cotangent function

$$
y=\frac{A\cos(Bx+C)+D}{A\sin(Bx+C)+D}
$$

```tikz
\usepackage{tikz}
\usepackage{pgfplots,amsmath}
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

\begin{axis}[my style, xtick={-6.2832,-4.7124,...,6.2832}, xticklabels={$-2\pi$,$-\frac{3}{2}\pi$,$-\pi$,$-\frac{1}{2}\pi$,$0$,$\frac{1}{2}\pi$,$\pi$,$\frac{3}{2}\pi$,$2\pi$}, ytick={-6,-5,...,6}, xmin=-6.2832, xmax=6.2832, ymin=-6, ymax=6, minor tick num=1,,restrict y to domain=-15.75:15.75,unbounded coords = jump,samples=200,smooth]  

\addplot[color=green,samples=100,domain=-2*pi:2*pi,no marks,line width=1pt]{1/(tan(deg(x)))};
\addlegendentry{\(f(x)=\cot x\)}
\end{axis} 

\end{tikzpicture}
\end{document}
```

The function is asymptotic to all ${}x=k\pi{}$
${}D=\mathbb{R}\setminus \left\{  k\pi:k \in \mathbb{Z}  \right\}{}$
${}R=\mathbb{R}{}$
Its period is ${}\pi{}$

### Secant function

```tikz
\usepackage{tikz}
\usepackage{pgfplots,amsmath}
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

\begin{axis}[my style, xtick={-6.2832,-4.7124,...,6.2832}, xticklabels={$-2\pi$,$-\frac{3}{2}\pi$,$-\pi$,$-\frac{1}{2}\pi$,$0$,$\frac{1}{2}\pi$,$\pi$,$\frac{3}{2}\pi$,$2\pi$}, ytick={-6,-5,...,6}, xmin=-6.2832, xmax=6.2832, ymin=-6, ymax=6, minor tick num=1] 

\addplot[color=green,samples=200,domain=-2*pi:2*pi,no marks,line width=1pt]{1/(cos(deg(x))};
\addlegendentry{\(f(x)=sec x\)}
\end{axis} 

\end{tikzpicture}
\end{document}
```

The function is asymptotic to all ${}x=\frac{(2k+1)\pi}{2}{}$
${}D=\mathbb{R}\setminus \left\{  \frac{(2k+1)\pi}{2}:k \in \mathbb{Z}  \right\}{}$
${}R=(-\infty,-A)\cup(A,\infty){}$
Its period is ${}2\pi{}$

```tikz
\usepackage{tikz}
\usepackage{pgfplots,amsmath}
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

\begin{axis}[my style, xtick={-6.2832,-4.7124,...,6.2832}, xticklabels={$-2\pi$,$-\frac{3}{2}\pi$,$-\pi$,$-\frac{1}{2}\pi$,$0$,$\frac{1}{2}\pi$,$\pi$,$\frac{3}{2}\pi$,$2\pi$}, ytick={-6,-5,...,6}, xmin=-6.2832, xmax=6.2832, ymin=-6, ymax=6, minor tick num=1] 

\addplot[color=red,samples=200,domain=-2*pi:2*pi,no marks,line width=1pt]{2*(1/(cos(deg(x)))};
\addplot[color=blue,samples=200,domain=-2*pi:2*pi,no marks,line width=1pt]{(1/2)*(1/(cos(deg(x)))};
\addplot[color=green,samples=200,domain=-2*pi:2*pi,no marks,line width=1pt]{-(1/(cos(deg(x)))};
\addlegendentry{\(f(x)=2 \sec x\)}
\addlegendentry{\(f(x)=\frac{1}{2}\sec x\)}
\addlegendentry{\(f(x)=- \sec x\)}
\end{axis} 

\end{tikzpicture}
\end{document}
```

### Cosecant function

```tikz
\usepackage{tikz}
\usepackage{pgfplots,amsmath}
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

\begin{axis}[my style, xtick={-6.2832,-4.7124,...,6.2832}, xticklabels={$-2\pi$,$-\frac{3}{2}\pi$,$-\pi$,$-\frac{1}{2}\pi$,$0$,$\frac{1}{2}\pi$,$\pi$,$\frac{3}{2}\pi$,$2\pi$}, ytick={-6,-5,...,6}, xmin=-6.2832, xmax=6.2832, ymin=-6, ymax=6, minor tick num=1] 

\addplot+[Latex-Latex,color=green,samples=200,domain=-2*pi:2*pi,no marks,line width=1pt]{1/(sin(deg(x)))};
\addlegendentry{\(f(x)=csc x\)}
\end{axis} 

\end{tikzpicture}
\end{document}
```

The function is asymptotic to all ${}x=k\pi{}$
${}D=\mathbb{R}\setminus \left\{  k\pi:k \in \mathbb{Z}  \right\}{}$
${}R=\mathbb{R}{}$
Its period is ${}2\pi{}$

# Trigonometric Identities

## Reciprocal Identities

$$
\sec t=\frac{1}{\cos t}\\
\csc t=\frac{1}{\sin t}\\
\cot t=\frac{1}{\tan t}
$$

## Ratio Identites

$$
\tan t= \frac{\sin t}{\cos t}\\ \\
\cot t= \frac{\cos t}{\sin t}
$$

## Pythagorean Identity

$$
\cos ^{2}t+\sin ^{2}t=1\\
1+\tan ^{2}t=\sec ^{2} t\\
1+\cot ^{2}t=\csc ^{2}t
$$

## Signs

|     t      | ${}\sin t{}$ | ${}\cos t{}$ | ${}\tan t{}$ | ${}\cot t{}$ | ${}\sec t{}$ | ${}\csc t{}$ |
| :--------: | :----------: | :----------: | :----------: | :----------: | :----------: | :----------: |
|  ${}QI{}$  |      +       |      +       |      +       |      +       |      -       |      -       |
| ${}QII{}$  |      +       |      -       |      -       |      -       |      -       |      +       |
| ${}QIII{}$ |      -       |      -       |      +       |      +       |      +       |      +       |
| ${}QIV{}$  |      -       |      +       |      -       |      -       |      +       |      -       |

$$
\sin(a\pm b)=\sin a\cos b\pm\cos a\sin b\\
\cos(a\pm b)=\cos a\cos b\mp\sin a\sin b
$$

# Inverse Trigonometic Functions

# Trigonometric Equations
