const mongoose = require("mongoose");

const ParcelSchema = mongoose.Schema({
  from: { type: String, required: true },
  to: { type: String, required: true },
  sendername: { type: String, required: true },
  recipientname: { type: String, required: true },
  sendermail: { type: String, required: true },  // Only define this once
  recipientemail: { type: String, required: true },
  weight: { type: Number, required: true },
  cost: { type: Number, required: true },
  date: { type: String, required: true },
  note: { type: String },
  feedback: { type: String },
  status: { type: String, default: "0" },  // Default status as string, not number

}, {
  timestamps: true  // Corrected the option name to `timestamps`
});

module.exports = mongoose.model("Parcel", ParcelSchema);
