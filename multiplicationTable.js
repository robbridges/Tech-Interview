const solve = (n) => {
  const table = [];
  
  for(let i = 1; i <= n; i++) {
    let row = []; 
    for(let j = 1; j <= n; j++) {
      row.push(i * j);
    }  
    table.push(row)
  }
  
  return table;
};

console.log(solve(4));