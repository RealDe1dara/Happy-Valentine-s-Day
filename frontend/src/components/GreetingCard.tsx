import { useState } from "react";

interface GreetingCardProps {
  onOpenMemories: () => void;
  onOpenBouquet: () => void;
}

import HeartBurst from "./HeartBurst";
const GreetingCard = ({ onOpenMemories, onOpenBouquet }: GreetingCardProps) => {
  const [heartBurst, setHeartBurst] = useState(false);
  const handleHeartClick = () => {
    setHeartBurst(true);
    setTimeout(() => setHeartBurst(false), 1000);
  };

  const handleOpenMemories = () => {
    onOpenMemories();
  };

  const handleOpenBouquet = () => {
    onOpenBouquet();
  };

  return (
    <div className="greeting">
      <section className="greeting__wrapper">
        <div className="greeting__header">
          <h2 className="greeting__title">З Днем святого Валентина!</h2>
          <div className="greeting__subtitle">
            <span className="greeting__subtitle__line"></span>
            <button
              className="greeting__subtitle__button"
              onClick={handleHeartClick}
            >
              💕
            </button>
            <span className="greeting__subtitle__line"></span>
          </div>
        </div>
        <div className="greeting__body">
          <p className="greeting__text greeting__text-title">
            💝Кохаю тебе <span>Сонечко</span>💝
          </p>
          <p className="greeting__text">
            Кожна мить з тобою – це скарб. Твоя посмішка освітлює мій світ, а
            твоя любов робить усе прекрасним. Дякую, що ти у мене є! 💖
          </p>
          <div className="greeting__body__buttons">
            <button
              className="greeting__body__buttons button-full"
              onClick={handleOpenBouquet}
            >
              Квіти 💐
            </button>
            <button
              className="greeting__body__buttons button-empty"
              onClick={handleOpenMemories}
            >
              Моменти 📸
            </button>
          </div>
        </div>
        <div className="greeting__footer">
          <p className="greeting__author">
            З найкращими побажаннями,
            <span className="greeting__author-accent">Твій Богдан</span>
          </p>
        </div>
      </section>
      {heartBurst && <HeartBurst />}
      {heartBurst && <HeartBurst />}
    </div>
  );
};

export default GreetingCard;
