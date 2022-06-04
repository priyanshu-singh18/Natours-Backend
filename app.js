const fs = require('fs');
const express = require('express');
const morgan = require('morgan');
const app = express();

const tourRoute = require('./route/tourRoutes');
const userRoute = require('./route/userRoutes');

// Middlewares
app.use((req, res, next) => {
  console.log('Middleware working GOOD !!');
  next();
});

app.use(morgan('dev'));

app.use(express.json());

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

// Response Handlers

// Routes

app.use('/api/v1/tours', tourRoute);
app.use('/api/v1/users', userRoute);

// Server

const port = 8000;

app.listen(port, () => {
  console.log(`Listening to port: ${port}`);
});
