// controllers/authController.js

// Logout User
exports.logout = (req, res) => {
  req.logout(function(err) {
    if (err) { 
      console.error(err);
      return res.status(500).send('Error logging out.');
    }
    res.redirect('/');
  });
};

// Get Current User
exports.getCurrentUser = (req, res) => {
  if (req.isAuthenticated()) {
    res.json({
      user: {
        id: req.user.id,
        displayName: req.user.displayName,
        email: req.user.email,
        image: req.user.image,
      },
    });
  } else {
    res.json({ user: null });
  }
};
