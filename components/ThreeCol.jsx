export default function ThreeCol() {
  const groups = [1, 2, 3, 4]; // Array to map over, adjust as needed
  const images = [
    "/repairdd.jpg",
    "/loadingdd.jpg",
    "installdd.jpg",
    "installdd.jpg",
  ];
  const headings = ["Overhead Garage Door Maintenance & Installation", "Openers", "Custom Painting", "Commercial Doors"];
  const descriptions = [
    "We offer a wide range of repair services for your garage door. Our team of experts can fix any issue you may have with your garage door.",
    "We offer a wide range of loading services for your garage door. Our team of experts can fix any issue you may have with your garage door.",
    "We offer a wide range of installation services for your garage door. Our team of experts can fix any issue you may have with your garage door.",
    "We offer a wide range of installation services for your garage door. Our team of experts can fix any issue you may have with your garage door.",
  ];

  return (
    <div className="flex flex-col justify-center ourservices py-24">
      <h1 className="text-center text-7xl font-bold mb-8">Our Services</h1>
      <div className="grid lg:grid-cols-4 gap-2">
        {groups.map((group, index) => (
          <div key={index} className="relative flex flex-col items-center" style={{ width: '600px', height: '650px' }}>
            <svg
              width="700"
              height="650"
              viewBox="0 0 700 650"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute"
              style={{ top: '0px', left: '50%', transform: 'translateX(-50%)', zIndex: 0 }}
            >
              <defs>
                <pattern id={`img${index}`} patternUnits="userSpaceOnUse" width="700" height="650">
                  <image href={images[index]} x="0" y="0" width="700" height="650" />
                </pattern>
              </defs>
              <polygon points="75,200 350,30 625,200 625,550 75,550" fill={`url(#img${index})`} stroke="#eb6200" strokeWidth="3" />
            </svg>
            <div
              className="flex flex-col justify-center items-center"
              style={{
                zIndex: 1,
                width: '50%',
                height: '100%',
                position: 'relative',
                top: '0px',
                left: '0px',
                padding: '10px',
                boxSizing: 'border-box',
              }}
            >
              <div className="text-center mt-4 text-white p-4 rounded bg-black bg-opacity-50">
                <h4 className="text-4xl font-bold">{headings[index]}</h4>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
