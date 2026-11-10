**Gas Laws** is a topic of [[General Chemistry]]. It studies the behavior of gasses.

${}1\text{ atm}=760\text{ mmHg}=101325\text{ Pa}{}$
${}1\text{ mmHg}=0.1333 \text{KPa}{}$

Gas Pressures can be measured by using [Manometers](https://en.wikipedia.org/wiki/Pressure_measurement#Instruments)

# Kinetic Molecular Theory of Gases

1. Gases have mass but have negligible volume; they fully occupy the volume of their container not matter how much moles of Gas there is. Gases are Compressible.
2. Gas molecules are in constant motion in random directions. Their collisions are elastic. See [[#Boyle's Law]]
3. Gas molecules exert no force to each other; they are neutrally charged. See [[#Dalton's Law]]
4. The average kinetic energy of gas molecules is proportional to the temperature in Kelvins. See [[#Charles' Law]]

# Ideal Gas Law

The Ideal Gas Equation is used to compute and/or predict the behavior of Gases

$$
PV=nRT
$$

Where:
${}P={}$Pressure in ${}atm{}$
${}V={}$Volume in ${}L{}$
${}n={}$moles of gas
${}R={}$Gas Law Constant (${}0.0821\frac{\text{L}\cdot\text{atm}}{\text{mol}\cdot \text{K}}{}$ or ${}8.314 \frac{\text{J}}{\text{mol}\cdot\text{K}}{}$)

# Boyle's Law

Boyle's law states that Pressure is inversely proportional with Volume provided that the amount of gas and Temperature are constant. It is expressed as this equation:

$$
P_{1}V_{1}=P_{2}V_{2}
\\\\
P\propto \frac{1}{V}
$$

# Charles' Law

Charle's law states that Volume is directly proportional with Temperature provided that the amount of gas and Pressure are constant. It is expressed as this equation:
$\frac{V_{1}}{T_{1}}=\frac{V_{2}}{T_{2}}\\\\ V\propto T$

# Amonton's Law

Amonton's law states that Pressure is directly proportional with Temperature provided that the amount of gas and Volume are constant. It is expressed as this equation:

$$
\frac{P_{1}}{T_{1}}=\frac{P_{2}}{T_{2}}
\\\\
P\propto T
$$

# Avogadro's Law

Avogadro's Law states that Volume is directly proportional with amount of gas (in moles) provided that Pressure and Temperature are constant.
Note that this only works if Pressure and Temperature are held at a constant (ex. STP $=0^{\circ}C, 1.00 atm$)

$$
\frac{V_{1}}{n_{1}}=\frac{V_{2}}{n_{2}}
\\\\
P\propto n
$$

# Dalton's Law

Dalton's Law states that the Total Pressure in a container is the sum of all the Partial Pressures of each gas inside the container. This is only valid if the gases are Ideal Gases

$$
P_{T}=P_{A}+P_{B}+...
$$

## Mole Fraction

The mole fraction may be used to compute for the partial pressure given that the total pressure of the gases is provided.

$$
\frac{P_{A}}{P_T}=\frac{\frac{n_{A}RT}{V}}{\frac{n_{A}RT}{V}+\frac{n_{B}RT}{V}}
\\\\
\implies \frac{P_{A}}{P_T}=\frac{\frac{n_{A}RT}{V}}{n_{a}+n_{b}(\frac{RT}{V})}
\\\\
\implies \frac{P_A}{P_T}=\frac{n_A}{n_{A}+n_{B}}
\\\\
\implies\frac{P_{A}}{P_T}=\frac{n_A}{n_T}
\\\\
\implies \frac{P_A}{P_T}=X_{A}
\\\\
\implies P_{A}=(X_{A})(P_{T})
$$

# Derivations

## Molar Mass from Ideal Gas Equation

Let ${}n=\frac{m}{\mu}{}$, where ${}m={}$mass and ${}\mu={}$molar mass

$$
\begin{aligned}
PV=nRT&\implies PV=\left( \frac{m}{\mu} \right)RT \\
&\implies \mu=\frac{mRT}{PV}
\end{aligned}
$$

## Density from Ideal Gas Equation

Since ${}\rho=\frac{mass}{volume}=\frac{m}{V}{}$:

$$
\begin{aligned}
\mu=\frac{mRT}{PV}&\implies \frac{P\mu}{RT}=\frac{m}{V} \\
&\implies \frac{P\mu}{RT}=\rho
\end{aligned}
$$

## Ideal Gas Constant

At STP (${}1{}$atm, ${}0\degree{}$C) 1 mol of gas occupies ${}22.414{}$L

$$
\begin{aligned}
PV=nRT&\implies(1\text{ atm})(22.414\text{ L})=R(1\text{ mol})(273.15\text{ K}) \\
&\implies \frac{22.414\text{ L}\cdot\text{atm}}{273.15 \text{ mol}\cdot\text{K}}=R \\
&R=0.08205747758 \frac{\text{L}\cdot\text{atm}}{\text{mol}\cdot\text{K}}\approx 0.0821\frac{\text{L}\cdot\text{atm}}{\text{mol}\cdot\text{K}}
\end{aligned}
$$

At STP (${}101325{}$Pa, ${}0\degree{}$C) 1 mol of gas occupies ${}0.022414{}$ m${}^{3}{}$

$$
\begin{aligned}
PV=nRT&\implies(101325\text{ Pa})(0.022414\text{ m}^{3})=R(1\text{ mol})(273.15\text{ K}) \\
&\implies \frac{2271.09855\text{ J}}{273.15 \text{ mol}\cdot\text{K}}=R \\
&R=8.3144731915 \frac{\text{J}}{\text{mol}\cdot\text{K}}\approx 8.314\frac{\text{J}}{\text{mol}\cdot\text{K}}
\end{aligned}
$$

# Root-Mean-Square Velocity of Gaseous Particles

$$
u_{rms}=\sqrt{ \frac{3RT}{M} }
$$

Where:
${}R=8.314 \text{ J/molK}{}$
${}M=\text{molar mass in Kg/mol}{}$
${}T=\text{Temperature in K}{}$

# Gas Diffusion and Effusion

## Gas Diffusion

is the gradual mixing of gaseous molecules together due to kinetics

## Gas Effusion

is the movement of pressurized gas through a small opening to another compartment

$$
\frac{r_{1}}{r_{2}}=\frac{t_{1}}{t_{2}}=\sqrt{ \frac{M_{2}}{M_{1}} }
$$

Where:
${}r={}$rate of diffusion
${}t={}$time to effuse
${}M={}$molar mass
