import { useState } from "react";
import { photos } from "../data/PhotosList";
import type { PhotoType } from "../data/PhotosList";
import Photo from "./Photo";
interface PhotoGalleryProps {
  onCloseMemories: () => void;
}
const PhotoGallery = ({ onCloseMemories }: PhotoGalleryProps) => {
  const [isClosing, setIsClosing] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState<PhotoType | null>(null);

  const handleCloseGallery = () => {
    setIsClosing(true);
    setTimeout(() => onCloseMemories(), 500);
  };

  const handleSelectPhoto = (index: number) => {
    setSelectedPhoto(photos[index]);
  };

  const handleCloseSelected = () => {
    setSelectedPhoto(null);
  };
  // photos.push({src:"123", caption:"123"});
  const [rotations] = useState(() => photos.map(() => Math.random() * 24 - 12));

  return (
    <section className={`gallery ${isClosing ? "closing" : ""}`}>
      <div className="gallery__wrapper">
        <button className="gallery__close-btn" onClick={handleCloseGallery}>
          ✕
        </button>
        <div className="gallery__header">
          <h2 className="gallery__title">Моменти, що гріють серце 💕</h2>
          <h3 className="gallery__subtitle">Нехай ці миті завжди залишаються з тобою</h3>
        </div>
        <div className="gallery__body">
          {photos.map((photo, index) => (
            <div
              key={index}
              className="gallery__polaroid polaroid__wrapper"
              style={
                {
                  "--rotation": `${rotations[index]}deg`,
                  animationDelay: `${index * 0.1}`,
                } as React.CSSProperties
              }
              onClick={() => {
                handleSelectPhoto(index);
              }}
            >
              <div className="polaroid">
                <div className="polaroid__image">
                  <img src={photo.src} alt={photo.caption} />
                </div>
              </div>
              <div className="polaroid__caption">
                {photo.caption || `Memory #${index + 1}`}
              </div>
            </div>
          ))}
        </div>
      </div>
      {selectedPhoto && (
        <Photo photo={selectedPhoto} onCloseSelected={handleCloseSelected} />
      )}
    </section>
  );
};

export default PhotoGallery;
