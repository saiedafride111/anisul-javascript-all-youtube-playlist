function message (text){
    console.log(text)
}
message('I Love Bangladesh');


function message (text = 'I Love Bangladesh Too'){
    console.log(text)
}
message();


function sum(x, y, ...z){
    console.log(`x = ${x}, y = ${y}, z = ${z}`)
}
sum(12, 13, 14, 15, 16, 17, 18)