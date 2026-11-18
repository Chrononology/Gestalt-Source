**Kinematics** is the part of [[Mechanics]] that aims to describe motion.

# Basic Concepts

## Position

The position is the specific location of an object by its distance and location from a reference frame/point usually given by coordinate system ${}(x,y,z){}$

## Distance

The distance is the measurement of the (actual) traveled path of an object

## Displacement

$$
\Delta x=x_{2}-x_{1}
$$

Where:
${}\Delta x={}$displacement
${}x_{2}={}$final position
${}x_{1}={}$initial position

## Time

$$
\Delta t=t_{2}-t_{1}
$$

Where:
${}\Delta t={}$Time interval
${}t_{2}={}$Time at final position
${}t_{1}={}$Time at initial position

## Velocity

### Speed

$$
\text{speed} =\frac{\text{Distance}}{\text{Time}}
$$

### Average Velocity

$$
v_{av-x}=\frac{x_{2}-x_{1}}{t_{2}-t_{1}}=\frac{\Delta x}{\Delta t}
$$

Where:
${}v_{av-x}={}$Average Velocity
${}\Delta x={}$Displacement
${}\Delta t={}$Time Interval

### Instantaneous Velocity

$$
v_{x}=\lim_{ \Delta t \to 0 } \frac{\Delta x}{\Delta t}=\frac{dx}{dt}
$$

Where:
${}v_{x}={}$Instantaneous Velocity

Instantaneous Velocity is the first derivative of displacement.

### Velocity Sign Rules

| If the coordinate is... | ... the velocity is... |
| :---------------------: | :--------------------: |
| Positive and Increasing |        Positive        |
| Positive and Decreasing |        Negative        |
| Negative and Increasing |        Positve         |
| Negative and Decreasing |        Negative        |

### x-t graph

The displacement is the ${}y{}$-axis and the time (interval) is the ${}x{}$-axis. The slope of any 2 points in the graph is the average velocity. The slope of the tangent at a point ${}t{}$ is the instantaneous velocity.

```tikz
\usepackage{tikz}
\usepackage{pgfplots}
\usepgflibrary{shapes.geometric}
\usetikzlibrary{calc,arrows.meta}
\pgfplotsset{my style/.append style={
axis line style={-Latex,line width=1pt}, 
axis lines=middle, 
xlabel={$t$}, ylabel={$x$}, 
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

\begin{axis}[my style, xtick={0,5,10,...,20}, ytick={0,5,10,...,20}, xmin=0, xmax=20, ymin=0, ymax=20,restrict y to domain=-20:40,minor tick num=4] 

\addplot[samples=100,domain=0:20,no marks,line width=1pt]{0.07*x^4-0.7*x^3+1.87*x^2+1.3*x};
\addplot[no marks, color=blue,dashed,line width=1pt] coordinates {(2, 0) (2, 5.6) };
\addplot[no marks, color=blue,dashed,line width=1pt] coordinates {(6, 0) (6, 14.64) };
\addplot[no marks, color=blue,dashed,line width=1pt] coordinates {(0, 5.6) (2, 5.6) };
\addplot[no marks, color=blue,dashed,line width=1pt] coordinates {(0, 14.64) (6, 14.64) };
\addplot[no marks, color=green,line width=1pt] coordinates {(2, 5.6) (6, 14.64) };
\node[circle,fill=black,inner sep=2pt,label={right:$P_{1}$}] at (axis cs:2,5.6){};
\node[circle,fill=black,inner sep=2pt,label={right:$P_{2}$}] at (axis cs:6,14.64){};
\addplot[dashed,samples=100,domain=4:6,no marks,line width=1pt]{2.5*(x-5)+9.5};
\node[circle,fill=blue,inner sep=2pt,label={right:$v(5)$}] at (axis cs:5,9.5){};
\end{axis} 

\end{tikzpicture}
\end{document}
```

## Acceleration

### Average Acceleration

$$
a_{av-x}=\frac{v_{2x}-v_{1x}}{t_{2}-t_{1}}=\frac{\Delta v_{x}}{\Delta t}
$$

Where:
${}a_{av-x}={}$Average Acceleration
${}\Delta v_{x}={}$Change in Velocity
${}\Delta t={}$Time Interval

### Instantaneous Acceleration

