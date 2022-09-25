function roundNumber(n) {
  if (n > 255) return 255;
  if (n < 0) return 0;
  else return n;
}

function rgb(r, g, b) {
  // complete this function
  let red = roundNumber(r);
  let green = roundNumber(g);
  let blue = roundNumber(b);
  let finalHex;

  let prefix = "#";
  let hex =
    prefix +
    ((1 << 24) + (red << 16) + (green << 8) + blue).toString(16).slice(1);

  finalHex = hex;
  return finalHex.toUpperCase();
}

let result = rgb(173, 255, 47);
console.log(result);
