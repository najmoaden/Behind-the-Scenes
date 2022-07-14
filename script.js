'use strict';
/* 
//Scoping
function calcAge(birthYear) {
  const age = 2037 - birthYear;
  // console.log(firstName);
  function printAge() {
    let output = `${firstName}, you are ${age}, born in ${birthYear}`;
    console.log(output);
    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true; //Accessible out block scope i.e function scope

      //Creating NEW variable with same as outer scope's variable
      const firstName = 'Steven'; //JS looks for the variables first in the current scope thus no variable lookup is performed.

      //Reassigning outer scopes variable
      output = 'NEW OUTPUT!';

      const str = `Oh you are a millenial, ${firstName}`; //Inaccessible out block scope
      console.log(str);
      function add(a, b) {
        return a + b;
      }
      console.log(add(2, 3));
    }
    console.log(millenial);
    //add(2, 3); //Function also block scope ONLY in 'strict' mode.
    console.log(output); //Manipulated the existing variable inside a child/inner scope
  }
  printAge();
  return age;
}
const firstName = 'Jonas';
calcAge(1991);
 */
/* 
//Hoisting and TDZ

//Hoisting with variables
console.log(me);
//console.log(job);
//console.log(year);
var me = 'Jonas';
let job = 'teacher';
const year = 1991;

//Functions
console.log(addDecl(2, 3));
// console.log(addExpr(2, 3));
//console.log(addArrow(2, 3));

function addDecl(a, b) {
  return a + b;
}
const addExpr = function (a, b) {
  return a + b;
}; //Cannot be accessed before initialization
var addArrow = (a, b) => a + b; // Is not a function because var is undefined

//Example
console.log(numProducts);
if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
  console.log('All products deleted!');
}

var x = 1;
let y = 2;
const z = 3;
 */

//this Keyword
console.log(this); //displays the window object

const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this); ///displays undefined
};
calcAge(1991);

const calcAgeArrow = birthYear => {
  console.log(2037 - birthYear);
  console.log(this); //display the window object
};
calcAgeArrow(1991);

const jonas = {
  year: 1991,
  calcAge: function () {
    console.log(this); //display the object that is calling the method i.e jonas
    console.log(2037 - this.year);
  },
};
jonas.calcAge();

const matilda = {
  year: 2017,
};
matilda.calcAge = jonas.calcAge; //borrowing the function to the matilda object
matilda.calcAge();

const f = jonas.calcAge; //undefined
f();
