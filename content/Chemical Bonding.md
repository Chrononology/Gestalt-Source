**Chemical Bonding** is a core concept of [[Chemistry]] usually taught in [[General Chemistry]].

# Valence Electrons

Valence Electrons are the outermost electrons (found in the highest energy level of an atom) that participate in bonding.

# Lewis Electron Dot Structures

The Lewis Electron Dot Structure or Lewis Dot Structure or Lewis Dot Symbol or whateveryouwanttocallit is a representation of an atom and is useful when making bonds.

To create a Lewis Electron Dot Structure (LEDS) you must:

1. Take the element symbol
2. Place dots to its right, left, bottom, and/or top equal to the number of its valence electrons
3. The dots must occupy each side first before they can be paired

Recommended dot placing order:

1. Right
2. Left
3. Bottom
4. Top
5. Top
6. Bottom
7. Left
8. Right

**Arrows** represent the electron donation (the tail is from the donor and the head is to the receiptient)
A single-barbed arrow represents the donation or displacement of ${}1e^{-}{}$:

```tikz
\usetikzlibrary{arrows.meta}
\begin{document}
\begin{tikzpicture}
\draw[-{Straight Barb[left]},line width=2pt](0,0) to[bend left=45](2,0);
\end{tikzpicture}
\end{document}
```

A double-barbed arrow represents the donation or displacement of ${}2e^{-}{}$:

```tikz
\usetikzlibrary{arrows.meta}
\begin{document}
\begin{tikzpicture}
\draw[-{Straight Barb},line width=2pt](0,0) to[bend left=45](2,0);
\end{tikzpicture}
\end{document}
```

**Lines** between atoms represent the sharing of electrons:
A single line represents a single bond and the sharing of 2 electrons:

```tikz
\usetikzlibrary{arrows.meta}
\begin{document}
\begin{tikzpicture}
\draw[line width=1pt](0,0)--(1,0);
\end{tikzpicture}
\end{document}
```

Two lines represents a double bond and the sharing of 4 electrons:

```tikz
\usetikzlibrary{arrows.meta}
\begin{document}
\begin{tikzpicture}
\draw[line width=1pt](0,0.1)--(1,0.1);
\draw[line width=1pt](0,-0.1)--(1,-0.1);
\end{tikzpicture}
\end{document}
```

Three lines represents a triple bond and the sharing of 6 electrons:

```tikz
\usetikzlibrary{arrows.meta}
\begin{document}
\begin{tikzpicture}
\draw[line width=1pt](0,0.2)--(1,0.2);
\draw[line width=1pt](0,0)--(1,0);
\draw[line width=1pt](0,-0.2)--(1,-0.2);
\end{tikzpicture}
\end{document}
```

Note that: the central atom in a molecule must be the one that is the least electronegative but **not** hydrogen.

# Ionic Bonds

Ionic bonding happens between ions (cations and anions) typically of metal to non-metal natures. This is where the cation (metal) gives its valence electrons to the anion (non-metal). The resulting total charge of the compound must be ${}0{}$.

Its LEDS is represented as:

