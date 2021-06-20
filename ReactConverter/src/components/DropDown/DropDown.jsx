import React from 'react';
import propTypes from 'prop-types';

import './DropDown.scss';

const DropDown = ({ id, options, onChange }) => {
    const variants = options.map((el) => <option value={el}>{el}</option>);
    return (
        <div className="DropDown">
            <select id={id} onChange={onChange}>
                {variants}
            </select>
        </div>
    );
};

DropDown.propTypes = {
    options: propTypes.array,
    id: propTypes.string,
    onChange: propTypes.func,
};

export default DropDown;
