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
                <h1>Movie App!</h1>
            </div>
            <div className="search">
                <input type="text" placeholder="Search..." />
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