import { api } from './ApiConfig'

export const getAllMovies = async () => {
    try {
        const resp = await api.get('/allMovies')
        return resp.data
    } catch (error) {
        throw error 
    }
}

export const getSingleFood = async ()