$$
a_{x}=\lim_{ \Delta t \to 0 } \frac{\Delta v_{x}}{\Delta t}=\frac{dx'}{dt}=\frac{dv_{x}}{dt}=\frac{d^{2}x}{dt^{2}}=\frac{d}{dt}\left( \frac{dx}{dt} \right)
$$

${}a_{x}={}$Instantaneous Acceleration

Instantaneous Acceleration is the second derivative of displacement and is a derivative of velocity.

### Acceleration Sign Rules

|  If the velocity is...  | ... the acceleration is... |
| :---------------------: | :------------------------: |
| Positive and Increasing |          Positive          |
| Positive and Decreasing |          Negative          |
| Negative and Increasing |          Positive          |
| Negative and Decreasing |          Negative          |

### v-t graph

The velocity is the ${}y{}$-axis and the time (interval) is the ${}x{}$-axis. The slope of any 2 points in the graph is the average acceleration. The slope of the tangent at a point ${}t{}$ is the instantaneous acceleration.

```tikz
\usepackage{tikz}
\usepackage{pgfplots}
\usepgflibrary{shapes.geometric}
\usetikzlibrary{calc,arrows.meta}
\pgfplotsset{my style/.append style={
axis line style={-Latex,line width=1pt}, 
axis lines=middle, 
xlabel={$t$}, ylabel={$v$}, 
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

\begin{axis}[my style, xtick={0,5,...,20}, ytick={0,5,...,20}, xmin=0, xmax=20, ymin=0, ymax=20,restrict y to domain=-20:40,minor tick num=4] 

\addplot[samples=100,domain=0:20,no marks,line width=1pt]{(4*0.07)*x^3 - (3*0.7)*x^2 + (2*1.87)*x + 1.3};
\addplot[no marks, color=blue,dashed,line width=1pt] coordinates {(2, 0) (2, 2.62) };
\addplot[no marks, color=blue,dashed,line width=1pt] coordinates {(6, 0) (6, 8.62) };
\addplot[no marks, color=blue,dashed,line width=1pt] coordinates {(0, 2.62) (2, 2.62) };
\addplot[no marks, color=blue,dashed,line width=1pt] coordinates {(0, 8.62) (6, 8.62) };
\addplot[no marks, color=green,line width=1pt] coordinates {(2, 2.62) (6, 8.62) };
\node[circle,fill=black,inner sep=2pt,label={right:$P_{1}$}] at (axis cs:2,2.62){};
\node[circle,fill=black,inner sep=2pt,label={right:$P_{2}$}] at (axis cs:6,8.62){};
\addplot[samples=100,dashed,domain=4:6,no marks,line width=1pt]{3.74*(x-5)+2.5};
\node[circle,fill=blue,inner sep=2pt,label={right:$a(5)$}] at (axis cs:5,2.5){};
\end{axis} 

\end{tikzpicture}
\end{document}
```

### Constant Acceleration

$$
a_{x}=\frac{\Delta v_{x}}{t}=\frac{v_{2}-v_{1}}{t}\\
v_{2}=v_{1}+at
$$

# Kinematics in One-Dimension

The kinematic equations:

$$
v_{2}=v_{1}+at\\ \\
x_{2}-x_{1}=v_{1}t+\frac{1}{2}at^{2}\\ \\
v_{2}^{2}=v_{1}^{2}+2a(x_{2}-x_{1})\\ \\
x_{2}-x_{1}=\left( \frac{v_{2}+v_{1}}{2} \right)t
$$

When dealing with vertical motion with constant (vertical) acceleration...
Simply change the ${}x{}$s in the kinematic equations above with: ${}y{}$
${}a=g_{Earth}=9.8\text{ m/s}^{2}{}$

# Kinematics in Two/Three-Dimensions

## Position Vectors

$$
\vec{r}=x \hat{i}+y\hat{j}+z\hat{k}
$$

## Velocity Vectors

$$
\vec{v}_{av}=\frac{\vec{r}_{2}-\vec{r}_{1}}{t_{2}-t_{1}}=\frac{\Delta \vec{r}}{\Delta t}\\
\vec{v}=\lim_{ \Delta t \to 0 } \frac{\Delta \vec{r}}{\Delta t}=\frac{d\vec{r}}{dt}\\
|\vec{v}|=v=\sqrt{ v_{x}^{2}+v_{y}^{2}+v_{z}^{2} }\\
\tan a=\frac{v_{y}}{v_{x}}
$$

Where:
${}\vec{v}_{av}={}$Average Velocity using Vectors
${}\vec{v}={}$Instantaneous Velocity using Vectors
${}v={}$Magnitude of the Velocity
${}\tan a={}$Direction of the Velocity
${}v_{x}=\frac{dx}{dt}{}$
${}v_{y}=\frac{dv}{dt}{}$
${}v_{z}=\frac{dz}{dt}{}$

## Acceleration Vector

$$
\vec{a}_{av}=\frac{\vec{v}_{2}-\vec{v}_{1}}{t_{2}-t_{1}}=\frac{\Delta \vec{v}}{\Delta t}\\
\vec{a}=\lim_{ \Delta t \to 0 } \frac{\Delta \vec{v}}{\Delta t}=\frac{d\vec{v}}{dt}=\frac{d^{2}\vec{r}}{dt^{2}}\\
\vec{a}=a_{x}\hat{i}+a_{y}\hat{j}+a_{z}\hat{k}\\
\tan a=\frac{v_{y}}{v_{x}}
$$

Where:
${}\vec{a}_{av}={}$Average Acceleration using Velocity Vectors
${}\vec{a}={}$Instantaneous Acceleration using Velocity Vectors
${}\tan a={}$Direction of the Acceleration
${}a_{x}=\frac{dv_{x}}{dt}{}$
${}a_{y}=\frac{dv_{y}}{dt}{}$
${}a_{z}=\frac{dv_{z}}{dt}{}$

## Projectile Motion

In projectile motion we assume:

- The acceleration constant (${}g=-9.8{}$) and is directed downward
- Air resistance is negligible
- Horizontal velocity is constant
- The path taken is parabolic

### Acceleration at Peak (highest point)

- Velocity${}=0{}$
- Acceleration${}\neq 0{}$
- Horizontal velocity is still constant

### Projectile Motion Equations

$$
v_{x}=v_{1}\cos\theta\\
v_{y}=v_{1}\sin\theta+gt\\
x=v_{x}t\\
y=(v_{1}\sin\theta )t+\frac{1}{2}gt^{2}\\
h=y_{max}=\frac{v_{1}^{2}\sin ^{2}\theta}{2g}\\
T=t_{total}=\frac{2v_{1}\sin\theta}{g}\\
R=x_{max}=\frac{v_{1}^{2}\sin 2\theta}{g}
$$

Where:
${}v_{x}={}$horizontal component of velocity
${}v_{y}={}$vertical component of velocity
${}x={}$horizontal displacement
${}y={}$vertical displacement
${}h={}$max height of the projectile
${}T={}$total time of flight of projectile
${}R={}$total horizontal displacement of projectile

#### Projectile Motion Equation Derivation

height:

$$
\begin{aligned}
(v_{1}\sin\theta)^{2}-2g(y_{max}-y_{1})=v_{2}^{2}&\implies (v_{1}\sin\theta)^{2}-2g(y_{max})=0 \\
&\implies-2g(y_{max})=-(v_{1}\sin\theta)^{2} \\
&\implies y_{max}=\frac{(v_{1}\sin\theta)^{2}}{2g} \\
&\implies y_{max}=\frac{v_{1}^{2}\sin ^{2}\theta}{2g}
\end{aligned}
$$

Time of flight:

$$
\begin{aligned}
(y_{2}-y_{1})=(v_{1}\sin\theta)t-\frac{1}{2}gt^{2}&\implies 0=(v_{1}\sin\theta)T-\frac{1}{2}gT^{2} \\
&\implies \frac{1}{2}gT^{2}=(v_{1}\sin\theta)T \\
&\implies \frac{1}{2}gT=v_{1}\sin\theta \\
&\implies T=\frac{2v_{1}\sin\theta}{g}
\end{aligned}
$$

Range:

$$
\begin{aligned}
x=v_{x}t&\implies R=(v_{1}\cos\theta)T \\
&\implies R=(v_{1}\cos\theta)\left( \frac{2v_{1}\sin\theta}{g} \right) \\
&\implies R=\frac{v_{1}^{2}((2\sin\theta)(\cos\theta))}{g} \\
&\implies R=\frac{v_{1}^{2}\sin 2\theta}{g}
\end{aligned}
$$

## Uniform Circular Motion

A uniform circular motion is defined as the motion along a circular path with constant _speed_
The acceleration vector is perpendicular/normal to the path

The acceleration is directed toward the center and is constant

$$
a_{rad}=\frac{v^{2}}{r}
$$

Where:
${}a_{rad}={}$Radial Acceleration
${}v={}$velocity
${}r={}$radius

The **Period** is the time to complete one revolution or one complete rotation

$$
T=\frac{2\pi r}{v}
$$

Where:
${}T=\text{/s}=\text{Hz}={}$period
${}r={}$radius
${}v={}$velocity

The period can also be used to solve for the radial acceleration from its velocity component

$$
T=\frac{2\pi r}{v}\implies v=\frac{2\pi r}{T}\\ \\
\text{Substitute the value of }v\text{ into the formula of }a_{rad}\\
\begin{aligned}
a_{rad}=\frac{v^{2}}{r}&\implies a_{rad}=\frac{\left( \frac{2\pi r}{T} \right)^{2}}{r} \\
&\implies a_{rad}=\frac{4\pi^{2}r^{2}}{T^{2}}\cdot \frac{1}{r} \\
&\implies a_{rad}=\frac{4\pi^{2}r}{T^{2}}
\end{aligned}
$$
