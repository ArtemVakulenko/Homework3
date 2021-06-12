const { Router } = require('express');
const { URL } = require('../helpers');

const books = Router();

const test = () => {
    console.log('works');
};

books.get(URL.books, test);

module.exports = {
    books,
};
