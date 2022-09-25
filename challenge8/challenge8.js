let numbers = [1, 2, 3, 4, 5, 2, 7, 8, 9, 0];

function createPhoneNumber(numbers) {
  if (numbers.length > 10) return "Only 10 numbers are allowed";
  if (numbers.length === 0) return "No items inside";

  let codeArea;
  let firstNumberSection;
  let secondNumberSection;
  let finalNumber;

  codeArea = `(${numbers.slice(0, 3).join("")})`;
  firstNumberSection = `${numbers.slice(3, 6).join("")}`;
  secondNumberSection = `${numbers.slice(6).join("")}`;

  finalNumber = `${codeArea} ${firstNumberSection}-${secondNumberSection}`;

  return finalNumber;
}

function phoneNumber(numbers) {
  if (numbers.length > 10) return "Only 10 numbers are allowed";
  if (numbers.length === 0) return "No items inside";
  
  let format = "(xxx) xxx-xxxx";

  for (let i = 0; i < numbers.length; i++) {
    format = format.replace("x", numbers[i]);
  }

  return format;
}
