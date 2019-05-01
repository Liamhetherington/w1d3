function countLetters(string) {
  var str = {};
  var noSpace = string.split(' ').join('');
    for (var i = 0; i < noSpace.length; i++) {
      var letter = noSpace.charAt(i);
      if (str[letter]) {
        str[letter].push(i);
      } else {
        str[letter] = [i];
      }
    }
    return str;
};

console.log(countLetters("lighthouse in the house"));