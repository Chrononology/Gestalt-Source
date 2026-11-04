**Quantum Chemistry** is a branch of [[Chemistry]] that applies Quantum Theory to atoms.

# Line Spectra

Each element emits a particular unique (set) of light when heated enough. These set of lights produce a discrete or line spectra.
Note that:
The set of line spectra is specific and unique to an element.
Meaning: it is like their fingerprints

# Waves

_Main note: [[Waves]]_

We are mainly concerned with the equation

$$
c=\lambda\nu
$$

Where:
${}c=3.0\times 10^{8} \frac{m}{s}={}$speed of light
${}\lambda={}$wavelength
${}\nu=\text{Hz}=s ^{-1}={}$Frequency

A wave's energy can be quantized using the following equation:

$$
E=h\nu=h \frac{c}{\lambda}
$$

Where:
${}E=J={}$Energy
${}h=6.63\times 10^{-34}Js={}$Planck's Constant
${}\nu=\frac{c}{\lambda}=Hz=s ^{-1}={}$Frequency

The amount of energy absorbed or released as a Photon (when an electron changes an orbital) can be expressed in:

$$
E_{photon}=\Delta E=E_{f}-E_{i}
$$

The amount of energy an electron releases in the form of photons depends on its energy level/orbital. This can be expressed with:

$$
E=-R_{H}\left( \frac{1}{n^{2}} \right)
$$

Where:
${}E=J={}$Energy of the photon
${}R_{H}=2.18\times 10^{-18}Js={}$Rydberg Constant
${}n={}$Energy level/Orbital of the electron

Finding the amount of energy absorbed/released as a photon when an electron changes orbital can be calculated by combining the two equations.

$$
\begin{aligned}
E_{photon}=\Delta E&=E_{f}-E_{i} \\
 & =-R_{H}\left( \frac{1}{n_{f}^{2}} \right)-\left( -R_{H}\left( \frac{1}{n_{i}^{2}} \right) \right) \\
 & =-R_{H}\left( \frac{1}{n_{f}^{2}} \right)+R_{H}\left( \frac{1}{n_{i}^{2}} \right) \\
 & =R_{H}\left( - \frac{1}{n_{f}s^{2}}+\frac{1}{n_{i}^{2}} \right) \\
 & =R_{H}\left( \frac{1}{n_{i}^{2}}-\frac{1}{n_{f}^{2}} \right)
\end{aligned}
$$

Note that:
a negative energy implies that the energy was released
a positive energy implies that the energy was absorbed
when using the computed energy from this equation in other equations, use its absolute value.

Louis de Broglie's light particle duality equation:

$$
2\pi r=n\lambda\\
\lambda=\frac{h}{mu}
$$

Where:
${}m=9.1\times 10^{-28}={}$Mass of the electron (e$^{-}$)
${}v={}$Velocity of the electron (e$^{-}$)

# Schrödinger's Wave Equation

Schrödinger's  Wave Function/Equation ${}(\psi){}$ was made to describe an electron's particle-wave duality.
It describes the energy of an electron (e$^{-}$) with a given ${}\psi{}$ and the probability of finding the electron in a volume of space.

Note that:
It only completely works with the hydrogen atom. All other "multi-electron" systems/atoms need approximation.

## Quantum Numbers

There exists 4 quantum numbers in Schrödinger's Wave Function.

The **Principal Quantum Number** (${}n{}$) is the first one. It describes the distance of the electron from the nucleus in energy levels. This number is a whole number starting from 1. Such that: ${}n=1,2,3,\dots{}$
Note that:
A higher ${}n{}$ means more area where the electron might be in.

The **Angular Momentum Quantum Number** (${}\ell{}$) is the next one. It describe the shape of the orbital. This number is based on the Principal Quantum Number. It is a whole number starting from 0 until ${}n-1{}$. Such that: ${}\ell=0,1,2,\dots,n-1{}$
There exists names for these orbitals:

$$
\begin{aligned}
&\ell=0 \text{ is the "s-orbital"}\\
&\ell=1 \text{ is the "p-orbital"}\\
&\ell=2 \text{ is the "d-orbital"}\\
&\ell=3 \text{ is the "f-orbital"} \\
&\ell=4,5,6,\dots \text{ use }g,h,i,\dots
\end{aligned}
$$

The **Magnetic Quantum Number** (${}m_{\ell}{}$) the next one. It describes the orientation of the orbital in space. This number is based on the Angular Momentum Number. It is a whole number starting from ${}-\ell,\dots,0,\dots,+\ell{}$. Such that: ${}m_{\ell}=-\ell, \dots,0,\dots,\ell{}$

