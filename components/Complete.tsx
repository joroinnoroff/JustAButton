import React from 'react';
import Lottie from 'lottie-react';
import confettiAnimation from '../app//assets/confetti.json';

interface CompleteProps {
  onFetchComplete: () => void;
  done: boolean;
}

const Complete: React.FC<CompleteProps> = ({ onFetchComplete, done }) => {
  if (done) {
    onFetchComplete();
  }

  return (
    <div>
      {/* ... Other JSX ... */}
      <Lottie animationData={confettiAnimation} width={350} height={350} />
    </div>
  );
};

export default Complete;
