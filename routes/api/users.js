const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const config = require('config');
const jwt = require('jsonwebtoken');
const auth = require('../../middleware/auth');

// User model
const User = require('../../models/User');

// POST new user
router.post('/', (req, res) => {
  const { name, email, password } = req.body;

  if(!name || !email || !password) {
    return res.status(400).json({ msg: 'Please fill in all the fields.'});
  }

  User.findOne({ email })
    .then(user => {
      if(user) {
        return res.status(400).json({ msg: 'User already exists.'})
      }
      const newUser = new User({
        name,
        email,
        password
      });
      // Create Salt and Hash
      // First param 'rounds': more is secure but takes longer time.
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if(err) throw err;
          newUser.password = hash;
          newUser.save()
            .then(user => {
              jwt.sign(
                { id: user.id },
                config.get('jwtSecret'),
                { expiresIn: 3600 },
                (err, token) => {
                  if(err) throw err;
                  res.json({
                    token,
                    id: user.id,
                    name: user.name,
                    email: user.email
                  });
                }
              );
            })
        })
      })
    })
    .catch(err => console.log(err));
});

module.exports = router;