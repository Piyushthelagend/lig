// /pages/api/auth/login.js
import bcryptjs from "bcryptjs";
import db from "@/app/utils/DbConnect";
import User from "@/models/User";
import { signIn } from '@/app/utils/auth';

export async function POST(req) {
  try {
    await db(); // Connect to the database

    const { username, password } = await req.json(); // Parse the request body
    let usernameError;
    let passwordError;

    // Validate input
    if (!username) {
      usernameError = "Please provide your username";
    }
    if (!password) {
      passwordError = "Please provide the password";
    }
    if (usernameError || passwordError) {
      return new Response(JSON.stringify({ error: usernameError || passwordError }), { status: 400 });
    }

    // Check if the user exists
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      const isPasswordCorrect = await bcryptjs.compare(password, existingUser.password);
      if (isPasswordCorrect) {
        await signIn("credentials", { username, password, redirect: false });
        return new Response(JSON.stringify({ message: `User ${existingUser.username} logged in successfully`, success: true }), { status: 200 });
      } else {
        return new Response(JSON.stringify({ error: "Invalid credentials" }), { status: 401 });
      }
    } else {
      return new Response(JSON.stringify({ error: "User not found" }), { status: 404 });
    }
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ error: 'An error occurred during login' }), { status: 500 });
  }
}
