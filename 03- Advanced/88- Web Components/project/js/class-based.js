const $ = document;
const template = $.createElement("template");

template.innerHTML = `
  <link rel="stylesheet" href="./style/user-media.css" />
  <h5>Reza Mazaheri</h5>
`;

customElements.define(
  "user-media",
  class UserMedia extends HTMLElement {
    constructor() {
      super();
      // console.log(this);
      this.attachShadow({
        mode: "open",
      });
      this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
  }
);
