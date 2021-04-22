import axios from 'axios'

// Create an axios instance
const service = axios.create({
  baseURL: process.env.baseUrlApi || 'http://localhost:8091',
  timeout: 20000
})

export default service
