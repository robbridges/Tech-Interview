const solve = (strArg) => {
  return strArg.replace(/[^\w\s]/ig, '').split(' ').filter(char => char !== '');
  
};
console.log(solve("Hi, - how are you; I was quite curious!"))
