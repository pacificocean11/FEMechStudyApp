const SUBJECTS = [
    { id: 'math', name: 'Mathematics', icon: '📐', category: 'Core Sciences', topics: ['Analytic geometry and trigonometry', 'Differential equations', 'Numerical methods', 'Linear algebra', 'Single-variable calculus'] },
    { id: 'stats', name: 'Probability and Statistics', icon: '📊', category: 'Core Sciences', topics: ['Estimation', 'Expected value', 'Sample distributions', 'Goodness of fit'] },
    { id: 'chemistry', name: 'Chemistry', icon: '🧪', category: 'Core Sciences', topics: ['Oxidation and reduction', 'Acids and bases', 'Solutions', 'Computational stoichiometry'] },
    { id: 'instr-controls', name: 'Instrumentation and Controls', icon: '🕹️', category: 'Engineering Foundations', topics: ['Sensors and transducers', 'Control systems', 'Logic diagrams'] },
    { id: 'ethics', name: 'Engineering Ethics and Societal Impacts', icon: '🤝', category: 'Engineering Foundations', topics: ['Codes of ethics', 'Public protection issues', 'Societal impacts'] },
    { id: 'safety', name: 'Safety, Health, and Environment', icon: '🛡️', category: 'Engineering Foundations', topics: ['Industrial hygiene', 'Basic safety equipment', 'Gas detection and monitoring', 'Electrical safety', 'Confined space entry', 'Hazard communications'] },
    { id: 'econ', name: 'Engineering Economics', icon: '💰', category: 'Engineering Foundations', topics: ['Time value of money', 'Cost analysis', 'Economic analyses', 'Uncertainty', 'Project selection'] },
    { id: 'statics', name: 'Statics', icon: '⚖️', category: 'Mechanical Core', topics: ['Resultants of force systems', 'Concurrent force systems', 'Force couple systems', 'Equilibrium of rigid bodies', 'Internal forces', 'Area properties', 'Static friction', 'Free-body diagrams', 'Weight and mass'] },
    { id: 'dynamics', name: 'Dynamics', icon: '🏎️', category: 'Mechanical Core', topics: ['Particle and rigid-body kinematics', 'Linear motion', 'Angular motion', 'Mass moment of inertia', 'Impulse and momentum', 'Work, energy, and power', 'Dynamic friction', 'Vibrations'] },
    { id: 'materials-strength', name: 'Strength of Materials', icon: '🏗️', category: 'Mechanical Core', topics: ['Stress types', 'Combined loading', 'Stress and strain', 'Shear and moment diagrams', 'Analysis of beams', 'Loads and deformations', 'Stress transformation'] },
    { id: 'materials-science', name: 'Materials Science', icon: '🔬', category: 'Mechanical Core', topics: ['Physical properties', 'Mechanical properties', 'Chemical properties', 'Thermal properties', 'Electrical properties', 'Material selection'] },
    { id: 'fluids', name: 'Fluid Mechanics', icon: '🌊', category: 'Mechanical Core', topics: ['Fluid properties', 'Dimensionless numbers', 'Laminar and turbulent flow', 'Fluid statics', 'Energy and momentum equations', 'Pipe and duct flow', 'Open-channel flow', 'Fluid transport systems', 'Flow measurement'] },
    { id: 'electricity', name: 'Electricity, Power, and Magnetism', icon: '⚡', category: 'Mechanical Core', topics: ['Charge and current', 'Voltage and resistance', 'Circuit analysis', 'Power and energy', 'Magnetic fields'] },
    { id: 'thermo-heat', name: 'Thermodynamics and Heat Transfer', icon: '🔥', category: 'Mechanical Core', topics: ['Laws of thermodynamics', 'Properties of substances', 'Heat transfer mechanisms', 'Thermodynamic cycles'] }
];

