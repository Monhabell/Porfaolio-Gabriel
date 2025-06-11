import React, { useState, useEffect } from "react";

const AnimatedCharacter = () => {
  const spriteSrc = import.meta.env.VITE_API_URL + "/spritesheet.png";
  
  const frameWidth = 700; // Ancho de cada frame
  const frameHeight = 700; // Alto de cada frame
  const frameDuration = 150; // Duración de cada frame en milisegundos
  const totalFrames = 4; // Número total de frames en el spritesheet (ajústalo)

  const [currentFrame, setCurrentFrame] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFrame((prevFrame) => (prevFrame + 1) % totalFrames);
    }, frameDuration);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        width: `${frameWidth}px`,
        height: `${frameHeight}px`,
        backgroundImage: `url(${spriteSrc})`,
        backgroundPosition: `-${currentFrame * frameWidth}px 0px`,
        backgroundSize: `${frameWidth * totalFrames}px auto`,
      }}
    />
  );
};

export default AnimatedCharacter;
