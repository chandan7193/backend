const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');
const mongoose = require('mongoose');

const User = mongoose.model('users');

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  });
});

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback',
      proxy: true
    },
    async (accessToken, refreshToken, profile, done) => {
      const User = await User.findOne({ googleId: profile.id })
        if (existingUser) {
          //we already have a record with given profile id
          return done(null, existingUser);
        }
          //we dont have the with such profile id
        const user = await new User({ googleId: profile.id }).save()
        done(null, user);
      }

  )
);
// This thing is creating a new instance of User Model
// new User(...) method below will create just new User in 'JS World/Express Api' and not be saved in database.
// .save() method will save the data in mongoDB
