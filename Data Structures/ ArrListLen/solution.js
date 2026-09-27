function solution(A) {
  let length = 0;
  let index = 0;

  while (index !== -1) {
    length += 1;
    index = A[index];
  }

  return length;
}

console.log(solution([1, 4, -1, 3, 2]));
console.log(solution([-1]));
