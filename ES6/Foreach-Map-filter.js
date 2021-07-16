// let num = [12, 14, 15, 16, 17];
// for(let i = 0; i < num.length; i++){
//     console.log(num[i]);
// }



// let num = [12, 14, 15, 16, 17];
// num.forEach(muFunc)
//     function myFunc(x)
// {
//     console.log(x)
// }



// let num = [12, 14, 15, 16, 17];
// num.forEach(function(x){
//     console.log(x)
// })



// let num = [12, 14, 15, 16, 17];
// let squareNumber = []
// num.forEach(function(x){
//     squareNumber.push(x * x);
// })
// console.log(squareNumber)


// let num = [12, 14, 15, 16, 17];
// num.forEach(function(x, index, arr){
//     arr[index] = x + 5;
// })
// console.log(num)


// let num = [12, 14, 15, 16, 17];
// let squareNumber = num.map(function(x){
//    return x * x
// })
// console.log(squareNumber);


let num = [12, 14, 15, 6, 17];
let newNumber = num.filter(function(x){
   return x > 10
})
console.log(newNumber);
