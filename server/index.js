'use strict';

const express = require('express');
const app = express();

const path = require('path');
const morgan = require('morgan');
app.use(morgan('dev'));

const { resolve } = require('path');
app.use(express.static(resolve(__dirname, '..', 'public')));

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.use(function (req, res, next) {
  const err = new Error('Not found.');
  err.status = 404;
  next(err);
});

app.use(function (err, req, res, next) {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || 'Internal server error.');
});

const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log(`The server is listening on port ${port}`);
});