```tikz
\usetikzlibrary{arrows.meta}
\usepackage{amsmath}
\begin{document}
\begin{tikzpicture}
\node[font=\fontsize{14}{14}] at (-3,0) {$\mathrm{Na}$};
\node[font=\fontsize{14}{14}] at (-1,0) {$\mathrm{Cl}$};
\node[circle,inner sep=1.5pt,fill=red]at(-2.5,0){};
\node[circle,inner sep=1.5pt,fill=blue]at(-1.5,0){};
\node[circle,inner sep=1.5pt,fill=blue]at(-0.5,0.2){};
\node[circle,inner sep=1.5pt,fill=blue]at(-0.5,-0.2){};
\node[circle,inner sep=1.5pt,fill=blue]at(-0.8,0.5){};
\node[circle,inner sep=1.5pt,fill=blue]at(-0.8,-0.5){};
\node[circle,inner sep=1.5pt,fill=blue]at(-1.2,0.5){};
\node[circle,inner sep=1.5pt,fill=blue]at(-1.2,-0.5){};
\draw[-{Straight Barb[left]},line width=1pt](-2.5,0) to[bend left=45] (-1.5,0); 
\draw[-Straight Barb,line width=2pt] (-0.25,0)--(0.25,0);
\node[font=\fontsize{14}{14}] at (1,0) {$\mathrm{Na}$};
\node[font=\fontsize{14}{14}] at (3,0) {$\mathrm{Cl}$};
\node[circle,inner sep=1.5pt]at(1.35,0.3){$+$};
\node[circle,inner sep=1.5pt]at(3.35,0.3){$-$};
\node[circle,inner sep=1.5pt,fill=blue]at(2.5,0.2){};
\node[circle,inner sep=1.5pt,fill=blue]at(2.5,-0.2){};
\node[circle,inner sep=1.5pt,fill=blue]at(3.5,0.2){};
\node[circle,inner sep=1.5pt,fill=blue]at(3.5,-0.2){};
\node[circle,inner sep=1.5pt,fill=blue]at(2.8,0.5){};
\node[circle,inner sep=1.5pt,fill=blue]at(2.8,-0.5){};
\node[circle,inner sep=1.5pt,fill=blue]at(3.2,0.5){};
\node[circle,inner sep=1.5pt,fill=blue]at(3.2,-0.5){};
\end{tikzpicture}
\end{document}
```

A normal ionic bonding nomenclature has a formula of:
cation + (anion + -ide)

## Binary Ionic

Binary compounds are compounds with only 2 elements.

Examples:

- Lithium flouride (${}LiF{}$)
- Sodium oxide (${}Na_{2}O{}$)
- Aluminium oxide (${}Al_{2}O_{3}{}$)

## Variable Ionic

Variable ionic compounds are compounds with a variably charged cation. In this case, the charge must be specified with a Roman Numeral

For its nomenclature, we attach the cation's charge as a roman numeral in parenthesis directly after the cation.
cation + (Roman Numeral) + anion

Examples:

- Iridium (III) sulfide (${}Ir_{2}S_{3}{}$)
- Chromium (VI) oxide (${}CrO_{3}{}$)

## Polyatomic Ionic

Polyatomic ionic compounds are compounds with more than two elements. It contains polyatomic ions.

For its nomenclature, we use the whole name of the polyatomic ion.
Examples:

- Caesium hydroxide (${}CsOH{}$)
- Calcium sulfate (${}CaSO_{4}{}$)
- Ammonium nitrate (${}NH_{4}NO_{3}{}$)

# Covalent Bonds

Covalent bonding usually happens between non-metals. This is where non-metals share valence electrons with each other.

A normal covalent bonding nomenclature has a formula of:
(Greek prefix-) + non-metal + (greek prefix-) + non-metal + (-ide)

Usually the Greek prefix of the first non-metal is dropped if: it is only 1 atom.

List of Greek Prefixes:

| Number of Atoms | Prefix |
| :-------------: | :----: |
|        1        | mono-  |
|        2        |  di-   |
|        3        |  tri-  |
|        4        | tetra- |
|        5        | penta- |
|        6        | hexa-  |
|        7        | hepta- |
|        8        | octa-  |
|        9        | nona-  |
|       10        | deca-  |

Examples:

- Nitrogen dioxide (${}NO_{2}{}$)
- Carbon monoxide (${}CO{}$)
- Disulfure pentoxide (${}S_{2}O_{5}{}$)

## Hydrogen + Non-metal

Hydrogen acting as a cation and a non-metal acting as an anion bonding together is a special case.

If the compound is a pure substance its nomenclature is:
Hydrogen + non-metal + -ide

If the compound is dissolved in water or is an aqueous mixture:
hydro- + non-metal + -ic + acid

Examples:

- Hydrogen fluoride
- Hydrofluoric acid

