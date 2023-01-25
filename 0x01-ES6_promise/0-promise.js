export default function getResponseFromAPI() {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Promise");
    }, 3000);
    setTimeout(()=> {
      reject("No Promise")
    }, 2000);
  })
}