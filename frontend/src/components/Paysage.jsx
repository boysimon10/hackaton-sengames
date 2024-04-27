import React from 'react';
import Lottie from 'lottie-react';
import AnimationData from '../assets/paysage.json';

function Paysage() {
  return (
    <div className='h-72'>
      <div className='max-h-full '>
        <Lottie animationData={AnimationData} style={{height : "300px", minWidth : "100%"}}/>  
      </div>
    </div>
  );
}

export default Paysage;
