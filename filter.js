/*
* Filter filtrerar ut element fran en Array,
* Och ger tillbaka en ny Array med de filtrerade elementen.
*
* Filter tar in en funktion, som antingen returnerar true eller false.
*/

const myArray = [
    "Sebastian",
    "John",
    "Anna",
    "Sarah"
];

const newArray = myArray.filter(item => item.includes("h"));

console.log(newArray);