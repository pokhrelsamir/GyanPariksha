/* ======================================================
   GyanPariksha — Question Database
====================================================== */

const quizQuestions = [

    /* ==================================================
       COMPUTER SCIENCE — EASY
    ================================================== */

    {
        id: 1,
        category: "Computer Science",
        difficulty: "Easy",
        question: "What does CPU stand for?",
        options: [
            "Central Processing Unit",
            "Computer Personal Unit",
            "Central Program Utility",
            "Computer Processing Utility"
        ],
        answer: "Central Processing Unit",
        explanation: "CPU stands for Central Processing Unit and performs the main processing tasks of a computer."
    },

    {
        id: 2,
        category: "Computer Science",
        difficulty: "Easy",
        question: "What does RAM stand for?",
        options: [
            "Read Access Memory",
            "Random Access Memory",
            "Rapid Application Memory",
            "Remote Access Memory"
        ],
        answer: "Random Access Memory",
        explanation: "RAM stands for Random Access Memory and temporarily stores data used by running programs."
    },

    {
        id: 3,
        category: "Computer Science",
        difficulty: "Easy",
        question: "Which device is commonly used to enter text into a computer?",
        options: [
            "Monitor",
            "Keyboard",
            "Speaker",
            "Projector"
        ],
        answer: "Keyboard",
        explanation: "A keyboard is an input device commonly used to enter text and commands."
    },

    {
        id: 4,
        category: "Computer Science",
        difficulty: "Easy",
        question: "Which of the following is an operating system?",
        options: [
            "Windows",
            "Google",
            "HTML",
            "Python"
        ],
        answer: "Windows",
        explanation: "Windows is an operating system developed by Microsoft."
    },

    {
        id: 5,
        category: "Computer Science",
        difficulty: "Easy",
        question: "Which unit is commonly used to measure computer storage?",
        options: [
            "Byte",
            "Volt",
            "Hertz",
            "Watt"
        ],
        answer: "Byte",
        explanation: "Bytes and their larger units such as KB, MB, GB, and TB are used to measure digital storage."
    },


    /* ==================================================
       COMPUTER SCIENCE — MEDIUM
    ================================================== */

    {
        id: 6,
        category: "Computer Science",
        difficulty: "Medium",
        question: "Which data structure follows the LIFO principle?",
        options: [
            "Queue",
            "Stack",
            "Array",
            "Linked List"
        ],
        answer: "Stack",
        explanation: "A stack follows Last In, First Out (LIFO)."
    },

    {
        id: 7,
        category: "Computer Science",
        difficulty: "Medium",
        question: "Which data structure follows the FIFO principle?",
        options: [
            "Stack",
            "Queue",
            "Tree",
            "Graph"
        ],
        answer: "Queue",
        explanation: "A queue follows First In, First Out (FIFO)."
    },

    {
        id: 8,
        category: "Computer Science",
        difficulty: "Medium",
        question: "Which protocol is primarily used to transfer web pages?",
        options: [
            "HTTP",
            "FTP",
            "SMTP",
            "SSH"
        ],
        answer: "HTTP",
        explanation: "HTTP is the Hypertext Transfer Protocol used for communication between web browsers and web servers."
    },

    {
        id: 9,
        category: "Computer Science",
        difficulty: "Medium",
        question: "What is the primary purpose of an algorithm?",
        options: [
            "To store files",
            "To solve a problem step by step",
            "To increase monitor resolution",
            "To connect hardware devices"
        ],
        answer: "To solve a problem step by step",
        explanation: "An algorithm is a defined sequence of steps for solving a problem or performing a task."
    },

    {
        id: 10,
        category: "Computer Science",
        difficulty: "Medium",
        question: "Which language is primarily used to structure web pages?",
        options: [
            "CSS",
            "JavaScript",
            "HTML",
            "SQL"
        ],
        answer: "HTML",
        explanation: "HTML defines the structure and content of web pages."
    },


    /* ==================================================
       COMPUTER SCIENCE — HARD
    ================================================== */

    {
        id: 11,
        category: "Computer Science",
        difficulty: "Hard",
        question: "Which time complexity represents binary search on a sorted array?",
        options: [
            "O(n)",
            "O(n²)",
            "O(log n)",
            "O(1)"
        ],
        answer: "O(log n)",
        explanation: "Binary search repeatedly divides the search space in half, resulting in O(log n) time complexity."
    },

    {
        id: 12,
        category: "Computer Science",
        difficulty: "Hard",
        question: "Which normal form eliminates transitive dependencies?",
        options: [
            "First Normal Form",
            "Second Normal Form",
            "Third Normal Form",
            "Boyce-Codd Normal Form"
        ],
        answer: "Third Normal Form",
        explanation: "Third Normal Form (3NF) removes transitive dependencies between non-key attributes."
    },

    {
        id: 13,
        category: "Computer Science",
        difficulty: "Hard",
        question: "Which algorithm is commonly used to find the shortest path in a graph with non-negative edge weights?",
        options: [
            "Dijkstra's Algorithm",
            "Binary Search",
            "Merge Sort",
            "Depth-First Search"
        ],
        answer: "Dijkstra's Algorithm",
        explanation: "Dijkstra's algorithm finds shortest paths from a source vertex when edge weights are non-negative."
    },

    {
        id: 14,
        category: "Computer Science",
        difficulty: "Hard",
        question: "Which concept allows an object to take multiple forms?",
        options: [
            "Encapsulation",
            "Inheritance",
            "Polymorphism",
            "Abstraction"
        ],
        answer: "Polymorphism",
        explanation: "Polymorphism allows objects or methods to behave differently depending on their context."
    },

    {
        id: 15,
        category: "Computer Science",
        difficulty: "Hard",
        question: "Which database property ensures that a transaction is completed entirely or not at all?",
        options: [
            "Consistency",
            "Isolation",
            "Atomicity",
            "Durability"
        ],
        answer: "Atomicity",
        explanation: "Atomicity ensures that a transaction is treated as one indivisible unit."
    },


    /* ==================================================
       WEB DEVELOPMENT — EASY
    ================================================== */

    {
        id: 16,
        category: "Web Development",
        difficulty: "Easy",
        question: "What does HTML stand for?",
        options: [
            "Hyper Text Markup Language",
            "High Text Machine Language",
            "Hyperlink Text Management Language",
            "Home Tool Markup Language"
        ],
        answer: "Hyper Text Markup Language",
        explanation: "HTML stands for Hyper Text Markup Language."
    },

    {
        id: 17,
        category: "Web Development",
        difficulty: "Easy",
        question: "Which language is used to style web pages?",
        options: [
            "HTML",
            "CSS",
            "SQL",
            "Python"
        ],
        answer: "CSS",
        explanation: "CSS is used to style and control the presentation of web pages."
    },

    {
        id: 18,
        category: "Web Development",
        difficulty: "Easy",
        question: "Which language is commonly used to add interactivity to web pages?",
        options: [
            "JavaScript",
            "HTML",
            "CSS",
            "XML"
        ],
        answer: "JavaScript",
        explanation: "JavaScript is commonly used to add dynamic behavior and interactivity to websites."
    },

    {
        id: 19,
        category: "Web Development",
        difficulty: "Easy",
        question: "Which HTML tag is used to create a hyperlink?",
        options: [
            "<link>",
            "<a>",
            "<href>",
            "<url>"
        ],
        answer: "<a>",
        explanation: "The <a> element creates hyperlinks in HTML."
    },

    {
        id: 20,
        category: "Web Development",
        difficulty: "Easy",
        question: "Which HTML tag is used to display an image?",
        options: [
            "<image>",
            "<picture>",
            "<img>",
            "<src>"
        ],
        answer: "<img>",
        explanation: "The <img> element is used to embed an image in an HTML document."
    },


    /* ==================================================
       WEB DEVELOPMENT — MEDIUM
    ================================================== */

    {
        id: 21,
        category: "Web Development",
        difficulty: "Medium",
        question: "Which CSS property is used to change text color?",
        options: [
            "font-color",
            "text-color",
            "color",
            "foreground"
        ],
        answer: "color",
        explanation: "The CSS color property specifies the color of text."
    },

    {
        id: 22,
        category: "Web Development",
        difficulty: "Medium",
        question: "Which JavaScript keyword declares a block-scoped variable that can be reassigned?",
        options: [
            "var",
            "let",
            "const",
            "define"
        ],
        answer: "let",
        explanation: "let declares a block-scoped variable whose value can later be reassigned."
    },

    {
        id: 23,
        category: "Web Development",
        difficulty: "Medium",
        question: "Which HTTP method is generally used to retrieve data?",
        options: [
            "POST",
            "GET",
            "PATCH",
            "DELETE"
        ],
        answer: "GET",
        explanation: "GET requests are commonly used to retrieve resources from a server."
    },

    {
        id: 24,
        category: "Web Development",
        difficulty: "Medium",
        question: "Which CSS layout system is designed primarily for one-dimensional layouts?",
        options: [
            "Grid",
            "Flexbox",
            "Float",
            "Position"
        ],
        answer: "Flexbox",
        explanation: "Flexbox is designed primarily for arranging elements along one dimension."
    },

    {
        id: 25,
        category: "Web Development",
        difficulty: "Medium",
        question: "What does JSON commonly stand for?",
        options: [
            "JavaScript Object Notation",
            "Java Source Object Network",
            "JavaScript Online Network",
            "JSON Object Notation"
        ],
        answer: "JavaScript Object Notation",
        explanation: "JSON stands for JavaScript Object Notation and is commonly used for structured data exchange."
    },


    /* ==================================================
       GENERAL KNOWLEDGE — EASY
    ================================================== */

    {
        id: 26,
        category: "General Knowledge",
        difficulty: "Easy",
        question: "What is the capital city of Nepal?",
        options: [
            "Pokhara",
            "Kathmandu",
            "Lalitpur",
            "Biratnagar"
        ],
        answer: "Kathmandu",
        explanation: "Kathmandu is the capital city of Nepal."
    },

    {
        id: 27,
        category: "General Knowledge",
        difficulty: "Easy",
        question: "How many days are there in a week?",
        options: [
            "5",
            "6",
            "7",
            "8"
        ],
        answer: "7",
        explanation: "A week contains seven days."
    },

    {
        id: 28,
        category: "General Knowledge",
        difficulty: "Easy",
        question: "Which planet is known as the Red Planet?",
        options: [
            "Venus",
            "Mars",
            "Jupiter",
            "Mercury"
        ],
        answer: "Mars",
        explanation: "Mars is commonly known as the Red Planet because of its reddish appearance."
    },

    {
        id: 29,
        category: "General Knowledge",
        difficulty: "Easy",
        question: "How many continents are there?",
        options: [
            "5",
            "6",
            "7",
            "8"
        ],
        answer: "7",
        explanation: "The commonly taught model recognizes seven continents."
    },

    {
        id: 30,
        category: "General Knowledge",
        difficulty: "Easy",
        question: "Which is the largest ocean on Earth?",
        options: [
            "Atlantic Ocean",
            "Indian Ocean",
            "Pacific Ocean",
            "Arctic Ocean"
        ],
        answer: "Pacific Ocean",
        explanation: "The Pacific Ocean is the largest ocean on Earth."
    },


    /* ==================================================
       GENERAL KNOWLEDGE — MEDIUM
    ================================================== */

    {
        id: 31,
        category: "General Knowledge",
        difficulty: "Medium",
        question: "Which gas is most abundant in Earth's atmosphere?",
        options: [
            "Oxygen",
            "Nitrogen",
            "Carbon Dioxide",
            "Hydrogen"
        ],
        answer: "Nitrogen",
        explanation: "Nitrogen makes up roughly 78% of Earth's atmosphere."
    },

    {
        id: 32,
        category: "General Knowledge",
        difficulty: "Medium",
        question: "Which is the smallest prime number?",
        options: [
            "0",
            "1",
            "2",
            "3"
        ],
        answer: "2",
        explanation: "2 is the smallest prime number and the only even prime number."
    },

    {
        id: 33,
        category: "General Knowledge",
        difficulty: "Medium",
        question: "Which organ pumps blood throughout the human body?",
        options: [
            "Liver",
            "Lung",
            "Heart",
            "Kidney"
        ],
        answer: "Heart",
        explanation: "The heart pumps blood throughout the body."
    },

    {
        id: 34,
        category: "General Knowledge",
        difficulty: "Medium",
        question: "Which instrument is used to measure temperature?",
        options: [
            "Barometer",
            "Thermometer",
            "Hygrometer",
            "Altimeter"
        ],
        answer: "Thermometer",
        explanation: "A thermometer is used to measure temperature."
    },

    {
        id: 35,
        category: "General Knowledge",
        difficulty: "Medium",
        question: "Which metal is liquid at room temperature?",
        options: [
            "Iron",
            "Mercury",
            "Copper",
            "Aluminium"
        ],
        answer: "Mercury",
        explanation: "Mercury is a metal that remains liquid at typical room temperatures."
    },


    /* ==================================================
       SCIENCE — EASY
    ================================================== */

    {
        id: 36,
        category: "Science",
        difficulty: "Easy",
        question: "What is H2O commonly known as?",
        options: [
            "Oxygen",
            "Hydrogen",
            "Water",
            "Carbon Dioxide"
        ],
        answer: "Water",
        explanation: "H2O is the chemical formula for water."
    },

    {
        id: 37,
        category: "Science",
        difficulty: "Easy",
        question: "What force pulls objects toward Earth?",
        options: [
            "Friction",
            "Gravity",
            "Magnetism",
            "Pressure"
        ],
        answer: "Gravity",
        explanation: "Gravity is the force that attracts objects toward Earth."
    },

    {
        id: 38,
        category: "Science",
        difficulty: "Easy",
        question: "Which part of a plant usually absorbs water from the soil?",
        options: [
            "Flower",
            "Leaf",
            "Root",
            "Fruit"
        ],
        answer: "Root",
        explanation: "Plant roots absorb water and minerals from the soil."
    },

    {
        id: 39,
        category: "Science",
        difficulty: "Easy",
        question: "What is the center of an atom called?",
        options: [
            "Electron",
            "Nucleus",
            "Proton",
            "Shell"
        ],
        answer: "Nucleus",
        explanation: "The nucleus is the dense central region of an atom containing protons and neutrons."
    },

    {
        id: 40,
        category: "Science",
        difficulty: "Easy",
        question: "Which star is closest to Earth?",
        options: [
            "Sirius",
            "Polaris",
            "The Sun",
            "Betelgeuse"
        ],
        answer: "The Sun",
        explanation: "The Sun is the star closest to Earth."
    },


    /* ==================================================
       SCIENCE — MEDIUM
    ================================================== */

    {
        id: 41,
        category: "Science",
        difficulty: "Medium",
        question: "What is the basic unit of life?",
        options: [
            "Atom",
            "Cell",
            "Tissue",
            "Organ"
        ],
        answer: "Cell",
        explanation: "The cell is considered the basic structural and functional unit of life."
    },

    {
        id: 42,
        category: "Science",
        difficulty: "Medium",
        question: "Which planet is the largest in our Solar System?",
        options: [
            "Earth",
            "Saturn",
            "Jupiter",
            "Neptune"
        ],
        answer: "Jupiter",
        explanation: "Jupiter is the largest planet in our Solar System."
    },

    {
        id: 43,
        category: "Science",
        difficulty: "Medium",
        question: "What process do plants use to convert light energy into chemical energy?",
        options: [
            "Respiration",
            "Photosynthesis",
            "Fermentation",
            "Digestion"
        ],
        answer: "Photosynthesis",
        explanation: "Plants use photosynthesis to convert light energy into chemical energy."
    },

    {
        id: 44,
        category: "Science",
        difficulty: "Medium",
        question: "Which blood cells are primarily responsible for fighting infections?",
        options: [
            "Red blood cells",
            "White blood cells",
            "Platelets",
            "Plasma cells"
        ],
        answer: "White blood cells",
        explanation: "White blood cells play a major role in the body's immune response."
    },

    {
        id: 45,
        category: "Science",
        difficulty: "Medium",
        question: "What is the SI unit of force?",
        options: [
            "Joule",
            "Newton",
            "Watt",
            "Pascal"
        ],
        answer: "Newton",
        explanation: "The SI unit of force is the newton (N)."
    }

];


/* ======================================================
   QUIZ CATEGORIES
====================================================== */

const quizCategories = [
    "All",
    "Computer Science",
    "Web Development",
    "General Knowledge",
    "Science"
];


/* ======================================================
   QUIZ DIFFICULTIES
====================================================== */

const quizDifficulties = [
    "All",
    "Easy",
    "Medium",
    "Hard"
];