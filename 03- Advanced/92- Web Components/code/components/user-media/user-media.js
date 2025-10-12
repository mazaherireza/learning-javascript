const $ = document;

const template = $.createElement("template");

template.innerHTML = `
  <link rel="stylesheet" href="/components/user-media/user-media.css" />
  <div class="user-container">
    <div>
      <h5></h5>
      <slot name="occupation"></slot>
      <button>Delete</button>
    </div>
    <img src="/components/user-media/assets/reza-mazaheri.png" alt="" />
  </div>
`;

class UserMedia extends HTMLElement {
  static observedAttributes = ["fullname"];

  constructor() {
    super();
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({
      mode: "open",
    });

    shadowRoot.appendChild(template.content.cloneNode(true));

    const fullname = this.getAttribute("fullname");

    const h5 = shadowRoot.querySelector("h5");
    h5.innerHTML = fullname;

    const button = shadowRoot.querySelector("button");

    button.onclick = () => {
      this.remove();
    };
  }

  disconnectedCallback() {
    console.log("RIP");
  }
}

export { UserMedia };
