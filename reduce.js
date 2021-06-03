/**
 * Reduce reducerar en Array, till nagot annat.
 * Reduce gor om en Array till vad du vill.
 * 
 * Reduce tar in en funktion, som returnar precis vad du vill.
 */


 const myArray = [
    "Sebastian",
    "John",
    "Anna",
    "Sarah"
];

/**
 * 1 loopen:
 *  latestReturn = "Sebastian"
 *  currentItem = "John"
 * 
 * 2 loopen:
 *  latestReturn = "SebastianJohn"
 *  currentItem = "Anna"
 * 
 * 3 loopen:
 *  latestReturn = "SebastianJohnAnna"
 *  currentItme = "Sarah"
 * 
 * "SebastianJohnAnnaSarah"
 */
const result = myArray.reduce(function(latestReturn, currentItem){
    return latestReturn + currentItem;
});

console.log(result);