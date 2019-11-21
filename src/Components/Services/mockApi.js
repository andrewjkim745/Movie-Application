import Axios from 'axios'

const BASE_URL = 'https://5dd1e6cb15bbc2001448d4b8.mockapi.io'

export const mockApi = Axios.create({
    baseURL: BASE_URL,
    responseType: 'json'
})
