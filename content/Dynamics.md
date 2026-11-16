**Dynamics** is the part of [[Mechanics]] that aims to explain motion.

# Force

_Main note: [[Forces]]_
Force is the interaction between two (or more) objects that usually result in a push or pull.
There are generally two types of forces:
The contact forces

- Friction
- Tension
- Resistance
- Applied Force

and the non-contact forces

- Gravity
- Magnetic Force
- Electrostatic Force

# Newton's Laws of Motion

_Main note: [[Newton's Laws of Motion]]_

Newton's Laws of Motion describe the relationship of the motion and forces acting on an object.

# Free-Body Diagrams

Free-Body diagrams are used to represent the forces (arrows) acting on an object (a point)

```tikz
\usetikzlibrary{arrows.meta}
\begin{document}
\begin{tikzpicture}
\node[circle,draw,inner sep=3pt,fill=black] at (0,0){};
\draw[-Latex,line width=1pt] (0,0)--(2,0);
\draw[-Latex,line width=1pt](0,0)--(0,-3);
\draw[-Latex,line width=1pt](0,0)--(0,1.5);
\node[label={above:$F_{app}$}] at (2,0){};
\node[label={right:$F_{air}$}] at (0,1.5){};
\node[label={right:$F_{grav}$}] at (0,-3){};
\end{tikzpicture}
\end{document}
```

# Application of Newton's Laws of Motion

## Equilibrium

An object is in equilibrium if the sum of all the forces acting upon it is ${}0{}$
By applying the Newton's first law of motion we have:

$$
\sum \vec{F}=0\\
\sum F_{x}=0\\
\sum F_{y}=0
$$

## Particle Dynamics

$$
\sum \vec{F}=m\vec{a}\\
\Sigma F_{x}=ma_{x}\\
\Sigma F_{y}=ma_{y}
$$

## Dynamics of Circular Motion

_Main note: [[Kinematics]]_

The force experienced by an object moving in a circular path is:

$$
F_{net}=ma_{rad}=m \frac{v^{2}}{r}
$$

### Banked Curves

A banked curve is a turn with a non-horizontal driving surface. They are usually tilted inwards to the turn.

The banking angle without friction can be calculated with:

$$
\theta=\tan ^{-1}\left( \frac{v^{2}}{rg} \right)
$$

The banking angle with friction can be calculated with:

$$
\theta=\tan ^{-1}\left( \frac{ \frac{v^{2}}{rg}-\mu}{1+\frac{\mu v^{2}}{rg}} \right)
$$
