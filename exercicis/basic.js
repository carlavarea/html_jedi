/*Els calculs de 'given numbers' estan fets amb un nombre fixe (5) i amb un nombre generat random.
Per fer el factorial ja es crida a una altre funcio que es diu factorial. */
window.onload = function(){
	//Calculates the square of a given number.
	var ifix = 5;
	var i = (Math.random()*100).toFixed(0);
	document.write('Square of ' + ifix + ': ' + ifix*ifix + "<br>");
	document.write('Square of ' + i + ': ' + i*i + "<br>");
	//Check if a number is even or odd.
	if(ifix%2 == 0) document.write(ifix + ' is an even number' + "<br>");
	else document.write(ifix + ' is an odd number' + "<br>");
	if(i%2 == 0) document.write(i + ' is an even number' + "<br>");
	else document.write(i + ' is an odd number' + "<br>");
	//Calculates the factorial of a number.
	//Call another function.
	var fact = factorial(ifix);
	document.write('Factorial of ' + ifix + ': ' + fact + "<br>");
	var fact = factorial(i);
	document.write('Factorial of ' + i + ': ' + fact + "<br>");
	//Returns a random number.
	var rand = Math.random()*100;
	document.write('Random number: ' + rand + "<br>");
	//Returns which of 4 given numbers is the biggest.
	var rand1 = (Math.random()*100).toFixed(0);
	var rand2 = (Math.random()*100).toFixed(0);
	var rand3 = (Math.random()*100).toFixed(0);
	var rand4 = (Math.random()*100).toFixed(0);
	var biggest = Math.max(rand1, rand2, rand3, rand4);
	document.write('<b>Random numbers:</b><br>' + rand1 + '<br>' + rand2 + '<br>' + rand3 + '<br>' + rand4 + '<br>');
	document.write('<b>Biggest number:</b> ' + biggest + '<br>');
	//Uses console.log() to show the content of an array with the months of the year.
	var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
	console.log(months);
	for(j = 0; j < months.length; ++j){
		console.log(months[j]);
	}
}

function factorial (n){
	var total = 1;
	for(i = 1; i<=n; i++){
		total = total * i;
	}
	return total;
}

