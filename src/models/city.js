import axios from "axios";

export default class CityModel {
  static getAll() {
    let request = axios.get(`${process.env.REACT_APP_API_URL}/cities`);
    return request;
  }

  static post(data) {
    let request = axios.post(`${process.env.REACT_APP_API_URL}/cities`, data);
    return request;
  }

  static put(data) {
    let request = axios.put(
      `${process.env.REACT_APP_API_URL}/cities/${data._id}`,
      data
    );
    return request;
  }

  static getOne(id) {
    let request = axios.get(`${process.env.REACT_APP_API_URL}/cities/${id}`);
    return request;
  }

  static delete(id) {
    let request = axios.delete(`${process.env.REACT_APP_API_URL}/cities/${id}`);
    return request;
  }
}
