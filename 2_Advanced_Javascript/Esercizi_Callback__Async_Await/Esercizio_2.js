// Quale delle due funzioni viene eseguito per primo

function sayHi() {
    console.log("Hi"); // Seconda
}

function whichOneShouldBeFirst() {
    setTimeout(sayHi, 0);
    console.log("Ciao"); // Prima
}

whichOneShouldBeFirst();

