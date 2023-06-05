function calculateS(n) {
  const memo = []; 

  memo[0] = 1;
  memo[1] = 1;

  for (let i = 2; i <= n; i++) {
    memo[i] = 2 * memo[i - 1] - memo[i - 2];
  }

  return memo[n];
}

const n = 5;
const result = calculateS(n);
console.log(`N-ty wyraz ciągu S(${n}) wynosi: ${result}`);