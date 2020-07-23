import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://post-api-platform.herokuapp.com',
})

export default instance
