import React from 'react';
import propTypes from 'prop-types';
import './BooksControlPanel.scss';
import Input from './Input';
import Button from '../Button';

const BooksControlPanel = ({ booksGetRequest }) => {
    return (
        <div className="controlPanel">
            <Button value="get books from server (only first time)" onClick={booksGetRequest}/>
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
BooksControlPanel.propTypes = {
    booksGetRequest: propTypes.func,
};

export default BooksControlPanel;
