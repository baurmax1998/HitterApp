class Hitter extends Phaser.State {
    preload() {
        this.game.load.image("player", "./img/player.png");
        this.game.load.image("enemy", "./img/enemy.png");
    }

    create() {
        this.add.button(this.world.width - 75, 0, 'button', this.pauseIt, this, 2, 1, 0);
        this.score = 0;
        this.topScore = this.topScore == undefined ? 0 : this.topScore;
        this.scoreText = game.add.text(10, 10, "-", {
            font: "bold 30px Arial",
            fill: "#acacac"
        });
        this.updateScore();
        this.player = game.add.sprite(game.width / 2, game.height / 5 * 4, "player");
        this.player.anchor.setTo(0.5);
        this.enemy = game.add.sprite(game.width, 0, "enemy");
        this.enemy.anchor.set(0.5);
        this.placePlayer();
        this.placeEnemy();
    }

    pauseIt() {
        // When the paus button is pressed, we pause the game
        this.paused = true;


        // this.world.width;
        // // Then add the menu
        // menu = game.add.sprite(w / 2, h / 2, 'menu');
        // menu.anchor.setTo(0.5, 0.5);

        // // And a label to illustrate which menu item was chosen. (This is not necessary)
        // choiseLabel = game.add.text(w / 2, h - 150, 'Click outside menu to continue', { font: '30px Arial', fill: '#fff' });
        // choiseLabel.anchor.setTo(0.5, 0.5);
    }

    update() {
        if (Phaser.Math.distance(this.player.x, this.player.y, this.enemy.x, this.enemy.y) <
            this.player.width / 2 + this.enemy.width / 2) {
            this.enemyTween.stop();
            this.playerTween.stop();
            this.score++;
            this.placeEnemy();
            this.placePlayer();
            this.updateScore();
        }
    }

    die() {
        this.topScore = Math.max(this.score, this.topScore);
        this.game.state.start("Hitter");
    }

    updateScore() {
        this.scoreText.text = "Score: " + this.score + " - Best: " + this.topScore;
    }

    placePlayer() {
        this.player.x = this.game.width / 2;
        this.player.y = this.game.height / 5 * 4;
        this.playerTween = this.game.add.tween(this.player).to({
            y: this.game.height
        }, 10000 - this.score * 10, "Linear", true);
        this.playerTween.onComplete.add(this.die, this);
        this.game.input.onDown.add(this.fire, this);
    }

    placeEnemy() {
        this.enemy.x = this.game.width - this.enemy.width / 2;
        this.enemy.y = -this.enemy.width / 2;
        var enemyEnterTween = this.game.add.tween(this.enemy).to({
            y: this.game.rnd.between(this.enemy.width * 2, this.game.height / 4 * 3 - this.player.width / 2)
        }, 200, "Linear", true);
        enemyEnterTween.onComplete.add(this.moveEnemy, this);
    }

    moveEnemy() {
        this.enemyTween = this.game.add.tween(this.enemy).to({
            x: this.enemy.width / 2
        }, 500 + this.game.rnd.between(0, 2500), Phaser.Easing.Cubic.InOut, true);
        this.enemyTween.yoyo(true, 0);
        this.enemyTween.repeat(50, 0);
    }

    fire() {
        this.game.input.onDown.remove(this.fire, this);
        this.playerTween.stop();
        this.playerTween = this.game.add.tween(this.player).to({
            y: -this.player.width
        }, 500, "Linear", true);
        this.playerTween.onComplete.add(this.die, this);
    }

}