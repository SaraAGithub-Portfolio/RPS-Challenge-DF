import Player from './Player.js'; //need to decouple
import ScoreTracker from './ScoreTracker.js';

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
export default GameLogic;