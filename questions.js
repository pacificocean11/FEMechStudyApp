const SUBJECTS = [
    { id: 'math', name: 'Mathematics', icon: '📐', topics: ['Analytic geometry and trigonometry', 'Differential Equations', 'Numerical Methods', 'Linear Algebra', 'Calculus'] },
    { id: 'stats', name: 'Probability and Statistics', icon: '📊', topics: ['Measures of Central Tendencies and Dispersions', 'Expected Value', 'Regression and Curve Fitting', 'Probability Distributions'] },
    { id: 'chemistry', name: 'Chemistry', icon: '🧪', topics: ['Oxidation and Reduction', 'Acids and Bases', 'Chemical Reactions'] },
    { id: 'instr-controls', name: 'Instrumentation and Controls', icon: '🕹️', topics: ['Sensors and Transducers', 'Control systems', 'Logic diagrams'] },
    { id: 'ethics', name: 'Engineering Ethics and Societal Impacts', icon: '🤝', topics: ['Codes of ethics', 'Public protection issues', 'Societal impacts'] },
    { id: 'safety', name: 'Safety, Health, and Environment', icon: '🛡️', topics: ['Industrial hygiene', 'Basic safety equipment', 'Gas detection and monitoring', 'Electrical safety', 'Confined space entry', 'Hazard communications'] },
    { id: 'econ', name: 'Engineering Economics', icon: '💰', topics: ['Time value of money', 'Cost analysis', 'Economic analyses', 'Uncertainty', 'Project selection'] },
    { id: 'statics', name: 'Statics', icon: '⚖️', topics: ['Resultants of force systems', 'Concurrent force systems', 'Force couple systems', 'Equilibrium of rigid bodies', 'Internal forces', 'Area properties', 'Static friction', 'Free-body diagrams', 'Weight and mass'] },
    { id: 'dynamics', name: 'Dynamics', icon: '🏎️', topics: ['Particle and rigid-body kinematics', 'Linear motion', 'Angular motion', 'Mass moment of inertia', 'Impulse and momentum', 'Work, energy, and power', 'Dynamic friction', 'Vibrations'] },
    { id: 'materials-strength', name: 'Strength of Materials', icon: '🏗️', topics: ['Stress types', 'Combined loading', 'Stress and strain', 'Shear and moment diagrams', 'Analysis of beams', 'Loads and deformations', 'Stress transformation'] },
    { id: 'materials-science', name: 'Materials Science', icon: '🔬', topics: ['Physical properties', 'Mechanical properties', 'Chemical properties', 'Thermal properties', 'Electrical properties', 'Material selection'] },
    { id: 'fluids', name: 'Fluid Mechanics', icon: '🌊', topics: ['Fluid properties', 'Dimensionless numbers', 'Laminar and turbulent flow', 'Fluid statics', 'Energy and momentum equations', 'Pipe and duct flow', 'Open-channel flow', 'Fluid transport systems', 'Flow measurement'] },
    { id: 'electricity', name: 'Electricity, Power, and Magnetism', icon: '⚡', topics: ['Charge and current', 'Voltage and resistance', 'Circuit analysis', 'Power and energy', 'Magnetic fields'] },
    { id: 'thermo-heat', name: 'Thermodynamics and Heat Transfer', icon: '🔥', topics: ['Laws of thermodynamics', 'Properties of substances', 'Heat transfer mechanisms', 'Thermodynamic cycles'] }
];

