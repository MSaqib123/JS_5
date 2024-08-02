
//__________________ Function returning Function _______________________
//this is also cadd Clauser function  --> mechnisome  we will cover end of section
const great = function(greeting){
    return function(name){
      console.log(`${greeting} ${name}`)
    }
  }
  
  //_____ 1st way ____
  //this return New function after calling
  console.log(great("Hello"))
  let greetinghello = great('Hello')
  
  //then we used second function
  greetinghello('Jonas')
  greetinghello('Saqib')
  greetinghello('Boota')
  
  //____ 2nd way ___
  great("Slowlley Slowlly ")("Saqib Progressing")
  
  
  
  ///______ Challange _____
  //write return function using arrow function
  
  //... Wronge way  arrow fn  directly return value
  // let greetingHello1 = (str) =>{
  //   return function(name){
  //     console.log(`${greeting} ${name}`)
  //   }
  // }
  
  //... corrrect 
  let greetingHello1 = (greeting) => name => console.log(`${greeting} ${name}`)
  
  greetingHello1("PPP")("ÏII")