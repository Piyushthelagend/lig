import React, { useState } from 'react';

const ImageDialog = ({ image }) => {
  const [isDialogOpen, setIsDialogOpen] = useState(true);
  console.log(image);
  
  // Function to close the dialog box
  const closeDialog = () => {
    setIsDialogOpen(false);
  };

  return (
    <>
      {isDialogOpen && (
        <div className="dialog-overlay" onClick={closeDialog}>
          <div
            className="dialog-box"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the dialog box
          >
            <button
              className="dialog-close"
              onClick={closeDialog}
            >
              &times;
            </button>
            <div className="dialog-content">
              <img
                src={image.imageUrl}
                alt={image.title || 'Fullscreen View'}
                className="dialog-image"
              />
              <div className="dialog-text">
                <h2 className="dialog-title">{image.title}</h2>
                <p className="dialog-prompt">{image.prompt}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ImageDialog;
