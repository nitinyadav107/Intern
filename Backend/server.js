import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import router from "./routes/user.route.js";


dotenv.config();
connectDB();

const app = express();

// Middleware
app.use(express.json()); 
app.use(cors()); 

// Routes
app.use("/api/auth", router);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
