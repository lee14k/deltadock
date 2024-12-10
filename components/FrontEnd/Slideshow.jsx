'use client'
import React, { useState, useEffect } from "react";
import Image from "next/image";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
const images = [
    './dd_doors1.jpeg', // replace with your image URLs
    './dd_doors2.jpeg',
    './dd_doors3.jpeg',
    './dd_doors4.jpeg',
    './dd-custom-paint-3.jpg',
    './dd_new_slide1.jpg',
    './dd_new_slide2.jpg',
    './dd_new_slide3.jpg',
    './dd_new_slide4.jpg',
    './dd_new_slide5.jpg',
    './dd-new-after.jpg',
    'new-slide-dd-2.jpeg',
    'newslide-1-dd.jpeg',
    'newslide-dd-3.jpeg',
    'newslide-dd-4.jpeg',
    'newslide-dd-5.jpeg',
    'newslide-dd-6.jpeg',
    'newslide-dd-7.jpeg',
    'rolling-door.jpeg',
];

function Homeslider() {
    const [activeIndex, setActiveIndex] = useState(0);
    const goToPrevSlide = () => {
        setActiveIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    const goToNextSlide = () => {
        setActiveIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };
/*
    useEffect(() => {



        const interval = setInterval(() => {
            setActiveIndex((prevIndex) =>
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );
        }, 3000); // Change slide every 60 seconds

        return () => clearInterval(interval);
    }, [activeIndex]); // add activeIndex as dependency to re-run useEffect when activeIndex changes
*/

    return (
        <div className="bg-inherit flex">
            <button className="arrow left-arrow" onClick={goToPrevSlide}>
                <ArrowBackIosIcon sx={{ fontSize: 50 }} />
            </button>
            <div className="w-[30rem] h-[25rem] lg:w-[50rem] lg:h-[30rem] flex relative justify-center items-center  ">

                {images.map((image, index) => (
                    <div
                        key={index}
                        className={`slide ${index === activeIndex ? "active" : ""}`}
                        style={{backgroundImage: `url(${image})`}}
                    />
                ))}
                {/*        <div className="indicator">
                    {images.map((_, index) => (
                        <div
                            key={index}
                            className={`indicator-dot ${index === activeIndex ? "active" : ""}`}
                        />
                    ))}
                </div>*/}

            </div>
            <button className="arrow right-arrow" onClick={goToNextSlide}>
<ArrowForwardIosIcon sx={{ fontSize: 50 }}/>            </button>
        </div>
    );
}

export default Homeslider;
