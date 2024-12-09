import React, { useState, useEffect } from "react";
import Footer from "../components/FooterInclude";

function PhotoGalleryPage() {
  const [images, setImages] = useState([]);
  const [lightbox, setLightbox] = useState({ isOpen: false, currentIndex: null });

  // Fetch images from JSON file
  useEffect(() => {
    fetch("/data/photos.json")
      .then((response) => response.json())
      .then((data) => setImages(data))
      .catch((error) => console.error("Error fetching gallery images:", error));
  }, []);

  const openLightbox = (index) => {
    setLightbox({ isOpen: true, currentIndex: index });
  };

  const closeLightbox = () => {
    setLightbox({ isOpen: false, currentIndex: null });
  };

  const goToPrevious = () => {
    setLightbox((prev) => ({
      ...prev,
      currentIndex: (prev.currentIndex - 1 + images.length) % images.length,
    }));
  };

  const goToNext = () => {
    setLightbox((prev) => ({
      ...prev,
      currentIndex: (prev.currentIndex + 1) % images.length,
    }));
  };

  return (
    <>
    <div className="inner-pages">
      <h2>Photo Gallery</h2>
      <div className="gallery-grid">
        {images.map((image, index) => (
          <div key={index} className="gallery-item" onClick={() => openLightbox(index)}>
            <img src={image.imageUrl} alt={image.caption} className="gallery-image" />
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {lightbox.isOpen && (
        <div className="lightbox">
          <button className="lightbox-close" onClick={closeLightbox}>
            &times;
          </button>
          <button className="lightbox-arrow left-arrow" onClick={goToPrevious}>
            &#8249;
          </button>
          <div className="lightbox-content">
            <img
              src={images[lightbox.currentIndex].imageUrl}
              alt={images[lightbox.currentIndex].caption}
            />
            <p>{images[lightbox.currentIndex].caption}</p>
          </div>
          <button className="lightbox-arrow right-arrow" onClick={goToNext}>
            &#8250;
          </button>
        </div>
      )}
    </div>

  <Footer />
    </>
  );
}

export default PhotoGalleryPage;
