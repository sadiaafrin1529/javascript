// The findLast() method returns the value of the last element that passes a test.
// The findLast() method executes a function for each array element.
// The findLast() method returns undefined if no elements are found.
// The findLast() method does not execute the function for empty elements.
// The findLast() method does not change the original array.



const array = [20,30,80,79,23,12];
const allarray = array.findLast(CheckArrayFindlast);
console.log(allarray);
function CheckArrayFindlast(array){
return array >18;
}