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
var direction = [{t: 0, b: 0, l: 1, r: 0}]


function initizalize(){
	var cv = document.getElementById("container");
	ctx = cv.getContext("2d");
	direction.push({t: 0, b: 0, l: 1, r: 0});
	updateFruit();
	updateSnake();
	window.onkeydown(function(new_event){
		var key = new_event.keyCode
		if(key == 37){ //left
			direction.push({t: 0, b: 0, l: 1, r: 0});
		}
		else if(key == 38){ //up
			direction.push({t: 1, b: 0, l: 0, r: 0});
		}
		else if(key == 39){ //right
			direction.push({t: 0, b: 0, l: 0, r: 1});
		}
		else if(key == 40){ //down
			direction.push({t: 0, b: 1, l: 0, r: 0});
		}
	});
}

function updateFruit(){
	fx = Math.floor(Math.random()*(WIDTH-size)) + 1;
	fy = Math.floor(Math.random()*(HEIGHT-size)) + 1;
	draw(fx, fy, "red");
}

function updateSnake(){
	draw(sx,sy,"black");
}

function draw(x,y,color){
	ctx.beginPath();
	ctx.rect(x,y,size,size);
	ctx.fillStyle = color;
	ctx.fill();
}

function update(){

}

window.onload = initizalize;