**Angles** are formed when a ray is rotated around its endpoint. Angles are majorly used in [[Geometry]] and [[Trigonometry]]

```tikz
\usetikzlibrary{calc,arrows.meta}
\begin{document}
\begin{tikzpicture}
\draw[-Latex,color=red,thick](0,0)--(2.5,2.5);
\draw[-Latex,color=blue,thick](0,0)--(3,0);
\draw[-Latex,thick](1,0) .. controls(0.89443,0.44721) .. (0.70711,0.70711);
\node[label={right:$\theta$}] at (0.89443,0.44721){};
\node[circle,fill=red,inner sep=1.5pt,label={below left:vertex}] at (0,0){};
\node[label={above left:terminal side}] at (1.5,1.5){};
\node[label={below:initial side}] at (1.5,0){};
\end{tikzpicture}
\end{document}
```

Parts of an angle:
initial side - initial position of the ray
terminal side - final position of the ray after rotation
vertex - the point where the ray is rotated about, is also the end point of the ray
${}\theta={}$the amount of rotation of the ray

# Types of Angles

Angles are called...
**Acute** if  ${}0\degree<\theta<90\degree{}$
**Obtuse** if  ${}180\degree>\theta>90\degree{}$
**Right** if ${}\theta=90\degree{}$
**Straight** if ${}\theta=180\degree{}$
**Reflex** if ${}\theta>180\degree{}$
a **Complete Rotation** if ${}\theta=360\degree{}$

# Types of Angle Measurement

## Degree

A degree (${}\degree{}$) is a ${}\frac{1}{360}{}$ of a complete rotation
A minute (${}'{}$) is ${}\frac{1}{60}{}$ of a degree
A second (${}''{}$) is ${}\frac{1}{60}{}$ of a minute

## Radian

${}\theta=\frac{s}{r}{}$
Where:
${}r={}$radius of the circle
${}s={}$arc length of the circle on the circumference opposite to the ${}\theta{}$

1 radian is the arc length of a circle which is equal to its radius

${}90^{\circ}=\frac{\pi}{2}\text{ rad}{}$
${}180^{\circ}=\pi \text{ rad}{}$
${}360^{\circ}=2\pi \text{ rad}{}$

## Conversion from Degree to Radian and Vice Versa

$$
180\degree=\pi\text{ rad}\\ \\
\text{rad}=\theta \degree \times\frac{\pi}{180\degree}\\
\text{deg}=  \theta \text{ rad}\times \frac{180\degree}{\pi}
$$

# Angle Position and Location

## Standard Position

An angle at standard position (S.P.) has its vertex usually at ${}(0,0){}$ with its initial side at the positive ${}x{}$-axis.

An angle at S.P. is positive if the **rotation** is **clockwise** and **negative** if **counter/anti-clockwise**.
An angle's location or lies at the Quadrant where its terminal side rests.

## Quadrantal Angle

Quadrantal angles are angles where its terminal lies along an axis.

## Coterminal Angles

Two angles are coterminal if their terminal sides coincide with each other. Yes, an angle is coterminal is with it self.

Assuming ${}\theta{}$ is at S.P., the coterminal angle (degree or radian) can be computed by:

$$
\theta+360\degree n\\
\theta+2\pi n
$$

Where: ${}n\in \mathbb{Z}{}$

## Reference Angle

The reference angle of an angle is the (acute) angle formed by the angle's terminal side and the ${}x{}$-axis

To find the reference angle of any angle, we must get its **reference angle** (${}\alpha{}$) first.
Where:

$$
0\degree<\alpha<360\degree\\
0<\alpha<2\pi
$$

Then we can find its reference angle by referring to the table:

|       In Degrees        |     In Radian     | Quadrant |
| :---------------------: | :---------------: | :------: |
|      ${}\alpha{}$       |   ${}\alpha{}$    |    QI    |
| ${}180\degree-\alpha{}$ | ${}\pi-\alpha{}$  |   QII    |
| ${}\alpha-180\degree{}$ | ${}\alpha-\pi{}$  |   QIII   |
| ${}360\degree-\alpha{}$ | ${}2\pi-\alpha{}$ |   QIV    |
