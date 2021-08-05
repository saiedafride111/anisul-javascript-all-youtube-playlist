// var digit = prompt("Enter Any Disit : ");

// switch(digit) {
//     case "0":
//         console.log("Zero");
//         break;
//     case "1":
//         console.log("One");
//         break;
//     case "2":
//         console.log("Two");
//         break;
//     case "3":
//         console.log("Three");
//         break;
//     case "4":
//         console.log("Four");
//         break;
//     case "5":
//         console.log("Five");
//         break;
//     case "6":
//         console.log("Six");
//         break;
//     case "7":
//         console.log("Seven");
//         break;
//     case "8":
//         console.log("Eight");
//         break;
//     case "9":
//         console.log("Nine");
//         break;
//     default:
//         console.log("Not a Digit")
// }


// var letter = prompt("Enter a letter : ");
// var letter = letter.toLowerCase();
// switch(letter) {
//     case "a":
//         console.log("Its Vowel");
//         break;
//     case "e":
//         console.log("Its Vowel");
//         break;
//     case "i":
//         console.log("Its Vowel");
//         break;
//     case "o":
//         console.log("Its Vowel");
//         break;
//     case "u":
//         console.log("Its Vowel");
//         break;
//     default:
//         console.log("Not a Vowel")
// }



var letter = prompt("Enter a letter : ");
var letter = letter.toLowerCase();
switch(letter) {
    case "a":
    case "e":
    case "i":
    case "o":
    case "u":
        console.log("Its Vowel");
        break;
    default:
        console.log("Not a Vowel")
}




// var color = 'red';
// if(color === 'black'){
//     console.log("Its color is black");
// }
// else if(color === 'red'){
//     console.log("Its color is red");
// }
// else{
//     console.log("No color")
// }


// var color = 'black';
// switch(color){
//     case 'black':
//         console.log("Its color is black");
//     break;
//     case 'white':
//         console.log("Its color is white");
//     break;
//     default:
//         console.log("No color")
// };


// var number = 0;
// while(number < 10){
//     console.log(number);
//     if(number == 5){
//         break;
//     }
//     number++;
// }


// var numbers = [12, 30, 60, 80, 101, 105, 150];
// for(var i = 0; i < numbers.length; i++){
//     var number = numbers[i];
//     if(number > 80){
//         break;
//     }
//     console.log(number);
// }

// var numbers = [12, 30, 60, 80, 101, 105, 150];
// for(var i = 0; i < numbers.length; i++){
//     var number = numbers[i];
//     if(number > 80){
//         continue;
//     }
//     console.log(number);
// }
