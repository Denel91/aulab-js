/*
    SECONDO ESERCIZIO
    We are going to write a function called arrayDiff that will accept two arrays, a and b, as arguments.
    You are given two arrays.
    The goal of the function is to remove all values in array a that is present in array b.
    The function should return the array after all the common values have been removed.

    ex. arrayDiff([], [4,5]) => []
    arrayDiff([3,4], [3]) => [4]
    arrayDiff([1,8,2], []) => [1, 8, 2]
*/

// The arrayDiff function will return all the items in array a
// that are not included in array b.
const arrayDiff = (a, b) => {
    return a.filter((item) => {
        return !b.includes(item);
    });
};

console.log(arrayDiff([], [4,5]));
console.log(arrayDiff([3,4], [3]));
console.log(arrayDiff([1,8,2], []));
