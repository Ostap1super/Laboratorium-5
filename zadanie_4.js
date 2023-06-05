function calculateBinomialCoefficient(m, n) {
  const memo = [];

  for (let i = 0; i <= m; i++) {
    memo[i] = [];
    for (let j = 0; j <= n; j++) {
      if (j === 0 || j === i) {
        memo[i][j] = 1;
      } else {
        memo[i][j] = memo[i - 1][j - 1] + memo[i - 1][j];
      }
    }
  }

  return memo[m][n];
}

const m = 5;
const n = 3;
const result = calculateBinomialCoefficient(m, n);
console.log(`Współczynnik dwumianowy C(${m}, ${n}) wynosi: ${result}`);