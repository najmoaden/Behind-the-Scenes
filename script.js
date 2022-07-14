'use strict';

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
