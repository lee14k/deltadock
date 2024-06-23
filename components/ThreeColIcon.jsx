export default function ThreeColIcon() {
  const groups = [
    "./garage-door-icon-one.png",
    "./garage-door-icon-two.png",
    "./garage-door-icon-three.png",
  ]; 

  return (
    <div className="bg-blue-800">
        <h1>We have you covered!</h1>
        <p>Copy</p>
        <div className="grid lg:grid-cols-3 ">
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
