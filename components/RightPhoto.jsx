import ArchShape from "./ArchShape";
import Image from "next/image";
import Link from "next/link";
import GoogleReviews from "./GoogleReviews";
import { Libre_Caslon_Display } from "next/font/google";
const libre = Libre_Caslon_Display({ subsets: ["latin"], weight: "400" });

export default function RightPhoto() {
  return (
    <div className="grid lg:grid-cols-2 three-icon-home">
      <div>
        <h1 className={`${libre.className} font-bold my-4 text-6xl lg:text-8xl text-white text-center mt-4`}>
Don't just take our word for it!        </h1>
        <GoogleReviews />
      </div>
      <div className="grid grid-cols-1 pb-12">
          <ArchShape imageSrc="/dd-reviews.jpg" patternId="uniquePattern1" />
          <div className="mx-4 lg:pl-12">
              <Link href="/our-team">
                  <button
                      className={`border-2 border-doorange rounded-full text-white text-4xl font-bold hover:bg-doorange transition-colors duration-300 ${libre.className} py-6 px-6 `}>Learn
                      more about our family owned and operated business
                  </button>
              </Link>
          </div>


      </div>
    </div>
  );
}
