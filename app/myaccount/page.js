import React from "react";
import MyAccountPage from "@/components/MyAccount";
import getSession from "../utils/session";
import { getAllImages, getUser } from "../utils/DataBase";
import NotFoundPage from "../not-found";
import { serverRedirect } from "../utils/serverRedirect";

const Page = async () => {
  try {
    // Fetch session details
    const session = await getSession();
    const images = await getAllImages();

    // If no session or no user in session, redirect to home
    if (!session || !session.user) {
      serverRedirect("/");
      return; // Stop execution if no session
    }

    // Filter images to only show those created by the current user
    const userImages = images.filter(image => image.creator === session.user.username);

    // Log user images for debugging
    console.log("User images:", userImages);

    // If no images found for the user, you can handle this case as you see fit.
    if (userImages.length === 0) {
      console.log("No images created by this user.");
    }

    // Render the MyAccountPage component with the user data and filtered images
    return <MyAccountPage session={session} userImages={userImages} />;
  } catch (error) {
    console.error("Error loading user page:", error);
    return <NotFoundPage />;
  }
};

export default Page;
