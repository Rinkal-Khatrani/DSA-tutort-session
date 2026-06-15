function isValid(s: string): boolean {
  while (s.includes("()") || s.includes("{}") || s.includes("[]")) {
    s = s.replace("()", "").replace("{}", "").replace("[]", "");
  }

  return s.length === 0;
}

// Tests
console.log(isValid("()")); // true
console.log(isValid("()[]{}")); // true
console.log(isValid("(]")); // false
console.log(isValid("([)]")); // false
console.log(isValid("{[]}")); // true
