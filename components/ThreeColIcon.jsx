import { Libre_Caslon_Display } from "next/font/google";
const libre = Libre_Caslon_Display({ subsets: ["latin"], weight: "400" });

export default function ThreeColIcon() {
  const groups = [
    "./garage-door-icon-one.png",
    "./garage-door-icon-two.png",
    "./garage-door-icon-three.png",
  ]; 

  return (
    <div className="three-icon-home text-white flex flex-col justify-center items-center gap-12 ">
        <h1 className={`${libre.className} text-7xl`}>We have you covered!</h1>
        <p>Copy</p>
        <div className="grid lg:grid-cols-3 gap-24 lg:gap-36 mb-24">
      {groups.map((icon, index) => (
        <div key={index}>
          <div className=""></div>
          <img src={icon} alt={`Icon ${index + 1}`} />
          <h2>Corresponding Text</h2>
        </div>
      ))}
      </div>
    </div>
  );
}
