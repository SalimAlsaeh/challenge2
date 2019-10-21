// Use the following helper functions in your solution
function each(coll, f) {
  if (Array.isArray(coll)) {
    for (var i = 0; i < coll.length; i++) {
      f(coll[i], i);
    }
  } else {
    for (var key in coll) {
      f(coll[key], key);
    }
  }
}

function filter(array, predicate) {
  var acc = [];
  each(array, function(element, i) {
    if (predicate(element, i)) {
      acc.push(element);
    }
  });
  return acc;
}

function map(array, func) {
  var acc = [];
  each(array, function(element, i) {
    acc.push(func(element, i));
  });
  return acc;
}

// Remember to relax :)

//=======================================================================
/*                                  Q1                                 */
//=======================================================================

/*
Depending on data modeling concept that you have learned:

Create a factory function called makeComputer that represents computers, 
What different attributes computers may have? 
Create two computers object from your factory function and save them in one array called computers!

Note: please write one or two lines here describing your solution.
*/

// a factory function will return an object based on the function's parameters.
// Its purpose is to create objects, hence the name factory.

function makeComputer(type, color, weight, OS) {
  return {
    type: type,
    color: color,
    weight: weight,
    OS: OS
  }
}

var computer1 = makeComputer('Desktop', 'red', '5KG', 'Windows');
var computer2 = makeComputer('Laptop', 'black', '2KG', 'Linux');

// Write a function displayComputer that can be used to display one computer.

function displayComputer(computer) {
  return computer.type + ' ' + computer.color + ' ' + computer.weight + ' ' + computer.OS + ' '
}

//=============================================================================
/*                                  Q2                                       */
//=============================================================================

/*
Write a function that takes an array of strings as a input
and returns an array of all of those strings, but transformed to upper case.

You can use toUpperCase method to convert a string to upper case. 
Solve it using the most appropriate helper functions(each,map,filter).

Note: please write one or two lines here describing your solution.

var strArr = ['hello', 'world', 'whirled', 'peas'];
uppercaseAll(strArr); ==> [ 'HELLO', 'WORLD', 'WHIRLED', 'PEAS' ]
*/

//This function takes an arrayOfStrings as a parameter, and pass this function to an invocation of map along with a function that
// ONLY converts string values to UPPERCASE. And return an array of all those strings returned to UPPERCASE and all other types of values are
// remain the same.

function uppercaseAll(arrayOfStrings) {
  return map(arrayOfStrings, function (element, i) {
    if (typeof element === "string"){ // checks if the the value of the element is string or not before converting to UpperCase
      return element.toUpperCase(); // return the element UPPERCASED
    }else {
      return element; //If not String, return it as it is.
    }
  });
}

//=============================================================================
/*                                  Q3                                       */
//=============================================================================

/*
Write a function that takes array of objects as an input and returns an array
with only the countries that have a population higher than 500 million.

Solve it using one of the most appropriate helperthe helpers functions(each,map,filter).

highestPopulation(data); ==> [{country: "China", population: 1409517397},{country: "India", population: 1339180127}]
Note: please write one or two lines here describing your solution.

Here’s the data you’ll work with:
*/

var data = [
  {
    country: 'China',
    population: 1409517397
  },
  {
    country: 'India',
    population: 1339180127
  },
  {
    country: 'USA',
    population: 324459463
  },
  {
    country: 'Indonesia',
    population: 263991379
  }
];

// This function uses filter which filters every single element with a condition (predicate).
// this function loops through the array of objects while only checking the value of the key: "population" of each object that is bigger than
// 500 million, If so; it will push that element(object) to an array and the result will be an array of all the objects that meets that condition.

function highestPopulation(arrayOfObjects) {
  return filter(arrayOfObjects, function (element, i) {
    return element.population > 500000000; // Only return element that meets that condition.
  });
}

//=============================================================================
/*                              Q4                                           */
//=============================================================================

/*
Write a function halveAll that takes an array of numbers as a input 
and returns an array of all of those numbers halved (divided by two).

Note: solve it using the most appropriate helper functions(each,map,filter)

var numsArray = [2, 6, 20, 8, 14];
halveAll(numsArray); ==> [ 1, 3, 10, 4, 7 ]

Note: please write one or two lines here describing your solution.
*/

// This function loops through the array using the map function, and only Halves the "number" valued elements.
// the result will be an array of all the number elements halved.

function halveAll(numbers) {
  return map(numbers, function (number) {
    if (typeof number === 'number'){
      return number/2;
    }
  })
}

//=============================================================================
/*                                  Q5                                       */
//=============================================================================

/*
Write a function called values that accepts an object as a parameter, and outputs an array of the object's values. 
Solve it using one of the most appropriate helpers functions(each,map,filter).

values({first : 5, second: 'something' , third : 129}) ==> [5, 'something', 129];

Note: please write one or two lines here describing your solution.
*/
function values(obj) {
  // TODO: your code here
}

//Good Luck :))
