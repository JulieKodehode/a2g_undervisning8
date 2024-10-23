console.log("Hello World!")

// Variable

// Let variable named age saving a number 28 as data
let age = 28;
console.log(age);
console.log(typeof age);

// Const variable named name saving a string Julie Hauge as data
const name = "Julie Hauge";
console.log(name);
console.log(typeof name);

// Const variable named isPresent saving a boolean false as data
const isPresent = false;
console.log(isPresent);
console.log(typeof isPresent);

// Const variable named firstName saving a string Julie as data
const firstName = "Julie";

// Const variable name lastName saving a string Hauge as data
const lastName = "Hauge";

/*
Let variable named fullName saving a series of strings and variable names
*/
let fullName = "My name is" + " " + firstName + " " + lastName + "!";
// Reusing the variable name fullName to view the template string method
fullName = `My name is ${firstName} ${lastName}!`;
console.log(fullName);
console.log(typeof fullName);

// A variable using DOM Manipulation to display text to a HTML element
const htmlElement = document.querySelector("#javaScriptData");
htmlElement.textContent = fullName;