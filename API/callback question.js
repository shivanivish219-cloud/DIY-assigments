// result = 5
const calculator = (a, b, cbFunc) => {
  setTimeout(() => {
    const result = cbFunc(a, b);
    console.log("Data: ", result);
  }, 3000);
};
const divide = (a, b) => a / b;

calculator(10, 2, divide);
