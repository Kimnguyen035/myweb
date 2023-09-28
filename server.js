require('dotenv').config();
const {conectDB} = require('./configs/db')
const express = require('express');
const {urlParent} = require('./routes/productRoute');

const app = express();

conectDB();

app.use(express.json());

// api url
urlParent(app);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});