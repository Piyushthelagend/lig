"use server"
import { redirect } from "next/navigation";

export async function serverRedirect(url) {
  if (!url) {
    throw new Error("Redirect URL is required.");
  }
   redirect(url);
}
