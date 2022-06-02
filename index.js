function isPalindrome(word) {
  if(word.split("").reverse().join("") === word) {
    return true;
  }else return false;
}

/* 
  reversed string = split words, reverse words, join words;
  if the reversed word is the same as the original word, then it is a palindrome
  if the reversed word is not the same as the original word, then it is not a palindrome
*/

/*
  if the splitted, reversed and rejoined word is the same as the original word, then it is a palindrome
  so that it returns true, otherwise it returns false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
