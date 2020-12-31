## INTRODUCTION<br>

#### Learning Objectives:

  1. Define the significance of hartnell governor
  2. Identify the parts of a hartnell governor such as ball, spindle, bell crank lever, sleeve, roller and spring
  3. Explain the working and uses of hartnell governor
  4. Calculate/derive governing equation of the hartnell governor
  5. Examine the variation in the length of the bell crank lever, height of sleeve, mass of the ball, and stiffness of the spring due to change in rotational speed.

#### Theory
Governors, in general, are most useful means of controlling or regulating the speed of an engine based on varying levels of the load at the output. They are used in regulating the speed of the engine, which takes to the fact that the fuel injected is based on the speed variations seen along the shafts. <a href="references.html">[1]</a>
          <center>![alt text](images/hartnell.JPG "Parts")</center>
<center>Source: (<a href="http://www.jptechnoindia.com/theory_of_machine.html">http://www.jptechnoindia.com/theory_of_machine.html</a>)</center>

Hartnell governor is spring controlled governor. Two bell crank levers, each carrying a ball at one end and a roller on the other end. The roller fit into a groove in the sleeve. The frame is attached to the governor spindle and hence rotates with it. A helical spring in compression provides equal downward forces on the two rollers through a collar on the sleeve. With increase in speed, radius of rotation of balls increases and rollers lift the sleeve against the spring force. With decrease in speed, sleeve move downwards with the spring force. The movement of this sleeve is transferred to throttle valve.<a href="references.html">[1]</a>

#### Equations/formulas:
<img src="./images/equations/m.png" title="m" /> Mass of each ball (kg)

<img src="./images/equations/bigM.png" title="M" /> Mass of central load (N)

<img src="./images/equations/h.png" title="h" /> Height of governor (m)

<img src="./images/equations/r1.png" title="r_1" /> Minimum radius of rotation (m)

<img src="./images/equations/r2.png" title="r_2" /> Maximum radius of rotation (m)

<img src="./images/equations/omega1.png" title="\omega_1" /> Angular speed of the governor at minimum radius (rad/s)

<img src="./images/equations/omega2.png" title="\omega_2" /> Angular speed of the governor at maximum radius (rad/s)

<img src="./images/equations/s1.png" title="S_1" /> Spring force exerted on the sleeve at <img src="./images/equations/omega1.png" title="\omega_1" /> (N)

<img src="./images/equations/s2.png" title="S_2" /> Spring force exerted on the sleeve at <img src="./images/equations/omega2.png" title="\omega_2" />(N)

<img src="./images/equations/fc1.png" title="F_{c1}" /> Centrifugal force at <img src="./images/equations/w11.png" title="\omega_1=m\omega_1^2r_1" />(N)

<img src="./images/equations/fc2.png" title="F_{c2}" /> Centrifugal force at <img src="./images/equations/w22.png" title="\omega_2=m\omega_2^2r_2" />(N)

<img src="./images/equations/smallS.png" title="s" /> Stiffness of the spring or the force required to compress the spring by a unit distance

<img src="./images/equations/x.png" title="x" /> Length of the vertical or ball arm of the lever (m)

<img src="./images/equations/y.png" title="y" /> Length of the horizontal or sleeve arm of the lever (m)

<img src="./images/equations/r.png" title="r" /> Distance of fulcrum <img src="./images/equations/o.png" title="o" /> from the governor axis or the radius of rotation when the the governor is in mid-position (m)

<center><img src="./images/equations/heq.png" title="h = {(r_2 - r_1)}times\frac{y}{x}" /></center><br>

The stiffness of the spring is obtained as:
<center><img src="./images/equations/bigS.png" title="S = \frac {s_2 - s_1}{h} = 2(\frac{F_{c2}-F_{c1}}{r_2-r_1})(\frac{x}{y})^2" /></center><br>

The distance of the ball from the centre:

<center><img src="./images/equations/req.png" title="r = \frac{F_{c1}r_2 - F_{c2}r_1}{m\omega^2(r_2-r_1)+(F_{c1}-F_{c2})}" /></center><br>


<center><img src="./images/equations/rfinal.png" title="r = \frac{r_1r_2\omega_1^2 - r_1r_2\omega_2^2 }{\omega^2r_2-\omega^2r_1+\omega_1^2r_1 - \omega_2^2r_2}" /></center><br>
<center>(Equations Source: <a href="http://latex.codecogs.com/">latex.codecogs.com</a>)</center>
