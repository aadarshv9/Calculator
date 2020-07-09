var screen = document.getElementById('screen');
var ac = document.getElementById('ac');
var plusminus = document.getElementById('plusminus');
var mod = document.getElementById('mod');
var seven = document.getElementById('seven');
var eight = document.getElementById('eight');
var nine = document.getElementById('nine');
var four = document.getElementById('four');
var five = document.getElementById('five');
var six = document.getElementById('six');
var one = document.getElementById('one');
var two = document.getElementById('two');
var three = document.getElementById('three');
var zero = document.getElementById('zero');
var decimal = document.getElementById('decimal');
var equal = document.getElementById('equal');
var plus = document.getElementById('plus');
var minus = document.getElementById('minus');
var multiply = document.getElementById('multiply');
var divide = document.getElementById('divide');

var exp1 = "";
var exp2 = "";

ac.addEventListener('click', function(){
	screen.innerHTML = "";
});

zero.addEventListener('click', function(){
	var str = screen.textContent + "0";
	screen.innerHTML = str;
});

one.addEventListener('click', function(){
	var str = screen.textContent + "1";
	screen.innerHTML = str;
});

two.addEventListener('click', function(){
	var str = screen.textContent + "2";
	screen.innerHTML = str;
});

three.addEventListener('click', function(){
	var str = screen.textContent + "3";
	screen.innerHTML = str;
});

four.addEventListener('click', function(){
	var str = screen.textContent + "4";
	screen.innerHTML = str;
});

five.addEventListener('click', function(){
	var str = screen.textContent + "5";
	screen.innerHTML = str;
});

six.addEventListener('click', function(){
	var str = screen.textContent + "6";
	screen.innerHTML = str;
});

seven.addEventListener('click', function(){
	var str = screen.textContent + "7";
	screen.innerHTML = str;
});

eight.addEventListener('click', function(){
	var str = screen.textContent + "8";
	screen.innerHTML = str;
});

nine.addEventListener('click', function(){
	var str = screen.textContent + "9";
	screen.innerHTML = str;
});

multiply.addEventListener('click', function(){
	exp1 = screen.textContent+"*";
	screen.innerHTML = "";
});

plus.addEventListener('click', function(){
	exp1 = screen.textContent+"+";
	screen.innerHTML = "";
});

minus.addEventListener('click', function(){
	exp1 = screen.textContent+"-";
	screen.innerHTML = "";
});

divide.addEventListener('click', function(){
	exp1 = screen.textContent+"/";
	screen.innerHTML = "";
});

mod.addEventListener('click', function(){
	exp1 = screen.textContent+"%";
	screen.innerHTML = "";
});

equal.addEventListener('click', function(){
	exp2 = screen.textContent;
	if(exp1 == "" || exp2 == ""){
		screen.innerHTML = "error";
	}
	var ans = eval(exp1+exp2);
	screen.innerHTML = ans;
});