# Resonant Structures

Resonant structures are possible structures of a molecule given that: they have proper LEDS and follow the Octet rule.

The representative structure of a molecule is the resonant structure which is more stable. Its stability is based on the formal charges present.
For a resonant structure to be stable, it must have no formal charges else, the negative formal charge must be on the most electronegative atom.

The formal charge of an atom in a molecule can be calculated by:

$$
\text{Formal Charge}=\text{Valence Electrons}-\text{Non-Bonding Electrons}-\text{Bonding Pairs} 
$$

Example: ${}\ce{COBr2}{}$, ${}e^{-}=24{}$
The representative structure of ${}\ce{COBr2}{}$:

```tikz
\usetikzlibrary{arrows.meta}
\usepackage{amsmath}
\begin{document}
\begin{tikzpicture}
\node[font=\fontsize{14}{14}] at (0,0) {$\mathrm{C}$};
\node[font=\fontsize{14}{14}] at (0,-2) {$\mathrm{Br}$};
\node[font=\fontsize{14}{14}] at (-2,0) {$\mathrm{Br}$};
\node[font=\fontsize{14}{14}] at (2,0) {$\mathrm{O}$};
\draw(0,-0.3)--(0,-1.7);
\draw(0.3,0.1)--(1.7,0.1);
\draw(0.3,-0.1)--(1.7,-0.1);
\draw(-0.3,0)--(-1.7,0);
\node[circle,inner sep=1.5pt,fill=blue]at(2.3,-0.1){};
\node[circle,inner sep=1.5pt,fill=blue]at(2.3,0.1){};
\node[circle,inner sep=1.5pt,fill=blue]at(2.1,-0.4){};
\node[circle,inner sep=1.5pt,fill=blue]at(2.1,0.4){};
\node[circle,inner sep=1.5pt,fill=blue]at(2.3,0.1){};
\node[circle,inner sep=1.5pt,fill=blue]at(-2.4,-0.1){};
\node[circle,inner sep=1.5pt,fill=blue]at(-2.4,0.1){};
\node[circle,inner sep=1.5pt,fill=blue]at(-2.1,-0.4){};
\node[circle,inner sep=1.5pt,fill=blue]at(-1.9,-0.4){};
\node[circle,inner sep=1.5pt,fill=blue]at(-2.1,0.4){};
\node[circle,inner sep=1.5pt,fill=blue]at(-1.9,0.4){};
\node[circle,inner sep=1.5pt,fill=blue]at(0.1,-2.4){};
\node[circle,inner sep=1.5pt,fill=blue]at(-0.1,-2.4){};
\node[circle,inner sep=1.5pt,fill=blue]at(0.4,-2.1){};
\node[circle,inner sep=1.5pt,fill=blue]at(-0.4,-2.1){};
\node[circle,inner sep=1.5pt,fill=blue]at(0.4,-1.9){};
\node[circle,inner sep=1.5pt,fill=blue]at(-0.4,-1.9){};

\end{tikzpicture}
\end{document}
```

Its resonant structures:

