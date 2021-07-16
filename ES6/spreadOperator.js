// function addNumbers(x, y, z){
//     return x + y + z;
// }
// var numbers = [12, 13, 14];
// // console.log(addNumbers(numbers[0], numbers[1], numbers[2]));
// console.log(addNumbers(...numbers));




// function addNumbers(x, y, z){
//     return x + y + z;
// }
// let numbers = [12, 13, 14];
// let numbers1 = [20, 30, ...numbers]
// console.log(numbers1);




// function addNumbers(x, y, z){
//     return x + y + z;
// }
// let numbers1 = [12, 13, 14];
// let numbers2 = [36, 14];
// // let numbers = numbers1.concat(numbers2);
// let numbers = [...numbers1, ...numbers2];
// console.log(numbers);



let p1 = {
    name : 'saied',
    Roll: 12
}
let p2 = {
    Notification: 'Facebook',
    occupation: 'teacher'
}

let p = {...p1, ...p2}
console.log(p)
