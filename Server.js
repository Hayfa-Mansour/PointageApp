import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";

import UserRoutes from "./Routes/UserRoutes.js";
import { startCronJob } from "./middelware/cron.js"

dotenv.config(); 

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true })); 
app.use(cors({ origin: '*' }));

// Routes config
app.use('/api/user', UserRoutes);







const port = process.env.PORT || 3000;

// Connect to MongoDB
const connectDB = async () => {
    try {
      const conn = await mongoose.connect(process.env.MONGODB_URI);
      console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
      console.error(`❌ Error connecting to MongoDB: ${error.message}`);
      process.exit(1); // Exit process on error
    }
  };

// Start the server
connectDB().then(() => {
    startCronJob(); // Assurez-vous que la fonction est bien importée
    app.listen(port, () => {
        console.log(`🚀 Server running on port ${port}`);
    });
}).catch((error) => console.error(error));
