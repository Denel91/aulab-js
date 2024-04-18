/*
    PRIMO ESERCIZIO
    Partendo da una struttura dati che salva i modelli di auto presenti nel nostro store.

    const databaseCars = [ { brand: "BMW", model: "x-123" }, { brand: "Fiat", model: "500" } ]

    Creare 2 funzioni con tempi di esecuzione diversi ( strutta setTimeout )

    Una funzione cicla sui nostri prodotti e stampa un output in console con i prodotti presenti in cars

    Una funzione si occuperá di inserire un nuovo modello di auto nel nostro db.

    L'obiettivo é quello di regolarizzare la pila di funzioni in esecuzione riusciendo a trovare il risultato sperato.

    Note: Usa tutte le funzionalitá JavaScript che conosci per fare l'esercizio.
*/

const databaseCars = [
    {
        brand: "BMW",
        model: "x-123"
    },
    {
        brand: "Fiat",
        model: "500"
    }
];

const showCars = () => {
    setTimeout(() => {
        databaseCars.forEach((car) => {
            console.log(`Brand: ${car.brand}, Model: ${car.model}`);
        })
    }, 2000);
};

/*
const addNewCar = () => {
    setTimeout(() => {
        databaseCars.push({ brand: "Toyota", model: "Camry" });
    }, 4000);
};
*/

const insertCar = (brand, model) => {
    return databaseCars.push({brand, model});
};

const addNewCar = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(insertCar("Ford", "Fiesta"));
        reject(new Error(`Error: ${reject}`));
    }, 4000);
});

addNewCar
    .then(showCars)
    .finally(() => console.log("Done!"));

/*
const addNewCar = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(databaseCars.push({brand: "Toyota", model: "Camry"}));
        reject(new Error(`Error: ${reject}`));
    }, 4000);
});

addNewCar
    .then(showCars)
    .finally(() => console.log("Done!"));
*/


