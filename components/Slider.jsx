import React from 'react';
import ReactBeforeSliderComponent from 'react-before-after-slider-component';
import 'react-before-after-slider-component/dist/build.css';

const imagePairs = [
    {
        firstImage: { imageUrl: '/dd_custom_paint_1-min.jpg' },
        secondImage: { imageUrl: '/dd-custom-paint-2-min.jpg' }
    },
    {
        firstImage: { imageUrl: '/dd_before8.jpeg' },
        secondImage: { imageUrl: '/dd_after8.jpeg' }
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
        firstImage: { imageUrl: '/dd_before5.jpeg' },
        secondImage: { imageUrl: '/dd_after5.jpeg' }
    },

];

export default function Sliders() {
    return (
        <div className="grid grid-cols-4 gap-4 ">
            {imagePairs.map((pair, index) => (
                <div key={index} className='slider-item'>
                    <ReactBeforeSliderComponent
                        firstImage={pair.firstImage}
                        secondImage={pair.secondImage}
                    />
                </div>
            ))}
        </div>
    );
}
