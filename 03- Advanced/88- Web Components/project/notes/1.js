/*
  Using shadow DOM
  ================
  An important aspect of custom elements is encapsulation, <------------- *
  because a custom element, is a piece of reusable functionality: 
  it might be dropped into any web page and be expected to work. 
  So it's important that code running in the page should not be able to accidentally break a custom element 
  by modifying its internal implementation. 
  
  Shadow DOM enables you to attach a DOM tree to an element, <----------- ***
  and have the internals of this tree hidden from JavaScript and CSS running in the page.
*/

/*
  DOM (Document Object Model)
  ---------------------------
  A tree-like structure of connected nodes that represents the different elements and strings of text 
  appearing in a markup document.

  Shadow DOM allows hidden DOM trees to be attached to elements in the regular DOM tree — 
  this shadow DOM tree starts with a shadow root, underneath which you can attach any element, 
  in the same way as the normal DOM.

  There are some bits of shadow DOM terminology to be aware of:
  Shadow host: The regular DOM node that the shadow DOM is attached to.
  Shadow tree: The DOM tree inside the shadow DOM.
  Shadow boundary: the place where the shadow DOM ends, and the regular DOM begins.
  Shadow root: The root node of the shadow tree.

  You can affect the nodes in the shadow DOM in exactly the same way as non-shadow nodes
  for example appending children or setting attributes, styling individual nodes using element.style.foo, 
  or adding style to the entire shadow DOM tree inside a <style> element.

  The difference is that none of the code inside a shadow DOM can affect anything outside it, <--------- ***
  allowing for handy encapsulation.
*/

/*
  Creating a shadow DOM
  ---------------------
  1) Imperatively with JavaScript 

  <div id="host"></div>

  We're going to use the "host" element as the shadow host. <-------------- *
  We call attachShadow() on the host to create the shadow DOM, 
  and can then add nodes to the shadow DOM just like we would to the main DOM.
*/

const $ = document;
const host = $.querySelector("#host");
const shadow = host.attachShadow({ mode: "open" });
const span = $.createElement("span");
span.innerText = "In Shadow DOM";
shadow.appendChild(span);

/*
  2) Declaratively with HTML

  Creating a shadow DOM via JavaScript API might be a good option for client-side rendered applications.
  ...
  ..., you can use the <template> element to declaratively define the shadow DOM. 
  
  The key to this behavior is the enumerated shadowrootmode attribute, <----------------- **
  which can be set to either open or closed, the same values as the mode option of attachShadow() method.
  
  <div id="host">
    <template shadowrootmode="open">
      <span>In Shadow DOM</span>
    ...

  By default, contents of <template> are not displayed. <------------- *
  In this case, because the shadowrootmode="open" was included, the shadow root is rendered.  

  After the browser parses the HTML, it replaces <template> element with 
  its content wrapped in a shadow root that's attached to the parent element, the <div id="host"> in our example.
*/

/*
  Encapsulation from JavaScript
  -----------------------------
  ... document.querySelectorAll() doesn't find the elements in our shadow DOM: <----------- ***
  they are effectively hidden from JavaScript in the page.
*/

/*
  Element.shadowRoot and the "mode" option
  ----------------------------------------
  ... we pass an argument { mode: "open" } to attachShadow(). 
  With mode set to "open", the JavaScript in the page is able to access the internals of your shadow DOM 
  through the shadowRoot property of the shadow host. <---------------- ***
  ...
  ... uses shadowRoot to find the <span> elements in the DOM:
*/

const upper = $.querySelector("button#upper");
upper.onclick = () => {
  // What about shadow.querySelectorAll("span") ?!
  const spans = Array.from(host.shadowRoot.querySelectorAll("span"));
  for (const span of spans) span.textContent = span.textContent.toUpperCase();
};

/*
  The {mode: "open"} argument gives the page a way to break the encapsulation of your shadow DOM. 
  If you don't want to give the page this ability, pass {mode: "closed"} instead, and then shadowRoot returns null.
  However, you should not consider this a strong security mechanism, because there are ways it can be evaded ...
*/

/*
  Encapsulation from CSS
  ----------------------
  ... does not affect nodes inside the shadow DOM.

  Applying styles inside the shadow DOM
  -------------------------------------
  ... 2 different ways to apply styles inside a shadow DOM tree:
  1) Programmatically, by constructing a CSSStyleSheet object and attaching it to the shadow root.
  2) Declaratively, by adding a <style> element in a <template> element's declaration.
  
  In both cases, the styles defined in the shadow DOM tree are scoped to that tree, ...

/*
  Constructable stylesheets
  -------------------------
  To style page elements in the shadow DOM with constructable stylesheets, we can:

  1. Create an empty CSSStyleSheet object
  2. Set its content using CSSStyleSheet.replace() or CSSStyleSheet.replaceSync()
  3. Add it to the shadow root by assigning it to ShadowRoot.adoptedStyleSheets
*/

const sheet = new CSSStyleSheet();
sheet.replaceSync("span { font-weight: bold; }");
shadow.adoptedStyleSheets = [sheet];

/*
  Adding <style> elements in <template> declarations
  --------------------------------------------------
  ...  include a <style> element inside the <template> element used to define a web component.
  ...
  <template id="course-box">
    <style></style>
    <span>In Shadow DOM</span>
  </template>  

  <div id="host"></div>
*/

const template = $.querySelector("template#course-box");
shadow.appendChild(template.content);
