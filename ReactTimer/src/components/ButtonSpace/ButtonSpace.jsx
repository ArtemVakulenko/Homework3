import React from 'react';
import Button from '../Button';
import './ButtonSpace.scss';

const ButtonSpace = () => {
    return (
        <div className="ButtonSpace">
            <Button value='set' onClick={() => {}}/>
            <Button value='stop' onClick={() => {}}/>
            <Button value='start' onClick={() => {}}/>
            <Button value='reset' onClick={() => {}}/>
        </div>
    );
};

export default ButtonSpace;
