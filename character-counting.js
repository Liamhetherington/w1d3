function countLetters(string) {
  var str = {};
  var noSpace = string.split(' ').join('');
    for (var i = 0; i < noSpace.length; i++) {
      var letter = noSpace.charAt(i);
      if (str[letter]) {
        str[letter]++;
      } else {
        str[letter] = 1;
      }
    }
    return str;
};

console.log(countLetters("lighthouse in the house"));


// function countLetters(string) {
//   var size = 0;
//   for (var i = 0; i < string.length; i++) {
//     if(string.hasOwnProperty(i)) size++;
//   }
//   return size;
// }

// var str = '';
// var letters = new Object;

// for (i = 0, length = str.length; i < length; i++) {
//   var y =str.charAt(i)
//   letters[y] = (isNaN(letters[y]) ? 1 : letters);
// }

// for (i = 0; i < letters.length; i++) {
//   console.log([y] + " = " + letters[i]);
// }

// console.log(countLetters("lighthouse in the house"));