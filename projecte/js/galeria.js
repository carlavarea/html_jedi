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
    if(id == 1){
        console.log("hola soc 1");
    }
    else if(id == 2){
        console.log("hola soc 2");
    }
    else if(id == 3){
        console.log("hola soc 3");
    }
    else if(id == 4){
        console.log("hola soc 4");
    }
    else if(id == 5){
        console.log("hola soc 5");
    }
    else{
        console.log("hola soc 6");
    }
}