let str = 'abcdef';
let str2 = 'abc';
let str3 = '';

function solution(str) {
    if (str === "") {
        return [];
    }

    if (str.length % 2 !== 0) {
        str = str + '_';
    }

    return str.match(/.{2}/g);
}

console.log(solution(str));
console.log(solution(str2));
console.log(solution(str3));

function solution_2(str) {
    let i = 0;
    let result = [];
    if (str === "") {
        return [];
    }

    if (str.length % 2 !== 0) {
        str += '_';
    }

    while (i < str.length) {
        result.push(str[i] + str[i + 1]);
        i += 2;
    }
    return result;
}

console.log(solution_2(str));

