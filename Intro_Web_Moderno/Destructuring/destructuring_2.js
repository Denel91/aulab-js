const studente = {
    name: 'Mario Rossi',
    eta: 30,
    Materie: ['Matematica', 'Scienze', 'Filosofia'],
    Indirizzo: {
        strada: 'Via Padella',
        citta: 'Roma',
        Stato: 'IT',
        cap: '33333'
    }
};

// Crea le variabili
// nomeStudente , etaStudente ed estrai il suo valore dal nome e dall eta
// scienze ed estrai il suo valore da Materie in seconda posizione
// strada, citta, stato ed estrai il loro valore dall'oggetto Indirizzo

const {name: nomeStudente, eta: etaStudente} = studente;
console.log("Nome e Cognome:",nomeStudente,"Età: ",etaStudente);

const [,subject_2,] = studente.Materie;
console.log(subject_2);

const {strada, citta, Stato} = studente.Indirizzo;
console.log(strada);
console.log(citta);
console.log(Stato);

