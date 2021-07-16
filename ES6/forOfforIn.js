// for of and for in

const names = ["s1", "s2", "s3"]
for(let name of names){
    console.log(name)
}

let students = {
    id: 12,
    name: 'afride'
}
for(let student in students){
    // console.log(student);
    // console.log(students[student]);
    console.log(`${student} : ${students[student]}`);
}