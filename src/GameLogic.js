class GameLogic {
    setup(players) {
        this.players = players;
    }
    currentPlayer() {
        return this.players[0];
    }
    otherPlayer() {
        return this.players[1];
    }
    switch() {
        [this.players[0], this.players[1]] = [this.players[1], this.players[0]];
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

        if (outcome !== 'tie') winner.incrementScore();
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