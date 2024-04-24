import { getPost } from "../api/posts/read.mjs"

export async function renderPost() {
  // Get the post ID from the query string
const queryString = document.location.search;
const params = new URLSearchParams(queryString);

// Add new parameters
const id = params.get("id");

  // Retrieve the post data using the getPost function
  try {
    const post = await getPost(id);

  const wrapperContainer = document.querySelector(".container-md");

  // Create container for posts
 const cardWrap = document.createElement("div");
 cardWrap.classList.add("col-md-12", "col-lg-7", "mt-2", "mb-2", "mx-auto");

 const postCard = document.createElement("a");
 postCard.classList.add("card");
 postCard.href = `/feed/post/index.html?id=${post.id}`;

    // Create image element
    const postImage = document.createElement("img");
    postImage.classList.add("card-img-top");
    postImage.alt = post.title; // Assuming title is the property holding the image alt text

    // Check if post has media
    if (post.media) {
      postImage.src = post.media; // Assuming media is the property holding the image URL
    } else {
      // If no media available, set a default picture
      postImage.src = "/images/dogpost.jpg"; // Replace "default-image.jpg" with your default image URL
    }

    // Create and append title element
    const postTitle = document.createElement("h2");
    postTitle.innerText = post.title; // Assuming title is a property of the post object



    wrapperContainer.appendChild(cardWrap);
    cardWrap.appendChild(postCard);
    postCard.appendChild(postImage);
    postCard.appendChild(postTitle);



  } catch (error) {
    console.error("Error fetching post:", error);
  }
}



