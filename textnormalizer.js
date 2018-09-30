function textNormalizer(text) {
  // your code here
  let str = text.toLowerCase();  
  str = str.replace(/^\s*/, "");  /*regexp replace ^(at start) \s(spaces) *(any number), replace with "" */  
  str = str.replace(/\s*$/, "");  /*regexp replace (\s)space *(any amount of) $(at end), to "" */
  return str;
}

/* From here down, you are not expected to 
   understand.... for now :)  
   
   
   Nothing to see here!
   
*/

// tests

function testTextNormalizer() {
  const text = "   let's GO SURFING NOW everyone is learning how   ";
  const expected = "let's go surfing now everyone is learning how";
  if (textNormalizer(text) === expected) {
    console.log('SUCCESS: `textNormalizer` is working');
  } else {
    console.log('FAILURE: `textNormalizer` is not working');
  }
}

testTextNormalizer();
