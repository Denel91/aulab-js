// Creare una funzione che chiama ogni secondo un'altra funzione, solo per 5 secondi

function limitedRepeat() {
   let timer = setInterval(() => {
        sayHi();
    }, 1000);

   setTimeout(() => {
       clearInterval(timer);
   }, 5000);
}

function sayHi() {
    console.log("Hi");
}

limitedRepeat();
