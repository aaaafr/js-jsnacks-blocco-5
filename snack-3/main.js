// Snack 3:
// Scrivi una funzione che accetti una stringa come argomento 
// e la ritorni girata (es. Ciao -> oaiC)
var stringa = "ciao";
function invertiStringa(stringa){
    for (var l=stringa.length-1; l>=0; l--){
        document.write(stringa.charAt(l));
    }

    document.write("");
}
 