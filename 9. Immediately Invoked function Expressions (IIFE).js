
//____________ Immediately Invoked function Expressions (IIFE) ____________

//ager hm koi page load krta wqt  sirf 1 method 1 time use krna chtaan
//or us ka baad wo used na ho
//then we used  (IIFE)



//______________ IIFE old ___________ are called on top
//1st
// (function(){
//   console.log("this will never execute")
// })()

//2nd
// (()=>console.log("this will never execute"))()


//_______________ ES6 _______________
//we used Scope {}
{
    console.log("this will never execute")
    let privateVar = 25; //only used in this scope
  }
  // console.log(privateVar)
  
  
  
  //__________ Simple Fun _________
  const onceCall = function(){
    console.log("Basic Function")
  }
  onceCall()
  onceCall()