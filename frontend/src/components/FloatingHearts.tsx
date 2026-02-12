import { useEffect, useState } from "react";

interface Heart {
  id: number;
  emoji: string;
  left: number;
  animationDuration: number;
  size: number;
  delay: number;
}

const FloatingHearts = () => {
  const [hearts, setHearts] = useState<Heart[]>([]);

  useEffect(() => {
    const heartEmojis: string[] = [
      "💕",
      "❤️",
      "💖",
      "💗",
      "💫",
      "💓",
      "💝",
      "💘",
      "✨",
    ];

    const createHeart = (): void => {
      const heart: Heart = {
        id: Date.now() + Math.random(),
        emoji: heartEmojis[Math.floor(Math.random() * heartEmojis.length)],
        left: Math.random() * 100,
        animationDuration: 8 + Math.random() * 10,
        size: 0.5 + Math.random() * 1.5,
        delay: Math.random() * 2,
      };

      setHearts((prev: Heart[]) => [...prev, heart]);

      setTimeout(
        () => {
          setHearts((prev: Heart[]) =>
            prev.filter((h: Heart) => h.id !== heart.id),
          );
        },
        (heart.animationDuration + heart.delay) * 1000,
      );
    };

    for (let i = 0; i < 15; i++) {
      setTimeout(() => createHeart(), i * 200);
    }

    const interval = setInterval(createHeart, 800);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="floating-hearts">
      {hearts.map((heart: Heart) => (
        <span
          key={heart.id}
          className="floating-heart"
          style={{
            left: `${heart.left}%`,
            animationDuration: `${heart.animationDuration}s`,
            animationDelay: `${heart.delay}s`,
            fontSize: `${heart.size}rem`,
          }}
        >
          {heart.emoji}
        </span>
      ))}
    </div>
  );
};

export default FloatingHearts;
