const promise=new Promise((resolve,reject)=>{
    let error=true;
    if(error){
        console.log("promise one is executing");
        resolve();
    }
    else{
        reject("something went wrong");
    }
    
})

promise
.then(()=>{
    console.log("success : promise 1");
})
.catch((err)=>{
    console.log(err);
})