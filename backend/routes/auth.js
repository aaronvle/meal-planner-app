// routes/auth.js
const express = require('express');
const passport = require('passport');
const { logout, getCurrentUser } = require('../controllers/authController');

const router = express.Router();

// @desc    Auth with Google
// @route   GET /auth/google
router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

// @desc    Google auth callback
// @route   GET /auth/google/callback
router.get(
  '/google/callback',
  passport.authenticate('google', { failureRedirect: '/' }),
  (req, res) => {
    // Successful authentication, redirect to frontend or dashboard.
    res.redirect('http://localhost:3000'); // Update with your frontend URL
  }
);

// @desc    Logout user
// @route   GET /auth/logout
router.get('/logout', logout);

// @desc    Get current user
// @route   GET /auth/current_user
router.get('/current_user', getCurrentUser);

module.exports = router;
