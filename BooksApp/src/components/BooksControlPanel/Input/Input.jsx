import React from 'react';
import propTypes from 'prop-types';

const Input = ({ id, valuePost, valuePut, label, changeFieldPost, changeFieldPut, post }) => {
    // console.log(valuePost, valuePut);
    const handleChange = (event) => {
        if (post) {
            changeFieldPost({ [id]: event.target.value });
        } else {
            changeFieldPut({ [id]: event.target.value });
        }
    };
   return (
        <div className="input">
            <label htmlFor={id}>{label}</label>
            <input
                name={id}
                value={post 
                        ? valuePost
                        : valuePut}
                onChange={handleChange}
            />
        </div>
    );
};

Input.propTypes = {
    valuePost: propTypes.string,
    valuePut: propTypes.string,
    label: propTypes.string,
    changeFieldPost: propTypes.func,
    changeFieldPut: propTypes.func,
    post: propTypes.bool,
    id: propTypes.string,
};

export default Input;
