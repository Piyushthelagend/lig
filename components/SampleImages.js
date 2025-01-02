'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Badge from './badge';
import { customLoader } from '@/app/utils/customLoder';



const SampleImages = ({ sampleImageUrls }) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [fadeClass, setfadeClass] = useState(null);




  // Function to open the dialog box
  const openDialog = (img) => {
    setSelectedImage(img);
    setIsDialogOpen(true);
    console.log(img);

  };

  // Function to close the dialog box
  const closeDialog = () => {
    setfadeClass("fade");
    setTimeout(() => {
      setIsDialogOpen(false);
      setSelectedImage(null);
      setfadeClass(null);
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
      <div className="text-white min-h-screen ">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {sampleImageUrls.map((img, index) => {
            if (index <= 12 - 1) {
              return (

                <div
                  key={index}
                  className="group rounded-xl shadow-xl overflow-hidden transform transition-all hover:scale-105 hover:shadow-2xl hover:ring-1"
                  onClick={() => openDialog(img)}
                >
                  <Image
                    loader={customLoader}
                    src={img.image_url}
                    alt={img.title}
                    className="w-full h-64 object-cover transition-all group-hover:scale-110"
                    loading="lazy"
                    blurDataURL='/ai-loader-opt.gif'
                    placeholder='blur'
                    width={640}
                    height={265}
                  />
                  <Badge type={img.img_type} />
                </div>

              )
            }
          })}
        </div>
      </div>
      {/* Dialog Box */}
      {isDialogOpen && (
        <div className={`lig-dialog-overlay ${fadeClass}`} onClick={closeDialog}>
          <div
            className="lig-dialog-box top-[10%]"
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

export default SampleImages;
