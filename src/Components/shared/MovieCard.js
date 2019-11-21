import React from 'react'
import "../styles/Card.css"

import { CardHeader } from '../Shared/CardHeader.js'
import { CardBody } from '../Shared/CardBody.js'
import { Button } from '../Shared/Button.js'



export const MovieCard = (props) => {
    console.log('props', props)
    return (
        <div className='MovieCard'>
            <CardHeader imageUrl={props.movie.image_url ? props.movie.image_url : ''} />
            <CardBody>
                <h3>{props.movie.Title}</h3>
                <p>{props.movie.runtime} minutes</p>
                <p>{props.movie.Overview}</p>
            </CardBody>
            <Button title='Read More' />
            {/* <p>hi</p> */}
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