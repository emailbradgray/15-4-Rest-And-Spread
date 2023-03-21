
//backdrop //test case in console test(81)

function test(nums) {
  console.log(nums)
}

//test case in console - displayArguments(1,2,3,4) //1
displayArguments(1,2,3);

function displayArguments(...restOfArgs){
    console.log("The first argument is ", restOfArgs[0])
    return `You pass in ${restOfArgs.length} arguments!`
}


//let hereIsTest = doubleValuesxyz(10,20,30)
//console.log(hereIsTest)

//console test case (doubleValuesxyz(27,30) //57
function doubleValuesxyz(num1, num2, num3) {
    let hereIsTestAlpha = num1 + num2
    console.log("this is test Alpa " + hereIsTestAlpha)
    return hereIsTestAlpha
}
//////


//ex1
//refactor function that takes a variable number of arguments
//test case in console - filterOutOdds(3,4,5,6) //4,6
/*function filterOutOdds() {
    var nums = Array.prototype.slice.call(arguments);
    return nums.filter(function(num) {
      return num % 2 === 0
    });
  }
*/
  //solution
//test case in console - filterOutOdds(3,4,5,6) //4,6
  const filterOutOdds = (...args) => args.filter(v => v % 2 === 0)

  
  //ex2 finMin
  //Write a function called findMin that accepts a variable number of arguments and returns the smallest argument.
// Make sure to do this using the rest and spread operator.

/*let findMin = function findMin() {
  return Math.min.apply(Math, arguments);
};

findMin(1,4,12,-3) // -3
findMin(1,-1) // -1
findMin(3,1) // 1
*/

//solution
const findMin = (...args) => Math.min(...args)

/*test cases
findMin(1,4,12,-3) // -3
findMin(1,-1) // -1
findMin(3,1) // 1
*/

//ex3
//Write a function called mergeObjects that accepts two objects and returns a new object
// which contains all the keys and values of the first object and second object.

let mergeObjects = function mergeObjects(obj1, obj2) {
  let finalMerge = Object.assign(obj1,obj2)
  console.log("this is a test of final merge")
  console.log(finalMerge)
  let finalMerge2 = {...obj1,...obj2}
  console.log("this is a test of final merge using spread")
  console.log(finalMerge2)
  
}
  // solution
 
const mergeObjects2 = (obj1, obj2) => ({...obj1, ...obj2})

//test cases
//mergeObjects({a:1, b:2}, {c:3, d:4}) // {a:1, b:2, c:3, d:4}



//ex4
//Write a function called doubleAndReturnArgs
//which accepts an array and a variable number of arguments. 
//The function should return a new array with the original array values and all of additional arguments doubled.

//test case in console - doubleAndReturnArgs([4,5,6],3,9)
//option 1
function doubleAndReturnArgs(arr,...args) {
let total =0
let newArray = []
let newArray2 = []


for (let num of arr) {
  total = num * 2;
  newArray.push(total)
}
console.log("this is the newArray")  
console.log(newArray)

for (let arg of args) {
  
  totalArgs = arg
  newArray2.push(arg)

  }
  console.log("this is newArray2 after values")  
  console.log(newArray2)

  console.log("Combine into one array")
  newArray3 = [...newArray,...newArray2]
  console.log(newArray3)
}


//solution 
//test case in console - doubleAndReturnArgs2([4,5,6], 3,9)
const doubleAndReturnArgs2 = (arr, ...args) => [...arr, ...args.map(v => v *2)]



//ex5

/** remove a random element in the items array
and return a new array without that item. */

const removeRandom = items => {
    let idx = Math.floor(Math.random() * items.length);
    return [...items.slice(0, idx), ...items.slice(idx + 1)];
  }
  
  /** Return a new array with every item in array1 and array2. */
  
  const extend = (array1, array2) => {
    return [...array1, ...array2];
  }
  
  /** Return a new object with all the keys and values
  from obj and a new key/value pair */
  
  const addKeyVal = (obj, key, val) => {
  
    // OPTION 1
    let newObj = { ...obj }
    newObj[key] = val;
    return newObj;
  
    // OPTION 2 (uses an object enhancement you'll see in the next unit)
    // return { ...obj, [key]: val };
  }
  
  /** Return a new object with a key removed. */
  
  const removeKey = (obj, key) => {
  
    // OPTION 1
    let newObj = { ...obj }
    delete newObj[key]
    return newObj;
  
    // OPTION 2 (uses an object enhancement you'll see in the next unit)
    // ({ [key]: undefined, ...obj } = obj);
    // return obj;
  }
  
  /** Combine two objects and return a new object. */
  
  const combine = (obj1, obj2) => {
    return { ...obj1, ...obj2 };
  }
  
  /** Return a new object with a modified key and value. */
  
  const update = (obj, key, val) => {
  
    // OPTION 1
  
    let newObj = { ...obj }
    newObj[key] = val;
    return newObj;
  
    // OPTION 2 this uses an object enhancement you'll see in the next unit)
    // return { ...obj, [key]: val };
  }
