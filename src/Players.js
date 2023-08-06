class Players {

    constructor(name) {
        this.name = name;
    }

    options = ['rock', 'paper', 'scissors'];

    compOption() {
        return this.options[Math.floor(Math.random() * this.options.length)];
    }
}

export default Players;

