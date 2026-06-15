const lengthOfLongestSubstring = (s: string): number => {
  const seen = new Set<string>();
  let left = 0;
  let maxLen = 0;

  for (let right = 0; right < s.length; right++) {
    // shrink window until no duplicate
    while (seen.has(s[right])) {
      seen.delete(s[left]);
      left++;
    }

    seen.add(s[right]);
    maxLen = Math.max(maxLen, right - left + 1);
  }

  return maxLen;
};

// with map
function lengthOfLongestSubstringMap(s: string): number {
  const map = new Map<string, number>(); // char → last seen index
  let maxLength = 0;
  let left = 0; // window start

  for (let right = 0; right < s.length; right++) {
    const char = s[right];

    // if char already in window, move left pointer
    if (map.has(char) && map.get(char)! >= left) {
      left = map.get(char)! + 1;
    }

    map.set(char, right); // update last seen index
    maxLength = Math.max(maxLength, right - left + 1); // update max
  }

  return maxLength;
}

// Tests
console.log(lengthOfLongestSubstring("abcabcbb")); // 3
console.log(lengthOfLongestSubstring("bbbbb")); // 1
console.log(lengthOfLongestSubstring("pwwkew")); // 3
console.log(lengthOfLongestSubstring("")); // 0
