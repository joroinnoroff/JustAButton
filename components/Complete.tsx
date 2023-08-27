import React, { useRef, useState, useEffect } from 'react';
import Lottie from 'lottie-react';
import confettiAnimation from '../app/assets/confetti.json';

interface CompleteProps {
  onPlay: () => void;
}

const Complete: React.FC<CompleteProps> = ({ onPlay }) => {
  const animationRef = useRef<any>(null);
  const [playAnimation, setPlayAnimation] = useState(false);

  useEffect(() => {
    if (animationRef.current && playAnimation) {
      animationRef.current.play();
      onPlay();
    }
  }, [playAnimation, onPlay]);

  const handleAnimationClick = () => {
    setPlayAnimation(true);
  };

  return (
    <div onClick={handleAnimationClick}>
      <Lottie animationData={confettiAnimation} play={false} loop={false} ref={animationRef} />
    </div>
  );
};

export default Complete;
