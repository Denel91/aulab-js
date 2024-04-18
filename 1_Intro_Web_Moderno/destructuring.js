const persona = {
    nome: 'Filippo',
    status: 'studente',
    cane: {
        nameCane: 'Camillo',
        razza: 'Pastore tedesco'
    }
};

const nomePersona = persona.nome;
console.log(nomePersona);

const {nome: nomePers} = persona;
console.log(nomePers);

const razza = persona.cane.razza;
console.log(razza)