import axios from "axios";

export default class PostModel {
  static remove(id) {
    return axios.delete(`http://localhost:3001/api/v1/posts/${id}`);
  }

  static update(data) {
    return axios.put(`http://localhost:3001/api/v1/posts/${data.id}`, data);
  }
}

// static update(data) {
//   let request = axios.put(`${REACT_APP_API_URL}/users/${data.user}`, data)
//   return request
// }
