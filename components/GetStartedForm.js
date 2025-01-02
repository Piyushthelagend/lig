"use client";
import { useState,useEffect } from "react";
import { FaGithub, Bitbucket, FaLock, FaUser, FaGoogle, FaDiscord } from "react-icons/fa";
import { discordSignIn, githubSignIn, googleSignIn } from "@/app/utils/serverActions";
import { serverRedirect } from "@/app/utils/serverRedirect";

const Login = ({session}) => {
  const [showEmailDialog, setShowEmailDialog] = useState(false);
  const [step, setStep] = useState(1); // Step 1: Email, Step 2: Password
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
    
    useEffect(() => {
        if(session){
            serverRedirect("/")
        }
    },
    [])


  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-950 text-white">
      <div className="w-full max-w-md px-6 py-8 space-y-6 lig-bg-shine rounded-lg shadow-md">
        <h1 className="text-2xl font-semibold text-center">Log in to LIG</h1>
        {/* Authentication Buttons */}
        <button
          className="flex items-center w-full px-4 py-3 space-x-3 lig-button-normal bg-gradient-to-r shadow from-black via-gray-900 to-gray-800 text-white bg-gray-800 rounded hover:bg-gray-700"
          onClick={async () => {
            await githubSignIn();
          }}
        >
          <FaGithub size={20} />
          <span>Continue with GitHub</span>
        </button>
        <button className="flex items-center w-full px-4 py-3 space-x-3 lig-button-normal lig-bg-shine"
        onClick={async () => {
            await googleSignIn();
          }}>
          <FaGoogle size={20} />
          <span>Continue with Google</span>
        </button>
        <button className="flex items-center w-full px-4 py-3 space-x-3 lig-button-normal text-white bg-gradient-to-r shadow from-blue-600 via-blue-400 to-blue-900 rounded hover:bg-blue-500"
        onClick={async () => {
            await discordSignIn();
          }}>
          <FaDiscord size={20} />
          <span>Continue with Discord</span>
        </button>
        
      </div>
    </div>
  );
};

export default Login;
