//prmise is an object of promise
  //3 stage 
  //pending
  //fulfilled
  //rejected
  //settlement
  //then().catch().finally()
  //async-await

 /* const mypromise = new Promise((resolve, reject) => {
    resolve("success");
  });
  mypromise
  .then((data)=>{
    console.log(data);
  })
  .catch((exception)=>{
    console.log(exception);
  })
  .finally(()=>{
    console.log("i am finally")
  })

  console.log(" i am a last line")

  const myfunc=()=>{
    return new Promise((resolve, reject)=>{
      resolve("hello world")
    })
  }

  myfunc()
  .then((message) => {
    console.log(message); // Output: hello world
  })
  .catch((error) => {
    console.error(error);
  });
  */
 const func1=(X)=>{
  return new Promise((resolve, reject)=>{
    console.log("i am a func1")
    if(X) {
      resolve("I am func1")
    }
    else{
      reject("I am rejected of func1")
    }
  })
}

const func2=(X)=>{
  return new Promise((resolve, reject)=>{
    console.log("i am a func2")
    if(X) {
      resolve("I am func2")
    }
    else{
      reject("I am rejected of func2")
    }
  })
}

const func3=(X)=>{
  return new Promise((resolve, reject)=>{
    console.log("i am a func1")
    if(X) {
      resolve("I am func1")
    }
    else{
      reject("I am rejected of func1")
    }
  })
}

const func4=(X)=>{
  return new Promise((resolve, reject)=>{
    console.log("i am a func1")
    if(X) {
      resolve("I am func1")
    }
    else{
      reject("I am rejected of func1")
    }
  })
}

const func5=(X)=>{
  return new Promise((resolve, reject)=>{
    console.log("i am a func1")
    if(X) {
      resolve("I am func1")
    }
    else{
      reject("I am rejected of func1")
    }
  })
}

/*func1(true)

  .then((masz)=>{
    console.log(masz)
  })
  .catch((exception)=>{
    console.log(exception)
  })
  .finally(()=>{
    console.log("i am finally")
  })
func2(false)

  .then((masz)=>{
    console.log(masz)
  })
  .catch((exception)=>{
    console.log(exception)
  })
  .finally(()=>{
    console.log("i am finally")
  })


func3(false)

  .then((masz)=>{
    console.log(masz)
  })
  .catch((exception)=>{
    console.log(exception)
  })
  .finally(()=>{
    console.log("i am finally")
  })


func4(false)

  .then((masz)=>{
    console.log(masz)
  })
  .catch((exception)=>{
    console.log(exception)
  })
  .finally(()=>{
    console.log("i am finally")
  })


func5(false)

  .then((masz)=>{
    console.log(masz)
  })
  .catch((exception)=>{
    console.log(exception)
  })
  .finally(()=>{
    console.log("i am finally")
  })*/

//promise function chaining
/*
func2(true)
 .then((res1)=>{
  console.log(res1);
  return func2(true);
 })
 .then((res2)=>{
  console.log(res2);
  return func3(true);
 })
 .then((res3)=>{
  console.log(res3);
  return func4(true);
 })
 .then((res4)=>{
  console.log(res4);
  return func5(true);
 })
 .catch((exception)=>{
  console.error(exception);
 })
*/

 //promise handeling
 const funcArray=[func1(),func2(),func3(),func4(),func5()];
 Promise.allSettled(funcArray)
 .then((res)=>{
  console.log(res);
 })
 .catch((exception)=>{
  console.error(exception);
 })

 