/**
 * Given an integer rowIndex, return the rowIndexth (0-indexed) row of the Pascal's triangle.
 Example 1:

Input: rowIndex = 3
Output: [1,3,3,1]
Example 2:

Input: rowIndex = 0
Output: [1]
Example 3:

Input: rowIndex = 1
Output: [1,1]
 

Constraints:

0 <= rowIndex <= 33
 */

function getRow(rowIndex: number): number[] {
    const triangle:number[][]=[]
    for(let i=0;i<=rowIndex;i++){
        let currentRow=new Array(i+1).fill(1)

        for(let j=1;j<i;j++){
            const prevRow=triangle[i-1]
            currentRow[j]=prevRow[j-1]+prevRow[j]
        }
        triangle.push(currentRow)
    }
    return triangle[rowIndex]
};

const rowIndex = 3;
console.log(getRow(rowIndex)); // [1,3,3,1]