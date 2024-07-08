/*
  JS Cookies
  ----------
  Cookies let you store user information in web pages.
  
  What are Cookies?
  -----------------
  Cookies are data, stored in small text files, on your computer.
  When a web server has sent a web page to a browser, the connection is shut down, 
  and the server forgets everything about the user.

  Cookies were invented to solve the problem "how to remember information about the user":
  When a user visits a web page, his/her name can be stored in a cookie.
  Next time the user visits the page, the cookie "remembers" his/her name.
  
  Cookies are saved in name-value pairs like:
  username=rezamazaheri

  When a browser requests a web page from a server, cookies belonging to the page are added to the request. 
  This way the server gets the necessary data to "remember" information about users.
*/

/*
  Create a Cookie with JavaScript
  -------------------------------
  JavaScript can create, read, and delete cookies with the document.cookie property.
  With JavaScript, a cookie can be created like this:
*/

const $ = document;
$.cookie = "username=rezamazaheri";

// You can also add an expiry date (in UTC time). By default, the cookie is deleted when the browser is closed:
$.cookie = "username=rezamazaheri; expires=Thu, 18 Dec 2013 12:00:00 UTC";

// With a path parameter, you can tell the browser what path the cookie belongs to.
// By default, the cookie belongs to the current page.

document.cookie =
  "username=John Doe; expires=Thu, 18 Dec 2013 12:00:00 UTC; path=/"; // <-------- *

/*
  Read a Cookie with JavaScript
  -----------------------------
  ..., cookies can be read like this:
  let x = document.cookie;

  document.cookie will return all cookies in one string.
*/

/*
  Change a Cookie with JavaScript
  -------------------------------
  ..., you can change a cookie the same way as you create it.
  The old cookie is overwritten.
*/

/*
  Delete a Cookie with JavaScript
  -------------------------------
  ...
  You don't have to specify a cookie value when you delete a cookie.
  Just set the expires parameter to a past date.

  document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

  You should define the cookie path to ensure that you delete the right cookie.
*/

/*
  The Cookie String
  -----------------
  The document.cookie property looks like a normal text string. 
  But it is not. <-------------- **

  Even if you write a whole cookie string to document.cookie, when you read it out again, 
  you can ONLY see the name-value pair of it. <----------- ***

  If you set a new cookie, older cookies are not overwritten. 
  The new cookie is added to document.cookie, ...

  If you want to find the value of one specified cookie, 
  you must write a JavaScript function that searches for the cookie value in the cookie string.
*/

const setCookie = (key, value, exdays) => {
  const time = new Date();
  time.setTime(time.getTime() + exdays * 24 * 60 * 60 * 1_000);
  const expires = `"expires=${time.toUTCString()}"`;
  $.cookie = `${key}=${value}; ${expires}; path="/"`;
};

const getCookie = (key) => {
  // Decode the cookie string, to handle cookies with special characters, e.g. '$'
  const decoded = decodeURIComponent($.cookie);
  const cookies = decoded.split(";");
  console.log(cookies);
  const cookieName = key + "=";

  cookies.forEach((cookie) => {
    let temp = cookie;
    while(temp.charAt(0) = " ") 
        temp = temp.substring(1)
    if(temp.indexOf(cookieName) == 0) 
        return temp.substring(cookieName.length, temp.length)
  })
  return ""
};

const checkCookie = () => {
    const username = getCookie("username"); 
    if(username != "") {
        alert("Welcome.")
    }
    else {
        const username = "rezamazaheri"
        setCookie("username", username, 365)
    } 
}