var sx = 0;
var sy = 0;
var fx = 0;
var fy = 0;
var size_shead = 20; //in pixels
var WIDTH = 500;
var HEIGHT = 500;
var ctx;
var size = 20;
var parts = 1;
var iteration;
var direction = [{u: 0, d: 0, l: 0, r: 1}] //up, down, left, right
var positions = [{cx: sx, cy: sy}];
var new_pos = [];

function initizalize(){
	var cv = document.getElementById("container");
	ctx = cv.getContext("2d");
	direction.push({u: 0, d: 0, l: 0, r: 1});
	updateFruit();
	updateSnake();
	iteration = setInterval(update, 100);
}

function updateFruit(){
	fx = Math.floor(Math.random()*(((WIDTH-size)/size)+1)) * size;
	fy = Math.floor(Math.random()*(((HEIGHT-size)/size)+1)) * size;
	//fx = fy = 100;
	draw(fx, fy, "red");
}

function updateSnake(){
	aux = [{ax: sx, ay: sy}]; //current position
	console.log("aux: " + aux[0].ax + " " + aux[0].ay);
	new_pos = 
	//next position
	if(parts > 1){
		for(i = 1; i < positions.length; i++){
			//update parts of the snake
			if(direction[0].u == 1){ //up
				positions[i].cy = positions[i].cy-size_shead;
				sy = positions[i].cy;
			}
			else if(direction[0].d == 1){ //down
				positions[i].cy = positions[i].cy+size_shead;
				sy = positions[i].cy;
			}
			else if(direction[0].l == 1){ //left
				positions[i].cx = positions[i].cx-size_shead;
				sx = positions[i].cx;
			}
			else{ //right
				positions[i].cx = positions[i].cx+size_shead;
				sx = positions[i].cx;
			} 
			positions[i] = ({cx: sx, cy: sy});
			draw(positions[i].cx,positions[i].cy,"black");
			console.log("estic pintant: " + positions[i].cx + " " + positions[i].cy);
		
			/*if(direction[0].u == 1){ //up
			}
			else if(direction[0].d == 1){ //down
			}
			else if(direction[0].l == 1){ //left
			}
			else{ //right
			} */
		}
	}
	else{
		if(direction[0].u == 1){ //up
			positions[0].cy = positions[0].cy-size_shead;
			sy = positions[0].cy;
		}
		else if(direction[0].d == 1){ //down
			positions[0].cy = positions[0].cy+size_shead;
			sy = positions[0].cy;
		}
		else if(direction[0].l == 1){ //left
			positions[0].cx = positions[0].cx-size_shead;
			sx = positions[0].cx;
		}
		else{ //right
			positions[0].cx = positions[0].cx+size_shead;
			sx = positions[0].cx;
		}
		positions[0] = ({cx: sx, cy: sy});
		draw(positions[0].cx,positions[0].cy,"black");
	}
	
	console.log("mida: " + positions.length);
	if(positions.length != parts){
		positions.push({cx: aux[0].ax, cy: aux[0].ay});
		console.log("he afegit: " + aux[0].ax + " " + aux[0].ay);
		draw(aux[0].ax, aux[0].ay, "black");
		aux = [];
	}
}

function draw(x,y,color){
	ctx.beginPath();
	ctx.rect(x,y,size,size);
	ctx.fillStyle = color;
	ctx.fill();
}

function update(){
	ctx.clearRect(0,0,WIDTH,HEIGHT); //clear the screen
	console.log("snake pos: " + sx + " " + sy);
	if(sx == fx && sy == fy){
		++parts;
		updateFruit();
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
		}
		else if(key == 38){ //up
			direction = [];
			direction.push({u: 1, d: 0, l: 0, r: 0});
		}
		else if(key == 39){ //right
			direction = [];
			direction.push({u: 0, d: 0, l: 0, r: 1});
		}
		else if(key == 40){ //down
			direction = [];
			direction.push({u: 0, d: 1, l: 0, r: 0});
		}
	}
}