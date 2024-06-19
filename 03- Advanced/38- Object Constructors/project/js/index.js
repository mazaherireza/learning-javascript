/*
  JS Object Constructors <------------------ ***
  ----------------------
  Sometimes we need to create many objects of the "same type".
  To create an object type we use an object constructor function.

  ... name constructor functions with an upper-case first letter.

  In the constructor function "this" has no value. <------------ ***
  It is a substitute for the new object. <-------------- ***

  Object Types (Blueprints) (Classes)
  ...
  Sometimes we need a "blueprint" for creating many objects of the same "type".
  The way to create an "object type", is to use an object constructor function.
  Objects of the same type are created by calling the constructor function with the new keyword.

  To add a new property to a constructor, you MUST add it to the constructor function.

  JS knows which person you are talking about by "substituting" "this" with ...

  Built-in JS Constructors
  ------------------------
  JS has built-in constructors for native objects:
  new Array()
  new RegExp()
  new Function()

  Do not create String objects.
  The new keyword complicates the code and slows down execution speed.
  
  Math is a global object. The new keyword cannot be used on Math. <---------------- ***
*/

function Book(title, author, category) {
  // console.log(this); <--------------- Book
  this.title = title;
  this.author = author;
  this.category = category;
  this.language = "English";
}

const book1 = new Book(
  "Dr. Jekyll and Mr. Hyde",
  "Robert Louis Stevenson",
  "Fiction"
);

Book.prototype.getCategory = function () {
  return this.category;
};

console.log(book1.getCategory());
