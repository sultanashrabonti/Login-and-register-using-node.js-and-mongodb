require('dotenv').config();
const RegisterController = require('./Controllers/RegisterController');
const express = require('express');
const mongo = require('mongoose'); // It's conventional to use 'mongoose'
const dotenv = require('dotenv');
const RegisterRouter = require('./Routes/RegisterRoute');

dotenv.config({ path: './vars/.env' });

const app = express();

// Middleware to parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));

// Middleware to parse JSON bodies
app.use(express.json());

// Serve static files from the Public directory
app.use(express.static('./Public'));

// Define your API routes
app.use('/App', RegisterRouter);

// MongoDB Connection
mongo
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true, // Recommended for new MongoDB driver versions
    useUnifiedTopology: true, // Recommended for new MongoDB driver versions
  })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Database connection error:', err);
  });

// Start the server
app.listen(4000, () => {
  console.log("Server started on port 4000");
});
