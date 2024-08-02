
//____________________ How Passing Arguments Works  : Values vs Reference ______________________________
//this goes back  about   Primitive vs Object (non-primitive)
//this is review of that calss but its apply on function

//-->  Note :  JS me  Value By Referncen ni hotaa ----> 


const flight = 'PA234'; //light number
const jonas = {  //passenger
  name:'Saqib',
  passport : '123456789',
}

//------ 1. Pass by value ------
//Primitive are  Pass by Value    means there values will not change after chaining in functin
let checkIn1  = function(flightnumb){
  flightnumb = 'PA123';
}
checkIn1(flight)
console.log(flight )