$$
\begin{aligned}
&\ell=0 &m_{\ell}&=0\\
&\ell=1 &m_{\ell}&=-1,0,1 \\
&\ell=2 &m_{\ell}&=-2,-1,0,1,2 \\
&\ell=3 &m_{\ell}&=-3,-2,-1,0,1,2,3
\end{aligned}
$$

The **Spin Quantum Number** (${}m_{s}{}$) is the last. It describes the "spin" of the electron. This number is either ${}+\frac{1}{2}{}$ or ${}-\frac{1}{2}{}$

$$
\begin{aligned}
& \text{A }+\frac{1}{2}\text{ spin is denoted as }\uparrow \\
& \text{A }-\frac{1}{2} \text{ spin is denoded as }\downarrow
\end{aligned}
\\
\text{in a orbital filling diagram } 
$$

Orbital filling diagrams may look like these:

```tikz
\usepackage{amsmath}
\usetikzlibrary{arrows.meta}

\begin{document}
\begin{tikzpicture}

%axis
\draw[-Latex,line width=2pt](0,0)--(0,10);
\node[label={[rotate=90, anchor=east]above:Energy}] at (-0.25,5) {};

%s
\draw[line width=1pt](0.25,0.25)--(1,0.25);
\node at (0.625,0){$1s$};
\draw[-{Straight Barb[left]},line width=1.5pt,color=red](0.5,0.3)--(0.5,1);
\draw[{Straight Barb[left]}-,line width=1.5pt,color=red](0.7,0.3)--(0.7,1);

\draw[line width=1pt](0.25,2.25)--(1,2.25);
\node at (0.625,2){$2s$};
\draw[-{Straight Barb[left]},line width=1.5pt,color=red](0.5,2.3)--(0.5,3);
\draw[{Straight Barb[left]}-,line width=1.5pt,color=red](0.7,2.3)--(0.7,3);

\draw[line width=1pt](0.25,4.25)--(1,4.25);
\node at (0.625,4){$3s$};
\draw[-{Straight Barb[left]},line width=1.5pt,color=red](0.5,4.3)--(0.5,5);
\draw[{Straight Barb[left]}-,line width=1.5pt,color=red](0.7,4.3)--(0.7,5);

\draw[line width=1pt](0.25,6.25)--(1,6.25);
\node at (0.625,6){$4s$};
\draw[-{Straight Barb[left]},line width=1.5pt,color=red](0.5,6.3)--(0.5,7);
\draw[{Straight Barb[left]}-,line width=1.5pt,color=red](0.7,6.3)--(0.7,7);

%p
\draw[line width=1pt](1.25,3.25)--(2,3.25);
\draw[-{Straight Barb[left]},line width=1.5pt,color=red](1.5,3.3)--(1.5,4);
\draw[{Straight Barb[left]}-,line width=1.5pt,color=red](1.7,3.3)--(1.7,4);
\draw[line width=1pt](2.1,3.25)--(2.85,3.25);
\draw[-{Straight Barb[left]},line width=1.5pt,color=red](2.4,3.3)--(2.4,4);
\draw[{Straight Barb[left]}-,line width=1.5pt,color=red](2.6,3.3)--(2.6,4);
\draw[line width=1pt](2.95,3.25)--(3.7,3.25);
\node at (2.475,3){$2p$};
\draw[-{Straight Barb[left]},line width=1.5pt,color=red](3.2,3.3)--(3.2,4);
\draw[{Straight Barb[left]}-,line width=1.5pt,color=red](3.4,3.3)--(3.4,4);

\draw[line width=1pt](1.25,5.25)--(2,5.25);
\draw[-{Straight Barb[left]},line width=1.5pt,color=red](1.5,5.3)--(1.5,6);
\draw[{Straight Barb[left]}-,line width=1.5pt,color=red](1.7,5.3)--(1.7,6);
\draw[line width=1pt](2.1,5.25)--(2.85,5.25);
\draw[-{Straight Barb[left]},line width=1.5pt,color=red](2.4,5.3)--(2.4,6);
\draw[{Straight Barb[left]}-,line width=1.5pt,color=red](2.6,5.3)--(2.6,6);
\draw[line width=1pt](2.95,5.25)--(3.7,5.25);
\node at (2.475,5){$3p$};
\draw[-{Straight Barb[left]},line width=1.5pt,color=red](3.2,5.3)--(3.2,6);
\draw[{Straight Barb[left]}-,line width=1.5pt,color=red](3.4,5.3)--(3.4,6);

\draw[line width=1pt](1.25,7.25)--(2,7.25);
\draw[-{Straight Barb[left]},line width=1.5pt,color=red](1.5,7.3)--(1.5,8);
\draw[{Straight Barb[left]}-,line width=1.5pt,color=red](1.7,7.3)--(1.7,8);
\draw[line width=1pt](2.1,7.25)--(2.85,7.25);
\draw[-{Straight Barb[left]},line width=1.5pt,color=red](2.4,7.3)--(2.4,8);
\draw[{Straight Barb[left]}-,line width=1.5pt,color=red](2.6,7.3)--(2.6,8);
\draw[line width=1pt](2.95,7.25)--(3.7,7.25);
\node at (2.475,7){$4p$};
\draw[-{Straight Barb[left]},line width=1.5pt,color=red](3.2,7.3)--(3.2,8);
\draw[{Straight Barb[left]}-,line width=1.5pt,color=red](3.4,7.3)--(3.4,8);

%d
\draw[line width=1pt](3.95,6.75)--(4.7,6.75);
\draw[-{Straight Barb[left]},line width=1.5pt,color=red](4.2,6.9)--(4.2,7.6);
\draw[{Straight Barb[left]}-,line width=1.5pt,color=red](4.4,6.9)--(4.4,7.6);
\draw[line width=1pt](4.8,6.75)--(5.55,6.75);
\draw[-{Straight Barb[left]},line width=1.5pt,color=red](5,6.9)--(5,7.6);
\draw[{Straight Barb[left]}-,line width=1.5pt,color=red](5.2,6.9)--(5.2,7.6);
\draw[line width=1pt](5.65,6.75)--(6.4,6.75);
\draw[-{Straight Barb[left]},line width=1.5pt,color=red](5.9,6.9)--(5.9,7.6);
\draw[{Straight Barb[left]}-,line width=1.5pt,color=red](6.1,6.9)--(6.1,7.6);
\draw[line width=1pt](6.5,6.75)--(7.25,6.75);
\draw[-{Straight Barb[left]},line width=1.5pt,color=red](6.7,6.9)--(6.7,7.6);
\draw[{Straight Barb[left]}-,line width=1.5pt,color=red](6.9,6.9)--(6.9,7.6);
\draw[line width=1pt](7.35,6.75)--(8.1,6.75);
\draw[-{Straight Barb[left]},line width=1.5pt,color=red](7.6,6.9)--(7.6,7.6);
\draw[{Straight Barb[left]}-,line width=1.5pt,color=red](7.8,6.9)--(7.8,7.6);
\node at (6.025,6.5){$3d$};


\end{tikzpicture}
\end{document}
```

