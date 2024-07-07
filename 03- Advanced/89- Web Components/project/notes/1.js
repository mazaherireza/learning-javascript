/*
  Shadow DOM and custom elements
  ------------------------------
  Without the encapsulation provided by shadow DOM, ... 
  It would be too easy for a page to accidentally break 
  a custom element's behavior or layout by running some page JavaScript or CSS.

  Custom elements are implemented as a class which extends either the base HTMLElement or a built-in HTML element ...
  Typically, the custom element itself is a shadow host, ... <---------- **
*/

customElements.define(
  "img-slider",
  class ImgSlider extends HTMLElement {
    constructor() {
      super();
    }
    connectedCallback() {
      // Create a shadow root, the custom element itself is the shadow host.
      const shadowRoot = this.attachShadow({ mode: "open" });
      // ...
      shadowRoot.appendChild();
    }
  }
);