const QUESTIONS = {
    'math': [
  {
    "topic": "Analytic geometry and trigonometry",
    "title": "Equation of a Perpendicular Line",
    "question": "What is the equation of the line passing through the point $(2, -3)$ and perpendicular to the line defined by $3x - 4y + 7 = 0$?",
    "question_image": "",
    "options": [
      { "label": "A", "text": "$3x - 4y - 18 = 0$", "is_correct": false },
      { "label": "B", "text": "$4x + 3y + 1 = 0$", "is_correct": true },
      { "label": "C", "text": "$4x - 3y - 17 = 0$", "is_correct": false },
      { "label": "D", "text": "$3x + 4y + 6 = 0$", "is_correct": false }
    ],
    "solution": {
      "steps": [
        { "title": "Find Slope of Given Line", "content": "Rewrite $3x - 4y + 7 = 0$ as $y = \\frac{3}{4}x + \\frac{7}{4}$. The slope $m_1 = \\frac{3}{4}$." },
        { "title": "Determine Perpendicular Slope", "content": "The perpendicular slope $m_2 = -\\frac{1}{m_1} = -\\frac{4}{3}$." },
        { "title": "Use Point-Slope Form", "content": "Using $(2, -3)$: $y - (-3) = -\\frac{4}{3}(x - 2)$. Multiplying by 3 gives $3y + 9 = -4x + 8$, which simplifies to $4x + 3y + 1 = 0$." }
      ],
      "final_answer": "$4x + 3y + 1 = 0$",
      "solution_image": ""
    }
  },
  {
    "topic": "Analytic geometry and trigonometry",
    "title": "Point of Intersection of Two Lines",
    "question": "Find the point of intersection for the two lines given by $y = 2x + 1$ and $3x + 2y = 16$.",
    "question_image": "",
    "options": [
      { "label": "A", "text": "(2, 5)", "is_correct": true },
      { "label": "B", "text": "(1, 3)", "is_correct": false },
      { "label": "C", "text": "(3, 7)", "is_correct": false },
      { "label": "D", "text": "(2, 3)", "is_correct": false }
    ],
    "solution": {
      "steps": [
        { "title": "Substitution", "content": "Substitute $y = 2x + 1$ into $3x + 2y = 16$: $3x + 2(2x + 1) = 16$." },
        { "title": "Solve for x", "content": "$3x + 4x + 2 = 16 \\implies 7x = 14 \\implies x = 2$." },
        { "title": "Solve for y", "content": "$y = 2(2) + 1 = 5$. The intersection is $(2, 5)$." }
      ],
      "final_answer": "(2, 5)",
      "solution_image": ""
    }
  },
  {
    "topic": "Analytic geometry and trigonometry",
    "title": "Classification of a Conic Section",
    "question": "A conic section is represented by the general equation $2x^2 - 4xy + 2y^2 + 5x - 7 = 0$. Which type of conic section does this equation represent?",
    "question_image": "",
    "options": [
      { "label": "A", "text": "Ellipse", "is_correct": false },
      { "label": "B", "text": "Hyperbola", "is_correct": false },
      { "label": "C", "text": "Parabola", "is_correct": true },
      { "label": "D", "text": "Circle", "is_correct": false }
    ],
    "solution": {
      "steps": [
        { "title": "Identify Coefficients", "content": "From $Ax^2 + Bxy + Cy^2 + Dx + Ey + F = 0$: $A=2, B=-4, C=2$." },
        { "title": "Calculate Discriminant", "content": "$\\Delta = B^2 - 4AC = (-4)^2 - 4(2)(2) = 16 - 16 = 0$." },
        { "title": "Conclusion", "content": "Since $B^2 - 4AC = 0$, the conic is a parabola." }
      ],
      "final_answer": "Parabola",
      "solution_image": ""
    }
  },
  {
    "topic": "Analytic geometry and trigonometry",
    "title": "Equation of a Circle",
    "question": "What is the equation of a circle with its center at $(-1, 4)$ and a radius of $5$?",
    "question_image": "",
    "options": [
      { "label": "A", "text": "$(x - 1)^2 + (y + 4)^2 = 25$", "is_correct": false },
      { "label": "B", "text": "$(x + 1)^2 + (y - 4)^2 = 5$", "is_correct": false },
      { "label": "C", "text": "$(x + 1)^2 + (y - 4)^2 = 25$", "is_correct": true },
      { "label": "D", "text": "$(x - 1)^2 + (y + 4)^2 = 5$", "is_correct": false }
    ],
    "solution": {
      "steps": [
        { "title": "Identify Standard Form", "content": "Standard form is $(x - h)^2 + (y - k)^2 = r^2$." },
        { "title": "Substitute Values", "content": "With center $(-1, 4)$ and $r=5$: $(x - (-1))^2 + (y - 4)^2 = 5^2$." },
        { "title": "Simplify", "content": "$(x + 1)^2 + (y - 4)^2 = 25$." }
      ],
      "final_answer": "$(x + 1)^2 + (y - 4)^2 = 25$",
      "solution_image": ""
    }
  },
  {
    "topic": "Analytic geometry and trigonometry",
    "title": "Center and Radius of a Circle",
    "question": "Determine the center $(h, k)$ and radius $r$ of the circle defined by the equation $x^2 + y^2 - 6x + 8y + 9 = 0$.",
    "question_image": "",
    "options": [
      { "label": "A", "text": "Center $(3, -4), r = 4$", "is_correct": true },
      { "label": "B", "text": "Center $(-3, 4), r = 4$", "is_correct": false },
      { "label": "C", "text": "Center $(3, -4), r = 16$", "is_correct": false },
      { "label": "D", "text": "Center $(-3, 4), r = 16$", "is_correct": false }
    ],
    "solution": {
      "steps": [
        { "title": "Complete the Square", "content": "$(x^2 - 6x + 9) + (y^2 + 8y + 16) = -9 + 9 + 16$." },
        { "title": "Standard Form", "content": "$(x - 3)^2 + (y + 4)^2 = 16$." },
        { "title": "Identify Parameters", "content": "Center $(h, k) = (3, -4)$ and $r = \\sqrt{16} = 4$." }
      ],
      "final_answer": "Center $(3, -4), r = 4$",
      "solution_image": ""
    }
  },
  {
    "topic": "Analytic geometry and trigonometry",
    "title": "Eccentricity of an Ellipse",
    "question": "Calculate the eccentricity, $e$, of the ellipse defined by the equation $\\dfrac{x^2}{16} + \\dfrac{y^2}{9} = 1$.",
    "question_image": "",
    "options": [
      { "label": "A", "text": "$e = \\dfrac{\\sqrt{7}}{4}$", "is_correct": true },
      { "label": "B", "text": "$e = \\dfrac{3}{4}$", "is_correct": false },
      { "label": "C", "text": "$e = \\dfrac{7}{16}$", "is_correct": false },
      { "label": "D", "text": "$e = \\dfrac{\\sqrt{7}}{3}$", "is_correct": false }
    ],
    "solution": {
      "steps": [
        { "title": "Identify Axes", "content": "$a^2 = 16 \\implies a = 4$; $b^2 = 9 \\implies b = 3$." },
        { "title": "Calculate Eccentricity", "content": "$e = \\sqrt{1 - \\frac{b^2}{a^2}} = \\sqrt{1 - \\frac{9}{16}} = \\sqrt{\\frac{7}{16}} = \\frac{\\sqrt{7}}{4}$." }
      ],
      "final_answer": "$e = \\frac{\\sqrt{7}}{4}$",
      "solution_image": ""
    }
  },
  {
    "topic": "Analytic geometry and trigonometry",
    "title": "Focus of a Parabola",
    "question": "Find the coordinates of the focus for the parabola defined by the equation $y^2 = 12x$.",
    "question_image": "",
    "options": [
      { "label": "A", "text": "$(0, 3)$", "is_correct": false },
      { "label": "B", "text": "$(3, 0)$", "is_correct": true },
      { "label": "C", "text": "$(6, 0)$", "is_correct": false },
      { "label": "D", "text": "$(0, 6)$", "is_correct": false }
    ],
    "solution": {
      "steps": [
        { "title": "Identify p", "content": "$y^2 = 2px \\implies 2p = 12 \\implies p = 6$." },
        { "title": "Find Focus", "content": "For $y^2 = 2px$, Focus is at $(\\frac{p}{2}, 0)$. So, $(3, 0)$." }
      ],
      "final_answer": "$(3, 0)$",
      "solution_image": ""
    }
  },
  {
    "topic": "Analytic geometry and trigonometry",
    "title": "Distance between Foci of a Hyperbola",
    "question": "A hyperbola is defined by the equation: $9x^2 - 16y^2 - 36x - 64y - 172 = 0$. What is the distance between the two foci of this hyperbola?",
    "question_image": "",
    "options": [
      { "label": "A", "text": "5", "is_correct": false },
      { "label": "B", "text": "10", "is_correct": true },
      { "label": "C", "text": "8", "is_correct": false },
      { "label": "D", "text": "$2\\sqrt{7}$", "is_correct": false }
    ],
    "solution": {
      "steps": [
        { "title": "Standard Form", "content": "Completing the square: $9(x-2)^2 - 16(y+2)^2 = 144 \\implies \\frac{(x-2)^2}{16} - \\frac{(y+2)^2}{9} = 1$." },
        { "title": "Calculate c", "content": "$a^2=16, b^2=9 \\implies c^2 = a^2 + b^2 = 25 \\implies c=5$." },
        { "title": "Find Distance", "content": "Distance between foci = $2c = 2(5) = 10$." }
      ],
      "final_answer": "10",
      "solution_image": ""
    }
  },
  {
    "topic": "Analytic geometry and trigonometry",
    "title": "Vertex of a Parabola",
    "question": "What is the vertex of the parabola defined by the equation $y^2 - 8x + 4y + 20 = 0$?",
    "question_image": "",
    "options": [
      { "label": "A", "text": "(2, -2)", "is_correct": true },
      { "label": "B", "text": "(-2, 2)", "is_correct": false },
      { "label": "C", "text": "(2, 2)", "is_correct": false },
      { "label": "D", "text": "(-2, -2)", "is_correct": false }
    ],
    "solution": {
      "steps": [
        { "title": "Isolate Terms", "content": "$y^2 + 4y = 8x - 20$." },
        { "title": "Complete Square", "content": "$y^2 + 4y + 4 = 8x - 16 \\implies (y + 2)^2 = 8(x - 2)$." },
        { "title": "Identify Vertex", "content": "In $(y - k)^2 = 4p(x - h)$, $(h, k) = (2, -2)$." }
      ],
      "final_answer": "(2, -2)",
      "solution_image": ""
    }
  },
  {
    "topic": "Analytic geometry and trigonometry",
    "title": "Eccentricity of an Ellipse",
    "question": "An ellipse is defined by the equation $9x^2 + 25y^2 = 225$. What is its eccentricity?",
    "question_image": "",
    "options": [
      { "label": "A", "text": "0.6", "is_correct": false },
      { "label": "B", "text": "0.75", "is_correct": false },
      { "label": "C", "text": "0.8", "is_correct": true },
      { "label": "D", "text": "1.25", "is_correct": false }
    ],
    "solution": {
      "steps": [
        { "title": "Standard Form", "content": "$\\frac{x^2}{25} + \\frac{y^2}{9} = 1 \\implies a^2=25, b^2=9$." },
        { "title": "Calculate c", "content": "$c^2 = a^2 - b^2 = 25 - 9 = 16 \\implies c = 4$." },
        { "title": "Calculate e", "content": "$e = c/a = 4/5 = 0.8$." }
      ],
      "final_answer": "0.8",
      "solution_image": ""
    }
  },
  {
    "topic": "Analytic geometry and trigonometry",
    "title": "Intersection of Line and Circle",
    "question": "Which of the following points represents an intersection of the line $y = x + 1$ and the circle $x^2 + y^2 = 5$?",
    "question_image": "",
    "options": [
      { "label": "A", "text": "(1, 2)", "is_correct": true },
      { "label": "B", "text": "(2, 1)", "is_correct": false },
      { "label": "C", "text": "(-1, -2)", "is_correct": false },
      { "label": "D", "text": "(0, 1)", "is_correct": false }
    ],
    "solution": {
      "steps": [
        { "title": "Substitution", "content": "Substitute $y = x + 1$ into $x^2 + y^2 = 5$: $x^2 + (x+1)^2 = 5$." },
        { "title": "Solve Quadratic", "content": "$2x^2 + 2x - 4 = 0 \\implies x^2 + x - 2 = 0 \\implies (x-1)(x+2) = 0$." },
        { "title": "Find y", "content": "For $x=1, y=2$. For $x=-2, y=-1$. The matching option is $(1, 2)$." }
      ],
      "final_answer": "(1, 2)",
      "solution_image": ""
    }
  },
  {
    "topic": "Calculus",
    "title": "Limits: L’Hopital’s Rule",
    "question": "Evaluate the following limit:\n\\[ \\lim_{x \\to 0} \\dfrac{e^{2x} - 1 - 2x}{x^2} \\]",
    "question_image": "",
    "options": [
      { "label": "A", "text": "0", "is_correct": false },
      { "label": "B", "text": "1", "is_correct": false },
      { "label": "C", "text": "2", "is_correct": true },
      { "label": "D", "text": "4", "is_correct": false }
    ],
    "solution": {
      "steps": [
        { "title": "Check for Indeterminate Form", "content": "Substitute $x = 0$ into the expression: $\\dfrac{e^{2(0)} - 1 - 2(0)}{0^2} = \\dfrac{1 - 1 - 0}{0} = \\dfrac{0}{0}$. Since it is indeterminate, apply L'Hôpital's Rule." },
        { "title": "Apply L'Hôpital's Rule (First Derivation)", "content": "Differentiate numerator and denominator: $\\lim_{x \\to 0} \\dfrac{2e^{2x} - 2}{2x}$. Substituting $x=0$ still gives $\\frac{0}{0}$." },
        { "title": "Apply L'Hôpital's Rule (Second Derivation)", "content": "Differentiate again: $\\lim_{x \\to 0} \\dfrac{4e^{2x}}{2}$." },
        { "title": "Evaluate the Limit", "content": "Substitute $x = 0$: $\\dfrac{4e^0}{2} = \\dfrac{4}{2} = 2$." }
      ],
      "final_answer": "2",
      "solution_image": ""
    }
  },
  {
    "topic": "Calculus",
    "title": "Trigonometric Limit",
    "question": "Calculate the limit:\n\\[ \\lim_{x \\to 0} \\dfrac{\\sin(5x)}{\\tan(2x)} \\]",
    "question_image": "",
    "options": [
      { "label": "A", "text": "$\\dfrac{2}{5}$", "is_correct": false },
      { "label": "B", "text": "$\\infty$", "is_correct": false },
      { "label": "C", "text": "$\\dfrac{5}{2}$", "is_correct": true },
      { "label": "D", "text": "1", "is_correct": false }
    ],
    "solution": {
      "steps": [
        { "title": "Check for Indeterminate Form", "content": "Substituting $x=0$ yields $\\frac{\\sin(0)}{\\tan(0)} = \\frac{0}{0}$." },
        { "title": "Apply L'Hôpital's Rule", "content": "Differentiate numerator: $5\\cos(5x)$. Differentiate denominator: $2\\sec^2(2x)$." },
        { "title": "Evaluate the Limit", "content": "$\\lim_{x \\to 0} \\dfrac{5\\cos(5x)}{2\\sec^2(2x)} = \\dfrac{5(1)}{2(1)^2} = \\dfrac{5}{2}$." }
      ],
      "final_answer": "$\\frac{5}{2}$",
      "solution_image": ""
    }
  },
  {
    "topic": "Calculus",
    "title": "Derivative: Chain Rule",
    "question": "Find the first derivative $\\dfrac{dy}{dx}$ of the function $y = \\ln(x^2 \\sin(x))$ for $x > 0$.",
    "question_image": "",
    "options": [
      { "label": "A", "text": "$\\dfrac{2}{x} + \\cot(x)$", "is_correct": true },
      { "label": "B", "text": "$\\dfrac{2}{x} + \\tan(x)$", "is_correct": false },
      { "label": "C", "text": "$\\dfrac{2x \\cos(x)}{x^2 \\sin(x)}$", "is_correct": false },
      { "label": "D", "text": "$\\dfrac{2}{x} - \\cot(x)$", "is_correct": false }
    ],
    "solution": {
      "steps": [
        { "title": "Simplify using Log Properties", "content": "$y = \\ln(x^2) + \\ln(\\sin(x)) = 2\\ln(x) + \\ln(\\sin(x))$." },
        { "title": "Differentiate Term by Term", "content": "$\\frac{d}{dx}(2\\ln(x)) = \\frac{2}{x}$ and $\\frac{d}{dx}(\ln(\\sin(x))) = \\frac{1}{\\sin(x)} \\cdot \\cos(x) = \\cot(x)$." },
        { "title": "Combine Terms", "content": "$\\dfrac{dy}{dx} = \\dfrac{2}{x} + \\cot(x)$." }
      ],
      "final_answer": "$\\frac{2}{x} + \\cot(x)$",
      "solution_image": ""
    }
  },
  {
    "topic": "Calculus",
    "title": "Derivative of a Logarithmic Function",
    "question": "Find the derivative of the function $f(x) = \\ln(x^2 + 3x + 2)$ with respect to $x$.",
    "question_image": "",
    "options": [
      { "label": "A", "text": "$\\dfrac{1}{x^2 + 3x + 2}$", "is_correct": false },
      { "label": "B", "text": "$\\dfrac{2x + 3}{x^2 + 3x + 2}$", "is_correct": true },
      { "label": "C", "text": "$\\dfrac{2x}{x^2 + 3x + 2}$", "is_correct": false },
      { "label": "D", "text": "$\\dfrac{x + 3}{x^2 + 3x + 2}$", "is_correct": false }
    ],
    "solution": {
      "steps": [
        { "title": "Identify the Rule", "content": "Use $\\frac{d}{dx}[\\ln(u)] = \\frac{1}{u} \\cdot \\frac{du}{dx}$." },
        { "title": "Define u and its Derivative", "content": "$u = x^2 + 3x + 2 \\implies \\frac{du}{dx} = 2x + 3$." },
        { "title": "Substitute into Formula", "content": "$f'(x) = \\dfrac{1}{x^2 + 3x + 2} \\cdot (2x + 3)$." }
      ],
      "final_answer": "$\\frac{2x + 3}{x^2 + 3x + 2}$",
      "solution_image": ""
    }
  },
  {
    "topic": "Calculus",
    "title": "Partial Derivative",
    "question": "Find the partial derivative $\\dfrac{\\partial z}{\\partial x}$ for the function:\n\\[ z = x^3 y^2 + e^{xy} \\]",
    "question_image": "",
    "options": [
      { "label": "A", "text": "$3x^2 y^2 + y e^{xy}$", "is_correct": true },
      { "label": "B", "text": "$2x^3 y + x e^{xy}$", "is_correct": false },
      { "label": "C", "text": "$3x^2 y^2 + e^{xy}$", "is_correct": false },
      { "label": "D", "text": "$x^3 + e^y$", "is_correct": false }
    ],
    "solution": {
      "steps": [
        { "title": "Differentiate the first term", "content": "Treating $y$ as a constant: $\\frac{\\partial}{\\partial x}(x^3 y^2) = 3x^2 y^2$." },
        { "title": "Differentiate the second term", "content": "Using the chain rule: $\\frac{\\partial}{\\partial x}(e^{xy}) = e^{xy} \\cdot \\frac{\\partial}{\\partial x}(xy) = y e^{xy}$." },
        { "title": "Combine Results", "content": "$\\dfrac{\\partial z}{\\partial x} = 3x^2 y^2 + y e^{xy}$." }
      ],
      "final_answer": "$3x^2 y^2 + y e^{xy}$",
      "solution_image": ""
    }
  },
  {
    "topic": "Calculus",
    "title": "Mixed Partial Derivative",
    "question": "Find the mixed partial derivative $\\dfrac{\\partial^2 f}{\\partial x \\partial y}$ for the function $f(x, y) = x^3 y + y^2 \\sin(x)$.",
    "question_image": "",
    "options": [
      { "label": "A", "text": "$3x^2 + 2y \\cos(x)$", "is_correct": true },
      { "label": "B", "text": "$3x^2 - 2y \\cos(x)$", "is_correct": false },
      { "label": "C", "text": "$6xy + 2 \\cos(x)$", "is_correct": false },
      { "label": "D", "text": "$3x^2 + \\cos(x)$", "is_correct": false }
    ],
    "solution": {
      "steps": [
        { "title": "Partial Derivative with respect to y", "content": "$\\frac{\\partial f}{\\partial y} = x^3 + 2y \\sin(x)$." },
        { "title": "Partial Derivative with respect to x", "content": "$\\frac{\\partial}{\\partial x}(x^3 + 2y \\sin(x)) = 3x^2 + 2y \\cos(x)$." }
      ],
      "final_answer": "$3x^2 + 2y \\cos(x)$",
      "solution_image": ""
    }
  },
  {
    "topic": "Calculus",
    "title": "Local Minimum Value of the Function",
    "question": "What is the local minimum value of the function $f(x) = 2x^3 - 9x^2 + 12x - 5$?",
    "question_image": "",
    "options": [
      { "label": "A", "text": "$-1$", "is_correct": true },
      { "label": "B", "text": "0", "is_correct": false },
      { "label": "C", "text": "1", "is_correct": false },
      { "label": "D", "text": "$-5$", "is_correct": false }
    ],
    "solution": {
      "steps": [
        { "title": "Find Critical Points", "content": "$f'(x) = 6x^2 - 18x + 12$. Setting $f'(x) = 0 \\implies x^2 - 3x + 2 = 0 \\implies (x-1)(x-2)=0$. Critical points are $x=1, 2$." },
        { "title": "Second Derivative Test", "content": "$f''(x) = 12x - 18$. At $x=1$, $f''(1)=-6$ (Max). At $x=2$, $f''(2)=6$ (Min)." },
        { "title": "Calculate Minimum Value", "content": "Evaluate $f(2) = 2(8) - 9(4) + 12(2) - 5 = 16 - 36 + 24 - 5 = -1$." }
      ],
      "final_answer": "-1",
      "solution_image": ""
    }
  },
  {
    "topic": "Calculus",
    "title": "Definite Integration",
    "question": "Evaluate the definite integral:\n\\[ \\int_{0}^{1} xe^{x^2} \\, dx \\]",
    "question_image": "",
    "options": [
      { "label": "A", "text": "$\\dfrac{1}{2}(e - 1)$", "is_correct": true },
      { "label": "B", "text": "$e - 1$", "is_correct": false },
      { "label": "C", "text": "$\\dfrac{1}{2}e$", "is_correct": false },
      { "label": "D", "text": "$2(e - 1)$", "is_correct": false }
    ],
    "solution": {
      "steps": [
        { "title": "u-Substitution", "content": "Let $u = x^2 \\implies du = 2x \\, dx \\implies \\frac{1}{2}du = x \\, dx$." },
        { "title": "Change Limits", "content": "If $x=0, u=0$. If $x=1, u=1$." },
        { "title": "Integrate", "content": "$\\frac{1}{2} \\int_0^1 e^u \\, du = \\frac{1}{2} [e^u]_0^1 = \\frac{1}{2}(e^1 - e^0) = \\frac{1}{2}(e - 1)$." }
      ],
      "final_answer": "$\\frac{1}{2}(e - 1)$",
      "solution_image": ""
    }
  },
  {
    "topic": "Calculus",
    "title": "Area of Region Bounded by Curves",
    "question": "Calculate the area of the region bounded by the parabola $y = x^2$ and the line $y = 2x + 3$.",
    "question_image": "",
    "options": [
      { "label": "A", "text": "9.33", "is_correct": false },
      { "label": "B", "text": "10.67", "is_correct": true },
      { "label": "C", "text": "12.00", "is_correct": false },
      { "label": "D", "text": "13.33", "is_correct": false }
    ],
    "solution": {
      "steps": [
        { "title": "Find Intersection Points", "content": "$x^2 = 2x + 3 \\implies x^2 - 2x - 3 = 0 \\implies (x-3)(x+1)=0$. Limits are $x=-1, 3$." },
        { "title": "Set Up Integral", "content": "$A = \\int_{-1}^3 [(2x + 3) - x^2] \\, dx$." },
        { "title": "Evaluate Integral", "content": "$[x^2 + 3x - \\frac{x^3}{3}]_{-1}^3 = (9+9-9) - (1-3+\\frac{1}{3}) = 9 - (-\\frac{5}{3}) = \\frac{32}{3} \\approx 10.67$." }
      ],
      "final_answer": "10.67",
      "solution_image": ""
    }
  },
  {
    "topic": "Calculus",
    "title": "Radius of Curvature Calculation",
    "question": "Find the radius of curvature $\\rho$ for the curve $y = \\dfrac{1}{3}x^3$ at the point where $x = 1$.",
    "question_image": "",
    "options": [
      { "label": "A", "text": "$\\sqrt{2}$", "is_correct": false },
      { "label": "B", "text": "2", "is_correct": false },
      { "label": "C", "text": "$2\\sqrt{2}$", "is_correct": true },
      { "label": "D", "text": "$\\dfrac{1}{2}$", "is_correct": false }
    ],
    "solution": {
      "steps": [
        { "title": "Derivatives", "content": "$y' = x^2$ and $y'' = 2x$." },
        { "title": "Evaluate at x=1", "content": "$y'(1) = 1, y''(1) = 2$." },
        { "title": "Formula Calculation", "content": "$\\rho = \\frac{(1 + (y')^2)^{3/2}}{|y''|} = \\frac{(1+1)^{3/2}}{2} = \\frac{2\\sqrt{2}}{2} = \\sqrt{2}$." }
      ],
      "final_answer": "$\\sqrt{2}$",
      "solution_image": ""
    }
  }, 
  {
    "topic": "Differential Equations",
    "title": "First-Order Separable Diff. Equation",
    "question": "Solve the following first-order separable differential equation given the initial condition $y(0) = 2$:\n\\[ \\dfrac{dy}{dx} = 3x^2 y \\]",
    "question_image": "",
    "options": [
      {
        "label": "A",
        "text": "$y = 2e^{x^3}$",
        "is_correct": true
      },
      {
        "label": "B",
        "text": "$y = e^{3x^2} + 1$",
        "is_correct": false
      },
      {
        "label": "C",
        "text": "$y = 2e^{3x}$",
        "is_correct": false
      },
      {
        "label": "D",
        "text": "$y = x^3 + 2$",
        "is_correct": false
      }
    ],
    "solution": {
      "steps": [
        {
          "title": "Separate the Variables",
          "content": "Rearrange the differential equation to group all $y$ terms on one side and $x$ terms on the other: $\\dfrac{1}{y} \\, dy = 3x^2 \\, dx$."
        },
        {
          "title": "Integrate Both Sides",
          "content": "Integrate both sides of the equation: $\\int \\dfrac{1}{y} \\, dy = \\int 3x^2 \\, dx \\implies \\ln|y| = x^3 + C$."
        },
        {
          "title": "Solve for $y$",
          "content": "Exponentiate both sides to isolate $y$: $e^{\\ln|y|} = e^{x^3 + C} \\implies y = e^C \\cdot e^{x^3}$. Let $A = e^C$ be a new constant: $y = Ae^{x^3}$."
        },
        {
          "title": "Apply the Initial Condition",
          "content": "Use the condition $y(0) = 2$ to find the value of $A$: $2 = Ae^{(0)^3} \\implies 2 = Ae^0 \\implies A = 2$."
        },
        {
          "title": "Final Particular Solution",
          "content": "Substitute $A = 2$ back into the general solution: $y = 2e^{x^3}$."
        }
      ],
      "final_answer": "$y = 2e^{x^3}$",
      "solution_image": ""
    }
  },
  {
    "topic": "Differential Equations",
    "title": "Homogeneous Linear Diff. Equation",
    "question": "What is the general solution to the homogeneous linear differential equation $y'' - 5y' + 6y = 0$?",
    "question_image": "",
    "options": [
      {
        "label": "A",
        "text": "$y = C_1 e^{2x} + C_2 e^{3x}$",
        "is_correct": true
      },
      {
        "label": "B",
        "text": "$y = C_1 e^{-2x} + C_2 e^{-3x}$",
        "is_correct": false
      },
      {
        "label": "C",
        "text": "$y = C_1 \\cos(2x) + C_2 \\sin(3x)$",
        "is_correct": false
      },
      {
        "label": "D",
        "text": "$y = C_1 e^{2x} + C_2 x e^{2x}$",
        "is_correct": false
      }
    ],
    "solution": {
      "steps": [
        {
          "title": "Identify the Characteristic Equation",
          "content": "For a second-order homogeneous linear differential equation with constant coefficients of the form $ay'' + by' + cy = 0$, we assume a solution of the form $y = e^{rx}$. This leads to the characteristic equation: $r^2 - 5r + 6 = 0$."
        },
        {
          "title": "Solve for the Roots ($r$)",
          "content": "Factor the quadratic equation: $(r - 2)(r - 3) = 0$. This gives the distinct real roots $r_1 = 2$ and $r_2 = 3$."
        },
        {
          "title": "Determine the Form of the General Solution",
          "content": "Since the roots are real and distinct, the general solution takes the form: $y = C_1 e^{r_1 x} + C_2 e^{r_2 x}$. Substituting the roots: $y = C_1 e^{2x} + C_2 e^{3x}$."
        }
      ],
      "final_answer": "$y = C_1 e^{2x} + C_2 e^{3x}$",
      "solution_image": ""
    }
  },
  {
    "topic": "Differential Equations",
    "title": "Particular Solution using Undetermined Coefficients",
    "question": "For the non-homogeneous differential equation $y'' + 9y = \\sin(2t)$, what is the correct form for the particular solution $y_p(t)$ using the method of undetermined coefficients?",
    "question_image": "",
    "options": [
      {
        "label": "A",
        "text": "$y_p(t) = A \\sin(2t)$",
        "is_correct": false
      },
      {
        "label": "B",
        "text": "$y_p(t) = At \\sin(2t) + Bt \\cos(2t)$",
        "is_correct": false
      },
      {
        "label": "C",
        "text": "$y_p(t) = A \\sin(2t) + B \\cos(2t)$",
        "is_correct": true
      },
      {
        "label": "D",
        "text": "$y_p(t) = A \\sin(3t) + B \\cos(3t)$",
        "is_correct": false
      }
    ],
    "solution": {
      "steps": [
        {
          "title": "Identify the Non-Homogeneous Term",
          "content": "The non-homogeneous part is $g(t) = \\sin(2t)$. For a trigonometric forcing function of the form $\\sin(kt)$, the standard trial particular solution is: $y_p(t) = A \\sin(kt) + B \\cos(kt)$. Here, $k = 2$."
        },
        {
          "title": "Solve the Homogeneous Equation",
          "content": "The characteristic equation for $y'' + 9y = 0$ is $r^2 + 9 = 0 \\implies r = \\pm 3i$. The complementary solution is $y_c(t) = C_1 \\cos(3t) + C_2 \\sin(3t)$."
        },
        {
          "title": "Check for Resonance",
          "content": "Compare the trial form frequency (2) with the natural frequency (3). Since they do not match, there is no resonance and we do not need to multiply by $t$."
        },
        {
          "title": "Determine Final Form",
          "content": "The correct form remains: $y_p(t) = A \\sin(2t) + B \\cos(2t)$."
        }
      ],
      "final_answer": "$y_p(t) = A \\sin(2t) + B \\cos(2t)$",
      "solution_image": ""
    }
  },
  {
    "topic": "Differential Equations",
    "title": "Solving Separable Differential Equations",
    "question": "Solve the separable differential equation $\\dfrac{dy}{dx} = \\dfrac{y}{x}$ with the initial condition $y(1) = 2$.",
    "question_image": "",
    "options": [
      {
        "label": "A",
        "text": "$y = 2x$",
        "is_correct": true
      },
      {
        "label": "B",
        "text": "$y = x^2 + 1$",
        "is_correct": false
      },
      {
        "label": "C",
        "text": "$y = 2/x$",
        "is_correct": false
      },
      {
        "label": "D",
        "text": "$y = e^{x-1} + 1$",
        "is_correct": false
      }
    ],
    "solution": {
      "steps": [
        {
          "title": "Separate the variables",
          "content": "Rearrange the equation: $\\dfrac{1}{y} \\, dy = \\dfrac{1}{x} \\, dx$."
        },
        {
          "title": "Integrate both sides",
          "content": "Find the antiderivatives: $\\int \\dfrac{1}{y} \\, dy = \\int \\dfrac{1}{x} \\, dx \\implies \\ln|y| = \\ln|x| + C$."
        },
        {
          "title": "Solve for $y$",
          "content": "Exponentiate both sides: $|y| = e^{\\ln|x| + C} \\implies |y| = e^C \\cdot |x|$. This simplifies to $y = C_1 x$."
        },
        {
          "title": "Apply the initial condition",
          "content": "Use $y(1) = 2$: $2 = C_1(1) \\implies C_1 = 2$."
        },
        {
          "title": "Write the final equation",
          "content": "Substitute $C_1 = 2$ back into the general solution: $y = 2x$."
        }
      ],
      "final_answer": "$y = 2x$",
      "solution_image": ""
    }
  },
  {
    "topic": "Differential Equations",
    "title": "Second-Order Linear ODE Solution",
    "question": "Find the general solution to the differential equation $y'' + 9y = 0$.",
    "question_image": "",
    "options": [
      {
        "label": "A",
        "text": "$y = C_1 \\cos(3x) + C_2 \\sin(3x)$",
        "is_correct": true
      },
      {
        "label": "B",
        "text": "$y = C_1 e^{3x} + C_2 e^{-3x}$",
        "is_correct": false
      },
      {
        "label": "C",
        "text": "$y = C_1 \\cos(9x) + C_2 \\sin(9x)$",
        "is_correct": false
      },
      {
        "label": "D",
        "text": "$y = (C_1 + C_2 x) e^{3x}$",
        "is_correct": false
      }
    ],
    "solution": {
      "steps": [
        {
          "title": "Write the Characteristic Equation",
          "content": "For $y'' + 9y = 0$, substitute $y = e^{rx}$ to get: $r^2 + 9 = 0$."
        },
        {
          "title": "Solve for the Roots",
          "content": "$r^2 = -9 \\implies r = \\pm \\sqrt{-9} \\implies r = \\pm 3i$. The roots are purely imaginary complex numbers with $\\alpha = 0$ and $\\beta = 3$."
        },
        {
          "title": "Formulate the General Solution",
          "content": "For complex roots $\\alpha \\pm \\beta i$, the solution is $y = e^{\\alpha x} (C_1 \\cos(\\beta x) + C_2 \\sin(\\beta x))$. Substituting $\\alpha = 0$ and $\\beta = 3$ gives: $y = C_1 \\cos(3x) + C_2 \\sin(3x)$."
        }
      ],
      "final_answer": "$y = C_1 \\cos(3x) + C_2 \\sin(3x)$",
      "solution_image": ""
    }
  },
  {
    "topic": "Linear Algebra",
    "title": "Determinant of a Matrix",
    "question": "Determine the determinant of the matrix\n\\[ \\mathbf{M} = \\begin{bmatrix} 2 & 0 & 1 \\\\ 3 & 1 & 2 \\\\ 0 & 4 & -1 \\end{bmatrix} \\]",
    "question_image": "",
    "options": [
      { "label": "A", "text": "-6", "is_correct": true },
      { "label": "B", "text": "6", "is_correct": false },
      { "label": "C", "text": "-10", "is_correct": false },
      { "label": "D", "text": "14", "is_correct": false }
    ],
    "solution": {
      "steps": [
        { "title": "Set up expansion", "content": "Expanding along the first row: $2 \\begin{vmatrix} 1 & 2 \\\\ 4 & -1 \\end{vmatrix} - 0 \\begin{vmatrix} 3 & 2 \\\\ 0 & -1 \\end{vmatrix} + 1 \\begin{vmatrix} 3 & 1 \\\\ 0 & 4 \\end{vmatrix}$." },
        { "title": "Calculate 2x2 determinants", "content": "$\\begin{vmatrix} 1 & 2 \\\\ 4 & -1 \\end{vmatrix} = -9$, $\\begin{vmatrix} 3 & 2 \\\\ 0 & -1 \\end{vmatrix} = -3$, and $\\begin{vmatrix} 3 & 1 \\\\ 0 & 4 \\end{vmatrix} = 12$." },
        { "title": "Combine results", "content": "$2(-9) - 0(-3) + 1(12) = -18 + 12 = -6$." }
      ],
      "final_answer": "-6",
      "solution_image": ""
    }
  },
  {
    "topic": "Linear Algebra",
    "title": "Matrix Multiplication Calculation",
    "question": "If $A = \\begin{bmatrix} 1 & 2 \\\\ 3 & 4 \\end{bmatrix}$ and $B = \\begin{bmatrix} 0 & 1 \\\\ 1 & 0 \\end{bmatrix}$, what is the resulting matrix $C = AB$?",
    "question_image": "",
    "options": [
      { "label": "A", "text": "$\\begin{bmatrix} 0 & 2 \\\\ 3 & 0 \\end{bmatrix}$", "is_correct": false },
      { "label": "B", "text": "$\\begin{bmatrix} 3 & 4 \\\\ 1 & 2 \\end{bmatrix}$", "is_correct": false },
      { "label": "C", "text": "$\\begin{bmatrix} 2 & 1 \\\\ 4 & 3 \\end{bmatrix}$", "is_correct": true },
      { "label": "D", "text": "$\\begin{bmatrix} 1 & 0 \\\\ 0 & 1 \\end{bmatrix}$", "is_correct": false }
    ],
    "solution": {
      "steps": [
        { "title": "Row 1 calculations", "content": "$C_{11} = (1 \\times 0) + (2 \\times 1) = 2$; $C_{12} = (1 \\times 1) + (2 \\times 0) = 1$." },
        { "title": "Row 2 calculations", "content": "$C_{21} = (3 \\times 0) + (4 \\times 1) = 4$; $C_{22} = (3 \\times 1) + (4 \\times 0) = 3$." },
        { "title": "Form result", "content": "$C = \\begin{bmatrix} 2 & 1 \\\\ 4 & 3 \\end{bmatrix}$." }
      ],
      "final_answer": "$\\begin{bmatrix} 2 & 1 \\\\ 4 & 3 \\end{bmatrix}$",
      "solution_image": ""
    }
  },
  {
    "topic": "Linear Algebra",
    "title": "Inverse of a 2x2 Matrix",
    "question": "Which of the following is the inverse of matrix $A = \\begin{bmatrix} 2 & 5 \\\\ 1 & 3 \\end{bmatrix}$?",
    "question_image": "",
    "options": [
      { "label": "A", "text": "$\\begin{bmatrix} 3 & -5 \\\\ -1 & 2 \\end{bmatrix}$", "is_correct": true },
      { "label": "B", "text": "$\\begin{bmatrix} -3 & 5 \\\\ 1 & -2 \\end{bmatrix}$", "is_correct": false },
      { "label": "C", "text": "$\\begin{bmatrix} 2 & -5 \\\\ -1 & 3 \\end{bmatrix}$", "is_correct": false },
      { "label": "D", "text": "$\\begin{bmatrix} 3 & 5 \\\\ 1 & 2 \\end{bmatrix}$", "is_correct": false }
    ],
    "solution": {
      "steps": [
        { "title": "Calculate Determinant", "content": "$\\text{det}(A) = (2)(3) - (5)(1) = 1$." },
        { "title": "Form Adjugate", "content": "Swap diagonal: $\\begin{bmatrix} 3 & \\dots \\\\ \\dots & 2 \\end{bmatrix}$. Negate off-diagonal: $\\begin{bmatrix} 3 & -5 \\\\ -1 & 2 \\end{bmatrix}$." },
        { "title": "Final Step", "content": "$A^{-1} = \\frac{1}{1} \\begin{bmatrix} 3 & -5 \\\\ -1 & 2 \\end{bmatrix} = \\begin{bmatrix} 3 & -5 \\\\ -1 & 2 \\end{bmatrix}$." }
      ],
      "final_answer": "$\\begin{bmatrix} 3 & -5 \\\\ -1 & 2 \\end{bmatrix}$",
      "solution_image": ""
    }
  },
  {
    "topic": "Linear Algebra",
    "title": "Solving Linear Systems",
    "question": "Consider the following system of linear equations:\n\\[ 2x + 3y = 7 \\]\n\\[ x - 2y = -7 \\]\nWhat is the value of $y$?",
    "question_image": "",
    "options": [
      { "label": "A", "text": "1", "is_correct": false },
      { "label": "B", "text": "2", "is_correct": false },
      { "label": "C", "text": "3", "is_correct": true },
      { "label": "D", "text": "4", "is_correct": false }
    ],
    "solution": {
      "steps": [
        { "title": "Isolate x", "content": "From $x - 2y = -7$, we get $x = 2y - 7$." },
        { "title": "Substitute", "content": "Substitute into first equation: $2(2y - 7) + 3y = 7$." },
        { "title": "Solve for y", "content": "$4y - 14 + 3y = 7 \\implies 7y = 21 \\implies y = 3$." }
      ],
      "final_answer": "3",
      "solution_image": ""
    }
  },
  {
    "topic": "Linear Algebra",
    "title": "Matrix Addition and Transpose",
    "question": "If matrix $A = \\begin{bmatrix} 1 & 2 \\\\ 3 & 4 \\end{bmatrix}$, what is the result of $A + A^T$, where $A^T$ is the transpose of $A$?",
    "question_image": "",
    "options": [
      { "label": "A", "text": "$\\begin{bmatrix} 2 & 4 \\\\ 6 & 8 \\end{bmatrix}$", "is_correct": false },
      { "label": "B", "text": "$\\begin{bmatrix} 2 & 5 \\\\ 5 & 8 \\end{bmatrix}$", "is_correct": true },
      { "label": "C", "text": "$\\begin{bmatrix} 1 & 0 \\\\ 0 & 1 \\end{bmatrix}$", "is_correct": false },
      { "label": "D", "text": "$\\begin{bmatrix} 5 & 5 \\\\ 5 & 5 \\end{bmatrix}$", "is_correct": false }
    ],
    "solution": {
      "steps": [
        { "title": "Find Transpose", "content": "$A^T = \\begin{bmatrix} 1 & 3 \\\\ 2 & 4 \\end{bmatrix}$." },
        { "title": "Matrix Addition", "content": "$\\begin{bmatrix} 1 & 2 \\\\ 3 & 4 \\end{bmatrix} + \\begin{bmatrix} 1 & 3 \\\\ 2 & 4 \\end{bmatrix} = \\begin{bmatrix} 1+1 & 2+3 \\\\ 3+2 & 4+4 \\end{bmatrix} = \\begin{bmatrix} 2 & 5 \\\\ 5 & 8 \\end{bmatrix}$." }
      ],
      "final_answer": "$\\begin{bmatrix} 2 & 5 \\\\ 5 & 8 \\end{bmatrix}$",
      "solution_image": ""
    }
  },
  {
    "topic": "Numerical Methods",
    "title": "Newton’s Method of Root Extraction",
    "question": "A root of the function $f(x) = x^3 - 2x - 5$ is to be estimated using Newton's method. Given an initial guess of $x_0 = 2.0$, what is the value of the first iteration $x_1$?",
    "question_image": "",
    "options": [
      { "label": "A", "text": "2.05", "is_correct": false },
      { "label": "B", "text": "2.10", "is_correct": true },
      { "label": "C", "text": "2.15", "is_correct": false },
      { "label": "D", "text": "2.20", "is_correct": false }
    ],
    "solution": {
      "steps": [
        { "title": "Newton's Method Formula", "content": "The iterative formula is $x_{n+1} = x_n - \\dfrac{f(x_n)}{f'(x_n)}$. For $n=0$: $x_1 = x_0 - \\dfrac{f(x_0)}{f'(x_0)}$." },
        { "title": "Find the Derivative", "content": "The derivative of $f(x) = x^3 - 2x - 5$ is $f'(x) = 3x^2 - 2$." },
        { "title": "Evaluate at x0 = 2.0", "content": "$f(2.0) = 2^3 - 2(2) - 5 = -1.0$. $f'(2.0) = 3(2)^2 - 2 = 10.0$." },
        { "title": "Calculate x1", "content": "$x_1 = 2.0 - \\left( \\dfrac{-1.0}{10.0} \\right) = 2.0 + 0.1 = 2.10$." }
      ],
      "final_answer": "2.10",
      "solution_image": ""
    }
  },
  {
    "topic": "Numerical Methods",
    "title": "Newton-Raphson Method Failure Condition",
    "question": "Under which condition does the Newton-Raphson numerical method for finding roots fail during the computation process?",
    "question_image": "",
    "options": [
      { "label": "A", "text": "When the function is linear", "is_correct": false },
      { "label": "B", "text": "When the initial guess is too close to the actual root", "is_correct": false },
      { "label": "C", "text": "When the function has multiple real roots", "is_correct": false },
      { "label": "D", "text": "When the derivative $f'(x_n)$ is equal to zero at any iteration", "is_correct": true }
    ],
    "solution": {
      "steps": [
        { "title": "Recall the Formula", "content": "The formula is $x_{n+1} = x_n - \\dfrac{f(x_n)}{f'(x_n)}$." },
        { "title": "Identify Mathematical Constraint", "content": "The term involves division by $f'(x_n)$. Division by zero is undefined." },
        { "title": "Geometric Interpretation", "content": "If $f'(x_n) = 0$, the tangent line is horizontal and never intersects the $x$-axis, making the next iteration impossible to calculate." }
      ],
      "final_answer": "D",
      "solution_image": ""
    }
  },
  {
    "topic": "Numerical Methods",
    "title": "Trapezoidal Rule Approximation",
    "question": "Determine the approximate value of the integral $\\int_{0}^{2} x^3 \\, dx$ using the trapezoidal rule with $n = 2$ equal subintervals.",
    "question_image": "",
    "options": [
      { "label": "A", "text": "4", "is_correct": false },
      { "label": "B", "text": "5", "is_correct": true },
      { "label": "C", "text": "6", "is_correct": false },
      { "label": "D", "text": "8", "is_correct": false }
    ],
    "solution": {
      "steps": [
        { "title": "Calculate Step Size", "content": "$\\Delta x = \\dfrac{b - a}{n} = \\dfrac{2 - 0}{2} = 1$." },
        { "title": "Determine Function Values", "content": "$x_0=0, f(0)=0$. $x_1=1, f(1)=1$. $x_2=2, f(2)=8$." },
        { "title": "Apply Formula", "content": "$\\text{Integral} \\approx \\dfrac{\\Delta x}{2} [f(x_0) + 2f(x_1) + f(x_2)] = \\dfrac{1}{2} [0 + 2(1) + 8] = \\dfrac{10}{2} = 5$." }
      ],
      "final_answer": "5",
      "solution_image": ""
    }
  },
  {
    "topic": "Numerical Methods",
    "title": "Simpson’s Rule",
    "question": "Consider the application of Simpson's 1/3 Rule for the numerical integration of a function $f(x)$ over the interval $[a, b]$ using $n$ sub-intervals. Which of the following conditions is strictly required for the method to be valid?",
    "question_image": "",
    "options": [
      { "label": "A", "text": "The number of sub-intervals $n$ must be an even integer.", "is_correct": true },
      { "label": "B", "text": "The function $f(x)$ must be a polynomial of degree 3 or higher.", "is_correct": false },
      { "label": "C", "text": "The step size $h$ must be equal to the total interval width $(b - a)$.", "is_correct": false },
      { "label": "D", "text": "The number of data points $n + 1$ must be an even integer.", "is_correct": false }
    ],
    "solution": {
      "steps": [
        { "title": "Explanation", "content": "Simpson's 1/3 Rule fits a quadratic parabola through sets of three consecutive points. Because each quadratic segment covers two sub-intervals, the total number of sub-intervals $n$ must be even." },
        { "title": "Data Point Count", "content": "If $n$ is even, the number of points $n+1$ must be odd." }
      ],
      "final_answer": "A",
      "solution_image": ""
    }
  },
  {
    "topic": "Numerical Methods",
    "title": "Forward Rectangular Rule Approximation",
    "question": "Calculate the approximate area under the curve $f(x) = x^2$ from $x=0$ to $x=2$ using the Forward Rectangular Rule (Left Riemann Sum) with $n=2$ subintervals.",
    "question_image": "",
    "options": [
      { "label": "A", "text": "1", "is_correct": true },
      { "label": "B", "text": "2", "is_correct": false },
      { "label": "C", "text": "3", "is_correct": false },
      { "label": "D", "text": "5", "is_correct": false }
    ],
    "solution": {
      "steps": [
        { "title": "Step Size", "content": "$\\Delta x = \\frac{2-0}{2} = 1$." },
        { "title": "Identify Rectangles", "content": "Forward rule uses left endpoints: $x_0=0$ and $x_1=1$." },
        { "title": "Calculate Area", "content": "$Area \\approx \\Delta x [f(0) + f(1)] = 1 [0^2 + 1^2] = 1$." }
      ],
      "final_answer": "1",
      "solution_image": ""
    }
  },
  {
    "topic": "Numerical Methods",
    "title": "Forward Rectangular Rule Height",
    "question": "In the Forward Rectangular Rule for numerical integration over an interval $[x_i, x_{i+1}]$, the height of the rectangle is determined by which value?",
    "question_image": "",
    "options": [
      { "label": "A", "text": "The function value at the right endpoint, $f(x_{i+1})$", "is_correct": false },
      { "label": "B", "text": "The function value at the left endpoint, $f(x_i)$", "is_correct": true },
      { "label": "C", "text": "The average value, $[f(x_i) + f(x_{i+1})]/2$", "is_correct": false },
      { "label": "D", "text": "The function value at the midpoint, $f((x_i + x_{i+1})/2)$", "is_correct": false }
    ],
    "solution": {
      "steps": [
        { "title": "Definition", "content": "The Forward Rectangular Rule (also known as the Left Riemann Sum) uses the value of the function at the beginning (left side) of each subinterval to define the height of the rectangle." }
      ],
      "final_answer": "B",
      "solution_image": ""
    }
  }


        
    ],











    'stats': [
  {
    "topic": "Probability Distributions",
    "title": "Permutations and Combinations",
    "question": "A design team consists of 7 mechanical engineers. If a sub-committee of 3 engineers is to be formed to review a specific project, how many unique combinations of engineers can be chosen?",
    "question_image": "",
    "options": [
      { "label": "A", "text": "21", "is_correct": false },
      { "label": "B", "text": "35", "is_correct": true },
      { "label": "C", "text": "210", "is_correct": false },
      { "label": "D", "text": "840", "is_correct": false }
    ],
    "solution": {
      "steps": [
        { "title": "Identify Formula", "content": "To find the number of unique combinations where order does not matter, use the combination formula: $C(n, r) = \\binom{n}{r} = \\frac{n!}{r!(n-r)!}$." },
        { "title": "Substitute Values", "content": "Given $n = 7$ and $r = 3$: $\\binom{7}{3} = \\frac{7 \\times 6 \\times 5}{3 \\times 2 \\times 1} = 7 \\times 5 = 35$." }
      ],
      "final_answer": "35",
      "solution_image": ""
    }
  },
  {
    "topic": "Probability Distributions",
    "title": "Probability of Drawing Specific Colored Balls",
    "question": "A bag contains 6 white and 4 red balls. Three balls are drawn at random. What is the probability that one ball is red and the other two are white?",
    "question_image": "",
    "options": [
      { "label": "A", "text": "7/12", "is_correct": false },
      { "label": "B", "text": "1/2", "is_correct": true },
      { "label": "C", "text": "3/10", "is_correct": false },
      { "label": "D", "text": "1/4", "is_correct": false }
    ],
    "solution": {
      "steps": [
        { "title": "Determine Total Outcomes", "content": "Total balls = 10. Ways to draw 3: $\\binom{10}{3} = \\frac{10 \\times 9 \\times 8}{3 \\times 2 \\times 1} = 120$." },
        { "title": "Determine Favorable Outcomes", "content": "Ways to choose 1 red: $\\binom{4}{1} = 4$. Ways to choose 2 white: $\\binom{6}{2} = 15$. Total = $4 \\times 15 = 60$." },
        { "title": "Calculate Probability", "content": "$P = \\frac{60}{120} = \\frac{1}{2}$." }
      ],
      "final_answer": "1/2",
      "solution_image": ""
    }
  },
  {
    "topic": "Probability Distributions",
    "title": "Probability of Independent Events",
    "question": "The probability of S, G and M passing a test is 60%, 40% and 20% respectively. What is the probability that S and G will pass the test and M will not?",
    "question_image": "",
    "options": [
      { "label": "A", "text": "38.4%", "is_correct": false },
      { "label": "B", "text": "60%", "is_correct": false },
      { "label": "C", "text": "4.8%", "is_correct": false },
      { "label": "D", "text": "19.2%", "is_correct": true }
    ],
    "solution": {
      "steps": [
        { "title": "Identify Probabilities", "content": "$P(S) = 0.6, P(G) = 0.4, P(M) = 0.2$." },
        { "title": "Calculate Complement", "content": "Probability of M not passing: $P(M') = 1 - 0.2 = 0.8$." },
        { "title": "Calculate Joint Probability", "content": "$P = 0.6 \\times 0.4 \\times 0.8 = 0.192$." }
      ],
      "final_answer": "19.2%",
      "solution_image": ""
    }
  },
  {
    "topic": "Probability Distributions",
    "title": "Continuous Uniform Distribution",
    "question": "A random variable $X$ is uniformly distributed over the interval $[15, 45]$. What is the probability that $X$ is between 20 and 35?",
    "question_image": "",
    "options": [
      { "label": "A", "text": "0.3333", "is_correct": false },
      { "label": "B", "text": "0.5000", "is_correct": true },
      { "label": "C", "text": "0.2500", "is_correct": false },
      { "label": "D", "text": "0.6667", "is_correct": false }
    ],
    "solution": {
      "steps": [
        { "title": "Find the PDF Value", "content": "For interval $[15, 45]$, the height $k = 1 / (45 - 15) = 1/30$." },
        { "title": "Calculate Probability", "content": "$P(20 \\le X \\le 35) = \\text{Area} = (1/30) \\times (35 - 20) = 0.5$." }
      ],
      "final_answer": "0.5000",
      "solution_image": ""
    }
  },
  {
    "topic": "Probability Distributions",
    "title": "Conditional Probability",
    "question": "A structural component has a surface crack probability $P(A)= 0.12$ and internal void probability $P(B) = 0.08$. If $P(A \\cap B) = 0.03$, what is the probability of an internal void given a surface crack is found?",
    "question_image": "",
    "options": [
      { "label": "A", "text": "0.25", "is_correct": true },
      { "label": "B", "text": "0.375", "is_correct": false },
      { "label": "C", "text": "0.17", "is_correct": false },
      { "label": "D", "text": "0.03", "is_correct": false }
    ],
    "solution": {
      "steps": [
        { "title": "Apply Formula", "content": "$P(B|A) = \\frac{P(A \\cap B)}{P(A)}$." },
        { "title": "Perform Calculation", "content": "$P(B|A) = 0.03 / 0.12 = 1/4 = 0.25$." }
      ],
      "final_answer": "0.25",
      "solution_image": ""
    }
  },
  {
    "topic": "Probability Distributions",
    "title": "Bayes' Theorem",
    "question": "Machine A (60% output) has a 2% defect rate. Machine B (40% output) has a 5% defect rate. If a component is defective, what is the probability it was from Machine B?",
    "question_image": "",
    "options": [
      { "label": "A", "text": "0.400", "is_correct": false },
      { "label": "B", "text": "0.500", "is_correct": false },
      { "label": "C", "text": "0.625", "is_correct": true },
      { "label": "D", "text": "0.032", "is_correct": false }
    ],
    "solution": {
      "steps": [
        { "title": "Total Probability of Defect", "content": "$P(D) = (0.60)(0.02) + (0.40)(0.05) = 0.032$." },
        { "title": "Apply Bayes' Theorem", "content": "$P(B|D) = \\frac{P(B)P(D|B)}{P(D)} = \\frac{0.020}{0.032} = 0.625$." }
      ],
      "final_answer": "0.625",
      "solution_image": ""
    }
  },
  {
    "topic": "Probability Distributions",
    "title": "Normal Distribution",
    "question": "Tensile strength is normally distributed with $\\mu = 450$ MPa and $\\sigma = 20$ MPa. Find the probability strength is between 430 MPa and 470 MPa.",
    "question_image": "",
    "options": [
      { "label": "A", "text": "0.3413", "is_correct": false },
      { "label": "B", "text": "0.6826", "is_correct": true },
      { "label": "C", "text": "0.8413", "is_correct": false },
      { "label": "D", "text": "0.9544", "is_correct": false }
    ],
    "solution": {
      "steps": [
        { "title": "Calculate z-scores", "content": "$z_1 = (430-450)/20 = -1$ and $z_2 = (470-450)/20 = 1$." },
        { "title": "Apply Empirical Rule", "content": "For a normal distribution, the area within $\\pm 1\\sigma$ is $0.6826$." }
      ],
      "final_answer": "0.6826",
      "solution_image": ""
    }
  },
  {
    "topic": "Probability Distributions",
    "title": "Binomial Distribution",
    "question": "Probability of a defect is $p = 0.05$. In a sample of 10 components, what is the probability exactly 2 are defective?",
    "question_image": "",
    "options": [
      { "label": "A", "text": "0.0115", "is_correct": false },
      { "label": "B", "text": "0.0746", "is_correct": true },
      { "label": "C", "text": "0.1937", "is_correct": false },
      { "label": "D", "text": "0.2314", "is_correct": false }
    ],
    "solution": {
      "steps": [
        { "title": "Binomial Formula", "content": "$P(X = k) = \\binom{n}{k} p^k (1-p)^{n-k}$ with $n=10, k=2, p=0.05$." },
        { "title": "Calculate", "content": "$\\binom{10}{2}(0.05)^2(0.95)^8 = 45 \\times 0.0025 \\times 0.6634 \\approx 0.0746$." }
      ],
      "final_answer": "0.0746",
      "solution_image": ""
    }
  },
  {
    "topic": "Probability Distributions",
    "title": "Yield Strength Normal Distribution",
    "question": "Steel yield strength follows $\\mu = 400$ MPa, $\\sigma = 20$ MPa. Find the strength value below which 5% of samples fall.",
    "question_image": "",
    "options": [
      { "label": "A", "text": "340.5 MPa", "is_correct": false },
      { "label": "B", "text": "367.1 MPa", "is_correct": true },
      { "label": "C", "text": "380.0 MPa", "is_correct": false },
      { "label": "D", "text": "432.9 MPa", "is_correct": false }
    ],
    "solution": {
      "steps": [
        { "title": "Determine z-score", "content": "For the 5th percentile, $z \\approx -1.645$." },
        { "title": "Calculate x", "content": "$x = \\mu + z\\sigma = 400 + (-1.645 \\times 20) = 367.1$ MPa." }
      ],
      "final_answer": "367.1 MPa",
      "solution_image": ""
    }
  },
  {
    "topic": "Probability Distributions",
    "title": "Probability of Guessing Quiz Answers",
    "question": "A quiz has 5 questions with 4 possible answers each. If guessing randomly, what is the probability of getting at least one correct?",
    "question_image": "",
    "options": [
      { "label": "A", "text": "0.2500", "is_correct": false },
      { "label": "B", "text": "0.7627", "is_correct": true },
      { "label": "C", "text": "0.2373", "is_correct": false },
      { "label": "D", "text": "0.8000", "is_correct": false }
    ],
    "solution": {
      "steps": [
        { "title": "Use Complement Rule", "content": "$P(\\text{at least one}) = 1 - P(\\text{all incorrect})$." },
        { "title": "Calculate", "content": "$P(\\text{all incorrect}) = (0.75)^5 \\approx 0.2373$. $P = 1 - 0.2373 = 0.7627$." }
      ],
      "final_answer": "0.7627",
      "solution_image": ""
    }
  },

  {
    "topic": "Measures of Central Tendencies and Dispersions",
    "title": "Calculating New Average Student Weight",
    "question": "The average weight of 20 students in a group is 54 kg. If 12 students of average weight 52 kg join the group and 7 students of average weight 56 kg leave the group, then what will be the average weight (in kg) of the remaining students in the group?",
    "question_image": "",
    "options": [
      { "label": "A", "text": "53.84", "is_correct": false },
      { "label": "B", "text": "51.96", "is_correct": false },
      { "label": "C", "text": "52.48", "is_correct": false },
      { "label": "D", "text": "54.24", "is_correct": true }
    ],
    "solution": {
      "steps": [
        { "title": "Calculate Weights", "content": "Initial weight: $20 \\times 54 = 1080$ kg. Added weight: $12 \\times 52 = 624$ kg. Removed weight: $7 \\times 56 = 392$ kg." },
        { "title": "New Total Weight", "content": "New Total = $1080 + 624 - 392 = 1312$ kg." },
        { "title": "Final Calculation", "content": "Remaining students = $20 + 12 - 7 = 25$. Average = $1312 / 25 = 54.24$ kg." }
      ],
      "final_answer": "54.24",
      "solution_image": ""
    }
  },
  {
    "topic": "Measures of Central Tendencies and Dispersions",
    "title": "Finding the Tenth Number",
    "question": "The average of nine numbers is 60, that of the first five numbers is 55 and the next three is 65. The ninth number is 10 less than the tenth number. Then, tenth number is:",
    "question_image": "",
    "options": [
      { "label": "A", "text": "80", "is_correct": true },
      { "label": "B", "text": "70", "is_correct": false },
      { "label": "C", "text": "75", "is_correct": false },
      { "label": "D", "text": "85", "is_correct": false }
    ],
    "solution": {
      "steps": [
        { "title": "Calculate Totals", "content": "Sum of 9 numbers = $9 \\times 60 = 540$. Sum of first 8 = $(5 \\times 55) + (3 \\times 65) = 275 + 195 = 470$." },
        { "title": "Find 9th and 10th", "content": "9th number = $540 - 470 = 70$. Since 9th is 10 less than 10th: $x - 10 = 70 \\implies x = 80$." }
      ],
      "final_answer": "80",
      "solution_image": ""
    }
  },
  {
    "topic": "Measures of Central Tendencies and Dispersions",
    "title": "Weighted Mean",
    "question": "An engineer combines three batches of concrete: Batch A (50 units) at 3000 psi, Batch B (30 units) at 3500 psi, and Batch C (20 units) at 3200 psi. What is the weighted mean strength of the total 100 units?",
    "question_image": "",
    "options": [
      { "label": "A", "text": "3190 psi", "is_correct": true },
      { "label": "B", "text": "3233 psi", "is_correct": false },
      { "label": "C", "text": "3250 psi", "is_correct": false },
      { "label": "D", "text": "3150 psi", "is_correct": false }
    ],
    "solution": {
      "steps": [
        { "title": "Weighted Sum", "content": "Sum = $(50 \\times 3000) + (30 \\times 3500) + (20 \\times 3200) = 319,000$." },
        { "title": "Calculate Mean", "content": "Weighted Mean = $319,000 / 100 = 3190$ psi." }
      ],
      "final_answer": "3190 psi",
      "solution_image": ""
    }
  },
  {
    "topic": "Measures of Central Tendencies and Dispersions",
    "title": "Finding Unknown Value from Median",
    "question": "If the median of the numbers 9, 15, 1, 15, 14, 9, 4 and X is 11, find X.",
    "question_image": "",
    "options": [
      { "label": "A", "text": "12", "is_correct": false },
      { "label": "B", "text": "11", "is_correct": false },
      { "label": "C", "text": "10", "is_correct": false },
      { "label": "D", "text": "13", "is_correct": true }
    ],
    "solution": {
      "steps": [
        { "title": "Arrange Known Data", "content": "Sorted known: 1, 4, 9, 9, 14, 15, 15. For $n=8$, Median = average of 4th and 5th terms." },
        { "title": "Solve for X", "content": "To get median 11: $(9 + X) / 2 = 11 \\implies 9 + X = 22 \\implies X = 13$." }
      ],
      "final_answer": "13",
      "solution_image": ""
    }
  },
  {
    "topic": "Measures of Central Tendencies and Dispersions",
    "title": "Variance",
    "question": "A discrete random variable X has: $P(X = 1) = 0.2$, $P(X = 2) = 0.5$, and $P(X = 3) = 0.3$. Calculate the variance $\\sigma^2$.",
    "question_image": "",
    "options": [
      { "label": "A", "text": "0.49", "is_correct": true },
      { "label": "B", "text": "2.10", "is_correct": false },
      { "label": "C", "text": "0.70", "is_correct": false },
      { "label": "D", "text": "0.81", "is_correct": false }
    ],
    "solution": {
      "steps": [
        { "title": "Expected Value E[X]", "content": "$E[X] = (1 \\cdot 0.2) + (2 \\cdot 0.5) + (3 \\cdot 0.3) = 2.1$." },
        { "title": "E[X^2] and Variance", "content": "$E[X^2] = (1^2 \\cdot 0.2) + (4 \\cdot 0.5) + (9 \\cdot 0.3) = 4.9$. $\\sigma^2 = 4.9 - (2.1)^2 = 0.49$." }
      ],
      "final_answer": "0.49",
      "solution_image": ""
    }
  },
  {
    "topic": "Measures of Central Tendencies and Dispersions",
    "title": "Sample Standard Deviation",
    "question": "Calculate the sample standard deviation ($s$) for tensile strength measurements: 12.1, 12.5, 12.2, 12.4, and 12.3 MPa.",
    "question_image": "",
    "options": [
      { "label": "A", "text": "0.025 MPa", "is_correct": false },
      { "label": "B", "text": "0.141 MPa", "is_correct": false },
      { "label": "C", "text": "0.158 MPa", "is_correct": true },
      { "label": "D", "text": "0.126 MPa", "is_correct": false }
    ],
    "solution": {
      "steps": [
        { "title": "Find Mean and Sum of Squares", "content": "$\\bar{x} = 12.3$. $\\sum(x_i - \\bar{x})^2 = 0.04+0.04+0.01+0.01+0 = 0.10$." },
        { "title": "Calculate Standard Deviation", "content": "$s^2 = 0.10 / (5-1) = 0.025$. $s = \\sqrt{0.025} \\approx 0.158$." }
      ],
      "final_answer": "0.158 MPa",
      "solution_image": ""
    }
  },
  {
    "topic": "Measures of Central Tendencies and Dispersions",
    "title": "Coefficient of Variation",
    "question": "Calculate the coefficient of variation (CV) for the sample data set: {40, 45, 50, 55, 60}.",
    "question_image": "",
    "options": [
      { "label": "A", "text": "11.2%", "is_correct": false },
      { "label": "B", "text": "12.5%", "is_correct": false },
      { "label": "C", "text": "17.7%", "is_correct": false },
      { "label": "D", "text": "15.8%", "is_correct": true }
    ],
    "solution": {
      "steps": [
        { "title": "Mean and Std Dev", "content": "$\\bar{x} = 50$. $s = \\sqrt{250/4} = 7.906$." },
        { "title": "Calculate CV", "content": "$CV = (7.906 / 50) \\times 100\\% \\approx 15.8\\%$." }
      ],
      "final_answer": "15.8%",
      "solution_image": ""
    }
  },
  {
    "topic": "Measures of Central Tendencies and Dispersions",
    "title": "Confidence Intervals",
    "question": "For $n = 16$, $\\bar{x} = 35.0$, and $s = 1.2$, determine the 95% confidence interval for the population mean (assume normal distribution).",
    "question_image": "",
    "options": [
      { "label": "A", "text": "35.0 ± 0.160", "is_correct": false },
      { "label": "B", "text": "35.0 ± 0.480", "is_correct": false },
      { "label": "C", "text": "35.0 ± 0.639", "is_correct": true },
      { "label": "D", "text": "35.0 ± 2.557", "is_correct": false }
    ],
    "solution": {
      "steps": [
        { "title": "Find t-value and SE", "content": "$df = 15, t_{0.025,15} = 2.131$. Standard Error $SE = 1.2 / \\sqrt{16} = 0.3$." },
        { "title": "Margin of Error", "content": "$E = 2.131 \\times 0.3 = 0.6393$." }
      ],
      "final_answer": "35.0 ± 0.639",
      "solution_image": ""
    }
  },
  {
    "topic": "Measures of Central Tendencies and Dispersions",
    "title": "Impact of Outliers on Measures",
    "question": "In the data set {15, 18, 18, 20, 22, 25, 30, 95}, which measure of central tendency is most significantly affected by the outlier 95?",
    "question_image": "",
    "options": [
      { "label": "A", "text": "Median", "is_correct": false },
      { "label": "B", "text": "Mode", "is_correct": false },
      { "label": "C", "text": "Mean", "is_correct": true },
      { "label": "D", "text": "Geometric Mean", "is_correct": false }
    ],
    "solution": {
      "steps": [
        { "title": "Analyze Sensitivity", "content": "The mean incorporates the magnitude of every value. A large outlier pulls the sum and the average significantly higher than other measures like median or mode." }
      ],
      "final_answer": "Mean",
      "solution_image": ""
    }
  },
  {
    "topic": "Expected Value",
    "title": "Expected Value of a Discrete Function",
    "question": "The number of defects $X$ in a turbine blade follows a discrete distribution where $P(X = 0) = 0.75$, $P(X = 1) = 0.15$, and $P(X = 2) = 0.10$. What is the expected value $E[X]$ of the number of defects per blade?",
    "question_image": "",
    "options": [
      { "label": "A", "text": "0.25", "is_correct": false },
      { "label": "B", "text": "0.35", "is_correct": true },
      { "label": "C", "text": "0.45", "is_correct": false },
      { "label": "D", "text": "1.00", "is_correct": false }
    ],
    "solution": {
      "steps": [
        { "title": "Identify Formula", "content": "The expected value for a discrete random variable is the weighted average: $E[X] = \\sum_{i} x_i \\cdot P(x_i)$." },
        { "title": "Perform Calculation", "content": "$E[X] = (0 \\cdot 0.75) + (1 \\cdot 0.15) + (2 \\cdot 0.10) = 0 + 0.15 + 0.20 = 0.35$." }
      ],
      "final_answer": "0.35",
      "solution_image": ""
    }
  },
  {
    "topic": "Expected Value",
    "title": "Expected Value of a Continuous Function",
    "question": "A continuous random variable $X$ has a probability density function $f(x) = \\frac{3}{8}x^2$ for $0 \\le x \\le 2$ and $f(x) = 0$ elsewhere. Determine the expected value $E[X]$.",
    "question_image": "",
    "options": [
      { "label": "A", "text": "1.0", "is_correct": false },
      { "label": "B", "text": "1.2", "is_correct": false },
      { "label": "C", "text": "1.5", "is_correct": true },
      { "label": "D", "text": "1.8", "is_correct": false }
    ],
    "solution": {
      "steps": [
        { "title": "Set up the Integral", "content": "For a continuous variable, $E[X] = \\int_{-\\infty}^{\\infty} x f(x) dx$. Here, $E[X] = \\int_{0}^{2} x (\\frac{3}{8}x^2) dx = \\int_{0}^{2} \\frac{3}{8}x^3 dx$." },
        { "title": "Evaluate Integral", "content": "Using the power rule: $[\\frac{3}{32}x^4]_{0}^{2} = \\frac{3}{32}(16 - 0) = \\frac{48}{32} = 1.5$." }
      ],
      "final_answer": "1.5",
      "solution_image": ""
    }
  },
  {
    "topic": "Expected Value",
    "title": "Expected Profit Calculation",
    "question": "A construction company is bidding on a contract. There is a 25% chance they will win the contract, resulting in a profit of 120,000. If they lose, they incur a loss of 10,000 for bid preparation. What is the expected profit?",
    "question_image": "",
    "options": [
      { "label": "A", "text": "22,500", "is_correct": true },
      { "label": "B", "text": "27,500", "is_correct": false },
      { "label": "C", "text": "30,000", "is_correct": false },
      { "label": "D", "text": "32,500", "is_correct": false }
    ],
    "solution": {
      "steps": [
        { "title": "Identify Outcomes", "content": "Win: Profit = 120,000, $P = 0.25$. Lose: Profit = -10,000, $P = 0.75$." },
        { "title": "Calculate Expected Value", "content": "$E(X) = (120,000 \\times 0.25) + (-10,000 \\times 0.75) = 30,000 - 7,500 = 22,500$." }
      ],
      "final_answer": "22,500",
      "solution_image": ""
    }
  },
  {
    "topic": "Expected Value",
    "title": "Linearity of Expectation Calculation",
    "question": "Given two independent random variables $X$ and $Y$ with $E[X] = 12$ and $E[Y] = 8$. What is the expected value of $Z = 4X - 2Y + 5$?",
    "question_image": "",
    "options": [
      { "label": "A", "text": "37", "is_correct": false },
      { "label": "B", "text": "43", "is_correct": true },
      { "label": "C", "text": "48", "is_correct": false },
      { "label": "D", "text": "53", "is_correct": false }
    ],
    "solution": {
      "steps": [
        { "title": "Apply Property", "content": "The expectation is linear: $E[aX + bY + c] = aE[X] + bE[Y] + c$." },
        { "title": "Substitute and Solve", "content": "$E[Z] = 4(12) - 2(8) + 5 = 48 - 16 + 5 = 37$." }
      ],
      "final_answer": "43",
      "solution_image": ""
    }
  },
  {
    "topic": "Expected Value",
    "title": "Calculating Expected Profit per Component",
    "question": "A process has a 5% defect rate. Functional components yield $50 profit; defective ones lose $150. What is the expected profit per component?",
    "question_image": "",
    "options": [
      { "label": "A", "text": "$35.00", "is_correct": false },
      { "label": "B", "text": "$40.00", "is_correct": true },
      { "label": "C", "text": "$45.00", "is_correct": false },
      { "label": "D", "text": "$47.50", "is_correct": false }
    ],
    "solution": {
      "steps": [
        { "title": "Identify Probabilities", "content": "$P(\\text{Defective}) = 0.05$ (Loss = 150), $P(\\text{Functional}) = 0.95$ (Profit = 50)." },
        { "title": "Calculate", "content": "$E[X] = (0.95 \\times 50) + (0.05 \\times -150) = 47.50 - 7.50 = 40.00$." }
      ],
      "final_answer": "40.00",
      "solution_image": ""
    }
  },
  {
    "topic": "Expected Value",
    "title": "Expectation of Linear Transformations",
    "question": "A sensor has $E[X] = 450$ hours. A new life $Y$ is given by $Y = 1.2X + 100$. What is the expected life $E[Y]$?",
    "question_image": "",
    "options": [
      { "label": "A", "text": "440 hours", "is_correct": false },
      { "label": "B", "text": "540 hours", "is_correct": false },
      { "label": "C", "text": "640 hours", "is_correct": true },
      { "label": "D", "text": "650 hours", "is_correct": false }
    ],
    "solution": {
      "steps": [
        { "title": "Linear Formula", "content": "$E[aX + b] = aE[X] + b$." },
        { "title": "Calculation", "content": "$E[Y] = 1.2(450) + 100 = 540 + 100 = 640$." }
      ],
      "final_answer": "640",
      "solution_image": ""
    }
  },
  {
    "topic": "Expected Value",
    "title": "Expected Value of Binomial Distribution",
    "question": "If the probability of a seal failing a test is 0.02 and 500 seals are tested, what is the expected number of failures?",
    "question_image": "",
    "options": [
      { "label": "A", "text": "2 seals", "is_correct": false },
      { "label": "B", "text": "5 seals", "is_correct": false },
      { "label": "C", "text": "10 seals", "is_correct": true },
      { "label": "D", "text": "20 seals", "is_correct": false }
    ],
    "solution": {
      "steps": [
        { "title": "Binomial Formula", "content": "For a binomial distribution, the expected value is $E[X] = n \\cdot p$." },
        { "title": "Calculation", "content": "$E[X] = 500 \\cdot 0.02 = 10$." }
      ],
      "final_answer": "10",
      "solution_image": ""
    }
  },
  {
    "topic": "Regression and Curve Fitting",
    "title": "Least-squares Linear Regression",
    "question": "A researcher collects the following data points for two variables, $x$ and $y$: $(1, 2), (2, 4), (3, 5), (4, 4), (5, 5)$. What is the slope, $b$, of the least-squares linear regression equation $\\hat{y} = a + bx$?",
    "question_image": "",
    "options": [
      { "label": "A", "text": "0.4", "is_correct": false },
      { "label": "B", "text": "0.6", "is_correct": true },
      { "label": "C", "text": "0.8", "is_correct": false },
      { "label": "D", "text": "1.2", "is_correct": false }
    ],
    "solution": {
      "steps": [
        { "title": "Calculate Sums", "content": "For $n=5$: $\\sum x = 15$, $\\sum y = 20$, $\\sum x^2 = 55$, and $\\sum xy = 66$." },
        { "title": "Apply Slope Formula", "content": "$b = \\frac{n\\sum xy - (\\sum x)(\\sum y)}{n\\sum x^2 - (\\sum x)^2} = \\frac{5(66) - (15)(20)}{5(55) - (15)^2} = \\frac{330 - 300}{275 - 225} = \\frac{30}{50} = 0.6$." }
      ],
      "final_answer": "0.6",
      "solution_image": ""
    }
  },
  {
    "topic": "Regression and Curve Fitting",
    "title": "Sample Correlation Coefficient",
    "question": "A set of $n = 5$ data points $(x, y)$ is collected: $(1, 2), (2, 3), (3, 5), (4, 4),$ and $(5, 6)$. Determine the sample correlation coefficient $r$ for this data set.",
    "question_image": "",
    "options": [
      { "label": "A", "text": "0.81", "is_correct": false },
      { "label": "B", "text": "0.90", "is_correct": true },
      { "label": "C", "text": "0.95", "is_correct": false },
      { "label": "D", "text": "0.85", "is_correct": false }
    ],
    "solution": {
      "steps": [
        { "title": "Calculate Sums", "content": "$\\sum x = 15, \\sum y = 20, \\sum x^2 = 55, \\sum y^2 = 90, \\sum xy = 69$." },
        { "title": "Apply Formula", "content": "$r = \\frac{5(69) - (15)(20)}{\\sqrt{[5(55) - 15^2][5(90) - 20^2]}} = \\frac{45}{\\sqrt{50 \\times 50}} = \\frac{45}{50} = 0.90$." }
      ],
      "final_answer": "0.90",
      "solution_image": ""
    }
  },
  {
    "topic": "Regression and Curve Fitting",
    "title": "Calculating Linear Regression Residuals",
    "question": "A linear regression model is developed as $\\hat{y} = 3.5x + 10.2$. For an observed data point at $(5, 25)$, what is the value of the residual?",
    "question_image": "",
    "options": [
      { "label": "A", "text": "-2.7", "is_correct": true },
      { "label": "B", "text": "2.7", "is_correct": false },
      { "label": "C", "text": "1.5", "is_correct": false },
      { "label": "D", "text": "27.7", "is_correct": false }
    ],
    "solution": {
      "steps": [
        { "title": "Calculate Predicted Value", "content": "Substitute $x=5$ into $\\hat{y} = 3.5(5) + 10.2 = 17.5 + 10.2 = 27.7$." },
        { "title": "Calculate Residual", "content": "Residual = $y - \\hat{y} = 25 - 27.7 = -2.7$." }
      ],
      "final_answer": "-2.7",
      "solution_image": ""
    }
  },
  {
    "topic": "Regression and Curve Fitting",
    "title": "Least Squares Criterion Definition",
    "question": "The 'least squares' criterion used in linear regression analysis refers to the minimization of which of the following quantities?",
    "question_image": "",
    "options": [
      { "label": "A", "text": "The sum of the absolute residuals", "is_correct": false },
      { "label": "B", "text": "The sum of the squared horizontal distances from points to the line", "is_correct": false },
      { "label": "C", "text": "The sum of the squared vertical distances from points to the line", "is_correct": true },
      { "label": "D", "text": "The product of the residuals", "is_correct": false }
    ],
    "solution": {
      "steps": [
        { "title": "Define Residuals", "content": "A residual is the vertical distance between an observed point $y_i$ and the predicted line $\\hat{y}_i$." },
        { "title": "Define Criterion", "content": "Ordinary Least Squares minimizes the sum of squared residuals: $SSE = \\sum (y_i - \\hat{y}_i)^2$." }
      ],
      "final_answer": "The sum of the squared vertical distances from points to the line",
      "solution_image": ""
    }
  },
  {
    "topic": "Regression and Curve Fitting",
    "title": "Least-Squares Regression Slope Calculation",
    "question": "For a dataset with $n = 5$, $\\sum x = 15$, $\\sum y = 30$, $\\sum xy = 110$, and $\\sum x^2 = 55$, calculate the slope $b$ of the least-squares regression line $y = a + bx$.",
    "question_image": "",
    "options": [
      { "label": "A", "text": "1.0", "is_correct": false },
      { "label": "B", "text": "1.5", "is_correct": false },
      { "label": "C", "text": "2.0", "is_correct": true },
      { "label": "D", "text": "2.5", "is_correct": false }
    ],
    "solution": {
      "steps": [
        { "title": "Substitute Values", "content": "$b = \\frac{5(110) - (15)(30)}{5(55) - (15)^2}$." },
        { "title": "Calculate Result", "content": "$b = \\frac{550 - 450}{275 - 225} = \\frac{100}{50} = 2.0$." }
      ],
      "final_answer": "2.0",
      "solution_image": ""
    }
  },
  {
    "topic": "Regression and Curve Fitting",
    "title": "Minimization in Least Squares Method",
    "question": "The method of least squares is used in linear regression to determine the best-fit line. Which of the following quantities is minimized by this method?",
    "question_image": "",
    "options": [
      { "label": "A", "text": "$\\sum(y_i - \\bar{y})^2$", "is_correct": false },
      { "label": "B", "text": "$\\sum(y_i - \\hat{y}_i)^2$", "is_correct": true },
      { "label": "C", "text": "$\\sum(\\hat{y}_i - \\bar{y})^2$", "is_correct": false },
      { "label": "D", "text": "$\\sum |y_i - \\hat{y}_i|$", "is_correct": false }
    ],
    "solution": {
      "steps": [
        { "title": "Identify Objective", "content": "The Method of Ordinary Least Squares (OLS) seeks to minimize the sum of the squares of the vertical deviations (residuals)." },
        { "title": "Formula", "content": "$SSE = \\sum (y_i - \\hat{y}_i)^2$." }
      ],
      "final_answer": "$\\sum(y_i - \\hat{y}_i)^2$",
      "solution_image": ""
    }
  }

],











    'chemistry': [

      {
    "topic": "Oxidation and Reduction",
    "title": "Standard Cell Potential Calculation",
    "question": "What is the standard cell potential ($E^{\\circ}_{cell}$) for a galvanic cell consisting of a zinc electrode in $1.0 M$ $Zn^{2+}$ and a copper electrode in $1.0 M$ $Cu^{2+}$? Given: $Zn^{2+} + 2e^{-} \\rightarrow Zn(s)$ ($E^{\\circ} = -0.763 V$) and $Cu^{2+} + 2e^{-} \\rightarrow Cu(s)$ ($E^{\\circ} = +0.337 V$).",
    "question_image": "",
    "options": [
      { "label": "A", "text": "$-1.100$ V", "is_correct": false },
      { "label": "B", "text": "$+0.426$ V", "is_correct": false },
      { "label": "C", "text": "$+1.100$ V", "is_correct": true },
      { "label": "D", "text": "$+1.526$ V", "is_correct": false }
    ],
    "solution": {
      "steps": [
        { "title": "Identify Anode and Cathode", "content": "The electrode with the more positive potential acts as the cathode. $E^{\\circ}_{Cu^{2+}/Cu} = +0.337$ V (Cathode) and $E^{\\circ}_{Zn^{2+}/Zn} = -0.763$ V (Anode)." },
        { "title": "Apply Formula", "content": "$E^{\\circ}_{cell} = E^{\\circ}_{cathode} - E^{\\circ}_{anode}$." },
        { "title": "Calculate", "content": "$E^{\\circ}_{cell} = (+0.337 \\text{ V}) - (-0.763 \\text{ V}) = 1.100 \\text{ V}$." }
      ],
      "final_answer": "$+1.100$ V",
      "solution_image": ""
    }
  },
  {
    "topic": "Oxidation and Reduction",
    "title": "Redox Reaction Balancing in Acid",
    "question": "In the following unbalanced redox reaction occurring in an acidic solution: $Cr_2O_7^{2-} + Fe^{2+} \\rightarrow Cr^{3+} + Fe^{3+}$, what is the coefficient of the $H^{+}$ ion when the equation is balanced using the smallest whole numbers?",
    "question_image": "",
    "options": [
      { "label": "A", "text": "7", "is_correct": false },
      { "label": "B", "text": "14", "is_correct": true },
      { "label": "C", "text": "6", "is_correct": false },
      { "label": "D", "text": "2", "is_correct": false }
    ],
    "solution": {
      "steps": [
        { "title": "Reduction Half-Reaction", "content": "Balance Cr: $Cr_2O_7^{2-} \\rightarrow 2Cr^{3+}$. Balance O with $H_2O$: $Cr_2O_7^{2-} \\rightarrow 2Cr^{3+} + 7H_2O$. Balance H with $H^{+}$: $14H^{+} + Cr_2O_7^{2-} \\rightarrow 2Cr^{3+} + 7H_2O$." },
        { "title": "Balance Charge", "content": "$6e^{-} + 14H^{+} + Cr_2O_7^{2-} \\rightarrow 2Cr^{3+} + 7H_2O$." },
        { "title": "Combine", "content": "The oxidation half-reaction is $Fe^{2+} \\rightarrow Fe^{3+} + e^{-}$. Multiplying by 6 and adding to reduction gives a coefficient of 14 for $H^{+}$." }
      ],
      "final_answer": "14",
      "solution_image": ""
    }
  },
  {
    "topic": "Oxidation and Reduction",
    "title": "Oxidation State of Chromium",
    "question": "What is the oxidation state of chromium in the dichromate ion, $Cr_{2}O_{7}^{2-}$?",
    "question_image": "",
    "options": [
      { "label": "A", "text": "+3", "is_correct": false },
      { "label": "B", "text": "+4", "is_correct": false },
      { "label": "C", "text": "+6", "is_correct": true },
      { "label": "D", "text": "+7", "is_correct": false }
    ],
    "solution": {
      "steps": [
        { "title": "Assign Oxygen State", "content": "Oxygen is assigned an oxidation state of $-2$." },
        { "title": "Set up Equation", "content": "Let $x$ be the oxidation state of Cr. The sum must equal the charge: $2(x) + 7(-2) = -2$." },
        { "title": "Solve for x", "content": "$2x - 14 = -2 \\implies 2x = 12 \\implies x = +6$." }
      ],
      "final_answer": "+6",
      "solution_image": ""
    }
  },
  {
    "topic": "Oxidation and Reduction",
    "title": "Cathodic Protection Methods",
    "question": "Which of the following methods is commonly used to provide cathodic protection to an underground steel storage tank?",
    "question_image": "",
    "options": [
      { "label": "A", "text": "Painting the tank with an epoxy coating", "is_correct": false },
      { "label": "B", "text": "Connecting the tank to a sacrificial magnesium anode", "is_correct": true },
      { "label": "C", "text": "Increasing the temperature of the surrounding soil", "is_correct": false },
      { "label": "D", "text": "Connecting the tank to a copper grounding rod", "is_correct": false }
    ],
    "solution": {
      "steps": [
        { "title": "Concept", "content": "Cathodic protection involves making the metal surface the cathode. This is achieved by connecting it to a more easily corroded metal (the sacrificial anode)." },
        { "title": "Evaluate Metals", "content": "Magnesium is more reactive than iron, so it will oxidize instead of the steel tank. Copper is less reactive and would accelerate corrosion." }
      ],
      "final_answer": "B",
      "solution_image": ""
    }
  },
  {
    "topic": "Oxidation and Reduction",
    "title": "Phosphorus Oxidation State Calculation",
    "question": "What is the oxidation state of Phosphorus ($P$) in the phosphate ion ($PO_4^{3-}$)?",
    "question_image": "",
    "options": [
      { "label": "A", "text": "$+3$", "is_correct": false },
      { "label": "B", "text": "$+4$", "is_correct": false },
      { "label": "C", "text": "$+5$", "is_correct": true },
      { "label": "D", "text": "$+8$", "is_correct": false }
    ],
    "solution": {
      "steps": [
        { "title": "Assign Oxidation States", "content": "Oxygen is $-2$. Let Phosphorus be $x$." },
        { "title": "Solve Equation", "content": "$x + 4(-2) = -3 \\implies x - 8 = -3 \\implies x = +5$." }
      ],
      "final_answer": "+5",
      "solution_image": ""
    }
  },
  {
    "topic": "Oxidation and Reduction",
    "title": "Faraday’s Law of Electrolysis",
    "question": "Using Faraday's Law, calculate the mass of Aluminum ($Al$) produced at the cathode during the electrolysis of molten $AlCl_3$ if a current of $10.0$ A is passed through the cell for $2.0$ hours. (Atomic weight of $Al = 26.98$ g/mol, $F = 96,485$ C/mol $e^-$)",
    "question_image": "",
    "options": [
      { "label": "A", "text": "$6.71$ g", "is_correct": true },
      { "label": "B", "text": "$20.1$ g", "is_correct": false },
      { "label": "C", "text": "$40.3$ g", "is_correct": false },
      { "label": "D", "text": "$80.5$ g", "is_correct": false }
    ],
    "solution": {
      "steps": [
        { "title": "Calculate Charge", "content": "$Q = I \\cdot t = 10.0 \\text{ A} \\cdot (2 \\cdot 3600 \\text{ s}) = 72,000 \\text{ C}$." },
        { "title": "Calculate Moles of Electrons", "content": "$n_{e^-} = Q/F = 72,000 / 96,485 \\approx 0.7462 \\text{ mol } e^-$." },
        { "title": "Calculate Moles and Mass of Al", "content": "$Al^{3+} + 3e^- \\rightarrow Al$. $n_{Al} = n_{e^-}/3 = 0.2487 \\text{ mol}$. $\\text{Mass} = 0.2487 \\cdot 26.98 \\approx 6.71 \\text{ g}$." }
      ],
      "final_answer": "$6.71$ g",
      "solution_image": ""
    }
  },
  {
    "topic": "Oxidation and Reduction",
    "title": "Identifying the Reducing Agent",
    "question": "In the following balanced redox reaction, which species acts as the reducing agent?\n$$MnO_{4}^{-} + 5Fe^{2+} + 8H^{+} \\rightarrow Mn^{2+} + 5Fe^{3+} + 4H_{2}O$$",
    "question_image": "",
    "options": [
      { "label": "A", "text": "$MnO_{4}^{-}$", "is_correct": false },
      { "label": "B", "text": "$Fe^{2+}$", "is_correct": true },
      { "label": "C", "text": "$H^{+}$", "is_correct": false },
      { "label": "D", "text": "$Fe^{3+}$", "is_correct": false }
    ],
    "solution": {
      "steps": [
        { "title": "Check Oxidation Numbers", "content": "Fe changes from $+2$ to $+3$ (oxidized). Mn changes from $+7$ to $+2$ (reduced)." },
        { "title": "Identify Agent", "content": "The species that is oxidized is the reducing agent. Since $Fe^{2+}$ is oxidized, it is the reducing agent." }
      ],
      "final_answer": "$Fe^{2+}$",
      "solution_image": ""
    }
  },
  {
    "topic": "Oxidation and Reduction",
    "title": "Cathodic Protection and Sacrificial Anodes",
    "question": "To provide cathodic protection for a steel (iron-based) structure buried underground, which of the following metals would be most suitable for use as a sacrificial anode?",
    "question_image": "",
    "options": [
      { "label": "A", "text": "Copper ($Cu$)", "is_correct": false },
      { "label": "B", "text": "Silver ($Ag$)", "is_correct": false },
      { "label": "C", "text": "Zinc ($Zn$)", "is_correct": true },
      { "label": "D", "text": "Nickel ($Ni$)", "is_correct": false }
    ],
    "solution": {
      "steps": [
        { "title": "Principle", "content": "A sacrificial anode must be more reactive (have a more negative reduction potential) than the metal it protects." },
        { "title": "Compare Reactivity", "content": "Zinc ($E^{\\circ} \\approx -0.76$ V) is more reactive than Iron ($E^{\\circ} \\approx -0.44$ V). Copper, Silver, and Nickel are less reactive." }
      ],
      "final_answer": "Zinc ($Zn$)",
      "solution_image": ""
    }
  },
  {
    "topic": "Oxidation and Reduction",
    "title": "Calculating Standard Cell Potential",
    "question": "Calculate the standard cell potential ($E^{0}_{cell}$) for a galvanic cell consisting of a Zinc electrode ($Zn^{2+} + 2e^{-} \\rightarrow Zn, E^{0} = -0.76V$) and a Silver electrode ($Ag^{+} + e^{-} \\rightarrow Ag, E^{0} = +0.80V$).",
    "question_image": "",
    "options": [
      { "label": "A", "text": "0.04 V", "is_correct": false },
      { "label": "B", "text": "0.84 V", "is_correct": false },
      { "label": "C", "text": "1.56 V", "is_correct": true },
      { "label": "D", "text": "2.36 V", "is_correct": false }
    ],
    "solution": {
      "steps": [
        { "title": "Identify Electrodes", "content": "Cathode: Silver (+0.80V). Anode: Zinc (-0.76V)." },
        { "title": "Calculation", "content": "$E^{0}_{cell} = E^{0}_{cathode} - E^{0}_{anode} = 0.80V - (-0.76V) = 1.56V$." }
      ],
      "final_answer": "1.56 V",
      "solution_image": ""
    }
  },
  {
    "topic": "Oxidation and Reduction",
    "title": "Faraday’s Law of Electrolysis",
    "question": "According to Faraday's Law, what mass of Copper ($M = 63.5g/mol$) will be deposited from a $Cu^{2+}$ solution by a current of 2.5 A flowing for 40 minutes? ($F = 96,485 C/mol$)",
    "question_image": "",
    "options": [
      { "label": "A", "text": "1.97 g", "is_correct": true },
      { "label": "B", "text": "3.95 g", "is_correct": false },
      { "label": "C", "text": "5.92 g", "is_correct": false },
      { "label": "D", "text": "7.89 g", "is_correct": false }
    ],
    "solution": {
      "steps": [
        { "title": "Calculate Charge", "content": "$Q = I \\cdot t = 2.5 \\text{ A} \\cdot (40 \\cdot 60 \\text{ s}) = 6000 \\text{ C}$." },
        { "title": "Moles of Electrons", "content": "$n_{e^-} = 6000 / 96,485 \\approx 0.06218 \\text{ mol}$." },
        { "title": "Calculate Mass", "content": "$Cu^{2+} + 2e^- \\rightarrow Cu$. $n_{Cu} = 0.06218 / 2 = 0.03109 \\text{ mol}$. $\\text{Mass} = 0.03109 \\cdot 63.5 \\approx 1.97 \\text{ g}$." }
      ],
      "final_answer": "1.97 g",
      "solution_image": ""
    }
  }, 
    {
    "topic": "Acids and Bases",
    "title": "Boiling Point Elevation Calculation",
    "question": "What is the boiling point of an aqueous solution containing $2.50\\text{ mol}$ of a non-volatile, non-electrolyte solute dissolved in $500.0\\text{ g}$ of water? The boiling point elevation constant ($K_b$) for water is $0.512^\\circ\\text{C/m}$.",
    "question_image": "",
    "options": [
      { "label": "A", "text": "$100.26^\\circ\\text{C}$", "is_correct": false },
      { "label": "B", "text": "$101.28^\\circ\\text{C}$", "is_correct": false },
      { "label": "C", "text": "$102.56^\\circ\\text{C}$", "is_correct": true },
      { "label": "D", "text": "$105.12^\\circ\\text{C}$", "is_correct": false }
    ],
    "solution": {
      "steps": [
        { "title": "Identify Given Information", "content": "Moles of solute ($n$) = $2.50\\text{ mol}$, Mass of solvent (water) = $500.0\\text{ g} = 0.500\\text{ kg}$, $K_b = 0.512^\\circ\\text{C/m}$, Normal boiling point ($T_b^\\circ$) = $100^\\circ\\text{C}$." },
        { "title": "Calculate Molality ($m$)", "content": "$m = \\frac{2.50\\text{ mol}}{0.500\\text{ kg}} = 5.00\\text{ m}$." },
        { "title": "Calculate Boiling Point Elevation ($\\Delta T_b$)", "content": "$\\Delta T_b = K_b \\cdot m = (0.512^\\circ\\text{C/m}) \\cdot (5.00\\text{ m}) = 2.56^\\circ\\text{C}$." },
        { "title": "Determine Final Boiling Point ($T_b$)", "content": "$T_b = T_b^\\circ + \\Delta T_b = 100^\\circ\\text{C} + 2.56^\\circ\\text{C} = 102.56^\\circ\\text{C}$." }
      ],
      "final_answer": "$102.56^\\circ\\text{C}$",
      "solution_image": ""
    }
  },
  {
    "topic": "Acids and Bases",
    "title": "Molarity of Sodium Hydroxide Solution",
    "question": "A solution is prepared by dissolving $20.0\\text{ g}$ of sodium hydroxide ($NaOH$, molar mass $= 40.0\\text{ g/mol}$) in enough water to make $500.0\\text{ mL}$ of solution. What is the molarity of this solution?",
    "question_image": "",
    "options": [
      { "label": "A", "text": "$0.50\\text{ M}$", "is_correct": false },
      { "label": "B", "text": "$1.00\\text{ M}$", "is_correct": true },
      { "label": "C", "text": "$2.00\\text{ M}$", "is_correct": false },
      { "label": "D", "text": "$4.00\\text{ M}$", "is_correct": false }
    ],
    "solution": {
      "steps": [
        { "title": "Identify Given Information", "content": "Mass = $20.0\\text{ g}$, Molar mass = $40.0\\text{ g/mol}$, Volume ($V$) = $500.0\\text{ mL} = 0.5000\\text{ L}$." },
        { "title": "Calculate Moles of Solute", "content": "$n = \\frac{20.0\\text{ g}}{40.0\\text{ g/mol}} = 0.500\\text{ mol}$." },
        { "title": "Calculate Molarity ($M$)", "content": "$M = \\frac{n}{V} = \\frac{0.500\\text{ mol}}{0.5000\\text{ L}} = 1.00\\text{ M}$." }
      ],
      "final_answer": "$1.00\\text{ M}$",
      "solution_image": ""
    }
  },
  {
    "topic": "Acids and Bases",
    "title": "pH Calculation of Strong Acid",
    "question": "A $0.025$ M solution of hydrochloric acid ($HCl$) is prepared. What is the pH of the solution at 25°C?",
    "question_image": "",
    "options": [
      { "label": "A", "text": "$1.20$", "is_correct": false },
      { "label": "B", "text": "$1.60$", "is_correct": true },
      { "label": "C", "text": "$2.40$", "is_correct": false },
      { "label": "D", "text": "$2.00$", "is_correct": false }
    ],
    "solution": {
      "steps": [
        { "title": "Identify the Nature of the Acid", "content": "$HCl$ is a strong acid and dissociates completely: $[H^{+}] = [HCl] = 0.025\\text{ M}$." },
        { "title": "Apply pH Formula", "content": "$\\text{pH} = -\\log_{10}[H^{+}] = -\\log_{10}(0.025)$." },
        { "title": "Final Calculation", "content": "$\\text{pH} \\approx 1.60$." }
      ],
      "final_answer": "$1.60$",
      "solution_image": ""
    }
  },
  {
    "topic": "Acids and Bases",
    "title": "Buffer Solution pH Calculation",
    "question": "Determine the pH of a buffer solution composed of $0.15$ M acetic acid ($CH_3COOH$) and $0.30$ M sodium acetate ($CH_3COONa$). The acid dissociation constant $K_a$ for acetic acid is $1.8 \\times 10^{-5}$.",
    "question_image": "",
    "options": [
      { "label": "A", "text": "$4.44$", "is_correct": false },
      { "label": "B", "text": "$4.74$", "is_correct": false },
      { "label": "C", "text": "$5.05$", "is_correct": true },
      { "label": "D", "text": "$5.34$", "is_correct": false }
    ],
    "solution": {
      "steps": [
        { "title": "Calculate $pK_a$", "content": "$pK_a = -\\log_{10}(1.8 \\times 10^{-5}) \\approx 4.7447$." },
        { "title": "Apply Henderson-Hasselbalch Equation", "content": "$\\text{pH} = pK_a + \\log_{10}(\\frac{[Base]}{[Acid]}) = 4.7447 + \\log_{10}(\\frac{0.30}{0.15})$." },
        { "title": "Solve for pH", "content": "$\\text{pH} = 4.7447 + 0.3010 = 5.0457 \\approx 5.05$." }
      ],
      "final_answer": "5.05",
      "solution_image": ""
    }
  },
  {
    "topic": "Acids and Bases",
    "title": "pH from Hydroxide Ion Concentration",
    "question": "A solution at 25°C has a hydroxide ion concentration $[OH^{-}]$ of $2.5 \\times 10^{-4}$ M. What is the pH of this solution?",
    "question_image": "",
    "options": [
      { "label": "A", "text": "$3.60$", "is_correct": false },
      { "label": "B", "text": "$4.00$", "is_correct": false },
      { "label": "C", "text": "$10.40$", "is_correct": true },
      { "label": "D", "text": "$11.40$", "is_correct": false }
    ],
    "solution": {
      "steps": [
        { "title": "Calculate pOH", "content": "$\\text{pOH} = -\\log_{10}(2.5 \\times 10^{-4}) \\approx 3.60$." },
        { "title": "Relate pOH to pH", "content": "At 25°C, $\\text{pH} + \\text{pOH} = 14.00$." },
        { "title": "Solve for pH", "content": "$\\text{pH} = 14.00 - 3.60 = 10.40$." }
      ],
      "final_answer": "10.40",
      "solution_image": ""
    }
  },
  {
    "topic": "Acids and Bases",
    "title": "Weak Acid Concentration Calculation",
    "question": "Calculate the hydrogen ion concentration $[H^{+}]$ of a $0.10$ M solution of a weak acid $HA$ that has an acid dissociation constant $K_a = 1.0 \\times 10^{-7}$.",
    "question_image": "",
    "options": [
      { "label": "A", "text": "$1.0 \\times 10^{-7}$ M", "is_correct": false },
      { "label": "B", "text": "$1.0 \\times 10^{-4}$ M", "is_correct": true },
      { "label": "C", "text": "$3.16 \\times 10^{-4}$ M", "is_correct": false },
      { "label": "D", "text": "$1.0 \\times 10^{-8}$ M", "is_correct": false }
    ],
    "solution": {
      "steps": [
        { "title": "Set Up Equilibrium Expression", "content": "$K_a = \\frac{[H^{+}][A^{-}]}{[HA]}$. Let $x = [H^{+}] = [A^{-}]$ and $[HA] \\approx 0.10$." },
        { "title": "Solve for $x$", "content": "$1.0 \\times 10^{-7} = \\frac{x^2}{0.10} \\Rightarrow x^2 = 1.0 \\times 10^{-8}$." },
        { "title": "Conclusion", "content": "$x = \\sqrt{1.0 \\times 10^{-8}} = 1.0 \\times 10^{-4}\\text{ M}$." }
      ],
      "final_answer": "$1.0 \\times 10^{-4}\\text{ M}$",
      "solution_image": ""
    }
  },
  {
    "topic": "Acids and Bases",
    "title": "Calculating Buffer Solution pH",
    "question": "A buffer solution is prepared using 0.20 M of a weak acid ($HA$) and 0.30 M of its conjugate base ($A^{-}$). If the $pK_{a}$ of the acid is 4.75, what is the resulting $pH$ of the buffer?",
    "question_image": "",
    "options": [
      { "label": "A", "text": "4.57", "is_correct": false },
      { "label": "B", "text": "4.75", "is_correct": false },
      { "label": "C", "text": "4.93", "is_correct": true },
      { "label": "D", "text": "5.05", "is_correct": false }
    ],
    "solution": {
      "steps": [
        { "title": "Substitute Values into Henderson-Hasselbalch", "content": "$\\text{pH} = 4.75 + \\log_{10}(\\frac{0.30}{0.20})$." },
        { "title": "Solve Calculation", "content": "$\\text{pH} = 4.75 + \\log_{10}(1.5) = 4.75 + 0.176 = 4.926$." },
        { "title": "Rounding", "content": "Rounding to two decimal places gives $4.93$." }
      ],
      "final_answer": "4.93",
      "solution_image": ""
    }
  },
  {
    "topic": "Acids and Bases",
    "title": "pH Calculation During Strong Titration",
    "question": "A 50 mL sample of 0.10 M sodium hydroxide ($NaOH$) is titrated with 0.10 M hydrochloric acid ($HCl$). What is the $pH$ after 25 mL of $HCl$ has been added to the base?",
    "question_image": "",
    "options": [
      { "label": "A", "text": "1.48", "is_correct": false },
      { "label": "B", "text": "7.00", "is_correct": false },
      { "label": "C", "text": "12.52", "is_correct": true },
      { "label": "D", "text": "13.00", "is_correct": false }
    ],
    "solution": {
      "steps": [
        { "title": "Calculate Moles", "content": "Initial $OH^{-} = 0.10\\text{ M} \\times 0.050\\text{ L} = 0.0050\\text{ mol}$. Added $H^{+} = 0.10\\text{ M} \\times 0.025\\text{ L} = 0.0025\\text{ mol}$." },
        { "title": "Determine Excess Moles", "content": "Remaining $OH^{-} = 0.0050 - 0.0025 = 0.0025\\text{ mol}$." },
        { "title": "Calculate Concentration and pH", "content": "$[OH^{-}] = \\frac{0.0025\\text{ mol}}{0.075\\text{ L}} \\approx 0.0333\\text{ M}$. $\\text{pOH} \\approx 1.48$. $\\text{pH} = 14 - 1.48 = 12.52$." }
      ],
      "final_answer": "12.52",
      "solution_image": ""
    }
  }, {
    "topic": "Chemical Reactions",
    "title": "Limiting Reactant and Theoretical Yield",
    "question": "A reaction occurs between $54.0\\text{ g}$ of aluminum ($Al$) and $64.0\\text{ g}$ of oxygen gas ($O_2$) to form aluminum oxide ($Al_2O_3$) according to the following balanced equation: $$4Al(s) + 3O_2(g) \\rightarrow 2Al_2O_3(s)$$ What is the maximum mass of $Al_2O_3$ that can be produced? (Assume molar masses: $M_{Al} = 26.98\\text{ g/mol}$, $M_{O} = 16.00\\text{ g/mol}$)",
    "question_image": "",
    "options": [
      { "label": "A", "text": "$68.0\\text{ g}$", "is_correct": false },
      { "label": "B", "text": "$102\\text{ g}$", "is_correct": true },
      { "label": "C", "text": "$136\\text{ g}$", "is_correct": false },
      { "label": "D", "text": "$204\\text{ g}$", "is_correct": false }
    ],
    "solution": {
      "steps": [
        { "title": "Calculate Moles of Reactants", "content": "Moles of $Al = 54.0 / 26.98 \\approx 2.00\\text{ mol}$. Molar mass of $O_2 = 32.00\\text{ g/mol}$. Moles of $O_2 = 64.0 / 32.00 = 2.00\\text{ mol}$." },
        { "title": "Determine Limiting Reactant", "content": "$2.00\\text{ mol } Al$ can produce $1.00\\text{ mol } Al_2O_3$. $2.00\\text{ mol } O_2$ can produce $\\approx 1.33\\text{ mol } Al_2O_3$. $Al$ is the limiting reactant." },
        { "title": "Calculate Maximum Mass", "content": "$M_{Al_2O_3} = 101.96\\text{ g/mol}$. Mass = $1.00\\text{ mol} \\times 101.96\\text{ g/mol} \\approx 102\\text{ g}$." }
      ],
      "final_answer": "102 g",
      "solution_image": ""
    }
  },
  {
    "topic": "Chemical Reactions",
    "title": "Stoichiometry of Methane Combustion",
    "question": "In the complete combustion of methane, represented by the equation $CH_{4}(g) + 2O_{2}(g) \\rightarrow CO_{2}(g) + 2H_{2}O(l)$, how many grams of water are produced from the combustion of 32.0 grams of methane? Assume the atomic weights of $C = 12.0$, $H = 1.0$, and $O = 16.0$ g/mol.",
    "question_image": "",
    "options": [
      { "label": "A", "text": "18.0 g", "is_correct": false },
      { "label": "B", "text": "36.0 g", "is_correct": false },
      { "label": "C", "text": "54.0 g", "is_correct": false },
      { "label": "D", "text": "72.0 g", "is_correct": true }
    ],
    "solution": {
      "steps": [
        { "title": "Calculate Molar Masses", "content": "$CH_4 = 16.0\\text{ g/mol}$, $H_2O = 18.0\\text{ g/mol}$." },
        { "title": "Convert Mass to Moles", "content": "$\\text{moles } CH_4 = 32.0 / 16.0 = 2.0\\text{ mol}$." },
        { "title": "Use Stoichiometric Ratio", "content": "From the equation, $1\\text{ mol } CH_4$ produces $2\\text{ mol } H_2O$. So, $2.0 \\times 2 = 4.0\\text{ mol } H_2O$ produced." },
        { "title": "Convert Moles to Mass", "content": "$\\text{mass } H_2O = 4.0\\text{ mol} \\times 18.0\\text{ g/mol} = 72.0\\text{ g}$." }
      ],
      "final_answer": "72.0 g",
      "solution_image": ""
    }
  },
  {
    "topic": "Chemical Reactions",
    "title": "Le Chatelier’s Principle: Haber Process",
    "question": "Consider the Haber process for the synthesis of ammonia: $N_{2}(g) + 3H_{2}(g) \\rightleftharpoons 2NH_{3}(g) + \\text{Heat}$. According to Le Chatelier's Principle, which of the following changes will shift the equilibrium position to the right, increasing the yield of ammonia?",
    "question_image": "",
    "options": [
      { "label": "A", "text": "Increasing the temperature of the system", "is_correct": false },
      { "label": "B", "text": "Increasing the total pressure on the system", "is_correct": true },
      { "label": "C", "text": "Decreasing the concentration of Nitrogen gas", "is_correct": false },
      { "label": "D", "text": "Increasing the volume of the reaction vessel", "is_correct": false }
    ],
    "solution": {
      "steps": [
        { "title": "Analyze Pressure", "content": "Increasing pressure shifts equilibrium to the side with fewer gas moles ($4\\text{ moles}$ on left vs $2\\text{ moles}$ on right). This shifts it right." },
        { "title": "Analyze Temperature", "content": "The reaction is exothermic. Increasing temperature shifts it left toward the reactants." },
        { "title": "Analyze Concentration/Volume", "content": "Decreasing $N_2$ shifts left. Increasing volume decreases pressure, shifting it left toward the side with more moles." }
      ],
      "final_answer": "Increasing the total pressure on the system",
      "solution_image": ""
    }
  },
  {
    "topic": "Chemical Reactions",
    "title": "Stoichiometry and Limiting Reactants",
    "question": "In the reaction $2Al + 3Cl_2 \\rightarrow 2AlCl_3$, $54.0$ grams of Aluminum ($Al$) are reacted with $142.0$ grams of Chlorine gas ($Cl_2$). Which reactant is limiting, and what is the theoretical mass of $AlCl_3$ produced? (Atomic weights: $Al = 27.0$, $Cl = 35.5$ g/mol)",
    "question_image": "",
    "options": [
      { "label": "A", "text": "Aluminum is limiting; 267 g produced", "is_correct": false },
      { "label": "B", "text": "Chlorine is limiting; 178 g produced", "is_correct": true },
      { "label": "C", "text": "Aluminum is limiting; 178 g produced", "is_correct": false },
      { "label": "D", "text": "Chlorine is limiting; 267 g produced", "is_correct": false }
    ],
    "solution": {
      "steps": [
        { "title": "Calculate Moles", "content": "$\\text{moles } Al = 54.0 / 27.0 = 2.0\\text{ mol}$. $\\text{moles } Cl_2 = 142.0 / 71.0 = 2.0\\text{ mol}$." },
        { "title": "Determine Limiting Reactant", "content": "Equation ratio is $2:3$. $2.0\\text{ mol } Al$ requires $3.0\\text{ mol } Cl_2$. We only have $2.0\\text{ mol } Cl_2$, so $Cl_2$ is limiting." },
        { "title": "Calculate Theoretical Yield", "content": "$2.0\\text{ mol } Cl_2 \\times (2\\text{ mol } AlCl_3 / 3\\text{ mol } Cl_2) = 1.333\\text{ mol } AlCl_3$. Mass = $1.333 \\times 133.5\\text{ g/mol} = 178.0\\text{ g}$." }
      ],
      "final_answer": "Chlorine is limiting; 178 g produced",
      "solution_image": ""
    }
  },
  {
    "topic": "Chemical Reactions",
    "title": "Percent Yield of Glucose Fermentation",
    "question": "A bioconversion process uses yeast to ferment glucose into ethanol: $C_6H_{12}O_6 \\rightarrow 2C_2H_5OH + 2CO_2$. If $180$ grams of glucose are processed and $80$ grams of ethanol are actually recovered, what is the percent yield of the reaction? (Molar masses: Glucose = $180$ g/mol, Ethanol = $46$ g/mol)",
    "question_image": "",
    "options": [
      { "label": "A", "text": "44%", "is_correct": false },
      { "label": "B", "text": "50%", "is_correct": false },
      { "label": "C", "text": "87%", "is_correct": true },
      { "label": "D", "text": "92%", "is_correct": false }
    ],
    "solution": {
      "steps": [
        { "title": "Calculate Moles of Glucose", "content": "$\\text{moles glucose} = 180 / 180 = 1.0\\text{ mol}$." },
        { "title": "Determine Theoretical Yield", "content": "$1.0\\text{ mol glucose} \\rightarrow 2.0\\text{ mol ethanol}$. Theoretical mass = $2.0 \\times 46 = 92\\text{ g}$." },
        { "title": "Calculate Percent Yield", "content": "$\\text{Yield} = (80 / 92) \\times 100 \\approx 86.96\\%$." }
      ],
      "final_answer": "87%",
      "solution_image": ""
    }
  }
  
    ],
    'instr-controls': [
{
    "topic": "Sensors and Transducers",
    "title": "Strain Gauge",
    "question": "A strain gauge with a gauge factor $GF = 2.0$ and an initial resistance $R = 120 \\ \\Omega$ is bonded to a beam. If the beam undergoes a longitudinal strain of $\\epsilon = 500 \\ \\mu\\epsilon$, what is the resulting change in resistance $\\Delta R$?",
    "question_image": "",
    "options": [
      { "label": "A", "text": "0.06 Ω", "is_correct": false },
      { "label": "B", "text": "0.12 Ω", "is_correct": true },
      { "label": "C", "text": "0.24 Ω", "is_correct": false },
      { "label": "D", "text": "1.20 Ω", "is_correct": false }
    ],
    "solution": {
      "steps": [
        { "title": "Identify Given Values", "content": "Gauge Factor ($GF$) = 2.0; Initial Resistance ($R$) = 120 Ω; Strain ($\\epsilon$) = $500 \\times 10^{-6}$." },
        { "title": "Apply Formula", "content": "The change in resistance is calculated as $\\Delta R = GF \\cdot R \\cdot \\epsilon$." },
        { "title": "Calculate Result", "content": "$\\Delta R = 2.0 \\cdot 120 \\cdot 0.0005 = 0.12 \\ \\Omega$." }
      ],
      "final_answer": "0.12 Ω",
      "solution_image": ""
    }
  },
  {
    "topic": "Sensors and Transducers",
    "title": "Temperature Measurement with RTD",
    "question": "A platinum RTD ($R_0 = 100 \\Omega$ at $0^{\\circ}C$) has a temperature coefficient of resistance $\\alpha = 0.00385^{\\circ}C^{-1}$. If the measured resistance is $150 \\Omega$, what is the approximate temperature?",
    "question_image": "",
    "options": [
      { "label": "A", "text": "115.5 °C", "is_correct": false },
      { "label": "B", "text": "129.9 °C", "is_correct": true },
      { "label": "C", "text": "135.2 °C", "is_correct": false },
      { "label": "D", "text": "150.0 °C", "is_correct": false }
    ],
    "solution": {
      "steps": [
        { "title": "Use Linear Approximation", "content": "The formula is $R_t = R_0 (1 + \\alpha T)$." },
        { "title": "Rearrange for T", "content": "$T = \\frac{(R_t / R_0) - 1}{\\alpha}$." },
        { "title": "Final Calculation", "content": "$T = \\frac{(150/100) - 1}{0.00385} = \\frac{0.5}{0.00385} \\approx 129.87^{\\circ}C$." }
      ],
      "final_answer": "129.9 °C",
      "solution_image": ""
    }
  },
  {
    "topic": "Sensors and Transducers",
    "title": "LVDT Output at Null Position",
    "question": "In a Linear Variable Differential Transformer (LVDT), what is the theoretical output voltage when the ferromagnetic core is exactly at the center (null) position?",
    "question_image": "",
    "options": [
      { "label": "A", "text": "The maximum supply voltage", "is_correct": false },
      { "label": "B", "text": "One-half of the supply voltage", "is_correct": false },
      { "label": "C", "text": "Zero", "is_correct": true },
      { "label": "D", "text": "The voltage depends on the core velocity", "is_correct": false }
    ],
    "solution": {
      "steps": [
        { "title": "Analyze Voltage Induction", "content": "At the center, the core links identical magnetic flux to both secondary windings ($S_1$ and $S_2$)." },
        { "title": "Evaluate Series Opposition", "content": "Because secondaries are connected in series opposition, $V_{out} = V_{S1} - V_{S2}$." },
        { "title": "Conclusion", "content": "Since $V_{S1} = V_{S2}$, the resulting output is zero." }
      ],
      "final_answer": "Zero",
      "solution_image": ""
    }
  },
  {
    "topic": "Sensors and Transducers",
    "title": "Linear Potentiometer Displacement Calculation",
    "question": "A linear potentiometer with a total stroke length of 50 mm is connected to a 5V DC power supply. If the output voltage is measured at 3.2V, what is the displacement from the zero position?",
    "question_image": "",
    "options": [
      { "label": "A", "text": "15 mm", "is_correct": false },
      { "label": "B", "text": "25 mm", "is_correct": false },
      { "label": "C", "text": "32 mm", "is_correct": true },
      { "label": "D", "text": "40 mm", "is_correct": false }
    ],
    "solution": {
      "steps": [
        { "title": "Identify Ratio", "content": "The displacement is proportional to voltage: $x/L = V_{out}/V_{in}$." },
        { "title": "Calculate Displacement", "content": "$x = (3.2V / 5.0V) \\times 50 \\text{ mm}$." },
        { "title": "Result", "content": "$x = 0.64 \\times 50 = 32 \\text{ mm}$." }
      ],
      "final_answer": "32 mm",
      "solution_image": ""
    }
  },
  {
    "topic": "Sensors and Transducers",
    "title": "LVDT Output Characteristics",
    "question": "In the context of Linear Variable Differential Transformers (LVDTs), which of the following statements best describes the behavior of the output voltage as the core moves from one side of the null position to the other?",
    "question_image": "",
    "options": [
      { "label": "A", "text": "The output voltage magnitude increases linearly and the phase remains constant.", "is_correct": false },
      { "label": "B", "text": "The output voltage magnitude reaches a maximum at the null position.", "is_correct": false },
      { "label": "C", "text": "The output voltage is a DC signal whose polarity indicates the direction of displacement.", "is_correct": false },
      { "label": "D", "text": "The output voltage magnitude is minimum at the null position and the phase shifts by 180° as it crosses null.", "is_correct": true }
    ],
    "solution": {
      "steps": [
        { "title": "Magnitude Analysis", "content": "The differential output magnitude is lowest (ideally zero) at the null position." },
        { "title": "Phase Analysis", "content": "Crossing the null changes which secondary voltage is larger, causing a 180° phase flip in the AC signal." }
      ],
      "final_answer": "The output voltage magnitude is minimum at the null position and the phase shifts by 180° as it crosses null.",
      "solution_image": ""
    }
  },
  {
    "topic": "Sensors and Transducers",
    "title": "Finding Unknown Resistance in Balanced Bridge",
    "question": "Find the unknown resistance value in a given circuit, given the bridge is balanced. The top-left arm is 25 Ω, top-right is 15 Ω, and bottom-left is 17 Ω.",
    "question_image": "",
    "options": [
      { "label": "A", "text": "10.2 Ω", "is_correct": true },
      { "label": "B", "text": "11.7 Ω", "is_correct": false },
      { "label": "C", "text": "10.5 Ω", "is_correct": false },
      { "label": "D", "text": "11.5 Ω", "is_correct": false }
    ],
    "solution": {
      "steps": [
        { "title": "Bridge Balance Condition", "content": "For a balanced bridge, the product of opposite arm resistances are equal: $R_1 R_4 = R_2 R_3$." },
        { "title": "Substitute Values", "content": "$25 \\cdot R_4 = 15 \\cdot 17 = 255$." },
        { "title": "Solve for R4", "content": "$R_4 = 255 / 25 = 10.2 \\ \\Omega$." }
      ],
      "final_answer": "10.2 Ω",
      "solution_image": ""
    }
  }
  
    ],
    'ethics': [],
    'safety': [],
    'econ': [],
    'statics': [],
    'dynamics': [],
    'materials-strength': [],
    'materials-science': [],
    'fluids': [],
    'electricity': [],
    'thermo-heat': []
};