Or

```tikz
\usepackage{amsmath}
\usetikzlibrary{arrows.meta}
\begin{document}
\begin{tikzpicture}

%1s box
\draw[fill=white] (0,0) rectangle ++(1,1);
\draw[-{Straight Barb[left]},color=red,line width=1pt](0.4,0.2)--(0.4,0.8);
\draw[{Straight Barb[left]}-,color=red,line width=1pt](0.6,0.2)--(0.6,0.8);
\node at (0.5,-0.25){$1s$};

%2s box
\draw[fill=white] (1.5,0) rectangle ++(1,1);
\draw[-{Straight Barb[left]},color=red,line width=1.pt](1.9,0.2)--(1.9,0.8);
\draw[{Straight Barb[left]}-,color=red,line width=1pt](2.1,0.2)--(2.1,0.8);
\node at (2,-0.25){$2s$};

%2p box
\draw[fill=white] (3,0) rectangle ++(1,1);
\draw[-{Straight Barb[left]},color=red,line width=1pt](3.4,0.2)--(3.4,0.8);

\draw[fill=white] (4.2,0) rectangle ++(1,1);
\draw[-{Straight Barb[left]},color=red,line width=1pt](4.6,0.2)--(4.6,0.8);

\draw[fill=white] (5.4,0) rectangle ++(1,1);
\draw[-{Straight Barb[left]},color=red,line width=1pt](5.8,0.2)--(5.8,0.8);

\node at (3.5,-0.25){$2p_{x}$};
\node at (4.7,-0.25){$2p_{y}$};
\node at (5.9,-0.25){$2p_{z}$};

\end{tikzpicture}
\end{document}
```

## Pauli Exclusion Principle

This principle states that: No 2 electrons can have the same 4 quantum numbers at the same time.
Think of the 4 quantum numbers as an electron's address. Now imagine that 2 electrons cannot occupy the same point in space at the same time.
This is possible:

$$
\begin{aligned}
\psi_{a}&=\left\{  2,1,-1,+\frac{1}{2}  \right\} \\
\psi_{b} & =\left\{  2,1,-1,-\frac{1}{2}  \right\}
\end{aligned}
$$

