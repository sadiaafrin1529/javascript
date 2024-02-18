// The filter() method creates a new array filled with elements that pass a test provided by a function.

// The filter() method does not execute the function for empty elements.

// The filter() method does not change the original array.

const ages = [23,43,56,75];
const result = ages.filter(checkAdult);
console.log(result)
function checkAdult(ages){
return ages >= 30;
}


const char = ['a','b','c','z'];
const Allchar = char.filter(Checkchar);
console.log(Allchar)
function Checkchar(char){
if(char !== 'z'){
return char;
}
}

const words = ['spray','exuberant', 'elite',  'destruction', 'present'];

const results = words.filter((word) => word.length > 6);

console.log(results);
