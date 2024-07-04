const VOWEL_SOUNDS = ["a", "e", "i", "o", "u"];

const indefiniteArticle = (word) => {
  const firstChar = word[0];
  if (VOWEL_SOUNDS.includes(firstChar.toLowerCase())) {
    return "an";
  }
  return "a";
};

export { indefiniteArticle };
