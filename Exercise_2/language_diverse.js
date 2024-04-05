// Higher-Order Functions Series - Is the meetup language-diverse?

/*
    You will be given an array of objects representing data about developers
    who have signed up to attend the next web development meetup that you are organising.
    Three programming languages will be represented: Python, Ruby and JavaScript.

    Your task is to return either:

    - true if the number of meetup participants representing any of the three programming languages is **
    at most 2 times higher than the number of developers representing any of the remaining programming
    languages**; or

    - false otherwise.
 */

const list1 = [
    {firstName: 'Daniel', lastName: 'J.', country: 'Aruba', continent: 'Americas', age: 42, language: 'Python'},
    {firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 22, language: 'Ruby'},
    {firstName: 'Sou', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 43, language: 'Ruby'},
    {firstName: 'Hanna', lastName: 'L.', country: 'Hungary', continent: 'Europe', age: 95, language: 'JavaScript'},
    {firstName: 'Jayden', lastName: 'P.', country: 'Jamaica', continent: 'Americas', age: 18, language: 'JavaScript'},
    {firstName: 'Joao', lastName: 'D.', country: 'Portugal', continent: 'Europe', age: 25, language: 'JavaScript'}
];

const list2 = [
    {firstName: 'Daniel', lastName: 'J.', country: 'Aruba', continent: 'Americas', age: 42, language: 'Python'},
    {firstName: 'Alice', lastName: 'U.', country: 'Italy', continent: 'Europe', age: 35, language: 'Python'},
    {firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 22, language: 'Ruby'},
    {firstName: 'Sou', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 43, language: 'Ruby'},
    {firstName: 'Hanna', lastName: 'L.', country: 'Hungary', continent: 'Europe', age: 95, language: 'JavaScript'},
    {firstName: 'Jayden', lastName: 'P.', country: 'Jamaica', continent: 'Americas', age: 18, language: 'JavaScript'},
    {firstName: 'Mery', lastName: 'K.', country: 'Kansas', continent: 'Americas', age: 25, language: 'JavaScript'},
    {firstName: 'Larson', lastName: 'Y.', country: 'Virginia', continent: 'Americas', age: 30, language: 'JavaScript'},
];

/*
function isLanguageDiverse(list) {
    const languageCounts = list.reduce((accumulator, developer) => {
        accumulator[developer.language] = (accumulator[developer.language] || 0) + 1;
        return accumulator;
    }, {});

    const languageValues = Object.values(languageCounts);
    const minCount = Math.min(...languageValues);
    const maxCount = Math.max(...languageValues);
    return maxCount <= 2 * minCount;
}
*/

function isLanguageDiverse(list) {
    let languageCount = {};
    for (const developer of list) {
        if (developer.hasOwnProperty('language')) {
            languageCount[developer.language] ? languageCount[developer.language]++ : languageCount[developer.language] = 1;
        }
    }

    const valori = Object.values(languageCount);
    const minCount = Math.min(...valori);
    const maxCount = Math.max(...valori);

    return maxCount <= 2 * minCount;
}


console.log(isLanguageDiverse(list1))









