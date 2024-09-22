Array.prototype.myFilter = function (callback, thisArg) {
  let filteredArr = [];
  let originalArray = this;

  for (let index = 0; index < originalArray.length; index++) {
    const element = originalArray[index];

    if (index in originalArray) {
      if (callback.call(thisArg, element, index, originalArray)) {
        filteredArr.push(element);
      }
    }
  }
  return filteredArr;
};
/*Example
const arr = [1, 2, 4, 5, 6, 7, 8];
const oddNums = arr.myFilter((num) => num % 2 !== 0);
console.log(oddNums);*/
