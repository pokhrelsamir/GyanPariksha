/* ======================================================
   GyanPariksha — Quiz Engine
====================================================== */

const Quiz = {

    /* --------------------------------------------------
       QUIZ QUESTION BANK
    -------------------------------------------------- */

    questions: [

        /* ==================== HTML ==================== */

        {
            category: "html",
            difficulty: "easy",
            question: "What does HTML stand for?",
            options: [
                "Hyper Text Markup Language",
                "High Text Machine Language",
                "Hyperlink Text Management Language",
                "Home Tool Markup Language"
            ],
            answer: 0
        },

        {
            category: "html",
            difficulty: "easy",
            question: "Which HTML tag is used to create a hyperlink?",
            options: [
                "<link>",
                "<a>",
                "<href>",
                "<url>"
            ],
            answer: 1
        },

        {
            category: "html",
            difficulty: "medium",
            question: "Which HTML element is used to define the main content of a document?",
            options: [
                "<section>",
                "<main>",
                "<content>",
                "<body>"
            ],
            answer: 1
        },

        {
            category: "html",
            difficulty: "hard",
            question: "Which attribute is used to provide alternative text for an image?",
            options: [
                "title",
                "src",
                "alt",
                "description"
            ],
            answer: 2
        },


        /* ==================== CSS ==================== */

        {
            category: "css",
            difficulty: "easy",
            question: "What does CSS stand for?",
            options: [
                "Computer Style Sheets",
                "Cascading Style Sheets",
                "Creative Style System",
                "Colorful Style Sheets"
            ],
            answer: 1
        },

        {
            category: "css",
            difficulty: "easy",
            question: "Which property is used to change text color?",
            options: [
                "font-color",
                "text-color",
                "color",
                "foreground"
            ],
            answer: 2
        },

        {
            category: "css",
            difficulty: "medium",
            question: "Which CSS property is used to create a flexible layout?",
            options: [
                "display: block",
                "display: flex",
                "position: flexible",
                "layout: flex"
            ],
            answer: 1
        },

        {
            category: "css",
            difficulty: "hard",
            question: "Which CSS property controls the stacking order of elements?",
            options: [
                "stack",
                "layer",
                "z-index",
                "position-index"
            ],
            answer: 2
        },


        /* ==================== JAVASCRIPT ==================== */

        {
            category: "javascript",
            difficulty: "easy",
            question: "Which keyword is used to declare a variable in modern JavaScript?",
            options: [
                "var",
                "let",
                "variable",
                "define"
            ],
            answer: 1
        },

        {
            category: "javascript",
            difficulty: "easy",
            question: "Which symbol is used for strict equality?",
            options: [
                "==",
                "=",
                "===",
                "!="
            ],
            answer: 2
        },

        {
            category: "javascript",
            difficulty: "medium",
            question: "Which method converts a JSON string into a JavaScript object?",
            options: [
                "JSON.parse()",
                "JSON.convert()",
                "JSON.object()",
                "JSON.decode()"
            ],
            answer: 0
        },

        {
            category: "javascript",
            difficulty: "hard",
            question: "What does a Promise represent in JavaScript?",
            options: [
                "A synchronous loop",
                "The eventual completion or failure of an asynchronous operation",
                "A JavaScript class",
                "A browser event"
            ],
            answer: 1
        },


        /* ==================== PYTHON ==================== */

        {
            category: "python",
            difficulty: "easy",
            question: "Which keyword is used to define a function in Python?",
            options: [
                "function",
                "define",
                "def",
                "func"
            ],
            answer: 2
        },

        {
            category: "python",
            difficulty: "easy",
            question: "Which symbol is used to create a comment in Python?",
            options: [
                "//",
                "/*",
                "#",
                "<!--"
            ],
            answer: 2
        },

        {
            category: "python",
            difficulty: "medium",
            question: "Which data type stores key-value pairs in Python?",
            options: [
                "List",
                "Tuple",
                "Set",
                "Dictionary"
            ],
            answer: 3
        },

        {
            category: "python",
            difficulty: "hard",
            question: "Which keyword is used to create a generator in Python?",
            options: [
                "return",
                "yield",
                "generate",
                "async"
            ],
            answer: 1
        },


        /* ==================== COMPUTER ==================== */

        {
            category: "computer",
            difficulty: "easy",
            question: "What is the brain of a computer commonly called?",
            options: [
                "RAM",
                "Hard Disk",
                "CPU",
                "Monitor"
            ],
            answer: 2
        },

        {
            category: "computer",
            difficulty: "easy",
            question: "Which device is primarily used to enter text into a computer?",
            options: [
                "Monitor",
                "Keyboard",
                "Speaker",
                "Printer"
            ],
            answer: 1
        },

        {
            category: "computer",
            difficulty: "medium",
            question: "Which memory is volatile?",
            options: [
                "ROM",
                "Hard Disk",
                "RAM",
                "SSD"
            ],
            answer: 2
        },

        {
            category: "computer",
            difficulty: "hard",
            question: "Which number system is primarily used by computers?",
            options: [
                "Decimal",
                "Binary",
                "Octal",
                "Roman"
            ],
            answer: 1
        }

    ],


    /* --------------------------------------------------
       CURRENT QUIZ STATE
    -------------------------------------------------- */

    state: {

        questions: [],

        currentIndex: 0,

        score: 0,

        correct: 0,

        wrong: 0,

        answered: false,

        selectedAnswer: null,

        category: "all",

        difficulty: "all",

        started: false,

        completed: false,

        startTime: null,

        endTime: null

    },


    /* --------------------------------------------------
       START QUIZ
    -------------------------------------------------- */

    start(category = "all", difficulty = "all", amount = 10) {

        this.state.category = category;
        this.state.difficulty = difficulty;

        let filteredQuestions =
            this.questions.filter(question => {

                const categoryMatch =
                    category === "all" ||
                    question.category === category;

                const difficultyMatch =
                    difficulty === "all" ||
                    question.difficulty === difficulty;

                return categoryMatch && difficultyMatch;

            });


        /* Shuffle questions */

        filteredQuestions =
            this.shuffle(filteredQuestions);


        /* Limit question count */

        this.state.questions =
            filteredQuestions.slice(0, amount);


        /* Reset state */

        this.state.currentIndex = 0;

        this.state.score = 0;

        this.state.correct = 0;

        this.state.wrong = 0;

        this.state.answered = false;

        this.state.selectedAnswer = null;

        this.state.started = true;

        this.state.completed = false;

        this.state.startTime = Date.now();

        this.state.endTime = null;


        return this.getCurrentQuestion();

    },


    /* --------------------------------------------------
       GET CURRENT QUESTION
    -------------------------------------------------- */

    getCurrentQuestion() {

        return (
            this.state.questions[
                this.state.currentIndex
            ] || null
        );

    },


    /* --------------------------------------------------
       GET QUESTION COUNT
    -------------------------------------------------- */

    getTotalQuestions() {

        return this.state.questions.length;

    },


    getCurrentQuestionNumber() {

        return this.state.currentIndex + 1;

    },


    /* --------------------------------------------------
       CHECK ANSWER
    -------------------------------------------------- */

    answer(selectedIndex) {

        if (!this.state.started) {

            return {
                success: false,
                message: "Quiz has not started."
            };

        }


        if (this.state.completed) {

            return {
                success: false,
                message: "Quiz has already ended."
            };

        }


        if (this.state.answered) {

            return {
                success: false,
                message: "Question already answered."
            };

        }


        const question =
            this.getCurrentQuestion();


        if (!question) {

            return {
                success: false,
                message: "Question not found."
            };

        }


        this.state.selectedAnswer =
            selectedIndex;

        this.state.answered = true;


        const isCorrect =
            selectedIndex === question.answer;


        if (isCorrect) {

            this.state.correct++;

            this.state.score +=
                this.getQuestionPoints(question);

        }
        else {

            this.state.wrong++;

        }


        return {

            success: true,

            correct: isCorrect,

            correctAnswer: question.answer,

            selectedAnswer: selectedIndex,

            score: this.state.score,

            correctCount: this.state.correct,

            wrongCount: this.state.wrong

        };

    },


    /* --------------------------------------------------
       QUESTION POINTS
    -------------------------------------------------- */

    getQuestionPoints(question) {

        switch (question.difficulty) {

            case "hard":
                return 30;

            case "medium":
                return 20;

            case "easy":
            default:
                return 10;

        }

    },


    /* --------------------------------------------------
       NEXT QUESTION
    -------------------------------------------------- */

    next() {

        if (!this.state.started) {
            return null;
        }


        if (!this.state.answered) {

            return {
                success: false,
                message: "Please answer the question first."
            };

        }


        if (
            this.state.currentIndex >=
            this.state.questions.length - 1
        ) {

            this.complete();

            return {
                success: true,
                completed: true
            };

        }


        this.state.currentIndex++;

        this.state.answered = false;

        this.state.selectedAnswer = null;


        return {

            success: true,

            completed: false,

            question: this.getCurrentQuestion()

        };

    },


    /* --------------------------------------------------
       COMPLETE QUIZ
    -------------------------------------------------- */

    complete() {

        if (this.state.completed) {
            return this.getResult();
        }


        this.state.completed = true;

        this.state.started = false;

        this.state.endTime = Date.now();


        return this.getResult();

    },


    /* --------------------------------------------------
       RESULT
    -------------------------------------------------- */

    getResult() {

        const total =
            this.state.questions.length;


        const answered =
            this.state.correct +
            this.state.wrong;


        const accuracy =
            answered > 0
                ? Math.round(
                    (this.state.correct / answered) * 100
                )
                : 0;


        const duration =
            this.state.startTime &&
            this.state.endTime
                ? Math.round(
                    (this.state.endTime -
                        this.state.startTime) / 1000
                )
                : 0;


        const maxScore =
            this.state.questions.reduce(
                (total, question) =>
                    total +
                    this.getQuestionPoints(question),
                0
            );


        return {

            score: this.state.score,

            maxScore,

            correct: this.state.correct,

            wrong: this.state.wrong,

            unanswered:
                total - answered,

            total,

            accuracy,

            duration,

            category: this.state.category,

            difficulty: this.state.difficulty

        };

    },


    /* --------------------------------------------------
       PROGRESS
    -------------------------------------------------- */

    getProgress() {

        const total =
            this.state.questions.length;


        if (!total) {
            return 0;
        }


        return Math.round(
            (
                this.state.currentIndex /
                total
            ) * 100
        );

    },


    /* --------------------------------------------------
       RESET QUIZ
    -------------------------------------------------- */

    reset() {

        this.state = {

            questions: [],

            currentIndex: 0,

            score: 0,

            correct: 0,

            wrong: 0,

            answered: false,

            selectedAnswer: null,

            category: "all",

            difficulty: "all",

            started: false,

            completed: false,

            startTime: null,

            endTime: null

        };

    },


    /* --------------------------------------------------
       SHUFFLE ARRAY
    -------------------------------------------------- */

    shuffle(array) {

        const shuffled =
            [...array];


        for (
            let i = shuffled.length - 1;
            i > 0;
            i--
        ) {

            const j =
                Math.floor(
                    Math.random() * (i + 1)
                );


            [
                shuffled[i],
                shuffled[j]
            ] =
            [
                shuffled[j],
                shuffled[i]
            ];

        }


        return shuffled;

    },


    /* --------------------------------------------------
       GET AVAILABLE CATEGORIES
    -------------------------------------------------- */

    getCategories() {

        return [
            ...new Set(
                this.questions.map(
                    question =>
                        question.category
                )
            )
        ];

    },


    /* --------------------------------------------------
       GET AVAILABLE DIFFICULTIES
    -------------------------------------------------- */

    getDifficulties() {

        return [
            "easy",
            "medium",
            "hard"
        ];

    }

};


/* ======================================================
   GLOBAL ACCESS
====================================================== */

window.Quiz = Quiz;