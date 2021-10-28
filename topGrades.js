var highFive = function(items) {
 let scores = {}
 const scoresArray = []
 for (const [id, score] of items) {
  scores[id] ? scores[id].push(score) : scores[id] = [score];
 }
 Object.entries(scores).forEach(([key, value]) => {
      const grandTotal = value.sort((a,b) => b -a)
      .slice(0,5)
      .reduce((total,curr) => {
        total += curr;
        return total;
      })
      scoresArray.push([key, Math.floor(grandTotal /5)])
 })
 return scoresArray;
//  for (scores of Object.entries(scores)) {
//    const grandTotal = scores.sort((a,b) => b -a)
//    .slice(0,5)
//    .reduce((total, curr) => {
//      total += curr;
//      return total;
//    });
//    scoresArray.push([grandTotal]);
   
//  }
//    console.log(scoresArray);
};

console.log(highFive([[1,91],[1,92],[2,93],[2,97],[1,60],[2,77],[1,65],[1,87],[1,100],[2,100],[2,76]]))

