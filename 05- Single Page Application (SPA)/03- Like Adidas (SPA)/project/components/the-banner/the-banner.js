const $ = document;
const template = $.createElement("template");

const populateTemplate = () => {
  return `
    <link rel="stylesheet" href="components/the-banner/the-banner.css" /> 
    <div class="banner">
      <picture>
        <source media="(min-width: 768px)" srcset="components/the-banner/assets/The_Banner.png">
        <img src="components/the-banner/assets/Ian_Jackson.png" alt="Banner">
      </picture>
      <div class="content">
        <slot name="title"></slot>
        <slot name="paragraph"></slot>
      </div>
    </div>
    `;
};

template.innerHTML = populateTemplate();

class TheBanner extends HTMLElement {
  static observedAttributes = ["img"];
  constructor() {
    super();
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

export { TheBanner };
