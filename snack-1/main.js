// Crea un array di 10 oggetti che 
// rappresentano una zucchina,
//  indicando per ognuna varietà, 
// peso e lunghezza.
// Calcola quanto pesano tutte le zucchine.

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

var pesoTotale = 0; 
for(var i = 0; i < zucchine.length; i++){
        var pesi = zucchine[i].peso;
        pesoTotale += pesi;
    }
    
    console.log(pesoTotale);







