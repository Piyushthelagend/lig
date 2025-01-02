"use client";

import React, { useState, useEffect } from "react";
import Badge from "./badge";

const RenderImage = ({ imageData }) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [fadeClass, setFadeClass] = useState(null);

  // Function to open the dialog box
  const openDialog = (img) => {
    setSelectedImage(img);
    setIsDialogOpen(true);
  };

  // Function to close the dialog box
  const closeDialog = () => {
    setFadeClass("fade");
    setTimeout(() => {
      setIsDialogOpen(false);
      setSelectedImage(null);
      setFadeClass(null);
    }, 80);
  };

  // Toggle no-scroll class on body based on dialog state
  useEffect(() => {
    if (isDialogOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    // Cleanup function to remove the class if the component unmounts
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [isDialogOpen]);

  return (
    <>
      {/* Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {imageData.map((img, index) => {
          // If the image is still loading
          console.log(img.img_type);
           
          let premium = false;
          if(img.img_type === "premium"){
            premium = true;

          }
          if (img.title === "Loading...") {
            return (
              <div
                key={index}
                className="lig-img group relative"
                onClick={() => openDialog(img)} // Open dialog on click
              >
                <p className="absolute inset-0 flex items-center justify-center font-bold text-3xl shadow text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-50">
                  {img.title}
                </p>
                {/* Image with dynamic sizing */}
                <div
                  alt={"Loading..."}
                  className="lig-loading lig-image-grid-item-free object-contain w-full h-full rounded-lg transition-all duration-300 ease-in-out group-hover:scale-105"
                  style={{
                    aspectRatio: 'auto 1 / 1', // Maintain aspect ratio dynamically
                  }}
                > </div>
              </div>)
          }

          // Render the image
          return (
            <div
              key={index}
              className="lig-img group relative"
              onClick={() => openDialog(img)}
            >
              {/* Add a badge for premium images */}
              <p className="absolute inset-0 flex items-center justify-center font-bold text-3xl shadow text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-30">
                {img.title}
              </p>
              {/* Image Container for dynamic aspect ratios */}
              <div
                className={`relative w-full h-0 overflow-hidden rounded-lg transition-all duration-300 ease-in-out group-hover:scale-105 ${
                  img.image_type
                    ? "premium-image-container"
                    : "regular-image-container"
                }`}
                style={{ 
                  paddingTop: img.image_type ? "75%" : "100%", // Adjust aspect ratio (4:3 for premium, 1:1 for free)
                }}
              >
                <img
                  src={img.image_url}
                  alt={img.title}
                  className="absolute top-0 left-0 w-full h-full object-cover"
                />
              </div>
            </div>
          );
        })}
      </div>

      {/* Dialog Box */}
      {isDialogOpen && (
        <div className={`lig-dialog-overlay ${fadeClass}`} onClick={closeDialog}>
          <div
            className="lig-dialog-box"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the dialog box
          >
            <button className="lig-dialog-close" onClick={closeDialog}>
              &times;
            </button>
            <div className="lig-dialog-content">
              <img
                src={selectedImage.image_url}
                alt={selectedImage.title || "Fullscreen View"}
                className="lig-dialog-image w-full h-auto"
              />
              <div className="lig-dialog-text flex justify-center text-center flex-col">
                <h2 className="lig-dialog-title">{selectedImage.title}</h2>
                <p className="lig-dialog-prompt">{selectedImage.prompt}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default RenderImage;
