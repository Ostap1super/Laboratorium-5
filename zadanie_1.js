function fibonacci(n) {
  const fibArray = [0, 1];

  for (let i = 2; i <= n; i++) {
    fibArray[i] = fibArray[i - 1] + fibArray[i - 2];
  }

  return fibArray[n];
}

const n = 10; 
const result = fibonacci(n);
console.log(`Element o indeksie ${n} w ciągu Fibonacciego to: ${result}`);