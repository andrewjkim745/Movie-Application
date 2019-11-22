import React from 'react'
import { NavLink } from 'react-router-dom'
import './styles/Header.css'
import Movies from './Movies'
import CreateMovie from './screens/CreateMovie'
import { Route } from 'react-router-dom'





const Header = () => {
    return (
        <div className="header-container">
            <div className="title">
                <h1>Movie Info App!</h1>
                <img className='popcorn' src='https://cdn4.iconfinder.com/data/icons/planner-color/64/popcorn-movie-time-512.png'/>
            </div>
            <div className='nav'>
                <NavLink exact to='/addMovie' activeClassName='active'>
                    Add Movie
				</NavLink>
                <NavLink exact to='/' activeClassName='active'>
                    Home
				</NavLink>
            </div>
{/* 
            <Route exact path="/" component={Movies} />
            <Route exact path="/addMovie" component={CreateMovie} /> */}



        </div>
    )
}
export default Header