import React from 'react';
import propTypes from 'prop-types';
import './BooksControlPanel.scss';
import Input from './Input';
import Button from '../Button';

const BooksControlPanel = ({ booksPostRequest, bookPutRequest, clearFields, flagPost }) => {
    const createBook = () => {
        booksPostRequest();
        clearFields();
    };
    const changeBook = () => {
        bookPutRequest();
        clearFields();
    };
    return (
        <div className="controlPanel">
            <div className="controlPanelInputs">
                <Input id="title" label="title"/>
                <Input id="date" label="date"/>
                <Input id="author" label="author"/>
                <Input id="description" label="description"/>
                <Input id="image" label="image"/>
                {flagPost
                ? <Button value="send" onClick={createBook}/>
                : <Button value="put" onClick={changeBook}/>}
            </div>
        </div>
    );
};
BooksControlPanel.propTypes = {
    booksPostRequest: propTypes.func,
    bookPutRequest: propTypes.func,
    clearFields: propTypes.func,
    flagPost: propTypes.bool,
};

export default BooksControlPanel;
