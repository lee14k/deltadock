import ArchShape from "./ArchShape";
import Image from "next/image";
import Link from "next/link";
import { Libre_Caslon_Display } from "next/font/google";
const libre = Libre_Caslon_Display({ subsets: ["latin"], weight: "400" });

export default function HomeHeader() {
  return (
    <div className="grid lg:grid-cols-2 homeheaderbg pb-24">
      <div>
        <ArchShape />
      </div>
      <div className="flex flex-col gap-12">
        <Image
        src='/dddlogo.png'
        alt='logo'
        width={500}
        height={500}
        />
        <h1 className={`${libre.className} text-8xl text-bold text-blue-900`}>Quality doors, professional service</h1>
        <button className={`border-2 border-doorange rounded-full	text-doorange text-6xl p-4 w-1/2 ${libre.className} `}>
            Contact Us
        </button>
      </div>
    </div>
  );
}
