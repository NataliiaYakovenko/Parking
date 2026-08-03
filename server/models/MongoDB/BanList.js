const mongoose = require("mongoose");
const { Schema } = mongoose;

const banListSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  adminId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  reason: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const BanList = mongoose.model("BanList", banListSchema);

module.exports = BanList;
