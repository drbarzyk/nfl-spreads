import mongoose from 'mongoose';

const uri = process.env.MONGODB_URI!; // Set your MongoDB URI in environment variables
console.log(process.env)
mongoose.connect(uri);

export const db = mongoose.connection;
