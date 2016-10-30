// adding properties to prototype

function dessert(name){
	this.name = name;
	
	this.location = "Africa"; // adding property in the prototype
}

var dessert = new dessert("Sahara");
console.log(dessert.location);
console.log(dessert.name);

// using the prototype property

function beach(name){
	this.name = name;

}
beach.prototype.location = "san Diego"; // using the prototype property


var beach = new beach("La Jolla");
console.log(beach.name);
console.log(beach.location);


// adding methods to prototype

function shoes(name){
	this.name = name;
	this.price = function(){
		return "$" + 80;
	}
}
var shoes = new shoes("nike");
console.log(shoes.price());
console.log(shoes.name);


// using prototype methods

function bags(name){
	this.name = name;

}
bags.prototype.price =   function(){
	return "$" + 80;
}

var bags = new bags("AmericanTourister")
console.log(bags.name + " "+"costs" +" " + bags.price());






