var kthSmallest = (A, k) => {
  var lo = A[0];
  var hi = A[0];

  // find hi and lo
  A.forEach(value => {
    if (value < lo) {
      lo = value;
    } else if (value > hi) {
      hi = value;
    }
  }); 

  while (lo <= hi) {
    var mid = lo + Math.floor((hi - lo)/2);
    var countLess = 0;
    var countEqual = 0;
    A.forEach(value => {
      if (value < mid) {
        countLess++;
      } else if (value === mid) {
        countEqual++;
      }
    });

    if (countLess < k && countLess + countEqual >= k) {
      return mid;
    } else if (countLess >= k) {
      hi = mid - 1;
    } else {
      lo = mid + 1;
    }
  }
  return 'k must be smaller than number of elements in A';
}


var test = kthSmallest([1, 4, 3, 2, 2], 5);
console.log(test);