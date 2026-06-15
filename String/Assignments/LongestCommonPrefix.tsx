function longestCommonPrefix(strs: string[]): string {
  if (strs.length === 0) return "";
  let prefix = strs[0]; // assume first string is prefix
  for (let i = 0; i < strs.length; i++) {
    // shrink prefix until it matches start of current string
    while (!strs[i].startsWith(prefix)) {
      prefix = prefix.slice(0, prefix.length - 1);
      if (prefix === "") return "";
    }
  }
  return prefix;
}

// Tests
console.log(longestCommonPrefix(["flower", "flow", "flight"])); // "fl"
console.log(longestCommonPrefix(["dog", "racecar", "car"])); // ""
console.log(longestCommonPrefix(["interview", "intermediate", "internal"])); // "inter"
console.log(longestCommonPrefix([""])); // ""
console.log(longestCommonPrefix(["a"])); // "a"
console.log(longestCommonPrefix(["ab", "a"])); // "a"
