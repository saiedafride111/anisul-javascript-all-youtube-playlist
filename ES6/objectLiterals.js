function student1 (name, age){
    return {
        // name: name,
        // age: age
        name, age
    }
}

console.log(student1('saied', '22'))



// let message = {
//     body : function(){
//         return `Hi, I am Object Function`
//     }
// }
// console.log(message.body())


// let message = {
//     body(){
//         return `Hi, I am Object Function`
//     }
// }
// console.log(message.body())


let message = {
    'body name'(){
        return `Hi, I am Object Function`
    }
}
console.log(message['body name']())