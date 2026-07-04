function combinationSum(candidates: number[], target: number): number[][] {
  const ans: number[][] = [];

  const getAllCombination = (idx: number, target: number, combin: number[]) => {
    if (target === 0) {
      ans.push([...combin]);
      return;
    }

    if (idx === candidates.length || target < 0) {
      return;
    }

    // Include current element
    combin.push(candidates[idx]);
    getAllCombination(idx, target - candidates[idx], combin);

    // Backtrack
    combin.pop();

    // Exclude current element
    getAllCombination(idx + 1, target, combin);
  };

  getAllCombination(0, target, []);

  return ans;
}

// Test cases
const candidates1 = [2, 3, 6, 7];
const target1 = 7;
console.log(combinationSum(candidates1, target1)); // [[2, 2, 3], [7]]

const candidates2 = [2, 3, 5];
const target2 = 8;
console.log(combinationSum(candidates2, target2)); // [[2, 2, 2, 2], [2, 3, 3], [3, 5]]
