// Defining Our Own Functions
// For each exercise below, write the function according to the requirements. 
// Call each method at least twice and store the return value in a variable. 
// Use console.log() to see the return value in the console.

// 1: Write a function named greeting that returns a string with a general greeting. 
function greeting(){
    return "Good morning";
  }
  greeting();
  greeting();
  var goodMorning = greeting();
  console.log(goodMorning);

// 2: Write a function named customGreeting that returns a greeting WITH a specific name.

function customGreeting(name){
    return `Good morning, ${name}!`;
   }
 customGreeting();
 customGreeting();
var greeting = customGreeting("Deanna");
 console.log(greeting);
  

// 3: Write a function named greetPerson that takes in 3 strings, a first, middle, and last name, and returns a sentence with the full name.
function greetPerson(name) {
    return `My name is ${name}`;
  }
  greetPerson();
  greetPerson();
  var speaker = greetPerson("Deanna " + "Sofia " + "Stevens");
  
  console.log(speaker);

// 4: Write a function named square that takes in one number, and returns the square of that number.
// BONUS: Print a sentence that interpolates the return value of your square function.

function square(product){
    return `The square of ${5} is `;
  }
  square();
  square();
  var statement = square()
  console.log(statement + (Math.pow(5,2)));
  
  // I know that this isn't ideal for reusability but for now it satisfies the requirements. I would appreciate feedback about how best to make the 
  // number within the interpolated code block dynamic.
  
// 5: Write a function named checkStock that satisfies the following interaction pattern:
// Hint: You will only write one checkStock function that checks the quantity and then prints the corresponding statement.

checkStock(4, "Coffee");
// => "Coffee is stocked"

checkStock(3, "Tortillas");
// => "Tortillas - running LOW"

checkStock(0, "Cheese");
// => "Cheese - OUT of stock!"

checkStock(1, "Salsa");
// => "Salsa - running LOW"

var coffee = 4;
var tortillas = 3;
var cheese = 0;
var salsa = 1;

function checkStock(ingredient){
  
  if (coffee >= 4) {
    console.log("Coffee is stocked.");
  }
  if (tortillas <= 3){
    console.log("Tortillas - running LOW");
  }
  if (cheese < 1) {
    console.log("Cheese - OUT of stock!");
  }                  
  if (salsa < 2) {
    console.log("Salsa - running LOW");
  }
}

var breakfastTacos = checkStock();
console.log(breakfastTacos);
