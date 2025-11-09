var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

import indexRouter from './routes/index';
import categoriesRouter from './routes/categories';
import productsRouter from './routes/products';

var app = express();

// Middleware umum
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Routing utama
app.use('/', indexRouter);
app.use('/categories', categoriesRouter);
app.use('/products', productsRouter);

// 404 handler (jika route tidak ditemukan)
app.use((req, res) => {
  res.status(404).json({
    message: 'Not Found',
  });
});

// Global error handler (jika ada error dari route)
app.use(function(err, req, res, next) {
  console.error(err);

  res.status(err.status || 500).json({
    message: err.message || 'Internal Server Error',
    stack: req.app.get('env') === 'development' ? err.stack : undefined,
  });
});

module.exports = app;
