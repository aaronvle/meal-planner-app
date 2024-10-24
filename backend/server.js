// server.js
const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const passport = require('passport');
const session = require('express-session');
const cors = require('cors');
const authRoutes = require('./routes/auth');

// Load config
dotenv.config();

// Passport config
require('./config/passport');

const app = express();

// Connect to MongoDB
connectDB();

// CORS Middleware
app.use(
  cors({
    origin: 'http://localhost:3000', // Frontend URL
    methods: 'GET,POST,PUT,DELETE',
    credentials: true, // Allow cookies to be sent
  })
);

// Body Parser Middleware
app.use(express.json());

// Express Session Middleware
app.use(
  session({
    secret: process.env.SESSION_SECRET || 'keyboard cat',
    resave: false,
    saveUninitialized: false,
  })
);

// Initialize Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use('/auth', authRoutes);

// Basic Route
app.get('/', (req, res) => {
  res.send('Welcome to the Meal Planner Backend!');
});

// Start Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
