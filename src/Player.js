class Player {

    constructor(name) {
        this.name = name;
    }

    options = ['rock', 'paper', 'scissors'];

    randomChoice() {
        return this.options[Math.floor(Math.random() * this.options.length)];
    }
}

export default Player;

