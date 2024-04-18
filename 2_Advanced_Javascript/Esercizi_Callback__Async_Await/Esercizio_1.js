// Esercizio 1
// Creare una funzione che accetti un input e che restituisce una funzione che stampi in console l'input

const createPrinter = (input) => {
    return () => {
        console.log(input);
    };
};

const printHello = createPrinter("Hello World");
printHello();


// Esercizio 2
// Creare una funzione che restituisce una nuova funzione che incrementa una variabile ogni volta che questa nuova funzione viene richiamata

const createCounter = () => {
    let counter = 0;
    return () => {
        return ++counter;
    };
};

const counter = createCounter();
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());

console.log("\n--------------------------------")

// Esercizio 3
// Creare una funzione createAdder
// Questa funzione deve accettare un numero (x) e restituire un'altra funzione
// La funzione restituita accetta un numero (y) e restituisce la somma di x e y
// Creare 2 funzioni da createAdder e testare le funzioni restituite

const createAdder = (x) => {
    return (y) => {
        return x + y;
    }
};

const addByTwo = createAdder(2);
const  addByThree = createAdder(3);
const addByFour = createAdder(4);

console.log(addByTwo(3));
console.log(addByThree(4));
console.log(addByFour(5));



