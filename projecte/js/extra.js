//SNAKE

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
var gameover;

function reset(){
	sx = 0; //la posicio del cap
	sy = 0; //la posicio del cap
	fx = 0;
	fy = 0;
	parts = 1;
	direction = [{u: 0, d: 0, l: 0, r: 1}]; //up, down, left, right
	old_posx = 0;
	old_posy = 0;
	positions = [{cx: sx, cy: sy}]; //posicio inicial del cap
}

function initizalize(){
	reset();
	var cv = document.getElementById("container");
	ctx = cv.getContext("2d");
	updateFruit(); //pinto fruita
	draw(sx,sy,"black"); //pinto pos inicial snake
	document.getElementById("btn").disabled = true;
	iteration = setInterval(update, 100);
}

function updateFruit(){
	fx = Math.floor(Math.random()*(((WIDTH-size)/size)+1)) * size;
	fy = Math.floor(Math.random()*(((HEIGHT-size)/size)+1)) * size;
	draw(fx, fy, "white");
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
	//actu
	if(sx == fx && sy == fy){
		++parts;
		updateFruit();
	}
	else{
		draw(fx, fy, "white");
	}
	updateSnake();

	//condicions de game over
	if(sx == WIDTH || sx < 0 || sy == HEIGHT || sy < 0){ //estic fora del mapa
		gameover=true;
		console.log("m'he sortit del mapa");
	}
	for(i = 1; i < positions.length; i++){
		if(sx == positions[i].cx && sy == positions[i].cy){
			gameover=true;
			console.log("m'he menjat a mi mateix");
			break;
		}
	}
	if(gameover){
		clearInterval(iteration);
		alert("GAME OVER - Score: " + (parts-1)*10);
		document.getElementById("btn").disabled = false;
		ctx.clearRect(0,0,WIDTH,HEIGHT);
	}
}

window.onload = function(){
    //initizalize();
    setInterval('showTime()',1000);

	document.getElementById("btn").onclick = function(){
		gameover = false; 
		initizalize();
	}
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


//TIME

function showTime(){
	var date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59
    var dayS = date.getDay();
    var day = date.getDate();
    var month = date.getMonth();
    var year = date.getFullYear();
    
    var monthA = ["Gener","Febrer","Març","Abril","Maig","Juny","Juliol","Agost","Septembre","Octubre","Novembre","Decembre"];
    month = monthA[month];
    var dayA =["Diumenge","Dilluns","Dimarts","Dimecres","Dijous","Divendres","Dissabte"];
    dayS = dayA[dayS];

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    
    var time = h + ":" + m + ":" + s;
    var data = dayS + " " + day + " " + month + " " + year;
    document.getElementById("clock").innerText = time;
    document.getElementById("clock").textContent = time;
    document.getElementById("date").innerText = data;
    document.getElementById("date").textContent = data;
}