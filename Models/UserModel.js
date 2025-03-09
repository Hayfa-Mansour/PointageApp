import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  forget_password_code: { type: String, default: null },
  passwordResetExpires: { type: Date, default: null },
});

export const User = mongoose.model('User', userSchema);
