function checkInclusion(s1: string, s2: string): boolean {
  if (s1.length > s2.length) return false;
  const need = new Array(26).fill(0);
  const window = new Array(26).fill(0);

  // build first window
  for (let i = 0; i < s1.length; i++) {
    need[s1.charCodeAt(i) - 97]++; // c='b'-97 == 98-91 need[1]++
  }
  let k = s1.length;

  for (let i = 0; i < s2.length; i++) {
    window[s2.charCodeAt(i) - 97]++;
    if (i >= k) {
      window[s2.charCodeAt(i - k) - 97]--;
    }
    if (need.join() === window.join()) {
      return true;
    }
  }
  return false;
}

// Tests
console.log(checkInclusion("ab", "eidbaooo")); // true
console.log(checkInclusion("ab", "eidboaoo")); // false
