/** Given an integer numRows, return the first numRows of Pascal's triangle.

Example 1:

Input: numRows = 5
Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
Example 2:

Input: numRows = 1
Output: [[1]]
*/

function generate(numRows: number): number[][] {
    const triangle: number[][] = [];

    for (let row = 0; row < numRows; row++) {
        const currentRow: number[] = new Array(row + 1).fill(1);

        // Fill inner elements (skip first and last — they stay 1)
        for (let col = 1; col < row; col++) {
            const prevRow = triangle[row - 1];
            currentRow[col] = prevRow[col - 1] + prevRow[col];
        }

        triangle.push(currentRow);
    }

    return triangle;
};

const numRows = 5;
console.log("--- Pascal's Triangle ---");
console.log(generate(numRows)); // [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]