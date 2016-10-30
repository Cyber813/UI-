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

// anchor(), big(), bold(), fontcolor(), fontsize(), italics(), link(), small(), strike(), sub(), sup()

// anchor() returns the html element anchor tag 
console.log(a.anchor("value")); //<a name="value">TejaSudha name has Sudha</a>
console.log(a.big()); // returns the string in big html element
console.log(a.bold()); // returns the string in b tag
console.log(a.fontcolor("red")); // returns the font tag in color red
console.log(a.fontsize(3)); // there is a size of 0 to 7 signed numbers.
console.log(a.italics()); // return the string in italic tag
console.log(a.link("www.google.com")); // return the string in a tag
console.log(a.small()); //  return the string in the small tag
console.log(a.strike()); // return the string in the strike tag
console.log(a.sub()); // return the string in the sub tag
console.log(a.sup()); // return the string in the sup tag

//startsWith(), endsWith()
console.log(a.startsWith("Teja")); // true // it returns true if the string starts with Teja
console.log(a.endsWith("Sudha")); // true // it returns true if the string ends with Sudha

// trim()
var b = '  Teja Sudha  '
console.log(b.trimRight()); // it avoids whitspace at right
console.log(b.trimLeft()); // it avoids whitespace at left
console.log(b.trim()); // it avoids whitespace on both sides














