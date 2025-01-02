import User from "@/models/User";
import db from "@/app/utils/DbConnect";
import { nextResponse } from "next/server";

export const POST = async (req) => {
  try {
    // Parse the request body
    const body = await req.json();
    const { name, email, image } = body;  // Use the destructured values from the body object

    // Ensure database connection is established
    await db();

    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      // User already exists
      return nextResponse.json({ message: "User already exists" }, { status: 400 });
    } else {
      // Create and save a new user
      const user = new User({ name, email, image });
      await user.save();
      return nextResponse.json({ message: "User saved successfully" }, { status: 200 });
    }
  } catch (error) {
    console.error("Error saving user:", error);
    return nextResponse.json({ message: "Error saving user" }, { status: 500 });
  }
};
