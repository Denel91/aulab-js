/*
    You will be given an array of objects (associative arrays in PHP, tables in COBOL)
    representing data about developers who have signed up to attend the next coding meetup that you are organising.

    Your task is to return an array where each object will have a new property 'greeting' with the following string value:

    Hi < firstName here >, what do you like the most about < language here >?
*/


const list1 = [
    {firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java'},
    {firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python'},
    {firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby'}
];

/*
function greetDevelopers(list) {
    list.forEach((developer) => {
        developer.greeting = `Hi ${developer.firstName}, what do you like the most about ${developer.language}?`;
    })

    return list;

}
*/

function greetDevelopers(list) {
    return list.map((developer) => ({...developer, greeting: `Hi ${developer.firstName}, what do you like the most about ${developer.language}?`}));
}

console.log(greetDevelopers(list1));