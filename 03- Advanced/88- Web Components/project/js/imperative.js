const $ = document;
// ... use the "host" element as the shadow host.
const host = $.querySelector("#host");
// ... call attachShadow() on the host to create the shadow DOM.
const shadowRoot = host.attachShadow({ mode: "open" });

const span = $.createElement("span");
span.textContent = "Reza Mazaheri";

const stylesheet = new CSSStyleSheet();
stylesheet.replaceSync("span { font-size: small; font-weight: bold;}");
shadowRoot.adoptedStyleSheets = [stylesheet];

shadowRoot.appendChild(span);

const spans = shadowRoot.querySelectorAll("span");
console.log(spans);
