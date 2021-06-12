const { Router } = require('express');
const { BooksController } = require('../controllers');
const { URL } = require('../helpers');

const books = Router();
const Controller = new BooksController();

books.get(URL.books, Controller.getBooks);

module.exports = {
    books,
};
