import mongoose from 'mongoose';

const uri = process.env.MONGO_URI!; // Set your MongoDB URI in environment variables

mongoose.connect(uri);

export const db = mongoose.connection;
