import React from 'react'
import { CardHeader } from '../shared/CardHeader.js'
import { CardBody } from '../shared/CardBody.js'
import "../styles/Card.css"


export const WidgetCard = (props) => {
    console.log('props', props)
    return (
        <div className='widget-container'>
            <CardHeader className='image-container' imageUrl={props.movie.results[0].poster_path} />
            <CardBody>
                <h1 className="widget-title">Today's Top Movie!</h1>
                <h2 className="widget-movie-title">{props.movie.results[0].title}</h2>
                <p className='views'>{props.movie.results[0].popularity} Views</p>
                <p className='votes'>{props.movie.results[0].vote_average}/10 average user rating</p>
                <p className='widget-overview'>{props.movie.results[0].overview}</p>
            </CardBody>
        </div>
    )
};