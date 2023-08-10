class GameLogic {

    results(playerChoice, compChoice) {
        if (playerChoice === compChoice) return "It's a Tie!";

        if (
            (playerChoice === 'rock' && (compChoice === 'scissors' || compChoice === 'lizard')) || (playerChoice === 'scissors' && (compChoice === 'paper' || compChoice === 'lizard')) || (playerChoice === 'paper' && (compChoice === 'rock' || compChoice === 'spock')) || (playerChoice === 'lizard' && (compChoice === 'spock' || compChoice === 'paper')) || (playerChoice === 'spock' && (compChoice === 'scissors' || compChoice === 'rock'))
        ) {
            return 'You Won!';
        }

        return 'You Lost!';
    }
}

export default GameLogic;



