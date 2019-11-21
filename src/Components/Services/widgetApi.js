import Axios from 'axios'


const WIDGET_URL = 'https://api.themoviedb.org/3/movie/popular?api_key=90e0af9e03c2394457cdaf6222171970'

export const widgetApi = Axios.create({
    widgetURL: WIDGET_URL,
    responseType: 'json'
})