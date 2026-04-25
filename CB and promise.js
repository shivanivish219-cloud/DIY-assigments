function fetchDataWithCallback(callback) {
  setTimeout(() => {
    let data = "https://fakestoreapi.com/products/1";
    callback(data);
  }, 1000);
}

setTimeout(() => {
  callback("from cache");
}, 2000);

function fetchDataWithpromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let data = "https://fakestoreapi.com/products/1";
      resolve(data);
    }, 1000);

    setTimeout(() => {
      resolve("from cache");
    }, 2000);
  });
}

fetchDataWithCallback((data) => {
  console.log("callback:", data);
});

fetchDataWithpromise().then((data) => {
  console.log("promise:", data);
});
