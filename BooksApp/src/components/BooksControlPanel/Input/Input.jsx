import React from 'react';
import propTypes from 'prop-types';

const Input = ({ id, value, label }) => {
   return (
        <div className="input">
            <label htmlFor={id}>{label}</label>
            <input name={id} value={value}/>
        </div>
    );
};

Input.propTypes = {
    value: propTypes.string,
    label: propTypes.string,
};
export default Input;
