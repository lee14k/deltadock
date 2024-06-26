import { Libre_Caslon_Display } from "next/font/google";
const libre = Libre_Caslon_Display({ subsets: ["latin"], weight: "400" });

export default function ThreeColIcon() {
  const groups = [
    "./garage-door-icon-one.png",
    "./garage-door-icon-two.png",
    "./garage-door-icon-three.png",
  ]; 

  const headings = ["Quality Doors", "Professional Service", "Locally Founded"];
  const descriptions = [
    "Dealers of Haas Door, Clopay, American Overhead Doors, Ideal Door, Hormann, C.H.I Overhead Doors, Lift Master, and Manaras Openers.",
    "We have 3 full-time skilled service technicians",
    "Formerly known as Delta Door Co., founded in 1988, we re-branded as Delta Door & Dock in October 2022 when we purchased the company.",
  ];

  return (
    <div className="three-icon-home text-white flex flex-col justify-center items-center gap-12">
      <h1 className={`${libre.className} text-7xl text-center`}>We have you covered!</h1>
      <p className={`${libre.className} mx-48 text-center text-2xl`}>We service, install, and repair overhead garage doors, openers, and loading docks for the residential and commercial customers within a 2-hour radius of Escanaba, MI</p>
      <div className="grid lg:grid-cols-3 gap-24 lg:gap-36 mb-24">
        {groups.map((icon, index) => (
          <div key={index} className="text-center">
            <img src={icon} alt={`Icon ${index + 1}`} className="mx-auto mb-4" />
            <h4 className={`${libre.className} text-5xl font-bold mb-2`}>{headings[index]}</h4>
            <p className={`${libre.className} text-2xl mx-16 text-center`}>{descriptions[index]}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
