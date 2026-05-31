/**
 * Ranks teams based on the voting results.
 * @param votes An array of strings representing the votes.
 * @returns A string representing the ranked teams.
 */

function rankTeams(votes: string[]): string {
  const n = votes[0].length;

  // 26 letters × n positions, all zeros
  const rankCount: number[][] = Array.from({ length: 26 }, () =>
    new Array(n).fill(0),
  );

  // Step 1: Build rank count array
  for (const vote of votes) {
    for (let pos = 0; pos < vote.length; pos++) {
      const idx = vote[pos].charCodeAt(0) - 65; // 'A'=0, 'B'=1 ...
      rankCount[idx][pos]++;
    }
  }

  // Step 2: Get unique teams from first vote
  const teams = votes[0].split("");

  console.log("teams", teams);

  // Step 3: Sort teams using rankCount
  teams.sort((a, b) => {
    const idxA = a.charCodeAt(0) - 65;
    const idxB = b.charCodeAt(0) - 65;

    for (let pos = 0; pos < n; pos++) {
      if (rankCount[idxA][pos] !== rankCount[idxB][pos]) {
        return rankCount[idxB][pos] - rankCount[idxA][pos]; // higher = better
      }
    }

    // tiebreaker → alphabetical
    return a < b ? -1 : 1;
  });

  return teams.join("");
}

// Tests
console.log(rankTeams(["ABC", "ACB", "ABC", "ACB", "ACB"])); // "ACB"
console.log(rankTeams(["WXYZ", "XYZW"])); // "XWYZ"
console.log(rankTeams(["BCA", "CAB", "CBA", "ABC", "ACB", "BAC"])); // "ABC"
