'use strict'
const code = 'noggin oreo the moon time tele steed his tent apollo her lives though shoo tofu budapest';
// const decoded = code.split(' ').reduce (decoded)
const decoded = 
   code.split(' ').reduce((answer, word) => {
      if (word.length === 3) return answer + ' ';
 
      return answer + word[word.length-1].toUpperCase();
  }, '');

console.log(decoded);
