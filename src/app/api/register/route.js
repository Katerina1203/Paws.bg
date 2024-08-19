import { NextResponse } from "next/server"
import { createUser } from "@/lib/action"
import bcrypt from "bcryptjs"
import { connectDB } from "@/lib/utils"
import {useformState} from "react-dom "
import User from "@/app/user/page"
export const POST = async (request) => {
    const { username, email, password,confirmPassword } = await request.json()
    console.log(username, email, password,confirmPassword);
//     await connectDB();
//  if(password!=confirmPassword)
//  { 
//     return {error:"Password do not match!"}
//  }
  try {
   // connectDB()
    //const user=await User.findOne({username})
    // if(user)
    // {
    //     return {error:"Username already exists!"}
    // }
    const hashedPass = await bcrypt.hash(password, 10)

    const newUser = {
        username,
        password: hashedPass,
        email
    }
  
        await createUser(newUser)
    } catch (e) {
        return new NextResponse(e.message, {
            status: 500,
        })
    }


    return new NextResponse("User was successfully created!", {
        status: 201,
    })
}

