function largestOfFour(arr) {
  var results = [];
  for (i = 0; i < arr.length; i++){
    var largestNumber = arr[i][0];
  for (j = 0; j < arr[i].length; j++){
    if (arr[i][j] > largestNumber){
      largestNumber = arr[i][j];
    }
  }
    results[i] = largestNumber;
  }
  return results;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
