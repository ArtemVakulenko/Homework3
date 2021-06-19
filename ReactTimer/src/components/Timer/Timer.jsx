import React from 'react';
import ButtonSpace from '../ButtonSpace/ButtonSpace';
import Input from '../Input';
import TimeBoard from '../TimeBoard';

const Timer = () => {
    return (
        <div className="Timer">
            <Input/>
            <ButtonSpace/>
            <TimeBoard/>
        </div>
    );
};

export default Timer;
