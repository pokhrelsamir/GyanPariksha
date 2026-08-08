/* ======================================================
   GyanPariksha — Main Application Controller
====================================================== */


/* ------------------------------------------------------
   APPLICATION
------------------------------------------------------ */

const App = {

    initialized: false,


    /* --------------------------------------------------
       INITIALIZE APPLICATION
    -------------------------------------------------- */

    init() {

        if (this.initialized) {
            return;
        }


        console.log(
            "GyanPariksha initializing..."
        );


        /*
         * Make sure required modules exist.
         */

        if (
            typeof Quiz === "undefined"
        ) {

            console.error(
                "Quiz module is not loaded."
            );

            return;

        }


        if (
            typeof UI === "undefined"
        ) {

            console.error(
                "UI module is not loaded."
            );

            return;

        }


        if (
            typeof StorageManager ===
            "undefined"
        ) {

            console.warn(
                "StorageManager is not available."
            );

        }


        /*
         * Initialize UI.
         */

        if (
            typeof UI.init ===
            "function"
        ) {

            UI.init();

        }


        /*
         * Load saved application data.
         */

        this.loadSavedData();


        /*
         * Register global events.
         */

        this.registerEvents();


        /*
         * Mark application initialized.
         */

        this.initialized = true;


        console.log(
            "GyanPariksha initialized successfully."
        );

    },


    /* --------------------------------------------------
       LOAD SAVED DATA
    -------------------------------------------------- */

    loadSavedData() {

        if (
            typeof StorageManager ===
            "undefined"
        ) {

            return;

        }


        const bestScore =
            StorageManager.getBestScore();


        /*
         * Display best score if the UI
         * contains the element.
         */

        const bestScoreElements =
            document.querySelectorAll(
                "#bestScore, .best-score-value"
            );


        bestScoreElements.forEach(
            element => {

                element.textContent =
                    bestScore;

            }
        );


        /*
         * Load quiz statistics if
         * corresponding elements exist.
         */

        const statistics =
            StorageManager.getStatistics();


        const totalQuizElement =
            document.querySelector(
                "#totalQuizzes"
            );


        if (totalQuizElement) {

            totalQuizElement.textContent =
                statistics.totalQuizzes;

        }


        const averageAccuracyElement =
            document.querySelector(
                "#averageAccuracy"
            );


        if (averageAccuracyElement) {

            averageAccuracyElement.textContent =
                `${statistics.averageAccuracy}%`;

        }


        const totalCorrectElement =
            document.querySelector(
                "#totalCorrect"
            );


        if (totalCorrectElement) {

            totalCorrectElement.textContent =
                statistics.totalCorrect;

        }

    },


    /* --------------------------------------------------
       REGISTER GLOBAL EVENTS
    -------------------------------------------------- */

    registerEvents() {

        /*
         * Quiz completed event.
         */

        document.addEventListener(
            "quizCompleted",
            event => {

                this.handleQuizCompleted(
                    event.detail
                );

            }
        );


        /*
         * Allow keyboard navigation.
         */

        document.addEventListener(
            "keydown",
            event => {

                this.handleKeyboard(
                    event
                );

            }
        );


        /*
         * Handle page visibility.
         */

        document.addEventListener(
            "visibilitychange",
            () => {

                this.handleVisibility();

            }
        );

    },


    /* --------------------------------------------------
       QUIZ COMPLETED
    -------------------------------------------------- */

    handleQuizCompleted(result) {

        if (!result) {
            return;
        }


        console.log(
            "Quiz completed:",
            result
        );


        /*
         * Refresh stored statistics.
         */

        this.loadSavedData();


        /*
         * Optional completion event
         * for future features.
         */

        document.dispatchEvent(

            new CustomEvent(
                "quizStatisticsUpdated",
                {
                    detail:
                        typeof StorageManager !==
                        "undefined"
                            ? StorageManager
                                .getStatistics()
                            : null
                }
            )

        );

    },


    /* --------------------------------------------------
       KEYBOARD CONTROLS
    -------------------------------------------------- */

    handleKeyboard(event) {

        /*
         * Ignore keyboard shortcuts while
         * typing inside form controls.
         */

        const target =
            event.target;


        if (
            target &&
            (
                target.tagName === "INPUT" ||
                target.tagName === "TEXTAREA" ||
                target.tagName === "SELECT"
            )
        ) {

            return;

        }


        /*
         * Number keys 1–4 select answers.
         */

        if (
            ["1", "2", "3", "4"]
                .includes(event.key)
        ) {

            const optionIndex =
                Number(event.key) - 1;


            const options =
                document.querySelectorAll(
                    ".quiz-option"
                );


            const option =
                options[optionIndex];


            if (
                option &&
                !option.disabled
            ) {

                option.click();

            }

        }


        /*
         * Enter / Space moves
         * to the next question.
         */

        if (
            event.key === "Enter" ||
            event.key === " "
        ) {

            const nextButton =
                document.querySelector(
                    "#nextQuestion, #next"
                );


            if (
                nextButton &&
                !nextButton.disabled
            ) {

                event.preventDefault();

                nextButton.click();

            }

        }

    },


    /* --------------------------------------------------
       PAGE VISIBILITY
    -------------------------------------------------- */

    handleVisibility() {

        if (
            document.hidden
        ) {

            console.log(
                "GyanPariksha paused in background."
            );

        }
        else {

            console.log(
                "GyanPariksha active."
            );

        }

    },


    /* --------------------------------------------------
       RESET APPLICATION DATA
    -------------------------------------------------- */

    resetData() {

        if (
            typeof StorageManager ===
            "undefined"
        ) {

            return false;

        }


        const confirmed =
            window.confirm(
                "Are you sure you want to delete all GyanPariksha data?"
            );


        if (!confirmed) {

            return false;

        }


        StorageManager.clearAll();


        this.loadSavedData();


        return true;

    },


    /* --------------------------------------------------
       GET APPLICATION INFORMATION
    -------------------------------------------------- */

    getInfo() {

        return {

            name:
                "GyanPariksha",

            version:
                "1.0.0",

            author:
                "Samir Pokhrel",

            storage:
                typeof StorageManager !==
                "undefined",

            quiz:
                typeof Quiz !==
                "undefined",

            ui:
                typeof UI !==
                "undefined"

        };

    }

};


/* ======================================================
   INITIALIZE APPLICATION
====================================================== */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        App.init();

    }
);


/* ======================================================
   GLOBAL ACCESS
====================================================== */

window.App = App;