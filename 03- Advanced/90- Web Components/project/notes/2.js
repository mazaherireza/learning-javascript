/*
  Adding flexibility with slots
  -----------------------------
  ...
  We can make it possible to display different text in each element instance in a nice declarative way 
  using the <slot> element.

  Slots are identified by their name attribute, and allow you to define placeholders in your template that 
  can be filled with any markup fragment you want when the element is used in the markup.

  <p><slot name="occupation">Default</slot></p>

  If the slot's content isn't defined when the element is included in the markup,
  or if the browser doesn't support slots, 
  custom element just contains the fallback content "Default".
*/

/*
  To define the slot's content, we include an HTML structure inside the custom element 
  with a slot attribute whose value is equal to the name of the slot we want it to fill.

  template.innerHTML = `
    ...
    <span slot="occupation">Frontend Developer</span>
  `
  Or
  template.innerHTML = `
    ...
    <ol slot="todo">
      <li>Learning JavaScript></li>
      <li>Learing TypeScript</li>
      <li>Learning VueJS</li>
    </ol>  
  `

  An unnamed <slot> will be filled with ALL of the custom element's top-level child nodes 
  that do NOT have the slot attribute. This includes text nodes.

  Custom Element
  --------------
  ...
  <slot><slot>

  HTML
  ----
  <product-card>
    <h5>Tilte</h5>
    <span>Cose<span>
  </product-card>  
*/
