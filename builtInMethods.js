// SECTION 1: Calling methods on string or integer objects.
// Run each line of code below (either from this file or in dev tools).
// Then, in a comment, write 1-2 sentences describing what is happening, using ALL the involved vocabulary terms you've learned in this lesson so far.

// EXAMPLE
// The toLowerCase() method is called on the string "Hello World"
// No arguments are passed; toLowerCase() has one clear job which is to lowercase all letters that exist in the String
// The return value is "hello world"
"Hello World".toLowerCase();

// The .includes() method is called on the string "Hello World"
// No arguments are passed; .includes has one clear job to check if the string "Hello" is present in the first string "Hello World"
// The return value is true since this is a boolean but there is no output because we have not asked the console to print
"Hello World".includes("Hello");

// The .endsWith() method is called on the string "Hello World"
// No arguments are passed; .endsWith has one clear job to check if the string "Hello World" ends with the string in parentheses "Hello"
// The return value is false since this method returns a boolean value but there is no output because we have not asked the console to print
"Hello World".endsWith("Hello");


// The .endsWith method is called on the string "Hello World"
// No arguments are passed; .endsWith has one clear job to check if the string "Hello World" ends with the string in parentheses "rld"
// The return value is true since this method returns a boolean value but there is no output because we have not asked the console to print
"Hello World".endsWith("rld");




// SECTION 2: Calling methods on variables assigned to strings.
// Declare 2 variables assigned to strings.
// Call a different built-in JavaScript method on each of your variables. 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
// Include comments above each method call explaining the impact and return value of that method.

// EXAMPLE
// The startsWith() method is called on the firstName variable, which stores the string object "Jeff". 
// The startsWith() method returns true if the data in the firstName variable starts with the argument passed in.
// In this example, the return value is true, because "Jeff" does start with "J".
// The console.log() statements prints the return value of the startsWith() method (true) to the console.
var firstName = "Jeff";
console.log(firstName.startsWith("J"));

//ANSWER
// The toUpperCase method is called on in the currentMonth variable, which stores the string object "May"
// The startsWith method has one clear purpose to change the letters in the string to uppercase
// The console.log() statement prints the return value of the toUpperCase method to the console
var currentMonth = "May";
console.log(currentMonth.toUpperCase());

// ANSWER
// The slice method is called on in the shelterCats variable, which stores the string object "Sassy, Figaro, Tom"
// The slice method is employed to return a copy of a portion of a string or an array using index values as inidicated in the () 
// The console.log() statement prints the return value of the indicated "slice" or section within the string without changing the original string
var shelterCats = "Sassy, Figaro, Tom"
console.log(shelterCats.slice(0,5))


// SECTION 3: Calling methods on variables assigned to arrays.
// Declare 2 variables assigned to arrays.
// Call a different built-in JavaScript method on each of your variables. 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
// Include comments above each method call explaining the impact and return value of that method.

// ANSWER
// The pop method is called on in the students variable, which stores the array "Adam, Cory, Deanna, Peggy"
// The pop method has one clear purpose to remove the last element from the arry, return that element, and change the length of the array moving forward
// The console.log statement prints the return value of the last element = "Peggy"
var students = ['Adam', 'Cory', 'Deanna', 'Peggy']
console.log(students.pop());

//ANSWER
// The push method is called on in the shoes variable which stores the array "running shoes, sandals, flats, heels"
// The push method has one clear purpose to add specified elements to the end of the array and returns the new length
// The console.log statement prints the return value of the entire shoe array after adding the new elements of "hiking boots and slide"
var shoes = ['running shoes', 'sandals', 'flats', 'heels']
shoes.push('hiking boots','slides')
console.log(shoes)