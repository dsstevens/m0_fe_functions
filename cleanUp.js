// Each example below has at least one opportunity for improvement.

// YOUR TASK:
  // Modify the code to make that improvement(s)
  // write a JS comment to explain what you changed, and why
  // make sure the code you submit WORKS - you can run this entire file 
    // using `node cleanUp.js` or copy and paste into a replit


// EX 1:
function askForName() { 
  console.log("Hello, what is your name?") 
}

askForName();

/* Here, I shifted the lines down, moved the curly bracket to its own line, 
and added a semicolon at the end of calling the function,
keeping with convention. */


// EX 2:
function addThreeNums(first, second, third) {
var sum = first + second + third
return sum;
}

console.log(addThreeNums(1, 2, 3));
console.log(addThreeNums(4, 2, 7));

/* I added console.log() to both arguments at the end in 
order to have a printed output */


// EX 3:
function makeFreshPesto(){
  console.log("Buy ingredients: basil, parmesan, romano, olive oil, pine nuts, garlic, salt, pepper");
  console.log("Pulse basil and pine nuts");
  console.log("Add garlic and cheeses");
  console.log("Slowly pour in oil");
  console.log("Season");   
}

makeFreshPesto();
/* 
I changed the term 'func' to 'function' which allows the interpreter
to understand that the code block is referring to a function we are 
naming as 'makeFreshPesto' 

I also moved the closing curly bracket of the code block down to line 39
in line with the first characters of code in order to keep with convention,
 making it clearer where it ends.
*/

//  EX 4:
function average(num1, num2) {
var sum = num1 + num2;
var avg = sum / 2;

return avg;
}
console.log(average(8,2));

  /* Keeping with syntax convention, I moved the opening curly brackets 
  up to line 52 and shifted 'var avg' on line 55 to be in line with 'var sum'.

  And I'm assuming that we want to print out an output, so I gave this example
  an argument to run by adding 'console.log' after the last curly bracket. 
  I chose numbers as an example and put them in the parentheses in the argument
  after invoking function we named 'average'
  
  I cleaned up the line breaks with semicolons on line 56 and 58 
  
  And lastly, I moved the closing bracket to be in line with the first characters */



