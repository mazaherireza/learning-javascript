const $ = document;
const template = $.createElement("template");

const populateTemplate = () => {
  return `
      <link rel="stylesheet" href="components/the-product/the-product.css" />
      <div class="wrapper">
        <img />
        <span id="price"></span>
      </div>
    `;
};
template.innerHTML = populateTemplate();

class TheProduct extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.appendChild(template.content.cloneNode(true));

    const img = shadowRoot.querySelector("img");
    img.setAttribute("src", this.getAttribute("img"));

    const price = shadowRoot.querySelector("#price")
    price.innerHTML = this.getAttribute("price")
  }
}

export { TheProduct };
