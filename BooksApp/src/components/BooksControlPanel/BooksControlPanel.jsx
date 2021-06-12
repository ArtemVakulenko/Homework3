import React from 'react';
import './BooksControlPanel.scss';
import Input from './Input';
import Button from '../Button';

const BooksControlPanel = () => {
    return (
        <div className="controlPanel">
            <Button value="get books from server (only first time)"/>
            <div className="controlPanelInputs">
                <Input id="title" label="title"/>
                <Input id="date" label="date"/>
                <Input id="author" label="author"/>
                <Input id="description" label="description"/>
                <Input id="image" label="image"/>
                <Button value="send"/>
            </div>
        </div>
    );
};

export default BooksControlPanel;
