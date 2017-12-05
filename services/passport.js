const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');
const mongoose = require('mongoose');

const User = mongoose.model('users');

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback'
    },
    (accessToken, refreshToken, profile, done) => {
      User.findOne({ googleId: profile.id }).then(existingUser => {
        if (existingUser) {
          //we already have a record with given profile id
          done(null, existingUser)
        } else {
          //we dont have the with such profile id
          new User({ googleId: profile.id })
          .save()
          .then(user => done(null, user));
        }
      });

    }
  )
);
// This thing is creating a new instance of User Model
// new User(...) method below will create just new User in 'JS World/Express Api' and not be saved in database.
// .save() method will save the data in mongoDB
