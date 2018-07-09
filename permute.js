var permute = (A) => {
  var output = [];
  var recurse = (nums, curr) => {
    if (nums.length === 0) {
      output.push(curr);
    }

    var visitedNums = {};
    nums.forEach((num, i) => {
      if (!visitedNums[num]) {
        visitedNums[num] = true;
        var newPermutation = curr.slice();
        newPermutation.push(num);
        var newNums = nums.slice(0, i).concat(nums.slice(i+1));
        recurse(newNums, newPermutation);  
      }
    })
  }

  recurse(A, []);
  return output;
}


var test = permute([1,1,2]);
console.log(test);