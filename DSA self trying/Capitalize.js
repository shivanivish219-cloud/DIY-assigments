// Capitalize first letter of each word
// Input: "hello world"

// Output: "Hello World"

let Input = "hello world";

let result = text
  .split(" ")
  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
  .join(" ");

console.log(result);
