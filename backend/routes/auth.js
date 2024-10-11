// routes/auth.js
const express = require('express');
const bcrypt = require('bcrypt');
const User = require('../models/User');

const router = express.Router();

// Register route
// routes/auth.js
router.post('/register', async (req, res) => {
    const { firstName, lastName, email, password } = req.body;
  
    try {
      // Check if the user already exists
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ message: 'User already exists' });
      }
  
      // Hash the password
      const hashedPassword = await bcrypt.hash(password, 10);
  
      // Create a new user
      const user = new User({
        firstName,
        lastName,
        email,
        password: hashedPassword,
      });
  
      // Save the user to the database and check for success
      const savedUser = await user.save();
  
      if (!savedUser) {
        return res.status(500).json({ message: 'Failed to save user in the database' });
      }
  
      console.log('User saved in the database:', savedUser);
      res.status(201).json({ message: 'User registered successfully' });
    } catch (err) {
      console.error('Error in registration:', err);
      res.status(500).json({ message: 'Server error', error: err });
    }
  });  

module.exports = router;
