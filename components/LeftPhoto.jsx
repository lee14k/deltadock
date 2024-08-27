import ArchShape from "./ArchShape";
import Image from "next/image";
import Link from "next/link";
import { Libre_Caslon_Display } from "next/font/google";
import CheckIcon from '@mui/icons-material/Check';
const libre = Libre_Caslon_Display({ subsets: ["latin"], weight: "400" });

export default function LeftPhoto() {
  return (
    <div className="grid lg:grid-cols-2">
      <div className="grid grid-cols-1">
        <ArchShape imageSrc="/dd_doors1.jpeg" patternId="uniquePattern3"/>
        <div className="flex justify-center items-center" >
          <Link href="/contact">
            <button
                className={`border-2 border-doorange rounded-full hover:bg-white text-white text-4xl lg:text-6xl font-bold my-12 bg-doorange hover:text-doorange transition-colors duration-300 ${libre.className} py-12 px-32 w-full`}>
              Call us today!
            </button>
          </Link>
        </div>


      </div>
      <div className="flex flex-col gap-12">
        <h1 className={`${libre.className} text-4xl lg:text-8xl text-blue-900 font-bold mx-10 text-center mt-4`}>
        American Made, High Quality Doors
        </h1>

        <p className={`${libre.className} text-xl lg:text-4xl`}>
          Need it custom painted to match your house?
        </p>
        <div className="flex gap-12 text-2xl">
          <CheckIcon className="text-orange-500 text-5xl"/>         <p className="text-2xl">Proudly using Sherwin-Williams paints
          for a superior finish.</p>
        </div>
        <p className={`${libre.className} text-xl lg:text-4xl`}>
          Opener making funny noises?
        </p>
        <div className="flex gap-12 text-2xl"><CheckIcon className="text-orange-500 text-5xl"/>        <p className="text-2xl"> We
          can get them running or replace them.</p>

        </div>
        <p className={`${libre.className} text-xl lg:text-4xl`}>
          Can you see light from the side or bottom of the door?
        </p>
        <div className="flex gap-12 text-2xl"><CheckIcon className="text-orange-500 text-5xl"/>             <p
            className="text-2xl">We have weatherstrip and bottom seals to keep the wind and weather out.</p>


        </div>
        <p className={`${libre.className} text-xl lg:text-4xl`}>
          Already bought your door or opener?
        </p>


        <div className="flex gap-12 text-2xl"><CheckIcon className="text-orange-500 text-5xl"/>              <p
            className="text-2xl">Let our skilled technicians do the labor for you!</p>


        </div>
      </div>
      <div>

      </div>
    </div>
  );
}
