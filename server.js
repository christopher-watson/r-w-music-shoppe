const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const path = require('path');
const mongoose = require('mongoose');
const passport = require('passport');
// const OAuthStrategy = require('passport-oauth').OAuthStrategy;

// Set up Express
const app = express();
const PORT = process.env.PORT || 3001;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan('dev')); // for logging

// Use sessions to keep track of user login status
app.use(session({secret: "mastadon", resave: true, saveUninitialized: true}));
app.use(passport.initialize());
app.use(passport.session());

// Static assets for build
app.use(express.static(path.join(__dirname, 'client/build')));

// Import routes
const routes = require('./server/routes');
app.use(routes);

// // Set up passport to authenticate
// const User = require('./server/models/user');
// passport.use(new OAuthStrategy(User.authenticate()));
// passport.serializeUser(User.serializeUser());
// passport.deserializeUser(User.deserializeUser());

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/rwmusic-db',{ useNewUrlParser: true });
mongoose.set('useCreateIndex', true);

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
