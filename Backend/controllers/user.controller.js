import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const userExists = await User.findOne({ email });

    if (userExists) return res.status(400).json({ error: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({ name, email, password: hashedPassword });

    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) return res.status(400).json({ error: "Invalid email or password" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ error: "Invalid email or password" });

    const token = jwt.sign(
      { 
        id: user._id, 
        email: user.email, 
        name: user.name 
      }, 
      process.env.JWT_SECRET, 
      { expiresIn: "1d" }
    );
    
    res.status(200).json({ message: "Login successful", token });
  } catch (error) {
    res.status(500).json({ error: error.message });
    console.log(error);
  }
};
export  const getBio=async(req,res)=>{
  try {
    const { email } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ error: "Invalid email or password" });
    res.json({bio:user.bio});

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
  
};

export const updateBio=async(req,res)=>{
  try {
    const { email,formData} = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ error: "Invalid email or password" });
     
    const newBio={
      name:formData.name,
      email:formData.email,
      phone:formData.phone,
      location:formData.location,
      major:formData.major,
      year:formData.year,
      gpa:formData.gpa

    }

    user.bio=newBio;
    await user.save();
    res.json({ message: "Bio updated successfully" ,bio:user.bio});
    
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}