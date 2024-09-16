import React from 'react';
import ReactBeforeSliderComponent from 'react-before-after-slider-component';
import 'react-before-after-slider-component/dist/build.css';

const imagePairs = [
    {
        secondImage: { imageUrl:'/dd-custom-paint-2-min.jpg'  },
        firstImage: { imageUrl: '/dd_custom_paint_1-min.jpg' }

    },
    {
        secondImage: { imageUrl: '/dd_before8.jpeg' },
        firstImage: { imageUrl: '/dd_after8.jpeg' }
    },
    {
        secondImage: { imageUrl: '/dd_before1.jpeg' },
        firstImage: { imageUrl: '/dd_after1.jpeg' }
    },
    {
        secondImage: { imageUrl: '/dd_before7.jpeg' },
        firstImage: { imageUrl: '/dd_after7.jpeg' }
    },
    {
        secondImage: { imageUrl: '/dd_before5.jpeg' },
        firstImage: { imageUrl: '/dd_after5.jpeg' }
    },
    {
        secondImage:{ imageUrl: '/dd-new-before.jpg' },
        firstImage: { imageUrl: '/dd-new-after.jpg' }
    },
    {
        secondImage:{ imageUrl: '/before-dd-11.jpeg' },
        firstImage: { imageUrl: '/after-dd-11.jpeg' }
    },
    {
        secondImage:{ imageUrl: '/before-dd-10.jpeg' },
        firstImage: { imageUrl: '/after-dd-10.jpeg' }
    },
    {
        secondImage:{ imageUrl: '/before-dd-12.jpeg' },
        firstImage: { imageUrl: '/after-dd-12.jpeg' }
    },
    {
        secondImage:{ imageUrl: '/before-dd-13.jpeg' },
        firstImage: { imageUrl: '/after-dd-13.jpeg' }
    }

];

export default function Sliders() {
    return (
        <div className="lg:grid lg:grid-cols-4 block lg:gap-2 ">
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
