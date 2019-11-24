import React, { Component } from 'react'
import MovieForm from '../MovieForm'
import {mockApi} from '../Services/mockApi'


export default class CreateMovie extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Title: '',
            Overview: '',
            image_url: '',
            Genre: '',
            revenue: '',
            budget: '',
            release_Date: '',
            production_companies: '',
            errorMsg: '',
            runtime: ''

        }
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const {Title, Overview, image_url, Genre, revenue, budget, release_Date, production_companies, runtime} = this.state
        const data= {
            Title,
            Overview,
            image_url,
            Genre,
            revenue,
            budget,
            release_Date,
            production_companies,
            runtime
        }
        mockApi.post('/allMovies', data)
        .then(res => res.status === 201? this.props.history.push('/'):null )
        .catch((e)=>this.setState({errorMsg: e.message}))
    }
    handleChange = (e) => this.setState({
        [e.target.name]: e.target.value
    })

    render() {
        const { Title, Overview, image_url, Genre, revenue, budget, release_Date, production_companies, runtime } = this.props
        return (
            <div className="movie-forms">
                <div className='title-div'>
                <h3 className="addMovie">Add Movie Info!</h3>
                </div>
                <MovieForm
                    formData={{ Title, Overview, image_url, Genre, revenue, budget, release_Date, production_companies, runtime}}
                    onChange={this.handleChange}
                    onSubmit={this.handleSubmit}
                />
                {this.state.errorMsg ? (
                    <p className="error-text">{this.state.errorMsg}</p>
                ): null}
            </div>
        )
    }

}