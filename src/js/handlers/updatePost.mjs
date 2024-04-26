import { updatePost } from "../api/posts/index.mjs";
import { getPost } from "../api/posts/index.mjs";

// Trick from course assignment video - Creates an object with the keys and values with a single line of code.
export async function setUpdatePostFormListener() {
  const form = document.querySelector("#editPost");

  const url = new URL(location.href);
  const id = url.searchParams.get("id")


  if (form) {
    const button = form.querySelector("button")
    button.disabled = true; 

    const post = await getPost(id)

    form.title.value = post.title;
    form.body.value = post.body;
    form.media.value = post.media;

    button.disabled = false; 

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const form = event.target;
      const formData = new FormData(form);
      const post = Object.fromEntries(formData.entries());
      post.id = id; 

      // send it to the API
      updatePost(post);
    })
  }
}
