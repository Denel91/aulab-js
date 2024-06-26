/*
    You will be given an array of objects (associative arrays in PHP) representing data about developers
    who have signed up to attend the next coding meetup that you are organising.

    Your task is to return:
    - true if at least one Ruby developer has signed up; or
    - false if there will be no Ruby developers.
*/

const list1 = [
    {firstName: 'Emma', lastName: 'Z.', country: 'Netherlands', continent: 'Europe', age: 29, language: 'Ruby'},
    {firstName: 'Piotr', lastName: 'B.', country: 'Poland', continent: 'Europe', age: 128, language: 'Javascript'},
    {firstName: 'Jayden', lastName: 'P.', country: 'Jamaica', continent: 'Americas', age: 42, language: 'JavaScript'}
];

const list2 = [
    {firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java'},
    {firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python'}
];


function isRubyComing(list) {
    return list.some(dev => dev.language === 'Ruby');
}

console.log(isRubyComing(list1), true);
console.log(isRubyComing(list2), false);