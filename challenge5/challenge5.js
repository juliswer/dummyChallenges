// first option
function squareDigits(num) {
  if (!Number.isInteger(num)) return "Not integer";
  if (num < 0) return "Negative number is no available";

  let numbers = num.toString().split("");
  let result = "";
  numbers.map((number) => {
    let _result = Math.pow(+number, 2);
    let availableToAdd = _result.toString();
    result += availableToAdd;
  });
  return +result;
}

// second option
function squareDigits(num) {
  return +num
    .toString()
    .split("")
    .map((i) => i * i)
    .join("");
}
