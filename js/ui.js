/* ======================================================
   QuizOnline — UI Controller
====================================================== */

const UI = {

    /* --------------------------------------------------
       DOM ELEMENTS
    -------------------------------------------------- */

    elements: {},


    /* --------------------------------------------------
       INITIALIZE UI
    -------------------------------------------------- */

    init() {

        this.cacheElements();

        this.bindEvents();

        this.showHome();

    },


    /* --------------------------------------------------
       CACHE DOM ELEMENTS
    -------------------------------------------------- */

    cacheElements() {

        /*
         * The selectors below support common IDs/classes.
         * If your existing HTML uses different names,
         * update only this section.
         */

        this.elements = {

            /* Screens */

            home:
                document.querySelector("#home") ||
                document.querySelector(".home"),

            quiz:
                document.querySelector("#quiz") ||
                document.querySelector(".quiz"),

            result:
                document.querySelector("#result") ||
                document.querySelector(".result"),


            /* Settings */

            category:
                document.querySelector("#category"),

            difficulty:
                document.querySelector("#difficulty"),

            questionCount:
                document.querySelector("#questionCount"),


            /* Quiz */

            question:
                document.querySelector("#question"),

            options:
                document.querySelector("#options") ||
                document.querySelector(".options"),

            progress:
                document.querySelector("#progress"),

            progressBar:
                document.querySelector("#progressBar"),

            questionNumber:
                document.querySelector("#questionNumber"),

            timer:
                document.querySelector("#timer"),


            /* Buttons */

            startButton:
                document.querySelector("#startQuiz") ||
                document.querySelector("#start"),

            nextButton:
                document.querySelector("#nextQuestion") ||
                document.querySelector("#next"),

            restartButton:
                document.querySelector("#restartQuiz") ||
                document.querySelector("#restart"),


            /* Results */

            score:
                document.querySelector("#score"),

            correct:
                document.querySelector("#correct"),

            wrong:
                document.querySelector("#wrong"),

            accuracy:
                document.querySelector("#accuracy"),

            resultMessage:
                document.querySelector("#resultMessage"),

            bestScore:
                document.querySelector("#bestScore")

        };

    },


    /* --------------------------------------------------
       EVENT LISTENERS
    -------------------------------------------------- */

    bindEvents() {

        if (this.elements.startButton) {

            this.elements.startButton.addEventListener(
                "click",
                () => this.startQuiz()
            );

        }


        if (this.elements.nextButton) {

            this.elements.nextButton.addEventListener(
                "click",
                () => this.nextQuestion()
            );

        }


        if (this.elements.restartButton) {

            this.elements.restartButton.addEventListener(
                "click",
                () => this.restartQuiz()
            );

        }

    },


    /* --------------------------------------------------
       START QUIZ
    -------------------------------------------------- */

    startQuiz() {

        const category =
            this.elements.category?.value ||
            "all";


        const difficulty =
            this.elements.difficulty?.value ||
            "all";


        const amount =
            parseInt(
                this.elements.questionCount?.value ||
                "10",
                10
            );


        const question =
            Quiz.start(
                category,
                difficulty,
                amount
            );


        if (!question) {

            this.showError(
                "No questions are available for the selected options."
            );

            return;

        }


        this.showQuiz();

        this.displayQuestion(question);

    },


    /* --------------------------------------------------
       DISPLAY QUESTION
    -------------------------------------------------- */

    displayQuestion(question) {

        if (!question) {
            return;
        }


        /* Question text */

        if (this.elements.question) {

            this.elements.question.textContent =
                question.question;

        }


        /* Question number */

        if (this.elements.questionNumber) {

            this.elements.questionNumber.textContent =
                `Question ${Quiz.getCurrentQuestionNumber()} of ${Quiz.getTotalQuestions()}`;

        }


        /* Progress */

        this.updateProgress();


        /* Options */

        this.renderOptions(question);


        /* Reset next button */

        if (this.elements.nextButton) {

            this.elements.nextButton.disabled =
                true;

            this.elements.nextButton.textContent =
                Quiz.getCurrentQuestionNumber() ===
                Quiz.getTotalQuestions()
                    ? "Finish Quiz"
                    : "Next Question";

        }

    },


    /* --------------------------------------------------
       RENDER ANSWER OPTIONS
    -------------------------------------------------- */

    renderOptions(question) {

        const container =
            this.elements.options;


        if (!container) {
            return;
        }


        container.innerHTML = "";


        question.options.forEach(
            (option, index) => {

                const button =
                    document.createElement("button");


                button.type = "button";

                button.className =
                    "quiz-option";


                button.dataset.index =
                    index;


                button.innerHTML = `

                    <span class="option-letter">
                        ${String.fromCharCode(65 + index)}
                    </span>

                    <span class="option-text">
                        ${this.escapeHTML(option)}
                    </span>

                `;


                button.addEventListener(
                    "click",
                    () => this.selectAnswer(
                        index,
                        button
                    )
                );


                container.appendChild(button);

            }
        );

    },


    /* --------------------------------------------------
       SELECT ANSWER
    -------------------------------------------------- */

    selectAnswer(index, selectedButton) {

        if (Quiz.state.answered) {
            return;
        }


        const result =
            Quiz.answer(index);


        if (!result.success) {
            return;
        }


        const buttons =
            this.elements.options
                ?.querySelectorAll(
                    ".quiz-option"
                );


        buttons?.forEach(
            (button, buttonIndex) => {

                button.disabled = true;


                if (
                    buttonIndex ===
                    result.correctAnswer
                ) {

                    button.classList.add(
                        "correct"
                    );

                }


                if (
                    buttonIndex === index &&
                    !result.correct
                ) {

                    button.classList.add(
                        "incorrect"
                    );

                }

            }
        );


        if (this.elements.nextButton) {

            this.elements.nextButton.disabled =
                false;

        }


        this.updateProgress();

    },


    /* --------------------------------------------------
       NEXT QUESTION
    -------------------------------------------------- */

    nextQuestion() {

        const result =
            Quiz.next();


        if (!result.success) {

            if (result.message) {

                this.showError(
                    result.message
                );

            }

            return;

        }


        if (result.completed) {

            this.showResults();

            return;

        }


        this.displayQuestion(
            result.question
        );

    },


    /* --------------------------------------------------
       UPDATE PROGRESS
    -------------------------------------------------- */

    updateProgress() {

        const current =
            Quiz.getCurrentQuestionNumber();

        const total =
            Quiz.getTotalQuestions();


        const percentage =
            total
                ? (current / total) * 100
                : 0;


        if (this.elements.progress) {

            this.elements.progress.textContent =
                `${current} / ${total}`;

        }


        if (this.elements.progressBar) {

            this.elements.progressBar.style.width =
                `${percentage}%`;

        }

    },


    /* --------------------------------------------------
       SHOW RESULT
    -------------------------------------------------- */

    showResults() {

        const result =
            Quiz.getResult();


        this.showScreen(
            this.elements.result
        );


        if (this.elements.score) {

            this.elements.score.textContent =
                result.score;

        }


        if (this.elements.correct) {

            this.elements.correct.textContent =
                result.correct;

        }


        if (this.elements.wrong) {

            this.elements.wrong.textContent =
                result.wrong;

        }


        if (this.elements.accuracy) {

            this.elements.accuracy.textContent =
                `${result.accuracy}%`;

        }


        if (this.elements.resultMessage) {

            this.elements.resultMessage.textContent =
                this.getPerformanceMessage(
                    result.accuracy
                );

        }


        this.updateBestScore(
            result.score
        );


        /* Optional custom event */

        document.dispatchEvent(
            new CustomEvent(
                "quizCompleted",
                {
                    detail: result
                }
            )
        );

    },


    /* --------------------------------------------------
       PERFORMANCE MESSAGE
    -------------------------------------------------- */

    getPerformanceMessage(accuracy) {

        if (accuracy >= 90) {

            return "Outstanding! You're a quiz master! 🏆";

        }


        if (accuracy >= 75) {

            return "Excellent work! Keep it up! 🎉";

        }


        if (accuracy >= 60) {

            return "Good job! A little more practice will help. 👍";

        }


        if (accuracy >= 40) {

            return "Nice attempt! Keep learning and improving. 📚";

        }


        return "Keep practicing! You'll do better next time. 💪";

    },


    /* --------------------------------------------------
       BEST SCORE
    -------------------------------------------------- */

    updateBestScore(score) {

        if (typeof StorageManager !== "undefined") {

            const best =
                StorageManager.saveScore(score);


            if (this.elements.bestScore) {

                this.elements.bestScore.textContent =
                    best;

            }

            return;

        }


        /*
         * Fallback Local Storage
         */

        const previous =
            Number(
                localStorage.getItem(
                    "quizOnlineBestScore"
                ) || 0
            );


        const best =
            Math.max(
                previous,
                score
            );


        localStorage.setItem(
            "quizOnlineBestScore",
            best
        );


        if (this.elements.bestScore) {

            this.elements.bestScore.textContent =
                best;

        }

    },


    /* --------------------------------------------------
       RESTART QUIZ
    -------------------------------------------------- */

    restartQuiz() {

        Quiz.reset();

        this.showHome();

    },


    /* --------------------------------------------------
       SHOW HOME
    -------------------------------------------------- */

    showHome() {

        this.showScreen(
            this.elements.home
        );

    },


    /* --------------------------------------------------
       SHOW QUIZ
    -------------------------------------------------- */

    showQuiz() {

        this.showScreen(
            this.elements.quiz
        );

    },


    /* --------------------------------------------------
       SCREEN CONTROLLER
    -------------------------------------------------- */

    showScreen(screen) {

        const screens = [

            this.elements.home,

            this.elements.quiz,

            this.elements.result

        ];


        screens.forEach(
            currentScreen => {

                if (!currentScreen) {
                    return;
                }


                currentScreen.classList.remove(
                    "active"
                );


                currentScreen.style.display =
                    "none";

            }
        );


        if (screen) {

            screen.classList.add(
                "active"
            );


            screen.style.display =
                "";

        }

    },


    /* --------------------------------------------------
       ERROR MESSAGE
    -------------------------------------------------- */

    showError(message) {

        /*
         * If the project already contains
         * an error element, use it.
         */

        let errorElement =
            document.querySelector(
                "#errorMessage"
            );


        if (!errorElement) {

            errorElement =
                document.createElement(
                    "div"
                );

            errorElement.id =
                "errorMessage";

            errorElement.className =
                "error-message";

            document.body.appendChild(
                errorElement
            );

        }


        errorElement.textContent =
            message;


        errorElement.classList.add(
            "show"
        );


        setTimeout(
            () => {

                errorElement.classList.remove(
                    "show"
                );

            },
            3500
        );

    },


    /* --------------------------------------------------
       ESCAPE HTML
    -------------------------------------------------- */

    escapeHTML(value) {

        const div =
            document.createElement(
                "div"
            );


        div.textContent =
            value;


        return div.innerHTML;

    }

};


/* ======================================================
   INITIALIZE AFTER DOM LOAD
====================================================== */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        UI.init();

    }
);


/* ======================================================
   GLOBAL ACCESS
====================================================== */

window.UI = UI;