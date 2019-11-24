import React, { Component } from 'react'
import { widgetApi } from './Services/widgetApi'
import { WidgetCard } from './shared/WidgetCard.js'
import Axios from 'axios'

export default class Widget extends Component {
    constructor (props) {
        super(props)
        this.state = {
            movies: []
        }
    }

    componentDidMount() {
        this.fetchWidgetMovie()
    }

    fetchWidgetMovie = async () => {
        try {
            const widgetMovie = await widgetApi.get('https://api.themoviedb.org/3/movie/popular?api_key=90e0af9e03c2394457cdaf6222171970')
            this.setState ({
                movies: [...this.state.movies, widgetMovie.data]
            })
            // console.log(this.state.movies)
        } catch (error) {
            console.error(error)
        }
    }
    // console.log(this.state.movies)

    render() {
        return (
            this.state.movies.map(movie => {
                return (
                    <WidgetCard key={movie.id} movie={movie}/>
                )
            })
        )
    }
}