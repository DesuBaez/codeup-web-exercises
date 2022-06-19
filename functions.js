"use strict";
alert("Yo lets make sure this works")
/**
 * TODO:
 * Create a function called 'sayHello' that takes a parameter 'name'.
 * When called, the function should return a message that says hello to the passed in name.
 *
 * Example
 * > sayHello("codeup") // returns "Hello, codeup!"
 */
function sayHello (Input) {
  return ("Hello "+ Input)
}
 console.log (sayHello("David"))

/**
 * TODO:
 * Call the function 'sayHello' and pass your name as a string literal argument.
 * Store the result of the function call in a variable named 'helloMessage'.
 *
 * console.log 'helloMessage' to check your work
 */
 sayHello ("David")
let helloMessage = sayHello
console.log ("helloMessage")

/**
 * TODO:
 * Store your name as a string in a variable named 'myName', and pass that
 * variable to the 'sayHello' function. You should see the same output in the
 * console.
 */
let myName = ("David")
sayHello(myName)
console.log (sayHello(myName))















var random = Math.floor((Math.random() * 3) + 1);

function isTwo (number){
    if(number % 2 == 0)
        console.log("the number is even");
        else
        {console.log("the number is odd")
        }
    }

isTwo(random)


/**
 * TODO:
 * Create a function called 'isTwo' that takes a number as a parameter.
 * The function should return a boolean value based on whether or not the passed
 * number is the number 2.
 *
 *
 * Example
 * > isTwo(1) // returns false
 * > isTwo(2) // returns true
 * > isTwo(3) // returns false
 *
 * Call the function 'isTwo' passing the variable 'random' as a argument.
 *
 * console.log *outside of the function* to check your work (you should see a
 * different result everytime you refresh the page if you are using the random
 * number)
 */
function isTwo (number){
    if(number % 2 == 0)
        console.log("the number is true");
    else
    {console.log("the number is false")
    }
}

isTwo(random)







/**
 * TODO:
 * Create a function named 'calculateTip' to calculate a tip on a bill at a
 * restaurant. The function should accept a tip percentage and the total of the
 * bill, and return the amount to tip
 *
 * Examples:
 * > calculateTip(0.20, 20) // returns 4
 * > calculateTip(0.25, 25.50) // returns 6.375
 * > calculateTip(0.15, 33.42) // returns 5.013
 *
 */



var totalBill=(number)
var tipPercent=(number)
var tipamt=(number)
var total=(number)
function calculateTip (number){
     // totalBill*tipPercent=tipamt-,(tipamt-totalBill=total)
    console.log (total)


}

/**
 * TODO:
 * Use prompt and alert in combination with your calculateTip function to
 * prompt the user for the bill total and a percentage they would like to tip,
 * then display the dollar amount they should tip
 */
prompt("Please provide your bill total");
prompt("please provide desired tip amount");


/**
 * TODO:
 * Create a function named `applyDiscount`. This function should accept a price
 * (before a discount is applied), and a discount percentage (a number between 0
 * and 1). It should return the result of applying the discount to the original
 * price.
 *
 * > var originalPrice = 100;
 * > var discountPercent = .2; // 20%
 * > applyDiscount(originalPrice, discountPercent) // 80
 *
 * > applyDiscount(45.99, 0.12) // 40.4712
 *
 *
 */
var discountedNumber= (number);
function applyDiscount(number1,number2);
return (number1*number2)=discountedNumber;

discountedNumber(43,.5);
