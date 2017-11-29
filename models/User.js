const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema({
  googeId: String
});

mongoose.model('users', userSchema);
