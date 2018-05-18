const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create users schema
const UserSchema = new Schema({
   username: String,
   googleId: String
});
const User = mongoose.model('user', UserSchema);
module.exports = User;
