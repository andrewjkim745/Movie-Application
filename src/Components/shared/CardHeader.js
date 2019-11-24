import React from 'react'
const url = 'https://image.tmdb.org/t/p/w500/'
const placeholder = 'https://res.cloudinary.com/teepublic/image/private/s--uaF3fTjE--/t_Preview/b_rgb:191919,c_limit,f_jpg,h_630,q_90,w_630/v1509703595/production/designs/2021255_0.jpg'

export const CardHeader = ({ imageUrl }) => {
	const image = imageUrl === '' ? placeholder : imageUrl
	return (
		<div className='card-header'>
			<img className="movieImage" src={image.includes('https') ? image : url + image} alt='card header' />
		</div>
	)
}