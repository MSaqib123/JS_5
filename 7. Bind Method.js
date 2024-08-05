//_______________ Bind Methods ______________
//Bind method is also like  Call 
//its not emiduatly call the  method insetead return new method
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

const PA_SINDH = {
    airline : 'PA_Sindh',
    iataCode : 'PA_SI',
    bookings : [],
}
const swish = {
    airline : 'swish',
    iataCode : 'sw',
    bookings : [],
}
const book = PA.book;  //now book function store in book


//---- Bind method ------
//let mujha baar  barr  (this -> object)  ko point out ni krnaa
//then i will use bind method
const bookPASI = book.bind(PA_SINDH)
console.log(bookPASI) //its return new method
bookPASI(44,"SAQIB sahad")


//___ Example 1 ____
//let mujhaa   booking ka waqt  ---> Flight same rkhni ha   har bar booking ka duran
//instead of adding fligh again again we use  Bind method
