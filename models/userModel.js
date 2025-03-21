import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  title: { type: String, required: true },
  bio: { type: String, required: true },
  profilePic: { type: String, required: true },
  socials: {
    youtube: { type: String, required: true },
    telegram: { type: String, required: true },
    linkedin: { type: String, required: true },
    github: { type: String, required: true }
  }
});

const User = mongoose.model("User", userSchema);
export default User;
