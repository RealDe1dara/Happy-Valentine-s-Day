import React, { useState } from "react";

interface Heart {
  id: number;
  emoji: string;
  x: number;
  y: number;
  rotation: number;
  scale: number;
}

const generateHearts = (): Heart[] => {
  const heartEmojis = ["💕", "❤️", "💖", "💗", "💓", "💝", "💘", "💞", "💟"];
  const newHearts: Heart[] = [];

  for (let i = 0; i < 20; i++) {
    const angle = (Math.PI * 2 * i) / 20;
    const velocity = 100 + Math.random() * 150;

    newHearts.push({
      id: i,
      emoji: heartEmojis[Math.floor(Math.random() * heartEmojis.length)],
      x: Math.cos(angle) * velocity,
      y: Math.sin(angle) * velocity,
      rotation: Math.random() * 360,
      scale: 0.5 + Math.random() * 1,
    });
  }

  return newHearts;
};

const HeartBurst = () => {
  const [hearts] = useState<Heart[]>(() => generateHearts());

  return (
    <div className="heart-burst">
      {hearts.map((heart) => (
        <span
          key={heart.id}
          className="burst-heart"
          style={
            {
              "--x": `${heart.x}px`,
              "--y": `${heart.y}px`,
              "--rotation": `${heart.rotation}deg`,
              "--scale": heart.scale,
            } as React.CSSProperties
          }
        >
          {heart.emoji}
        </span>
      ))}
    </div>
  );
};

export default HeartBurst;
