"use client";
import React, { useEffect, useState } from "react";
import { FaEnvelope, FaSignOutAlt } from "react-icons/fa";
import { BsShieldFillCheck } from "react-icons/bs";
import Image from "next/image";
import { ConvertDate } from "@/app/utils/ReadbleDate";
import { customLoader } from "@/app/utils/customLoder";
import { serverRedirect } from "@/app/utils/serverRedirect";
import { ClientGallery } from "./ClientGallery";
import Link from "next/link";
// import ImageGallery from "@/app/components/ImageGallery"; // Your existing image gallery component

const MyAccountPage = ({ session,userImages }) => {

  const [images,setImages]= useState(userImages)


  useEffect(() => {
    if (!session) {
      serverRedirect("/");
    }
  }, []);

  async function handleLogout() {
    const response = await fetch("/api/auth/logout");
    if (response.ok) {
      serverRedirect("/");
    }
  }
console.log(session);

  if (session) {
    return (
      <div className="min-h-screen overflow-hidden flex flex-col">
        {/* Header Section */}
        <header className="w-full top-[12%] px-6 py-4 flex justify-between space-x-4 sticky  z-20 lig-bg-shine ">
         <div className="flex mx-20">
         <div className="relative w-24 h-24 ">
            <Image
              loader={customLoader}
              src={session.user.profile || "image"}
              alt={`Profile of ${session.user.username || "User"}`}
              width={96}
              height={96}
              className="rounded-full object-cover ring-1 ring-white transition-transform transform hover:scale-105"
            />
            <div className="absolute top-0 right-0 text-green-400">
              <BsShieldFillCheck className="text-xl" title="Verified User" />
            </div>
          </div>
          <div className="text-center my-24">
            <h2 className="text-3xl font-semibold text-gradient my-2">{session.user?.username || "User Name"}</h2>
            <div className="flex justify-center space-x-2 text-sm text-gray-400">
              <FaEnvelope className="text-gray-500" />
              <p>{session.user?.email || "user@example.com"}</p>
            </div>
            <p className="text-sm text-gray-500 mt-1">
              Member since: {ConvertDate(session.user?.createdAt) || "2023-01-01"}
            </p>
          </div>
         </div>
          <div className="ml-auto">
            <button
              onClick={handleLogout}
              className="flex items-center space-x-2 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-purple-600 hover:to-indigo-600 text-white px-4 py-2 rounded-lg shadow-md transition-all duration-300 transform hover:scale-105"
            >
              <FaSignOutAlt className="text-lg" />
              <span>Logout</span>
            </button>
          </div>
        </header>
<hr />
        {/* Main Content */}
        <main className="flex-1  px-6 py-8 my-[8%]">
          <div className="max-w-7xl mx-auto">
            

            {/* Image Gallery Section */}
            {images && images.length > 0 ? (
              <>
                <h3 className="text-2xl font-semibold text-white mb-6">Your Created Images</h3>
                <ClientGallery images={images} />
              </>
            ) : (
            <section className="text-center py-10">
              <h3 className="text-3xl font-semibold text-gradient mb-6 z-50">Start Creating Your Sci-Fi Images</h3>
              <p>
                Use our tools to bring your sci-fi vision to life. Upload and create stunning images using our AI-powered platform.
              </p>
              <Link href={"/"}>
              <button className="levizr-iconic-button my-4 bg-gradient-to-r from-green-400 to-blue-500 hover:from-blue-500 hover:to-green-400 text-white px-6 py-3 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105">
                Create New Image
              </button>
              </Link>
            </section>
            )}
          </div>
        </main>

      
      </div>
    );
  } else {
    return <h1 className="z-50 my-96 text-8xl text-white">Redirecting...</h1>;
  }
};

export default MyAccountPage;
