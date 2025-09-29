console.log(screen);

// returns the width of the visitor's screen in pixels.
console.log(screen.width);

// returns the width of the visitor's screen, in pixels, minus interface features like the Windows Taskbar.
console.log(screen.availWidth);

console.log(screen.height);
console.log(screen.availHeight);

// ... read-only property returns the number of bits used to display one color.
console.log(screen.colorDepth);

// returns the pixel depth of the screen.
console.log(screen.pixelDepth);

// If there is not adequate bit depth choose a simpler color.
/*
  document.style.color = screen.pixelDepth > 8 ? "FAEBD7" : "FFFFFF"
*/
