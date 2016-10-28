// Logical OR
var teja;

console.log(undefined || 0); // 0 

// Logical AND
console.log((null == undefined) && (2 > 1)); // true

// string Methods
var a = "TejaSudha name has Sudha"

// string length
console.log(a.length); //  it returns the length of the string // 9

// indexOf()
console.log(a.indexOf("j")); // It returns the position of the string // 2
console.log(a.indexOf("Sudha")); // It returns the starting position of the string // 4
// It also returns the position of the first occurence.

// lastIndexOf()
console.log(a.lastIndexOf("Sudha")); // 19 // It returns the position of the string and should be the last occurence
console.log(a.lastIndexOf("i")); // It returns -1 it the string is not available.

// slice(starting position, ending position)
console.log(a.slice(4,9));// Sudha // It returns a value starting from the postion and ends at the position.

console.log(a.slice(10,14)); // name

console.log(a.slice(10)); // slice out rest of the string starting from the name // name has Sudha

console.log(a.slice(-14, -10)) // name // It counts from ending as the first position

console.log(a.slice(-14)); // name has Sudha // It returns rest of the string 

// substring(starting position, ending position)
console.log(a.substring(4,9)); // It returns the string that starts at index 4 and end at index 9
console.log(a.substring(4)); // It gives the rest of the string
// substing won't accept negative indexes rest is same as slice.

//substr(starting index, length of the extracted part)
console.log(a.substr(4,6)); // sudha // It returns the starting index of the string and how much length it has to be
console.log(a.substr(4)); // Sudha name has Sudha // It returns the rest of the string starting from the index

//replace()
console.log(a.replace("Sudha","Sudha")); // It only changes the first occurence of the word
console.log(a.replace("/Sudha/g","sudha"))// It  replaces the string whereever they are

//toUpperCase()
console.log(a.toUpperCase());//TEJASUDHA NAME HAS SUDHA // It conversts the entire sting to Uooercase

//toLowerCase()
console.log(a.toLowerCase());// tejasudha name has sudha // It converts the entire sting to lowercase

//concat()
console.log(a.concat(" ", "Number 1"));// the string in a and the Number 1 will be concatenated.

//charAt()
console.log(a.charAt(4)); // It returns the character at that index in the given string

//charCodeAt()
console.log(a.charCodeAt("TejaSudha"));//returns the unicode of the character at a specified index in a string

// split()
console.log(a.split(''));// It splits the string into an array.



//Array Methods

//toString()
var b = ["Teja","Sudha","Sasi","Suma"];

console.log(b.toString()); // It returns the array in a string

//join()
console.log(b.join("+")); // It returns the array in to a string and also returns an joining operator between the string

//pop()
console.log(b.pop()); // It returns that element which is popped out from an array. It pops the last element

//push()
console.log(b.push("Suma"));// It pushes the element to the end of an array. and returns the length of the string.

//shift()
console.log(b.shift()); // It removes the element from the starting of an array. 

// unshift()
console.log(b.unshift("Teja")); // It adds new element to an array in the front. and returns the length of an array

// index
console.log(b[0] = "Gariganti"); // It adds the element at 0th index and removes the element at that position

//length
console.log(b[b.length] = "Teja"); // I am adding an element at the end of the array using the length

//delete
console.log(delete b[0]); // It returns the boolean value if it deletes the element at that index and make that index as undefined

//splice(starting index, how many element to remove)
console.log(b.splice(0,1,"Teja")); // It returns adding element at the 0th index removing previous element

//splice()
console.log(b.splice(2,0,"Rama")); // It adds the element at position 0 by removing 0 elements

//concat()
console.log(b.concat("Sita"));// It adds an element at the end of the array

//slice()
console.log(b.slice(1,3)); // It returns the element at first index and not includes the end argument. 

//slice()
console.log(b.slice(1)); // Do not include the first element and gives the rest of the elements in an array

// valueOf()
console.log(b.valueOf()); // It returns the primitive value of an object.












