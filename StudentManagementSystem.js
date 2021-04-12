let numberofStudents=0;
let students=[];
function add (number1, number2){
    return number1 + number2
};
add(1,2);
function addStududent(name){
    
    students.push(name);
    numberofStudents=students.length;
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
    student.skills=skills;
}