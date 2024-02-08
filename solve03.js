function deleteInvalids(inputArray) {
    if (!Array.isArray(inputArray)) {
      return "Error: Input must be an array.";
    }


    const filterNumbers = (value) => {
        return typeof value === 'number' && isFinite(value);
    };

    return inputArray.filter(filterNumbers);
}


console.log(deleteInvalids([1, null, undefined, 18, -19, NaN, "12", [1, 2], { ob: "lala" }])); 
console.log(deleteInvalids(["1", {num: 2}, NaN])); 
console.log(deleteInvalids({num: [1, 2, 3]}));



