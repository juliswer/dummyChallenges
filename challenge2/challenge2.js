const letter = "bici   coche balon _playstation bici coche peluche";

function listGifts(letter) {
  // convert the given string to an array
  let initArray = letter.split(" ");
  // filter white spaces
  let arrWithoutSpaces = initArray.filter((w) => w !== "");
  // filter cross out words (words that start with '_')
  let rightWordsArr = arrWithoutSpaces.filter((w) => !/^[_].*/.test(w));

  let objToSend = {};

  for (let i = 0; i < rightWordsArr.length; i++) {
    let currentWordCount = objToSend[rightWordsArr[i]];
    let count = currentWordCount ? currentWordCount : 0;
    objToSend[rightWordsArr[i]] = count + 1;
  }
  return objToSend;
}

console.log(listGifts(letter));
