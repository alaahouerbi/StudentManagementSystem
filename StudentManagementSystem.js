let numberofStudents=0;
let students=[];
function add (number1, number2){
    return number1 + number2
};
add(1,2);
addStudent(createStudent("ben","dover","email@some",21,"idk"));
addStudent(createStudent("Hugh","Jass","someotheremail@domain",40,"same"));
addStudent(createStudent("mike","rack","email@some",30,"RE"));
addStudent(createStudent("Jack","Mehoff","email@some",25,"CSE"));
addStudent(createStudent("wayne","Kerr","email@some",27,"buisness"));
addSkills(students[0],['humor','jokes']);
addSkills(students[1],['HTML','CSS']);
addSkills(students[2],['C++','Java']);
function addStudent(studentObject){
    students.push(studentObject);
}
function getNumberOfstudent(){
    return numberofStudents;
}
function clearStudent(){
    students=[];
    numberofStudents=0;
}
function createFullName(firstName,lastName){
    return firstName+" "+lastName;
}


function getStudentsByIntials(firstInit,LastInit) {
    const result=students.filter(s=>{
        return (s[0]===firstInit && s.split(' ')[1][0]===LastInit)

    })
    return result
    
}



function isFullName(name){
    return name.split(' ').length===2;
}
 student={firstName:"Alaa",
lastName:"Houerbi",fullName:"Alaa Houerbi",email:"alaa.houerbi@medtech.tn",
age:23,
education:"SE"};

function createStudent(firstName,lastName,email,age,education) 
{
    let student={
        firstName:firstName,
        lastName:lastName,
        fullName:createFullName(firstName,lastName),
        email:email,
        age:age,
        education:education

    }
    
    return student;
    
}

delete student;
var me=createStudent("Alaa","Houerbi","someemail@some.stuff",23,"SE");

function addSkills(student,skills){
    if(student.skills===undefined){
        student.skills=[];
    }
   skills.forEach(x => {
      student.skills.push(x);
       });
    student.skills= [...new Set(student.skills)];
    return student.skills;
   
}
function removeStudent(firstName){
   students= students.filter(x=>{return x.firstName!==firstName});
   numberofStudents=students.length;
}