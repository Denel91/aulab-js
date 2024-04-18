const books = [
    {
        id: 1,
        title: 'first book',
        author: 'Jonh Mayer',
        price: 15
    },
    {
        id: 2,
        title: 'first book',
        author: 'Jonh Mayer',
        price: 30
    },
    {
        id: 3,
        title: 'first book',
        author: 'Jonh Mayer',
        price: 20
    },
    {
        id: 4,
        title: 'first book',
        author: 'Jonh Mayer',
        price: 20
    },
    {
        id: 5,
        title: 'first book',
        author: 'Jonh Mayer',
        price: 32
    }, {
        id: 6,
        title: 'first book',
        author: 'Jonh Mayer',
        price: 12
    }];

function callback(price) {
    const discount = 0.15;
    return price - (price * discount);
}

function map(array, callback) {
    const finalPrices = [];
    for (let i = 0; i < array.length; i++) {
        const book = array[i];
        const price = book.price;
        finalPrices.push(callback(price))
    }

    return finalPrices;

}

console.log(map(books, callback));
