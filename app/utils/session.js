import { getUser } from "@/app/utils/DataBase";
import { auth } from "./auth";

const getSession = async () => {
  try {
    const session = await auth();
    if (session) {
      const email = session.user.email;
      const user = await getUser({ email });
      
      if (user) {
        // Common properties
        // Set session.user based on user type
        session.user = user;
      }
      return session
   };
  } catch (error) {
    console.error("Error fetching session:", error);
    return null; // Return null if there's an error
  }
};

export default getSession;
