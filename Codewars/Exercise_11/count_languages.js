/*
    You will be given an array of objects (associative arrays in PHP, table in COBOL) representing data
    about developers who have signed up to attend the next coding meetup that you are organising.

    Your task is to return an object (associative array in PHP, table in COBOL)
    which includes the count of each coding language represented at the meetup.
*/


const list1 = [
    {firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'C'},
    {firstName: 'Anna', lastName: 'R.', country: 'Liechtenstein', continent: 'Europe', age: 52, language: 'JavaScript'},
    {firstName: 'Ramon', lastName: 'R.', country: 'Paraguay', continent: 'Americas', age: 29, language: 'Ruby'},
    {firstName: 'George', lastName: 'B.', country: 'England', continent: 'Europe', age: 81, language: 'C'},
];

/*
function countLanguages(list) {
    return list.reduce((acc, cur) => {
        acc[cur.language] = (acc[cur.language] || 0) + 1;
        return acc;
    }, {});
}
*/

function countLanguages(list) {
    return list.reduce((acc, cur) => {
        acc[cur.language] ? acc[cur.language]++ : acc[cur.language] = 1;
        return acc;
    }, {});
}

console.log(countLanguages(list1));

