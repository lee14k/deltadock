import React, { useState, useEffect } from "react";
import { Libre_Caslon_Display } from "next/font/google";
const libre = Libre_Caslon_Display({ subsets: ["latin"], weight: "400" });
function HeadshotCircle(props) {
    const [isMobile, setIsMobile] = useState(false);
    const [activePerson, setActivePerson] = useState(null); // Track which person's modal is active

    useEffect(() => {
        // Function to check the window width and set the state
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 850);
        };

        // Initial check
        handleResize();

        // Event listener for window resize
        window.addEventListener('resize', handleResize);

        // Cleanup listener on component unmount
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const headshots = [
        {
            firstImage: '/7953-Katrina-Sitting.png',
            personTitle: 'Katrina',
            bio: "I was born and raised in Delta County.  I worked a few waitressing jobs after high school but ultimately started a career at Sherwin Williams paint store in Escanaba in 2004.  After working my way up through part-time positions to assistant manager to manager and after many discussions with Cory, I finally made the leap to prioritize our family and our new business; I “retired” in February of 2024 from Sherwin Williams and now work full time for Delta Door & Dock. I still use my knowledge of paints and colors by custom painting overhead garage doors in the summertime."
},
        {
            firstImage: '/3966-Corey-Nature.jpg',
            personTitle: 'Cory',
            bio: "I’m Cory. I moved to the UP from the greater Milwaukee area in 2017 when Katrina and I got married. We started Delta Door & Dock in October of 2022 but I’ve been working on garage doors for over 10 years. I love spending time with my wife Katrina and our son Alden and our 3 dogs. "
        },
        {
            firstImage: '/forrest.jpg',
            personTitle: 'Forrest',
            bio: "\n" +
                "I’ve been in the garage door industry since 2016. Since moving to the UP 2 years ago, I’ve had the privilege of working at Delta Door and Dock. I enjoy spending time with my wife and baby boy. My hobbies include hunting, fishing, and working on anything with an engine"
        },
        {
            firstImage: '/brayden.jpg',
            personTitle: 'Brayden',
            bio: "I’ve been with Delta Door and Dock since they opened in 2022, but I have been in the garage door industry since 2019. In my free time, you can find me golfing with my girlfriend, camping with my family, or on the lake fishing!"
        },
    ];

    const handleClick = (person) => {
        setActivePerson(person); // Set the active person to show their modal
    };

    const closeModal = () => {
        setActivePerson(null); // Close the modal
    };

    return (
        <div>
            <div className="grid lg:grid-cols-4 gap-4">
                {headshots.map((pair, index) => (
                    <div key={index} className="flex flex-col justify-center items-center">
                        <div onClick={() => handleClick(pair)} className='headshotcircle object-contain' style={{
                            backgroundImage: `url(${pair.firstImage})`
                        }}></div>

                        <div className="flex flex-col justify-center items-center">
                            <h2 className={`text-4xl font-bold tracking-tight text-gray-900  ${libre.className} font-bold`} >{pair.personTitle}</h2>
                            {isMobile && <button onClick={() => handleClick(pair)} className={`border-2 border-doorange rounded-full hover:bg-white text-white text-l lg:text-xl font-bold py-2 px-12 bg-doorange hover:text-doorange transition-colors duration-300 ${libre.className} w-full`}>Learn more</button>}
                        </div>
                    </div>
                ))}
            </div>

            {/* Modal */}
            {activePerson && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50  ">
                    <div className="bg-white p-4 rounded-lg shadow-lg lg:w-1/4  ">
                        <h2 className={`text-4xl font-bold tracking-tight text-gray-900  ${libre.className} font-bold`}>{activePerson.personTitle}</h2>
                        <p className="text-xl my-4">{activePerson.bio}</p>
                        <button onClick={closeModal} className={`border-2 border-doorange rounded-full hover:bg-white text-white text-l lg:text-xl font-bold py-2 px-12 bg-doorange hover:text-doorange transition-colors duration-300 ${libre.className} w-2/4 flex justify-center items-center  my-2"`} >Close</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default HeadshotCircle;
