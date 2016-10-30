// Object Creation
// 3Types
//1.keyword new

//creating objects using new  Object and it consists of name value pairs
// Accessing object values using dot operator.
var a = new Object()
a.carName = "Toyota";
a.color = "Red";
console.log(a.carName); // Toyota


//2. Object Literal
//Alternate way of creating objects using {} object literals.

var b ={motherName : "sumalatha", fatherName: "pitchi babu",children:{
	daughterName:"Tejasudha", sonName: "sasidhar"
}}
console.log(b.children.daughterName);

//3.Constructor

function artist(name,distributiondate) {
//this keyword owns the function 
	this.name = name;
	this.distributiondate = distributiondate;

}

var p = new artist("Tejasudha","20-11-2014"); // instance of an object artist
var  q= new artist("sasidhar","12-10-2015"); // instance of an object artist
console.log(p.name);
console.log(p.distributiondate);