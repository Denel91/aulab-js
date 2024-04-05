// Equal Sides Of An Array

/*
    You are going to be given an array of integers.
    Your job is to take that array and find an index N where the sum of the integers to the left
    of N is equal to the sum of the integers to the right of N.
    If there is no index that would make this happen, return -1.
 */

const array = [1, 2, 3, 4, 3, 2, 1];
const array_2 = [1, 100, 50, -51, 1, 1];

const findEvenIndex = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        const leftSide = arr.slice(0, i).reduce((acc, cur) => (acc + cur), 0);
        const rightSide = arr.slice(i + 1, arr.length).reduce((acc, cur) => (acc + cur), 0);
        if (leftSide === rightSide) {
            return i;
        }
    }

    return -1;
};

console.log(findEvenIndex(array)); // 3
console.log(findEvenIndex(array_2)); // 1



