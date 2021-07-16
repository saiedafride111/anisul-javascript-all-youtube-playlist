for(var i = 1; i <= 10 ; i++){
    document.write("<h1>Bangladesh</h1>")
}

for(var i = 1; i <= 10 ; i++){
    document.write(i)
}

document.write("</br>")

for(var i = 10; i >= 1; i = i - 1){
    document.write(i)
}

document.write("</br>")


var sum = 0;
for(var i = 1; i <= 10 ; i++){
    sum = sum + i
}
document.write(sum);

document.write("</br>");



var i = 1;
while(i <= 10){
    document.write(" ",i);
    i++;
}

document.write("</br>");



var i = 1;
var sum = 0;

while(i <= 20){
    if(i % 3== 0 && i % 5== 0){
        document.write(i)
        sum = sum + i
    }
    i++;
}
document.write(" ",sum)
document.write("</br>");


var i = 1;
do{
    document.write(i)
    i++
}while(i <= 30)

document.write("</br>");
// **************      break / continue           *******************************

for (let i = 0; i <= 100; i++) {
    if(i == 10){
        break;
    }
    document.write(" ", i)
}
document.write("End")




for (let i = 0; i <= 100; i++) {
    if(i % 2 == 0){
        continue;
    }
    document.write(" ", i)
}
document.write("End")


//  Ternary Operator

var number = Number(prompt("Enter a number : "));
// if(number > 0){
//     console.log("positive")
// }
// else{
//     console.log("negative")
// }

var result = number > 0 ? "positive" : "negative";
console.log(result)