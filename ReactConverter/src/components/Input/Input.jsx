import React from 'react';
import './Input.scss';
import propTypes from 'prop-types';

const Input = ({ onChange, value, placeholder }) => {
    return (
        <div className="input">
            <input value={value} type="text" placeholder={placeholder} onChange={onChange}/>
        </div>
    );
};

Input.propTypes = {
    onChange: propTypes.func,
    value: propTypes.string,
    placeholder: propTypes.string,
};

export default Input;
