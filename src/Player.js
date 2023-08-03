class Player { //need encapsulation 
    constructor(name, isComputer = false) {
        this.name = name;
        this.isComputer = isComputer;
    }
    chooseOption(option) {
        this.option = this.isComputer ? ['rock', 'paper', 'scissors'][Math.floor(Math.random() * 3)] : option;
    }
}
export default Player;