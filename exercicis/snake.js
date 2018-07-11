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
var direction = [{u: 0, d: 0, l: 0, r: 1}] //up, down, left, right


function initizalize(){
	var cv = document.getElementById("container");
	ctx = cv.getContext("2d");
	direction.push({u: 0, d: 0, l: 0, r: 1});
	updateFruit();
	updateSnake();
	iteration = setInterval(update,10);
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
			if(direction[i].u == 1){ //up
				current_pos[i].cy = current_pos[i].cy-size_shead;
				sy = current_pos[i].cy;
			}
			else if(direction[i].d == 1){ //down
				current_pos[i].cy = current_pos[i].cy+size_shead;
				sy = current_pos[i].cy;
			}
			else if(direction[i].l == 1){ //left
				current_pos[i].cx = current_pos[i].cx-size_shead;
				sx = current_pos[i].cx;
			}
			else{ //right
				current_pos[i].cx = current_pos[i].cx+size_shead;
				sx = current_pos[i].cx;
			} 
		}
	}
	else{
		if(direction[0].u == 1){ //up
			current_pos[0].cy = current_pos[0].cy-size_shead;
			sy = current_pos[0].cy;
		}
		else if(direction[0].d == 1){ //down
			current_pos[0].cy = current_pos[0].cy+size_shead;
			sy = current_pos[0].cy;
		}
		else if(direction[0].l == 1){ //left
			current_pos[0].cx = current_pos[0].cx-size_shead;
			sx = current_pos[0].cx;
		}
		else{ //right
			current_pos[0].cx = current_pos[0].cx+size_shead;
			sx = current_pos[0].cx;
		}
	}
	/*if(new part){

	}
	else{

	}*/
	draw(current_pos[0].cx,current_pos[0].cy,"black");
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
		console.log("vaig a sumar una part");
		++parts;
	}
	else{
		draw(fx, fy, "red");
	}
	updateSnake();
}

window.onload = function(){
	initizalize();
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
}