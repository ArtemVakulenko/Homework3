import React, { useState, useEffect } from 'react';
import propTypes from 'prop-types';
import './CurrencyConverter.scss';
import Button from '../Button';
import Input from '../Input';
import DropDown from '../DropDown';

const CurrencyConverter = ({ currencies, sendMoneyRequest }) => {
    useEffect(() => {
        sendMoneyRequest();
    }, []);
    const initialState = {
        leftPart: 'UAH',
        rightPart: 'USD',
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

    const currencies1 = ['UAH'];
    const currencies2 = ['USD', 'EUR', 'RUR'];
    const convert = () => {
        const { rightPart, ammountStr } = state;
        const multiplier = currencies[rightPart];
        const resStr = `${+ammountStr * multiplier}`;
        setState({
            ...state,
            result: resStr,
        });
    };

    return (
        <div className="LengthConverter">
            <p>this is currency converter</p>
            <Input
            placeholder='input first value'
            value={state.ammountStr} 
            onChange={handleChange}
            />

            <DropDown id='leftPart' options={currencies1} onChange={handleSelect}/>

            <Input
            placeholder='do not input here'
            value={state.result}
            onChange={handleBadChange}
            />

            <DropDown id='rightPart' options={currencies2} onChange={handleSelect}/>

            <Button value='convert' onClick={convert}/>

            <p>{state.message}</p>
        </div>
    );
};

CurrencyConverter.propTypes = {
    sendMoneyRequest: propTypes.func,
    currencies: propTypes.any,
};

export default CurrencyConverter;
