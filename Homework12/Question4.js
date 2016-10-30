
//Global Context

console.log(this.window);
console.log(this);
console.log(this == window); // Global object this is equal value as window object


//Function Context

function tree(name){
	this.name = name; 

}
var tree = new tree("Papaya");
console.log(this.name == window); //false it owns the function tree.

