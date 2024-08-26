import React, { useState, useEffect } from "react";

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
            firstImage: '/katrina_cory.jpg',
            personTitle: 'Katrina & Cory',
            bio: "Hey, I’m Cory. I moved to the UP from the greater Milwaukee area in 2017 when Katrina and I got married. We started Delta Door & Dock in October of 2022 but I’ve been working on garage doors for over 10 years. I love spending time with my wife and our son Alden and our 3 dogs. Hey, I’m Katrina. I was born and raised in Delta County. I spent 19 years at the Escanaba Sherwin-Williams paint store working my way up from a part-time position to manager. I love playing guitar and spending time with Cory and Alden and relaxing at home with our 3 dogs."
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

                        <div>
                            <h2 >{pair.personTitle}</h2>
                            {isMobile && <button onClick={() => handleClick(pair)}>Learn more</button>}
                        </div>
                    </div>
                ))}
            </div>

            {/* Modal */}
            {activePerson && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="bg-white p-4 rounded-lg shadow-lg">
                        <h2>{activePerson.personTitle}</h2>
                        <p>{activePerson.bio}</p>
                        <button onClick={closeModal}>Close</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default HeadshotCircle;
