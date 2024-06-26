// Higher-Order Functions Series - Order the food

/*
    You will be given an array of objects representing data about developers
    who have signed up to attend the next coding meetup that you are organising.

    Your task is to return an object which includes the count of food options
    selected by the developers on the meetup sign-up form.
*/


const list1 = [
    {firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'C', meal: 'vegetarian'},
    {firstName: 'Anna', lastName: 'R.', country: 'Liechtenstein', continent: 'Europe', age: 52, language: 'JavaScript', meal: 'standard'},
    {firstName: 'Ramona', lastName: 'R.', country: 'Paraguay', continent: 'Americas', age: 29, language: 'Ruby', meal: 'vegan'},
    {firstName: 'George', lastName: 'B.', country: 'England', continent: 'Europe', age: 81, language: 'C', meal: 'vegetarian'},
];

function orderFood(list) {
    return list.reduce((counts, developer) => {
        counts[developer.meal] = (counts[developer.meal] || 0) + 1;
        return counts;
    }, {});
}

let foodCount = orderFood(list1);
console.log(foodCount); // { vegetarian: 2, standard: 1, vegan: 1 }
