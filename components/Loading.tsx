import React from 'react'
import Lottie from 'lottie-react';
import animationData from '../app/assets/catspinner.json';
const Loading = () => {
  return (
    <div className=''
   >
            <Lottie animationData={animationData}  width={100} style={{ width: '150px', height: '150px' }} // You can also set width and height here
            height={100}/>
          </div>
  )
}

export default Loading