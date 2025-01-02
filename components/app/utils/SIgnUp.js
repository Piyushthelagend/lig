import db from '@/app/utils/DbConnect'
import User from '@/models/User'
import bcryptjs from "bcryptjs"
import { signIn } from '@/app/utils/auth'


export async function  SignUp(username,email, password) {
  "use server"
  try {
    await db()
        let usernameError;
        let emailError;
        let passwordError;

    // Validate input
    
    if (!username){
        usernameError = "please Provide your username"
    }
    if (!email){
      emailError = "please Provide your username"
    }
    if (!password){
        passwordError = "please Provide the password"
    }
    if (usernameError || emailError || passwordError) {
        return { error: usernameError || emailError || passwordError }
      }
    // Check if user already exists
    const existingUser = await User.findOne({ username }) || await User.findOne({ email })
    if (existingUser) {
      return { error: "User alredy exits"}
        }
    const hashedPassword = await bcryptjs.hash(password,10)
    console.log(hashedPassword);
    
    const newUser = await User.create({
      username,
      email,
      password:hashedPassword
    })
    if (newUser){
      await signIn("credentials", { username, password,redirect:false })
      return { message: `User ${newUser.username} Registerd successfully`, success:true }
    };
    }

  catch (err) {
    console.error(err)
    return { error: 'An error occurred during registration', }
  }
}