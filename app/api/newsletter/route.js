// app/api/newsletter/route.js
import { NextResponse } from 'next/server';
import Newsletter from '@/models/Newsletter';

export const POST = async (req) => {
  try {
    const { email } = await req.json(); // Parse JSON body

    if (!email) {
      return NextResponse.json({ message: 'Email is required' }, { status: 400 });
    }

    // Check if email already exists
    const existingSubscriber = await Newsletter.findOne({ email });
    if (existingSubscriber) {
      return NextResponse.json({ message: 'Email already registered' }, { status: 400 });
    }

    // Create a new subscriber
    const newSubscriber = new Newsletter({ email });
    await newSubscriber.save();

    return NextResponse.json({ message: 'Subscription successful' }, { status: 200 });
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
};

// The handler for any unsupported HTTP methods
export const methods = {
  async any(req) {
    return NextResponse.json({ message: `Method ${req.method} Not Allowed` }, { status: 405 });
  },
};
