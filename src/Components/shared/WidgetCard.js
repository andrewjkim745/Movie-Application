import React from 'react'
import { CardHeader } from '../Shared/CardHeader.js'
import { CardBody } from '../Shared/CardBody.js'
import "../styles/Card.css"


export const WidgetCard = (props) => {
    console.log('props', props)
    return (
        <div className='widget-container'>
            <CardHeader className='image-container' imageUrl={props.movie.results[0].poster_path} />
            <CardBody>
                <h3>{props.movie.results[0].title}</h3>
                <p>{props.movie.results[0].runtime}</p>
                <p>{props.movie.results[0].overview}</p>
            </CardBody>
        </div>
    )
};