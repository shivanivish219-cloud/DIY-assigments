const { useCallback } = require("react");

// result = 5
const calculator = (a, b, cbFunc) => {
  setTimeout(() => {
    const result = cbFunc(a, b);
    console.log("Data: ", result);
  }, 3000);
};
const divide = (a, b) => a / b;

calculator(10, 2, divide);

// change arguments and find output
const safeDivide = (a, b, Callback) => {
  setTimeout(() => {
    if (b === 0) {
      Callback("error:Division by zero", null);
    } else {
      Callback(null, a / b);
    }
  }, 2000);
};

// values change hoskti h...
safeDivide(10, 0, (err, result) => {
  console.log("err:", err);
  console.log("result:", result);
  if (err) console.log(err);
  else console.log(result);
});
