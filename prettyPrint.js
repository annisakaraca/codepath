var prettyPrint = (A) => {
  if (A === 1) {
    return [[1]];
  }
  var square = prettyPrint(A-1);
  var length = square[0].length + 2;
  var top = [];
  var bottom = [];
  for (var x = 0; x < length; x++) {
    top.push(A);
    bottom.push(A);
  }
  square.unshift(top);
  square.push(bottom);
  for (var y = 1; y < square.length - 1; y++) {
    square[y].unshift(A);
    square[y].push(A);
  }
  return square;
}
