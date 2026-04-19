const SUBJECTS = [
    { id: 'math', name: 'Mathematics', icon: '📐', count: 9, category: 'Core Sciences' },
    { id: 'stats', name: 'Probability & Statistics', icon: '📊', count: 6, category: 'Core Sciences' },
    { id: 'ethics', name: 'Ethics & Professional Practice', icon: '🤝', count: 6, category: 'Engineering Foundations' },
    { id: 'economics', name: 'Engineering Economics', icon: '💰', count: 6, category: 'Engineering Foundations' },
    { id: 'electricity', name: 'Electricity & Magnetism', icon: '⚡', count: 8, category: 'Engineering Foundations' },
    { id: 'statics', name: 'Statics', icon: '⚖️', count: 12, category: 'Mechanical Core' },
    { id: 'dynamics', name: 'Dynamics & Vibrations', icon: '🏎️', count: 15, category: 'Mechanical Core' },
    { id: 'materials', name: 'Mechanics of Materials', icon: '🏗️', count: 14, category: 'Mechanical Core' },
    { id: 'properties', name: 'Material Properties', icon: '🧪', count: 11, category: 'Mechanical Core' },
    { id: 'fluids', name: 'Fluid Mechanics', icon: '🌊', count: 15, category: 'Mechanical Core' },
    { id: 'thermo', name: 'Thermodynamics', icon: '🔥', count: 15, category: 'Mechanical Core' },
    { id: 'heat-transfer', name: 'Heat Transfer', icon: '☀️', count: 14, category: 'Mechanical Core' },
    { id: 'controls', name: 'Measurements & Controls', icon: '🕹️', count: 8, category: 'Advanced Applications' },
    { id: 'design', name: 'Mechanical Design', icon: '⚙️', count: 15, category: 'Advanced Applications' }
];

