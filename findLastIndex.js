// The findLastIndex() method executes a function for each array element.
// The findLastIndex() method returns the index (position) of the last element that passes a test.
// The findLastIndex() method returns -1 if no match is found.
// The findLastIndex() method does not execute the function for empty array elements.
// The findLastIndex() method does not change the original array.


const numbers = [20,32,45,65,76,21,34];
const num = numbers.findLastIndex(CheckfindlastIndex);
console.log(num);
function CheckfindlastIndex(numbers){
return numbers > 40;
}

const array = [20,40,89,76,509,8];
const arr = array.findLastIndex((element)=>element > 90)
console.log(arr);