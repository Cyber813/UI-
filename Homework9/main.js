var a = 10;
var b = 2;
var c = 2;

document.write(a + b - a * b / c % a + "<br/>"); // First precedence multiplication, division,modulo,addition and subtraction
document.write(a + b * c + "<br/>");// multiplication operator takes the first precedence.
document.write(a / b * c + "<br/>");// It takes the left associativity. As it has the same precendence 

 /* left to Right Associativity */

//Created an object named person and assigned the key values to the object
 var person = {FirstName: "Johnny" , LastName: "Baker", AGE: "75"};
// Accessing the object members by using the '.'
 document.write(person.FirstName + " "+ "(Member Access)" + "<br/>"); // Johnny
  document.write(person["FirstName"] + " "+ "(Computed Member Access)" + "<br/>"); // Johnny




/* Function Call */
// Function defined with the function name and parenthesis and it consists of parameters

function myFunc(a,b){
	// It returns the value of a'a' and 'b' multiplication number
	return a * b ; 
}
// The function is invoked by using the functionName(argument values);
document.write(myFunc(30,45) + "" + "(Function Call)"+"<br/>"); // 

/* Multiplication, Division and Remainder */

var r = 45, t = 23 ;

document.write(r * t / r % t + " " + "(same precedence)" + "<br/>"); //

/* Addition and Subtraction */

var g = 9;
var h = 2;

document.write(g + h - g + " " + "(same precedence)" + "<br/>"); //

/* Bitwise Left Shift, Bitwise Right Shift and Bitwise Unsigned Right shift */


 // It shifts 1 bit to left and gives the decimal value 
 
console.log(3 << 1);// 6

// It shifts 2 bits to right  and gives the decimal value

console.log(4 >> 2); // 1

  // It shifts the  2 bits to right and then removes the shifted bits.
console.log(5 >>> 1) ;// 2
 
/*Lessthan, Lessthan Or Equal to, GreaterThan, Greaterthan or Equal to 
*/
console.log(2 < 3 ); //  true
console.log(2 <= 4 ); // true
console.log(3 > 1); // true
console.log(3 >= 3); // true 

/* in , instanceof */


 console.log("FirstName" in person) // true
 

 // instanceof checks whether  the object is in its prototype chain.

 function hello(){

 }
 var h = new hello();
 document.write(h instanceof hello); // created a function constructor and also an object 
 // Here instanceof tests the presence of the constructor.prototype in the object prototype chain
  
/* Equality , Inequality , Stict Equality , Strict Inequality */

// Equality check only the value
console.log( 2 == '2') // true 
//Inequality checks only the value
console.log(2 != '2') // false
//Strict Equality checks both value and type
console.log(2 === '2') // false
console.log(2 === 2)
//Strict Inequality checks both value  and type
console.log(2 !== '2') // true
console.log(2 !== 2)// false

/* Bitwise AND, Bitwise XOR and Bitwise OR */
// Bitwise AND gives the value 1 if both operands are true. Performs AND operation 
console.log(2 & 4)// 0
//Bitwise XOR gives the value as 1 if only the one of the operands are true and otherwise it is false
console.log(2 ^ 4)// 6
//Bitwise OR gives if any of the operand is true.
console.log(2 | 4) // 6

/* Logical AND and Logical OR */

// Logical AND gives the truthy value if ond only if both the conditions are true
console.log((2 > 3) && (2 <= 2))// false
console.log((2 < 3) && (2 <= 2))// true
//Logical OR gives the truthy value if and only if , one of the operands are true.
console.log((2 > 3) || (2 <= 3)) // true

/* Comma or Sequence */

//It is  used in most cases to supply multiple parameters in a for loop and also in the

for (var i = 0, j = 10; i <= 9; i++, j--) // using a single expression instead of writing in multiple expressions.
  console.log(i,j); 

/* Right to Left Asssociativity */

/* new  */
function Os(){}
os1 = new Os(); // create an instance of the object Os with new 

console.log(os1.name); // undefined

Os.prototype.name = null;
console.log(os1.name); // null

os1.name = "Dianne";
console.log(os1.name); // Dianne

/* Logical NOT , Bitwise NOT , Unary plus, Unary Negation, Prefix Increment, Prefix Decrement, typeof , void , delete */

console.log(!'5'); // return false
console.log(~5); // return -6 as it is bitwise not it gives the negative befor value of 5
console.log(+3); // returns 3
console.log(+ true); // 1 unary plus
console.log(+false); // 0 unary plus
console.log(+null); //0 unary plus
console.log(+function (val){return val});// NaN unary plus
console.log(-9); // -9 it negates the operand unary negation
console.log(-true); // -1 
console.log(-false); // -0
console.log(- "p"); // NaN


var i = 3
y = ++i;
console.log(y); // It first assigns the increment value to 'y' and then

var i = 3;
var n ="teja";
y = --i;
console.log(y);
console.log(typeof(y) + typeof(n)); // It first assigns the decrement value to 'y' and then assigns the value to the operand and returns the type of y

// for loop

for(i=0;i<10;i++)
            {
            console.log(i );
            }
//while loop
var i = 2
while(i<10)
{
	console.log(i);
	i++;
}

//dowhile

var i = 5;
do{
	console.log(i);
	i++;
}
while(i<10);

// if else

if(2 == '2'){
	console.log("It is true");
}else
{
	console.log("It is false"); // It is true
}

//switch

var thisDay = Number(prompt("pleas enter a day", ""));

switch(thisDay) {
	case 1: 
	alert("This day is Monday");
	break;
	case 2:
	 alert("This day is Tuesday") ;
	break;
	default:
	alert("This day is Wednesday") ;

}





