/*
  Custom element lifecycle callbacks
  ----------------------------------
  Once your custom element is registered, the browser will call certain methods of your class 
  when code in the page interacts with your custom element in certain ways.

  By providing an implementation of these methods, ... lifecycle callbacks, 
  you can run code in response to these events.

  Custom element lifecycle callbacks include:

  connectedCallback(): 
  called each time the element is added to the document. <------------------ **
  ..., as far as possible, developers should implement custom element setup in this callback rather than the constructor.

  disconnectedCallback(): 
  called each time the element is removed from the document.

  adoptedCallback(): 
  called each time the element is moved to a new document.

  attributeChangedCallback(): 
  called when attributes are changed, added, removed, or replaced. 
*/

customElements.define(
  "media-box",
  class MediaBox extends HTMLElement {
    static observedAttributes = ["fullName", "occupation", "avatar"];
    constructor() {
      super();
    }
    connectedCallback() {}
    disconnectedCallback() {}
    adoptedCallback() {}
    attributeChangedCallback(avatar, oldValue, newValue) {
      console.log(`Attribute ${avatar} has changed.`);
    }
  }
);