```tikz
\usetikzlibrary{arrows.meta}
\usepackage{amsmath}
\begin{document}
\begin{tikzpicture}
\node[font=\fontsize{14}{14}] at (0,0) {$\mathrm{C}$};
\node[font=\fontsize{14}{14}] at (0,-2) {$\mathrm{Br}$};
\node[font=\fontsize{14}{14}] at (-2,0) {$\mathrm{Br}$};
\node[font=\fontsize{14}{14}] at (2,0) {$\mathrm{O}$};
\draw(-0.1,-0.3)--(-0.1,-1.7);
\draw(0.1,-0.3)--(0.1,-1.7);
\draw(0.3,0)--(1.7,0);;
\draw(-0.3,0)--(-1.7,0);
\node[circle,inner sep=1.5pt,fill=blue]at(2.3,-0.1){};
\node[circle,inner sep=1.5pt,fill=blue]at(2.3,0.1){};
\node[circle,inner sep=1.5pt,fill=blue]at(2.1,-0.4){};
\node[circle,inner sep=1.5pt,fill=blue]at(2.1,0.4){};
\node[circle,inner sep=1.5pt,fill=blue]at(1.9,-0.4){};
\node[circle,inner sep=1.5pt,fill=blue]at(1.9,0.4){};
\node[circle,inner sep=1.5pt,fill=blue]at(-2.4,-0.1){};
\node[circle,inner sep=1.5pt,fill=blue]at(-2.4,0.1){};
\node[circle,inner sep=1.5pt,fill=blue]at(-2.1,-0.4){};
\node[circle,inner sep=1.5pt,fill=blue]at(-1.9,-0.4){};
\node[circle,inner sep=1.5pt,fill=blue]at(-2.1,0.4){};
\node[circle,inner sep=1.5pt,fill=blue]at(-1.9,0.4){};
\node[circle,inner sep=1.5pt,fill=blue]at(0.1,-2.4){};
\node[circle,inner sep=1.5pt,fill=blue]at(-0.1,-2.4){};
\node[circle,inner sep=1.5pt,fill=blue]at(-0.4,-2.1){};
\node[circle,inner sep=1.5pt,fill=blue]at(-0.4,-1.9){};
\node[circle,inner sep=1.5pt]at(0.35,-1.7){$+$};
\node[circle,inner sep=1.5pt]at(2.35,0.3){$-$};

\end{tikzpicture}
\end{document}
```

```tikz
\usetikzlibrary{arrows.meta}
\usepackage{amsmath}
\begin{document}
\begin{tikzpicture}
\node[font=\fontsize{14}{14}] at (0,0) {$\mathrm{C}$};
\node[font=\fontsize{14}{14}] at (0,-2) {$\mathrm{Br}$};
\node[font=\fontsize{14}{14}] at (-2,0) {$\mathrm{Br}$};
\node[font=\fontsize{14}{14}] at (2,0) {$\mathrm{O}$};
\draw(0,-0.3)--(0,-1.7);
\draw(0.3,0)--(1.7,0);
\draw(-0.3,0.1)--(-1.7,0.1);
\draw(-0.3,-0.1)--(-1.7,-0.1);
\node[circle,inner sep=1.5pt,fill=blue]at(2.3,-0.1){};
\node[circle,inner sep=1.5pt,fill=blue]at(2.3,0.1){};
\node[circle,inner sep=1.5pt,fill=blue]at(2.1,-0.4){};
\node[circle,inner sep=1.5pt,fill=blue]at(2.1,0.4){};
\node[circle,inner sep=1.5pt,fill=blue]at(1.9,-0.4){};
\node[circle,inner sep=1.5pt,fill=blue]at(1.9,0.4){};
\node[circle,inner sep=1.5pt,fill=blue]at(-2.1,-0.4){};
\node[circle,inner sep=1.5pt,fill=blue]at(-1.9,-0.4){};
\node[circle,inner sep=1.5pt,fill=blue]at(-2.1,0.4){};
\node[circle,inner sep=1.5pt,fill=blue]at(-1.9,0.4){};
\node[circle,inner sep=1.5pt,fill=blue]at(0.1,-2.4){};
\node[circle,inner sep=1.5pt,fill=blue]at(-0.1,-2.4){};
\node[circle,inner sep=1.5pt,fill=blue]at(-0.4,-2.1){};
\node[circle,inner sep=1.5pt,fill=blue]at(-0.4,-1.9){};
\node[circle,inner sep=1.5pt,fill=blue]at(0.4,-1.9){};
\node[circle,inner sep=1.5pt,fill=blue]at(0.4,-2.1){};
\node[circle,inner sep=1.5pt]at(-1.65,0.3){$+$};
\node[circle,inner sep=1.5pt]at(2.35,0.3){$-$};

\end{tikzpicture}
\end{document}
```
