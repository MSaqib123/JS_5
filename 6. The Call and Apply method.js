
//__________________ The call AND apply method _______________________
//learning (this) keywords
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
  
  PA.book('PA123','Saqib')
  PA.book('PA999','Rashid Ali')
  
  console.log(PA)
  
  
  //________________ Repetation of Function __________________
  //let PA creat new Airline call  PA_SINDH
  //so  we will have to  copy the  function code in the same object
  
  const PA_SINDH = {
    airline : 'PA_Sindh',
    iataCode : 'PA_SI',
    bookings : [],
  
    //_____ booking Function ______
    // book(flightNum,name){
    //   console.log(`${name} booked seat on ${this.airline} flight ${this.iataCode} ${flightNum}`)
    //   //push this booking to  booking array
    //   this.bookings.push({
    //     flight:`${this.iataCode} ${flightNum}`,
    //     name
    //   })
    // } 
  
    //------- NO this is Virst thing ever -------
    //I will use that  same  function in other Object 
    //using  Call and apply
  }
  
  
  const book = PA.book;  //now book function store in book
  
  //===================================
  //======= 1. Does Not Work ==========
  //===================================
  // console.log(book)
  // book(25,'Sheen Afridy')
  // book(29,'PK')
  
  //Error  because   function is  Confused on ---> this keyword  --> ka usa ke tarf sa rerfence lana ha
  //aya   PK sa  yaa  PA_SINDH
  
  
  //===================================
  //======= 2. Call ===================
  //===================================
  //cal me hum ya defined ker data han ka  ya function kis ka lya defined haa
  book.call(PA_SINDH, 123,'Saqib')
  console.log(PA_SINDH)
  book.call(PA, 123,'Laptaa')
  
  
  const swish = {
    airline : 'swish',
    iataCode : 'sw',
    bookings : [],
  }
  book.call(swish, 123,'Laptaa')
  // console.log(swish)
  
  
  //===================================
  //======= 3. apply ==================
  //===================================
  //not used in Modren JS
  let flightData = [999,"Mr Boota"]
  book.apply(swish,flightData)
  // console.log(swish)
  
  
  //===================================
  //======- 4. without Apply ==========
  //===================================
  //this is Soo Much used in Modren JS
  book.call(swish,...flightData)
  console.log(swish)
  
  