// middleware/auth.js
const ensureAuth = (req, res, next) => {
    if (req.isAuthenticated()) {
      return next();
    } else {
      res.status(401).json({ message: 'Unauthorized' });
    }
  };
  
  module.exports = ensureAuth;
  