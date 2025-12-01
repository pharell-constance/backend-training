
const express = require('express');
const app = express();
const PORT = 8383;

let data = ['pharell']

//Middleware
app.use(express.json())