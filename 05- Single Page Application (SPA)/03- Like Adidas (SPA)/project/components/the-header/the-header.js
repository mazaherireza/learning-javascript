const $ = document;
const template = $.createElement("template");

template.innerHTML = `
  <link rel="stylesheet" href="../components/the-header/the-header.css" />
  <div class="wrapper">
    <div class="ups-wrapper">FREE STANDARD SHIPPING WITH ADICLUB</div>
    <header>
      <nav>
          <img src="../components/the-header/assets/Logo.svg" alt="Adidas" />
          <div>
            <a href="/" class="nav-link">HOME</a>
            <a href="/men" class="nav-link">MEN</a>
            <a href="/women" class="nav-link">WOMEN</a>
            <a href="/kids" class="nav-link">KIDS</a>
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
