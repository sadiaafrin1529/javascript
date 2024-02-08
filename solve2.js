function checkName(name){
    
    if (typeof name !== 'string') {
        return "invalid";
      }
      const char= ["a", "y", "i ", "e" , "o" , "u", "w"]
      if (char) {
        return "Good Name";
      } else {
        return "Bad Name";
      }
}


  console.log(checkName("Tonoy")); 
  console.log(checkName("RAFEE")); 
  console.log(checkName("Shanto")); 
  console.log(checkName("Salman"));
  console.log(checkName(123)); 
  console.log(checkName(true)); 