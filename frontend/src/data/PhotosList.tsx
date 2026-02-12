// src/RandomPhotoList.ts
import { valentinesWishes } from "./WishesList";

// Імпортуємо всі фото з папки /src/assets/images
const imagesModules = import.meta.glob(
  "/src/assets/images/gallery-photos/*.{jpg,jpeg,png,svg}",
  { eager: true },
) as Record<string, { default: string }>;
const imagePaths: string[] = Object.values(imagesModules).map(
  (img) => img.default,
);

export type PhotoType = {
  src: string;
  caption: string;
};

// Функція для перемішування масиву
const shuffleArray = <T,>(array: T[]): T[] => {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};

// Перемішуємо фото та побажання
const shuffledImages = shuffleArray(imagePaths);
const shuffledWishes = shuffleArray(valentinesWishes);

const count = Math.min(shuffledImages.length, shuffledWishes.length);

export const photos: PhotoType[] = [
];

for (let i = 0; i < count; i++) {
  photos.push({
    src: shuffledImages[i],
    caption: shuffledWishes[i],
  });
}
