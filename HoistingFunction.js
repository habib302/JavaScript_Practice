//Note:
//function expression & function declarations aren't hoisted

//scenario 1: function declaration

// function myFunc(){
//   console.log(`I Love JavaScript 1.`);
// }

// myFunc();

//output: I Love JavaScript.


//scenario 2 : function declaration
// myFunc();

// function myFunc(){
//   console.log(`I Love JavaScript 2.`);
// }

//output: I Love JavaScript.


//scenario 3 : function expression general case
// const myFunc=function(){
//   console.log(`I Love JavaScript 3.`);
// }

// myFunc();
//output: I Love JavaScript.


//scenario 4 : function expression

// myFunc();

// const myFunc=function(){
//   console.log(`I Love JavaScript 4.`);
// }

//output: ReferenceError


//scenario 5 : Arrow function

myFunc();
const myFunc=()=>{
  console.log(`I Love JavaScript 5.`);
}

//output: ReferenceError