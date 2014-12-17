window.onload = function() {

    var game = new Phaser.Game(800, 400, Phaser.AUTO, '', { preload: preload, create: create, update: update });

    var capguy;

    function preload () {

        game.load.atlasJSONHash('cityscene', 'cityscene.png', 'cityscene.json');
    }

    function create () {

        var background = game.add.sprite(game.world.centerX, game.world.centerY, 'cityscene', 'background');
        background.anchor.setTo(0.5, 0.5);

        capguy = game.add.sprite(0, 180, 'cityscene', 'capguy/walk/0001');
        capguy.scale.setTo(0.5,0.5);

        capguy.animations.add('walk', [
            'capguy/walk/0001',
            'capguy/walk/0002',
            'capguy/walk/0003',
            'capguy/walk/0004',
            'capguy/walk/0005',
            'capguy/walk/0006',
            'capguy/walk/0007',
            'capguy/walk/0008'
        ], 10, true, false);

        capguy.animations.play('walk');
    }

    function update() {
        capguy.x += 3;
        if(capguy.x > 800)
        {
            capguy.x = -50;
        }
    }

};
