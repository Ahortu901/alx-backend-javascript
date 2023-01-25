export default function getResponseFromAPI() {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("ture");
    }, 3000);
    setTimeout(()=> {
      reject("Not true")
    }, 2000);
  });
  Promise.then((response) => {
    log(response);
  }).catch((error) => {
    log(error);
  });
}