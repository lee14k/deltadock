import ArchShape from "./ArchShape";
import Image from "next/image";
import Link from "next/link";
import { Libre_Caslon_Display } from "next/font/google";
const libre = Libre_Caslon_Display({ subsets: ["latin"], weight: "400" });

export default function HomeHeader() {
  return (
    <div className=" lg:grid lg:grid-cols-2 homeheaderbg pb-24 gap-24">
      <div className="">
          <ArchShape imageSrc="/dd_homepg.jpg" patternId="uniquePattern2" />

      </div>

      <div className="flex flex-col gap-12">
        <Image
        src='/dddlogo.png'
        alt='logo'
        width={600}
        height={600}
        className=" "
        />
        <div className="lg:ml-12 my-4 lg:grid lg:grid-cols-1 flex flex-col justify-center items-center">  <h1 className={`${libre.className} lg:text-left text-center font-bold text-6xl lg:text-8xl text-bold text-blue-900`}>Quality Doors, Professional Service</h1>
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