But this isnt:

$$
\begin{aligned}
\psi_{a}&=\left\{  2,1,-1,+\frac{1}{2}  \right\} \\
\psi_{b} & =\left\{  2,1,-1,+\frac{1}{2}  \right\}
\end{aligned}
$$

## Aufbau Principle

This principle describes the behavior of electrons to "fill up" the orbitals with lowest energy levels first before moving on to higher energy level orbitals. It is illustrated as:

```tikz
\usetikzlibrary{arrows.meta}
\begin{document}
\begin{tikzpicture}

%arrows
\draw[-Latex](2,6.5)--(0,5.5);
\draw[-Latex](2,5.5)--(0,4.5);
\draw[-Latex](4,5.5)--(0,3.5);
\draw[-Latex](4,4.5)--(0,2.5);
\draw[-Latex](6,4.5)--(0,1.5);
\draw[-Latex](6,3.5)--(0,0.5);
\draw[-Latex](8,3.5)--(0,-0.5);
\draw[-Latex](8,2.5)--(2,-0.5);

%s orbitals
\node[draw,circle,fill=white] at (1,6){1s};
\node[draw,circle,fill=white] at (1,5){2s};
\node[draw,circle,fill=white] at (1,4){3s};
\node[draw,circle,fill=white] at (1,3){4s};
\node[draw,circle,fill=white] at (1,2){5s};
\node[draw,circle,fill=white] at (1,1){6s};
\node[draw,circle,fill=white] at (1,0){7s};

%p orbitals
\node[draw,circle,fill=white] at (3,5){2p};
\node[draw,circle,fill=white] at (3,4){3p};
\node[draw,circle,fill=white] at (3,3){4p};
\node[draw,circle,fill=white] at (3,2){5p};
\node[draw,circle,fill=white] at (3,1){6p};
\node[draw,circle,fill=white] at (3,0){7p};

%d orbitals
\node[draw,circle,fill=white] at (5,4){3d};
\node[draw,circle,fill=white] at (5,3){4d};
\node[draw,circle,fill=white] at (5,2){5d};
\node[draw,circle,fill=white] at (5,1){6d};

%f orbitals
\node[draw,circle,fill=white] at (7,3){4f};
\node[draw,circle,fill=white] at (7,2){5f};

\end{tikzpicture}
\end{document}
```

## Hund's Rule

This rule explains that the most stable arrangement for electrons in a subshell would be in the arrangement of greatest amount of parallel spins.
It is illustrated as like this:

```tikz
\usepackage{amsmath}
\usetikzlibrary{arrows.meta}
\begin{document}
\begin{tikzpicture}

%1s box
\draw[fill=white] (0,0) rectangle ++(1.2,1.2);
\draw[-{Straight Barb[left]},color=red,line width=1pt](0.4,0.2)--(0.4,1);
\draw[{Straight Barb[left]}-,color=red,line width=1pt](0.8,0.2)--(0.8,1);
\node at (0.6,-0.25){$1s$};

%2s box
\draw[fill=white] (1.6,0) rectangle ++(1.2,1.2);
\draw[-{Straight Barb[left]},color=red,line width=1.pt](2,0.2)--(2,1);
\draw[{Straight Barb[left]}-,color=red,line width=1pt](2.4,0.2)--(2.4,1);
\node at (2.2,-0.25){$2s$};

%2p box
\draw[fill=white] (3.2,0) rectangle ++(1.2,1.2);
\draw[-{Straight Barb[left]},color=red,line width=1pt](3.6,0.2)--(3.6,1);

\draw[fill=white] (4.4,0) rectangle ++(1.2,1.2);
\draw[-{Straight Barb[left]},color=red,line width=1pt](4.8,0.2)--(4.8,1);

\draw[fill=white] (5.6,0) rectangle ++(1.2,1.2);
\draw[-{Straight Barb[left]},color=red,line width=1pt](6,0.2)--(6,1);

\node at (3.8,-0.25){$2p_{x}$};
\node at (5,-0.25){$2p_{y}$};
\node at (6.2,-0.25){$2p_{z}$};

\end{tikzpicture}
\end{document}
```

and not like this:

