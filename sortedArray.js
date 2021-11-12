

const solve = (arrOne, arrTwo) => {
  let m = arrOne.length;
  let n = arrTwo.length;
  arrOne.length = m + n;
  let insertPos = m + n - 1;
  
  m--;
  n--;
  while ( n >= 0) {
    arrOne[insertPos--] = (arrOne[m] > arrTwo[n]) ? arrOne[m--] : arrTwo[n--];
  }
  return arrOne;
};

var merge = function (nums1, m, nums2, n) {
  // start adding them to the end of the array, combining m and n and -1 for the correct index
  var insertPos = m + n - 1;
  // decrement m and n so that we can reach their index position, basically turning the length into an workable array index
  m--; 
  n--;
  // we only need to keep going until n is greater than or equal to zero, filling in the zeroes from merge
  // now it's just a comparison operation making sure 
  while (n >= 0) {
      nums1[insertPos--] = (nums1[m] > nums2[n]) ? nums1[m--] : nums2[n--];
  }
  
};

console.log(solve([1, 10, 20], [2, 3, 15]));
