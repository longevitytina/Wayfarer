import axios from 'axios'

const REACT_APP_API_URL = "http://localhost:3001/api/v1"

export default class CityModel {

	static get() {
		let request = axios.get(`${REACT_APP_API_URL}/cities`)
		return request
	}

  static create(data) {
    let request = axios.post(`${REACT_APP_API_URL}/cities`, data)
    return request
  }

  static update(data) {
    let request = axios.put(`${REACT_APP_API_URL}/cities/${data._id}`, data)
    return request
  }

  static show(id) {
    let request = axios.get(`${REACT_APP_API_URL}/cities/${id}`)
    return request
	}
	
	static remove(id) {
    let request = axios.delete(`${REACT_APP_API_URL}/cities/${id}`)
    return request
  }
}