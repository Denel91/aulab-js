/*
    PRIMO ESERCIZIO
    your team is writing a fancy new text editor, and you've been tasked with implementing the
    line numbering.
    Write a function which takes a list of strings and returns each line prepended by the correct number.
    The numbering starts at 1. the format is: n: string. notice the colon and space in between.

    ex. number([]) => []
    number(["a", "b", "c"]) => ["1: a", "2: b", "3: c"]
*/

const number = (list) => {
    return list.map((string, index) => `${index + 1}: ${string}`);
}

console.log(number(["a", "b", "c"]));
