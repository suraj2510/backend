const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/paytm')
.then(() => console.log('MongoDB connected successfully...'))
.catch(err => console.log('MongoDB connection error:', err));  

const UserScehma = mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    min: 3,
    max: 10,
  },
  password: {
    type: String,
    required: true,
    min: 10,
  },
  firstName: {
    type: String,
    required: true,
    max: 20,
  },
  lastName: { type: String, required: true, max: 20 },
});

// const AccountSchema = mongoose.Schema({
//   userId: {
//     type: mongoose.Schema.ObjectId,
//     ref: "User",
//     required: true,
//   },
//   balance: {
//     type: Number,
//     required: true,
//   },
// });

const user = mongoose.model("User", UserScehma);
// const account = mongoose.model("Account", AccountSchema)

module.exports = {
  user,
  // account
};
