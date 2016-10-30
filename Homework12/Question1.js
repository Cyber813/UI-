//constructor 
var subject = function subject(name,publishedBy){

	this.name = name;
	this.publishedBy = publishedBy;
}

var newSubject = new subject("Science", "Dr.Manjula");

console.log(newSubject.name);
console.log(newSubject.publishedBy);


// new subject() creates a new object
// It sets the constructor property of the object to newSubject
//It sets up the object to delegate to subject,proptotype
// It calls newSubject()in the context of new object