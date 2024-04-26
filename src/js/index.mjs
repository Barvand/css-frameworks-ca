// import * as constants from "./api/constants.mjs"; 

// console.log(constants.API_SOCIAL_URL);


import * as listeners from "./handlers/index.mjs"
import * as postMethods from "./api/posts/index.mjs"
import { createPostsHTML } from "./render/posts.mjs";
import * as  render from "./render/index.mjs"


const path = location.pathname; 

if (path === "/profile/register/") { 
    listeners.setRegisterFormListener() 
} else if (path === "/profile/login/") { 
    listeners.setLoginFormListener()
} else if (path === "/feed/post/create/") {
  listeners.setCreatePostFormListener();
}


if (path === "/feed/") {
  render.renderAllPosts();
} else if (path === "/feed/post/index.html") {
  render.renderSinglePost();
}


