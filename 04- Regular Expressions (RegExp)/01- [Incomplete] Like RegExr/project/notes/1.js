/*
  JavaScript Regular Expressions
  ------------------------------
  A regular expression is a sequence of characters that forms a search pattern.
  When you search for data in a text, you can use this search pattern to describe what you are searching for.

  Regular expressions can be used to perform all types of text search and text replace operations.

  /pattern/modifiers;

  The search() method uses an expression to search for a match, and returns the position of the match.
  The replace() method returns a modified string where the pattern is replaced.
*/

const text = "Visit W3Schools";
const index = text.search(/W3schools/i);
console.log(index);

const passage = "I learn and build";
const newPassege = passage.replace(/and/i, "&");
console.log(newPassege);

/*
  Regular Expression Modifiers
  ----------------------------
  ... i, g, m, d.
  [Incomplete]

  Regular Expression Patterns
  ---------------------------
  Brackets are used to find a range of characters
 [abc]
 [0-9]
 (x|y)

 Metacharacters are characters with a special meaning
 ----------------------------------------------------
 \d Find a digit
 \s Find a whitespace character <---------------- **
 \b Find a match at the beginning of a word like this: \bWORD, or at the end of a word like this: WORD\b

 Quantifiers define quantities
 -----------------------------
 n+ Matches any string that contains at least one n
 n* Matches any string that contains zero or more occurrences of n
 n? Matches any string that contains zero or one occurrences of n

*/

/*
  Using test()
  -------------
  The test() method is a RegExp expression method.
  It searches a string for a pattern, and returns true or false, depending on the result.

  pattern.test("Something"); 
*/

/*
  Using exec()
  ------------
  The exec() method is a RegExp expression method.
  It searches a string for a specified pattern, and returns the found text as an object.
  If no match is found, it returns an empty (null) object.
*/
