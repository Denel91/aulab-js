/*
    SECONDO ESERCIZIO
    Crea un array di prodotti. Ogni prodotto è un oggetto con i seguenti attributi:

    name
    brand
    price
    quantity

    Generare una funzione manipulate che accetta in input la lista dei prodotti e una callback che manipola i prodotti.

    Generare delle funzioni che manipolano i prodotti in maniera diversa e passare queste funzioni alla funzione manipulate.

    Le callback possono filtrare i prodotti in base a delle caratteristiche particolari,
    possono ottenere il prezzo totale dei prodotti, il prezzo totale dei prodotti di uno specifico brand,
    ritornare per ogni brand la quantità di prodotti presenti, ecc..
*/

const products = [
    {
        name: "Product 1",
        brand: "Brand A",
        price: 100,
        quantity: 10
    },
    {
        name: "Product 2",
        brand: "Brand B",
        price: 200,
        quantity: 20
    },
    {
        name: "Product 3",
        brand: "Brand C",
        price: 300,
        quantity: 30
    },
    {
        name: "Product 4",
        brand: "Brand D",
        price: 400,
        quantity: 40
    }
];

const sumAllPrice = (listProducts) => {
    return listProducts.reduce((accumulator, currentValue) => accumulator + currentValue.price, 0);
};

//console.log(sumAllPrice(products));

const manipulate = (list, func) => {
    return func(list);
}

console.log(manipulate(products, sumAllPrice));
