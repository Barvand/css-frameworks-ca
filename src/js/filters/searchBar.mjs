import { getPosts } from "../api/posts/read.mjs";
import { createPostsHTML } from "../render/posts.mjs";



export async function searchBar() {
  const searchInput = document.getElementById("searchBar");
  const searchResultsContainer = document.querySelector("#feed-container");

 const allPosts = await getPosts();

function performSearch(query) {
      searchResultsContainer.innerHTML = "";

      // If query is an empty string
      if (query === "") {
        allPosts.forEach((post) => {
          createPostsHTML(post, searchResultsContainer);
        });
        loadButton.style.display = "block"; // Show load more button
        return;
      }

      // Filter posts based on the query
      const filteredPosts = allPosts.filter((post) => {
        return (
          query === "" ||
          post.title.toLowerCase().includes(query.toLowerCase()) ||
          post.id.toString().toLowerCase().includes(query.toLowerCase())
        );
      });

      console.log(filteredPosts)

      const displayedPosts = filteredPosts;

      // Render search results
      displayedPosts.forEach((post) => {
        createPostsHTML(post, searchResultsContainer);
      });

    // Event listener for input field value changes
    searchInput.addEventListener("input", function () {
      const query = searchInput.value.trim();
      performSearch(query);
    });
}};


searchBar(); // Pass the container id as an argument
