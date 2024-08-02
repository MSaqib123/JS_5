
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




//------ 2. Pass by refernce ------
//object Non-primitive   are    Pass by  Refernce ... object ke value change ho jati han.
// is lyaa object  ko   Refernce Type bhi khtaa han
let checkIn2  = function(passenger){
  passenger.name = 'Mr: Talhaa'
  if(passenger.passport === '123456789'){
    console.log("correct")
  }
  else{
    console.log("wrong passport")
  }
}
checkIn1(jonas)
console.log(jonas.name)




//------------------------ Kyun --------------------------------
//varible ke value change ni hovi or object ke ho gy
//----> Primitive type are  --> store in  Stack of Memory
//----> Non-Pri (Object Refer) are ---> store in   Heap of Memory 
//thats why



