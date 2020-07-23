import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://post-api-platform.herokuapp.com/api',
})

export default instance
