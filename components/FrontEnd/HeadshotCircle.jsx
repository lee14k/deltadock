import ReactBeforeSliderComponent from "react-before-after-slider-component";
import React from "react";

function HeadshotCircle(props) {
    const headshots = [
        {
            firstImage:'/brayden.jpg' ,
        },
        {
            firstImage: '/forrest.jpg',
        },
        {
            firstImage: '/spencer.jpg' ,
        },
        {
            firstImage: '/spencer.jpg' ,
        },
    ];
    return (
        <div className="grid grid-cols-4 gap-4">
            {headshots.map((pair, index) => (
                <div key={index}   className='headshotcircle object-contain'   style={{
                    backgroundImage: `url(${pair.firstImage})`
                }}>

                </div>
            ))}
        </div>
    );
}

export default HeadshotCircle;