//IIFE (immidetly invokable function expression)
(async()=>{
    try{
        let result=await func1(true);
        console.log("i am here");
        let result2=await func2(true);
        console.log("i am here rejected");
    }catch(exception){
        console.error(exception);
    }
})();








