import ArchShape from "./ArchShape";
import Image from "next/image";
import Link from "next/link";
import { Libre_Caslon_Display } from "next/font/google";

const libre = Libre_Caslon_Display({ subsets: ["latin"], weight: "400" });

export default function LeftPhoto() {
  return (
    <div className="grid lg:grid-cols-2">
      <div>
        <ArchShape />
      </div>
      <div className="flex flex-col gap-12">
        <h1 className={`${libre.className} text-4xl lg:text-8xl text-blue-900 font-bold`}>
          American made, high quality doors
        </h1>
        <p className="text-lg lg:text-xl">
          Need it custom painted to match your house? 
        </p>
        <p>Proudly using Sherwin-Williams paints for a superior finish.</p>
        <p className="text-lg lg:text-xl">
          Opener making funny noises?
        </p>
        <p> We can get them running or replace them.</p>
        <p className="text-lg lg:text-xl">
          Can you see light from the side or bottom of the door? 
        </p>
        <p>We have weatherstrip and bottom seals to keep the wind and weather out.</p>
        <p className="text-lg lg:text-xl">
          Already bought your door or opener? 
        </p>
        <p>Let our skilled technicians do the labor for you!</p>
      </div>
    </div>
  );
}
