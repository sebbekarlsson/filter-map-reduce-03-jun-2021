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

const result = myArray.reduce(function(latestReturn, currentItem){
   let obj = latestReturn;

   if (typeof obj !== "object") {
       obj = { names: [] };
   }

   obj.names.push(currentItem);

   return obj;
});

console.log(result);