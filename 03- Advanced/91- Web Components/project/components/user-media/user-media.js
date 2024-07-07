const $ = document;
const template = $.createElement("template");

template.innerHTML = `
  <link rel="stylesheet" href="components/user-media/user-media.css" />
  <div class="user-container">
    <div>
      <slot name="fullname"></slot>
      <slot name="occupation"></slot>
      <button>Delete</button>
    </div>
    <img src="components/user-media/assets/Reza_Mazaheri.png" alt="Reza Mazaheri" />
  </div>
`;

class UserMedia extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    // Invoked each time the custom element is appended into a document-connected element.
    console.log("Connected.");
    const shadowRoot = this.attachShadow({
      mode: "open",
    });
    shadowRoot.appendChild(template.content.cloneNode(true));
    const btn = shadowRoot.querySelector("button");
    btn.onclick = () => {
      this.remove();
    };
  }

  disconnectedCallback() {
    console.log("RIP");
  }
}

export { UserMedia };
