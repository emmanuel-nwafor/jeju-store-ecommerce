import React, { useState } from "react";

const ImageGallery = () => {
  const images = [
    "https://via.placeholder.com/300?text=Image+1",
    "https://via.placeholder.com/300?text=Image+2",
    "https://via.placeholder.com/300?text=Image+3",
    "https://via.placeholder.com/300?text=Image+4",
  ];

  const [mainImage, setMainImage] = useState(images[0]);

  return (
    <div className="max-w-md mx-auto">
      {/* Main Image */}
      <div className="mb-4">
        <img
          src={mainImage}
          alt="Main"
          className="w-full h-64 object-cover rounded-md shadow-md"
        />
      </div>

      {/* Thumbnail Images */}
      <div className="flex space-x-4">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Thumbnail ${index + 1}`}
            className={`w-16 h-16 object-cover rounded-md cursor-pointer border-2 ${
              mainImage === image ? "border-blue-500" : "border-gray-300"
            }`}
            onClick={() => setMainImage(image)}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
