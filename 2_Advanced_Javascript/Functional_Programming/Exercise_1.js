/*
    PRIMO ESERCIZIO
    Definisci una serie di funzioni: add che prende due numeri e restituisce la loro somma,
    multiply che prende due numeri e restituisce il loro prodotto,
    subtract che prende due numeri e restituisce la loro differenza,
    divide che prende due numeri e restituisce il risultato della divisione.
    Poi, crea una funzione calculate che prenda tre argomenti: due numeri e una stringa
    che rappresenta l'operazione da eseguire ("add", "multiply", "subtract" o "divide"). ' +
    'La funzione deve eseguire l'operazione corrispondente sui numeri.
*/

const add = (a, b) => a + b;

const multiply = (a, b) => a * b;

const subtract = (a, b) => {
    return a < b ? new Error("Error") : a - b;
}

const divide = (a, b) => {
    return b !== 0 ? a / b : new Error("Error");
}

/*
const calculate = (a, b, operation) => {
    switch (operation) {
        case "add":
            return add(a, b);
        case "multiply":
            return multiply(a, b);
        case "subtract":
            return subtract(a, b);
        case "divide":
            return divide(a, b);
        default:
            return "Error: Invalid operation";
    }
};
*/

const calculate = (a, b, operation) => {
    return operation(a,b);
}

console.log(calculate(3,4, add));
console.log(calculate(3,4, multiply));
console.log(calculate(12,4, subtract));
console.log(calculate(12,2, divide));
