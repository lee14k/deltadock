import { Libre_Caslon_Display } from "next/font/google";
import Link from "next/link";

const libre = Libre_Caslon_Display({ subsets: ["latin"], weight: "400" });

export default function ThreeCol() {
    const groups = [1, 2, 3];
    const images = [
        "/dd-overhead.jpg",
        "/dd_openers.jpg",
        "/dd-custom-paint-3.jpg",
    ];
    const headings = [
        "Residential Overhead Garage Doors",
        "Openers",
        "Custom Painting",
    ];
    const links = [
        "/overhead-garage-doors",
        "/openers",
        "/custom-painting",
    ];

    const groupsTwo = [4, 5];
    const headingsTwo = [
        "Commercial Overhead Garage Doors",
        "Loading Docks"
    ];
    const linksTwo = [
        "/commercial-doors",
        "/loading-docks",
    ];
    const shoes = [
        "/dd-commercial.jpeg",
        "/loadingdd.jpg"
    ];

    const getHeadingStyle = (heading) => {
        if (heading.toLowerCase().includes('overhead garage doors')) {
            return { marginLeft: '8.5rem', marginRight: '8.5rem' };
        }
        return {};
    };

    return (
        <div className="flex flex-col justify-center ourservices">
            <div className="grid lg:grid-cols-3">
                {groups.map((group, index) => (
                    <Link href={links[index]} key={index}>
                        <div className="relative flex flex-col justify-center items-center" style={{ width: "100%", maxWidth: "650px", height: "450px" }}>
                            <svg
                                width="100%"
                                height="100%"
                                viewBox="0 0 750 650"
                                xmlns="http://www.w3.org/2000/svg"
                                className="absolute"
                                style={{ top: '0px', left: '50%', transform: 'translateX(-50%)', zIndex: 0 }}
                            >
                                <defs>
                                    <pattern id={`img${index}`} patternUnits="userSpaceOnUse" width="100%" height="100%">
                                        <image href={images[index]} x="0" y="0" width="100%" height="100%" />
                                    </pattern>
                                </defs>
                                <polygon points="75,200 350,30 625,200 625,550 75,550" fill={`url(#img${index})`} stroke="#eb6200" strokeWidth="3" />
                            </svg>
                            <div
                                className="flex flex-col justify-center items-center"
                                style={{
                                    zIndex: 1,
                                    width: '100%',
                                    height: '100%',
                                    position: 'relative',
                                    top: '0px',
                                    right: '15px',
                                    padding: '0px',
                                    boxSizing: 'border-box',
                                }}
                            >
                                <div
                                    className="text-center mt-4 text-white lg:p-4 rounded bg-black bg-opacity-50 mx-24 lg:mx-0"
                                    style={getHeadingStyle(headings[index])}
                                >
                                    <h4 className={`font-bold ${libre.className} text-4xl font-bold`}>{headings[index]}</h4>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
            <div className="grid grid-cols-1 lg:flex lg:flex-shrink-0 lg:justify-center lg:items-center">
                {groupsTwo.map((group, index) => (
                    <Link href={linksTwo[index]} key={index}>
                        <div className="relative flex flex-col justify-center items-center flex-shrink-0 max-w-[650px] lg:min-w-[550px]" style={{ width: "100%", height: "450px" }}>
                            <svg
                                width="100%"
                                height="100%"
                                viewBox="0 0 750 650"
                                xmlns="http://www.w3.org/2000/svg"
                                className="absolute"
                                style={{ top: '0px', left: '50%', transform: 'translateX(-50%)', zIndex: 0 }}
                            >
                                <defs>
                                    <pattern id={`shoes${index}`} patternUnits="userSpaceOnUse" width="120%" height="100%">
                                        <image href={shoes[index]} x="-100" y="0" width="120%" height="110%" />
                                    </pattern>
                                </defs>
                                <polygon points="75,200 350,30 625,200 625,550 75,550" fill={`url(#shoes${index})`} stroke="#eb6200" strokeWidth="3" />
                            </svg>
                            <div
                                className="flex flex-col justify-center items-center w-full"
                                style={{
                                    zIndex: 1,
                                    width: '100%',
                                    height: '100%',
                                    position: 'relative',
                                    top: '0px',
                                    right: '15px',
                                    padding: '0px',
                                    boxSizing: 'border-box',
                                }}
                            >
                                <div
                                    className="text-center mt-4 text-white p-4 rounded bg-black bg-opacity-50"
                                    style={getHeadingStyle(headingsTwo[index])}
                                >
                                    <h4 className={`font-bold ${libre.className} text-4xl font-bold`}>{headingsTwo[index]}</h4>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}