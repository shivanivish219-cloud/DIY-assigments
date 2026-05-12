String.prototype.toCapitalize = function () {
  let strArr = this.split(" ");
  let result = "";

  for (let i = 0; i < strArr.length; i++) {
    let word = strArr[i];

    if (word.length === 0) continue;

    let capitalizeWord =
      word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();

    result += capitalizeWord;

    if (i !== strArr.length - 1) {
      result += " ";
    }
  }

  return result;
};

let str = "mY NAMe is aNKIt jAin";

str = str.toCapitalize();

console.log(str);

// question Node. 02
// const nums = [1,2,3,4,5,6]
// const results = nums.meraFilter((num)=> num % 2 === 0);

Array.prototype.meraFilter = function (callback) {
  let result = [];

  for (let i = 0; i < This.length; i++){
    if (callback(this[i], i, this)) {
      result.push(this[i]);
    }
};

return result}
;
const nums = [1,2,3,4,5,6]
 const results = nums.meraFilter((num)=> num % 2 === 0);

 console.log(results);