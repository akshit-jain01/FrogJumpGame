var Engine = 
(
    function(global) {
	var doc = global.document,
		win = global.window,
		canvas = doc.createElement('canvas'),
		ctx = canvas.getContext('2d'),
		lastTime;
	canvas.width = 505;
	canvas.height = 606;
	doc.body.appendChild(canvas);
    

    function main() {
		var now = Date.now(),
			dt = (now - lastTime) / 1000.0;
		update(dt);
		render(); // will render the game entities in future 
		lastTime = now;
		win.requestAnimationFrame(main);
	}
    
    function init(){
        reset();
        lastTime=Date.now;
        main();
    }
    function update(dt) {
		updateEntities(dt);
	}
    
    function updateEntities(dt) {
		allEnemies.forEach(function(enemy) {
			enemy.update(dt);
		});
		player.update();
	}

    function render() {
        
        var rowImages = [ 
            
            'images/water-block.png', // Top row is water
            'images/stone-block.png', // Row 1 of 3 of stone
            'images/stone-block.png', // Row 1 of 3 of stone
            'images/stone-block.png', // Row 1 of 3 of stone
            'images/stone-block.png', // Row 1 of 3 of stone
            'images/grass-block.jpg' // Row 2 of 2 of grass
            ],// path to images
            numRows = 6,
            numCols = 5,
            row, col;
        
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        for (row = 0; row < numRows; row++) {
            for (col = 0; col < numCols; col++) {
                ctx.drawImage(Resources.get(rowImages[row]), col * 101, row * 83);
            }
        }
        renderEntities();
    }
    
    function renderEntities() {
        
        allEnemies.forEach(function(enemy) {
            enemy.render();
        });
        player.render();
    }
    
    function reset() {
        
    }
    
    Resources.load(['images/stone-block.png', 'images/water-block.png', 'images/grass-block.jpg', 'images/snake.png', 'images/frog-green.svg']);//will contain images paths
    Resources.onReady(init);
    global.ctx = ctx;    
    
})(this);

