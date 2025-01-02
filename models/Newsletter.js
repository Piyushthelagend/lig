// models/Newsletter.js

const mongoose = require('mongoose');

// Define the schema for the newsletter subscription
const NewsletterSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true, // Ensure each email is unique
    lowercase: true, // Convert email to lowercase
    trim: true, // Trim white spaces
    match: [/\S+@\S+\.\S+/, 'Please provide a valid email address'], // Regular expression to validate email
  },
  subscribedAt: {
    type: Date,
    default: Date.now, // Automatically set the subscription date
  },
});


// Export the model
export default mongoose.models.Newsletter || mongoose.model("Newsletter", NewsletterSchema);