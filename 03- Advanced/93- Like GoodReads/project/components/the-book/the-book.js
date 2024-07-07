const $ = document;
const template = $.createElement("template");

template.innerHTML = `
  <link rel="stylesheet" href="components/the-book/the-book.css" />
  <div class="book-container">
    <img alt="Book" />
    <slot name="title"></slot>
    <slot name="author"></slot>
    <div class="details">
      <button>Show Rate</button>
      <div class="rate">
        <slot name="rate"></slot>
      </div>
    </div>
  </div>
`;

class TheBook extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.appendChild(template.content.cloneNode(true));

    const img = shadowRoot.querySelector("img");
    img.setAttribute("src", this.getAttribute("img"));

    const btn = shadowRoot.querySelector(".details button");
    let isVisible = false;
    btn.onclick = () => {
      const rate = shadowRoot.querySelector(".rate");
      isVisible = !isVisible;
      if (isVisible) {
        btn.innerHTML = "Hide Rate";
        rate.style.display = "inline";
      } else {
        btn.innerHTML = "Show Rate";
        rate.style.display = "none";
      }
    };
  }
}

export { TheBook };
