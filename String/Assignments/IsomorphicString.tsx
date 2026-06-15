function isIsomorphic(s: string, t: string): boolean {
  if (s.length !== t.length) return false;

  const sToT = new Map<string, string>();
  const tToS = new Map<string, string>();

  for (let i = 0; i < s.length; i++) {
    const chS = s[i];
    const chT = t[i];

    if (sToT.has(chS) && sToT.get(chS) !== chT) {
      return false;
    }

    if (tToS.has(chT) && tToS.get(chT) !== chS) {
      return false;
    }

    sToT.set(chS, chT);
    tToS.set(chT, chS);
  }

  return true;
}

// Tests
console.log(isIsomorphic("egg", "add")); // true
console.log(isIsomorphic("foo", "bar")); // false
console.log(isIsomorphic("paper", "title")); // true
