import React from 'react';
import propTypes from 'prop-types';

const Input = ({ id, value, label, changeField }) => {
    const handleChange = (event) => {
        changeField({ [id]: event.target.value });
    };
   return (
        <div className="input">
            <label htmlFor={id}>{label}</label>
            <input name={id} value={value} onChange={handleChange}/>
        </div>
    );
};

Input.propTypes = {
    value: propTypes.string,
    label: propTypes.string,
    changeField: propTypes.func,
    id: propTypes.string,
};
export default Input;
