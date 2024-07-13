const $ = document;
const template = $.createElement("template");

template.innerHTML = `
  <link rel="stylesheet" href="components/the-header/the-header.css" />
  <div class="wrapper">
    <div class="ups-wrapper">FREE STANDARD SHIPPING WITH ADICLUB</div>
    <header>
      <nav>
        <img src="components/the-header/assets/Logo.svg" alt="Adidas" />
          <div>
            <a href="../../men.html">MEN</a>
            <a href="../../women.html">WOMEN</a>
            <a href="../../kids.html">KIDS</a>
        </div>  
      </nav>
    </header>
  </div>
`;

class TheHeader extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

export { TheHeader };
