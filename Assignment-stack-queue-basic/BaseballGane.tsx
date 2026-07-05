function calPoints(operations: string[]): number {
  const recordStack: number[] = [];

  for (const op of operations) {
    switch (op) {
      case "+":
        recordStack.push(
          recordStack[recordStack.length - 1] +
            recordStack[recordStack.length - 2],
        );
        break;

      case "D":
        recordStack.push(recordStack[recordStack.length - 1] * 2);
        break;

      case "C":
        recordStack.pop();
        break;

      default:
        recordStack.push(Number(op));
    }
  }

  return recordStack.reduce((sum, score) => sum + score, 0);
}

// Test cases
const testCasesw: { input: string[]; expected: number }[] = [
  { input: ["5", "2", "C", "D", "+"], expected: 30 },
  { input: ["5", "-2", "4", "C", "D", "9", "+", "+"], expected: 27 },
  { input: ["1"], expected: 1 },
];

for (const { input, expected } of testCasesw) {
  const result = calPoints(input);
  console.log(
    `Input: ${JSON.stringify(input)}, Expected: ${expected}, Result: ${result}`,
  );
}
