const $ = document;
const template = $.createElement("template");

template.innerHTML = `
  <link rel="stylesheet" href="components/the-header/the-header.css" />
  <header>
    <h2></h2>
  </header>  
`;

class TheHeader extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.appendChild(template.content.cloneNode(true));
    const heading = this.shadowRoot.querySelector("h2");
    heading.innerHTML = this.getAttribute("title");
  }
}

export { TheHeader };
