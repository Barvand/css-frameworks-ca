import { getPost } from "../api/posts/read.mjs";

// calling the individual post through this page instead of the index file. 
// As I did not figure out how yet. Due to the query parameters

export async function renderPost(post) {
  try {
    const wrapperContainer = document.querySelector("#post-page-container");

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
    console.error("Error rendering post:", error);
  }
}

export async function renderSinglePost() {
  // Get the post ID from the query string
  const queryString = document.location.search;
  const params = new URLSearchParams(queryString);

  // Get the ID from the query string
  const id = params.get("id");

  try {
    // Fetch the post data based on the ID
    const post = await getPost(id);

    // Render the post with the fetched data
    renderPost(post);
  } catch (error) {
    console.error("Error fetching or rendering post:", error);
  }
}





// export function renderPostTemplate(postData) {
//   const post = document.createElement("div")
//   post.classList.add("col-md-12", "col-lg-7", "mt-2", "mb-2", "mx-auto");
//   post.innerText = postData.title

//   const postImage = document.createElement("img"); 
//   postImage.classList.add("card-img-top");
//   postImage.alt = postData.title
//   if (postData.media) {
//     postImage.src = postData.media;
//   } else {
//     postImage.src = "/images/holidaypicture.jpg";
    

//     post.appendChild(postImage); // Example of setting a default image source
//   }
//   return post
// }


// export function renderPost(postData, parent) {
//   parent.append(renderPostTemplate(postData))
// }



// export function renderPostTemplates(postDataList, parent) { 
//   parent.append(...postDataList.map(renderPostTemplate));
// }




