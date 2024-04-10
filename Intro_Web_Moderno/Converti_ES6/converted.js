import {people} from './data.js';

const isActive = ({isActive}) => isActive;

const getEmails = (people, options = {}) => {
    const {withNames = false, onlyActive = false} = options;

    if (onlyActive) {
        people = people.filter(isActive);
    }

    return people.map(person => {
        return withNames
            ? `${person.name} <${person.email}>` : person.email;
    }).join(', ');
};

const getYoungest = (people) => {
    const sortedPeople = [...people].sort((personA, personB) => personA.age - personB.age);

    return {
        youngest: sortedPeople[0],
        others: sortedPeople.slice(1)
    }
};

const getOldest = (people) => {
    const sortedPeople = [...people].sort((personA, personB) => personB.age - personA.age);

    return {
        oldest: sortedPeople[0],
        others: sortedPeople.slice(1)
    }
};

const emails = getEmails(people, {
    withNames: true,
    onlyActive: true
});
console.log(emails);

const emails_2 = getEmails(people, {
    withNames: false,
});
console.log(emails_2);

const youngest = getYoungest(people);
console.log(youngest);

const oldest = getOldest(people);
console.log(oldest);

