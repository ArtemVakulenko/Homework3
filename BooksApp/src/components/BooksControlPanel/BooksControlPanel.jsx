import React from 'react';
import propTypes from 'prop-types';
import './BooksControlPanel.scss';
import Input from './Input';
import Button from '../Button';

const BooksControlPanel = ({ booksPostRequest, booksPutRequest, clearFields, flagPost, flagModal, toggleModal }) => {
    const createBook = () => {
        booksPostRequest();
        clearFields();
    };
    const changeBook = () => {
        booksPutRequest();
        clearFields();
    };
    const modalOn = () => {
        toggleModal(true);
    };
    const modalOff = () => {
        toggleModal(false);
        clearFields();
    };
    return flagModal
    ? (
        <div className="controlPanel">
            <div className="controlPanelInputs">
                <Input id="title" label="title"/>
                <Input id="date" label="date"/>
                <Input id="author" label="author"/>
                <Input id="description" label="description"/>
                <Input id="image" label="image"/>
                <Button value='close modal' onClick={modalOff}/>
                {flagPost
                ? <Button value="send" onClick={createBook}/>
                : <Button value="put" onClick={changeBook}/>}
            </div>
        </div>
    )
    : (
        <div className="controlPanel">
            <Button value='post book' onClick={modalOn}/>
        </div>
); 
};
BooksControlPanel.propTypes = {
    booksPostRequest: propTypes.func,
    booksPutRequest: propTypes.func,
    clearFields: propTypes.func,
    toggleModal: propTypes.func,
    flagPost: propTypes.bool,
    flagModal: propTypes.bool,
};

export default BooksControlPanel;
