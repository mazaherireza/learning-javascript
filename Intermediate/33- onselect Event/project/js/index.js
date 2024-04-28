const $ = document;

const quote = $.querySelector('#quote')

quote.addEventListener('select', (event) => {
  console.log(event)
})
