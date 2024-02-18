// The copyWithin() method copies array elements to another position in an array.

// The copyWithin() method overwrites the existing values.

// The copyWithin() method does not add items to the array.

// array.copyWithin(target, start, end)


const numbers = [1,2,3,4,5,6];
const value = numbers.copyWithin(2,1);
console.log(value);


const flowers=["rose","lily","Tulip","Orchid","Sunflower"]
const copyFlowers=flowers.copyWithin(4,2);
console.log(copyFlowers);