import { useState } from "react";
import Rose from "./Rose";
import FLoatingFlowers from "./FloatingFlowers";
// import BouquetWrapper from "./BouquetWrapper";
interface BouquetProps {
  onCloseBouquet: () => void;
}

const Bouquet = ({ onCloseBouquet }: BouquetProps) => {
  const [isClosing, setIsClosing] = useState(false);

  const handleCloseBouquet = () => {
    setIsClosing(true);
    setTimeout(() => onCloseBouquet(), 500);
  };

  return (
    <section className={`bouquet ${isClosing ? "closing" : ""}`}>
      <div className="bouquet__wrapper">
        <FLoatingFlowers />
        <button className="bouquet__close-btn" onClick={handleCloseBouquet}>
          ✕
        </button>
        <div className="bouquet__header">
          <h2 className="bouquet__title">🌹 Букетик Найкрасивішій 🌹</h2>
          <h3 className="bouquet__subtitle">
            Щоб ти завжди була красивою як і квіти у цьому світі
          </h3>
        </div>
        <div className="bouquet__body">
          <div className="bouquet__item">
            <Rose />
          </div>
          <div className="bouquet__item">
            <Rose />
          </div>
          <div className="bouquet__item">
            <Rose />
          </div>
          <div className="bouquet__item">
            <Rose />
          </div>
          <div className="bouquet__item">
            <Rose />
          </div>
          <div className="bouquet__item">
            <Rose />
          </div>
          <div className="bouquet__item">
            <Rose />
          </div>
          <div className="bouquet__item">
            <Rose />
          </div>
        </div>
        <div className="bouquet__footer">💝 Тільки для тебе 💝</div>
      </div>
    </section>
  );
};

export default Bouquet;
