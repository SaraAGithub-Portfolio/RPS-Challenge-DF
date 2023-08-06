class GameLogic {

    results(playerChoice, compChoice) {
        if (playerChoice === compChoice) return "It's a Tie!";

        if ((playerChoice === "rock" && compChoice === "scissors") ||
            (playerChoice === "scissors" && compChoice === "paper") ||
            (playerChoice === "paper" && compChoice === "rock")) {
            return "You Win!";
        }

        return "You Lose!";
    }
}

export default GameLogic;


