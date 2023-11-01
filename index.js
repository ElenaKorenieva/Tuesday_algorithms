// Tuesday: JS Intermediate

// 1. Addition
// Add all the values between 200 and 2700 (inclusively) that are divisible by 3 or 5,
// but not both 3 and 5. To solve this task you might want to use the modulus operator.

// Pseudocode
// 1. create a function;
// 2. create result variable for storage of addition;
// 3. use for loop inside function in case to iterate over values from 200 up to 2700 (inclusively);
// 4. check whether each value is divisible by 3 and 5 and skip this value;
// 5. check whether each value is divisible only by 3 and add it to the result variable;
// 6. check whether each value is divisible only by 5 and add it to the result variable;
// 7. return result variable value;
// 8. call function inside console.log;

function addition() {
  let result = 0;

  for (let i = 200; i <= 2700; i++) {
    if (i % 3 == 0 && i % 5 == 0) continue;
    else if (i % 3 == 0) result += i;
    else if (i % 5 == 0) result += i;
  }

  return result;
}

console.log(addition());

//2. Shift the Values
// Given any array X, for example [2,1,6,4,-7], create an algorithm that shifts each number
// by one to the front. When your program is done the output for array [2,1,6,4,-7] should be [-7,4,6,1,2].

//variant #1
//Pseudocode
// 1. Use abstract array method reverse;

const X = [2, 1, 6, 4, -7];
const newArr = X.reverse();
console.log(newArr);

// variant #2
//Pseudocode
// 1. Create a function;
// 2. Create resultArr variable and assign it with empty Array;
// 3. use while loop;
// 4. pop the last element from given array and add it to resultArr;
// 5. return resultArr from the function;
// 6. call the function and assign it's value to variable;
// 7. console.log created variable.

const X1 = [2, 1, 6, 4, -7];

function shiftTheValues(arr) {
  const resultArr = [];

  while (arr.length > 0) {
    const lastElement = arr.pop();
    resultArr.push(lastElement);
  }

  return resultArr;
}

const shiftedArray = shiftTheValues(X1);
console.log(shiftedArray);

// 3. FizzBuzz
// Create an algorithm that inserts the numbers from 1 to 135 into an array,
// while replacing the values that are divisible by 3 with the word "Fizz",
// the numbers that are divisible by 5 with the word "Buzz", and the numbers that are divisible with 3
// and 5 with the word "FizzBuzz". Your output should look like [1,2, 'Fizz',4, 'Buzz', 'Fizz',7, 8, ...]

//Pseudocode
// 1. Create a function which takes two parameters;
// 2. Create result variable with empty Array;
// 3. USe for loop with start and end parameters given to the function;
// 4. Use if else condition to check whether each number is divisible by 3 or 5 or 3 and 5 and push to the result array appropriate value;
// 5. Return result from the function;
// 6. console.log the call of the function with start and end arguments.

function fizzBuzz(start, end) {
  const result = [];

  for (let i = start; i <= end; i++) {
    if (i % 3 == 0 && i % 5 == 0) result.push("FizzBuzz");
    else if (i % 3 == 0) result.push("Fizz");
    else if (i % 5 == 0) result.push("Buzz");
    else result.push(i);
  }

  return result;
}

console.log(fizzBuzz(1, 15));

// 4. Fibonacci
// For a Fibonacci sequence starting at 0 and 1 add up all the values below 1,000,000.
// A Fibonacci sequence is an infinite series of numbers that is created by adding the last two numbers in the series.
// A series would start with the numbers 0 and 1 in place, followed by 1 (0+1), 2 (1+1), 3 (1+2), 5 (3+2), etc.
// 0 1 1 2 3 5 8 13 21..

//Pseudocode
// 1. Create a function to find Fibonacci sequence with parameter n which is the limit value;
// 2. Inside the function create resultSequence variable with the array as a value;
// 3. Use if condition to check if the n (limit) is less than 1;
// 4. Use while loop to check whether the lenght of the resultSequence array
// is greater than the limit and calculate element of the sequence and add it to resultSequence array;
// 5. Return resultSequence array;
// 6. call function inside the console.log with necessary argument.

function fibonacci(n) {
  const resultSequence = [0, 1];
  if (n < 1) {
    return [];
  }

  while (resultSequence.length < n) {
    const next =
      resultSequence[resultSequence.length - 1] +
      resultSequence[resultSequence.length - 2];
    resultSequence.push(next);
  }

  return resultSequence;
}

console.log(fibonacci(100));

// 5. Remove the Negative
// Given any array X, for example [1,-2,4,1], remove the negative numbers, so that the output becomes: [1,4,1].

//Pseudocode
// 1. Create a function;
// 2. Create newArr variable to store result array;
// 3. Use for loop to itereate via given array elements and check
// if each element is greater or equal 0 and push it to the newArr array;
// 4. Return newArr;
// 5. Call the function inside console.log with some array as an argument.

function removeTheNegative(arr) {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 0) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

const givenArray = [1, -2, 4, 1];
console.log(removeTheNegative(givenArray));

// 6. Communist Censorship
// Given the array of strings X = ['Man', 'I','Love','The','Matrix','Program'],
// replace every letter of the word Program with *, so the output would be ['Man', 'I','Love','The','Matrix','*******'].
// Then make your algorithm work for any word of your choice.

// Pseudocode
// 1. Create a function with 2 parameters: given array and censor word;
// 2. Create a censoredArray variable to store result Array;
// 3. Use map PaymentMethodChangeEvent;
// 4. Check in the map methos if the each word of a given array is equal to sensor word (given as parameter of the function),
// and change each letter in that word with *;
// 5. Return censoredArray;
// 6. Call the function inside console.log with the necessary arguments.

function censorshipCheck(arr, censorWord) {
  const censoredArray = arr.map((word) =>
    word === censorWord ? "*".repeat(word.length) : word
  );
  return censoredArray;
}

const originalArray = ["Man", "I", "Love", "The", "Matrix", "Program"];
console.log(censorshipCheck(originalArray, "Program"));
