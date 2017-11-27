const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const app = express();


//clientID - 400155049510-d0o1je6hk3pu43ui5ca71apt89nppcil.apps.googleusercontent.com
//clientSecret - NrUoE6fy-TROiCNF1JqZuQN0
passport.use(new GoogleStrategy());

app.get('/', (req, res) => {
  res.send({ bye: 'buddy' });
});

const PORT = process.env.PORT || 5000
app.listen(PORT);
