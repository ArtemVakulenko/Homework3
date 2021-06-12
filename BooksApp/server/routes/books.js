const { Router } = require('express');
const { BooksController } = require('../controllers');
const { URL } = require('../helpers');

const books = Router();
const Controller = new BooksController();

books.get(URL.books, Controller.getBooks);
books.post(URL.books, Controller.postBooks);
books.put(URL.books, Controller.putBooks);
books.delete(URL.books, Controller.deleteBooks);

module.exports = {
    books,
};
