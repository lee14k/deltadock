import ArchShape from "./ArchShape";
import Image from "next/image";
import Link from "next/link";
import { Libre_Caslon_Display } from "next/font/google";
const libre = Libre_Caslon_Display({ subsets: ["latin"], weight: "400" });

export default function HomeHeader() {
  return (
    <div className="lg:grid lg:grid-cols-2 pb-24 gap-24">
      <div className="mt-24">
        <ArchShape imageSrc="/dd_homepg.jpg" patternId="uniquePattern2" />
        <div className="mt-4 flex justify-center flex flex-col justify-center items-center">
            <span className={`${libre.className} text-4xl font-bold`}>Partnering with:</span>
          <img src="/haas-door-logo.jpeg" alt="Haas Garage Door Logo" className="w-48 h-auto" />
        </div>
      </div>
      <div className="flex flex-col gap-12">
        <div className="">
          <Image
            src="/logo-dd.png"
            width={600}
            height={600}
          />
        </div>

        <div className="lg:ml-0 my-4 lg:grid lg:grid-cols-1 flex flex-col justify-center items-center">  <h1 className={`${libre.className} lg:text-left text-center font-bold text-6xl lg:text-8xl text-bold text-blue-900`}>Quality Doors, Professional Service</h1>
            <Link href="/contact">
                <button
                    className={`border-2 border-doorange rounded-full text-doorange text-4xl lg:text-6xl p-10 lg:w-full font-bold my-12 hover:bg-doorange hover:text-white transition-colors duration-300 ${libre.className}`}
                >
                    Contact Us
                </button>

            </Link>
        </div>

      </div>
    </div>
  );
}
