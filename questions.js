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
            options: ["37.5%", "52.5%", "62.5%", "75.0%"],
            correct: 2,
            explanation: "The maximum efficiency of a heat engine is the Carnot efficiency: η = 1 - (TL / TH). η = 1 - (300 / 800) = 0.625 or 62.5%."
        },
        {
            id: 2,
            text: "Which of the following processes is constant-volume?",
            options: ["Isobaric", "Isothermal", "Isochoric", "Adiabatic"],
            correct: 2,
            explanation: "An isochoric process is one in which the volume remains constant."
        },
        {
            id: 3,
            text: "For an ideal gas, the change in internal energy (ΔU) depends only on:",
            options: ["Pressure", "Volume", "Temperature", "Enthalpy"],
            correct: 2,
            explanation: "According to Joule's Law, the internal energy of an ideal gas is a function of temperature only."
        }
    ],
    'math': [
        {
            id: 4,
            text: "What is the derivative of f(x) = 3x^2 + 2x - 5?",
            options: ["6x + 2", "3x + 2", "6x - 5", "x^2 + x"],
            correct: 0,
            explanation: "Using the power rule: d/dx(x^n) = nx^(n-1). d/dx(3x^2) = 6x, d/dx(2x) = 2, d/dx(-5) = 0."
        },
        {
            id: 5,
            text: "Find the value of x that satisfies the equation: log2(x) = 5",
            options: ["10", "25", "32", "64"],
            correct: 2,
            explanation: "log2(x) = 5 is equivalent to 2^5 = x. 2^5 = 32."
        }
    ],
    'statics': [
        {
            id: 6,
            text: "A force of 100 N is applied at an angle of 30° to the horizontal. What is the horizontal component of this force?",
            options: ["50.0 N", "86.6 N", "100.0 N", "173.2 N"],
            correct: 1,
            explanation: "Fx = F * cos(30°) = 100 * 0.866 = 86.6 N."
        },
        {
            id: 7,
            text: "A 10 kg mass rests on a surface with static friction coefficient of 0.4. What is the min force to move it?",
            options: ["19.6 N", "39.2 N", "98.1 N", "4.0 N"],
            correct: 1,
            explanation: "F = μs * mg = 0.4 * 10 * 9.81 = 39.24 N."
        }
    ],
    'dynamics': [
        {
            id: 8,
            text: "A car accelerates from rest to 20 m/s in 5s. What is the distance traveled?",
            options: ["50 m", "100 m", "150 m", "200 m"],
            correct: 0,
            explanation: "a = Δv/Δt = 20/5 = 4. s = 0.5at² = 0.5 * 4 * 25 = 50 m."
        },
        {
            id: 9,
            text: "A 2 kg ball is thrown upwards at 15 m/s. What is the max height reached?",
            options: ["5.7 m", "8.2 m", "11.5 m", "22.5 m"],
            correct: 2,
            explanation: "h = v² / (2g) = 15² / (2 * 9.81) = 11.47 m."
        }
    ],
    'fluids': [
        {
            id: 10,
            text: "What is the pressure at a depth of 10m in fresh water?",
            options: ["9.81 kPa", "98.1 kPa", "100 kPa", "981 kPa"],
            correct: 1,
            explanation: "P = ρgh = 1000 * 9.81 * 10 = 98,100 Pa = 98.1 kPa."
        },
        {
            id: 11,
            text: "A fluid flows through a pipe with diameter 0.1m at 2 m/s. What is the flow rate?",
            options: ["0.0157 m³/s", "0.0628 m³/s", "0.1 m³/s", "0.2 m³/s"],
            correct: 0,
            explanation: "Q = Av = π(0.05)² * 2 = 0.00785 * 2 = 0.0157 m³/s."
        }
    ],
    'materials': [
        {
            id: 12,
            text: "A 100 mm² rod is subjected to a 5000 N tensile force. What is the stress?",
            options: ["0.5 MPa", "5 MPa", "50 MPa", "500 MPa"],
            correct: 2,
            explanation: "σ = F/A = 5000 / 100 = 50 MPa."
        },
        {
            id: 13,
            text: "Material property describing energy absorption before failure is:",
            options: ["Hardness", "Elasticity", "Toughness", "Ductility"],
            correct: 2,
            explanation: "Toughness is the area under the stress-strain curve representing energy absorption."
        }
    ],
    'heat-transfer': [
        {
            id: 14,
            text: "Heat transfer through a solid wall is primarily:",
            options: ["Conduction", "Convection", "Radiation", "Advection"],
            correct: 0,
            explanation: "Conduction is the primary mode of heat transfer in solids."
        },
        {
            id: 15,
            text: "Stefan-Boltzmann law relates radiant heat to which power of temperature?",
            options: ["1st", "2nd", "3rd", "4th"],
            correct: 3,
            explanation: "Heat is proportional to T to the 4th power."
        }
    ],
    'economics': [
        {
            id: 16,
            text: "What is the future value of $1,000 at 5% interest for 3 years?",
            options: ["$1,150.00", "$1,157.63", "$1,050.00", "$1,215.51"],
            correct: 1,
            explanation: "FV = 1000 * (1.05)³ = $1,157.63."
        }
    ],
    'ethics': [
        {
            id: 17,
            text: "Primary obligation of an engineer according to NSPE is to:",
            options: ["Employer", "Client", "Profession", "Public Welfare"],
            correct: 3,
            explanation: "Safety, health, and welfare of the public is the first canon."
        }
    ]
};
