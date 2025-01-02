import db from '@/app/utils/DbConnect'
import User from '@/models/User'
import bcryptjs from "bcryptjs"
import { signIn } from '@/app/utils/auth'

export async function Login(username, password) {
  try {
    await db()
        let usernameError;
        let passwordError;

    // Validate input
    
    if (!username){
        usernameError = "please Provide your username"
    }
    if (!password){
        passwordError = "please Provide the password"
    }
    if (usernameError || passwordError) {
        return { error: usernameError || passwordError }
      }
    // Check if user already exists
    const existingUser = await User.findOne({ username })
    if (existingUser) {
        if (bcryptjs.compare(password,existingUser.password)){
           await signIn("credentials",{username,password, redirect: false})
          return { message: `User ${existingUser.username} Login successfully`, success:true }
        }
        else{
            return { error: "Invalid credentials"}
        }
    }

  } catch (err) {
    console.error(err)
    return { error: 'An error occurred during registration', }
  }
}