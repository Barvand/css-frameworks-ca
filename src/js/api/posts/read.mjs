



    import { API_SOCIAL_URL } from "../constants.mjs";

    import { fetchToken } from "../fetchToken.mjs";

    const action = "/posts";
    const method = "post";

    export async function getPosts() {
      const getPostsURL = `${API_SOCIAL_URL}${action}`;
      const response = await fetchToken(getPostsURL);
      const result =  await response.json();
      return result; 
    }



 export async function getPost(id) {
     if (!id) {
       throw new Error("GET requires a postID");
     }
   const getPostURL = `${API_SOCIAL_URL}${action}/${id}`;

   const response = await fetchToken(getPostURL);

   return await response.json();
 }


