import axios from 'axios'

const REACT_APP_API_URL = "http://localhost:3001/api/v1"

export default class PostModel {

	static getAll() {
		let request = axios.get(`${REACT_APP_API_URL}/posts`)
		return request
	}

	static getByAuthor(id) {
		let request = axios.get(`${REACT_APP_API_URL}/posts?author=${id}`)
		return request
	}

	static getByCity(id) {
		let request = axios.get(`${REACT_APP_API_URL}/posts?city=${id}`)
		return request
	}

  static create(data) {
    let request = axios.post(`${REACT_APP_API_URL}/posts`, data)
    return request
  }

  static update(data) {
    let request = axios.put(`${REACT_APP_API_URL}/posts/${data._id}`, data)
    return request
  }

  static show(id) {
    let request = axios.get(`${REACT_APP_API_URL}/posts/${id}`)
    return request
	}
	
	static remove(id) {
    let request = axios.delete(`${REACT_APP_API_URL}/posts/${id}`)
    return request
  }
}