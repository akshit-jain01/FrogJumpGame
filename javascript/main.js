var Motion = 
(
    function(global) {
	var doc = global.document,
		win = global.window,
		canvas = doc.createElement('canvas'),
		ctx = canvas.getContext('2d'),
		lastTime;
	canvas.width = 1500;
	canvas.height = 650;
	doc.body.appendChild(canvas);
    
    // It initializes the lastTime variable with the current time in secs and calls main.
    function init(){
        lastTime=Date.now;
        main();
    }
    function update(dt) {
        allSnakes.forEach(function(snake) {
            snake.update(dt);
        });
        player.update();
    }
    // It calculates the slight difference between time to refresh the frame of animation to show images correctly
    function main() {
        var now = Date.now(),
        dt = (now - lastTime) / 1000.0;
		update(dt);
		render(); 
		lastTime = now;
		win.requestAnimationFrame(main);
	}
    
    // Gives the images back to the main at each request frame.
    function render() {
        
        var rowImages = [ 
            
            'images/water-block.png', // Top row is water
            'images/stone-block.png', // Row 1 of 3 of stone
            'images/stone-block.png', // Row 1 of 3 of stone
            'images/stone-block.png', // Row 1 of 3 of stone
            'images/stone-block.png', // Row 1 of 3 of stone
            'images/grass-block.jpg', // Row 2 of 2 of grass
            'images/grass-block.jpg', // Row 2 of 2 of grass
            'images/grass-block.jpg' // Row 2 of 2 of grass
            ],// path to images
            numRows = 8,
            numCols = 15,
            row, col;
        
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        for (row = 0; row < numRows; row++) 
        {
            for (col = 0; col < numCols; col++) {
                ctx.drawImage(Resources.get(rowImages[row]), col * 102, row * 83);
            }
        }
        renderEntities();
    }
    // Calls the render functions provided for the snake and the player ie. frog
    function renderEntities() {
        
        allSnakes.forEach(function(snake) {
            snake.render();
        });
        player.render();
    }
    
    
    
    Resources.load(['images/stone-block.png', 'images/water-block.png', 'images/grass-block.jpg', 'images/snake.png', 'images/frog-green.svg']);//will contain images paths
    Resources.onReady(init);
    global.ctx = ctx;    
    
})(this);

