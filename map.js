/**
 * map gor om en Array till en annan Array.
 * 
 * map tar in en funktion som returnerar precis vad du vill.
 */

 const myArray = [
    "Sebastian",
    "John",
    "Anna",
    "Sarah"
];

const newArray = myArray.map(item => 5);

console.log(newArray);