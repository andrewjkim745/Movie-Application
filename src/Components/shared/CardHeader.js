import React from 'react'
const url = 'https://image.tmdb.org/t/p/w500/'
const placeholder = 'https://www.civhc.org/wp-content/uploads/2018/10/question-mark.png'

export const CardHeader = ({ imageUrl }) => {
	const image = imageUrl === '' ? placeholder : imageUrl
	return (
		<div className='card-header'>
			<img className="movieImage" src={image.includes('https') ? image : url + image} alt='card header' />
		</div>
	)
}