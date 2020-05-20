import axios from "axios";

export default class PostModel {
  static getAll() {
    let request = axios.get(`${process.env.REACT_APP_API_URL}/posts`);
    return request;
  }

  static getByAuthor(id) {
    let request = axios.get(
      `${process.env.REACT_APP_API_URL}/posts?author=${id}`
    );
    return request;
  }

  static getByCity(id) {
    let request = axios.get(
      `${process.env.REACT_APP_API_URL}/posts?city=${id}`
    );
    return request;
  }

  static post(data) {
    let request = axios.post(`${process.env.REACT_APP_API_URL}/posts`, data);
    return request;
  }

  static put(data) {
    let request = axios.put(
      `${process.env.REACT_APP_API_URL}/posts/${data._id}`,
      data
    );
    return request;
  }

  static getOne(id) {
    let request = axios.get(`${process.env.REACT_APP_API_URL}/posts/${id}`);
    return request;
  }

  static delete(id) {
    let request = axios.delete(`${process.env.REACT_APP_API_URL}/posts/${id}`);
    return request;
  }
}
