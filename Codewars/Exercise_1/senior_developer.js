// Higher-Order Functions Series - Find the most senior

/*
    You will be given a sequence of objects representing data about developers
    who have signed up to attend the next coding meetup that you are organising.
    Your task is to return a sequence which includes the developer who is the oldest.
    In case of a tie, include all same-age senior developers listed in the same order
    as they appeared in the original input array.
*/

const list1 = [
    {firstName: 'Gabriel', lastName: 'X.', country: 'Monaco', continent: 'Europe', age: 49, language: 'PHP'},
    {firstName: 'Odval', lastName: 'F.', country: 'Mongolia', continent: 'Asia', age: 38, language: 'Python'},
    {firstName: 'Emilija', lastName: 'S.', country: 'Lithuania', continent: 'Europe', age: 19, language: 'Python'},
    {firstName: 'Sou', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 49, language: 'PHP'},
];

/*
function findSenior(list) {
    const maxAge = list.reduce((max, dev) => Math.max(max, dev.age), 0);
    return list.filter(developers => developers.age === maxAge);
}
*/

function findSenior(list) {
    const maxAge = Math.max(...list.map((dev) => dev.age));
    return list.filter(developers => developers.age === maxAge);
}

const results = findSenior(list1);
console.log(results);

/*
[
 {firstName: 'Gabriel', lastName: 'X.', country: 'Monaco', continent: 'Europe', age: 49, language: 'PHP'},
 {firstName: 'Sou', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 49, language: 'PHP'}
]
*/
