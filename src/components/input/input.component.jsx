import React from 'react';
import './input.styles.css';

const FormInput = ({ handleChange, ...otherProps }) => {

    return (
        <input type="text" onChange={handleChange} {...otherProps} />
    )
}

export default FormInput;