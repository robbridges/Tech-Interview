var isValid = function(s) {   
  const stack = [];
  
  for (let i = 0 ; i < s.length ; i++) {
      console.log(stack);
      let c = s.charAt(i);
      switch(c) {
          case '(': stack.push(')'); // found, we push to the stack ')'
              break;
          case '[': stack.push(']');
              break;
          case '{': stack.push('}');
              break;
          default:
              if (c !== stack.pop()) { // second char is the closing bracket, it does equal the pop method
                  return false;
              }
      }
      
  }

  
  
  return stack.length === 0;
};

console.log(isValid("(])"));
//([{[()]}])
// first we go through each char, first met is '(' so we push ')' onto the stack. Our stack is now [')'];
//second we come to the '[' char, it pushes on to the stack ']', onto the stack, the stack is now [')' ']'];
// third we come acrros the '{' char, it pushes to the stack '}' onto the stack, the stack is now [')' ']' '}'];
// fourth we come across the '[' char again, it again pushes on the stack ']' the stack is now [')' ']' '}' ']'];
// firth we come acrross the '(' char again, it pushes onto the stack ')' the stack is now [')' ']' '}' ']' ')'];
// sixth we finally reach our first closing bracket, it is ), which matches the last element of the stack, stack is now [')' ']' '}' ']'];
// seven we reach ] it matches what is the last element on the 
//third we reach the char ] it is not an opener, so we run our default case, and check that char === stack.pop, so ] === ]; we return true and move on stack is now back to [')'];
//final character is ), it is not an opener, so we run our default case and make sure that it equals the last (and only in this case)
