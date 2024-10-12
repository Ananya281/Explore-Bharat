const express = require('express');
const bcrypt = require('bcrypt');
const User = require('../models/User');

const router = express.Router();

// Register route
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

router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    console.log('Received login request with email:', email); // Log the request

    // Check if the user exists
    const user = await User.findOne({ email });
    if (!user) {
      console.log('User not found');
      return res.status(400).json({ message: 'User does not exist' });
    }

    console.log('User found:', user.email);

    // Compare the password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      console.log('Invalid password for user:', user.email);
      return res.status(400).json({ message: 'Invalid password' });
    }

    console.log('Password matches. Login successful.');
    return res.status(200).json({ message: 'Login successful', user });
  } catch (err) {
    console.error('Error in login route:', err);
    return res.status(500).json({ message: 'Server error', error: err });
  }
});



module.exports = router;
