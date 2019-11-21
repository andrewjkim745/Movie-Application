import { api } from './ApiConfig'

export const getAllMovies = async () => {
    try {
        const resp = await api.get('/allMovies')
        return resp.data
    } catch (error) {
        throw error 
    }
}

export const getSingleMovie = async (movie_id) => {
    try {
        const resp = await api.get(`/allMovies/${movie_id}`)
        return resp.data
    } catch (error) {
        throw error
    }
}