const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const config = require('config');

const entries = require('./routes/api/entries');
const users = require('./routes/api/users');
const auth = require('./routes/api/auth');
const goals = require('./routes/api/goals');

const app = express();

// body-parser's middleware
app.use(express.json());

// MongoDB
const db = config.get('mongoUri');

// Connect to MongoDB
mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
  .then(() => console.log('MongoDB connection established successfully.'))
  .catch(err => console.log(err));

// Use routes
app.use('/api/entries', entries);
app.use('/api/users', users);
app.use('/api/auth', auth);
app.use('/api/goals', goals);

// Serve static assets ('build' folder) if in production
if(process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});