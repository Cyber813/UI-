
// Example 1: bind()

var person = {
	firstName : "Teja",
	lastName : "Gariganti",
	getFullName : function (){
		var fullname =  this.firstName +' ' + this.lastName;
		return fullname;
	}
}
var logName = function(lang1,lang2){
	console.log('looged:' + this.getFullName()); // this.getFullName refers to the above function as it owns the above function


}

var logPersonName = logName.bind(person); // If i use bind over here i can apply the person object to the bind method and can access the method.

logPersonName();

// Example 2 : bind()

var calculation = {
	addition : 10,
	subtraction : 20,
	multiplication : 30,
	sumAddSub: function(){
		return this.addition * this.subtraction * this.multiplication;
	}
}

var anotherNumber = function(){
  console.log("the number is :" + this.sumAddSub()); 
  // this.sumAddSub is defined in the above function method and the this keyword owns the above function so if i want to apply that method in this function i assign the calculation object to the bind method to inherit the this.sumAddSub to this function object


} 

.bind(calculation);
anotherNumber();


// call() : Example 1

var obj = {num : 2}; // object 'obj' doesn't have the getSum method

var getSum = function(a,b){ // getSum method doesn't have a property

	return this.num + a + b; // access the num in obj and it returns the addition of the arguments plus num

}
.bind(obj); //assigning the object obj to the bind method

console.log(getSum.call(obj, 40, 7)); // functionName and there includes call method then in that pass the parameters as the object name and the function parameter values.



// apply(): Example 1
// It is also same as call() and invokes directly when apply method is applied and the function arguments are declared in an array()

console.log(getSum.apply(obj,[40,7])); 

//

console.log(getSum(20,30));  // passing the parameters to the getSum method


// Function Borrowing

var calculation2 = {
	
addition : 10,
	subtraction : 20,
	multiplication : 30
}
// created another object 
console.log(calculation.sumAddSub.apply(calculation2));

// Borrowing function and adding to this newly created object
var obj2 = {num : 7}

console.log(getSum.apply(obj2,[60, 8])); //adding that function function property to this object

// function currying

function multiply(a,b){
	return a * b;
}

var multiplyByTwo = multiply.bind(this, 2); // creating new copy and using the parameters of the existing function using the bind method
console.log(multiplyByTwo(67));


// call()and apply()
console.log(multiply.call(multiplyByTwo,4,67)); // functionName.call(newObjectName,Argumentvalues)

console.log(multiply.apply(multiplyByTwo,[6,45])); // functionName.apply(newObjectName,[Argumentvalues])









