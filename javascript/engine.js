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
});

