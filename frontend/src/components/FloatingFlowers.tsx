import { useEffect, useState } from "react";

interface Flower {
  id: number;
  emoji: string;
  left: number;
  animationDuration: number;
  size: number;
  delay: number;
}

const FloatingFlowers = () => {
  const [flowers, setFlowers] = useState<Flower[]>([]);

  useEffect(() => {
    const flowerEmojis: string[] = [
      "🌸",
      "🌺",
      "🌻",
      "🌷",
      "🌹",
      "🌼",
      "🥀",
      "💐",
      "🍀",
    ];

    const createFlower = (): void => {
      const flower: Flower = {
        id: Date.now() + Math.random(),
        emoji: flowerEmojis[Math.floor(Math.random() * flowerEmojis.length)],
        left: Math.random() * 100,
        animationDuration: 8 + Math.random() * 10,
        size: 0.5 + Math.random() * 1.5,
        delay: Math.random() * 2,
      };

      setFlowers((prev: Flower[]) => [...prev, flower]);

      setTimeout(
        () => {
          setFlowers((prev: Flower[]) =>
            prev.filter((f: Flower) => f.id !== flower.id),
          );
        },
        (flower.animationDuration + flower.delay) * 1000,
      );
    };

    for (let i = 0; i < 15; i++) {
      setTimeout(() => createFlower(), i * 200);
    }

    const interval = setInterval(createFlower, 800);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="floating-flowers">
      {flowers.map((flower: Flower) => (
        <span
          key={flower.id}
          className="floating-flower"
          style={{
            left: `${flower.left}%`,
            animationDuration: `${flower.animationDuration}s`,
            animationDelay: `${flower.delay}s`,
            fontSize: `${flower.size}rem`,
          }}
        >
          {flower.emoji}
        </span>
      ))}
    </div>
  );
};

export default FloatingFlowers;
