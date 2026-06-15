function longestPalindrome(s: string): string {
  let start = 0;
  let maxLen = 1;

  function expand(left: number, right: number): void {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      left--;
      right++;
    }
    // left and right are now ONE step outside the palindrome
    // so actual palindrome is from left+1 to right-1
    const len = right - left - 1;
    if (len > maxLen) {
      maxLen = len;
      start = left + 1;
    }
  }

  for (let i = 0; i < s.length; i++) {
    expand(i, i); // odd  → "aba"
    expand(i, i + 1); // even → "abba"
  }

  return s.substring(start, start + maxLen);
}

// Tests
console.log(longestPalindrome("babad")); // "aba" or "bab"
console.log(longestPalindrome("cbbd")); // "bb"
console.log(longestPalindrome("a")); // "a"
console.log(longestPalindrome("ac")); // "a" or "c"
