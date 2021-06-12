import React from 'react';
import propTypes from 'prop-types';
import { StButton } from './styled';

function Button(props) {
    const { onClick, value } = props;
        return (
            <StButton 
                onClick={onClick}
            >
                {value}
            </StButton>
        );
}

Button.propTypes = {
    onClick: propTypes.func,
    value: propTypes.string,
};

export default Button;
