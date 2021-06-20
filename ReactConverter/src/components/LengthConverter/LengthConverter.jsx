import React, { useState } from 'react';
import './LengthConverter.scss';
import Button from '../Button';
import Input from '../Input';
import DropDown from '../DropDown';
import { CONVERT } from '../../helpers/constants';

const LengthConverter = () => {
    const initialState = {
        leftPart: 'meter',
        rightPart: 'meter',
        ammountStr: '',
        result: '',
        message: '',
    };

    const [state, setState] = useState(initialState);

    const handleChange = (e) => {
        setState({
            ...state,
            ammountStr: e.target.value,
            message: '',

        });
    };
    const handleBadChange = () => {
        setState({
            ...state,
            message: 'DO NOT TYPE HERE',

        });
    };

    const handleSelect = (e) => {
        if (e.target.id === 'leftPart') {
            setState({
                ...state,
                leftPart: e.target.value,
                message: '',
            });
        }
        if (e.target.id === 'rightPart') {
            setState({
                ...state,
                rightPart: e.target.value,
                message: '',
            });
        }
    };

    const lenghts = ['meter', 'mile', 'foot', 'versta', 'yard'];

    const convert = () => {
        const { leftPart, rightPart, ammountStr } = state;
        const multiplier = CONVERT[leftPart][rightPart];
        const resStr = `${+ammountStr * multiplier}`;
        setState({
            ...state,
            result: resStr,
        });
    };

    return (
        <div className="LengthConverter">
            <p>this is length converter</p>
            <Input
            placeholder='input first value'
            value={state.ammountStr} 
            onChange={handleChange}
            />

            <DropDown id='leftPart' options={lenghts} onChange={handleSelect}/>

            <Input
            placeholder='do not input here'
            value={state.result}
            onChange={handleBadChange}
            />

            <DropDown id='rightPart' options={lenghts} onChange={handleSelect}/>

            <Button value='convert' onClick={convert}/>

            <p>{state.message}</p>
        </div>
    );
};

export default LengthConverter;
