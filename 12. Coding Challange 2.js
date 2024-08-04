//_____________ Codding Challeng #2 ________________
(function(){
    console.log()

    let h1 = document.querySelector('h1');
    h1.style.color = 'red';

    //how does it now  h1 is alredy exist  
    //its alsoo  Closure 
    //becuase it  take history of parent functrion variable in callback function
    //Js very Smaart
    document.addEventListener('click',function(){
        h1.style.color = 'blue';
    })
})();