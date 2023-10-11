const mongoose = require("mongoose");

const transection = new mongoose.Schema(
  {
    userid: {
      type: String,
      required: true,
    },
    amount: {
      type: Number,
      required: [true, "amount is require"],
    },
    type: {
      type: String,
      required: [true, "amount is require"],
    },
    category: {
      type: String,
      required: [true, "amount is require"],
    },
    date: {
      type: String,
      required: [true, "Date is require"],
    },

    description: {
      type: String,
      required: [true, "des is require"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("transition", transection);
