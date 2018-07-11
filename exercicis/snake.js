var sx = 0;
var sy = 0;
var fx = 0;
var fy = 0;
var size_f = 5; //in pixels
var size_shead = 5; //in pixels
var WIDTH = 500;
var HEIGHT = 500;
var ctx;
var size = 20;
var parts = 1;
var iteration;
var direction = [{u: 0, d: 0, l: 1, r: 0}] //up, down, left, right


function initizalize(){
	var cv = document.getElementById("container");
	ctx = cv.getContext("2d");
	direction.push({u: 0, d: 0, l: 1, r: 0});
	updateFruit();
	updateSnake();
	window.onkeydown = function(new_event){
		var key = new_event.keyCode
		if(key == 37){ //left
			direction = [];
			direction.push({u: 0, d: 0, l: 1, r: 0});
			console.log("direction left: " + direction[0].l);
		}
		else if(key == 38){ //up
			direction = [];
			direction.push({u: 1, d: 0, l: 0, r: 0});
			console.log("direction up: " + direction[0].u);
		}
		else if(key == 39){ //right
			direction = [];
			direction.push({u: 0, d: 0, l: 0, r: 1});
			console.log("direction right: " + direction[0].r);
		}
		else if(key == 40){ //down
			direction = [];
			direction.push({u: 0, d: 1, l: 0, r: 0});
			console.log("direction down: " + direction[0].d);
		}
	}
	setInterval(update(),10);
}

function updateFruit(){
	fx = Math.floor(Math.random()*(WIDTH-size)) + 1;
	fy = Math.floor(Math.random()*(HEIGHT-size)) + 1;
	draw(fx, fy, "red");
}

function updateSnake(){
	var current_pos = [{cx: sx, cy: sy}]; //current position
	if(parts > 1){
		for(i = 0; i < parts; ++i){
			//update parts of the snake 
		}
	}
	else{
		
	}
	/*if(new part){

	}
	else{

	}*/
	draw(sx,sy,"black");
}

function draw(x,y,color){
	ctx.beginPath();
	ctx.rect(x,y,size,size);
	ctx.fillStyle = color;
	ctx.fill();
}

function update(){
	ctx.clearRect(0,0,WIDTH,HEIGHT); //clear the screen
	if(sx == fx && sy == fy){
		updateFruit();
		++parts;
	}
	else{
		draw(fx, fy, "red");
	}
	updateSnake();
}

window.onload = initizalize;