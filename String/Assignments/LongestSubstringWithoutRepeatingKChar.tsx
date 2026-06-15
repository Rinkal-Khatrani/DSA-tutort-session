function lengthOfLongestSubstringString(s: string): number {
  let current = "";
  let maxLength = 0;

  for (const char of s) {
    const index = current.indexOf(char);

    if (index !== -1) {
      current = current.slice(index + 1);
    }

    current += char;
    maxLength = Math.max(maxLength, current.length);
  }

  return maxLength;
}

// Tests
console.log(lengthOfLongestSubstringMap("abcabcbb")); // 3
console.log(lengthOfLongestSubstringMap("bbbbb")); // 1
console.log(lengthOfLongestSubstringMap("pwwkew")); // 3
console.log(lengthOfLongestSubstringMap("")); // 0
