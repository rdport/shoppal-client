import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://shoppal-server-rdport.onrender.com',
  withCredentials: true
})

export default instance
