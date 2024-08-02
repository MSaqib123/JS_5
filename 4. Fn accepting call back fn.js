//=========================================================================
//============== Function Accepting Callback function =====================
//=========================================================================

//______ Example 1 _____
//1. Generic fun   (remove all spaces make 1 word)
const oneWord = function(str){
    return str.replace(/ /g, '')
  }
  
  //2. generic fun
  const UpperFirstWord = function(str){
    const [first, ...other]= str.split(' ');
    return [first.toUpperCase() , ...other].join(" ")
  }
  
  //3. Higher Order Function
  const transformer = function(str,fn){
    console.log(`Original :=>  ${str}`)
    console.log(`Transferm String :=>  ${fn(str)}`)
  
    //we can use Fun on Function
    console.log('Function Name which transfer string => ', fn.name)
  }
  
  transformer('javascript is the best',UpperFirstWord);
  transformer('javascript is the best',oneWord);
  
  //______ Example 2 :  Build in HigherOrder Function (addEventListener) _________
  const high5 = function (){
    console.log('👍');
  }
  document.addEventListener('click',high5)
  document.body.addEventListener('click',high5)
  
  
  
  //----------------------- Note --------------------------
  //we use  Abstraction  ---> by  CallBack function hahahahahahah
  //There are further levels of abstaction
  
  //In transfermation  we use abstaction
  //what -> we hide the code implementation   transfermation does not now whats happning 
  //when we hide  some code implementation its called abstraction