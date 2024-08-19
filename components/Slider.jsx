import React from 'react';
import ReactBeforeSliderComponent from 'react-before-after-slider-component';
import 'react-before-after-slider-component/dist/build.css';

const imagePairs = [
    {
        firstImage: { imageUrl: '/dd_before8.jpg' },
        secondImage: { imageUrl: '/dd_after8.jpg' }
    },
    {
        firstImage: { imageUrl: '/dd_before1.jpeg' },
        secondImage: { imageUrl: '/dd_after1.jpeg' }
    },
    {
        firstImage: { imageUrl: '/dd_before7.jpeg' },
        secondImage: { imageUrl: '/dd_after7.jpeg' }
    },
    {
        firstImage: { imageUrl: '/dd_before6.jpeg' },
        secondImage: { imageUrl: '/dd_after6.jpeg' }
    },//fix this one
    {
        firstImage: { imageUrl: '/dd_before5.jpeg' },
        secondImage: { imageUrl: '/dd_after5.jpeg' }
    }
];

export default function Sliders() {
    return (
        <div className="sliders-container">
            {imagePairs.map((pair, index) => (
                <div key={index} className='w-1/3'>
                    <ReactBeforeSliderComponent
                        firstImage={pair.firstImage}
                        secondImage={pair.secondImage}
                    />
                </div>
            ))}
        </div>
    );
}
