import { getPosts } from "../api/posts/read.mjs";

export async function createPostsHTML(posts, container) {
  // Create container for posts if not provided
  if (!container) {
    console.error("Container element is not provided.");
    return;
  }

  // Clear container
  container.innerHTML = "";

  // Iterate through posts
  posts.forEach((post) => {
    // Create post card element
    const cardWrap = document.createElement("a");
    cardWrap.classList.add("col-md-12", "col-lg-6", "mt-2", "mb-2");
    cardWrap.href = `/feed/post/?id=${post.id}`;
    container.appendChild(cardWrap);

    const postCard = document.createElement("div");
    postCard.classList.add("card", "my-custom-card", "h-100");
    cardWrap.appendChild(postCard);

    // Create image element
    const postImage = document.createElement("img");
    postImage.classList.add("card-img-top");
    postImage.alt = post.title;

    // Check if post has media
    if (post.media) {
      postImage.src = post.media;
    } else {
      // If no media available, set a default picture
      postImage.src = "/images/dogpost.jpg"; // Replace "default-image.jpg" with your default image URL
    }

    // Append image to post card
    postCard.appendChild(postImage);

    // The body of the text elements.
    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");
    postCard.appendChild(cardBody);

    // Create and append title element
    const postTitle = document.createElement("h2");
    postTitle.classList.add("display-6");
    postTitle.innerText = post.title;
    cardBody.appendChild(postTitle);

    const postBody = document.createElement("p");
    postBody.innerText = post.body;
    cardBody.appendChild(postBody);

    const postTag = document.createElement("p");
    postTag.innerText = post.id;
    cardBody.appendChild(postTag);

    const postAuthor = document.createElement("a");
    postAuthor.innerText = `@${post.author.name}`;
    postAuthor.classList.add("link-danger");
    postAuthor.href = `/profile/?id=${post.author.name}`;
    cardBody.appendChild(postAuthor);

    const divElement = document.createElement("div");
    divElement.classList.add("d-flex", "justify-content-between", "card-body");
    postCard.appendChild(divElement);

    const postComments = document.createElement("p");
    postComments.innerHTML = `<i class="fa-sharp fa-regular fa-heart" aria-hidden="true"> ${post._count.comments} </i>`;
    divElement.appendChild(postComments);

    const postReactions = document.createElement("p");
    postReactions.innerHTML = `<i class="fa-regular fa-comment" aria-hidden="true"> ${post._count.reactions} </i>`;
    divElement.appendChild(postReactions);
  });
}

export async function renderAllPosts(containerId) {
  const container = document.querySelector(containerId);
  if (!container) {
    console.error("Container element not found.");
    return;
  }

  const posts = await getPosts();
  createPostsHTML(posts, container);
}
