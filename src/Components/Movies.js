import React, { Component } from 'react'
import { mockApi } from './Services/mockApi'
import { MovieCard } from './Shared/MovieCard.js'
import { Button } from './Shared/Button.js'

export default class Movies extends Component {
    constructor(props) {
        super(props)
        this.state = {
            movies: [],
            movieToDelete: {},
            toDelete: false,
        }
    }
    componentDidMount() {
        this.fetchMovies()
    }

    fetchMovies = async () => {
        try {
            const movies = await mockApi.get('/allMovies')
            this.setState({
                movies: movies.data
            })
        } catch (error) {
            console.error(error)
        }
    }

    handleDeleteMovies = () => {
        mockApi.delete(`./allMovies${this.state.movieToDelete.id}`).then(() => {
            const allMovies = this.state.movies
            allMovies.splice(this.state.movieToDelete.index, 1);
            this.setState({movies: allMovies})
        }).then(()=> this.handleCloseMovie())
        .catch((err) => console.error(err))
    }
    
    handleOpenModal = (movie, index) =>
    this.setState({ toDelete: true, movieToDelete: {...movie, index}})
    
    handleCloseModal = () => this.setState({ toDelete: false, movieToDelete: {} })

    render() {
        return (
            this.state.movies.map(movie => {
                return (
                    <MovieCard key={movie.id} movie={movie}>
                    <Button className="delete" onClick= {this.handleDeleteMovies}/>
                
                    
                    
                    </MovieCard>
                    
                    
                    
                        
                )
            })
        )
    }
}