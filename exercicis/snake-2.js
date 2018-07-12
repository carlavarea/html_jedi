window.onload=function() {
    canv=document.getElementById("container");
    ctx=canv.getContext("2d");
    document.addEventListener("keydown",keyPush);
    setInterval(game,100);
}

var px=py=0; //initial position snake
var size=20; //mida del rectangle
var tc = 25; //vegades que hi cap el rectangle al canvas 500/20
var ax=ay=15; //initial position fruit
var xv=yv=0; //direction
var trail=[]; //array cua
var tail = 1; //tamany cua inicial
var WIDTH = 500;
var HEIGHT = 500;

function game() {
    //incremento en la direccio que toca
    px+=xv;
    py+=yv;
    if(px<0) {
        px= tc-1;
    }
    if(px>tc-1) {
        px= 0;
    }
    if(py<0) {
        py= tc-1;
    }
    if(py>tc-1) {
        py= 0;
    }
    console.log("px: " + px);
    console.log("py: " + py);
    ctx.fillStyle="white";
    ctx.fillRect(0,0,WIDTH,HEIGHT);
 
    ctx.fillStyle="black";
    for(var i=0;i<trail.length;i++) {
        ctx.fillRect(trail[i].x*size,trail[i].y*size,size,size);
        if(trail[i].x==px && trail[i].y==py) {
            tail = 1;
            //m'he menjat jo mateix, posar que has perdut
        }
    }
    trail.push({x:px,y:py});
    while(trail.length>tail) {
        trail.shift();
    }
    //m'he menjat la fruita
    if(ax==px && ay==py) {
        tail++;
        ax=Math.floor(Math.random()*tc);
        ay=Math.floor(Math.random()*tc);
    }
    ctx.fillStyle="red";
    ctx.fillRect(ax*size,ay*size,size,size);
}

function keyPush(evt) {
    switch(evt.keyCode) {
        case 37:
            xv=-1;yv=0;
            break;
        case 38:
            xv=0;yv=-1;
            break;
        case 39:
            xv=1;yv=0;
            break;
        case 40:
            xv=0;yv=1;
            break;
    }
}