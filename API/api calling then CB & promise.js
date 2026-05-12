function fetchDataWithCallback(callback) {
  fetch("https://fakestoreapi.com/products/1")
    .then((res) => res.json())
    .then((data) => {
      callback(data);
    })
    .catch((err) => {
      console.log("Callback Error:", err);
    });
}

fetchDataWithCallback((data) => {
  console.log("Callback Data:", data);
});

function fetchDataWithPromise() {
  return fetch("https://fakestoreapi.com/products/1").then((res) => res.json());
}

fetchDataWithPromise().then((data) => {
  console.log("Promise Data:", data);
});

fetchDataWithPromise().then((data) => {
  console.log("promise error:", err);
});
