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
    // add more URLs as needed
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
            <div className="slideshowcontainer flex relative justify-center items-center  ">

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
