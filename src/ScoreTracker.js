
class ScoreTracker {
    constructor(player1, player2) {
        this.scores = {
            [player1.name]: 0,
            [player2.name]: 0
        };
    }
    addScore(winner) {
        this.scores[winner.name]++;
    }
    getScores() {
        return this.scores;
    }
}
module.exports = ScoreTracker;