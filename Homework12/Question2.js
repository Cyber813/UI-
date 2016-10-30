var subject = function subject(name,publishedBy){

	this.name = name;
	this.publishedBy = publishedBy;
}

var newSubject = new subject("Science", "Dr.Manjula");

console.log(newSubject.name);
console.log(newSubject.publishedBy);


console.log(newSubject instanceof subject); //If the newly created object which is inherited from the constructor of prototype 
