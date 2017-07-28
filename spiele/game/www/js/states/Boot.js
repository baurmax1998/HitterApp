class Boot extends Phaser.State {
    preload() {
        //assets we'll use in the loading screen
        this.load.spritesheet('button', 'img/button_sprite_sheet.png', 193, 71);
        this.load.image('background', 'img/starfield.jpg');
    }


    create() {

        this.stage.backgroundColor = '#182d3b';
        this.background = this.add.tileSprite(0, 0, 800, 600, 'background');

        this.startButton = this.add.button(game.world.centerX - 95, game.world.centerY, 'button', this.start, this, 2, 1, 0);
        this.showRankButton = this.add.button(game.world.centerX - 95, game.world.centerY + 100, 'button', this.ranking, this, 2, 1, 0);

    }

    ranking() {
        this.state.start('Ranking');
    }

    start() {
        this.state.start('Hitter');
    }
}