//____________ Closur ______________
//return function or higher order function contain  Closurs       
//Closur is javascript  Technicue take history ho  parent function variable

const secureBooking = function(){
    let passengerCount = 0;

    return function (){
        passengerCount++;
        console.log(`${passengerCount} passengers`)
    }
}

//let understand the concept
//after Execution of secureBooking its  distroied from Stack imiditaly
const booker = secureBooking();

//???? 
//how does booker  remver the old value of  Passenger ---> so this is  Closur working
//passenger = 1
booker()
console.dir(booker) //check under Scope  view the Closur property

//passenger = 2
booker()
console.dir(booker) //check under Scope  view the Closur property

//passenger = 3
booker()
console.dir(booker) //check under Scope  view the Closur property




