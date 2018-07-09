var longestConsecutive = (A) => {
  // build obj
  var nums = {};
  A.forEach(num => {
    nums[num] = true;
  })

  var max = 1;
  // go through A, checking if num is start of subsequence
  A.forEach(num => {
    var prev = num - 1;
    if (!(nums[prev])) {
      var count = 1;
      var next = num + 1;
      while (nums[next]) {
        count++;
        next++;
      }
      if (count > max) {
        max = count;
      }
    }
  });

  return max;
}

var test = longestConsecutive([100, 4, 200, 1, 3, 2]);
console.log(test);