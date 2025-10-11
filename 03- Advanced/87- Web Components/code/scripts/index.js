// To make a custom element available in a page. <------------ *
customElements.define(
  "user-media",
  class UserMedia extends HTMLElement {
    constructor() {
      /*
        custom element constructors must call super() first ...
        ... so that the correct prototype chain is established. <------------ *
      */
      super();

      console.log("Custom Element Created!");

      this.innerHTML = `
      <style>
        h5 {
          inline-size: 50%;

          border: 1px solid black;
          border-radius: 0.25rem;

          margin-inline: auto;
          padding: 1rem;
          
          text-align: center;
        }
      </style>
      <h5>Reza Mazaheri</h5>`;
    }
  }
);
