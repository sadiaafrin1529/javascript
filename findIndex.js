// The findIndex() method executes a function for each array element.
// The findIndex() method returns the index (position) of the first element that passes a test.
// The findIndex() method returns -1 if no match is found.
// The findIndex() method does not execute the function for empty array elements.
// The findIndex() method does not change the original array.


const ages = [10,23, 40 , 20, 18];
const allAges=ages.findIndex(CheckAges);
console.log(allAges)
function CheckAges(ages){
return ages>18;
}
