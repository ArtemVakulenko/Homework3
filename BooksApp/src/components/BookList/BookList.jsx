import React, { useEffect } from 'react';
import './BookList.scss';
import propTypes from 'prop-types';
import BookItem from '../BookItem';
// import books from '../../placeholder';

const BookList = ({ books, booksGetRequest }) => {
    const getBooks = useEffect(() => {
        booksGetRequest();
    }, []);
    return (
        <div className="bookList">
            {getBooks}
            {books.map((item) => (
                <BookItem book={item} key={item.id}/>),
                )}
        </div>
    );
};

BookList.propTypes = {
    books: propTypes.arrayOf(propTypes.object),
    booksGetRequest: propTypes.func,
};

export default BookList;
