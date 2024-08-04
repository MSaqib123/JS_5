//_____________ Example 1 ________________
let f;

const g = function(){
    const a = 25;
    f = function(){
        console.log(a*2)
    }
}
g();
f();
console.dir(f)


//_____________ Example 2 Re-assign function ________________
const h = function(){
    const a = 25;
    f = function(){
        console.log(a*2)
    }
}
h();
f();
console.dir(f)

//_____________ Example 3 (Timer Example)________________
//when timer is called after  await  like 1 , 2 , 3 second then who  does  function now that its has old value to add
//so it means this also closure

const boardPassengers = function(n,wait){
    //we want passenger 3 groups
    let groupNo = 3;
    const perGroup = n/groupNo;  

    setTimeout(function(){
        console.log(`we are now boarding all ${n} passengers`)
        console.log(`There are ${groupNo} groups each with ${perGroup} passengers`)
    }, wait*1000)
    console.log(`Will start boarding in ${wait} second  `)
}
boardPassengers(100,3)
boardPassengers(200,5)
