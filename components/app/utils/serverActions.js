// actions.js
"use server";

import { signIn } from '@/app/utils/auth';

export async function githubSignIn() {
  await signIn("github");
}
export async function googleSignIn() {
  await signIn("google");
}
export async function discordSignIn() {
  await signIn("discord");
}
