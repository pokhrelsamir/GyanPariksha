/* ======================================================
   GyanPariksha - Local Storage Manager
====================================================== */

const StorageManager = {

    keys: {
        bestScore: "GyanParikshaBestScore",
        results: "GyanParikshaResults"
    },


    isAvailable() {

        try {

            const testKey =
                "__GyanParikshaStorageTest__";

            localStorage.setItem(
                testKey,
                testKey
            );

            localStorage.removeItem(
                testKey
            );

            return true;

        }
        catch (error) {

            console.warn(
                "Local storage is unavailable.",
                error
            );

            return false;

        }

    },


    getNumber(key, fallback = 0) {

        if (!this.isAvailable()) {
            return fallback;
        }

        const value =
            Number(
                localStorage.getItem(key)
            );

        return Number.isFinite(value)
            ? value
            : fallback;

    },


    setJSON(key, value) {

        if (!this.isAvailable()) {
            return false;
        }

        localStorage.setItem(
            key,
            JSON.stringify(value)
        );

        return true;

    },


    getJSON(key, fallback) {

        if (!this.isAvailable()) {
            return fallback;
        }

        try {

            const value =
                localStorage.getItem(key);

            return value
                ? JSON.parse(value)
                : fallback;

        }
        catch (error) {

            console.warn(
                `Unable to read ${key}.`,
                error
            );

            return fallback;

        }

    },


    saveScore(score) {

        const numericScore =
            Number(score) || 0;

        const best =
            Math.max(
                this.getBestScore(),
                numericScore
            );

        if (this.isAvailable()) {

            localStorage.setItem(
                this.keys.bestScore,
                String(best)
            );

        }

        return best;

    },


    getBestScore() {

        return this.getNumber(
            this.keys.bestScore,
            0
        );

    },


    saveQuizResult(result) {

        if (!result) {
            return false;
        }

        const results =
            this.getQuizResults();

        const savedResult = {
            ...result,
            completedAt:
                new Date().toISOString()
        };

        results.push(savedResult);

        this.setJSON(
            this.keys.results,
            results
        );

        this.saveScore(
            result.score
        );

        return true;

    },


    getQuizResults() {

        const results =
            this.getJSON(
                this.keys.results,
                []
            );

        return Array.isArray(results)
            ? results
            : [];

    },


    getStatistics() {

        const results =
            this.getQuizResults();

        const totals =
            results.reduce(
                (summary, result) => {

                    summary.totalCorrect +=
                        Number(result.correct) || 0;

                    summary.totalWrong +=
                        Number(result.wrong) || 0;

                    summary.totalScore +=
                        Number(result.score) || 0;

                    summary.totalAccuracy +=
                        Number(result.accuracy) || 0;

                    return summary;

                },
                {
                    totalCorrect: 0,
                    totalWrong: 0,
                    totalScore: 0,
                    totalAccuracy: 0
                }
            );

        return {
            totalQuizzes:
                results.length,

            totalCorrect:
                totals.totalCorrect,

            totalWrong:
                totals.totalWrong,

            totalScore:
                totals.totalScore,

            averageAccuracy:
                results.length
                    ? Math.round(
                        totals.totalAccuracy /
                        results.length
                    )
                    : 0,

            bestScore:
                this.getBestScore()
        };

    },


    clearAll() {

        if (!this.isAvailable()) {
            return false;
        }

        localStorage.removeItem(
            this.keys.bestScore
        );

        localStorage.removeItem(
            this.keys.results
        );

        return true;

    }

};


/* ======================================================
   GLOBAL ACCESS
====================================================== */

window.StorageManager = StorageManager;
