const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const charCount1 = countCharacters(s1);
  const charCount2 = countCharacters(s2);

  let commonCount = 0;

  for (let char in charCount1) {
    if (charCount2.hasOwnProperty(char)) {
      commonCount += Math.min(charCount1[char], charCount2[char]);
    }
  }

  return commonCount;
}

function countCharacters(s) {
  const charCount = {};

  for (let char of s) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  return charCount;
}

module.exports = {
  getCommonCharacterCount,
};
