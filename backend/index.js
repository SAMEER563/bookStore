import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'

import bookRoute from './routes/book.route.js';

const app = express()

dotenv.config()

const PORT = process.env.PORT || 5000
const DB_URL = process.env.MongoDB_URI

// connect to database

try {
    mongoose.connect(DB_URL, {
        useNewUrlParser: true,
       
    });
    console.log('Database connected successfully');
} catch (error) {
    console.log("Error", error);
}

// defining routes
app.use('/books', bookRoute)

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})