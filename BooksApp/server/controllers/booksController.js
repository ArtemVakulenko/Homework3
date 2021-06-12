/* eslint-disable no-console */
const sqlite3 = require('sqlite3').verbose();

class BooksController {
    constructor() {
        this.db = new sqlite3.Database('./db/books.db', ((err) => {
            if (err) console.log(err);
            console.log('connected to SQLIte');
          }));
    }

    response = (res, status, content) => {
        return res.status(status).json(content);
    }

    getBooks = (req, res) => {
        console.log('get');
        this.db.all('SELECT * FROM books', (err, data) => {
            if (err) {
                this.response(res, 400, 'sosi lapu');
            }
            this.response(res, 200, data);
        });
    }

    postBooks = (req, res) => {
        console.log('post');
        const body = req.body;
        const postQuery = `INSERT INTO books (title, date, author, description, image) VALUES ("${body.title}", "${body.date}", "${body.author}", "${body.description}", "${body.image}")`;
        this.db.run(postQuery, (err) => {
            if (err) {
                this.response(res, 400, 'sosi lapu');
            }
            this.response(res, 200, 'vse ok');
        });
    }

    putBooks = (req, res) => {
        console.log('put');
        const body = req.body;
        const putQuery = `UPDATE books SET (title, date, author, description, image) = ("${body.title}", "${body.date}", "${body.author}", "${body.description}", "${body.image}") WHERE id = ${body.id}`;
        this.db.run(putQuery, (err) => {
            if (err) {
                this.response(res, 400, 'sosi lapu');
            }
            this.response(res, 200, 'vse ok');
        });
    }

    deleteBooks = (req, res) => {
        console.log('delete');
        const body = req.body;
        const deleteQuery = `DELETE FROM books WHERE id = ${body.id}`;
        this.db.run(deleteQuery, (err) => {
            if (err) {
                this.response(res, 400, 'sosi lapu');
            }
            this.response(res, 200, 'vse ok');
        });
    }
}
module.exports = {
    BooksController,
};
