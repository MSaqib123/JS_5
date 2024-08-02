//===================== 1. First Classs Fn ================================
//js is lanaguge which has  1st Class Fn

//1. Js treats fun as  First-class Citizens
//2. This means that functions are simple values
//3. Fun are another type of Object


//1. store function in variable
const add = (a,b)=> a+b;
const counter ={
    value :25,
    inc:function(){this.value++;}
}

//2. Pass function as argument to other Func
const greet = console.log("Hello PK")
document.addEventListener('click',greet);


//3. return function from anoter fun
//4. Call method on function
counter.inc.bind(someotherfunction);



//===================== 2. Higher Order Function ================================
//1. A function that  Receive another fn as  an Argument. That returns a new function or Both
//2. this is only possible because of firstClass function
//3. afer First class fn na hon to   Higher order bhi na hon

//___ Example 1 ___
document.addEventListener('click',   /*call back fun*/greet);
//1. addEventListioner is  High order function 
//2.  great  is  Call back function   Means this will return Function result

//___ Example 2 ___
function count(){  //heigh order function
    let counter = 0;
    //return function
    return function(){
        counter++;
    }
}

