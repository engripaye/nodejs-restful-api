const express = require('express');
const connectDB = require('/db');
const product = require('./product');

const app = express();
app.use(express.json());

const port = 5000;

app.listen(port, () => {
    console.log("API server started on port 5000");
})