class Player { //need encapsulation 
    #name;
    #isComputer;
    score = 0;
    constructor(name, isComputer = false) {
        this.#name = name;
        this.#isComputer = isComputer;
    }
    chooseOption(option) {
        this.option = this.isComputer ? ['rock', 'paper', 'scissors'][Math.floor(Math.random() * 3)] : option;
    }
    incrementScore() {
        this.score++
    }
    getName() {
        return this.#name;
    }
    isComputer() {
        return this.#isComputer;
    }
}
export default Player;