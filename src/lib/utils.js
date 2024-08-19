import mongoose from "mongoose"
import { NextResponse } from "next/server";
import path from "path";
import { writeFile } from "fs/promises";
const connection = {}


export const connectDB = async () => {

    try {
        if (connection.isConnected) {
            return;
        }
        const db = await mongoose.connect(process.env.MONGODB)
        connection.isConnected = db.connections[0].readyState
    } catch (e) {
        console.log(e)
            
    }
};
export const storeFile = async (req) => {
    const formData = await req.formData();
  
    const file = formData.get("file");
    if (!file) {
      return NextResponse.json({ error: "No files received." }, { status: 400 });
    }
  
    const buffer = Buffer.from(await file.arrayBuffer());
    const filename = Date.now() + file.name.replaceAll(" ", "_");
    console.log(filename);
    try {
      await writeFile(
        path.join(process.cwd(), "public/uploads/" + filename),
        buffer
      );
      return NextResponse.json({ Message: "Success", status: 201 });
    } catch (e) {
      console.log("Error occured ", e);
      return NextResponse.json({ Message: "Failed", status: 500 });
    }
  };