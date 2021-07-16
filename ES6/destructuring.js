// let num = [12, 13, 15, 16, 12];
// let [num1, num2, num3, num4, num5]  = num;
// console.log(num1, num2, num3, num4, num5);


// let num = [12, 13, 15, 16, 12];
// let [num1, num2, ...z]  = num;
// console.log(num1, num2, ...z);


// object destructure
// const studentInfo = {
//     id : 101,
//     name : 'jamal',
//     cgpa: 3.33
// }
// console.log(studentInfo.id);
// console.log(studentInfo.name);
// console.log(studentInfo.cgpa);


// const studentInfo = {
//     id : 101,
//     name : 'jamal',
//     cgpa: 3.33
// }
// const {id, name, cgpa} = studentInfo;

// console.log(id);
// console.log(name);
// console.log(cgpa);



// nested object destructure
// const studentInfo = {
//     id : 101,
//     name : 'jamal',
//     cgpa: 3.33,
//     lang : {
//         native : 'bangla',
//         beginer: 'english'
//     }
// }
// const {name, lang} = studentInfo;

// console.log(lang.native);



//destructuring function perameter
const studentInfo = ({id, name}) => {
    console.log(`${id}, ${name}`)
}

const student = {
    id: 101,
    name: 'saied'
}

studentInfo(student)