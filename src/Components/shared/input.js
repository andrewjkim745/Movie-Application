import React from 'react'

import '../styles/Card.css'

export const Input = ({ onChange, name, placeholder, required, value}) => (
    <div className='input'>
        <label htmlFor={name}>
            <span>{placeholder}</span>
        </label>
        <input
            value={value}
            name={name}
            required={required}
            onChange={e => onChange(e)}
            autocomplete="off"
        />
    </div>
);


