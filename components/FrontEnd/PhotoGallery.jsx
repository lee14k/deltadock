export default function PhotoGallery() {
  const images = [
    { src: "/deck-9855.jpg", heightClass: "h-auto" },
    { src: "/lrbm.jpeg", heightClass: "h-72" },
    { src: "/risotto-9876.jpg", heightClass: "h-auto" },
    { src: "/tablesetbm.jpeg", heightClass: "h-72" },
    { src: "/Table-Spread-8496.jpg", heightClass: "h-auto" },
    { src: "/bmroom.png", heightClass: "h-auto" },
    { src: "/beachbm.jpeg", heightClass: "h-64" },

    { src: "/bmstuff.png", heightClass: "h-72" },
    { src: "/foodshot.jpeg", heightClass: "h-auto" },
    { src: "/roseroom.jpeg", heightClass: "h-72" },
    { src: "/ribs.jpeg", heightClass: "h-auto" },
    { src: "/keks.jpeg", heightClass: "h-72" },
    { src: "/rroombm.jpeg", heightClass: "h-64" },



    
  ];

  return (
    <div className="p-4">
      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
        {images.map((image, index) => (
          <div key={index} className={`break-inside-avoid ${image.heightClass}`}>
            <img className="w-full h-full object-cover rounded-lg" src={image.src} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
}
