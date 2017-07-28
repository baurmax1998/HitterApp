class Ranking extends Phaser.State {
    preload() {
        //assets we'll use in the loading screen
        this.load.spritesheet('button', 'img/button_sprite_sheet.png', 193, 71);
        this.load.image('background', 'img/starfield.jpg');
    }


    create() {

        this.stage.backgroundColor = '#182d3b';
        this.add.button(0, 0, 'button', this.boot, this, 2, 1, 0);


        var style = { font: "16px Courier", fill: "#fff", tabs: [164, 120, 80] };

        var headings = ['Name', 'Points'];

        this.headder = this.add.text(32, 114, '', style);
        this.headder.parseList(headings);

        var swords = [
            ['Knife', '1d3'],
            ['Dagger', '1d4'],
            ['Rapier', '1d6'],
            ['Sabre', '1d6'],
            ['Cutlass', '1d6'],
            ['Scimitar', '2d4'],
            ['Long Sword', '1d8+1'],
            ['Bastard Sword', '1d10+1'],
            ['Knife', '1d3'],
            ['Dagger', '1d4'],
            ['Rapier', '1d6'],
            ['Sabre', '1d6'],
            ['Cutlass', '1d6'],
            ['Scimitar', '2d4'],
            ['Long Sword', '1d8+1']
        ];

        this.text2 = this.add.text(32, 170, '', style);
        this.text2.parseList(swords);
    }

    boot() {
        this.state.start('Boot');
    }

    actionOnClick() {
        this.state.start('Hitter');
    }
}