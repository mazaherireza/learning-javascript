import { items } from "./items.js";

const $ = document;
const template = $.createElement("template");

const populateTemplate = () => {
  const wrapper = $.createElement("div");
  items.forEach((item) => {
    const div = $.createElement("div");
    const heading = $.createElement("h4");
    heading.innerHTML = item.title;
    const ul = $.createElement("ul");
    item.subtitles.forEach((subtitle) => {
      const li = $.createElement("li");
      li.innerHTML = subtitle;
      ul.append(li);
    });
    div.append(heading, ul);
    wrapper.append(div);
  });
  return wrapper;
};

template.innerHTML = `
  <link rel="stylesheet" href="../components/the-footer/the-footer.css" />
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
  <footer>
    ${populateTemplate().innerHTML}
    <div>
      <h4>Follow Us</h4>
      <ul class="social-networks">
        <li>
          <i class="fa fa-facebook fa-x"></i>
        </li>

        <li>
          <i class="fa fa-instagram fa-x"></i>
        </li>

        <li>
          <i class="fa fa-linkedin fa-x"></i>
        </li>

        <li>
          <i class="fa fa-twitter fa-x"></i>
        </li>  
      </ul>
    </div>
   </footer>  
`;

class TheFooter extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

export { TheFooter };
