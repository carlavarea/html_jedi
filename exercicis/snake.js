var sx = 20;
var sy = 20;
var fx = 2;
var fy = 3;
var size_f = 5; //in pixels
var size_shead = 5; //in pixels
var WIDTH = 500;
var HEIGHT = 500;
var ctx;

function initizalize(){
	var cv = document.getElementById("container");
	ctx = cv.getContext("2d");
	updateFruit();
	updateSnake();
}

function updateFruit(){
	var auxX = Math.floor(Math.random()*WIDTH) + 1;
	var auxY = Math.floor(Math.random()*HEIGHT) + 1;
	draw(auxX, auxY, "red");
}

function updateSnake(){
	draw(0,0,"black");
}

function draw(x,y,color){
	ctx.beginPath();
	ctx.rect(x,y,20,20);
	ctx.fillStyle = color;
	ctx.fill();
}

window.onload = initizalize;