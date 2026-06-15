function numDecodings(s: string): number {
  const memo = new Map<number, number>();

  function dfs(i: number): number {
    if (i === s.length) return 1;
    if (s[i] === "0") return 0;

    if (memo.has(i)) return memo.get(i)!;

    let ways = dfs(i + 1);

    if (i + 1 < s.length && parseInt(s.substring(i, i + 2)) <= 26) {
      ways += dfs(i + 2);
    }

    memo.set(i, ways);
    return ways;
  }

  return dfs(0);
}

// Tests
console.log(numDecodings("12"));
console.log(numDecodings("226"));
console.log(numDecodings("0"));
console.log(numDecodings("06"));
