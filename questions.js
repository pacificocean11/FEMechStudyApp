const SUBJECTS = [
    {
        id: 'math',
        name: 'Mathematics',
        icon: '📐',
        count: 45,
        progress: 60,
        category: 'Core Sciences'
    },
    {
        id: 'thermo',
        name: 'Thermodynamics',
        icon: '🔥',
        count: 32,
        progress: 85,
        category: 'Mechanical Core'
    },
    {
        id: 'fluids',
        name: 'Fluid Mechanics',
        icon: '🌊',
        count: 28,
        progress: 40,
        category: 'Mechanical Core'
    },
    {
        id: 'statics',
        name: 'Statics',
        icon: '⚖️',
        count: 24,
        progress: 10,
        category: 'Core Sciences'
    },
    {
        id: 'dynamics',
        name: 'Dynamics',
        icon: '🏎️',
        count: 22,
        progress: 0,
        category: 'Core Sciences'
    },
    {
        id: 'materials',
        name: 'Mechanics of Materials',
        icon: '🏗️',
        count: 30,
        progress: 25,
        category: 'Mechanical Core'
    },
    {
        id: 'heat-transfer',
        name: 'Heat Transfer',
        icon: '☀️',
        count: 20,
        progress: 0,
        category: 'Mechanical Core'
    },
    {
        id: 'economics',
        name: 'Engineering Economics',
        icon: '💰',
        count: 15,
        progress: 50,
        category: 'Engineering Ops'
    },
    {
        id: 'ethics',
        name: 'Ethics & Professional Practice',
        icon: '🤝',
        count: 12,
        progress: 90,
        category: 'Engineering Ops'
    }
];

const QUESTIONS = {
    'thermo': [
        {
            id: 1,
            text: "A Carnot engine operates between a high-temperature reservoir at 800 K and a low-temperature reservoir at 300 K. What is the maximum possible thermal efficiency of this engine?",
            options: [
                "37.5%",
                "52.5%",
                "62.5%",
                "75.0%"
            ],
            correct: 2, // 1 - 300/800 = 0.625
            explanation: "The maximum efficiency of a heat engine is the Carnot efficiency: η = 1 - (TL / TH). η = 1 - (300 / 800) = 1 - 0.375 = 0.625 or 62.5%."
        },
        {
            id: 2,
            text: "Which of the following processes is constant-volume?",
            options: [
                "Isobaric",
                "Isothermal",
                "Isochoric",
                "Adiabatic"
            ],
            correct: 2,
            explanation: "An isochoric process is one in which the volume remains constant."
        },
        {
            id: 3,
            text: "For an ideal gas, the change in internal energy (ΔU) depends only on:",
            options: [
                "Pressure",
                "Volume",
                "Temperature",
                "Enthalpy"
            ],
            correct: 2,
            explanation: "According to Joule's Law, the internal energy of an ideal gas is a function of temperature only."
        }
    ],
    'math': [
        {
            id: 4,
            text: "What is the derivative of f(x) = 3x^2 + 2x - 5?",
            options: [
                "6x + 2",
                "3x + 2",
                "6x - 5",
                "x^2 + x"
            ],
            correct: 0,
            explanation: "Using the power rule: d/dx(x^n) = nx^(n-1). d/dx(3x^2) = 6x, d/dx(2x) = 2, d/dx(-5) = 0."
        },
        {
            id: 5,
            text: "Find the value of x that satisfies the equation: log2(x) = 5",
            options: [
                "10",
                "25",
                "32",
                "64"
            ],
            correct: 2,
            explanation: "log2(x) = 5 is equivalent to 2^5 = x. 2^5 = 32."
        }
    ],
    'statics': [
        {
            id: 6,
            text: "A force of 100 N is applied at an angle of 30° to the horizontal. What is the horizontal component of this force?",
            options: [
                "50.0 N",
                "86.6 N",
                "100.0 N",
                "173.2 N"
            ],
            correct: 1, // 100 * cos(30) = 86.6
            explanation: "Fx = F * cos(θ) = 100 * cos(30°) = 100 * 0.866 = 86.6 N."
        }
    ]
};
