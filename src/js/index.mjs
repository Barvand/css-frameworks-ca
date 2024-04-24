// import * as constants from "./api/constants.mjs"; 

// console.log(constants.API_SOCIAL_URL);

import { setRegisterFormListener } from "./handlers/register.mjs";
import { setLoginFormListener } from "./handlers/login.mjs";
import { renderPost } from "./render/post.mjs"
import * as post from "./api/posts/index.mjs"

const path = location.pathname; 

if (path === "/profile/register/index.html") { 
    setRegisterFormListener() 
} else if (path === "/profile/login/index.html") { 
    setLoginFormListener()
}


// updatePost({
//     id: 11925,
//     title:" Example", 
//     body: "Also example but updated instead"
// })


// removePost(11925)


// post.createPost()
// post.updatePost()
// post.removePost()
// post.getPost()

if (path === "/feed/index.html") {
  post.getPosts();
} else if (path === "/feed/post/index.html") {
  renderPost();
}

post.getPost(55).then(console.log)





