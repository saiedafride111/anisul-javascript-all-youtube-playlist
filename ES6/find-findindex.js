// let numbers = [5, 55, 14, 5, 78];
// let firstEvenNumber = numbers.find(x => x%2===0);
// console.log(firstEvenNumber)



// let numbers = [5, 55, 14, 5, 78];

// const evenNumber = (value) => {
//     if(value%2===0);
//     return value;
// }

// let firstEvenNumber = numbers.find(evenNumber);
// let firstEvenNumberIndex = numbers.findIndex(evenNumber);
// console.log(firstEvenNumber)
// console.log(firstEvenNumberIndex)


const students = [
    {
        id: 12,
        name: 'a'
    },
    {
        id: 32,
        name: 'b'
    },
    {
        id: 42,
        name: 'c'
    },
    {
        id: 52,
        name: 'd'
    },
];

console.log(students.find(x => x.id>40))
