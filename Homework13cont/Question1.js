// document.getElementsByTagName()


function fun1(){

	var totalPara = document.getElementsByTagName("p");
    alert("number of paragraphs" + " " +  totalPara.length );
}

fun1();



// document.getElementById()

function fun2(){

	var myName = "TEJA SUDHA";

	document.getElementById("teja").innerHTML = "NANDY" + " " + myName ;
}

fun2();

//document.getElementsByClassName()

function fun3(){
var t = document.getElementsByClassName("TEJA");
	 document.getElementsByClassName("TEJA")[0].style.color = "red";
	  document.getElementsByClassName("TEJA")[1].style.color = "blue";

t[1].style.backgroundColor = "pink";

}
fun3();


//document.querySelectorAll()

function fun4(){

	var n = document.querySelectorAll("p");
document.write(n.length) ;
}

fun4();








