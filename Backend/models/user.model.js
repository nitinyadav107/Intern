import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  bio: {
    type: Object,
    default: {
      name: "",
      email: "",
      phone: "",
      location: "",
      major: "",
      year: "",
      gpa: "",
    },
  },
});

export default mongoose.model("User", userSchema);

