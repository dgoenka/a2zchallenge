/**
 * Gets the vowel count of a word (string).
 * @param {string} aWord - The word to calculate for.
 * @return {number} The number of vowels in the word (string)
 */
function getWordVowelCount(aWord) {
  let vowelCount = 0;
  for (let i = 0; i < aWord.length; i++) {
    const charAtI = aWord.charAt(i);
    if ("AaEeIiOoUu".includes(charAtI)) vowelCount++;
  }
  return vowelCount;
}

/**
 * Gets the longest word of a sentence (string).
 * @param {string} aSentence - The sentence to search the longest word for.
 * @return {string} The longest word in the sentence. If there are multiple words of the same longest length, returns the one with most vowels.
 */
function longestWord(aSentence) {
  // split sentence into words for any punctuation
  const words = aSentence.match(/\b(\w+)\b/g);
  // start by assuming the first index is the longest
  let longestWord = words[0];
  // go through each word in the array (sentence)
  for (let i = 1; i < words.length; i++) {
    const word = words[i];
    //if the length is longer, take it to be the longest
    if (word.length > longestWord.length) {
      longestWord = word;
    } else if (word.length === longestWord.length) {
      //if the length is the same as the longest word, take the one with more vowels as the longest
      if (getWordVowelCount(word) > getWordVowelCount(longestWord)) {
        longestWord = word;
      }
    }
  }
  return longestWord;
}

module.exports = { getWordVowelCount, longestWord };
