/*
  Using templates and slots
  -------------------------
  ... how you can use the <template> and <slot> elements to create a flexible template 
  that can then be used to populate the shadow DOM of a web component.
  
  The truth about templates
  -------------------------
  When you have to reuse the same markup structures repeatedly on a web page, 
  it makes sense to use some kind of a template rather than repeating the same structure over and over again. 
  This was possible before, but it is made a lot easier by the HTML <template> element. 
  This element and its contents are not rendered in the DOM, but it can still be referenced using JavaScript.

  <template id="introduction">
    <p>Reza Mazaheri</p>
  </template>  

  This won't appear in your page until you grab a reference to it with JavaScript and then append it to the DOM, 
  using something like the following:
*/

const template = document.querySelector("template#introduction");
document.body.appendChild(template.content);

/*
  Using templates with web components
  -----------------------------------
  ...
  Let's define a web component that uses our template as the content of its shadow DOM. 
*/

createElement.define(
  "exam-card",
  class ExamCard extends HTMLElement {
    constructor() {
      super();
      const template = document.querySelector("template#introduction");
      const shadowRoot = this.attachShadow({ mode: "open" });
      shadowRoot.appendChild(template.content.cloneNode(true));
    }
  }
);

/*
  The key point to note here is that we append a clone of the template content to the shadow root, 
  created using the Node.cloneNode() method.

  And because we are appending its contents to a shadow DOM, 
  we can include some styling information inside the template in a <style> element,
  which is then encapsulated inside the custom element. <------------------- *
  This wouldn't work if we just appended it to the standard DOM. <------------------- **
*/
