/*
  Responding to attribute changes 
  -------------------------------
  Like built-in elements, custom elements can use HTML attributes to configure the element's behavior.
  To use attributes effectively, an element has to be able to respond to changes in an attribute's value. 
  To do this, a custom element needs to add the following members to the class that implements the custom element:

  A static property named observedAttributes. 
  This must be an array containing the names of all attributes for which the element needs change notifications.

  An implementation of the attributeChangedCallback() lifecycle callback.

  The attributeChangedCallback() callback is then called whenever 
  an attribute whose name is listed in the element's observedAttributes property is added, modified, removed, or replaced.
  
  The callback is passed 3 arguments:
  The name of the attribute which changed.
  The attribute's old value.
  The attribute's new value.
  
  ... if the element's HTML declaration includes an observed attribute, 
  then attributeChangedCallback() will be called after the attribute is initialized, <---------- **
  when the element's declaration is parsed for the first time. 

  So in the following example, attributeChangedCallback() will be called when the DOM is parsed, 
  even if the attribute is never changed again:

  <media-box fullname="Reza Mazaheri"></media-box>
*/

/*
  Custom states and custom state pseudo-class CSS selectors
  ---------------------------------------------------------
  [Incomplete]
*/
