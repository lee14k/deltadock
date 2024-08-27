import Navbar from "@/components/FrontEnd/Navbar";
import Footer from "@/components/FrontEnd/Footer";
import ArchShape from "../components/ArchShape";
import Image from "next/image";
import Link from "next/link";
import { Libre_Caslon_Display } from "next/font/google";

const libre = Libre_Caslon_Display({ subsets: ["latin"], weight: "400" });
export default function Openers () {
    return (
        <div className="gradientpaletoorange">
            <Navbar/>
            <h1></h1>
            <div className="grid lg:grid-cols-2">
      <div className="">
        <ArchShape imageSrc="/dd_openers.jpg" patternId="dd-openers" />
      </div>
      <div className="flex flex-col gap-12 ">
        <h1 className={`${libre.className} text-4xl lg:text-8xl text-blue-900 font-bold`}>
        Openers
        </h1>
        <p className="text-lg lg:text-xl">
          Need it custom painted to match your house? Proudly using Sherwin-Williams paints for a superior finish.
        </p>
        <p className="text-lg lg:text-xl">
          Opener making funny noises? We can get them running or replace them.
        </p>
        <p className="text-lg lg:text-xl">
          Can you see light from the side or bottom of the door? We have weatherstrip and bottom seals to keep the wind and weather out.
        </p>
        <p className="text-lg lg:text-xl">
          Already bought your door or opener? Let our skilled technicians do the labor for you!
        </p>
      </div>
    </div>
            <Footer/>
        </div>
    )
}