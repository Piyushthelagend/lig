"use client";
import { useState, useMemo } from "react";
import Image from "next/image";
import Badge from "./badge";
import { customLoader } from "@/app/utils/customLoder";
export const ClientGallery = ({ images = [] }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [fadeClass, setfadeClass] = useState(null);
    // Function to open the dialog box
    const openDialog = (img) => {
      setSelectedImage(img);
      setIsDialogOpen(true);
  
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
  
  // Filter images
  const filteredImages = useMemo(() => {
    return images.filter((image) => {
      const matchesSearchTerm =
        image.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        image.prompt?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        image.categorie?.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory =
        !categoryFilter || image.categorie === categoryFilter;
      return matchesSearchTerm && matchesCategory;
    });
  }, [searchTerm, categoryFilter, images]);

  // Group images by category
  const groupedImages = useMemo(() => {
    return images.reduce((acc, image) => {
      if (!acc[image.categorie]) {
        acc[image.categorie] = [];
      }
      acc[image.categorie].push(image);
      return acc;
    }, {});
  }, [images]);

  return (
    <>
    <div className=" text-white p-8 min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-12 text-gradient">
        Sci-Fi Image Gallery
      </h1>

      {/* Search and Filter Options */}
      <div className="flex flex-wrap justify-between mb-8 items-center">
        <input
          type="text"
          placeholder="Search by title, prompt, or category"
          className="p-3 w-full md:w-1/2 rounded bg-transparent border border-gray-900 text-white"
          aria-label="Search images"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <select
          className="p-3 w-full md:w-1/4 rounded bg-transparent text-white mt-4 md:mt-0"
          aria-label="Filter by category"
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
        >
          <option value="">All Categories</option>
          {Object.keys(groupedImages).map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      {/* Display Filtered Images */}
      {filteredImages.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-16">
          {filteredImages.map((image) => (
            <div
              key={image._id}
              className="group rounded-xl shadow-xl overflow-hidden transform transition-all hover:scale-105 hover:shadow-2xl hover:ring-1 cursor-pointer"
              onClick={()=>{openDialog(image)}}
            >
              <Image
                loader={customLoader}
                src={image.image_url}
                alt={`Image titled ${image.title || "Unknown Title"}`}
                width={400}
                height={300}
                className="w-full h-64 object-cover transition-all group-hover:scale-110"
                layout="intrinsic"
                loading="lazy"
                blurDataURL="/ai-loader-opt.gif"
                placeholder="blur"
              />

              <div className="relative p-4 bg-gradient-to-b from-transparent via-transparent  bg-opacity-70">
                <div className="mt-2 text-lg font-bold">{image.title || "Untitled"}</div>
                <p className="text-sm text-gray-300 mt-2">{image.prompt || "No description available"}</p>
              </div>

              <Badge type={image.img_type} />
              <div className="lig-gall-bottom flex justify-between mx-4 p-2">
              <div className="bottom-4 left-4 text-sm font-semibold mx-2 px-2 py-1 rounded">
                <strong>{image.creator || "PIYUSH"}</strong>
              </div>

              <a
                href={image.image_url}
                download={image.title || "sci-fi-image"}
                className=" bottom-4 right-4 text-sm font-semibold mx-2 px-2 py-1 rounded bg-gray-900 hover:underline text-cyan-400"
              >
                Download
              </a>
            </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-400">No images found.</p>
      )}
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
