import ReactBeforeSliderComponent from "react-before-after-slider-component";
import React from "react";

function HeadshotCircle(props) {
    const headshots = [
        {
            firstImage:'/katrina_cory.jpg' ,
            personTitle:'Katrina & Cory'
        },
        {
            firstImage: '/forrest.jpg',
            personTitle:'Forrest'
        },
        {
            firstImage: '/spencer.jpg' ,
            personTitle:'Spencer'
        },
        {
            firstImage: '/brayden.jpg' ,
            personTitle:'Brayden'
        },
    ];
    return (
        <div className="grid lg:grid-cols-4 gap-4">
            {headshots.map((pair, index) => (
                <div className="flex flex-col justify-center items-center"><div key={index} className='headshotcircle object-contain' style={{
                    backgroundImage: `url(${pair.firstImage})`
                }}></div>

                    <h2>{pair.personTitle}</h2>
                    <button>Learn more</button>
                </div>
            ))}

        </div>
    );
}

export default HeadshotCircle;