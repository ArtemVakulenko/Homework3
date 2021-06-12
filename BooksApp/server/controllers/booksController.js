const sqlite3 = require('sqlite3').verbose();

class BooksController {
    constructor() {
        this.db = new sqlite3.Database('./db/books.db', ((err) => {
            if (err) console.log(err);
            console.log('connected to SQLIte');
          }));
    }

    getBooks = () => {
        this.db.all('SELECT * FROM books', (err, data) => {
            if (err) console.log(err); 
            console.log(data);
        });
    }
}
module.exports = {
    BooksController,
};
