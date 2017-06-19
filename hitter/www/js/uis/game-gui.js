var mainScreenJSON = function() {
    return {
        id: 'mainScreen',
        component: 'Window',
        padding: 0,
        position: { x: 0, y: 0 },
        height: document.getElementsByTagName("canvas")[0].height,
        width: document.getElementsByTagName("canvas")[0].width,
        // height: 17430,
        // width: 9800,
        layout: [1, 3],
        children: [{
                id: 'label1',
                text: 'Hitter',
                font: {
                    size: '130px',
                    family: 'Skranji',
                    color: '#8f8'
                },
                component: 'Label',
                position: 'center',
                width: screen.availWidth,
                height: 100
            },
            {
                id: 'playBtn',
                text: 'Play',
                component: 'Button',
                position: 'center',
                font: {
                    size: '80px',
                    family: 'Arial',
                    color: '#000'
                },
                width: 350,
                height: 150
            },
            // {
            //     id: 'optionsBtn',
            //     text: 'Options',
            //     component: 'Button',
            //     position: 'center',
            //     width: 190,
            //     height: 80
            // }
        ]
    }
}