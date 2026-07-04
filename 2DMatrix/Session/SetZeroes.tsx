function setZeroes(matrix: number[][]): void {
  const rows = matrix.length;
  const cols = matrix[0].length;

  let firstRowHasZero = matrix[0].includes(0);
  let firstColHasZero = matrix.some((row) => row[0] === 0);

  for (let i = 1; i < rows; i++) {
    for (let j = 1; j < cols; j++) {
      if (matrix[i][j] === 0) {
        matrix[i][0] = 0;
        matrix[0][j] = 0;
      }
    }
  }

  for (let i = 1; i < rows; i++) {
    for (let j = 1; j < cols; j++) {
      if (matrix[i][0] === 0 || matrix[0][j] === 0) {
        matrix[i][j] = 0;
      }
    }
  }

  if (firstRowHasZero) {
    matrix[0].fill(0);
  }
  if (firstColHasZero) {
    for (let i = 0; i < rows; i++) matrix[i][0] = 0;
  }
}

// Tests
const matrix1 = [
  [1, 1, 1],
  [1, 0, 1],
  [1, 1, 1],
];
setZeroes(matrix1);
console.log(matrix1); // [[1,0,1],[0,0,0],[1,0,1]]

const matrix2 = [
  [0, 1, 2, 0],
  [3, 4, 5, 2],
  [1, 3, 1, 5],
];
setZeroes(matrix2);
console.log(matrix2); // [[0,0,0,0],[0,4,5,0],[0,3,1,0]]
