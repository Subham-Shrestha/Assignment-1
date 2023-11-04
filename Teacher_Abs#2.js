// 40.
var num1 = prompt("Enter a positive number : ");
var num2 = prompt("Enter another positive number : ");
if(num1 == 8)
console.log("The first number you entered is eight.");
if(num2 == 8)
console.log("The second number is eight.")
if(num1 + num2 == 8)
console.log("The sum of numbers is 8.");
if(num1 - num2 ==8)
console.log("The difference is 8.");

// 41.
var num1 = prompt("Enter first number : ");
var num2 = prompt("Enter second number : ");
var num3 = prompt("Enter third number : ");
function three_numbers(num1, num2, num3) {
  if (num1 == num2 && num2 == num3) {
    return 30;
  }

  if (num1 == num2 || num2 == num3 || num3 == num1) {
    return 40;
  }
else {
  return 20;
}
}


// 42.
var num1 = prompt("Enter first number : ");
var num2 = prompt("Enter second number : ");
var num3 = prompt("Enter third number : ");
if(num1 - num2 >= 10 && num2 - num3 >= 10)
console.log("Strict mode.");
if(num1 - num2 < 10 && num2 - num3 < 10)
console.log("Soft mode.");

// 43.
var num1 = prompt("Enter first number : ");
var num2 = prompt("Enter second number : ");
var num3 = prompt("Enter third number : ");
if(num1 == 20)
console.log("First number is equal to 20.");
if(num2 == 20)
console.log("Second number is equal to 20.");
if(num3 == 20)
console.log("Third number is equal to 20.");
if(num1 > 20)
console.log("First number is greater than 20.");
if(num2 > 20)
console.log("Second number is greater than 20.");
if(num3 > 20)
console.log("Third number is greater than 20.");

// 44.
var num1 = prompt("Enter first numnber : ");
var num2 = prompt("Enter second number : ");
var num3 = prompt("Enter third number : ");
if(num1 % 10 == num2 % 10)
console.log("First and second number have rightmost same digit.");
if(num2 % 10 == num3 % 10)
console.log("Second and third number have same rightmost digit.");
if(num1 % 10 == num3 % 10)
console.log("First and third number have same rightmost digit.");
if(num1 % 10 == num2 % 10 == num3 % 10)
console.log("All the numbers have same rightmost digit.");