// The fill() method fills specified elements in an array with a value.

// The fill() method overwrites the original array.

// Start and end position can be specified. If not, all elements will be filled.

const Name = ["samtus","Meemtus","mumu"];
const names = Name.fill("Sadia");
console.log(names);

const numbers = [2,4,7,8,9,11,23,45];
const Numbers = numbers.fill(10,2,5);
console.log(Numbers);