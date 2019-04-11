require('dotenv').config();
const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const path = require('path');
const mongoose = require('mongoose');
const passport = require('passport');
const cors = require("cors");

// Set up Express
const app = express();
const PORT = 3001;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use(morgan('dev')); // for logging

// Use sessions to keep track of user login status
app.use(session({
    secret: "mastadon", 
    resave: true, 
    saveUninitialized: true, 
    // cookie: {
    //     maxAge: 2419200000 
    // },
}));
app.use(passport.initialize());
app.use(passport.session());

// Static assets for build
app.use(express.static(path.join(__dirname, 'client/build')));

// Import routes
const routes = require('./server/routes');
app.use(routes);

// Connect to the Mongo DB
mongoose.connect('mongodb://localhost/rwmusic-db',{ useNewUrlParser: true });
mongoose.set('useCreateIndex', true);

// Set up passport to authenticate
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const User = require('./server/models/user');

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id).then((user) => {
        done(null, user);
    });
});

passport.use(
    new GoogleStrategy({
        // options for google strategy
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: '/auth/google/redirect',
        proxy: true,
        passReqToCallBack: true,
    }, (req, accessToken, refreshToken, profile, done) => {
      console.log(`accessToken: ${accessToken}`);
      console.log('-------------profile----------------');
      console.log(profile)
    //   console.log('-------------strategy req----------------');
    //   console.log(req)
      // console.log(`refreshToken: ${refreshToken}`);
        // check if user already exists in our own db
        User.findOne({googleId: profile.id}).then((currentUser) => {
            if(currentUser){
                // already have this user
                console.log('user is: ', currentUser);
                done(null, currentUser);
                // TODO: update user info if changed???
            } else {
                // if not, create user in our db
                new User({
                    googleId: profile.id,
                    username: profile.displayName,
                    // thumbnail:  profile._json && profile._json.image ? profile._json.image.url : ''
                    thumbnail: profile._json.picture ? profile._json.picture : 'https://res.cloudinary.com/yowats0n/image/upload/v1527687540/default_user.png'
                }).save().then((newUser) => {
                    console.log('created new user: ', newUser);
                    done(null, newUser);
                });
            }
        });
    })
);

// Stripe
const stripe = require("stripe")(process.env.STRIPE_SK);
app.post("/charge", async (req, res) => {
    try {
      let {status} = await stripe.charges.create({
        amount: 2000,
        currency: "usd",
        description: "An example charge",
        source: req.body
      });
      res.json({status});
    } catch (err) {
      res.status(500).end();
    }
  });



// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
