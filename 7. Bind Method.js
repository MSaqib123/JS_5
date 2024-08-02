//_______________ Bind Methods ______________
//Bind method is also like  Call 
//but its return new function  instead of giving direct values


const PA = {
    airline : 'Lufthansa',
    iataCode : 'PLA',
    bookings : [],
  
    //book:function(){}
    book(flightNum,name){
      console.log(`${name} booked seat on ${this.airline} flight ${this.iataCode} ${flightNum}`)
      //push this booking to  booking array
      this.bookings.push({
        flight:`${this.iataCode} ${flightNum}`,
        name
      })
    }
  }