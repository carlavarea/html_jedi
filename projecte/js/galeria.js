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

function open_links(id){
    if(id == 1){ //bender
        window.open("https://github.com/carlavarea/html_jedi/blob/master/exercicis/bender.html");
        window.open("https://github.com/carlavarea/html_jedi/blob/master/exercicis/bender.css");
    }
    else if(id == 2){ //bootstrap
        window.open("https://github.com/carlavarea/html_jedi/blob/master/exercicis/bootstrap.html");
        window.open("https://github.com/carlavarea/html_jedi/blob/master/exercicis/bootstrap.css");
        window.open("https://github.com/carlavarea/html_jedi/blob/master/exercicis/bootstrap-dog.html");
        window.open("https://github.com/carlavarea/html_jedi/blob/master/exercicis/bootstrap-cat.html");
    }
    else if(id == 3){ //clock
        window.open("https://github.com/carlavarea/html_jedi/blob/master/exercicis/clock.html");
        window.open("https://github.com/carlavarea/html_jedi/blob/master/exercicis/clock.js");
    }
    else if(id == 4){ //mix
        window.open("https://github.com/carlavarea/html_jedi/blob/master/exercicis/mix.html");
        window.open("https://github.com/carlavarea/html_jedi/blob/master/exercicis/mix.css");
        window.open("https://github.com/carlavarea/html_jedi/blob/master/exercicis/mix.js");
    }
    else if(id == 5){ //poketable
        window.open("https://github.com/carlavarea/html_jedi/blob/master/exercicis/poketable.html");
        window.open("https://github.com/carlavarea/html_jedi/blob/master/exercicis/poketable.js");
    }
    else{ //snake
        window.open("https://github.com/carlavarea/html_jedi/blob/master/exercicis/snake.html");
        window.open("https://github.com/carlavarea/html_jedi/blob/master/exercicis/snake.css");
        window.open("https://github.com/carlavarea/html_jedi/blob/master/exercicis/snake.js");
    }
}