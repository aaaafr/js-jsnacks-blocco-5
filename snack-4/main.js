// Snack 4:
// Scrivi una funzione che fonda due array 
// (aventi lo stesso numero di elementi) 
// prendendo alternativamente gli elementi da uno e dall’altro
// es. [a,b,c], [1,2,3] → [a,1,b,2,c,3].

var arrayOne = ["a", "b", "c", "d", "e"];
var arrayTwo = [1,2,3];

// var newArray = [console.log(arrayOne.concat(arrayTwo))];
var maggiore;

if(arrayOne.length >= arrayTwo.length){
    maggiore = arrayOne.length;
} else {
    maggiore = arrayTwo.length;
} 

var newArray = [];

for(var i = 0; i < maggiore ; i++){    
    if(arrayOne[i]){
        newArray.push(arrayOne[i]);
    }

    if(arrayTwo[i]){
        newArray.push(arrayTwo[i]);
    }
    
}

console.log(newArray);


