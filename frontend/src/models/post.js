import axios from "axios";

const REACT_APP_API_URL = "http://localhost:3001/api/v1";

export default class PostModel {
  static getAll() {
    let request = axios.get(`${REACT_APP_API_URL}/posts`);
    return request;
  }

  static getByAuthor(id) {
    let request = axios.get(`${REACT_APP_API_URL}/posts?author=${id}`);
    return request;
  }

  static getByCity(id) {
    let request = axios.get(`${REACT_APP_API_URL}/posts?city=${id}`);
    return request;
  }

  static post(data) {
    let request = axios.post(`${REACT_APP_API_URL}/posts`, data);
    return request;
  }

  static put(data) {
    let request = axios.put(
      `${REACT_APP_API_URL}/posts/${data.data._id}`,
      data
    );
    return request;
  }

  static getOne(id) {
    let request = axios.get(`${REACT_APP_API_URL}/posts/${id}`);
    return request;
  }

  static delete(id) {
    let request = axios.delete(`${REACT_APP_API_URL}/posts/${id}`);
    return request;
  }
}
