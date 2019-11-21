import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Movies from '../Movies'
import CreateMovie from '../screens/CreateMovie'


export const Routes = (props) => {
    return (
        <Switch>
            <Route exact path="/" component={Movies} />
            <Route exact path="/addMovie" component={CreateMovie} />
        </Switch>

    )
}