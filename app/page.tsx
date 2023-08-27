"use client"
import React, { useState, useEffect } from 'react';

import Image from 'next/image'
import data from './assets/confetti.json';
import './globals.css'
import Loading from '@/components/Loading';
 import Data from './assets/confetti.json'
import Complete from '@/components/Complete';

const App = () => {
  const [state, setState] = useState(false);
  const [cat, setCat] = useState('');
  const [done, setDone] = useState(undefined);

  useEffect (() => {
    getCat ();
    }, []);

    const getCat = () => {
      setDone(undefined);
      setTimeout(() => {
        fetch('https://dog.ceo/api/breeds/image/random')
        .then(res => res.json())
        .then(data => {
          setCat(data.message); // Extract the image URL from the response
          setDone(true);


        
        });
      }, 1200);
    }

  return (

    
    
    <div
    className='text-3xl'
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 200,
      }}>

        <div>
         <h3>Få ett tilfeldig Hunde bilde!!!</h3>
       </div>
    



       <button onClick={getCat}
       className="from-current mt-3 z-30 px-5 py-5 border rounded-lg shadow-lg hover:px-10 hover:text-4xl
       bg-amber-400 transition-all text-white">Trykk Meg</button>
       <div className='cat-pic'>
        {!done ? (
          <Loading />
        ) : (
           <img src={cat} alt="Dog Image" width={300} height={300} className="rounded-xl mt-5"/>
          
        )}
        
       </div>

       
    </div>
  );
};

export default App;
