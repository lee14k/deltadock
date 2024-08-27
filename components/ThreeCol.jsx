import { Libre_Caslon_Display } from "next/font/google";
import Link from "next/link";

const libre = Libre_Caslon_Display({ subsets: ["latin"], weight: "400" });

export default function ThreeCol() {
  const groups = [1, 2, 3, 4]; // Array to map over, adjust as needed
  const images = [
    "/installdd.jpg",
    "/installdd.jpg",
    "/installdd.jpg",
    "/installdd.jpg",
  ];
  const headings = [
    "Maintenance & Installation",
    "Openers",
    "Custom Painting",
    "Commercial Doors",
  ];
  const links =[
      "/overhead-garage-doors",
      "/openers",
      "/custom-painting",
      "/commercial-doors",
  ]

  return (
    <div className="flex flex-col justify-center ourservices ">

      <div className="grid lg:grid-cols-4">
        {groups.map((group, index) => (
            <Link href={links[index]}>
          <div key={index} className="relative flex flex-col items-center" style={{ width: "100%", maxWidth: "650px", height: "550px" }}>
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
                width: '60%',
                height: '100%',
                position: 'relative',
                top: '0px',
                right: '15px',
                padding: '0px',
                boxSizing: 'border-box',
              }}
            >
              <div className="text-center mt-4 text-white p-4 rounded bg-black bg-opacity-50">
                <h4 className={`font-bold ${libre.className} text-4xl font-bold`}>{headings[index]}</h4>
              </div>
            </div>
          </div>
            </Link>
        ))}
      </div>
    </div>
  );
}
