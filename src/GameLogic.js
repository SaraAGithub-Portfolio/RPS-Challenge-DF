const Player = require('./Player');
const ScoreTracker = require('./ScoreTracker');

class GameLogic {
    setup(players, playerClass = Player) {
        this.players = players.map(player => new playerClass(player.name, player.isComputer));
        this.scoreTracker = new ScoreTracker(this.players[0], this.players[1]);
    }
    currentPlayer() {
        return this.players[0];
    }
    otherPlayer() {
        return this.players[1];
    }
    switch() {
        this.players.reverse();
    }
    playRound() {
        const outcome = this.roundOutcome(this.currentPlayer().option, this.otherPlayer().option);
        const message = this.declareWinner(outcome);
        this.switch();
        return message;
    }
    declareWinner(outcome) {
        const winner = outcome === 'player1' ? this.currentPlayer() : this.otherPlayer();
        const message = outcome === 'tie' ? 'It\'s a tie!' : `${winner.name} wins this round!`;
        console.log(message);

        if (outcome !== 'tie') this.scoreTracker.addScore(winner);
        return message;
    }

    roundOutcome(player1option, player2option) {
        return player1option === player2option ? 'tie' :
            (player1option === 'rock' && player2option === 'scissors') ||
                (player1option === 'scissors' && player2option === 'paper') ||
                (player1option === 'paper' && player2option === 'rock') ? 'player1' : 'player2';

    }
}
module.exports = GameLogic;