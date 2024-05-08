const promise = new Promise((resolve, reject) => {
  let error = true;
  if (error) {
    setTimeout(() => {
      resolve("promise one is executing");
    }, 2000);
  } else {
    reject("something went wrong");
  }
});

async function consumePromise() {
  let result = await promise;
  console.log(result);
}

consumePromise();
