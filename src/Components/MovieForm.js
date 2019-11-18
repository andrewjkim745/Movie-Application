
import React from 'react'
import { Input, Button } from './shared'

const MovieForm = (props) => {
    const { onChange, onSubmit } = props
    const { name, genre, revenue, budget, description, companies, image_url, date } = props.formData
    return (
        <form className='form' onSubmit={(e) => onSubmit(e)}> 
             <Input
                name='name'
                value={name}
                required={true}
                placeholder='Movie Name'
                onChange={(e) => onChange(e)}
             />
             <Input
                name='genre'
                value={genre}
                required={true}
                placeholder='Movie Genre'
                onChange={(e) => onChange(e)}
             />
             <Input
                name='revenue'
                value={revenue}
                required={true}
                placeholder='Movie Revenue'
                onChange={(e) => onChange(e)}
             />
             <Input
                name='budget'
                value={budget}
                required={true}
                placeholder='Movie Budget'
                onChange={(e) => onChange(e)}
             />
             <Input
                name='description'
                value={description}
                required={true}
                placeholder='Movie Overiew'
                onChange={(e) => onChange(e)}
             />
             <Input
                name='Production Companies'
                value={companies}
                required={true}
                placeholder='Movie Production Companies'
                onChange={(e) => onChange(e)}
             />
             <Input
                name='image_url'
                value={image_url}
                required={true}
                placeholder='Movie Image'
                onChange={(e) => onChange(e)}
             />
             <Input
                name='Release Date'
                value={date}
                required={true}
                placeholder='Release Date'
                onChange={(e) => onChange(e)}
             />
             <Button title='Submit Info'/>
        </form>

    )

}


export default MovieForm
