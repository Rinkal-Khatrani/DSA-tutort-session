function isValid(s: string): boolean {
  const stack: string[] = [];
  const pairs: { [key: string]: string } = {
    "(": ")",
    "[": "]",
    "{": "}",
  };

  for (const ch of s) {
    if (pairs[ch]) {
      stack.push(ch);
    } else {
      const top: string = stack.pop()!;
      if (pairs[top] !== ch) {
        return false;
      }
    }
  }

  return stack.length === 0;
}

// Test cases
const testCases: { input: string; expected: boolean }[] = [
  { input: "()", expected: true },
  { input: "()[]{}", expected: true },
  { input: "(]", expected: false },
  { input: "([)]", expected: false },
  { input: "{[]}", expected: true },
];
