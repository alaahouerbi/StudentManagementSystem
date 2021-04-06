let numberofStudents=0;
let students=[];
function add (number1, number2){
    return number1 + number2
};
add(1,2);
function addStududent(name){
    numberofStudents++;
    students.push(name);
}
function getNumberOfstudent(){
    return numberofStudents;
}
function clearStudent(){
    students=[];
}
console.log(students);