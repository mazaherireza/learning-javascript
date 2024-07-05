/*
  ... you can not discover the name of the browser, you can only check if the name you are looking for.
  But note that some browsers are lying:
  Chorme for example reports both as Chrome and Safari.
  So to detect Safari you have to check for the Safari string and the absence of the Chrome string.
*/

window.onload = () => {
  const UA = navigator.userAgent;
  let browser;
  if (UA.match(/edg/i)) {
    browser = "Edge";
  } else if (UA.match(/firefox/i)) {
    browser = "Firefox";
  } else if (UA.match(/opr/i)) {
    browser = "Opera";
  } else if (UA.match(/chrome/i)) {
    browser = "Chrome";
  } else if (UA.match(/safari/i)) {
    browser = "Safari";
  }
  const $ = document;
  const img = $.querySelector(`img[alt=${browser}]`);
  if (img) img.className = "active";
};
