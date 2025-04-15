const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  fullname: { type: String, required: true },
  email: { type: String, required: true },
  age: { type: Number },
  country: { type: String, required: true },
  address: { type: String, required: true },
  password: { type: String, required: true },
  status: { type: Number, default: 0 },
  role: { type: String, default: "user" },
}, {
  timestamps: true  // Corrected this to `timestamps: true`
});

module.exports = mongoose.model("User", UserSchema);
