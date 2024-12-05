const express = require('express');
const app = express();
const port = 9000;

const categoriesRouter = require('./app/api/v1/categories/router');
const v1 = '/api/v1/cms';

app.get('/', (req, res) => {
  res.status(200).json({
    message: 'Welcome to API KEPMMI'
  });
});

app.use(v1, categoriesRouter);


app.listen(port, () => {
  console.log(`server running on port ${port}`);
});