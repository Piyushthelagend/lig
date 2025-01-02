import { NextResponse } from 'next/server';
import db from '@/app/utils/DbConnect';
import User from '@/models/User';
import bcryptjs from 'bcryptjs';
import { signIn } from '@/app/utils/auth';

export async function POST(request) {
  try {
    const { username, email, password } = await request.json();
    let clientIp = request.headers.get('x-forwarded-for') || request.socket.remoteAddress;

    // Convert IPv6-mapped IPv4 addresses like ::ffff:192.168.43.36 to IPv4
    if (clientIp.startsWith('::ffff:')) {
      clientIp = clientIp.split(':').pop(); // Extract the IPv4 part
    }

    // Convert `::1` to `127.0.0.1` for localhost
    if (clientIp === '::1') {
      clientIp = '127.0.0.1';
    }
    // Initialize database connection
    await db();

    // Input validation
    if (!username) {
      return NextResponse.json({ error: 'Please provide your username' }, { status: 400 });
    }
    if (!email) {
      return NextResponse.json({ error: 'Please provide your email' }, { status: 400 });
    }
    if (!password) {
      return NextResponse.json({ error: 'Please provide your password' }, { status: 400 });
    }

    // Check if user already exists
    const existingUser = await User.findOne({ username }) || await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json({ error: 'User already exists' }, { status: 400 });
    }

    // Hash the password
    const hashedPassword = await bcryptjs.hash(password, 10);

    // Create a new user
    const newUser = await User.create({
      username,
      email,
      password: hashedPassword,
      ip: clientIp
    });

    if (newUser) {
      // Optional: Automatically sign in the user after registration
      await signIn('credentials', { username, password, redirect: false });

      return NextResponse.json({ message: `User ${newUser.username} registered successfully`, success: true });
    }

    // Handle unexpected errors
    return NextResponse.json({ error: 'An error occurred during registration' }, { status: 500 });

  } catch (err) {
    console.error('Error during signup API call:', err);
    return NextResponse.json({ error: 'An error occurred during signup' }, { status: 500 });
  }
}
