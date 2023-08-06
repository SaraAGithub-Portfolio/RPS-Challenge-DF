class CompPlayer {
    options = ['rock', 'paper', 'scissors'];

    chooseOption() {
        return this.options[Math.floor(Math.random() * this.options.length)];
    }
}

export default CompPlayer;

