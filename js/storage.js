showResults() {

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


    if (this.elements.bestScore) {

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

}