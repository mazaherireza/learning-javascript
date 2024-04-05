const text = "LevEl".toLowerCase();
const reversedText = text.split("").reverse().join("");

if (text == reversedText) {
  console.log("Is Palindrome.");
} else {
  console.log("Isn't Palindrome.");
}
