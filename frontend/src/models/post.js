import axios from "axios";

export default class PostModel {
  static remove = (id) => {
    return axios.delete(`http://localhost:3001/api/v1/posts/${id}`);
  };

  static updatePost(id) {
    return axios.put(`http://localhost:3001/api/v1/posts/${id}`);
  }
}
