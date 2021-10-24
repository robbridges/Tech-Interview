var maxProfit = function(prices) {
  let min = Number.MAX_SAFE_INTEGER;
  let max = 0;
  for (let i = 0; i < prices.length; i ++) {
    // we are checking every value to constantly be reducing min
    // if prices[i] is less than min we move it lower than min.
    // for instance [7,1,5,6,4] first interation puts min at 7
    // second at 1, and it never goes lower than one. 
    min = Math.min(min, prices[i]);
    // for instance [7,1,5,6,4] first interation puts min at 7
    // we are defining max the same, on the first iteration max is 7 as is min
    // so the profit would be 0
    // On second iteration min becomes 1, yet the profit of buying and selling
    // can't be done on the same day, so we buy on this day.
    // the next day the price is 5, we already know that we bought at min, and if sold today
    // max would be come 4, so far the current max, let we refine it 5 a few iterations later
    
    max = Math.max(max,prices[i] - min);
  }
  return max;
};