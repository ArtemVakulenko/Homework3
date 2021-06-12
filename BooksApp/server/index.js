const express = require('express');
const cors = require('cors');
require('dotenv').config();
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
