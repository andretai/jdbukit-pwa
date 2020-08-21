const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');

const entries = require('./routes/api/entries');

const app = express();

// body-parser's middleware
app.use(bodyParser.json());

// MongoDB
const db = require('./config/keys').mongoUri;

// Connect to MongoDB
mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connection established successfully.'))
  .catch(err => console.log(err));

// Use routes
app.use('/api/entries', entries);

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