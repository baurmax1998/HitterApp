class Game extends Phaser.Game {
    constructor() {
        super("100%", "100%", Phaser.CANVAS, null, false, false);
        // super("90px", "90px", Phaser.CANVAS, null, false, false);

        this.state.add('Boot', Boot, false);
        this.state.add('Hitter', Hitter, false);
        this.state.start('Boot');
    }

    start() {
        this.state.start('Hitter');
    }
}

var themeOverride = {
    levelBtn: {
        image: './assets/images/level-box.png',
        font: { size: '45px', family: 'Skranji', color: 'white' },
        anchor: { x: 0, y: 0 }
    },
}


var mainScreen;

function setupGUI() {
    EZGUI.components.playBtn.on('click', function() {
        mainScreen.visible = false;
        window.game.start();
    });
}

EZGUI.Theme.load(['./assets/metalworks-theme/metalworks-theme.json'], function() {
    EZGUI.themes['metalworks'].override(themeOverride);
    mainScreen = EZGUI.create(mainScreenJSON(), 'metalworks');
    setupGUI();
});



// var app = {
//     // Application Constructor
//     initialize: function() {
//         this.bindEvents();
//     },
//     // Bind Event Listeners
//     //
//     // Bind any events that are required on startup. Common events are:
//     // 'load', 'deviceready', 'offline', and 'online'.
//     bindEvents: function() {
//         document.addEventListener('deviceready', this.onDeviceReady, false);
//     },
//     // deviceready Event Handler
//     //
//     // The scope of 'this' is the event. In order to call the 'receivedEvent'
//     // function, we must explicitly call 'app.receivedEvent(...);'
//     onDeviceReady: function() {
//         app.receivedEvent('deviceready');
//     },
//     // Update DOM on a Received Event
//     receivedEvent: function(id) {

//         window.game = new Game();
//     }
// };

// app.initialize();

window.game = new Game();