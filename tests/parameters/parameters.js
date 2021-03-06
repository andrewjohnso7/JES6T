/*
READ DA DOCS:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters


Rest parameter syntax allows us to represent an indefinite amount of arguments as an array.

What that means is that now we can make an array from the arguments given in a function without having to fool around with the 'arguments' array-like object.

What we used to do:
*/
// var addUpSalaries = function(salaries) {
//   var total = 0;
//   var salaries = Array.prototype.slice.call(arguments, 0);
//   salaries.forEach(function(item) {
//     total += item;
//   });
//   return total;
// };

// console.log(addUpSalaries(20000, 40000, 66000, 200000));

// Now we can just add in the ellipses to the arguments, like so:

const addUpSalaries = (...someNumbers) => {
  let total = 0;
  someNumbers.forEach((item) => {
    total += item;
  });
  return total;
};

/* There's also default parameters. 
These parameters, like their namesake, allow you to place default values inside of your functions, so that the functions will default to using those values.
*/

const nameTMNTurtles = (blue = 'Leonardo', red = 'Raphael', purple = 'Donatello', orange = 'Michaelangelo') =>{
  return 'Master Splinter trained: ' + blue + ', ' + red + ', ' + purple + ', and ' + orange;
};

// console.log(nameTMNTurtles());

/* 
enter four of your names of your own choosing to see this in action.
*/
// console.log(nameTMNTurtles('what', 'in', 'the', 'world'));

module.exports = {
  addUpSalaries,
  nameTMNTurtles,
};