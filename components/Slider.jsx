import React from 'react';
import ReactBeforeSliderComponent from 'react-before-after-slider-component';
import 'react-before-after-slider-component/dist/build.css';

const FIRST_IMAGE = {
    imageUrl: '/installdd.jpg'
  };
  const SECOND_IMAGE = {
    imageUrl: '/repairdd.jpp'
  };

export default function Slider () {
    return (
<div className='w-1/3'>

  <ReactBeforeSliderComponent
      firstImage={FIRST_IMAGE}
      secondImage={SECOND_IMAGE}
  />

    </div>
    )
}