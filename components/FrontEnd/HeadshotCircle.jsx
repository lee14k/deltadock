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
            bio: "This is the bio for Katrina & Cory."
        },
        {
            firstImage: '/forrest.jpg',
            personTitle: 'Forrest',
            bio: "This is the bio for Forrest."
        },
        {
            firstImage: '/spencer.jpg',
            personTitle: 'Spencer',
            bio: "This is the bio for Spencer."
        },
        {
            firstImage: '/brayden.jpg',
            personTitle: 'Brayden',
            bio: "This is the bio for Brayden."
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
