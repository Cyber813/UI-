// Adding a property

var language = {
	Name1: "English",
	Name2: "Spanish",
	Name3: "French" 
}

console.log(language.Name3); //French
language.Name4 = "Italian"; // Adding a property on fly
console.log(language.Name4); 


// Deleting a property

console.log(delete language.Name4);

// check the property or accessing the property

console.log(language["Name1"]); // objectName["property"] // English
console.log(language.Name2);// Accessing property by using dot operator // Spanish


//Edit Property value on fly
console.log(language["Name1"]="Korean"); 
console.log(language["Name1"])// Now it changes English to Korean.