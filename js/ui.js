/* ======================================================
   GyanPariksha — UI Controller
====================================================== */

const UI = {

    initialized: false,


    /* --------------------------------------------------
       DOM ELEMENTS
    -------------------------------------------------- */

    elements: {},

    timerInterval: null,

    timeLimit: 30,

    timeRemaining: 30,


    /* --------------------------------------------------
       INITIALIZE UI
    -------------------------------------------------- */

    init() {

        if (this.initialized) {
            return;
        }

        this.cacheElements();

        this.bindEvents();

        this.showHome();

        this.initialized = true;

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
                document.querySelector("#homeScreen") ||
                document.querySelector("#home") ||
                document.querySelector(".home-screen") ||
                document.querySelector(".home"),

            quiz:
                document.querySelector("#quizScreen") ||
                document.querySelector("#quiz") ||
                document.querySelector(".quiz-screen") ||
                document.querySelector(".quiz"),

            result:
                document.querySelector("#resultScreen") ||
                document.querySelector("#result") ||
                document.querySelector(".result-screen") ||
                document.querySelector(".result"),


            /* Settings */

            category:
                document.querySelector("#category"),

            difficulty:
                document.querySelector("#difficulty"),

            questionCount:
                document.querySelector("#questionCount"),

            quizTime:
                document.querySelector("#quizTime"),


            /* Quiz */

            question:
                document.querySelector("#questionText") ||
                document.querySelector("#question"),

            options:
                document.querySelector("#answersContainer") ||
                document.querySelector("#options") ||
                document.querySelector(".answers") ||
                document.querySelector(".options"),

            progress:
                document.querySelector("#progress"),

            progressBar:
                document.querySelector("#progressFill") ||
                document.querySelector("#progressBar"),

            questionNumber:
                document.querySelector("#questionNumber"),

            timer:
                document.querySelector("#timer"),

            timerProgress:
                document.querySelector("#timerProgress"),


            /* Buttons */

            startButton:
                document.querySelector("#startQuiz") ||
                document.querySelector("#start"),

            nextButton:
                document.querySelector("#nextQuestion") ||
                document.querySelector("#next"),

            restartButton:
                document.querySelector("#retryQuiz") ||
                document.querySelector("#restartQuiz") ||
                document.querySelector("#restart"),

            homeButton:
                document.querySelector("#homeButton"),


            /* Results */

            score:
                document.querySelector("#finalScore") ||
                document.querySelector("#score"),

            correct:
                document.querySelector("#correctAnswers") ||
                document.querySelector("#correct"),

            wrong:
                document.querySelector("#wrongAnswers") ||
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


        if (this.elements.homeButton) {

            this.elements.homeButton.addEventListener(
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


        const timeLimit =
            parseInt(
                this.elements.quizTime?.value ||
                "30",
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

        this.startTimer(timeLimit);

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
                    "answer-option quiz-option";


                button.dataset.index =
                    index;


                button.innerHTML = `

                    <span class="answer-letter option-letter">
                        ${String.fromCharCode(65 + index)}
                    </span>

                    <span class="answer-text option-text">
                        ${this.escapeHTML(option)}
                    </span>

                    <span class="answer-status"></span>

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
       QUIZ TIMER
    -------------------------------------------------- */

    startTimer(seconds) {

        this.stopTimer();

        this.timeLimit =
            Number.isFinite(seconds) && seconds > 0
                ? seconds
                : 30;

        this.timeRemaining =
            this.timeLimit;

        this.updateTimerDisplay();

        this.timerInterval =
            setInterval(
                () => {

                    this.timeRemaining =
                        Math.max(
                            this.timeRemaining - 1,
                            0
                        );

                    this.updateTimerDisplay();

                    if (this.timeRemaining === 0) {

                        this.stopTimer();

                        if (!Quiz.state.completed) {

                            Quiz.complete();

                            this.showResults();

                        }

                    }

                },
                1000
            );

    },


    stopTimer() {

        if (this.timerInterval) {

            clearInterval(
                this.timerInterval
            );

            this.timerInterval = null;

        }

    },


    updateTimerDisplay() {

        if (this.elements.timer) {

            this.elements.timer.textContent =
                this.timeRemaining;

        }


        if (this.elements.timerProgress) {

            const circumference =
                264;

            const percentage =
                this.timeLimit
                    ? this.timeRemaining /
                        this.timeLimit
                    : 0;

            this.elements.timerProgress.style.strokeDashoffset =
                String(
                    circumference *
                    (1 - percentage)
                );

        }

    },


    /* --------------------------------------------------
       SHOW RESULT
    -------------------------------------------------- */

    showResults() {

    this.stopTimer();

    const result =
        Quiz.getResult();


    /* Save quiz result */

    if (
        typeof StorageManager !==
        "undefined"
    ) {

        StorageManager.saveQuizResult(
            result
        );

    }


    /* Show result screen */

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


    if (
        this.elements.bestScore &&
        typeof StorageManager !==
        "undefined"
    ) {

        this.elements.bestScore.textContent =
            StorageManager.getBestScore();

    }


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
                    "GyanParikshaBestScore"
                ) || 0
            );


        const best =
            Math.max(
                previous,
                score
            );


        localStorage.setItem(
            "GyanParikshaBestScore",
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

        this.stopTimer();

        Quiz.reset();

        this.timeRemaining =
            this.timeLimit;

        this.updateTimerDisplay();

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
