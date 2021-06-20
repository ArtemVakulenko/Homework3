import React, { useState } from 'react';
import './LengthConverter.scss';
import Button from '../Button';
import Input from '../Input';
import DropDown from '../DropDown';
// import { meter, mile, foot, versta, yard } from '../../helpers/constants';

const LengthConverter = () => {
    const initialState = {
        leftPart: '',
        rightPart: '',
        ammountStr: '',
        ammountNum: 0,
        result: 0,
        message: '',
    };

    const [state, setstate] = useState(initialState);

    const convert = () => {

    };
    const handleChange = (e) => {
        setstate({
            ...initialState,
            ammountStr: e.target.value,

        });
    };
    const handleBadChange = () => {
        setstate({
            ...initialState,
            message: 'DO NOT TYPE HERE',

        });
    };
    return (
        <div className="LengthConverter">
            <Input placeholder='input first value' value={state.ammountStr} onChange={handleChange}/>
            <DropDown/>
            <Input placeholder='do not input here' value={state.result} onChange={handleBadChange}/>
            <DropDown/>
            <Button value='convert' onClick={convert}/>
            <p>{state.message}</p>
        </div>
    );
};

export default LengthConverter;
