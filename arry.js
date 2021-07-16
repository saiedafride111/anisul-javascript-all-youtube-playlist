var names = ["kamal", "jamal", "tamal"];
console.log(names);
names.push("akas");
names.push("batas");
console.log(names);
names.pop();
console.log(names);


var country1 = ["Dhaka", "ctg"]
var country2 = ["mymsn", "feni"]

var country = country1.concat(country2);
console.log(country);

var num = [12, 23, 21, 44, 56];
var sum= 0;
for(var i=0; i<5; i++){
    sum = sum + num[i];
}
console.log(sum);