var nextGreater = (A) => {
  var s = [];
  output = [];
  output.length = A.length;
  for (var x = 0; x < A.length; x++) {
    var topOfStack = s[s.length - 1];
    while (s.length !== 0 && A[x] > A[topOfStack]){
      var i = s.pop();
      output[i] = A[x];
      topOfStack = s[s.length - 1];
    }
    s.push(x);
  }
  while (s.length !== 0) {
    var i = s.pop();
    output[i] = -1;
  }
  return output;
}

console.log(nextGreater([4,5,2,10, 2, 5]));