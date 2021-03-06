const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter your name!"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Please enter your Email!"],
      trim: true,
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Please enter your password!"],
    },
    role: {
      type: Number,
      default: 0, // 0 = user 1 = admin
    },
    avatar: {
      type: String,
      default:
        "https://image.shutterstock.com/image-vector/user-icon-vector-illustration-eps-600w-1897736593.jpg",
    },

  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
