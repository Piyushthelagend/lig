// /pages/api/setPassword.js
import bcryptjs from "bcryptjs";
import getSession from "@/app/utils/session";
import { getUser } from "@/app/utils/DataBase";
import User from '@/models/User';

// Function to handle POST requests
export async function POST(req) {
  try {
    const body = await req.json(); // Parse the JSON body from the request
    const session = await getSession(); // Assuming you handle sessions properly

    if (!session) {
      return new Response(JSON.stringify({ message: 'Unauthorized' }), { status: 401 });
    }

    const { password, cpassword } = body;
    if (!password || password !== cpassword) {
      return new Response(JSON.stringify({ message: 'Both credentials must be the same' }), { status: 400 });
    }

    const user = await getUser(session.user.email);

    if (user.password) {
      return new Response(JSON.stringify({ message: 'Password already set' }), { status: 400 });
    }

    const hashedPassword = await bcryptjs.hash(password, 10);
    await User.updateOne({ email: user.email }, { password: hashedPassword });

    return new Response(JSON.stringify({ message: 'Password set successfully' }), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ message: 'Failed to set password' }), { status: 500 });
  }
}
