// Scrivi una funzione che accetti tre argomenti:
// un array e due numeri 
// (“a” più piccolo di “b” e “b” grande al massimo quanto il numero di elementi dell’array).
// La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra “a” e “b”

function filterArray(lista, a, b) {
    var newArray = [];

    for(var i = 0; i < lista.length; i++){
        if((a <= i) && (b >= i)){
            newArray.push(lista[i]);


        } 

    }
    console.log(lista, a, b);

    // mi deve restituire il nuovo array compreso tra a e b 
    return newArray;
}
var  nomi = ["ana", "giulia", "giacomo", "fede", "ciao", "lori"];
var min = 1;
var max = 3;

console.log(filterArray(nomi,min,max));