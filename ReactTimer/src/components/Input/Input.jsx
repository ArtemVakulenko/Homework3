import React from 'react';
import './Input.scss';
import propTypes from 'prop-types';

const Input = ({ onChange, value }) => {
    return (
        <div className="input">
            <input value={value} type="text" placeholder='set yor time in seconds' onChange={onChange}/>
        </div>
    );
};

Input.propTypes = {
    onChange: propTypes.func,
    value: propTypes.string,
};

export default Input;
