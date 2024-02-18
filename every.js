// The every() method executes a function for each array element.

// The every() method returns true if the function returns true for all elements.

// The every() method returns false if the function returns false for one element.

// The every() method does not execute the function for empty elements.

// The every() method does not change the original array.

const age = [12,23,45,32,28];
const allAge = age.every(checkAge)
console.log(allAge)
function checkAge(age){
return age > 11 ;
}

const people = [34]
const peoples = people.every(checkPeople);
console.log(peoples);
function checkPeople(people){
return people > 80 ;

}