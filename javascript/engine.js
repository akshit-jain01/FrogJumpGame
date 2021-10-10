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
}
    

    
);

