import React from 'react';
import './BookList.scss';
import propTypes from 'prop-types';
import BookItem from '../BookItem';
import books from '../../placeholder';

const BookList = () => {
    return (
        <div className="bookList">
            {books.map((item) => (
                <BookItem book={item} key={item.id}/>),
                )}
        </div>
    );
};

// BookList.propTypes = {
//     books: propTypes.arrayOf(propTypes.object),
// };

export default BookList;
