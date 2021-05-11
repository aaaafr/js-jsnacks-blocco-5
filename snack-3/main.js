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


// secondo metodo



// function reverseString (stringa){
//var parola="";
//     for(var i = (stringa.length - 1); i >= 0; i--){
//         parola += text[i]);
//     }
// return parola;
// }

// console.log(reverseString("ciao"));
 