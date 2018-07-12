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
var direction = [{u: 0, d: 0, l: 0, r: 1}]; //up, down, left, right
var old_posx = 0;
var old_posy = 0;
var new_posx;
var new_posy;
var positions = [{cx: sx, cy: sy}]; //posicio inicial del cap


function initizalize(){
	var cv = document.getElementById("container");
	ctx = cv.getContext("2d");
	updateFruit(); //pinto fruita
	draw(sx,sy,"black"); //pinto pos inicial snake
	iteration = setInterval(update, 100);
}

function updateFruit(){
	fx = Math.floor(Math.random()*(((WIDTH-size)/size)+1)) * size;
	fy = Math.floor(Math.random()*(((HEIGHT-size)/size)+1)) * size;
	draw(fx, fy, "red");
}

function updateSnake(){
	old_posx = sx; //current position cap
	old_posy = sy;
	new_posx = old_posx;
	new_posy = old_posy;
	//calcular nova posicio
	if(direction[0].u == 1){ //up
		new_posy -= size;
		positions[0].cy = sy = new_posy;
	}
	else if(direction[0].d == 1){ //down
		new_posy += size;
		positions[0].cy = sy = new_posy;
	}
	else if(direction[0].l == 1){ //left
		new_posx -=size;
		positions[0].cx = sx = new_posx;
	}
	else{ //right
		new_posx += size;
		positions[0].cx = sx = new_posx;
	}
	//pintar head 
	draw(new_posx,new_posy,"black");
	//afegir elem cua
	if(positions.length != parts){
		positions.push({cx: old_posx, cy: old_posy});
		aux = [];
	}
	//Actualitzar posicions
	for(i = 1; i < positions.length; i++){
		//pos inicial abans d'actualitzar
		old_posxB = positions[i].cx;
		old_posyB = positions[i].cy;
		//nova posicio
		new_posxB = old_posx;
		new_posyB = old_posy;
		//guardem la nova pos
		positions[i].cx = new_posxB;
		positions[i].cy = new_posyB;
		//deixem la posicio old preparada per al seguent element
		old_posx = old_posxB
		old_posy = old_posyB;
		draw(positions[i].cx,positions[i].cy,"black");
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