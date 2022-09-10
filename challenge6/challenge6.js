let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function sumTwoSmallestNumbers(numbers) {
  numbers.sort((a, b) => a - b);
  const minValues = [numbers[0], numbers[1]];
  let result = minValues[0] + minValues[1];
  console.log(result);
  return result;
}

let minNumsResult = sumTwoSmallestNumbers(nums);
console.log(minNumsResult);
