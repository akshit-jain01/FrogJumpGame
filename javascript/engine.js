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
    
    Resources.load([]);//will contain images paths
    Resources.onReady(init);
    global.ctx = ctx;    
    
})(this);

