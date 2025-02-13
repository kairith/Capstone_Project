import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import chatBotRoutes from '../routes/chatBotRoute.js';
import communityRoutes from '../routes/CommunityRoute.js';
import educationalRoutes from "../routes/educationalRoute.js"


dotenv.config();
const app = express();

// ✅ Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// ✅ Routes
app.use('/api/community', communityRoutes);
app.use('/api/chatbot', chatBotRoutes);
app.use("/api/educational", educationalRoutes);


const PORT = process.env.PORT || 5010;

// ✅ Start Server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

const mongoURI = process.env.MONGO_URI;
// ✅ Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ MongoDB connected successfully'))
  .catch(err => console.error('❌ MongoDB connection error:', err));

