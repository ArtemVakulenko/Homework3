import React from 'react';
import './BookItem.scss';
import propTypes from 'prop-types';
import Button from '../Button';

const BookItem = ({ book, booksDeleteRequest, setFieldPut }) => {
    const { id, title, date, author, description, image } = book;

    const handleDelete = () => {
        booksDeleteRequest(id);
    };

    const handleEdit = () => {
        setFieldPut(book);
    };

    return (
        <>
        <div className="bookItem">
            <h5>{title}</h5>
            <p>{date}</p>
            <p>{author}</p>
            <p>{description}</p>
            <img src={image}/>
            <Button value="delete" onClick={handleDelete}/>
            <Button value="edit" onClick={handleEdit}/>
        </div>
        </>
    );
};

BookItem.propTypes = {
    book: propTypes.object,
    booksDeleteRequest: propTypes.func,
    setFieldPut: propTypes.func,
};

export default BookItem;
