import React from 'react';
import './BookItem.scss';
import propTypes from 'prop-types';
// import Input from './Input';
// import Button from '../Button';

const BookItem = ({ book }) => {
    const { title, year, author, description, image } = book;
    return (
        <>
        <div className="bookItem">
            <h5>{title}</h5>
            <p>{year}</p>
            <p>{author}</p>
            <p>{description}</p>
            <img src={image}/>
        </div>
        </>
    );
};

BookItem.propTypes = {
    book: propTypes.object,
};

export default BookItem;
