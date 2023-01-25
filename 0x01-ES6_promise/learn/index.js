let myPromise = new Promise((resolve, rejecct) => {
    resolve('Good to go');
})

myPromise.then((res) => {
    console.log(res);
})