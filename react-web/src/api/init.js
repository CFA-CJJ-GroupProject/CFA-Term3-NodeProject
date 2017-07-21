import axios from 'axios'

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL
})
export function setAPIToken(token) {
    api.defaults.headers['Authorization'] = `JWT ${token}`
}

export default api
