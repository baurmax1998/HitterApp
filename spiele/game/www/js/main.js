class Game extends Phaser.Game {
    constructor() {
        super("100%", "100%", Phaser.CANVAS, null, false, false);
        // super("90px", "90px", Phaser.CANVAS, null, false, false);

        this.state.add('Boot', Boot, false);
        this.state.add('Hitter', Hitter, false);
        this.state.add('Ranking', Ranking, false);
        this.state.start('Boot');
    }

    start() {
        this.state.start('Boot');
    }
}

window.game = new Game();