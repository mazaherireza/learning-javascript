/*
  Web components
  ==============
  Using custom elements
  ---------------------
  One of the key features of web components is the ability to create custom elements: <----------- ***
  that is, HTML elements whose behavior is defined by the web developer, 
  that extend the set of elements available in the browser.
  
  Types of custom element
  -----------------------
  There are 2 types of custom element:

  1) "Customized built-in elements" 
  inherit from standard HTML elements such as "HTMLImageElement" or "HTMLParagraphElement". <--------- *

  2) "Autonomous custom elements" 
  inherit from the HTML element base class "HTMLElement". <---------- *
  You have to implement their behavior from scratch.
*/

/*
  Implementing a custom element <------------- *
  -----------------------------
  A custom element is implemented as a class which extends HTMLElement (in the case of autonomous elements) 
  or the interface you want to customize (in the case of customized built-in elements).

  ... customizes the <p> element:
*/

class WordCount extends HTMLParagraphElement {
  constructor() {
    super();
  }
}

/*
  In the class constructor, you can set up initial state and default values, 
  register event listeners and perhaps create a shadow root. <--------------------- ***
*/
