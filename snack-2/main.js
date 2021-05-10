// Crea 10 oggetti che rappresentano una zucchina.
// Dividi in due array separati le zucchine
//  che misurano meno o più di 15cm.
// Infine stampa separatamente
//  quanto pesano i due gruppi di zucchine.

var zucchine = [
    
    {
        nome : "A",
        peso : 2,
        lunghezza : 20,
    },

    {
        nome : "B",
        peso : 3,
        lunghezza : 10,
    },

    {
        nome : "C",
        peso : 4,
        lunghezza : 30,
    },

    {
        nome : "D",
        peso : 3,
        lunghezza : 15,
    },

    {
        nome : "E",
        peso : 8,
        lunghezza : 4,
    },

    {
        nome : "F",
        peso : 5,
        lunghezza : 10,
    },

    {
        nome : "G",
        peso : 7,
        lunghezza : 9,
    },

    {
        nome : "H",
        peso : 8,
        lunghezza : 12,
    },

    {
        nome : "I",
        peso : 1,
        lunghezza : 15,
    },

    {
        nome : "L",
        peso : 3,
        lunghezza : 3,
    }
]

console.log(zucchine);

var maggiore = [];
var minore = [];

for(var i = 0; i < zucchine.length; i++){
    var lunghezze = zucchine[i].lunghezza;
    console.log(lunghezze);

    if(lunghezze < 15){
        minore.push(zucchine[i]);
    } else {
        maggiore.push(zucchine[i]);
    }
}

console.log(maggiore);
console.log(minore);