const QUESTIONS = {
    'math': [
        {
            "subject": "Mathematics",
            "topic": "Logarithms",
            "question": "Find the value of $x$ that satisfies the equation: $\\log_{10}(x + 2) + \\log_{10}(x - 1) = 1$",
            "options": [
                { "label": "A", "text": "$x = 3$", "is_correct": true },
                { "label": "B", "text": "$x = 4$", "is_correct": false },
                { "label": "C", "text": "$x = -4$", "is_correct": false },
                { "label": "D", "text": "$x = 3$ and $x = -4$", "is_correct": false }
            ],
            "solution": {
                "steps": [
                    { "title": "Apply Product Rule", "content": "$\\log_{10}((x + 2)(x - 1)) = 1$." },
                    { "title": "Convert to Exponential", "content": "$(x + 2)(x - 1) = 10^1 \\implies x^2 + x - 2 = 10$." },
                    { "title": "Solve Quadratic", "content": "$x^2 + x - 12 = 0 \\implies (x + 4)(x - 3) = 0$." },
                    { "title": "Check Extraneous", "content": "$x = -4$ makes the log argument negative. So $x = 3$ is the only valid solution." }
                ],
                "final_answer": "x = 3"
            }
        },
        {
            "subject": "Mathematics",
            "topic": "Analytic Geometry",
            "question": "What is the equation of the line passing through the point $(2, -3)$ and perpendicular to the line defined by $3x - 4y + 7 = 0$?",
            "image": "capture.png",
            "options": [
                { "label": "A", "text": "$3x - 4y - 18 = 0$", "is_correct": false },
                { "label": "B", "text": "$4x + 3y + 1 = 0$", "is_correct": true },
                { "label": "C", "text": "$4x - 3y - 17 = 0$", "is_correct": false },
                { "label": "D", "text": "$3x + 4y + 6 = 0$", "is_correct": false }
            ],
            "solution": {
                "steps": [
                    { "title": "Find the Slope of the Given Line", "content": "The given line is $3x - 4y + 7 = 0$. Rewriting in $y = mx + c$ form: $-4y = -3x - 7 \\implies y = \\frac{3}{4}x + \\frac{7}{4}$. So, $m_1 = \\frac{3}{4}$.", "image": "capture.png" },
                    { "title": "Determine the Perpendicular Slope", "content": "The slope of a perpendicular line ($m_2$) is the negative reciprocal: $m_2 = -1 / m_1 = -1 / (3/4) = -4/3$." },
                    { "title": "Use Point-Slope Form", "content": "Using point $(2, -3)$ and $m_2 = -4/3$: $y - (-3) = -4/3(x - 2) \\implies y + 3 = -4/3(x - 2)$." },
                    { "title": "Convert to General Form", "content": "Multiply by 3: $3(y + 3) = -4(x - 2) \\implies 3y + 9 = -4x + 8$. Rearranging: $4x + 3y + 1 = 0$." }
                ],
                "final_answer": "4x + 3y + 1 = 0"
            }
        }
    ],
    'stats': [
        {
            "subject": "Probability & Statistics",
            "topic": "Measures of Central Tendency",
            "question": "What is the median of the following set of numbers: 12, 15, 9, 21, 15, 17, 10?",
            "options": [
                { "label": "A", "text": "12", "is_correct": false },
                { "label": "B", "text": "14", "is_correct": false },
                { "label": "C", "text": "15", "is_correct": true },
                { "label": "D", "text": "17", "is_correct": false }
            ],
            "solution": {
                "steps": [
                    { "title": "Sort the Data", "content": "Arranging the numbers in ascending order: 9, 10, 12, 15, 15, 17, 21." },
                    { "title": "Identify the Middle Value", "content": "Since there are 7 numbers (an odd count), the median is the 4th number." },
                    { "title": "Result", "content": "The 4th number is 15." }
                ],
                "final_answer": "15"
            }
        }
    ],
    'thermo': [
        {
            "subject": "Thermodynamics",
            "topic": "Cycles",
            "question": "A Carnot engine operates between 800 K and 300 K. What is the maximum possible thermal efficiency?",
            "options": [
                { "label": "A", "text": "37.5%", "is_correct": false },
                { "label": "B", "text": "52.5%", "is_correct": false },
                { "label": "C", "text": "62.5%", "is_correct": true },
                { "label": "D", "text": "75.0%", "is_correct": false }
            ],
            "solution": {
                "steps": [
                    { "title": "Formula", "content": "$\\eta = 1 - (T_L / T_H)$." },
                    { "title": "Calculation", "content": "$\\eta = 1 - (300 / 800) = 0.625$." }
                ],
                "final_answer": "62.5%"
            }
        }
    ],
    'fluids': [
        {
            "subject": "Fluid Mechanics",
            "topic": "Hydrostatics",
            "question": "What is the pressure at a depth of 10m in fresh water?",
            "options": [
                { "label": "A", "text": "9.81 kPa", "is_correct": false },
                { "label": "B", "text": "98.1 kPa", "is_correct": true },
                { "label": "C", "text": "100 kPa", "is_correct": false },
                { "label": "D", "text": "981 kPa", "is_correct": false }
            ],
            "solution": {
                "steps": [
                    { "title": "Formula", "content": "$P = \\rho gh$." },
                    { "title": "Calculation", "content": "$P = 1000 \\times 9.81 \\times 10 = 98100$ Pa." }
                ],
                "final_answer": "98.1 kPa"
            }
        }
    ],
    'statics': [
        {
            "subject": "Statics",
            "topic": "Vectors",
            "question": "For the force system shown, determine the horizontal component of the 100 N force.",
            "tikz": "\\begin{tikzpicture}[scale=1.5]\n\\draw[->, thick] (0,0) -- (2,0) node[right] {$x$};\n\\draw[->, thick] (0,0) -- (0,2) node[above] {$y$};\n\\draw[->, ultra thick, red] (0,0) -- (1.732,1) node[midway, above left] {100 N};\n\\draw (0.5,0) arc (0:30:0.5);\n\\node at (0.7,0.2) {$30^\\circ$};\n\\end{tikzpicture}",
            "options": [
                { "label": "A", "text": "50.0 N", "is_correct": false },
                { "label": "B", "text": "86.6 N", "is_correct": true }
            ],
            "solution": {
                "steps": [
                    {
                        "title": "Resolution",
                        "content": "$F_x = F \\cos(30^\circ) = 100 \\times 0.866 = 86.6$ N.",
                        "tikz": "\\begin{tikzpicture}[scale=1.2]\n\\draw[->, thick] (0,0) -- (1.5,0) node[right] {$x$};\n\\draw[->, thick] (0,0) -- (0,1.5) node[above] {$y$};\n\\draw[->, ultra thick, red] (0,0) -- (1.732,1) node[midway, above left] {100 N};\n\\draw[dashed, blue] (1.732,1) -- (1.732,0) node[below] {$F_x$};\n\\end{tikzpicture}"
                    }
                ],
                "final_answer": "86.6 N"
            }
        }
    ],
    'dynamics': [
        {
            "subject": "Dynamics",
            "topic": "Kinematics",
            "question": "Acceleration of a car from 0 to 20 m/s in 5s. Distance?",
            "options": [
                { "label": "A", "text": "50 m", "is_correct": true },
                { "label": "B", "text": "100 m", "is_correct": false }
            ],
            "solution": {
                "steps": [
                    { "title": "Distance", "content": "$s = v_{avg} \\times t = \\frac{0+20}{2} \\times 5 = 10 \\times 5 = 50$ m." }
                ],
                "final_answer": "50 m"
            }
        }
    ],
    'materials': [
        {
            "subject": "Mechanics of Materials",
            "topic": "Stress",
            "question": "100 mm² rod, 5000 N tensile force. Stress?",
            "options": [
                { "label": "A", "text": "50 MPa", "is_correct": true },
                { "label": "B", "text": "500 MPa", "is_correct": false }
            ],
            "solution": {
                "steps": [
                    { "title": "Formula", "content": "$\\sigma = F / A = 5000 / 100 = 50$ N/mm²." }
                ],
                "final_answer": "50 MPa"
            }
        }
    ],
    'ethics': [
        {
            "subject": "Ethics",
            "topic": "Public Welfare",
            "question": "Primary obligation of an engineer?",
            "options": [
                { "label": "A", "text": "Public Welfare", "is_correct": true },
                { "label": "B", "text": "Employer", "is_correct": false }
            ],
            "solution": {
                "steps": [
                    { "title": "Canon", "content": "Hold paramount the safety and welfare of the public." }
                ],
                "final_answer": "Public Welfare"
            }
        }
    ],
    'economics': [
        {
            "subject": "Engineering Economics",
            "topic": "Interest",
            "question": "FV of $1000 at 5% for 3 years?",
            "options": [
                { "label": "A", "text": "$1,157.63", "is_correct": true },
                { "label": "B", "text": "$1,150.00", "is_correct": false }
            ],
            "solution": {
                "steps": [
                    { "title": "FV", "content": "$1000 \\times (1.05)^3 = 1157.63$." }
                ],
                "final_answer": "$1,157.63"
            }
        }
    ],
    'electricity': [
        {
            "subject": "Electricity & Magnetism",
            "topic": "DC Circuits",
            "question": "A 10-ohm resistor is connected to a 12V battery. What is the current?",
            "options": [
                { "label": "A", "text": "0.83 A", "is_correct": false },
                { "label": "B", "text": "1.2 A", "is_correct": true },
                { "label": "C", "text": "120 A", "is_correct": false },
                { "label": "D", "text": "1.0 A", "is_correct": false }
            ],
            "solution": {
                "steps": [
                    { "title": "Ohm's Law", "content": "Using $V = IR$, we solve for $I = V / R$." },
                    { "title": "Calculation", "content": "$I = 12 \\text{V} / 10 \\Omega = 1.2$ A." }
                ],
                "final_answer": "1.2 A"
            }
        }
    ],
    'properties': [
        {
            "subject": "Material Properties",
            "topic": "Stress-Strain",
            "question": "What point on the stress-strain curve represents the end of elastic behavior?",
            "options": [
                { "label": "A", "text": "Yield Point", "is_correct": true },
                { "label": "B", "text": "Ultimate Strength", "is_correct": false }
            ],
            "solution": {
                "steps": [
                    { "title": "Definition", "content": "The yield point is where permanent plastic deformation begins." }
                ],
                "final_answer": "Yield Point"
            }
        }
    ],
    'heat-transfer': [
        {
            "subject": "Heat Transfer",
            "topic": "Conduction",
            "question": "Heat transfer in solids is primarily:",
            "options": [
                { "label": "A", "text": "Conduction", "is_correct": true },
                { "label": "B", "text": "Convection", "is_correct": false }
            ],
            "solution": {
                "steps": [
                    { "title": "Mode", "content": "Conduction is molecular interaction in solids." }
                ],
                "final_answer": "Conduction"
            }
        }
    ],
    'controls': [
        {
            "subject": "Measurements & Controls",
            "topic": "Sensors",
            "question": "A thermocouple measures temperature by utilizing:",
            "options": [
                { "label": "A", "text": "Seebeck Effect", "is_correct": true },
                { "label": "B", "text": "Hall Effect", "is_correct": false }
            ],
            "solution": {
                "steps": [
                    { "title": "Principle", "content": "Thermocouples produce voltage proportional to temperature difference (Seebeck Effect)." }
                ],
                "final_answer": "Seebeck Effect"
            }
        }
    ],
    'design': [
        {
            "subject": "Mechanical Design",
            "topic": "Failure Theories",
            "question": "Distortion Energy Theory is also known as:",
            "options": [
                { "label": "A", "text": "Von Mises Criterion", "is_correct": true },
                { "label": "B", "text": "Tresca Criterion", "is_correct": false }
            ],
            "solution": {
                "steps": [
                    { "title": "Theory", "content": "The Distortion Energy theory is the most accurate for ductile materials." }
                ],
                "final_answer": "Von Mises"
            }
        }
    ]
};
