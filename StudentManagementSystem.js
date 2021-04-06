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
addStududent(createFullName("alaa","houerbi"));



function isFullName(name){
    return name.split(' ').length===2;
}