// Convert an array into an object
// Input: ["A", "B", "C"]

// Output:

// { 0: "A", 1: "B", 2: "C" }

let Input = ["A", "B", "C"];
let output = {};

for (let i = 0; i < Input.length; i++) {
  console.log("Index:", i, "Value:", Input[i]);
}

// find the index value of 10
let arr = [5, 10, 15, 20];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] === 10) {
    console.log("index of 10:", i);
  } // 10 = 1 index
}

// 2 method by arr.find
let arr = [5, 10, 15, 20];
let index = arr.findIndex((num) => num > 10);
console.log(index);
