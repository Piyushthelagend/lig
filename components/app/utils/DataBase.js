import db from "./DbConnect";
import Image from "@/models/Image";
import User from "@/models/User";

export async function getUser(query) {
  try {
    // Ensure the database is connected
    await db();

    // Use the query object directly to find the user
    const user = await User.findOne(query);

    // If the user is found, serialize it properly
    if (user) {
      return {
        ...user.toObject(), // Convert Mongoose document to a plain object
        _id: user._id.toString(), // Convert ObjectId to string
        createdAt: user.createdAt?.toISOString(), // Serialize dates if present

      };
    }

    // Return null if the user is not found
    return null;
  } catch (error) {
    console.error("Error fetching user:", error);
    throw new Error("Error fetching user details.");
  }
}



export async function getAllImages() {
    await db(); // Ensure the database is connected
    const images = await Image.find({}).lean(); // Use lean() for plain JSON
    return images.map((image) => ({
      ...image,
      _id: image._id.toString(), // Convert ObjectId to string
      createdAt: image.createdAt?.toISOString(), // Serialize dates if present
      updatedAt: image.updatedAt?.toISOString(),
    }));
  }
  