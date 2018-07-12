var sx = 0; //la posicio del cap
var sy = 0; //la posicio del cap
var fx = 0;
var fy = 0;
var WIDTH = 500;
var HEIGHT = 500;
var ctx;
var size = 20; //increment de cada quadrat
var parts = 1;
var iteration;
var direction = [{u: 0, d: 0, l: 0, r: 1}] //up, down, left, right
var positions = [{cx: sx, cy: sy}]; //posicio inicial del cap


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
	//draw(fx+120, fy, "red");
	//draw(fx+180, fy, "red");
}

function updateSnake(){
	aux = [{ax: sx, ay: sy}]; //current position
	console.log("aux: " + aux[0].ax + " " + aux[0].ay);
	 
	//next position
	if(positions.length > 1){
		for(i = 0; i < positions.length; i++){
			//update parts of the snake
			if(direction[0].u == 1){ //up
				positions[i].cy = positions[i].cy-size;
				sy = positions[i].cy;
				aux[0].ay -=(parts*size)
			}
			else if(direction[0].d == 1){ //down
				positions[i].cy = positions[i].cy+size;
				sy = positions[i].cy;
				aux[0].ay +=(parts*size)
			}
			else if(direction[0].l == 1){ //left
				positions[i].cx = positions[i].cx-size;
				sx = positions[i].cx;
				aux[0].ax -=(parts*size)
			}
			else{ //right
				positions[i].cx = positions[i].cx+size;
				sx = positions[i].cx;
				aux[0].ax +=(parts*size)
			} 
			positions[i] = ({cx: sx, cy: sy});
			draw(positions[i].cx,positions[i].cy,"black");
			console.log("estic pintant: " + positions[i].cx + " " + positions[i].cy);
		}
	}
	else{
		if(direction[0].u == 1){ //up
			sy -= size;
		}
		else if(direction[0].d == 1){ //down
			sy += size;
		}
		else if(direction[0].l == 1){ //left
			sx -=size;
		}
		else{ //right
			sx += size;
		}
		draw(sx,sy,"black");
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