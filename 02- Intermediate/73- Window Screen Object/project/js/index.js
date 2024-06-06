console.log(screen);

console.log(screen.width); // returns the width of the visitor's screen in pixels.
console.log(screen.availWidth);
// returns the width of the visitor's screen, in pixels, minus interface features like the Windows Taskbar.

console.log(screen.height);
console.log(screen.availHeight);

console.log(screen.colorDepth); // ... read-only property returns the number of bits used to display one color.
console.log(screen.pixelDepth); // returns the pixel depth of the screen.

// If there is not adequate bit depth choose a simpler color.
/*
  document.style.color = screen.pixelDepth > 8 ? "FAEBD7" : "FFFFFF"
*/
