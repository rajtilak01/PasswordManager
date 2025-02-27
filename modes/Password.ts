import mongoose from "mongoose";

const PasswordSchema = new mongoose.Schema(
  {
    site: { type: String, required: true },
    username: { type: String, required: true },
    password: { type: String, required: true }, // Will be encrypted
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  },
  { timestamps: true }
);

export default mongoose.models.Password || mongoose.model("Password", PasswordSchema);
