"use client"
import React, { useState, useEffect } from "react";
import RenderImage from "./RenderImage"; // Assuming RenderImage is in the same directory
import Notification from "./PopUp";
import { useSession } from "./SessionContext";
import Link from "next/link";
import { FaCheckCircle } from "react-icons/fa";
import Image from "next/image";
const Hero = () => {
  const [prompt, setPrompt] = useState("");
  const [type, setType] = useState("free");
  const [improvePrompt, setImprovePrompt] = useState(false);
  const [style, setStyle] = useState(""); // New state for style selection
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);
  const [generatedImages, setGeneratedImages] = useState([]); // Store generated images
  const [showAlert, setShowAlert] = useState(false); // Store generated images
  const session = useSession();
  const [bgImgUrl, setBgImgUrl] = useState(null);
  const handleRemoveImage = (imageObj) => {
    let index = imageObj.length
    setGeneratedImages((prevImages) =>
      prevImages.filter((_, i) => i !== index)
    );
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if(session){


    setOutput("");
    setLoading(true); // Start loader
    const loadingData = {
      type,
      ...(type === "free"
        ? { title: "Loading...", prompt: "Laoding Your Image!", image_url: "/ai-loader-opt.gif" }
        : { image_url: "/ai-loader-opt.gif", title: "Loading...", prompt: "Laoding Your Image!" }),
    };
    setGeneratedImages((prevImages) => [...prevImages, loadingData]);
    try {
      const response = await fetch("http://127.0.0.1:8000/generate-image", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompt,
          type,
          is_improove_prompt: improvePrompt,
          style: improvePrompt ? style : null, // Include style only if improvePrompt is enabled
          creator: session.user.username,
        }),
      });

      if (!response.ok) {
        const error = await response.json();
        setOutput(error.error);
        throw new Error(error.error || "Failed to generate image");
      }
      //       const responseText = await response.text();
      // console.log(await decode(responseText));

      const result = await response.json()
      console.log(result);
      const newImage = {
        type,
        ...(type === "free"
          ? { title: result.title, prompt: result.prompt, image_url: result.image_url }
          : { image_url: result.image_url, title: result.title, prompt: result.prompt }),
      };
      handleRemoveImage(generatedImages);
      setGeneratedImages((prevImages) => [...prevImages, newImage]);


    } catch (error) {
      setOutput(error.message
      );
      handleRemoveImage(generatedImages);
    } finally {
      setLoading(false); // Stop loader
    }
  }else{
    setShowAlert(true);
  }
  };

  return (
    <div
      className=" relative flex flex-col px-4 my-20 w-full justify-center  overflow-y-auto bg-gradient-to-r "

    >

      {/* Overlay */}
      <div
        className="absolute inset-0  opacity-40 z-0"
      ></div>
      {output && (
        <Notification type={"succses"} message={output} />
      )

      }
      {showAlert && (
        <div
        className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50"
        onClick={() => setShowAlert(false)}
      >
        <div
          className="lig-bg-shine flex justify-center flex-col rounded-lg p-6 sm:p-8 shadow-md w-[90%] sm:w-[75%] md:w-[50%] lg:w-[40%] h-[85%] sm:h-[75%] relative overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Logo */}
          <Link href="/" className="mx-auto my-6 sm:my-10">
            <div className="flex items-center space-x-3">
              <Image
                src="/levizr_logo_sky.png"
                alt="Sci-Fi Universe Logo"
                width={85}
                height={50}
                className="rounded-full"
              />
              <h1 className="text-lg sm:text-2xl font-bold tracking-widest text-center">
                Levizr Image Generator
              </h1>
            </div>
          </Link>
      
          {/* Information Section */}
          <p className="text-gray-300 mb-4 sm:mb-6 text-center text-sm sm:text-base">
            Sign in to unlock a world of creativity! As a registered user, you will:
          </p>
      
          <ul className="space-y-3 sm:space-y-4 mx-auto text-gray-400 text-sm sm:text-base">
            <li className="flex items-start">
              <FaCheckCircle className="w-5 h-5 sm:w-6 sm:h-6 mr-2 text-green-500" />
              Generate stunning images with advanced AI tools.
            </li>
            <li className="flex items-start">
              <FaCheckCircle className="w-8 h-5 sm:w-10 sm:h-6 mr-2 text-green-500" />
              Customize image styles like Pencil Drawing, Realistic Art, and Fantasy
              Designs.
            </li>
            <li className="flex items-start">
              <FaCheckCircle className="w-5 h-5 sm:w-6 sm:h-6 mr-2 text-green-500" />
              Save your creations and access them anytime.
            </li>
          </ul>
      
          <p className="text-gray-300 mt-4 sm:mt-6 text-center text-sm sm:text-base">
            Create, explore, and share your imagination with ease.
          </p>
      
          {/* CTA Section */}
          <div className="flex justify-center mt-6 sm:mt-8">
            <Link href={"/getstarted?callback_url=/"} passHref>
              <button className="lig-iconic-button lig-get nav-btn px-4 py-2 sm:px-6 sm:py-3">
                <svg
                  className="lig-button-icon w-5 h-5 sm:w-6 sm:h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#FFFFFF"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 6l-3 5h6l-3 5" />
                </svg>
                Get Started
              </button>
            </Link>
          </div>
        </div>
      </div>
      
        )}
      {/* Content */}
      <div className="my-[10%] z-10 text-center">
        <h1 className="text-4xl mx-auto font-extrabold text-white leading-tight mb-4">
          Generate Stunning Images with Ease
        </h1>
        <p className="text-lg text-gray-400 mb-8">
          Enter a creative prompt and let AI bring your imagination to life.
        </p>
        <form
          onSubmit={handleSubmit}
          className="space-y-6 lig-bg-shine  bg-opacity-75 p-8 rounded-lg shadow-md  w-full max-w-3xl mx-auto"
        >
          <input
            type="text"
            placeholder="Enter your prompt here..."
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            required
            className="w-full p-4 text-white bg-transparent border border-gray-600 rounded-lg focus:ring-4 focus:ring-purple-600 transition"
          />
          <div className="flex justify-between space-x-4">
            <select
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="flex-1 p-4 text-gray-300 bg-transparent border border-gray-600 rounded-lg focus:ring-4 focus:ring-purple-600"
            >
              <option value="free">Free Image</option>
              <option value="premium">Premium Image</option>
            </select>
            <select
              value={style}
              onChange={(e) => setStyle(e.target.value)}
              className={`flex-1 p-4 text-gray-300 bg-transparent border border-gray-600 rounded-lg focus:ring-4 focus:ring-purple-600 ${!improvePrompt ? "opacity-50 cursor-not-allowed" : ""
                }`}
              disabled={!improvePrompt}
            >
              <option value="Select_style" className="bg-gray-900 text-gray-200">
                Select style
              </option>
              <option value="PencilDrawing" className="bg-gray-900 text-gray-200">
                Pencil Drawing
              </option>
              <option value="LogoDesign" className="bg-gray-900 text-gray-200">
                Logo Design
              </option>
              <option value="IconDesign" className="bg-gray-900 text-gray-200">
                Icon Design
              </option>
              <option value="RealisticImage" className="bg-gray-900 text-gray-200">
                Realistic Image
              </option>
              <option value="AbstractArt" className="bg-gray-900 text-gray-200">
                Abstract Art
              </option>
              <option value="FantasyArt" className="bg-gray-900 text-gray-200">
                Fantasy Art
              </option>
              <option value="ArchitecturalDesign" className="bg-gray-900 text-gray-200">
                Architectural Design
              </option>
              <option value="SciFi" className="bg-gray-900 text-gray-200">
                Science Fiction
              </option>
              <option value="Portrait" className="bg-gray-900 text-gray-200">
                Portrait Art
              </option>
              <option value="Design" className="bg-gray-900 text-gray-200">
                Minimalist Graphic Design
              </option>
              <option value="NatureLandscape" className="bg-gray-900 text-gray-200">
                Nature Landscape
              </option>
            </select>
          </div>
          <div className="flex items-center justify-between">
            <label className="flex items-center space-x-2 text-gray-300">
              <input
                type="checkbox"
                checked={improvePrompt}
                onChange={(e) => setImprovePrompt(e.target.checked)}
                className="w-5 h-5 bg-gray-700 border-gray-600 rounded focus:ring-purple-600"
              />
              <span>Improve Prompt</span>
            </label>
            <button className={`lig-iconic-button ${loading ? "opacity-50 cursor-not-allowed" : ""
                }`}
             disabled={loading}>
              <svg className="lig-button-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M15 9l-6 6"></path>
                <path d="M9 9h6v6"></path>
              </svg>
              {loading ? "Processing..." : "Generate Image"}
            </button>
          </div>
        </form>

        {/* Loading Animation */}
        {loading && (
          <div className="absolute inset-0 flex items-center justify-center z-20">
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 border-4 border-t-transparent border-purple-600 rounded-full animate-spin"></div>
              <p className="mt-4 text-white">Generating your masterpiece...</p>
            </div>
          </div>
        )}

        {/* Render the generated images */}
      </div>
      <div className="mt-8">
        {generatedImages.length > 0 && (
          <RenderImage imageData={generatedImages} />
        )}
      </div>
    </div>
  );
};

export default Hero;
