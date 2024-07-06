const $ = document;
const template = $.createElement("template");

template.innerHTML = `
  <link rel="stylesheet" href="components/user-media/user-media.css" />
  <div class="user-container">
    <div>
      <h5>Reza Mazaheri</h5>
      <h6>Frontend Developer</h6>
    </div>
    <img src="components/user-media/assets/Reza_Mazaheri.png" alt="Reza Mazaheri" />
  </div>
`;

class UserMedia extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({
      mode: "open",
    });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

export { UserMedia };
