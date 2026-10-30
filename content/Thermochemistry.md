**Thermochemistry** is a branch of [[Chemistry]] that studies heat changes in chemical reactions.

Conditions for a reaction to occur:

- **Collision** of reactants
- **Energy**${}\geq E_{a}{}$
- **Proper Orientation** of molecules

The difference of Heat and Temperature:
**Heat** is the transfer of thermal energy between two bodies at different temperatures.
**Temperature** is the measurement of the average thermal energy.

Remember that:
Heat flows from high to low

# Enthalpy

**Enthalpy** is the quantization of thermal energy flow in or out of a system. It is represented by the symbol "${}\Delta H{}$".

$$
\Delta H=H_{products}-H_{reactants}
$$

Note:
${}\Delta H{}$ is the heat given off or absorbed by the reaction in **constant pressure**.

The **System** is the part of the universe with the substance/s undergoing the change. There are 3 types of systems:

- Open (Constant Pressure, Exchange of Heat and Mass)
- Closed (Exchange of Heat)
- Isolated

**Surroundings** is everything else that is not the part of the system.

### Exothermic Reactions

Exothermic reactions release heat into the surroundings. Its change in enthalpy is negative.

```tikz
\usepackage{tikz}
\usepgflibrary{shapes.geometric}
\usetikzlibrary{calc,arrows.meta}

\begin{document}

\begin{tikzpicture}[scale=1.75]

\draw[-Latex,very thick] (0,0) -- (5,0); 
\draw[-Latex,very thick] (0,0) -- (0,5);
\node[label={below:Progress of RXN}] () at (2.5,0){};
\node[label={left:E}] () at (0,2.5){};
\draw[smooth,thick] plot coordinates {(1,3)(3,4)(4,1)};
\draw[Latex-,green,thick] (2.9,4) -- (2.9,3);
\draw[Latex-,red,thick] (4.5,1) -- (4.5,3);
\draw[blue] (0,3) -- (5,3);
\draw[red] (4,1) -- (5,1);
\node[label={left:$E_{a}$}] () at (2.9,3.5){};
\node[label={right:$\Delta H$}]() at (4.5,2){};
\node[label={below:Starting Energy}]() at (2,3){};
\node[label={above:Transition State}]() at (2.9,4){};
\node[label={below:Final Energy}]() at (4,1){};

\end{tikzpicture}
\end{document}
```

### Endothermic Reactions

Endothermic reactions absorb heat from the surroundings. Its change in enthalpy is positive.

```tikz
\usepackage{tikz}
\usepgflibrary{shapes.geometric}
\usetikzlibrary{calc,arrows.meta}

\begin{document}

\begin{tikzpicture}[scale=1.75]

\draw[-Latex,very thick] (0,0) -- (5,0); 
\draw[-Latex,very thick] (0,0) -- (0,5);
\node[label={below:Progress of RXN}] () at (2.5,0){};
\node[label={left:E}] () at (0,2.5){};
\draw[smooth,thick] plot coordinates {(1,1)(3,4)(4,3)};
\draw[Latex-,green,thick] (3.1,4) -- (3.1,1);
\draw[Latex-,red,thick] (4.5,3) -- (4.5,1);
\draw[blue] (0,1) -- (5,1);
\draw[red] (4,3) -- (5,3);
\node[label={right:$E_{a}$}] () at (3.1,2.5){};
\node[label={right:$\Delta H$}]() at (4.5,2){};
\node[label={below:Starting Energy}]() at (3,1){};
\node[label={above:Final Energy}]() at (4.5,3){};
\node[label={above:Transition State}]() at (3.1,4){};

\end{tikzpicture}
\end{document}
```

## Thermochemical Equations

A thermochemical equation is just like a normal balanced equation but with the addition of states of matter and the change in enthalpy of the system.

$$
\ce{2CH3OH_{(l)} + 3O2_{(g)}->4H2O_{(l)} +2CO2_{(g)}}\ \Delta H=-1452.\text{ kJ} \\
\\ \\
\ce{4H2O_{(l)} +2CO2_{(g)} -> 2CH3OH_{(l)} + 3O2_{(g)}}\ \Delta H=1452.\text{ kJ}\\ \\
\text{Thermochemical Equations of the Combustion Reaction of Methanol }
$$

## Hess' Law

# Thermodynamics

_Main note: [[Thermodynamics]]_

In thermochemistry, we are mostly interested in the [[Thermodynamics#First Law|First Law]]. The equation derived from the first law goes like this:

$$
\Delta U=U_{f}-U_{i}\\
U_{system}+U_{surroundings}=0\\
\implies U_{system}=-U_{surroundings}
$$

Where:
${}\Delta U={}$Change in the internal energy of the system
${}U_{f}={}$Final energy of the system
${}U_{i}={}$Initial energy of the system

A variant of the equation uses the energy absorbed/released by the reaction and the work it exerted into the surroundings. Such that:

$$
\Delta U=q+w\\
\text{Where }w=-P\Delta V 
$$

Where:
${}q={}$Heat transffered from the system to the surroundings
${}w={}$Work done by the system to the surroundings
${}P={}$The pressure that the reaction is working against
${}\Delta V=V_{final}-V_{initial}={}$Change in volume

An equation for gases was derived from the previous equation:

$$
\Delta U=q-RT\Delta n=\Delta H-RT\Delta n
$$

Where:
${}q=\Delta H={}$Change in Enthalpy (in constant pressure)
${}R={}$Ideal Gas Constant
${}T={}$Temperature in Kelvin
${}\Delta n=n_{products}-n_{reactants}={}$Change in gaseous mol

Notes:
Sign Conventions

| Sign |                      Process                      |
| :--: | :-----------------------------------------------: |
|  +w  |    Work done by the System to the Surroundings    |
|  -w  |    Work done by the Surroundings to the System    |
|  +q  | Heat Absorbed by the System from the Surroundings |
|  -q  |  Heat Released by the System to the Surroundings  |

# Specific Heat and Heat Capacity

**Specific Heat** (${}s{}$) of a substance is the amount of heat it needs to raise a ${}g{}$ or ${}kg{}$ of the substance by ${}1^{\circ}C{}$ or ${}1K{}$ (${}g{}$ to ${}^{\circ}C{}$ and ${}kg{}$ to ${}K{}$). Computing the specific heat of a substance uses this equation:

$$
q=ms\Delta t=mc\Delta t
$$

Where:
${}q={}$heat in ${}J{}$
${}m={}$mass in ${}g{}$
${}s=c={}$specific heat in ${}\frac{J}{g^{\circ}C}{}$
${}\Delta t=t_{final}-t_{initial}={}$temperature in ${}^{\circ}C{}$

note that:
The specific heat of a substance is constant for that substance and will vary depending if ${}^{\circ}C{}$ or ${}K{}$ is used.

**Heat Capacity** (${}C{}$) is the amount of heat needed by a sample of a substance (${}m{}$) to be raised by ${}1^{\circ}C{}$.

$$
C=m \times s
$$
