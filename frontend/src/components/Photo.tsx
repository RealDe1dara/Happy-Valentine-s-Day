import type { PhotoType } from "../data/PhotosList";
import { useState } from "react";

interface PhotoProps {
  onCloseSelected: () => void;
  photo: PhotoType;
}

const Photo = ({ photo, onCloseSelected }: PhotoProps) => {
  const [isClosing, setIsClosing] = useState(false);
  const handleCloseSelected = () => {
    setIsClosing(true);
    setTimeout(() => onCloseSelected(), 500);
  };
  return (
    <div
      className={`photo  ${isClosing ? "closing" : ""} `}
      onClick={handleCloseSelected}
    >
      <section className="photo__content" onClick={(e) => e.stopPropagation()}>
        <button className="photo__close-btn" onClick={handleCloseSelected}>
          ✕
        </button>
        <div className="photo__image">
          <img src={photo.src} alt={photo.caption} />
        </div>
        <div className="photo__caption">{photo.caption || `Люблю тебе`}</div>
      </section>
    </div>
  );
};

export default Photo;
