// The flatMap() method maps all array elements and creates a new flat array.
// flatMap() creates a new array from calling a function for every array element.
// flatMap() does not execute the function for empty elements.
// flatMap() does not change the original array.

const flatMapArray = [2,3,1]
const checkflatmap = flatMapArray.flatMap((number)=> (number === 1 ? [10,10] :2))
console.log(checkflatmap);





const arr1 = [1, 2, 1];

const result = arr1.flatMap((num) => (num === 2 ? [2, 2] : 3));

console.log(result);
// Expected output: Array [1, 2, 2, 1]



const numbers = [2,3,4,5,6]
const results = numbers.flatMap((x)=> (x*3));
console.log(results)