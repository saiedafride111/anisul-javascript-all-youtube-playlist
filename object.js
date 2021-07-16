// var student = {
//     name : "saied",
//     age : 22,
//     cgpa : 33.22,
//     lang : ["Bangali", "English", "Hindi"]
// }

// console.log(student.name)

function Student(name, age, cgpa, lang) {
    this.name = name;
    this.age = age;
    this.cgpa = cgpa;
    this.lang = lang;

    this.display = function() {
        console.log(this.name)
        console.log(this.age)
        console.log(this.cgpa)
        console.log(this.lang)
    }
}

var student1 = new Student("saied",  22, 33.22, ["Bangali", "English", "Hindi"])
var student2 = new Student("Afride",  22, 33.22, ["Bangali", "English", "Hindi"])
var student3 = new Student("Hridoy",  22, 33.22, ["Bangali", "English", "Hindi"])

// console.log(student1.name);

student1.display()
student2.display()