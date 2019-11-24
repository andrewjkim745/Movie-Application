import React from 'react'
import "../styles/Card.css"

import { CardHeader } from './CardHeader.js'
import { CardBody } from './CardBody.js'
// import { Button } from '../Shared/Button.js'



export const MovieCard = (props) => {
    console.log('props', props)
    return (
        <div className="MovieCard-container">
            <div className='MovieCard'>
                <CardHeader imageUrl={props.movie.image_url ? props.movie.image_url : ''} />
                <CardBody>
                    <h3 className="Title">{props.movie.Title}</h3>
                    <p className="runtime">Runtime: {props.movie.runtime} minutes</p>
                    <p className="genre">Genre: {props.movie.Genre}</p>
                    <p className="budget">Budget: {props.movie.budget}</p>
                    <p className={props.movie.revenue > props.movie.budget ? "green": "red"}>Box office: {props.movie.revenue}</p>
                    <p className="overview">{props.movie.Overview}</p>
                    <button onClick={() => props.deleteFn(props.movie.id)}>Remove</button>
                </CardBody>

                {/* <p>hi</p> */}
            </div>
        </div>
    )
};



// export const MovieCard = (props) => {

// }



// export const MovieCard = ({ imageUrl }) => (
//     <div className='card-container'>
//         <div className='card'>
//             <div className='image'>
//                 <img src={imageUrl} />
//             </div>
//             <div className='text'>
//                 <h1 className='title'></h1>
//                 <h3></h3>

//         </div>
//     </div>

//     </div>
// )


// import React from 'react'


// export const MovieCard = ({ children }) => {
//     return <div className="card">{children}</div>
// };