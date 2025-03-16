import mongoose from "mongoose";

const PasswordSchema = new mongoose.Schema(
  {
    website: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },

    password: {
      type: String,
      required: true,
    },
    userId: {
      type: String
    },
    updatedAt: {
      type: Date,
      default: Date.now(),
    },
  },
);

export default mongoose.models.Password ||
  mongoose.model("Password", PasswordSchema);
