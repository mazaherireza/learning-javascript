/*
  Registering a custom element
  ----------------------------
  To make a custom element available in a page, call the define() method of Window.customElements.
  
  The define() method takes the following arguments:

  name
  The name of the element. 
  This must start with a lowercase letter, contain a hyphen, ...

  constructor
  The custom element's constructor function.

  options
  Only included for customized built-in elements, <--------------- **
  this is an object containing a single property extends, which is a string naming the built-in element to extend.
*/

customElements.define("word-count", WordCount, { extends: "p" });

/*
  Using a custom element
  ----------------------
  Once you've defined and registered a custom element, you can use it in your code.
  
  To use a customized built-in element, 
  use the built-in element but with the custom name as the value of the "is" attribute: 
  <p is="word-count"></p>

  To use an autonomous custom element, use the custom name just like a built-in HTML element:
  <media-box></media-box>
*/
