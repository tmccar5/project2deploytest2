require('dotenv').config()
const express = require('express')
const app = express()
const path = require('path')
// const port = 3000
const blogPostController = require('./controllers/blogPostController')

const mongoose = require("mongoose");

// Set up default mongoose connection
const mongoDB = process.env.MONGO_URI;
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });

// Get the default connection
const db = mongoose.connection;

// Bind connection to error event (to get notification of connection errors)
db.on("error", console.error.bind(console, "MongoDB connection error:"));

// so i can see req.body in post routes
app.use(express.json())

app.use('/blog', blogPostController);

app.use(express.static(path.join(__dirname, 'front-end-react', 'build')))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend', 'build', 'index.html'))
})

app.listen(3000, () => {
  console.log(`Example app listening on port`)
})