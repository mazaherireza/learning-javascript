/*
  Uploading a File <---------------- **
  ----------------
  Files can be uploaded using an HTML <input type="file" /> input element, FormData() and fetch().
*/

/* 
  async function upload(formData) {
    try {
      const response = await fetch("https://example.com/profile/avatar", {
        method: "PUT", <--------------------- **
        body: formData,
      });
      const result = await response.json();
      console.log("Success: ", result);
    } catch (error) {
    console.error("Error: ", error);
    }
  }

  const formData = new FormData();
  const fileField = $.querySelector('input[type="file"]');

  formData.append("username", "rezamazaheri");
  formData.append("avatar", fileField.files[0]);
  upload(formData); 
*/

// Uploading multiple files
// ... an HTML <input type="file" multiple /> input element, FormData() and fetch().

// The entries() method returns an Array Iterator object with key/value pairs:
async function uploadMultiple(formData) {
  try {
    const response = await fetch("https://example.com/posts", {
      method: "POST",
      body: formData, // <------------------- ***
    });
    // ...
  } catch (error) {}
}

const images = $.querySelector('input[type="file"][multiple]'); // <--------- **
const formData = new FormData();
formData.append("title", "My Isfahan Vacation");

for (const [index, image] of Array.from(images.files).entries()) // <--------- **
  formData.append(`IMG_${index}`, image);

uploadMultiple(formData);

/*
  Checking that the fetch was successful
  --------------------------------------
  A fetch() promise will reject with a TypeError, when a network error is encountered or 
  CORS is misconfigured on the server-side, although this usually means permission issues or similar 
  — a 404 does NOT constitute a network error, for example.

  An accurate check for a successful fetch() would include checking that the promise resolved, 
  then checking that the Response.ok property has a value of true. 
*/

async function fetchImage() {
  try {
    const response = await fetch("Something.jpg");
    if (!response.ok) throw new Error("Network response was not OK.");
    // The response is a Blob object, containing the binary data.
    const _blob = await response.blob();
    img.src = URL.createObjectURL(_blob);
  } catch (error) {
    console.error("There has been a problem with your fetch operation:", error);
  }
}
fetchImage();
