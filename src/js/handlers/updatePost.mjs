import { updatePost } from "../api/posts/index.mjs";

// Trick from course assignment video - Creates an object with the keys and values with a single line of code.
export function setUpdatePostFormListener() {
  const form = document.querySelector("#updatePost");

  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const form = event.target;
      const formData = new FormData(form);
      const post = Object.fromEntries(formData.entries());

      // send it to the API
      updatePost(post);
    });
  }
}
