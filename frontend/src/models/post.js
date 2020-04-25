import axios from "axios";

export default class PostModel {
  static deletePost = (id) => {
    return axios.delete(`http://localhost:3001/api/v1/posts/${id}`);
  };

  //   static updatePost(data) {
  //     let request = axios.put(`${REACT_APP_API_URL}/posts/${data.posts}`, data)
  //     return request
  //   }
}
