



    import { API_SOCIAL_URL } from "../constants.mjs";

    import { fetchToken } from "../fetchToken.mjs";

    const action = "/posts";
    const method = "post";

    export async function getPosts() {
      const getPostsURL = `${API_SOCIAL_URL}${action}`;
      const response = await fetchToken(getPostsURL);
      const result =  await response.json();

      createPostsHTML(result);
    }



 export async function getPost(id) {
     if (!id) {
       throw new Error("GET requires a postID");
     }
   const getPostURL = `${API_SOCIAL_URL}${action}/${id}`;

   const response = await fetchToken(getPostURL);

   return await response.json();
 }




export async function createPostsHTML(posts) {
  const wrapperContainer = document.querySelector(".container-md");

  // Create container for posts
  const container = document.createElement("div");
  container.classList.add("row", "d-flex", "justify-content-center");
  wrapperContainer.appendChild(container);

  // Iterate through posts
  posts.forEach((post) => {
    // Create post card element

    const cardWrap = document.createElement("div"); 
    cardWrap.classList.add("col-md-12","col-lg-7", "mt-2", "mb-2");
    container.appendChild(cardWrap);
    
    const postCard = document.createElement("a");
    postCard.classList.add("card");
    cardWrap.appendChild(postCard);
    postCard.href = `/feed/post/index.html?id=${post.id}`

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

    // Append image to post card
    postCard.appendChild(postImage);

    // Create and append title element
    const postTitle = document.createElement("h2");
    postTitle.innerText = post.title; // Assuming title is a property of the post object
    postCard.appendChild(postTitle)
    
  });
}
