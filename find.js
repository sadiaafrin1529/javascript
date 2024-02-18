// The find() method returns the value of the first element that passes a test.
// The find() method executes a function for each array element.
// The find() method returns undefined if no elements are found.
// The find() method does not execute the function for empty elements.
// The find() method does not change the original array.

const array = [3,4,6];
const AllArray = array.find(CheckArray);
console.log(AllArray)
function CheckArray(array){
return array > 3 
}

const array1 = [45,50,63,70];
const allArray1 =  array1.find((element)=>element >60);
console.log(allArray1)