import Axios from 'axios'

const BASE_URL = 'https://5dd1e6cb15bbc2001448d4b8.mockapi.io/allMovies/'
const WIDGET_URL = 'https://api.themoviedb.org/3/movie/popular?api_key=90e0af9e03c2394457cdaf6222171970'

export const api = Axios.create({
    baseURL: BASE_URL,
    widgetURL: WIDGET_URL,
})