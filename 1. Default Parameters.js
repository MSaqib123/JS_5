//-------------- Defalt Paramter -----------------

let Bookings = []

//1. setting default value to paramters
//2. we Can also  multiply --> apply any opertor to  Previews  Paramter  Example
const createBooking = (flightNum,numPassengers=1, price=numPassengers*90) => {
  const booking = {
    flightNum,//: flightNum,
    numPassengers,
    price
  }
  console.log(booking)
  Bookings.push(booking)
}

//if i will not give parmater values it will add undifned value to booking
createBooking('C253')
createBooking('C254',2)
createBooking('C254',4,300)
