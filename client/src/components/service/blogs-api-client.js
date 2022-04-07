
export const BLOGS_API_BASE_URL = 'http://localhost:8080/api';

class BlogsApiClient {
    constructor(baserApiUrl) {
        this.baserApiUrl = baserApiUrl;
    }


    async postFavRecipe(recipe) {
        return this.handleResponse(async () => fetch(`${BLOGS_API_BASE_URL}/favorites`,{
            headers:{
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(recipe)
        }));
    }

    // async editPost(post) {
    //     return this.handleResponse(async () => fetch(`${BLOGS_API_BASE_URL}/posts/${post.id}`,{
    //         headers:{
    //             'Content-Type': 'application/json'
    //         },
    //         method: 'PUT',
    //         body: JSON.stringify(post)
    //     }));
    // }

}

export default new BlogsApiClient(BLOGS_API_BASE_URL);