// var num = 6;

// if(num % 2 == 0){
//     console.log("Even number")
// }

// if(num % 2 == !0){
//     console.log("Odd number")
// }


// var num = prompt("Plese Enter Your Number : ");

// if(num > 0){
//     console.log("Positive Number")
// }
// if(num < 0){
//     console.log("Negetive Number")
// }
// if(num == 0){
//     console.log("Zero")
// }



// var marks = parseInt(prompt("Plese Enter Your Number : "));

// if(marks >= 100 || marks < 0){
//     console.log("Its Not Valid")
// }
// else if(marks >= 80 && marks <= 100){
//     console.log("A+")
// }
// else if(marks >= 70 && marks <= 79){
//     console.log("A")
// }
// else if(marks >= 60 && marks <= 69){
//     console.log("A-")
// }
// else if(marks >= 50 && marks <= 59){
//     console.log("B")
// }
// else if(marks >= 40 && marks <= 49){
//     console.log("D")
// }
// else if(marks >= 33 && marks <= 39){
//     console.log("C")
// }
// else{
//     console.log("Feltus Student")
// }


// var num1 = parseFloat(prompt("Plese Enter Num1 : "));
// var num2 = parseFloat(prompt("Plese Enter Num2 : "));
// var num3 = parseFloat(prompt("Plese Enter Num3 : "));

// if(num1 > num2 && num1 > num3){
//     console.log("Large Number " + num1)
// }
// else if(num2 > num1 && num2 > num3){
//     console.log("Large Number " + num2)
// }
// else if(num3 > num1 && num3 > num2){
//     console.log("Large Number " + num3)
// }


var letter = prompt("Plese Enter Letter : ");
var letter = letter.toLowerCase();

if(letter == "a" || letter == "e" || letter == "i" || letter == "o" || letter == "u"){
    console.log("Vowel")
}
else{
    console.log("Consonent")
}