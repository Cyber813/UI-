


// adding event handler to the element

document.getElementsByClassName("TEJA")[0].addEventListener("click",myFunction);
function myFunction(){
	alert("Hi, TEJASUDHA!");
	document.getElementsByClassName("TEJA")[1].style.backgroundColor = "skyblue";
	document.getElementsByClassName("TEJA")[0].innerHTML = "It has changed"
}

// Adding many event handlers on the same element like same event type. 

var t = document.getElementById("btn");
t.addEventListener("click",fun1);
t.addEventListener("mouseover",fun2);

function fun1(){
	document.getElementsByTagName("p")[1].style.fontFamily = "Courier";
}

function fun2(){
	document.getElementById("btn").innerHTML = "I Clicked";
}


// adding event handler to the window object


window.addEventListener("click", fun3);

	function fun3(){
	document.getElementsByClassName("TEJA")[0].innerHTML = "HI!"
}

// passing parameters

var fName = "TEJA SUDHA";
var lName = "GARIGANTI"
document.getElementsByClassName("TEJA")[1].addEventListener("mouseover",function(){
	fun5(fName,lName);
})

function fun5(FirstName,LastName){
	var fullName = FirstName + " " + LastName;
	document.getElementsByClassName("TEJA")[1].innerHTML = fullName;
}






















