"use client"
import React, { useState } from 'react';
import './globals.css';
import Loading from '@/components/Loading';
import Complete from '@/components/Complete';

const App = () => {
  const [cat, setCat] = useState('');
  const [done, setDone] = useState(false);
  const [showComplete, setShowComplete] = useState(false);
  const [playCompleteAnimation, setPlayCompleteAnimation] = useState(false);

  const getCat = () => {
    setDone(false);
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(res => res.json())
      .then(data => {
        setCat(data.message);
        setDone(true);
        setShowComplete(true);
        setPlayCompleteAnimation(true); // Set to true when fetch is complete
      });
  };

  const handleFetchComplete = () => {
    setShowComplete(false);
    setPlayCompleteAnimation(true); // Trigger the animation play
  };

  return (
    <div className='text-3xl flex flex-col items-center mt-20 sm:mt-5'>
      <button
        onClick={getCat}
        className="from-current mt-3 z-30 px-5 py-5 border rounded-lg shadow-lg hover:px-10 hover:text-4xl
        bg-white text-neutral-700 transition-all hover:bg-white hover:text-black"
      >
        Trykk Meg
      </button>
      <div className='cat-pic'>
        {!done ? (
          <Loading />
        ) : (
          <img
            src={cat}
            alt="Dog"
            width={300}
            height={300}
            className="rounded-xl mt-5 shadow-lg"
          />
        )}
      </div>
      
   

      
      {playCompleteAnimation && (
        <Complete onPlay={handleFetchComplete} />
      )}
    </div>
  );
};

export default App;
