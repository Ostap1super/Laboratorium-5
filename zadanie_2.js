function calculateP(i, j) {
  const memo = []; 
  memo[0] = [];
  memo[0][0] = 0;
  for (let x = 1; x <= i; x++) {
    memo[x] = []; 
    for (let y = 1; y <= j; y++) {
      memo[x][y] = memo[x - 1][y] + memo[x][y - 1] + 2;
    }
  }
  return memo[i][j];
}
const i = 3;
const j = 4;
const result = calculateP(i, j);
console.log(`Wartość P(${i}, ${j}) wynosi: ${result}`);