```tikz
\usepackage{amsmath}
\usetikzlibrary{arrows.meta}
\begin{document}
\begin{tikzpicture}

%1s box
\draw[fill=white] (0,0) rectangle ++(1.2,1.2);
\draw[-{Straight Barb[left]},color=red,line width=1pt](0.4,0.2)--(0.4,1);
\draw[{Straight Barb[left]}-,color=red,line width=1pt](0.8,0.2)--(0.8,1);
\node at (0.6,-0.25){$1s$};

%2s box
\draw[fill=white] (1.6,0) rectangle ++(1.2,1.2);
\draw[-{Straight Barb[left]},color=red,line width=1pt](2,0.2)--(2,1);
\draw[{Straight Barb[left]}-,color=red,line width=1pt](2.4,0.2)--(2.4,1);
\node at (2.2,-0.25){$2s$};

%2p box
\draw[fill=white] (3.2,0) rectangle ++(1.2,1.2);
\draw[-{Straight Barb[left]},color=red,line width=1pt](3.6,0.2)--(3.6,1);
\draw[{Straight Barb[left]}-,color=red,line width=1pt](4,0.2)--(4,1);

\draw[fill=white] (4.4,0) rectangle ++(1.2,1.2);
\draw[-{Straight Barb[left]},color=red,line width=1pt](4.8,0.2)--(4.8,1);


\draw[fill=white] (5.6,0) rectangle ++(1.2,1.2);


\node at (3.8,-0.25){$2p_{x}$};
\node at (5,-0.25){$2p_{y}$};
\node at (6.2,-0.25){$2p_{z}$};

\end{tikzpicture}
\end{document}
```

## Electron Configuration

The combination of **Pauli Exclusion Principle**, **Aufbau Principle**, and **Hund's Rule** together help "generate" the electron configuration of an atom.

$$
n\ell^{m}
$$

Where:
${}n={}$the energy level
${}\ell={}$the orbital
${}m={}$the number of electron in that orbital

An example:

$$
\begin{aligned}
& \ce{_{8}O} && 1s^{2},2s^{2},2p^{5}\\
& \ce{_{35}Br}  && 1s^{2},2^{2},2p^{6},3s^{2},3p^{6},4s^{2},3d^{10},4p^{5}\\
\end{aligned}
$$

### Noble Gas Shorthand

The noble gas shorthand combines the electron configuration of the most previous noble gas of the element.
The Electron of each noble gases are as follows:

```tikz
\usepackage{amsmath}
\begin{document}
\begin{tikzpicture}

\draw[line width=2pt](0,0)--(20,0);
\draw[line width=2pt](0,7)--(20,7);
\draw[line width=2pt](0,0)--(0,7);
\draw[line width=2pt](20,0)--(20,7);
\draw(0,1)--(20,1);
\draw(0,2)--(20,2);
\draw(0,3)--(20,3);
\draw(0,4)--(20,4);
\draw(0,5)--(20,5);
\draw[line width=2pt](0,6)--(20,6);
\draw(3,0)--(3,7);
\draw(7,0)--(7,7);

\node at (1.5,6.5){$\textbf{Noble Gas}$};
\node at (5,6.5){$\textbf{No. of Electrons}$};
\node at (13.5,6.5){$\textbf{Electron Configuration}$};

\node at (1.5,5.5){Helium/He};
\node at (1.5,4.5){Neon/Ne};
\node at (1.5,3.5){Argon/Ar};
\node at (1.5,2.5){Krypton/Kr};
\node at (1.5,1.5){Xenon/Xe};
\node at (1.5,0.5){Radon/Ra};

\node at (5,5.5){2};
\node at (5,4.5){10};
\node at (5,3.5){18};
\node at (5,2.5){36};
\node at (5,1.5){54};
\node at (5,0.5){86};

\node at (13.5,5.5){$1s^{2}$};
\node at (13.5,4.5){$1s^{2},2s^{2},2p^{6}$};
\node at (13.5,3.5){$1s^{2},2s^{2},2p^{6},3s^{2},3p^{6}$};
\node at (13.5,2.5){$1s^{2},2s^{2},2p^{6},3s^{2},3p^{6},4s^{2},3d^{10},4p^{6}$};
\node at (13.5,1.5){$1s^{2},2s^{2},2p^{6},3s^{2},3p^{6},4s^{2},3d^{10},4p^{6},5s^{2},4d^10,5p^{6}$};
\node at (13.5,0.5){$1s^{2},2s^{2},2p^{6},3s^{2},3p^{6},4s^{2},3d^{10},4p^{6},5s^{2},4d^10,5p^{6},6s^{2},4f^{14},5d^{10},6p^{6}$};

\end{tikzpicture}
\end{document}
```

Example of use:

$$
\begin{aligned}
& \ce{_{8}O} && \ce{[He]}2s^{2},2p^{6}\\
& \ce{_{35}Br}  && \ce{[Ar]}4s^{2},3d^{10},4p^{5}\\
\end{aligned}
$$

## Magnetism
