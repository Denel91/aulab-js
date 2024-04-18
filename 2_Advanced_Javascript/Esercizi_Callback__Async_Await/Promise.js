// Creare una promise che si risolve dopo 2 secondi

let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("https://api.thecatapi.com/v1/images/search");
        reject(new Error(`Error: ${reject}`));
    }, 2000);
});


promise.then((data) => {
    console.log(data);
}).catch((error) => {
    console.log(error);
}).finally(() => {
    console.log("Promise has been resolved!");
})
