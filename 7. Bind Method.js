//__________________ Bind method _______________________
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
  const bookSW = book.bind(swish)
  console.log(bookPASI) //its return new method
  console.log(bookSW) //its return new method
  bookPASI(44,"SAQIB sahad")
  bookPASI(45,"kamee")
  bookPASI(46,"Kamaran")
  bookPASI(47,"Akhtar")
  console.log(PA_SINDH)
  
  //___ Example 1 ____
  //let mujhaa   booking ka waqt  ---> Flight same rkhni ha   har bar booking ka duran
  //instead of adding fligh again again we use  Bind method
  //i only need name
  
  const bookPASI_ = book.bind(PA_SINDH,420)
  const bookSW_ = book.bind(swish,55)
  bookPASI_("Dani")
  bookPASI_("Akram")
  bookPASI_("Yahooo")
  bookPASI_("Pakeee")
  console.log(PA_SINDH)
  
  //___ Example 2 ____
  //object toggether  Event listeners
  PA.planse = 300;
  PA.buyPlane = function(){
    console.log(this)
    this.planse++;
    console.log(this.planse)
  }
  // PA.buyPlane();
  
  document.querySelector('.buyBtn').addEventListener('click',PA.buyPlane.bind(PA))//PA.buyPlane)
  document.addEventListener('click',PA.buyPlane.bind(PA))
  
  //Error   --> this  NaN  why?
  //becuase in above (this keyword) point out to clicker  button , document
  //we have to tel to  higher order function manually that   object is   this keyw ord
  //----> in this case we  use  Bind method <------
  //why don't used call  ---> becuase call method give result  doesnot retun method ---> so HigherOrderMthod need function to callback
  //haahaha so its clear
  
  
  //___ Example 3 Partial Application ____
  //means we don't interst in (this key) but we still want to use bind
  const addTax = (rate , value) => value+value*rate;
  console.log(addTax(0.05,200))
  
  //Now we will fixed the Tax rat
  //when we fixed the  Tax rat that tax call VAT
  const addVAT = addTax.bind(null,0.08)  //Rate is Fixed
  console.log(addVAT(200)) //rat is fix
  console.log(addVAT(400))
  console.log(addVAT(700))
  
  
  ///__________ Challange with return Fun ________________
  let calcTax = function(rate){
    return function(value){
      console.log("fun Return : " ,(value+value*rate))
    }
  }
  
  let calVAT = calcTax(0.1)
  calVAT(400)
  calVAT(500)
  calVAT(600)
  calVAT(700)