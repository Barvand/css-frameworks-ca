// import * as constants from "./api/constants.mjs"; 

// console.log(constants.API_SOCIAL_URL);

import { setRegisterFormListener } from "./handlers/register.mjs";
import { setLoginFormListener } from "./handlers/login.mjs";
import { createPost } from "./api/posts/create.mjs"

import * as posts from "./api/posts/index.mjs"


const path = location.pathname; 

if (path === "/profile/register/index.html") { 
    setRegisterFormListener() 
} else if (path === "/profile/login/index.html") { 
    setLoginFormListener()
}


createPost({
    title:" Example", 
    body: "Also example"
})