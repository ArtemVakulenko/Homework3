const express = require('express');
const cors = require('cors');
require('dotenv').config();
const sqlite3 = require('sqlite3').verbose();
const { books } = require('./routes');
const { URL } = require('./helpers');

const app = express();

app.use(express.json());
app.use(cors());

const PORT = process.env.PORT;

app.use(URL.api, books);
app.listen(PORT, () => {
   console.log(`server has been started on port ${PORT}`);
});

const db = new sqlite3.Database('./db/books.db', ((err) => {
   if (err) console.log(err);
   console.log('connected to SQLIte');
 }));
