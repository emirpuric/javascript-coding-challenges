function solution(K, A) {
  const LIMIT = 1000000000;
  const maxDeque = [];
  const minDeque = [];
  let maxHead = 0;
  let minHead = 0;
  let left = 0;
  let count = 0;

  for (let right = 0; right < A.length; right++) {
    while (maxHead < maxDeque.length && A[maxDeque[maxDeque.length - 1]] <= A[right]) {
      maxDeque.pop();
    }
    maxDeque.push(right);

    while (minHead < minDeque.length && A[minDeque[minDeque.length - 1]] >= A[right]) {
      minDeque.pop();
    }
    minDeque.push(right);

    while (A[maxDeque[maxHead]] - A[minDeque[minHead]] > K) {
      left += 1;
      if (maxDeque[maxHead] < left) maxHead += 1;
      if (minDeque[minHead] < left) minHead += 1;
    }

    count += right - left + 1;
    if (count >= LIMIT) return LIMIT;
  }

  return count;
}

console.log(solution(2, [3, 5, 7, 6, 3]));
console.log(solution(0, [1, 2, 1]));
