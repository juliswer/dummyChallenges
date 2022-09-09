const countBits = (n) => {
  if (!Number.isInteger(n)) return "Not Integer";
  if (n < 0) return "You must provide a positive number";
  // ? Returns the number with a binary representation
  return (n >>> 0).toString(2);
};

console.log(countBits(1234));
