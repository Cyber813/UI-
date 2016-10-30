var object1 = {}

console.log(Object.getPrototypeOf(object1)); // object1 inherits the properties of Object

var object2 = new Object();
console.log(Object.getPrototypeOf(object2)); // prototype of object2 is same as object1

var pattern = new RegExp('search me');
console.log(Object.getPrototypeOf(pattern));

console.log(RegExp.prototype); // pattern inherits the RegExp property


var a = new Array();

console.log(Object.getPrototypeOf(a));

console.log(Array.prototype); // a inherits the property of Array

// It could be of var a = [];


//RegExp.prototype is inherited by object.getPrototype(item)

//creating Prototype

//constructor function or prototype
function car(name,color){
	this.name = name;
	this.color = color;

}

var car2 = new car("BMW","Blue"); // car2 inherited from the prototype object car
var car3 = new car("Audi", "Black"); // car3 inherited from the prototype object car


console.log(car2.name);
console.log(car2.color);
console.log(car3.name);
console.log(car3.color);







