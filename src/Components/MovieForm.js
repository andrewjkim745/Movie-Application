
import React from 'react'
// import { Button } from './Shared/Button'
import { Input } from './shared/input'
import './styles/Card.css'

const MovieForm = (props) => {
   const { onChange, onSubmit } = props
   const { Title, Genre, revenue, budget, Overview, production_companies, image_url, release_Date, runtime, handle } = props.formData
   return (
      <form className='form' onSubmit={(e) => onSubmit(e)}>
         <div className='form-container'>
            <Input
               name='Title'
               value={Title}
               required={true}
               placeholder='Movie Name: '
               onChange={(e) => onChange(e)}
            />
            <Input
               name='Genre'
               value={Genre}
               required={true}
               placeholder='Movie Genre: '
               onChange={(e) => onChange(e)}
            />
            <Input
               name='revenue'
               value={revenue}
               required={true}
               placeholder='Movie Revenue: '
               onChange={(e) => onChange(e)}
            />
            <Input
               name='budget'
               value={budget}
               required={true}
               placeholder='Movie Budget: '
               onChange={(e) => onChange(e)}
            />
            <Input
               name='Overview'
               value={Overview}
               required={true}
               placeholder='Movie Overiew: '
               onChange={(e) => onChange(e)}
            />
            {/* <Input
               name='production-companies'
               value={production_companies}
               required={true}
               placeholder='Movie Production Companies: '
               onChange={(e) => onChange(e)}
            /> */}
            <Input
               name='image_url'
               value={image_url}
               required={false}
               placeholder='Movie Image: '
               onChange={(e) => onChange(e)}
            />
            <Input
               placeholder='Release Date: '
               name='release_Date'
               value={release_Date}
               required={true}


               onChange={(e) => onChange(e)}
            />
            <Input
               placeholder='Runtime: '
               name='runtime'
               value={runtime}
               required={true}
               onChange={(e) => onChange(e)}
            />
            <button className="submit" title='Submit Info' onClick={handle}>Submit</button>
         </div>>
      </form>

   )

}


export default MovieForm
