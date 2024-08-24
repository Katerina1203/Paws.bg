import mongoose from 'mongoose';
import { NextResponse } from 'next/server';
import path from 'path';
import { writeFile } from 'fs/promises';


let connection = {};

// Function to connect to MongoDB
export const connectDB = async () => {
  if (connection.isConnected) {
    return;
  }

  try {
    const db = await mongoose.connect(process.env.MONGODB);
    connection.isConnected = db.connections[0].readyState;
    console.log('Connected to MongoDB');
  } catch (e) {
    console.error('Failed to connect to MongoDB', e);
  }
};

// Function to store uploaded files
export const storeFile = async (req) => {
  const formData = await req.formData();
  const file = formData.get('file');

  if (!file) {
    return NextResponse.json({ error: 'No files received.' }, { status: 400 });
  }

  const buffer = Buffer.from(await file.arrayBuffer());
  const filename = Date.now() + file.name.replace(/\s+/g, '_');
  
  try {
    const uploadPath = path.join(process.cwd(), 'public/uploads', filename);
    await writeFile(uploadPath, buffer);
    return NextResponse.json({ Message: 'Success', status: 201 });
  } catch (e) {
    console.error('Error occurred', e);
    return NextResponse.json({ Message: 'Failed', status: 500 });
  }
};
