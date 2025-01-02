import { signOut } from "@/app/utils/auth";
export async function GET(req) {
    await signOut();
    return new Response.json("ok")
}