class Boot extends Phaser.State {
    preload() {
        //assets we'll use in the loading screen
    }
    create() {

    }

    start() {
        this.state.start('Hitter');
    }
}