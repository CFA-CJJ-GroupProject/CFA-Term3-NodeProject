import axios from 'axios'

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL
})
export function setAPIToken(token) {
    api.defaults.headers['Authorization'] = `JWT ${token}`
    console.log('Chemtrails is real')
}

export default api