const QUESTIONS = {
    'math': [
        {
            "subject": "Math",
            "topic": "Analytic geometry and trigonometry",
            "question": "What is the equation of the line passing through the point $(2, -3)$ and perpendicular to the line defined by $3x - 4y + 7 = 0$?",
            "question_image": "",
            "options": [
                { "label": "A", "text": "$4x + 3y + 1 = 0$", "is_correct": true },
                { "label": "B", "text": "$4x + 3y - 1 = 0$", "is_correct": false },
                { "label": "C", "text": "$4x - 3y - 17 = 0$", "is_correct": false },
                { "label": "D", "text": "$3x + 4y + 6 = 0$", "is_correct": false }
            ],
            "solution": {
                "steps": [
                    { "title": "Find the Slope of the Given Line", "content": "The given line is $3x - 4y + 7 = 0$. Rearranging into slope-intercept form ($y = mx + b$): $-4y = -3x - 7 \\implies y = (3/4)x + 7/4$. The slope $m_1$ is $3/4$." },
                    { "title": "Determine the Slope of the Perpendicular Line", "content": "The slope of a line perpendicular to another is the negative reciprocal: $m_2 = -1/m_1 = -1/(3/4) = -4/3$." },
                    { "title": "Use Point-Slope Form to Find the Equation", "content": "Using the point $(2, -3)$ and slope $-4/3$: $y - (-3) = (-4/3)(x - 2) \\implies y + 3 = (-4/3)x + 8/3 \\implies 3y + 9 = -4x + 8 \\implies 4x + 3y + 1 = 0$." }
                ],
                "final_answer": "4x + 3y + 1 = 0",
                "solution_image": ""
            }
        },
        {
            "subject": "Math",
            "topic": "Analytic geometry and trigonometry",
            "question": "What is the point of intersection of the lines defined by $x + y = 5$ and $2x - y = 1$?",
            "question_image": "",
            "options": [
                { "label": "A", "text": "$(2, 3)$", "is_correct": true },
                { "label": "B", "text": "$(3, 2)$", "is_correct": false },
                { "label": "C", "text": "$(1, 4)$", "is_correct": false },
                { "label": "D", "text": "$(4, 1)$", "is_correct": false }
            ],
            "solution": {
                "steps": [
                    { "title": "Set up the System of Equations", "content": "Equation 1: $x + y = 5$; Equation 2: $2x - y = 1$." },
                    { "title": "Solve the System using Elimination", "content": "Adding Equation 1 and Equation 2: $(x + y) + (2x - y) = 5 + 1 \\implies 3x = 6 \\implies x = 2$." },
                    { "title": "Find the y-value", "content": "Substitute $x = 2$ into Equation 1: $2 + y = 5 \\implies y = 3$." }
                ],
                "final_answer": "(2, 3)",
                "solution_image": ""
            }
        },
        {
            "subject": "Math",
            "topic": "Analytic geometry and trigonometry",
            "question": "Identify the type of conic section represented by the equation: $2x^2 - 4xy + 2y^2 + 5x - 7 = 0$",
            "question_image": "",
            "options": [
                { "label": "A", "text": "Circle", "is_correct": false },
                { "label": "B", "text": "Ellipse", "is_correct": false },
                { "label": "C", "text": "Parabola", "is_correct": true },
                { "label": "D", "text": "Hyperbola", "is_correct": false }
            ],
            "solution": {
                "steps": [
                    { "title": "Identify the Coefficients", "content": "Comparing to the general form $Ax^2 + Bxy + Cy^2 + Dx + Ey + F = 0$, we have $A=2$, $B=-4$, and $C=2$." },
                    { "title": "Calculate the Discriminant", "content": "The discriminant is $B^2 - 4AC = (-4)^2 - 4(2)(2) = 16 - 16 = 0$." },
                    { "title": "Determine the Conic Type", "content": "Since the discriminant $B^2 - 4AC$ is exactly 0, the equation represents a parabola." }
                ],
                "final_answer": "Parabola",
                "solution_image": ""
            }
        },
        {
            "subject": "Math",
            "topic": "Analytic geometry and trigonometry",
            "question": "What is the equation of a circle with its center at $(-1, 4)$ and a radius of 5?",
            "question_image": "",
            "options": [
                { "label": "A", "text": "$(x - 1)^2 + (y + 4)^2 = 25$", "is_correct": false },
                { "label": "B", "text": "$(x + 1)^2 + (y - 4)^2 = 5$", "is_correct": false },
                { "label": "C", "text": "$(x + 1)^2 + (y - 4)^2 = 25$", "is_correct": true },
                { "label": "D", "text": "$(x - 1)^2 + (y + 4)^2 = 5$", "is_correct": false }
            ],
            "solution": {
                "steps": [
                    { "title": "Standard Equation of a Circle", "content": "The standard form is $(x - h)^2 + (y - k)^2 = r^2$, where $(h, k)$ is the center and $r$ is the radius." },
                    { "title": "Substitute Given Values", "content": "Center $(h, k) = (-1, 4)$ and radius $r = 5$. Substituting: $(x - (-1))^2 + (y - 4)^2 = 5^2$." },
                    { "title": "Simplify the Equation", "content": "$(x + 1)^2 + (y - 4)^2 = 25$." }
                ],
                "final_answer": "(x + 1)^2 + (y - 4)^2 = 25",
                "solution_image": ""
            }
        },
        {
            "subject": "Math",
            "topic": "Analytic geometry and trigonometry",
            "question": "Determine the center $(h, k)$ and radius $r$ of the circle defined by the equation $x^2 + y^2 - 6x + 8y + 9 = 0$",
            "question_image": "",
            "options": [
                { "label": "A", "text": "Center $(3, -4)$, $r = 4$", "is_correct": true },
                { "label": "B", "text": "Center $(-3, 4)$, $r = 4$", "is_correct": false },
                { "label": "C", "text": "Center $(3, -4)$, $r = 16$", "is_correct": false },
                { "label": "D", "text": "Center $(-3, 4)$, $r = 16$", "is_correct": false }
            ],
            "solution": {
                "steps": [
                    { "title": "Rearrange the Equation", "content": "Group $x$ and $y$ terms: $(x^2 - 6x) + (y^2 + 8y) = -9$." },
                    { "title": "Complete the Square", "content": "$(x^2 - 6x + 9) + (y^2 + 8y + 16) = -9 + 9 + 16 \\implies (x - 3)^2 + (y + 4)^2 = 16$." },
                    { "title": "Identify Center and Radius", "content": "From $(x - 3)^2 + (y + 4)^2 = 4^2$, the center is $(3, -4)$ and the radius is 4." }
                ],
                "final_answer": "Center (3, -4), r = 4",
                "solution_image": ""
            }
        },
        {
            "subject": "Math",
            "topic": "Analytic geometry and trigonometry",
            "question": "Calculate the eccentricity, $e$, of the ellipse defined by the equation $x^2/16 + y^2/9 = 1$",
            "question_image": "",
            "options": [
                { "label": "A", "text": "$e = \\sqrt{7}/4$", "is_correct": true },
                { "label": "B", "text": "$e = 3/4$", "is_correct": false },
                { "label": "C", "text": "$e = 7/16$", "is_correct": false },
                { "label": "D", "text": "$e = \\sqrt{7}/3$", "is_correct": false }
            ],
            "solution": {
                "steps": [
                    { "title": "Identify Semi-axes", "content": "The equation is in standard form $x^2/a^2 + y^2/b^2 = 1$. Since $16 > 9$, $a^2 = 16$ ($a = 4$) and $b^2 = 9$ ($b = 3$)." },
                    { "title": "Use the Eccentricity Formula", "content": "For an ellipse, $e = \\sqrt{1 - (b^2/a^2)}$." },
                    { "title": "Substitute and Simplify", "content": "$e = \\sqrt{1 - 9/16} = \\sqrt{7/16} = \\sqrt{7}/4$." }
                ],
                "final_answer": "e = sqrt(7)/4",
                "solution_image": ""
            }
        },
        {
            "subject": "Math",
            "topic": "Analytic geometry and trigonometry",
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
                    { "title": "Standard Form of a Parabola", "content": "The equation $y^2 = 4px$ represents a parabola opening to the right with focus at $(p, 0)$." },
                    { "title": "Identify the Parameter p", "content": "Comparing $y^2 = 12x$ to $y^2 = 4px$, we find $4p = 12$, so $p = 3$." },
                    { "title": "Determine Focus Coordinates", "content": "The focus is at $(p, 0)$, which is $(3, 0)$." }
                ],
                "final_answer": "(3, 0)",
                "solution_image": ""
            }
        },
        {
            "subject": "Math",
            "topic": "Analytic geometry and trigonometry",
            "question": "What is the distance between the foci of the hyperbola defined by the equation $9x^2 - 16y^2 - 36x - 64y - 172 = 0$?",
            "question_image": "",
            "options": [
                { "label": "A", "text": "5", "is_correct": false },
                { "label": "B", "text": "10", "is_correct": true },
                { "label": "C", "text": "8", "is_correct": false },
                { "label": "D", "text": "6", "is_correct": false }
            ],
            "solution": {
                "steps": [
                    { "title": "Convert to Standard Form", "content": "Group terms: $9(x^2 - 4x) - 16(y^2 + 4y) = 172$. Complete the square: $9(x - 2)^2 - 16(y + 2)^2 = 172 + 36 - 64 = 144$. Divide by 144: $(x - 2)^2 / 16 - (y + 2)^2 / 9 = 1$." },
                    { "title": "Identify a^2 and b^2", "content": "From the standard form, $a^2 = 16$ and $b^2 = 9$." },
                    { "title": "Calculate the Distance to Foci", "content": "For a hyperbola, $c^2 = a^2 + b^2 = 16 + 9 = 25$, so $c = 5$. The distance between foci is $2c = 10$." }
                ],
                "final_answer": "10",
                "solution_image": ""
            }
        },
        {
            "subject": "Math",
            "topic": "Analytic geometry and trigonometry",
            "question": "Determine the vertex of the parabola defined by the equation $y^2 + 4y - 8x + 20 = 0$",
            "question_image": "",
            "options": [
                { "label": "A", "text": "$(2, -2)$", "is_correct": true },
                { "label": "B", "text": "$(-2, 2)$", "is_correct": false },
                { "label": "C", "text": "$(2, 2)$", "is_correct": false },
                { "label": "D", "text": "$(-2, -2)$", "is_correct": false }
            ],
            "solution": {
                "steps": [
                    { "title": "Rearrange and Complete the Square", "content": "Group $y$ terms: $(y^2 + 4y) = 8x - 20$. Add 4 to both sides: $(y + 2)^2 = 8x - 16$." },
                    { "title": "Factor the Right Side", "content": "$(y + 2)^2 = 8(x - 2)$." },
                    { "title": "Identify the Vertex", "content": "Comparing to the standard form $(y - k)^2 = 4p(x - h)$, we find the vertex $(h, k)$ is $(2, -2)$." }
                ],
                "final_answer": "(2, -2)",
                "solution_image": ""
            }
        },
        {
            "subject": "Math",
            "topic": "Analytic geometry and trigonometry",
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
                    { "title": "Convert to Standard Form", "content": "Divide by 225: $(9x^2)/225 + (25y^2)/225 = 1 \\implies x^2/25 + y^2/9 = 1$." },
                    { "title": "Identify a and b", "content": "$a^2 = 25$ ($a = 5$) and $b^2 = 9$ ($b = 3$)." },
                    { "title": "Calculate Eccentricity", "content": "$c^2 = a^2 - b^2 = 25 - 9 = 16$ ($c = 4$). Eccentricity $e = c / a = 4 / 5 = 0.8$." }
                ],
                "final_answer": "0.8",
                "solution_image": ""
            }
        }
    ],
    'stats': [],
    'chemistry': [],
    'instr-controls': [],
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
