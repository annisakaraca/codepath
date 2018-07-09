var numRange = (A, B, C) => {
  var count = 0;
  for (var start = 0; start < A.length; start++) {
    var end = start;
    var currSum = A[start];
    while (currSum <= C) {
      if (currSum >= B) {
        count++;
      }
      end++;
      currSum += A[end];
    }
  }
  return count;
}

var test = numRange([10, 5, 1, 0, 2], 0, 3);
console.log(test);