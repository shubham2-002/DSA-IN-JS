var removeOuterParentheses = function(s) {
  let res = ""
  let count = 0;
  
  for(let i =0;i<s.length;i++){
      if(s.charAt(i)=='('&&count++>0)

          res += s.charAt(i)
      
       if(s.charAt(i)==')'&&count-->0)

          res += s.charAt(i)
           
  }
  s = res;
      return s
}
let s ="(()())(())"
console.log(removeOuterParentheses(s))