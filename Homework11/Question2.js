// object
//creating objects using new  Object and it consists of name value pairs
// Accessing object values using dot operator.
var a = new Object()
a.carName = "Toyota";
a.color = "Red";
console.log(a.carName); // Toyota

//Alternate way of creating objects using {} object literals.

var b ={motherName : "sumalatha", fatherName: "pitchi babu",children:{
	daughterName:"Tejasudha", sonName: "sasidhar"
}}
console.log(b.children.daughterName);

// passing object as a parameter and accessing the object properties inside a function 

function greet(){
	console.log("Hi" + b.children.sonName)
}
greet(b); // passing the object as parameter when invoking a function
greet({sonName:"sasidhar"});// creating object on the fly.






//hasOwnProperty()

var object1 = {firstName: "Tejasudha", lastName:"Gariganti"};

console.log(object1.firstName);
var object2 = Object.create(object1);
console.log(object2.firstName);

console.log("firstName" in object1);//true
console.log("firstName" in object2);//true
console.log(object1.hasOwnProperty("firstName")); //true
console.log(object2.hasOwnProperty("firstName")); // false